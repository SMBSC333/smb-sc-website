import * as THREE from 'three';

// ANCHOR: [track-gen] Procedural closed-loop circuit generator.
// Produces a random drivable track each call: road mesh, curbs, barriers,
// grass, start/finish line, a resampled centerline (AI waypoints + lap logic).

const ROAD_HALF = 7.5;      // half road width (units)
const CURB_W = 1.1;         // curb strip width
const WALL_H = 1.6;         // barrier height
const SAMPLES = 900;        // centerline resample resolution

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function curbTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#d21a1a'; g.fillRect(0, 0, 64, 64);
  g.fillStyle = '#f5f5f5'; g.fillRect(0, 0, 32, 64);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

function startLineTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  const n = 8, s = 256 / n;
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      g.fillStyle = (x + y) % 2 ? '#0a0a0a' : '#f2f2f2';
      g.fillRect(x * s, y * s, s, s);
    }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export function createTrack(roadTextures, seed = (Math.random() * 1e9) | 0) {
  const rnd = mulberry32(seed);
  const group = new THREE.Group();

  // --- 1. control points around a jittered ring ---
  const cpCount = 9 + Math.floor(rnd() * 5);   // 9..13 corners
  const baseR = 140 + rnd() * 60;
  const pts = [];
  for (let i = 0; i < cpCount; i++) {
    const a = (i / cpCount) * Math.PI * 2;
    const r = baseR * (0.62 + rnd() * 0.62);
    const jitter = (rnd() - 0.5) * 0.35;
    pts.push(new THREE.Vector3(
      Math.cos(a + jitter) * r,
      0,
      Math.sin(a + jitter) * r
    ));
  }
  const curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);

  // --- 2. resample centerline evenly by arc length ---
  const raw = curve.getSpacedPoints(SAMPLES);
  raw.pop(); // getSpacedPoints repeats first point at end for closed curves
  const center = raw;
  const N = center.length;

  const tangents = [], normals = [];
  for (let i = 0; i < N; i++) {
    const a = center[(i - 1 + N) % N], b = center[(i + 1) % N];
    const t = new THREE.Vector3().subVectors(b, a).normalize();
    tangents.push(t);
    normals.push(new THREE.Vector3(-t.z, 0, t.x)); // left normal (XZ)
  }

  // --- 3. road ribbon ---
  const roadGeo = new THREE.BufferGeometry();
  const pos = [], uv = [], idx = [];
  let dist = 0;
  for (let i = 0; i <= N; i++) {
    const k = i % N;
    if (i > 0) dist += center[k].distanceTo(center[(i - 1) % N]);
    const c = center[k], nr = normals[k];
    const l = new THREE.Vector3().copy(c).addScaledVector(nr, ROAD_HALF);
    const r = new THREE.Vector3().copy(c).addScaledVector(nr, -ROAD_HALF);
    pos.push(l.x, 0.02, l.z, r.x, 0.02, r.z);
    const v = dist / 12;
    uv.push(0, v, 1, v);
  }
  for (let i = 0; i < N; i++) {
    const a = i * 2, b = a + 1, cc = a + 2, d = a + 3;
    idx.push(a, b, cc, b, d, cc);
  }
  roadGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  roadGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  roadGeo.setIndex(idx);
  roadGeo.computeVertexNormals();
  const road = new THREE.Mesh(roadGeo, new THREE.MeshStandardMaterial({
    map: roadTextures.map,
    normalMap: roadTextures.normalMap,
    roughnessMap: roadTextures.roughnessMap,
    roughness: 1, metalness: 0,
  }));
  road.receiveShadow = true;
  group.add(road);

  // --- 4. curbs (both sides) ---
  const curbTex = curbTexture();
  function curbStrip(sign) {
    const geo = new THREE.BufferGeometry();
    const p = [], u = [], id = [];
    let d2 = 0;
    for (let i = 0; i <= N; i++) {
      const k = i % N;
      if (i > 0) d2 += center[k].distanceTo(center[(i - 1) % N]);
      const c = center[k], nr = normals[k];
      const inner = new THREE.Vector3().copy(c).addScaledVector(nr, sign * ROAD_HALF);
      const outer = new THREE.Vector3().copy(c).addScaledVector(nr, sign * (ROAD_HALF + CURB_W));
      p.push(inner.x, 0.05, inner.z, outer.x, 0.06, outer.z);
      const vv = d2 / 4;
      u.push(0, vv, 1, vv);
    }
    for (let i = 0; i < N; i++) {
      const a = i * 2;
      id.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(u, 2));
    geo.setIndex(id);
    geo.computeVertexNormals();
    return new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: curbTex, roughness: .7 }));
  }
  group.add(curbStrip(1), curbStrip(-1));

  // --- 5. barriers (instanced boxes hugging both edges) ---
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: .8 });
  const wallGeo = new THREE.BoxGeometry(1, WALL_H, 3.2);
  const step = 4;
  const perSide = Math.floor(N / step);
  const wall = new THREE.InstancedMesh(wallGeo, wallMat, perSide * 2);
  wall.castShadow = true; wall.receiveShadow = true;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0);
  let wi = 0;
  for (let side = 0; side < 2; side++) {
    const sign = side ? -1 : 1;
    for (let i = 0; i < perSide; i++) {
      const k = (i * step) % N;
      const c = center[k], nr = normals[k], t = tangents[k];
      const p = new THREE.Vector3().copy(c).addScaledVector(nr, sign * (ROAD_HALF + CURB_W + 0.9));
      p.y = WALL_H / 2;
      const ang = Math.atan2(t.x, t.z);
      q.setFromAxisAngle(up, ang);
      m.compose(p, q, new THREE.Vector3(1, 1, 1));
      wall.setMatrixAt(wi++, m);
    }
  }
  wall.instanceMatrix.needsUpdate = true;
  group.add(wall);

  // --- 6. grass ground ---
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x2f5d34, roughness: 1 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.02;
  ground.receiveShadow = true;
  group.add(ground);

  // --- 7. start / finish line ---
  const slTex = startLineTexture();
  slTex.repeat.set(6, 1);
  const sfGeo = new THREE.PlaneGeometry(ROAD_HALF * 2, 4);
  const sf = new THREE.Mesh(sfGeo, new THREE.MeshStandardMaterial({ map: slTex, roughness: .6 }));
  sf.rotation.x = -Math.PI / 2;
  const s0 = center[0], t0 = tangents[0];
  sf.position.set(s0.x, 0.04, s0.z);
  sf.rotation.z = -Math.atan2(t0.x, t0.z);
  group.add(sf);

  // --- 8. start grid positions (staggered 2-wide behind the line) ---
  function getStartPositions(count) {
    const out = [];
    for (let n = 0; n < count; n++) {
      const rowBack = Math.floor(n / 2) + 1;
      const sideSign = (n % 2) ? 1 : -1;
      const k = (N - rowBack * 8) % N;
      const idx2 = (k + N) % N;
      const c = center[idx2], nr = normals[idx2], t = tangents[idx2];
      const p = new THREE.Vector3().copy(c).addScaledVector(nr, sideSign * ROAD_HALF * 0.45);
      out.push({ pos: p, heading: Math.atan2(t.x, t.z), index: idx2 });
    }
    return out;
  }

  return {
    group, curve, center, tangents, normals,
    N, roadHalf: ROAD_HALF,
    startIndex: 0, getStartPositions,
    seed,
  };
}
