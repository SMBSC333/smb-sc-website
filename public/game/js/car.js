import * as THREE from 'three';

// ANCHOR: [f1-car] Detailed F1 car built from primitives + arcade vehicle physics.

function wheel(radius = 0.55, width = 0.42) {
  const g = new THREE.Group();
  const tire = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, width, 24),
    new THREE.MeshStandardMaterial({ color: 0x0b0b0b, roughness: .9 })
  );
  tire.rotation.z = Math.PI / 2;
  tire.castShadow = true;
  const rim = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.55, radius * 0.55, width + 0.02, 12),
    new THREE.MeshStandardMaterial({ color: 0xcfcfcf, metalness: .9, roughness: .3 })
  );
  rim.rotation.z = Math.PI / 2;
  g.add(tire, rim);
  return g;
}

export function buildF1Car(color = 0xe10600, accent = 0x111318) {
  const car = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color, metalness: .4, roughness: .35 });
  const darkMat = new THREE.MeshStandardMaterial({ color: accent, metalness: .5, roughness: .4 });
  const carbon = new THREE.MeshStandardMaterial({ color: 0x15171c, metalness: .3, roughness: .6 });

  // Monocoque (tapered chassis)
  const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.42, 3.4), bodyMat);
  chassis.position.y = 0.55; chassis.castShadow = true;
  car.add(chassis);

  // Nose cone (tapered toward front)
  const nose = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.32, 1.8, 12), bodyMat);
  nose.rotation.x = Math.PI / 2; nose.position.set(0, 0.5, 2.3); nose.castShadow = true;
  car.add(nose);

  // Sidepods
  for (const s of [-1, 1]) {
    const pod = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.5, 1.7), darkMat);
    pod.position.set(s * 0.72, 0.5, -0.2); pod.castShadow = true;
    // rounded outer edge
    const edge = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 1.7, 12), darkMat);
    edge.rotation.x = Math.PI / 2; edge.position.set(s * 0.98, 0.5, -0.2);
    car.add(pod, edge);
  }

  // Cockpit + halo
  const cockpit = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.35, 1.0), carbon);
  cockpit.position.set(0, 0.78, 0.55);
  car.add(cockpit);
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0xf4f4f4, roughness: .3 }));
  helmet.position.set(0, 1.02, 0.55); helmet.castShadow = true;
  car.add(helmet);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.045, 8, 20, Math.PI),
    new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: .5 }));
  halo.rotation.x = Math.PI / 2; halo.rotation.z = Math.PI; halo.position.set(0, 0.95, 0.7);
  car.add(halo);

  // Airbox / engine cover
  const airbox = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.5, 8), darkMat);
  airbox.position.set(0, 1.05, 0.15);
  car.add(airbox);
  const cover = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 1.6), bodyMat);
  cover.position.set(0, 0.72, -0.9); cover.castShadow = true;
  car.add(cover);

  // Front wing
  const fWing = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.06, 0.55), carbon);
  fWing.position.set(0, 0.28, 2.55);
  car.add(fWing);
  for (const s of [-1, 1]) {
    const ep = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.34, 0.55), bodyMat);
    ep.position.set(s * 0.98, 0.42, 2.55);
    car.add(ep);
  }

  // Rear wing
  const rWing = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.06, 0.5), carbon);
  rWing.position.set(0, 1.02, -1.85);
  car.add(rWing);
  const rLower = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.05, 0.4), carbon);
  rLower.position.set(0, 0.78, -1.8);
  car.add(rLower);
  for (const s of [-1, 1]) {
    const ep = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 0.5), bodyMat);
    ep.position.set(s * 0.74, 0.9, -1.85);
    car.add(ep);
  }

  // Floor / diffuser
  const floor = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.05, 3.6), carbon);
  floor.position.set(0, 0.24, -0.1);
  car.add(floor);

  // Wheels
  const wheels = {};
  const fr = wheel(0.5, 0.4), fl = wheel(0.5, 0.4);
  const rr = wheel(0.6, 0.55), rl = wheel(0.6, 0.55);
  fr.position.set(0.95, 0.5, 1.5); fl.position.set(-0.95, 0.5, 1.5);
  rr.position.set(1.0, 0.6, -1.35); rl.position.set(-1.0, 0.6, -1.35);
  wheels.fl = fl; wheels.fr = fr; wheels.rl = rl; wheels.rr = rr;
  // steering pivots for front wheels
  const flPivot = new THREE.Group(), frPivot = new THREE.Group();
  flPivot.position.copy(fl.position); frPivot.position.copy(fr.position);
  fl.position.set(0, 0, 0); fr.position.set(0, 0, 0);
  flPivot.add(fl); frPivot.add(fr);
  car.add(flPivot, frPivot, rr, rl);
  wheels.flPivot = flPivot; wheels.frPivot = frPivot;

  car.userData.wheels = wheels;
  car.userData.tireGroups = [fl, fr, rr, rl];
  return car;
}

