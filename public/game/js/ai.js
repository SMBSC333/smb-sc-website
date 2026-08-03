import * as THREE from 'three';

// ANCHOR: [cpu-ai] Waypoint-following AI with corner braking, a per-car racing-line
// offset, and rubber-banding to keep the pack close to the player.

function angleDiff(a, b) {
  let d = a - b;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}

export function makeAI(vehicle, opts = {}) {
  vehicle.ai = {
    skill: opts.skill ?? 0.9,           // 0..1
    lineBias: opts.lineBias ?? (Math.random() - 0.5) * 2, // preferred lateral offset
    wobblePhase: Math.random() * Math.PI * 2,
  };
}

const _tp = new THREE.Vector3();

export function computeAIInput(v, dt, playerProgress) {
  const t = v.track, N = t.N, ai = v.ai;

  // dynamic lookahead scales with speed
  const look = Math.round(6 + v.speed * 0.5);
  const aimIdx = (v.segment + look) % N;
  const brakeIdx = (v.segment + Math.round(look * 1.6)) % N;

  // racing-line lateral offset
  const nr = t.normals[aimIdx];
  const offset = ai.lineBias * (t.roadHalf * 0.55);
  _tp.copy(t.center[aimIdx]).addScaledVector(nr, offset);

  // steer toward target
  const desired = Math.atan2(_tp.x - v.pos.x, _tp.z - v.pos.z);
  const err = angleDiff(desired, v.heading);
  let steer = THREE.MathUtils.clamp(err * 1.6, -1, 1);

  // small human-like wobble
  ai.wobblePhase += dt * 2;
  steer += Math.sin(ai.wobblePhase) * 0.03;
  steer = THREE.MathUtils.clamp(steer, -1, 1);

  // corner speed: how sharp is the track ~ahead?
  const ta = t.tangents[v.segment];
  const tb = t.tangents[brakeIdx];
  const bend = Math.abs(angleDiff(Math.atan2(ta.x, ta.z), Math.atan2(tb.x, tb.z)));
  const cornerSpeed = THREE.MathUtils.clamp(v.maxSpeed * (1 - bend * 0.7), 16, v.maxSpeed);

  // rubber-band: trailing the player -> push harder; leading -> ease off a touch
  const gap = playerProgress - v.lapProgress;         // + means player ahead
  const band = THREE.MathUtils.clamp(1 + gap * 0.08, 0.9, 1.18) * (0.9 + ai.skill * 0.1);
  const target = cornerSpeed * band;

  let throttle = 0, brake = 0;
  if (v.speed < target) throttle = 1;
  else if (v.speed > target * 1.06) brake = THREE.MathUtils.clamp((v.speed - target) / 20, 0, 1);
  else throttle = 0.3;

  return { throttle, brake, steer };
}
