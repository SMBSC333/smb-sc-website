import * as THREE from 'three';

// ANCHOR: [crowd] Instanced 3D spectators lining the track that jump and wave.
// Bodies, heads and two arms are separate InstancedMeshes; per-frame matrices
// animate a hop (vertical bob) and arm waving, each figure with its own phase.

const SKIN = [0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524, 0xffdbac];
const SHIRTS = [0xe10600, 0x2b6cff, 0x18b06b, 0xf5c400, 0xff7a00, 0xffffff, 0x9b30ff, 0x00c2d1];

export function createCrowd(track) {
  const group = new THREE.Group();
  const figures = [];

  // place spectators just beyond the barriers, in 2 rows, along the whole lap
  const step = 7;
  const rows = 2;
  const dummy = new THREE.Object3D();
  const c = track.center, nr = track.normals, tg = track.tangents, N = track.N;

  for (let i = 0; i < N; i += step) {
    for (let side = -1; side <= 1; side += 2) {
      // cluster density varies so stands look natural
      if (Math.random() < 0.25) continue;
      for (let row = 0; row < rows; row++) {
        const lateral = track.roadHalf + 3.5 + row * 1.6 + Math.random() * 0.8;
        const along = (Math.random() - 0.5) * 4;
        const base = new THREE.Vector3()
          .copy(c[i])
          .addScaledVector(nr[i], side * lateral)
          .addScaledVector(tg[i], along);
        base.y = 0;
        const yaw = Math.atan2(-side * nr[i].x, -side * nr[i].z); // face the track
        figures.push({
          base, yaw,
          phase: Math.random() * Math.PI * 2,
          hopFreq: 3 + Math.random() * 3,
          hopAmp: 0.18 + Math.random() * 0.5,
          armFreq: 6 + Math.random() * 4,
          skin: SKIN[(Math.random() * SKIN.length) | 0],
          shirt: SHIRTS[(Math.random() * SHIRTS.length) | 0],
          scale: 0.9 + Math.random() * 0.35,
        });
      }
    }
  }

  const n = figures.length;
  const bodyMat = new THREE.MeshStandardMaterial({ roughness: .9 });
  const headMat = new THREE.MeshStandardMaterial({ roughness: .8 });
  const armMat = new THREE.MeshStandardMaterial({ roughness: .8 });

  const bodyGeo = new THREE.CapsuleGeometry(0.22, 0.7, 4, 8);
  const headGeo = new THREE.SphereGeometry(0.19, 10, 10);
  // arm pivots at the shoulder (top): shift geometry down so top sits at origin
  const armGeo = new THREE.CapsuleGeometry(0.07, 0.55, 3, 6);
  armGeo.translate(0, -0.32, 0);

  const bodies = new THREE.InstancedMesh(bodyGeo, bodyMat, n);
  const heads = new THREE.InstancedMesh(headGeo, headMat, n);
  const armsL = new THREE.InstancedMesh(armGeo, armMat, n);
  const armsR = new THREE.InstancedMesh(armGeo, armMat, n);
  for (const m of [bodies, heads, armsL, armsR]) { m.castShadow = true; m.frustumCulled = false; }

  const col = new THREE.Color();
  figures.forEach((f, i) => {
    bodies.setColorAt(i, col.setHex(f.shirt));
    heads.setColorAt(i, col.setHex(f.skin));
    armsL.setColorAt(i, col.setHex(f.skin));
    armsR.setColorAt(i, col.setHex(f.skin));
  });
  bodies.instanceColor.needsUpdate = true;

  group.add(bodies, heads, armsL, armsR);

  const _q = new THREE.Quaternion();
  const _qWave = new THREE.Quaternion();
  const _axisY = new THREE.Vector3(0, 1, 0);
  const _axisWave = new THREE.Vector3(1, 0, 0);
  const _shoulder = new THREE.Vector3();
  const _v = new THREE.Vector3();

  function update(time) {
    for (let i = 0; i < n; i++) {
      const f = figures[i];
      const hop = Math.max(0, Math.sin(time * f.hopFreq + f.phase)) * f.hopAmp;
      const s = f.scale;
      _q.setFromAxisAngle(_axisY, f.yaw);

      // body
      dummy.position.set(f.base.x, 0.95 * s + hop, f.base.z);
      dummy.quaternion.copy(_q);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      bodies.setMatrixAt(i, dummy.matrix);

      // head
      dummy.position.set(f.base.x, 1.55 * s + hop, f.base.z);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      heads.setMatrixAt(i, dummy.matrix);

      // arms wave up/down out to the sides
      const wave = Math.sin(time * f.armFreq + f.phase);
      for (const [arm, sign] of [[armsL, -1], [armsR, 1]]) {
        // shoulder position in local space, rotated by yaw
        _shoulder.set(sign * 0.28 * s, 1.35 * s + hop, 0);
        _v.copy(_shoulder).applyQuaternion(_q).add(new THREE.Vector3(f.base.x, 0, f.base.z));
        _qWave.setFromAxisAngle(_axisWave, -2.2 - wave * 0.6); // arms up, waving
        dummy.position.copy(_v);
        dummy.quaternion.copy(_q).multiply(_qWave);
        dummy.scale.setScalar(s);
        dummy.updateMatrix();
        arm.setMatrixAt(i, dummy.matrix);
      }
    }
    bodies.instanceMatrix.needsUpdate = true;
    heads.instanceMatrix.needsUpdate = true;
    armsL.instanceMatrix.needsUpdate = true;
    armsR.instanceMatrix.needsUpdate = true;
  }

  update(0);
  return { group, update, count: n };
}
