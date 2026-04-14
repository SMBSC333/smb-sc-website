import { Hono } from 'hono'

const businessBaseline = new Hono()

businessBaseline.get('/', (c) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="A deeper analysis we may recommend when the issue is broader than AI alone. Available by recommendation after the Strategy Call." />
  <title>The Business Baseline — SMB Strategy Consultants</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link href="/static/style.css" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }

    /* ── LOGO HEADER ──────────────────────────────────────── */
    .bb-header {
      background: #ffffff;
      border-bottom: 1px solid #e4e0d8;
      padding: 1.25rem 2rem;
    }
    .bb-header-inner {
      max-width: 1160px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .bb-header-logo-wrap {
      display: inline-block;
    }
    .bb-header-logo-wrap img { height: 38px; width: auto; display: block; }
    .bb-header-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: var(--color-gold, #c9a84c);
      color: var(--color-navy, #0d1c32);
      font-size: 0.82rem;
      font-weight: 700;
      padding: 0.65rem 1.35rem;
      border-radius: 4px;
      text-decoration: none;
      letter-spacing: 0.01em;
      transition: background 0.15s;
    }
    .bb-header-cta:hover { background: #b8943e; }

    /* ── HERO ────────────────────────────────────────────── */
    .bb-hero {
      background: var(--color-navy, #0d1c32);
      padding: 5rem 0 5.5rem;
      position: relative;
      overflow: hidden;
    }
    .bb-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url('/static/images/desk-diagnostic-bg-1024.webp') center/cover no-repeat;
      opacity: 0.09;
    }
    .bb-hero::after {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 50%;
      height: 100%;
      background: radial-gradient(ellipse at 80% 30%, rgba(201,168,76,0.08) 0%, transparent 65%);
      pointer-events: none;
    }
    .bb-hero-grid {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 4rem;
      align-items: center;
      max-width: 1160px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 1;
    }
    @media (max-width: 900px) {
      .bb-hero-grid { grid-template-columns: 1fr; gap: 3rem; }
    }
    .bb-hero-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid rgba(201,168,76,0.4);
      border-radius: 100px;
      padding: 0.3rem 0.85rem;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-gold-light, #e0b84c);
      margin-bottom: 1.5rem;
    }
    .bb-hero h1 {
      font-size: clamp(2.2rem, 4.5vw, 3.4rem);
      font-weight: 800;
      color: #fff;
      line-height: 1.1;
      margin: 0 0 1.5rem;
    }
    .bb-hero h1 em {
      font-style: italic;
      color: var(--color-gold-light, #e0b84c);
    }
    .bb-hero-sub {
      font-size: 1rem;
      color: rgba(255,255,255,0.72);
      line-height: 1.75;
      margin-bottom: 2.25rem;
      max-width: 520px;
    }
    .bb-hero-cta-row { display: flex; flex-direction: column; gap: 0.85rem; align-items: flex-start; }
    .bb-hero-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--color-gold, #c9a84c);
      color: var(--color-navy, #0d1c32);
      font-size: 0.95rem;
      font-weight: 700;
      padding: 0.9rem 1.85rem;
      border-radius: 4px;
      text-decoration: none;
      letter-spacing: 0.01em;
      transition: background 0.15s, transform 0.15s;
    }
    .bb-hero-btn:hover { background: #b8943e; transform: translateY(-1px); }
    .bb-hero-micro {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.38);
    }
    /* Right col — session card */
    .bb-hero-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-top: 3px solid var(--color-gold, #c9a84c);
      border-radius: 8px;
      padding: 2rem;
      position: relative;
      z-index: 1;
    }
    .bb-hero-card-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: rgba(255,255,255,0.4);
      margin-bottom: 0.75rem;
    }
    .bb-hero-card h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #fff;
      line-height: 1.3;
      margin-bottom: 1.5rem;
    }
    .bb-card-list {
      list-style: none;
      padding: 0; margin: 0 0 1.75rem;
    }
    .bb-card-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.65rem;
      padding: 0.55rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      font-size: 0.92rem;
      color: rgba(255,255,255,0.78);
      line-height: 1.6;
    }
    .bb-card-list li:last-child { border-bottom: none; }
    .bb-card-list li::before {
      content: '→';
      color: var(--color-gold, #c9a84c);
      font-size: 0.8rem;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .bb-card-meta {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: rgba(255,255,255,0.08);
      border-radius: 4px;
      overflow: hidden;
    }
    .bb-card-meta-item {
      background: rgba(255,255,255,0.03);
      padding: 0.75rem 1rem;
    }
    .bb-card-meta-item span {
      display: block;
      font-size: 0.62rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: rgba(255,255,255,0.35);
      margin-bottom: 0.2rem;
    }
    .bb-card-meta-item strong {
      font-size: 0.9rem;
      font-weight: 700;
      color: #fff;
    }

    /* ── SHARED UTILITIES ─────────────────────────────────── */
    .bb-section { padding: 5.5rem 0; }
    .bb-container {
      max-width: 1160px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    .bb-eyebrow {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-gold, #c9a84c);
      display: block;
      margin-bottom: 0.75rem;
    }
    .bb-rule {
      width: 40px; height: 3px;
      background: var(--color-gold, #c9a84c);
      border: none; margin: 1rem 0 1.5rem;
      border-radius: 2px;
      display: block;
    }
    .bb-rule-center { margin: 1rem auto 1.5rem; }

    /* ── RECOGNITION BAR ──────────────────────────────────── */
    .bb-recog {
      background: var(--color-bg-warm, #f2efe9);
      border-top: 1px solid var(--color-bg-border, #e4e0d8);
      border-bottom: 1px solid var(--color-bg-border, #e4e0d8);
      padding: 1.5rem 0;
    }
    .bb-recog-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem 2rem;
      align-items: center;
    }
    .bb-recog-item {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--color-text-muted, #7a7266);
    }
    .bb-recog-item::before {
      content: '';
      display: inline-block;
      width: 5px; height: 5px;
      border-radius: 50%;
      background: var(--color-gold, #c9a84c);
      flex-shrink: 0;
    }

    /* ── SECTION 2 — SYMPTOMS GRID ─────────────────────────── */
    .bb-s2 { background: var(--color-bg-soft, #f8f7f4); }
    .bb-s2-head { text-align: center; margin-bottom: 3rem; }
    .bb-s2-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      max-width: 560px;
      margin: 0 auto 1rem;
    }
    .bb-s2-head p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
    }
    .bb-symptom-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
    @media (max-width: 820px) { .bb-symptom-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 520px)  { .bb-symptom-grid { grid-template-columns: 1fr; } }
    .bb-symptom-card {
      background: #fff;
      border: 1px solid #e8e3da;
      border-top: 2px solid var(--color-gold, #c9a84c);
      border-radius: 6px;
      padding: 1.5rem;
    }
    .bb-symptom-num {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold, #c9a84c);
      display: block;
      margin-bottom: 0.6rem;
    }
    .bb-symptom-card h4 {
      font-family: var(--font-heading, Georgia, serif);
      font-size: 1rem;
      font-weight: 400;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.5rem;
    }
    .bb-symptom-card p {
      font-size: 0.88rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.65;
      margin: 0;
    }
    .bb-s2-footer {
      text-align: center;
      margin-top: 2.5rem;
      font-size: 0.92rem;
      color: var(--color-text-muted, #7a7266);
      font-style: italic;
    }

    /* ── SECTION 3 — WHAT IT IS: image break + content ──────── */
    .bb-imgbreak {
      position: relative;
      height: 360px;
      overflow: hidden;
    }
    .bb-imgbreak img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center 30%;
      display: block;
    }
    .bb-imgbreak-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, rgba(13,28,50,0.72) 0%, rgba(13,28,50,0.38) 60%, transparent 100%);
    }
    .bb-imgbreak-caption {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      color: #fff;
      width: 90%;
      max-width: 700px;
    }
    .bb-imgbreak-caption h2 {
      font-size: clamp(1.5rem, 3vw, 2.2rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 0.5rem;
    }
    .bb-imgbreak-caption p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.75);
      margin: 0;
    }

    .bb-s3 { background: #fff; }
    .bb-s3-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: start;
    }
    @media (max-width: 820px) { .bb-s3-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .bb-s3 h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      line-height: 1.25;
      margin-bottom: 1rem;
    }
    .bb-s3 p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.75;
      margin-bottom: 1.1rem;
    }
    .bb-focus-list {
      list-style: none;
      padding: 0; margin: 1.5rem 0 0;
    }
    .bb-focus-list li {
      padding: 1rem 0;
      border-bottom: 1px solid #ede9e1;
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }
    .bb-focus-list li:last-child { border-bottom: none; }
    .bb-focus-num {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-gold, #c9a84c);
      background: rgba(201,168,76,0.1);
      border-radius: 3px;
      padding: 0.2rem 0.5rem;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .bb-focus-text strong {
      display: block;
      font-size: 0.95rem;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.2rem;
    }
    .bb-focus-text span {
      font-size: 0.88rem;
      color: var(--color-text-muted, #7a7266);
    }
    /* Not list */
    .bb-not-box {
      background: var(--color-bg-soft, #f8f7f4);
      border: 1px solid #e4e0d8;
      border-left: 3px solid rgba(201,168,76,0.5);
      border-radius: 6px;
      padding: 1.5rem;
      margin-top: 2rem;
    }
    .bb-not-box-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-text-muted, #7a7266);
      margin-bottom: 0.85rem;
    }
    .bb-not-list {
      list-style: none;
      padding: 0; margin: 0;
    }
    .bb-not-list li {
      font-size: 0.9rem;
      color: var(--color-text-muted, #7a7266);
      padding: 0.3rem 0;
      display: flex;
      gap: 0.6rem;
      align-items: flex-start;
    }
    .bb-not-list li::before {
      content: '×';
      color: rgba(201,168,76,0.6);
      font-weight: 700;
      flex-shrink: 0;
    }

    /* ── SECTION 4 — DELIVERABLES (dark bg) ─────────────────── */
    .bb-s4 { background: var(--color-navy, #0d1c32); }
    .bb-s4-head { text-align: center; margin-bottom: 3rem; }
    .bb-s4-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: #fff;
      max-width: 600px;
      margin: 0 auto;
    }
    .bb-s4-head p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.6);
      margin-top: 0.75rem;
    }
    .bb-deliverable-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
    @media (max-width: 820px) { .bb-deliverable-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 520px)  { .bb-deliverable-grid { grid-template-columns: 1fr; } }
    .bb-deliv-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-top: 2px solid var(--color-gold, #c9a84c);
      border-radius: 6px;
      padding: 1.5rem;
    }
    .bb-deliv-icon {
      font-size: 1.4rem;
      margin-bottom: 0.75rem;
    }
    .bb-deliv-card h4 {
      font-family: var(--font-body, Inter, sans-serif);
      font-size: 0.95rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.5rem;
    }
    .bb-deliv-card p {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.58);
      line-height: 1.65;
      margin: 0;
    }
    .bb-deliv-optional {
      display: inline-block;
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--color-gold, #c9a84c);
      background: rgba(201,168,76,0.12);
      border-radius: 3px;
      padding: 0.1rem 0.45rem;
      margin-bottom: 0.5rem;
    }

    /* ── SECTION 5 — HOW IT WORKS (steps) ───────────────────── */
    .bb-s5 { background: var(--color-bg-soft, #f8f7f4); }
    .bb-s5-head { max-width: 640px; margin-bottom: 3.5rem; }
    .bb-s5-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.75rem;
    }
    .bb-s5-head p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
    }
    .bb-steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
      position: relative;
    }
    @media (max-width: 820px) { .bb-steps { grid-template-columns: 1fr 1fr; gap: 2rem; } }
    @media (max-width: 520px) { .bb-steps { grid-template-columns: 1fr; } }
    .bb-steps::before {
      content: '';
      position: absolute;
      top: 1.6rem;
      left: 2rem;
      right: 2rem;
      height: 1px;
      background: linear-gradient(to right, var(--color-gold, #c9a84c), rgba(201,168,76,0.1));
      z-index: 0;
    }
    @media (max-width: 820px) { .bb-steps::before { display: none; } }
    .bb-step {
      padding: 0 1.5rem 0 0;
      position: relative;
      z-index: 1;
    }
    .bb-step-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 3.2rem; height: 3.2rem;
      border-radius: 50%;
      background: var(--color-navy, #0d1c32);
      border: 2px solid var(--color-gold, #c9a84c);
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--color-gold, #c9a84c);
      margin-bottom: 1.25rem;
    }
    .bb-step h4 {
      font-family: var(--font-body, Inter, sans-serif);
      font-size: 0.92rem;
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 0.5rem;
    }
    .bb-step p {
      font-size: 0.88rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.65;
      margin: 0;
    }
    .bb-prework-note {
      margin-top: 3rem;
      background: rgba(201,168,76,0.08);
      border: 1px solid rgba(201,168,76,0.25);
      border-radius: 6px;
      padding: 1.5rem 1.75rem;
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }
    .bb-prework-note .icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 1px; }
    .bb-prework-note p {
      font-size: 0.9rem;
      color: var(--color-text, #3d3830);
      line-height: 1.65;
      margin: 0;
    }
    .bb-prework-note strong { color: var(--color-navy, #0d1c32); }

    /* ── SECTION 6 — MODULES (3 focus areas) ─────────────────── */
    .bb-s6 { background: #fff; }
    .bb-s6-head { text-align: center; margin-bottom: 3rem; }
    .bb-s6-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
    }
    .bb-s6-head p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
      margin-top: 0.75rem;
    }
    .bb-modules-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    @media (max-width: 820px) { .bb-modules-grid { grid-template-columns: 1fr; } }
    .bb-module-card {
      border: 1px solid #e8e3da;
      border-radius: 8px;
      overflow: hidden;
    }
    .bb-module-header {
      background: var(--color-navy, #0d1c32);
      padding: 1.25rem 1.5rem;
    }
    .bb-module-num {
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-gold, #c9a84c);
      display: block;
      margin-bottom: 0.3rem;
    }
    .bb-module-header h3 {
      font-size: 1.05rem;
      font-weight: 700;
      color: #fff;
      line-height: 1.25;
      margin: 0;
    }
    .bb-module-body {
      padding: 1.25rem 1.5rem;
      background: var(--color-bg-soft, #f8f7f4);
    }
    .bb-module-body p {
      font-size: 0.88rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.65;
      margin-bottom: 1rem;
    }
    .bb-module-bullets {
      list-style: none;
      padding: 0; margin: 0;
    }
    .bb-module-bullets li {
      font-size: 0.86rem;
      color: var(--color-text, #3d3830);
      padding: 0.35rem 0;
      border-bottom: 1px solid #ede9e1;
      display: flex;
      gap: 0.6rem;
      align-items: flex-start;
    }
    .bb-module-bullets li:last-child { border-bottom: none; }
    .bb-module-bullets li::before {
      content: '→';
      color: var(--color-gold, #c9a84c);
      font-size: 0.8rem;
      flex-shrink: 0;
      margin-top: 1px;
    }

    /* ── SECTION 7 — CASE EXAMPLE (dark image break) ─────────── */
    .bb-s7 {
      background: var(--color-navy, #0d1c32);
      position: relative;
      overflow: hidden;
    }
    .bb-s7::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url('/static/images/section-strategy-session.webp') center/cover no-repeat;
      opacity: 0.06;
    }
    .bb-s7-inner {
      position: relative;
      z-index: 1;
    }
    .bb-s7-grid {
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 5rem;
      align-items: center;
    }
    @media (max-width: 820px) { .bb-s7-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .bb-s7 h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 0.75rem;
    }
    .bb-s7 p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.65);
      line-height: 1.75;
      margin-bottom: 1rem;
    }
    .bb-s7 strong { color: rgba(255,255,255,0.9); }
    .bb-shift-box {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      overflow: hidden;
    }
    .bb-shift-row {
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid rgba(255,255,255,0.07);
    }
    .bb-shift-row:last-child { border-bottom: none; }
    .bb-shift-label {
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: rgba(255,255,255,0.35);
      margin-bottom: 0.4rem;
    }
    .bb-shift-before {
      font-size: 0.88rem;
      color: rgba(255,255,255,0.5);
      text-decoration: line-through;
      margin-bottom: 0.25rem;
    }
    .bb-shift-after {
      font-size: 0.92rem;
      color: var(--color-gold-light, #e0b84c);
      font-weight: 600;
    }

    /* ── SECTION 8 — NEXT PATHS ──────────────────────────────── */
    .bb-s8 { background: var(--color-bg-warm, #f2efe9); }
    .bb-s8-head { text-align: center; margin-bottom: 3rem; }
    .bb-s8-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
    }
    .bb-s8-head p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
      margin-top: 0.75rem;
    }
    .bb-paths-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
    @media (max-width: 820px) { .bb-paths-grid { grid-template-columns: 1fr; } }
    .bb-path-card {
      background: #fff;
      border: 1px solid #e8e3da;
      border-radius: 8px;
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }
    .bb-path-num {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold, #c9a84c);
    }
    .bb-path-card h4 {
      font-family: var(--font-heading, Georgia, serif);
      font-size: 1.05rem;
      font-weight: 400;
      color: var(--color-navy, #0d1c32);
      line-height: 1.3;
      margin: 0;
    }
    .bb-path-card p {
      font-size: 0.88rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.65;
      margin: 0;
      flex: 1;
    }
    .bb-path-link {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--color-gold-dark, #a07c30);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
    }
    .bb-path-link:hover { color: var(--color-gold, #c9a84c); }

    /* ── SECTION 9 — OBJECTIONS ──────────────────────────────── */
    .bb-s9 { background: #fff; }
    .bb-s9-head { max-width: 560px; margin-bottom: 3rem; }
    .bb-s9-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.75rem;
    }
    .bb-s9-head p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
    }
    .bb-faq-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }
    @media (max-width: 720px) { .bb-faq-grid { grid-template-columns: 1fr; } }
    .bb-faq-card {
      background: var(--color-bg-soft, #f8f7f4);
      border: 1px solid #e4e0d8;
      border-radius: 6px;
      padding: 1.5rem;
    }
    .bb-faq-card h4 {
      font-family: var(--font-body, Inter, sans-serif);
      font-size: 0.92rem;
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.6rem;
    }
    .bb-faq-card p {
      font-size: 0.88rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.65;
      margin: 0;
    }

    /* ── SECTION 10 — ADVISOR (authority) ───────────────────── */
    .bb-s10 { background: var(--color-navy, #0d1c32); }
    .bb-s10-grid {
      display: grid;
      grid-template-columns: 360px 1fr;
      gap: 5rem;
      align-items: center;
    }
    @media (max-width: 820px) { .bb-s10-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .bb-s10-img {
      border-radius: 8px;
      overflow: hidden;
    }
    .bb-s10-img img {
      width: 100%;
      height: 420px;
      object-fit: cover;
      object-position: center top;
      display: block;
    }
    .bb-authority-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(201,168,76,0.1);
      border: 1px solid rgba(201,168,76,0.3);
      border-radius: 100px;
      padding: 0.3rem 0.85rem;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--color-gold-light, #e0b84c);
      margin-bottom: 1.25rem;
    }
    .bb-s10 h2 {
      font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
    .bb-s10 p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.65);
      line-height: 1.75;
      margin-bottom: 1rem;
    }
    .bb-s10 strong { color: rgba(255,255,255,0.9); }
    .bb-cred-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.5rem;
    }
    .bb-cred-item {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 4px;
      padding: 0.3rem 0.75rem;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.65);
    }

    /* ── SECTION 11 — CTA ────────────────────────────────────── */
    .bb-s11 {
      background: radial-gradient(ellipse at 60% 50%, rgba(201,168,76,0.1) 0%, transparent 70%),
                  var(--color-bg-soft, #f8f7f4);
      border-top: 1px solid #e4e0d8;
      padding: 6rem 0;
      text-align: center;
    }
    .bb-s11-inner {
      max-width: 680px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    .bb-s11-price {
      display: inline-flex;
      align-items: baseline;
      gap: 0.25rem;
      background: var(--color-navy, #0d1c32);
      color: #fff;
      border-radius: 6px;
      padding: 0.5rem 1.25rem;
      margin-bottom: 1.75rem;
    }
    .bb-s11-price .amount {
      font-size: 2rem;
      font-weight: 800;
      color: var(--color-gold-light, #e0b84c);
    }
    .bb-s11-price .label {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
    }
    .bb-s11 h2 {
      font-size: clamp(1.7rem, 3.5vw, 2.6rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      line-height: 1.15;
      margin-bottom: 1.25rem;
    }
    .bb-s11 h2 em {
      font-style: italic;
      color: var(--color-gold-dark, #a07c30);
    }
    .bb-s11-sub {
      font-size: 1rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.75;
      margin-bottom: 2.25rem;
    }
    .bb-s11-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--color-gold, #c9a84c);
      color: var(--color-navy, #0d1c32);
      font-size: 1rem;
      font-weight: 700;
      padding: 1rem 2.25rem;
      border-radius: 4px;
      text-decoration: none;
      letter-spacing: 0.01em;
      transition: background 0.15s, transform 0.15s;
      margin-bottom: 1rem;
    }
    .bb-s11-btn:hover { background: #b8943e; transform: translateY(-1px); }
    .bb-s11-guarantee {
      font-size: 0.8rem;
      color: var(--color-text-muted, #7a7266);
      margin-bottom: 0.4rem;
    }
    .bb-s11-avail {
      font-size: 0.75rem;
      color: rgba(201,168,76,0.8);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* ── FOOTER ──────────────────────────────────────────────── */
    .bb-footer {
      background: var(--color-navy-deep, #0d1c2e);
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 2rem;
      text-align: center;
    }
    .bb-footer p {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.35);
      margin: 0.2rem 0;
    }
    .bb-footer a {
      color: rgba(255,255,255,0.4);
      text-decoration: none;
    }
    .bb-footer a:hover { color: var(--color-gold, #c9a84c); }
    .bb-footer-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 0.5rem;
    }
  </style>
</head>
<body>

  <!-- ── HEADER ───────────────────────────────────────────────── -->
  <header class="bb-header">
    <div class="bb-header-inner">
      <a href="/" class="bb-header-logo-wrap" aria-label="SMB Strategy Consultants — Home">
        <img src="/static/images/logo-horizontal-transparent.png" alt="SMB Strategy Consultants" width="180" height="36" />
      </a>
      <a href="/strategy-call" class="bb-header-cta">Book the AI Implementation Strategy Call →</a>
    </div>
  </header>

  <main>

    <!-- ── HERO ─────────────────────────────────────────────────── -->
    <section class="bb-hero">
      <div class="bb-hero-grid">

        <!-- Left: headline + CTA -->
        <div>
          <span class="bb-hero-pill">Service by Recommendation</span>
          <h1>A deeper analysis we may recommend when the issue is broader than AI alone.</h1>
          <p class="bb-hero-sub">When the Strategy Call reveals a deeper business-structure issue, Business Baseline provides a more comprehensive look at financial foundations, scalability, and positioning.</p>
          <div class="bb-hero-cta-row">
            <a href="/strategy-call" class="bb-hero-btn">Book the AI Implementation Strategy Call <span>→</span></a>
            <p class="bb-hero-micro">Available by recommendation after the Strategy Call.</p>
          </div>
        </div>

        <!-- Right: summary card -->
        <div class="bb-hero-card">
          <p class="bb-hero-card-label">What you get</p>
          <h3>You leave with a complete picture of your business — and a clear sequence for what to fix first.</h3>
          <ul class="bb-card-list">
            <li>Financial Foundation Scorecard with benchmarks</li>
            <li>Scalability and dependency assessment</li>
            <li>Market positioning and pricing analysis</li>
            <li>Constraint Summary — your #1 limiting factor</li>
            <li>90-Day Priority Plan with sequenced actions</li>
            <li>Full session recording</li>
          </ul>
          <div class="bb-card-meta">
            <div class="bb-card-meta-item">
              <span>Format</span>
              <strong>Half-Day (4 hrs)</strong>
            </div>
            <div class="bb-card-meta-item">
              <span>Investment</span>
              <strong>See Strategy Call</strong>
            </div>
            <div class="bb-card-meta-item">
              <span>Pre-Work</span>
              <strong>48 hrs prior</strong>
            </div>
            <div class="bb-card-meta-item">
              <span>Follow-Up</span>
              <strong>30-Day check-in</strong>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ── RECOGNITION BAR ──────────────────────────────────────── -->
    <div class="bb-recog">
      <div class="bb-container">
        <div class="bb-recog-inner">
          <span class="bb-recog-item">Atlanta, GA — Serving SMBs Nationwide</span>
          <span class="bb-recog-item">Service-Based Businesses</span>
          <span class="bb-recog-item">$500K – $5M Revenue Range</span>
          <span class="bb-recog-item">Half-Day Virtual or In-Person</span>
          <span class="bb-recog-item">Delivered by Corbin Cook, CEPA</span>
        </div>
      </div>
    </div>

    <!-- ── SECTION 2 — SYMPTOMS ─────────────────────────────────── -->
    <section class="bb-s2 bb-section">
      <div class="bb-container">
        <div class="bb-s2-head">
          <span class="bb-eyebrow">Do These Sound Familiar?</span>
          <hr class="bb-rule bb-rule-center" />
          <h2>These are symptoms of a business without a clear baseline.</h2>
          <p>They feel like separate problems. They usually share a single root cause.</p>
        </div>

        <div class="bb-symptom-grid">

          <div class="bb-symptom-card">
            <span class="bb-symptom-num">01</span>
            <h4>Cash is always tighter than it should be</h4>
            <p>Revenue looks healthy on paper, but cash never accumulates the way it should. You're busy and still broke.</p>
          </div>

          <div class="bb-symptom-card">
            <span class="bb-symptom-num">02</span>
            <h4>Everything still runs through you</h4>
            <p>Decisions stall when you're not available. Your team is capable, but the business doesn't move without your input.</p>
          </div>

          <div class="bb-symptom-card">
            <span class="bb-symptom-num">03</span>
            <h4>You're competing on price too often</h4>
            <p>Prospects push back on your rates. You've started discounting to win work that used to come easier.</p>
          </div>

          <div class="bb-symptom-card">
            <span class="bb-symptom-num">04</span>
            <h4>Growth has plateaued — or feels unsustainable</h4>
            <p>You've hit a ceiling and don't know exactly why. Or you're growing, but each new level just adds more pressure.</p>
          </div>

          <div class="bb-symptom-card">
            <span class="bb-symptom-num">05</span>
            <h4>There's no time to think — only react</h4>
            <p>Strategic work keeps getting pushed. You're running the business day-to-day with no time to work on it.</p>
          </div>

          <div class="bb-symptom-card">
            <span class="bb-symptom-num">06</span>
            <h4>You don't know what to fix first</h4>
            <p>You can name five things that need attention. You just don't know which one is actually creating the others.</p>
          </div>

        </div>

        <p class="bb-s2-footer">If two or more of these are true for your business, you don't need more ideas — you need a baseline.</p>
      </div>
    </section>

    <!-- ── IMAGE BREAK ────────────────────────────────────────── -->
    <div class="bb-imgbreak">
      <picture>
        <source type="image/webp" srcset="/static/images/section-strategy-session.webp" />
        <img src="/static/images/section-strategy-session.jpg" alt="Business strategy session" loading="lazy" />
      </picture>
      <div class="bb-imgbreak-overlay"></div>
      <div class="bb-imgbreak-caption">
        <h2>Most owners are solving the wrong problem.</h2>
        <p>The Business Baseline finds the real one — and tells you exactly where to start.</p>
      </div>
    </div>

    <!-- ── SECTION 3 — WHAT IT IS ───────────────────────────────── -->
    <section class="bb-s3 bb-section">
      <div class="bb-container">
        <div class="bb-s3-grid">

          <div>
            <span class="bb-eyebrow">What It Is</span>
            <hr class="bb-rule" />
            <h2>A structured diagnostic — not a consulting pitch, not a strategy overview.</h2>
            <p>The Business Baseline is a half-day working session where we go deep on three areas of your business: your financial foundation, your scalability, and your market position.</p>
            <p>You submit your data 48 hours in advance. We analyze it before we sit down together. That means the session itself is focused on insight and decisions — not discovery.</p>
            <p>By the end, you will know what is actually limiting your growth, what it is costing you, and which single constraint to address first. That clarity alone is worth the investment.</p>

            <ul class="bb-focus-list">
              <li>
                <span class="bb-focus-num">01</span>
                <div class="bb-focus-text">
                  <strong>Financial Foundation</strong>
                  <span>Profitability, cash flow, pricing structure, and financial health benchmarks</span>
                </div>
              </li>
              <li>
                <span class="bb-focus-num">02</span>
                <div class="bb-focus-text">
                  <strong>Scalability &amp; Owner Dependency</strong>
                  <span>Where the business runs on systems vs. where it still runs through you</span>
                </div>
              </li>
              <li>
                <span class="bb-focus-num">03</span>
                <div class="bb-focus-text">
                  <strong>Market Position &amp; Pricing Power</strong>
                  <span>How you are perceived, how you are priced, and where margin is being left behind</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div class="bb-not-box">
              <p class="bb-not-box-label">What this session is not</p>
              <ul class="bb-not-list">
                <li>Not a generic business review</li>
                <li>Not a pitch for a long-term retainer</li>
                <li>Not a list of things you already know</li>
                <li>Not theoretical — everything is grounded in your actual numbers and situation</li>
                <li>Not dependent on hiring more people or spending more money to fix things</li>
              </ul>
            </div>

            <div style="margin-top: 2rem; background: var(--color-bg-soft,#f8f7f4); border: 1px solid #e4e0d8; border-radius: 8px; overflow: hidden;">
              <picture>
                <source type="image/webp" srcset="/static/images/section-dashboard.webp" />
                <img src="/static/images/section-dashboard.jpg" alt="Financial dashboard analysis" loading="lazy" style="width:100%;height:200px;object-fit:cover;display:block;" />
              </picture>
              <div style="padding:1.25rem 1.5rem;">
                <p style="font-size:0.88rem;color:var(--color-text-muted,#7a7266);margin:0;line-height:1.65;">We use Fathom-powered financial dashboards and industry benchmarks to give you a real read on your business — not a gut-check conversation.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── SECTION 4 — DELIVERABLES ─────────────────────────────── -->
    <section class="bb-s4 bb-section">
      <div class="bb-container">
        <div class="bb-s4-head">
          <span class="bb-eyebrow" style="color:var(--color-gold,#c9a84c);">What You Walk Away With</span>
          <hr class="bb-rule bb-rule-center" />
          <h2>Six concrete outputs. Not a slide deck — a working set of tools.</h2>
          <p>Every deliverable is built from your actual data, benchmarked against your industry, and ready to act on the day of the session.</p>
        </div>

        <div class="bb-deliverable-grid">

          <div class="bb-deliv-card">
            <div class="bb-deliv-icon">📊</div>
            <h4>Financial Foundation Scorecard</h4>
            <p>A clear read on your gross margin, net margin, cash conversion, and pricing — benchmarked against industry comparables.</p>
          </div>

          <div class="bb-deliv-card">
            <div class="bb-deliv-icon">📈</div>
            <h4>Industry Benchmarks Report</h4>
            <p>Where you stand relative to peers at your revenue level. Profitability, labor efficiency, and growth rate comparisons.</p>
          </div>

          <div class="bb-deliv-card">
            <div class="bb-deliv-icon">🗺️</div>
            <h4>90-Day Priority Plan</h4>
            <p>A sequenced list of the highest-leverage actions to take in the next 90 days — prioritized by impact, not by urgency.</p>
          </div>

          <div class="bb-deliv-card">
            <div class="bb-deliv-icon">🔍</div>
            <h4>Constraint Summary</h4>
            <p>A written summary of your single biggest limiting factor — the one constraint that, once removed, unlocks the rest.</p>
          </div>

          <div class="bb-deliv-card">
            <div class="bb-deliv-icon">🎙️</div>
            <h4>Full Session Recording</h4>
            <p>The complete recording of our session together. Reference it, share it with your leadership team, or revisit it in 90 days.</p>
          </div>

          <div class="bb-deliv-card">
            <div class="bb-deliv-icon">🧭</div>
            <h4>Supporting Direction <span class="bb-deliv-optional">Optional</span></h4>
            <p>If warranted, a recommended engagement path — whether that's a specific Intensive, an advisory relationship, or simply a next step you can execute on your own.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ── SECTION 5 — HOW IT WORKS ─────────────────────────────── -->
    <section class="bb-s5 bb-section">
      <div class="bb-container">
        <div class="bb-s5-head">
          <span class="bb-eyebrow">How It Works</span>
          <hr class="bb-rule" />
          <h2>Four steps. Half a day. A business you understand completely.</h2>
          <p>The session is structured for maximum clarity and minimum time wasted. You come prepared. We come prepared. You leave with answers.</p>
        </div>

        <div class="bb-steps">

          <div class="bb-step">
            <div class="bb-step-num">01</div>
            <h4>Pre-Work (You)</h4>
            <p>Submit your financial data, org chart, and a short intake form 48 hours before the session. No data, no session — this is how we make the time count.</p>
          </div>

          <div class="bb-step">
            <div class="bb-step-num">02</div>
            <h4>Analysis (Us)</h4>
            <p>We analyze your financials against industry benchmarks, identify structural gaps, and map your constraint landscape before we ever sit down together.</p>
          </div>

          <div class="bb-step">
            <div class="bb-step-num">03</div>
            <h4>Half-Day Session</h4>
            <p>A focused four-hour working session — walking through your Financial Foundation, Scalability assessment, and Market Position. Live. Direct. Specific to you.</p>
          </div>

          <div class="bb-step">
            <div class="bb-step-num">04</div>
            <h4>Deliverable + Follow-Up</h4>
            <p>You receive all deliverables within 48 hours. A 30-day follow-up call is included to review progress and answer any questions that surfaced after implementation begins.</p>
          </div>

        </div>

        <div class="bb-prework-note">
          <span class="icon">⚠️</span>
          <p><strong>Pre-work is required — not optional.</strong> Financial statements, a brief intake form, and your org chart must be submitted 48 hours before your session date. This is what allows the session itself to go deep instead of wide. If pre-work is not submitted on time, the session will be rescheduled.</p>
        </div>
      </div>
    </section>

    <!-- ── SECTION 6 — MODULES ───────────────────────────────────── -->
    <section class="bb-s6 bb-section">
      <div class="bb-container">
        <div class="bb-s6-head">
          <span class="bb-eyebrow">The Three Assessment Areas</span>
          <hr class="bb-rule bb-rule-center" />
          <h2>Every session covers the same three modules — in the same order.</h2>
          <p>Not because every business is the same, but because the sequence matters. Financial clarity first. Then structure. Then market position.</p>
        </div>

        <div class="bb-modules-grid">

          <div class="bb-module-card">
            <div class="bb-module-header">
              <span class="bb-module-num">Module 01</span>
              <h3>Financial Foundation</h3>
            </div>
            <div class="bb-module-body">
              <p>Where is the money actually going — and is your pricing built to support growth or just cover costs?</p>
              <ul class="bb-module-bullets">
                <li>Gross and net margin vs. industry benchmark</li>
                <li>Cash conversion cycle and working capital health</li>
                <li>Pricing structure and average revenue per client</li>
                <li>Revenue concentration and dependency risk</li>
                <li>Whether you are building margin or just volume</li>
              </ul>
            </div>
          </div>

          <div class="bb-module-card">
            <div class="bb-module-header">
              <span class="bb-module-num">Module 02</span>
              <h3>Scalability &amp; Owner Dependency</h3>
            </div>
            <div class="bb-module-body">
              <p>How much of your growth is limited by how much still runs through you?</p>
              <ul class="bb-module-bullets">
                <li>Where decisions require the owner to be present</li>
                <li>Role clarity and accountability gaps on the team</li>
                <li>Where systems exist vs. where tribal knowledge runs the show</li>
                <li>Leadership capacity — can your team hold more without you?</li>
                <li>Whether your business is sellable, scalable, or stuck</li>
              </ul>
            </div>
          </div>

          <div class="bb-module-card">
            <div class="bb-module-header">
              <span class="bb-module-num">Module 03</span>
              <h3>Market Position &amp; Pricing Power</h3>
            </div>
            <div class="bb-module-body">
              <p>Are you attracting the right clients at the right margin — or competing for work you shouldn't be chasing?</p>
              <ul class="bb-module-bullets">
                <li>How your positioning compares to the market</li>
                <li>Where you are underselling relative to the value delivered</li>
                <li>Client mix — who is driving profit vs. just driving revenue</li>
                <li>Pipeline quality and lead source effectiveness</li>
                <li>Whether your brand is an asset or a liability in your market</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── SECTION 7 — CASE EXAMPLE ─────────────────────────────── -->
    <section class="bb-s7 bb-section">
      <div class="bb-container bb-s7-inner">
        <div class="bb-s7-grid">

          <div>
            <span class="bb-eyebrow">A Real-World Shift</span>
            <hr class="bb-rule" />
            <h2>The problem you think you have is rarely the one worth fixing.</h2>
            <p>A $1.8M service business came in convinced they needed more leads. Their pipeline felt thin, their close rate had dropped, and the owner was spending more time prospecting than delivering.</p>
            <p>The Baseline told a different story. Gross margin was 12 points below the industry benchmark. Three clients represented 74% of revenue. And the owner was the primary delivery resource — meaning any new client they closed would make the capacity problem worse, not better.</p>
            <p><strong>The real constraint wasn't leads. It was financial readiness, a concentration risk, and owner dependency — in that order.</strong></p>
            <p>They didn't need a marketing campaign. They needed a pricing restructure, a client mix decision, and one role hired before the next growth push. The Baseline gave them the sequence.</p>
          </div>

          <div>
            <div class="bb-shift-box">

              <div class="bb-shift-row">
                <p class="bb-shift-label">What they thought the problem was</p>
                <p class="bb-shift-before">Not enough leads coming in</p>
                <p class="bb-shift-after">→ Repriced core service. Margin jumped 9 points.</p>
              </div>

              <div class="bb-shift-row">
                <p class="bb-shift-label">What the data revealed</p>
                <p class="bb-shift-before">Revenue looked fine on the surface</p>
                <p class="bb-shift-after">→ 74% of revenue from 3 clients — unsustainable concentration</p>
              </div>

              <div class="bb-shift-row">
                <p class="bb-shift-label">What the real constraint was</p>
                <p class="bb-shift-before">Owner was the bottleneck</p>
                <p class="bb-shift-after">→ One hire changed everything. Growth unlocked.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── SECTION 8 — NEXT PATHS ────────────────────────────────── -->
    <section class="bb-s8 bb-section">
      <div class="bb-container">
        <div class="bb-s8-head">
          <span class="bb-eyebrow">What Comes Next</span>
          <hr class="bb-rule bb-rule-center" />
          <h2>The Baseline is the starting point. Not the finish line.</h2>
          <p>Some owners leave with exactly what they need to move forward on their own. Others choose to go further. Either way, you'll know what the right next step is.</p>
        </div>

        <div class="bb-paths-grid">

          <div class="bb-path-card">
            <span class="bb-path-num">Path 01</span>
            <h4>Financial Foundation Intensive</h4>
            <p>For businesses where the Baseline reveals a financial clarity gap — pricing, margin, cash flow, or reporting. A 90-day engagement to install the financial infrastructure your growth requires.</p>
            <a href="/strategy-intensives#finance" class="bb-path-link">Learn more →</a>
          </div>

          <div class="bb-path-card">
            <span class="bb-path-num">Path 02</span>
            <h4>Capacity Intensive</h4>
            <p>For businesses where the Baseline reveals a scalability or owner-dependency problem. A 90-day engagement to install the structure that lets your business grow without growing your hours.</p>
            <a href="/strategy-intensives#capacity" class="bb-path-link">Learn more →</a>
          </div>

          <div class="bb-path-card">
            <span class="bb-path-num">Path 03</span>
            <h4>Growth &amp; Positioning Intensive</h4>
            <p>For businesses where the Baseline reveals a market position or pipeline problem. A 90-day engagement to sharpen your positioning, strengthen your offer, and build a more predictable growth engine.</p>
            <a href="/strategy-intensives#growth" class="bb-path-link">Learn more →</a>
          </div>

        </div>
      </div>
    </section>

    <!-- ── SECTION 9 — OBJECTIONS ────────────────────────────────── -->
    <section class="bb-s9 bb-section">
      <div class="bb-container">
        <div class="bb-s9-head">
          <span class="bb-eyebrow">Common Questions</span>
          <hr class="bb-rule" />
          <h2>Answers before you book.</h2>
          <p>If you have a question that isn't addressed here, call us. We'd rather answer it upfront than have you wonder.</p>
        </div>

        <div class="bb-faq-grid">

          <div class="bb-faq-card">
            <h4>"I already know what my problems are."</h4>
            <p>You probably know the symptoms. The Baseline finds the root cause — and more often than not, it's one layer deeper than what's visible. Knowing the constraint is different from knowing the symptom.</p>
          </div>

          <div class="bb-faq-card">
            <h4>"Is this really worth the investment?"</h4>
            <p>One right decision — repricing a service, cutting the wrong client, making one hire before the wrong one — tends to return multiples of the cost within a quarter. The question isn't whether it's worth it. It's whether you can afford to keep guessing.</p>
          </div>

          <div class="bb-faq-card">
            <h4>"Why do you need my financials in advance?"</h4>
            <p>Because the session isn't about discovery — it's about insight. We analyze your data before we sit down so the four hours are spent on what it means and what to do about it, not on collecting information.</p>
          </div>

          <div class="bb-faq-card">
            <h4>"My numbers are a mess. Is that a problem?"</h4>
            <p>No. We've worked with businesses running on bank statements and spreadsheets. We'll work with what you have. Messy numbers often reveal more than clean ones anyway.</p>
          </div>

          <div class="bb-faq-card">
            <h4>"Is this just a pitch for hiring you?"</h4>
            <p>No. Some owners leave the Baseline and do everything themselves. If the right next step is a deeper engagement, we'll say so — and explain why. But the session stands on its own.</p>
          </div>

          <div class="bb-faq-card">
            <h4>"Is this right if I'm planning to exit in the next few years?"</h4>
            <p>Especially then. The same things that limit your growth are the same things that reduce your valuation. The Baseline tells you what to fix to make the business more valuable — whether you're scaling it or selling it.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ── SECTION 10 — ADVISOR ──────────────────────────────────── -->
    <section class="bb-s10 bb-section">
      <div class="bb-container">
        <div class="bb-s10-grid">

          <div class="bb-s10-img">
            <picture>
              <source type="image/webp" srcset="/static/images/corbin-headshot-new.webp" />
              <img src="/static/images/corbin-headshot-new.jpg" alt="Corbin Cook — SMB Strategy Consultants" loading="lazy" />
            </picture>
          </div>

          <div>
            <span class="bb-authority-badge">Why This Approach Works</span>
            <h2>Business problems are repeatable patterns. The Baseline finds yours.</h2>
            <p>Corbin Cook has worked with owner-led service businesses across industries and revenue ranges. The problems look different on the surface — but the constraints that create them are almost always the same three or four things in a different order.</p>
            <p>The Business Baseline is built on that pattern recognition. It is not a generic framework applied to your business. It is your business, analyzed against real benchmarks, with a clear prescription for what to address first.</p>
            <p><strong>"Most owners are working hard on the wrong thing. The Baseline stops that. You leave knowing exactly where to put your energy — and why that sequence matters."</strong></p>
            <div class="bb-cred-list">
              <span class="bb-cred-item">CEPA — Certified Exit Planning Advisor</span>
              <span class="bb-cred-item">ASBC — Accredited Small Business Consultant</span>
              <span class="bb-cred-item">Capitaliz Accredited Advisor</span>
              <span class="bb-cred-item">Value Builder Certified</span>
              <span class="bb-cred-item">Fathom Certified Advisor</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── SECTION 11 — CTA ──────────────────────────────────────── -->
    <section class="bb-s11">
      <div class="bb-s11-inner">
        <h2>Stop guessing.<br><em>Get your baseline.</em></h2>
        <p class="bb-s11-sub">A half-day session, a full set of deliverables, and a clear sequence for what to fix first. Available only by recommendation after your initial Strategy Call.</p>
        <div>
          <a href="/strategy-call" class="bb-s11-btn">Book the AI Implementation Strategy Call →</a>
        </div>
        <p class="bb-s11-guarantee">Pre-work required 48 hours in advance once recommended.</p>
        <p class="bb-s11-avail">Limited availability — typically 2–3 sessions per month</p>
      </div>
    </section>

  </main>

  <!-- ── FOOTER ────────────────────────────────────────────────── -->
  <footer class="bb-footer">
    <p>&copy; 2026 SMB Strategy Consultants, LLC</p>
    <div class="bb-footer-links">
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms-conditions">Terms of Service</a>
      <a href="/">smbstrategyconsultants.com</a>
    </div>
  </footer>

</body>
</html>`

  return c.html(html)
})

export default businessBaseline
