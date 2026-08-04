import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { createTrack } from './track.js';
import { buildF1Car, Vehicle, TEAM_COLORS } from './car.js';
import { makeAI, computeAIInput } from './ai.js';
import { createCrowd } from './crowd.js';
import { Input } from './controls.js';

// ANCHOR: [bootstrap] Renderer / scene / assets / race orchestration + loop.

const TOTAL_LAPS = 3;
const FIELD = 11; // player + 10 CPU

const el = (id) => document.getElementById(id);
const loader = el('loader'), bar = el('bar').firstElementChild, loadmsg = el('loadmsg');

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
el('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.3, 6000);
camera.position.set(0, 8, -16);

// lights (HDR provides ambient/IBL; sun gives shadows)
const sun = new THREE.DirectionalLight(0xfff4e0, 2.4);
sun.position.set(120, 200, 80);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 10; sun.shadow.camera.far = 600;
const sc = sun.shadow.camera;
sc.left = -180; sc.right = 180; sc.top = 180; sc.bottom = -180;
scene.add(sun, new THREE.HemisphereLight(0xbfd8ff, 0x2b3a22, 0.4));

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// ---------- asset loading ----------
const manager = new THREE.LoadingManager();
manager.onProgress = (url, loaded, total) => {
  bar.style.width = Math.round((loaded / total) * 100) + '%';
  loadmsg.textContent = 'Loading ' + url.split('/').pop();
};
const texLoader = new THREE.TextureLoader(manager);
const rgbe = new RGBELoader(manager);

const assets = {};
function loadAssets() {
  return new Promise((resolve) => {
    manager.onLoad = () => resolve();
    assets.diff = texLoader.load('./textures/asphalt_diff_4k.jpg');
    assets.nor = texLoader.load('./textures/asphalt_nor_4k.jpg');
    assets.rough = texLoader.load('./textures/asphalt_rough_4k.jpg');
    rgbe.load('./textures/sky_4k.hdr', (hdr) => { assets.sky = hdr; });
  });
}

let pmrem;
function applySky() {
  assets.sky.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = assets.sky;
  pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromEquirectangular(assets.sky).texture;
}

function roadTextureSet() {
  for (const t of [assets.diff, assets.nor, assets.rough]) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    t.repeat.set(1, 1);
  }
  assets.diff.colorSpace = THREE.SRGBColorSpace;
  return { map: assets.diff, normalMap: assets.nor, roughnessMap: assets.rough };
}

// ---------- race state ----------
let track, crowd, player, vehicles = [], input;
let state = 'menu';          // menu | countdown | racing | finished
let countdown = 0, raceClock = 0;
let contentGroup = new THREE.Group();
scene.add(contentGroup);

function buildRace(seed) {
  // tear down previous
  contentGroup.clear();
  vehicles = [];

  track = createTrack(roadTextureSet(), seed);
  contentGroup.add(track.group);

  crowd = createCrowd(track);
  contentGroup.add(crowd.group);

  const starts = track.getStartPositions(FIELD);
  // player starts at the back (P11)
  const playerMesh = buildF1Car(TEAM_COLORS[0], 0x0a0a0a);
  contentGroup.add(playerMesh);
  player = new Vehicle(track, playerMesh, true);
  player.placeAt(starts[FIELD - 1]);
  player.name = 'YOU';
  vehicles.push(player);

  for (let i = 0; i < FIELD - 1; i++) {
    const mesh = buildF1Car(TEAM_COLORS[(i + 1) % TEAM_COLORS.length], 0x101216);
    contentGroup.add(mesh);
    const v = new Vehicle(track, mesh, false);
    v.placeAt(starts[i]);
    v.maxSpeed = 84 + Math.random() * 8;
    makeAI(v, { skill: 0.82 + Math.random() * 0.16 });
    v.name = 'CPU ' + (i + 1);
    vehicles.push(v);
  }

  // snap camera behind player
  positionChaseCam(1);
}

// ---------- camera ----------
const _camTarget = new THREE.Vector3();
const _camPos = new THREE.Vector3();
function positionChaseCam(lerp) {
  const fwd = new THREE.Vector3(Math.sin(player.heading), 0, Math.cos(player.heading));
  _camPos.copy(player.pos).addScaledVector(fwd, -9).add(new THREE.Vector3(0, 4.2, 0));
  _camTarget.copy(player.pos).addScaledVector(fwd, 8).add(new THREE.Vector3(0, 1.2, 0));
  camera.position.lerp(_camPos, lerp);
  camera.lookAt(_camTarget);
}

