// ANCHOR: [controls] Unified keyboard + on-screen touch input.

export class Input {
  constructor({ onReset, onPause } = {}) {
    this.keys = {};
    this.touch = { steer: 0, gas: false, brake: false };
    this.onReset = onReset || (() => {});
    this.onPause = onPause || (() => {});

    addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'KeyR') this.onReset();
      if (e.code === 'KeyP') this.onPause();
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
    }, { passive: false });
    addEventListener('keyup', (e) => { this.keys[e.code] = false; });

    this._bindTouch();
  }

  _bindTouch() {
    const hold = (id, on, off) => {
      const el = document.getElementById(id);
      if (!el) return;
      const down = (e) => { e.preventDefault(); el.classList.add('active'); on(); };
      const up = (e) => { e.preventDefault(); el.classList.remove('active'); off(); };
      el.addEventListener('pointerdown', down);
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
      el.addEventListener('pointerleave', up);
    };
    hold('steerL', () => this.touch.steer = -1, () => { if (this.touch.steer < 0) this.touch.steer = 0; });
    hold('steerR', () => this.touch.steer = 1, () => { if (this.touch.steer > 0) this.touch.steer = 0; });
    hold('pedalGas', () => this.touch.gas = true, () => this.touch.gas = false);
    hold('pedalBrake', () => this.touch.brake = true, () => this.touch.brake = false);

    const reset = document.getElementById('btnReset');
    if (reset) reset.addEventListener('pointerdown', (e) => { e.preventDefault(); this.onReset(); });
  }

  static isTouchDevice() {
    return ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  }

  state() {
    const k = this.keys;
    let steer = 0, throttle = 0, brake = 0;
    if (k['ArrowLeft'] || k['KeyA']) steer -= 1;
    if (k['ArrowRight'] || k['KeyD']) steer += 1;
    if (k['ArrowUp'] || k['KeyW']) throttle = 1;
    if (k['ArrowDown'] || k['KeyS']) brake = 1;

    // merge touch
    steer += this.touch.steer;
    if (this.touch.gas) throttle = 1;
    if (this.touch.brake) brake = 1;

    steer = Math.max(-1, Math.min(1, steer));
    return { throttle, brake, steer };
  }
}