// Palette for the field
export const TEAM_COLORS = [
  0xe10600, 0x00d2be, 0x0090ff, 0xff8700, 0xffffff,
  0x006f62, 0x2b4562, 0xb6babd, 0x358c75, 0x900000, 0xdc0000,
];

// ANCHOR: [vehicle-physics] Arcade kinematic vehicle with track progress + laps.
export class Vehicle {
  constructor(track, mesh, isPlayer = false) {
    this.track = track;
    this.mesh = mesh;
    this.isPlayer = isPlayer;
    this.pos = new THREE.Vector3();
    this.heading = 0;          // yaw, radians (atan2(x,z) convention)
    this.speed = 0;            // m/s along heading
    this.steerVis = 0;         // smoothed visual steering
    this.segment = 0;          // nearest centerline index
    this.lap = 0;
    this.lapProgress = 0;      // fractional progress used for ordering
    this.finished = false;
    this.lapStart = 0;
    this.bestLap = Infinity;
    this.lastLap = 0;
    this._prevSeg = 0;
    this._wheelSpin = 0;

    // tuning
    this.maxSpeed = 92;        // ~330 km/h
    this.accel = 26;
    this.brakePow = 55;
    this.drag = 0.9;
    this.grip = 2.6;
  }

  placeAt(start) {
    this.pos.copy(start.pos);
    this.heading = start.heading;
    this.segment = start.index;
    this._prevSeg = start.index;
    this.speed = 0;
    this.syncMesh();
  }

  syncMesh() {
    this.mesh.position.copy(this.pos);
    this.mesh.rotation.y = this.heading;
  }

  // nearest centerline index searching a local window (cars move forward)
  _updateSegment() {
    const c = this.track.center, N = this.track.N;
    let best = this.segment, bestD = Infinity;
    for (let o = -6; o <= 20; o++) {
      const i = (this.segment + o + N) % N;
      const d = c[i].distanceToSquared(this.pos);
      if (d < bestD) { bestD = d; best = i; }
    }
    this.segment = best;
    return Math.sqrt(bestD);
  }

  update(dt, input) {
    if (this.finished) input = { throttle: 0, brake: 0.4, steer: 0 };
    const t = this.track;

    // longitudinal
    if (input.throttle > 0) this.speed += this.accel * input.throttle * dt;
    this.speed -= this.drag * (this.speed / this.maxSpeed) * this.maxSpeed * dt * 0.02;
    this.speed *= (1 - 0.15 * dt);
    if (input.brake > 0) this.speed -= this.brakePow * input.brake * dt;
    if (this.speed < 0) this.speed = 0;
    if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;

    // steering (scaled so it's tighter at low speed, stable at high)
    const speedFactor = Math.min(1, this.speed / 18) * (1 - this.speed / this.maxSpeed * 0.55);
    const turn = input.steer * 2.4 * speedFactor;
    this.heading += turn * dt;
    this.steerVis += (input.steer - this.steerVis) * Math.min(1, dt * 10);

    // integrate position
    const dir = new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading));
    this.pos.addScaledVector(dir, this.speed * dt);

    // track containment: keep car within road, penalise off-road
    const lateral = this._updateSegment();
    const nr = t.normals[this.segment];
    const c = t.center[this.segment];
    const off = new THREE.Vector3().subVectors(this.pos, c);
    const lateralSigned = off.dot(nr);
    const limit = t.roadHalf + 0.6;
    if (Math.abs(lateralSigned) > limit) {
      // push back onto track and scrub speed (wall/grass)
      const over = Math.abs(lateralSigned) - limit;
      this.pos.addScaledVector(nr, -Math.sign(lateralSigned) * over);
      this.speed *= 0.90;
    } else if (Math.abs(lateralSigned) > t.roadHalf - 0.4) {
      this.speed *= (1 - 0.6 * dt); // on the curb/edge: slight scrub
    }
    this.pos.y = 0;

    // lap / progress tracking
    const N = t.N;
    const dSeg = this.segment - this._prevSeg;
    if (dSeg < -N * 0.5) {           // crossed start/finish forward
      this.lap += 1;
      const now = performance.now();
      if (this.lap > 1) {
        this.lastLap = (now - this.lapStart) / 1000;
        if (this.lastLap < this.bestLap) this.bestLap = this.lastLap;
      }
      this.lapStart = now;
    } else if (dSeg > N * 0.5) {
      this.lap -= 1;                  // went backwards over the line
    }
    this._prevSeg = this.segment;
    this.lapProgress = this.lap + this.segment / N;

    // visuals
    this._wheelSpin += (this.speed / 0.5) * dt;
    const w = this.mesh.userData.wheels;
    for (const g of this.mesh.userData.tireGroups) g.rotation.x = this._wheelSpin;
    if (w.flPivot) { w.flPivot.rotation.y = this.steerVis * 0.5; w.frPivot.rotation.y = this.steerVis * 0.5; }
    // body roll & pitch for feel
    this.mesh.rotation.z = -this.steerVis * Math.min(1, this.speed / 40) * 0.06;
    this.syncMesh();
  }

  get kmh() { return this.speed * 3.6; }
}