// ---------- HUD ----------
function fmtTime(s) {
  if (!isFinite(s) || s <= 0) return '0:00.00';
  const m = Math.floor(s / 60);
  const sec = (s - m * 60).toFixed(2).padStart(5, '0');
  return `${m}:${sec}`;
}
function positionsSorted() {
  return [...vehicles].sort((a, b) => b.lapProgress - a.lapProgress);
}
function updateHUD() {
  el('kmh').textContent = Math.round(player.kmh);
  const moving = player.speed > 1;
  el('gear').textContent = moving ? Math.min(8, Math.floor(player.speed / player.maxSpeed * 8) + 1) : 'N';
  const order = positionsSorted();
  const p = order.indexOf(player) + 1;
  el('pos').innerHTML = `${p}<small>/${FIELD}</small>`;
  el('lap').innerHTML = `${Math.min(TOTAL_LAPS, Math.max(1, player.lap))}<small>/${TOTAL_LAPS}</small>`;
  const cur = state === 'racing' ? (performance.now() - player.lapStart) / 1000 : 0;
  el('curtime').textContent = fmtTime(cur);
  el('besttime').textContent = isFinite(player.bestLap) ? 'Best ' + fmtTime(player.bestLap) : 'Best —';
}

// ---------- race flow ----------
function startRace() {
  el('start').classList.remove('show');
  el('hud').classList.add('show');
  if (Input.isTouchDevice()) el('touch').classList.add('show');
  state = 'countdown';
  countdown = 3.0;
  player.lapStart = performance.now();
}

function finishRace() {
  state = 'finished';
  const order = positionsSorted();
  const place = order.indexOf(player) + 1;
  el('finishPlace').textContent = 'P' + place;
  const suffix = place === 1 ? 'Winner! Chequered flag is yours.' :
    place <= 3 ? 'On the podium. Strong drive.' : 'Good racing — try a new circuit.';
  el('finishSub').textContent = suffix +
    (isFinite(player.bestLap) ? `  Best lap ${fmtTime(player.bestLap)}.` : '');
  el('finish').classList.add('show');
}

// ---------- loop ----------
const clock = new THREE.Clock();
let paused = false;
function loop() {
  requestAnimationFrame(loop);
  let dt = clock.getDelta();
  if (dt > 0.05) dt = 0.05;
  raceClock += dt;

  if (crowd) crowd.update(raceClock);

  if (state === 'countdown') {
    countdown -= dt;
    const cd = el('countdown');
    if (countdown <= -0.7) {
      state = 'racing';
      cd.style.opacity = 0;
      player.lapStart = performance.now();
      vehicles.forEach(v => v.lapStart = performance.now());
    } else if (countdown <= 0) {
      cd.textContent = 'GO';
      cd.style.opacity = 1;
    } else {
      cd.textContent = Math.ceil(countdown);
      cd.style.opacity = 1;
    }
  }

  if (!paused && (state === 'racing' || state === 'countdown' || state === 'finished')) {
    const frozen = state === 'countdown';
    for (const v of vehicles) {
      let inp;
      if (v === player) {
        inp = frozen ? { throttle: 0, brake: 0, steer: 0 } : input.state();
      } else {
        inp = frozen ? { throttle: 0, brake: 0, steer: 0 } : computeAIInput(v, dt, player.lapProgress);
      }
      v.update(dt, inp);
      if (state === 'racing' && !v.finished && v.lap > TOTAL_LAPS) v.finished = true;
    }
    if (state === 'racing' && player.finished) finishRace();
    positionChaseCam(Math.min(1, dt * 6));
    updateHUD();
  }

  renderer.render(scene, camera);
}

// ---------- init ----------
async function init() {
  await loadAssets();
  applySky();
  buildRace((Math.random() * 1e9) | 0);

  input = new Input({
    onReset: () => { if (state === 'racing') { const s = track.getStartPositions(FIELD)[FIELD - 1]; player.placeAt(s); } },
    onPause: () => { if (state === 'racing') paused = !paused; },
  });

  el('startBtn').addEventListener('click', startRace);
  el('raceAgain').addEventListener('click', () => {
    el('finish').classList.remove('show');
    buildRace((Math.random() * 1e9) | 0);
    state = 'menu';
    el('hud').classList.remove('show');
    el('start').classList.add('show');
  });

  loader.classList.add('hidden');
  el('start').classList.add('show');
  loop();
}

init().catch((e) => {
  loadmsg.textContent = 'Error: ' + e.message;
  console.error(e);
});
