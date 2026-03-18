import { Hono } from 'hono'

const aiReadinessDeepDive = new Hono()

aiReadinessDeepDive.get('/', (c) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="The AI Readiness Deep Dive: three working sessions to diagnose why AI hasn't worked in your business — and build the 90-day roadmap to fix it." />
  <title>AI Readiness Deep Dive — SMB Strategy Consultants</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link href="/static/style.css" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }

    /* ── HEADER ───────────────────────────────────────────── */
    .ar-header {
      background: #ffffff;
      border-bottom: 1px solid #e4e0d8;
      padding: 1.25rem 2rem;
    }
    .ar-header-inner {
      max-width: 1160px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .ar-header-logo { display: inline-block; }
    .ar-header-logo img { height: 38px; width: auto; display: block; }
    .ar-header-cta {
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
    .ar-header-cta:hover { background: #b8943e; color: var(--color-navy, #0d1c32); }

    /* ── SHARED UTILITIES ─────────────────────────────────── */
    .ar-section { padding: 5.5rem 0; }
    .ar-section-sm { padding: 4rem 0; }
    .ar-wrap {
      max-width: 1160px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    .ar-eyebrow {
      display: block;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--color-gold, #c9a84c);
      margin-bottom: 0.75rem;
    }
    .ar-eyebrow-light {
      color: rgba(201,168,76,0.85);
    }
    .ar-rule {
      width: 40px; height: 3px;
      background: var(--color-gold, #c9a84c);
      border: none; margin: 1rem 0 1.75rem;
      border-radius: 2px;
      display: block;
    }
    .ar-rule-center { margin-left: auto; margin-right: auto; }
    .ar-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--color-gold, #c9a84c);
      color: var(--color-navy, #0d1c32);
      font-size: 0.95rem;
      font-weight: 700;
      padding: 0.95rem 2rem;
      border-radius: 4px;
      text-decoration: none;
      letter-spacing: 0.01em;
      transition: background 0.15s, transform 0.15s;
    }
    .ar-btn:hover { background: #b8943e; transform: translateY(-1px); color: var(--color-navy, #0d1c32); }
    .ar-btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: transparent;
      color: rgba(255,255,255,0.75);
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0.9rem 1.75rem;
      border-radius: 4px;
      border: 1px solid rgba(255,255,255,0.25);
      text-decoration: none;
      transition: border-color 0.15s, color 0.15s;
    }
    .ar-btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: #fff; }

    /* ── HERO ─────────────────────────────────────────────── */
    .ar-hero {
      background: var(--color-navy, #0d1c32);
      padding: 5.5rem 0 6rem;
      position: relative;
      overflow: hidden;
    }
    .ar-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url('/static/images/ai-circuit-bg-1024.webp') center/cover no-repeat;
      opacity: 0.07;
    }
    .ar-hero::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 180px;
      background: linear-gradient(to bottom, transparent, rgba(13,28,50,0.6));
      pointer-events: none;
    }
    .ar-hero-inner {
      position: relative;
      z-index: 1;
      max-width: 820px;
      padding: 0 2rem;
      margin: 0 auto;
    }
    .ar-hero-pill {
      display: inline-flex;
      align-items: center;
      border: 1px solid rgba(201,168,76,0.35);
      border-radius: 100px;
      padding: 0.3rem 0.9rem;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-gold-light, #e0b84c);
      margin-bottom: 1.75rem;
    }
    .ar-hero h1 {
      font-size: clamp(2.2rem, 4.5vw, 3.5rem);
      font-weight: 800;
      color: #fff;
      line-height: 1.1;
      margin: 0 0 1.5rem;
    }
    .ar-hero h1 em {
      font-style: italic;
      color: var(--color-gold-light, #e0b84c);
    }
    .ar-hero-sub {
      font-size: 1.08rem;
      color: rgba(255,255,255,0.72);
      line-height: 1.8;
      margin-bottom: 2.5rem;
      max-width: 680px;
    }
    .ar-hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      margin-bottom: 2rem;
    }
    .ar-hero-support {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.38);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .ar-hero-support::before {
      content: '';
      display: inline-block;
      width: 18px; height: 1px;
      background: rgba(255,255,255,0.25);
    }

    /* ── TRUST BAR ────────────────────────────────────────── */
    .ar-trust {
      background: var(--color-bg-warm, #f2efe9);
      border-top: 1px solid #e4e0d8;
      border-bottom: 1px solid #e4e0d8;
      padding: 1.25rem 0;
    }
    .ar-trust-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.35rem 1.75rem;
      align-items: center;
    }
    .ar-trust-item {
      font-size: 0.72rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--color-text-muted, #7a7266);
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .ar-trust-item::before {
      content: '';
      width: 4px; height: 4px;
      border-radius: 50%;
      background: var(--color-gold, #c9a84c);
      display: inline-block;
      flex-shrink: 0;
    }

    /* ── REAL PROBLEM ─────────────────────────────────────── */
    .ar-s2 { background: #fff; }
    .ar-s2-grid {
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 5rem;
      align-items: start;
    }
    @media (max-width: 880px) { .ar-s2-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .ar-s2 h2 {
      font-size: clamp(1.55rem, 2.8vw, 2.15rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      line-height: 1.2;
      margin-bottom: 1rem;
    }
    .ar-s2 p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.78;
      margin-bottom: 1.1rem;
    }
    .ar-pullquote {
      margin: 2.5rem 0 0;
      padding: 1.5rem 1.75rem;
      background: var(--color-bg-soft, #f8f7f4);
      border-left: 3px solid var(--color-gold, #c9a84c);
      border-radius: 0 6px 6px 0;
    }
    .ar-pullquote p {
      font-family: var(--font-heading, Georgia, serif);
      font-size: 1.08rem;
      font-style: italic;
      color: var(--color-navy, #0d1c32);
      line-height: 1.65;
      margin: 0;
    }
    /* Right col — image + badge */
    .ar-s2-img-wrap {
      position: sticky;
      top: 2rem;
      border-radius: 8px;
      overflow: hidden;
    }
    .ar-s2-img-wrap img {
      width: 100%;
      height: 460px;
      object-fit: cover;
      object-position: center;
      display: block;
    }
    .ar-s2-img-badge {
      background: var(--color-navy, #0d1c32);
      border-left: 3px solid var(--color-gold, #c9a84c);
      padding: 1rem 1.25rem;
    }
    .ar-s2-img-badge p {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.75);
      line-height: 1.55;
      margin: 0;
    }
    .ar-s2-img-badge strong { color: #fff; }

    /* ── SYMPTOM GRID ─────────────────────────────────────── */
    .ar-s3 { background: var(--color-bg-soft, #f8f7f4); }
    .ar-s3-head { text-align: center; margin-bottom: 3rem; }
    .ar-s3-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      max-width: 560px;
      margin: 0 auto;
    }
    .ar-symptom-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
    @media (max-width: 860px) { .ar-symptom-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 520px)  { .ar-symptom-grid { grid-template-columns: 1fr; } }
    .ar-symptom-card {
      background: #fff;
      border: 1px solid #e8e3da;
      border-top: 2px solid var(--color-gold, #c9a84c);
      border-radius: 6px;
      padding: 1.5rem;
    }
    .ar-symptom-num {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold, #c9a84c);
      display: block;
      margin-bottom: 0.6rem;
    }
    .ar-symptom-card h4 {
      font-family: var(--font-heading, Georgia, serif);
      font-size: 1rem;
      font-weight: 400;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.5rem;
      line-height: 1.35;
    }
    .ar-symptom-card p {
      font-size: 0.88rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.65;
      margin: 0;
    }

    /* ── WHY AI FAILS ─────────────────────────────────────── */
    .ar-s4 {
      background: var(--color-navy, #0d1c32);
      position: relative;
      overflow: hidden;
    }
    .ar-s4::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url('/static/images/ai-circuit-bg-1024.webp') center/cover no-repeat;
      opacity: 0.05;
    }
    .ar-s4-inner { position: relative; z-index: 1; }
    .ar-s4-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: start;
    }
    @media (max-width: 820px) { .ar-s4-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .ar-s4 h2 {
      font-size: clamp(1.55rem, 2.8vw, 2.15rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 0.75rem;
    }
    .ar-s4 h2 em { font-style: italic; color: var(--color-gold-light, #e0b84c); }
    .ar-s4 p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.65);
      line-height: 1.78;
      margin-bottom: 1.1rem;
    }
    .ar-fix-block { margin-top: 0; }
    .ar-fix-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 0.85rem;
      display: block;
    }
    .ar-fix-label-wrong { color: rgba(255,100,100,0.7); }
    .ar-fix-label-right { color: var(--color-gold, #c9a84c); }
    .ar-fix-list {
      list-style: none;
      padding: 0; margin: 0 0 2rem;
    }
    .ar-fix-list li {
      font-size: 0.92rem;
      color: rgba(255,255,255,0.68);
      padding: 0.55rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      display: flex;
      gap: 0.65rem;
      align-items: flex-start;
      line-height: 1.6;
    }
    .ar-fix-list li:last-child { border-bottom: none; }
    .ar-fix-list.wrong li::before {
      content: '✕';
      color: rgba(255,120,120,0.7);
      font-weight: 700;
      flex-shrink: 0;
      font-size: 0.85rem;
      margin-top: 1px;
    }
    .ar-fix-list.right li::before {
      content: '✓';
      color: var(--color-gold, #c9a84c);
      font-weight: 700;
      flex-shrink: 0;
      font-size: 0.85rem;
      margin-top: 1px;
    }
    .ar-fix-list.right li { color: rgba(255,255,255,0.82); }

    /* ── WHAT THIS IS ─────────────────────────────────────── */
    .ar-s5 { background: var(--color-bg-warm, #f2efe9); }
    .ar-s5-grid {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 5rem;
      align-items: center;
    }
    @media (max-width: 880px) { .ar-s5-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .ar-s5 h2 {
      font-size: clamp(1.55rem, 2.8vw, 2.15rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      line-height: 1.2;
      margin-bottom: 1rem;
    }
    .ar-s5 p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.78;
      margin-bottom: 1.1rem;
    }
    .ar-notlist-box {
      background: #fff;
      border: 1px solid #e4e0d8;
      border-radius: 8px;
      padding: 1.5rem 1.75rem;
      margin-top: 0.5rem;
    }
    .ar-notlist-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-text-muted, #7a7266);
      margin-bottom: 0.85rem;
      display: block;
    }
    .ar-notlist {
      list-style: none;
      padding: 0; margin: 0;
    }
    .ar-notlist li {
      font-size: 0.9rem;
      color: var(--color-text-muted, #7a7266);
      padding: 0.3rem 0;
      display: flex;
      gap: 0.55rem;
      align-items: flex-start;
    }
    .ar-notlist li::before {
      content: '×';
      color: rgba(201,168,76,0.55);
      font-weight: 700;
      flex-shrink: 0;
    }
    /* Right — image */
    .ar-s5-img {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 12px 40px rgba(13,28,50,0.13);
    }
    .ar-s5-img img {
      width: 100%;
      height: 440px;
      object-fit: cover;
      object-position: center;
      display: block;
    }

    /* ── THREE SESSIONS ───────────────────────────────────── */
    .ar-s6 { background: #fff; }
    .ar-s6-head { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
    .ar-s6-head h2 {
      font-size: clamp(1.55rem, 2.8vw, 2.15rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.75rem;
    }
    .ar-s6-head p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
    }
    .ar-session-stack {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }
    .ar-session {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 3rem;
      align-items: start;
      padding-bottom: 2.5rem;
      border-bottom: 1px solid #ede9e1;
    }
    .ar-session:last-child { border-bottom: none; padding-bottom: 0; }
    @media (max-width: 700px) { .ar-session { grid-template-columns: 1fr; gap: 1.5rem; } }
    .ar-session-num-col { padding-top: 0.25rem; }
    .ar-session-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 3.5rem; height: 3.5rem;
      border-radius: 50%;
      background: var(--color-navy, #0d1c32);
      border: 2px solid var(--color-gold, #c9a84c);
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--color-gold, #c9a84c);
      margin-bottom: 0.85rem;
    }
    .ar-session-meta {
      font-size: 0.72rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.6;
    }
    .ar-session h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.35rem;
      line-height: 1.25;
    }
    .ar-session-sub {
      font-size: 0.82rem;
      font-style: italic;
      color: var(--color-gold-dark, #a07c30);
      margin-bottom: 1rem;
      display: block;
    }
    .ar-session p {
      font-size: 0.95rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.75;
      margin-bottom: 1rem;
    }
    .ar-session-leaves {
      margin: 1.25rem 0;
    }
    .ar-session-leaves-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.6rem;
      display: block;
    }
    .ar-session-leaves ul {
      list-style: none;
      padding: 0; margin: 0;
    }
    .ar-session-leaves li {
      font-size: 0.9rem;
      color: var(--color-text, #3d3830);
      padding: 0.3rem 0;
      display: flex;
      gap: 0.6rem;
      align-items: flex-start;
    }
    .ar-session-leaves li::before {
      content: '→';
      color: var(--color-gold, #c9a84c);
      font-size: 0.8rem;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .ar-session-ai-note {
      display: flex;
      gap: 0.65rem;
      align-items: flex-start;
      background: rgba(201,168,76,0.07);
      border: 1px solid rgba(201,168,76,0.2);
      border-radius: 5px;
      padding: 0.85rem 1rem;
      margin-top: 1rem;
    }
    .ar-session-ai-note .icon {
      font-size: 1rem;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .ar-session-ai-note p {
      font-size: 0.84rem;
      color: var(--color-text, #3d3830);
      line-height: 1.6;
      margin: 0;
    }
    .ar-session-ai-note strong { color: var(--color-gold-dark, #a07c30); }

    /* ── DELIVERABLES ─────────────────────────────────────── */
    .ar-s7 {
      background: var(--color-navy, #0d1c32);
      position: relative;
      overflow: hidden;
    }
    .ar-s7::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url('/static/images/desk-diagnostic-bg-1024.webp') center/cover no-repeat;
      opacity: 0.05;
    }
    .ar-s7-inner { position: relative; z-index: 1; }
    .ar-s7-head { text-align: center; margin-bottom: 3.5rem; }
    .ar-s7-head h2 {
      font-size: clamp(1.55rem, 2.8vw, 2.15rem);
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.75rem;
    }
    .ar-s7-head p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.58);
    }
    .ar-deliverables {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
    @media (max-width: 820px) { .ar-deliverables { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 520px)  { .ar-deliverables { grid-template-columns: 1fr; } }
    .ar-deliv-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-top: 2px solid var(--color-gold, #c9a84c);
      border-radius: 6px;
      padding: 1.5rem;
    }
    .ar-deliv-num {
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-gold, #c9a84c);
      display: block;
      margin-bottom: 0.5rem;
    }
    .ar-deliv-card h4 {
      font-family: var(--font-body, Inter, sans-serif);
      font-size: 0.95rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }
    .ar-deliv-card p {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.55);
      line-height: 1.65;
      margin: 0;
    }

    /* ── CASE STUDIES ─────────────────────────────────────── */
    .ar-s8 { background: var(--color-bg-soft, #f8f7f4); }
    .ar-s8-head { max-width: 700px; text-align: center; margin: 0 auto 4rem; }
    .ar-s8-head h2 {
      font-size: clamp(1.55rem, 2.8vw, 2.15rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.75rem;
    }
    .ar-s8-head p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
    }
    .ar-case-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    @media (max-width: 820px) { .ar-case-grid { grid-template-columns: 1fr; } }
    .ar-case-card {
      background: #fff;
      border: 1px solid #e8e3da;
      border-radius: 8px;
      overflow: hidden;
    }
    .ar-case-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      object-position: center;
      display: block;
    }
    .ar-case-body { padding: 1.75rem; }
    .ar-case-label {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold, #c9a84c);
      display: block;
      margin-bottom: 0.6rem;
    }
    .ar-case-card h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 1rem;
      line-height: 1.3;
    }
    .ar-case-card p {
      font-size: 0.9rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.72;
      margin-bottom: 0.9rem;
    }
    .ar-case-shift {
      margin-top: 1.25rem;
      border-top: 1px solid #ede9e1;
      padding-top: 1.25rem;
    }
    .ar-shift-row { margin-bottom: 0.65rem; }
    .ar-shift-label {
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--color-text-muted, #7a7266);
      display: block;
      margin-bottom: 0.2rem;
    }
    .ar-shift-before {
      font-size: 0.85rem;
      color: var(--color-text-muted, #7a7266);
      text-decoration: line-through;
    }
    .ar-shift-after {
      font-size: 0.9rem;
      color: var(--color-gold-dark, #a07c30);
      font-weight: 600;
    }

    /* ── IMAGE BREAK ──────────────────────────────────────── */
    .ar-imgbreak {
      position: relative;
      height: 320px;
      overflow: hidden;
    }
    .ar-imgbreak img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center 40%;
      display: block;
    }
    .ar-imgbreak-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(13,28,50,0.78) 0%, rgba(13,28,50,0.4) 60%, transparent 100%);
    }
    .ar-imgbreak-text {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      padding: 0 10%;
    }
    .ar-imgbreak-text blockquote {
      margin: 0;
      max-width: 680px;
    }
    .ar-imgbreak-text blockquote p {
      font-family: var(--font-heading, Georgia, serif);
      font-size: clamp(1.2rem, 2.5vw, 1.75rem);
      font-style: italic;
      color: #fff;
      line-height: 1.45;
      margin: 0 0 0.75rem;
    }
    .ar-imgbreak-text blockquote cite {
      font-size: 0.78rem;
      font-style: normal;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* ── CORBIN / ADVISOR ─────────────────────────────────── */
    .ar-s9 { background: var(--color-navy, #0d1c32); }
    .ar-s9-grid {
      display: grid;
      grid-template-columns: 340px 1fr;
      gap: 5rem;
      align-items: center;
    }
    @media (max-width: 820px) { .ar-s9-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .ar-s9-img {
      border-radius: 8px;
      overflow: hidden;
    }
    .ar-s9-img img {
      width: 100%;
      height: 420px;
      object-fit: cover;
      object-position: center top;
      display: block;
    }
    .ar-s9 h2 {
      font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
    .ar-s9 p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.65);
      line-height: 1.78;
      margin-bottom: 1rem;
    }
    .ar-s9 strong { color: rgba(255,255,255,0.88); }
    .ar-s9-name {
      font-size: 1.15rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.2rem;
    }
    .ar-s9-title {
      font-size: 0.82rem;
      color: rgba(255,255,255,0.45);
      margin-bottom: 1.75rem;
    }
    .ar-cred-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.75rem;
    }
    .ar-cred-chip {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 4px;
      padding: 0.3rem 0.75rem;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.58);
    }

    /* ── FAQ ──────────────────────────────────────────────── */
    .ar-s10 { background: #fff; }
    .ar-s10-head { max-width: 560px; margin-bottom: 3rem; }
    .ar-s10-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.75rem;
    }
    .ar-s10-head p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
    }
    .ar-faq-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }
    @media (max-width: 720px) { .ar-faq-grid { grid-template-columns: 1fr; } }
    .ar-faq-card {
      background: var(--color-bg-soft, #f8f7f4);
      border: 1px solid #e4e0d8;
      border-radius: 6px;
      padding: 1.5rem;
    }
    .ar-faq-card h4 {
      font-family: var(--font-body, Inter, sans-serif);
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.6rem;
      line-height: 1.4;
    }
    .ar-faq-card p {
      font-size: 0.88rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.65;
      margin: 0;
    }

    /* ── INVESTMENT ───────────────────────────────────────── */
    .ar-s11 { background: var(--color-bg-warm, #f2efe9); }
    .ar-s11-grid {
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 5rem;
      align-items: start;
    }
    @media (max-width: 880px) { .ar-s11-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .ar-s11 h2 {
      font-size: clamp(1.55rem, 2.8vw, 2.2rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      line-height: 1.2;
      margin-bottom: 1rem;
    }
    .ar-s11 p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #7a7266);
      line-height: 1.78;
      margin-bottom: 1rem;
    }
    .ar-risk-box {
      margin-top: 1.5rem;
      padding: 1.25rem 1.5rem;
      background: rgba(201,168,76,0.09);
      border: 1px solid rgba(201,168,76,0.25);
      border-radius: 6px;
    }
    .ar-risk-box p {
      font-size: 0.9rem;
      color: var(--color-text, #3d3830);
      margin: 0;
      line-height: 1.65;
    }
    .ar-risk-box strong { color: var(--color-navy, #0d1c32); }
    /* Pricing card */
    .ar-price-card {
      background: var(--color-navy, #0d1c32);
      border-radius: 10px;
      overflow: hidden;
      position: sticky;
      top: 2rem;
    }
    .ar-price-card-top {
      padding: 2rem;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      text-align: center;
    }
    .ar-price-card-badge {
      display: inline-block;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold, #c9a84c);
      background: rgba(201,168,76,0.1);
      border: 1px solid rgba(201,168,76,0.25);
      border-radius: 3px;
      padding: 0.2rem 0.6rem;
      margin-bottom: 1rem;
    }
    .ar-price-amount {
      font-size: 3.2rem;
      font-weight: 800;
      color: #fff;
      line-height: 1;
      margin-bottom: 0.25rem;
    }
    .ar-price-amount span {
      font-size: 1.5rem;
      font-weight: 600;
      color: rgba(255,255,255,0.5);
      vertical-align: top;
      margin-top: 0.4rem;
      display: inline-block;
    }
    .ar-price-sub {
      font-size: 0.82rem;
      color: rgba(255,255,255,0.45);
    }
    .ar-price-card-body { padding: 1.75rem 2rem; }
    .ar-price-includes-label {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: rgba(255,255,255,0.35);
      margin-bottom: 1rem;
      display: block;
    }
    .ar-price-includes {
      list-style: none;
      padding: 0; margin: 0 0 1.75rem;
    }
    .ar-price-includes li {
      font-size: 0.88rem;
      color: rgba(255,255,255,0.72);
      padding: 0.45rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      display: flex;
      gap: 0.65rem;
      align-items: flex-start;
      line-height: 1.55;
    }
    .ar-price-includes li:last-child { border-bottom: none; }
    .ar-price-includes li::before {
      content: '→';
      color: var(--color-gold, #c9a84c);
      font-size: 0.8rem;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .ar-price-cta {
      display: block;
      text-align: center;
      background: var(--color-gold, #c9a84c);
      color: var(--color-navy, #0d1c32);
      font-size: 0.92rem;
      font-weight: 700;
      padding: 0.95rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      transition: background 0.15s;
      margin-bottom: 0.75rem;
    }
    .ar-price-cta:hover { background: #b8943e; color: var(--color-navy, #0d1c32); }
    .ar-price-micro {
      text-align: center;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.32);
    }

    /* ── FINAL CTA ────────────────────────────────────────── */
    .ar-s12 {
      background: var(--color-navy, #0d1c32);
      position: relative;
      overflow: hidden;
      padding: 7rem 0;
      text-align: center;
    }
    .ar-s12::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.1) 0%, transparent 55%),
        url('/static/images/ai-circuit-bg-1024.webp') center/cover no-repeat;
      opacity: 0.08;
    }
    .ar-s12-inner {
      position: relative;
      z-index: 1;
      max-width: 680px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    .ar-s12 h2 {
      font-size: clamp(1.7rem, 3.5vw, 2.7rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.15;
      margin-bottom: 1.5rem;
    }
    .ar-s12 h2 em { font-style: italic; color: var(--color-gold-light, #e0b84c); }
    .ar-s12 p {
      font-size: 1rem;
      color: rgba(255,255,255,0.65);
      line-height: 1.78;
      margin-bottom: 2.5rem;
    }
    .ar-s12-micro {
      margin-top: 1rem;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.3);
    }

    /* ── FOOTER ───────────────────────────────────────────── */
    .ar-footer {
      background: var(--color-navy-deep, #0d1c2e);
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 2rem;
      text-align: center;
    }
    .ar-footer p {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.32);
      margin: 0.2rem 0;
    }
    .ar-footer a {
      color: rgba(255,255,255,0.38);
      text-decoration: none;
    }
    .ar-footer a:hover { color: var(--color-gold, #c9a84c); }
    .ar-footer-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 0.5rem;
    }

    /* ── POSITIONING BLOCK ───────────────────────────────── */
    .ar-position-block {
      background: var(--color-bg-soft, #f8f7f4);
      border-top: 1px solid #e4e0d8;
      border-bottom: 1px solid #e4e0d8;
      padding: 2rem 0;
    }
    .ar-position-block p {
      max-width: 820px;
      margin: 0 auto;
      text-align: center;
      font-size: 1.05rem;
      font-family: var(--font-heading, Georgia, serif);
      font-style: italic;
      color: var(--color-navy, #0d1c32);
      line-height: 1.7;
    }

    /* ── HONEST SECTION ──────────────────────────────────── */
    .ar-honest {
      background: var(--color-navy, #0d1c32);
      position: relative;
      overflow: hidden;
    }
    .ar-honest::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url('/static/images/ai-circuit-bg-1024.webp') center/cover no-repeat;
      opacity: 0.04;
    }
    .ar-honest-inner { position: relative; z-index: 1; }
    .ar-honest-grid {
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 5rem;
      align-items: center;
    }
    @media (max-width: 820px) { .ar-honest-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .ar-honest h2 {
      font-size: clamp(1.55rem, 2.8vw, 2.15rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
    .ar-honest p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.65);
      line-height: 1.78;
      margin-bottom: 1.1rem;
    }
    .ar-honest strong { color: rgba(255,255,255,0.88); }
    .ar-honest-callout {
      background: rgba(201,168,76,0.08);
      border: 1px solid rgba(201,168,76,0.22);
      border-radius: 8px;
      padding: 2rem;
    }
    .ar-honest-callout-label {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-gold, #c9a84c);
      display: block;
      margin-bottom: 1rem;
    }
    .ar-honest-callout p {
      font-family: var(--font-heading, Georgia, serif);
      font-size: 1.05rem;
      font-style: italic;
      color: rgba(255,255,255,0.82);
      line-height: 1.65;
      margin: 0;
    }

    /* ── BEFORE / AFTER ──────────────────────────────────── */
    .ar-ba { background: var(--color-bg-warm, #f2efe9); }
    .ar-ba-head { text-align: center; margin-bottom: 3rem; }
    .ar-ba-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
    }
    .ar-ba-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    @media (max-width: 680px) { .ar-ba-grid { grid-template-columns: 1fr; } }
    .ar-ba-col {
      border-radius: 8px;
      padding: 2rem;
    }
    .ar-ba-col.before {
      background: #fff;
      border: 1px solid #e8e3da;
    }
    .ar-ba-col.after {
      background: var(--color-navy, #0d1c32);
      border: 1px solid rgba(255,255,255,0.06);
    }
    .ar-ba-col-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      display: block;
      margin-bottom: 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid;
    }
    .ar-ba-col.before .ar-ba-col-label {
      color: var(--color-text-muted, #7a7266);
      border-color: #e4e0d8;
    }
    .ar-ba-col.after .ar-ba-col-label {
      color: var(--color-gold, #c9a84c);
      border-color: rgba(201,168,76,0.3);
    }
    .ar-ba-list {
      list-style: none;
      padding: 0; margin: 0;
    }
    .ar-ba-list li {
      padding: 0.6rem 0;
      border-bottom: 1px solid;
      display: flex;
      gap: 0.65rem;
      align-items: flex-start;
      font-size: 0.92rem;
      line-height: 1.6;
    }
    .ar-ba-list li:last-child { border-bottom: none; }
    .ar-ba-col.before .ar-ba-list li {
      color: var(--color-text-muted, #7a7266);
      border-color: #ede9e1;
    }
    .ar-ba-col.before .ar-ba-list li::before {
      content: '—';
      color: #ccc;
      flex-shrink: 0;
    }
    .ar-ba-col.after .ar-ba-list li {
      color: rgba(255,255,255,0.75);
      border-color: rgba(255,255,255,0.06);
    }
    .ar-ba-col.after .ar-ba-list li::before {
      content: '→';
      color: var(--color-gold, #c9a84c);
      flex-shrink: 0;
      font-size: 0.85rem;
      margin-top: 2px;
    }

    /* ── IS THIS FOR YOU ─────────────────────────────────── */
    .ar-fit { background: var(--color-bg-soft, #f8f7f4); }
    .ar-fit-head { text-align: center; margin-bottom: 3rem; }
    .ar-fit-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
    }
    .ar-fit-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    @media (max-width: 680px) { .ar-fit-grid { grid-template-columns: 1fr; } }
    .ar-fit-col {
      border-radius: 8px;
      padding: 2rem;
    }
    .ar-fit-col.yes {
      background: var(--color-navy, #0d1c32);
    }
    .ar-fit-col.no {
      background: #fff;
      border: 1px solid #e8e3da;
    }
    .ar-fit-col-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      display: block;
      margin-bottom: 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid;
    }
    .ar-fit-col.yes .ar-fit-col-label {
      color: var(--color-gold, #c9a84c);
      border-color: rgba(201,168,76,0.3);
    }
    .ar-fit-col.no .ar-fit-col-label {
      color: var(--color-text-muted, #7a7266);
      border-color: #e4e0d8;
    }
    .ar-fit-list {
      list-style: none;
      padding: 0; margin: 0;
    }
    .ar-fit-list li {
      padding: 0.55rem 0;
      border-bottom: 1px solid;
      display: flex;
      gap: 0.65rem;
      align-items: flex-start;
      font-size: 0.92rem;
      line-height: 1.6;
    }
    .ar-fit-list li:last-child { border-bottom: none; }
    .ar-fit-col.yes .ar-fit-list li {
      color: rgba(255,255,255,0.75);
      border-color: rgba(255,255,255,0.06);
    }
    .ar-fit-col.yes .ar-fit-list li::before {
      content: '✓';
      color: var(--color-gold, #c9a84c);
      font-weight: 700;
      flex-shrink: 0;
      font-size: 0.85rem;
    }
    .ar-fit-col.no .ar-fit-list li {
      color: var(--color-text-muted, #7a7266);
      border-color: #ede9e1;
    }
    .ar-fit-col.no .ar-fit-list li::before {
      content: '×';
      color: rgba(201,168,76,0.5);
      font-weight: 700;
      flex-shrink: 0;
    }

    /* ── URGENCY NOTE ────────────────────────────────────── */
    .ar-urgency-note {
      margin-top: 1.5rem;
      padding: 1.25rem 1.5rem;
      background: var(--color-bg-soft, #f8f7f4);
      border: 1px solid #e4e0d8;
      border-left: 3px solid var(--color-gold, #c9a84c);
      border-radius: 0 6px 6px 0;
    }
    .ar-urgency-note p {
      font-size: 0.88rem;
      color: var(--color-text-muted, #7a7266);
      margin: 0;
      line-height: 1.65;
    }
    .ar-urgency-note strong { color: var(--color-navy, #0d1c32); }
  </style>
</head>
<body>

  <!-- ── HEADER ─────────────────────────────────────────────── -->
  <header class="ar-header">
    <div class="ar-header-inner">
      <a href="/" class="ar-header-logo" aria-label="SMB Strategy Consultants — Home">
        <img src="/static/images/logo-horizontal-transparent.png" alt="SMB Strategy Consultants" width="180" height="38" />
      </a>
      <a href="#apply" class="ar-header-cta">Apply for the Deep Dive →</a>
    </div>
  </header>

  <!-- UPDATED COPY v2 -->

  <main>

    <!-- ── HERO ───────────────────────────────────────────────── -->
    <section class="ar-hero">
      <div class="ar-hero-inner">
        <span class="ar-hero-pill">For service businesses that have tried AI and not gotten traction</span>
        <h1>You've tried AI. It didn't stick. <em>Here's why — and what to do about it.</em></h1>
        <p class="ar-hero-sub">We diagnose what's blocking AI adoption in your business, identify the foundation issues underneath it, and give you a 90-day roadmap for where AI actually belongs — and where it doesn't.</p>
        <div class="ar-hero-actions">
          <a href="#apply" class="ar-btn">Apply for the AI Readiness Deep Dive →</a>
          <a href="#how-it-works" class="ar-btn-ghost">See How It Works</a>
        </div>
        <p class="ar-hero-support">Three 90-minute working sessions &nbsp;·&nbsp; $6,500 &nbsp;·&nbsp; Virtual or In-Person (Atlanta Metro)</p>
      </div>
    </section>

    <!-- ── TRUST BAR ───────────────────────────────────────────── -->
    <div class="ar-trust">
      <div class="ar-wrap">
        <div class="ar-trust-inner">
          <span class="ar-trust-item">Serving SMBs Since 2015</span>
          <span class="ar-trust-item">Trades &amp; Home Services</span>
          <span class="ar-trust-item">Legal &amp; Financial Planning</span>
          <span class="ar-trust-item">Healthcare &amp; Med Practices</span>
          <span class="ar-trust-item">Consulting &amp; Professional Services</span>
          <span class="ar-trust-item">$500K–$5M Revenue</span>
        </div>
      </div>
    </div>

    <!-- ── POSITIONING BLOCK ──────────────────────────────────── -->
    <div class="ar-position-block">
      <div class="ar-wrap">
        <p>The AI Readiness Deep Dive is a three-session diagnostic engagement for service businesses that have tried AI, not gotten traction, and need to understand the business constraints blocking useful adoption — before they waste more time, money, or team energy.</p>
      </div>
    </div>

    <!-- ── REAL PROBLEM ────────────────────────────────────────── -->
    <section class="ar-s2 ar-section">
      <div class="ar-wrap">
        <div class="ar-s2-grid">
          <div>
            <span class="ar-eyebrow">Why AI Isn't Working</span>
            <hr class="ar-rule" />
            <h2>Most businesses do this backwards. And it costs them.</h2>
            <p>They buy the tool first. Test random use cases. Hope the team figures it out. When that fails, they assume AI just doesn't work for businesses like theirs.</p>
            <p>Usually the real problem is that the workflow, decision path, or owner dependency underneath the tool was never addressed.</p>
            <p>AI doesn't create leverage in a business with process chaos, unclear roles, or an owner still at the center of every decision. It amplifies whatever's already there — unclear processes become automated unclear processes. Bottlenecks get faster, not smaller.</p>
            <p>The fix isn't a better tool. It's understanding what the tools actually need to work.</p>
            <div class="ar-pullquote">
              <p>"Most business owners don't have an AI problem. They have a readiness problem — and nobody told them that before they bought the subscription."</p>
            </div>
          </div>
          <div>
            <div class="ar-s2-img-wrap">
              <picture>
                <source type="image/webp" srcset="/static/images/section-overwhelmed-owner.webp" />
                <img src="/static/images/section-overwhelmed-owner.jpg" alt="Business owner overwhelmed by AI tools" loading="lazy" />
              </picture>
              <div class="ar-s2-img-badge">
                <p><strong>The sequence matters.</strong> Foundation first. AI deployment second. In that order, every time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SYMPTOM GRID ────────────────────────────────────────── -->
    <section class="ar-s3 ar-section">
      <div class="ar-wrap">
        <div class="ar-s3-head">
          <span class="ar-eyebrow">Sound Familiar?</span>
          <hr class="ar-rule ar-rule-center" />
          <h2>Here's what AI adoption failure actually looks like.</h2>
        </div>
        <div class="ar-symptom-grid">

          <div class="ar-symptom-card">
            <span class="ar-symptom-num">01</span>
            <h4>You bought the tools — they didn't stick</h4>
            <p>Worked for a week, maybe two. Then the team went back to doing it manually.</p>
          </div>

          <div class="ar-symptom-card">
            <span class="ar-symptom-num">02</span>
            <h4>You're still the one doing everything</h4>
            <p>AI was supposed to give you leverage. Instead it created a new job — prompting, checking, fixing.</p>
          </div>

          <div class="ar-symptom-card">
            <span class="ar-symptom-num">03</span>
            <h4>The output isn't usable</h4>
            <p>Generic content. Broken automations. Nothing you'd actually send a client.</p>
          </div>

          <div class="ar-symptom-card">
            <span class="ar-symptom-num">04</span>
            <h4>Your team doesn't trust it</h4>
            <p>You pushed it, they tolerated it, nobody adopted it. Another subscription nobody opens.</p>
          </div>

          <div class="ar-symptom-card">
            <span class="ar-symptom-num">05</span>
            <h4>You don't know where to start</h4>
            <p>Hundreds of tools, conflicting advice, more time researching than using.</p>
          </div>

          <div class="ar-symptom-card">
            <span class="ar-symptom-num">06</span>
            <h4>You were promised ROI — you got a bill</h4>
            <p>The subscriptions added up. The results didn't.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ── HONEST SECTION ─────────────────────────────────────── -->
    <section class="ar-honest ar-section">
      <div class="ar-wrap ar-honest-inner">
        <div class="ar-honest-grid">
          <div>
            <span class="ar-eyebrow ar-eyebrow-light">Worth Saying Out Loud</span>
            <hr class="ar-rule" />
            <h2>Sometimes the right answer is not more AI.</h2>
            <p>If your margins are unclear, approvals are inconsistent, roles are muddy, or your positioning is attracting the wrong work — AI will not fix that. It will help you do the wrong things faster.</p>
            <p>Part of what this engagement produces is clarity on where AI should wait. Not every workflow is ready. Not every bottleneck is an AI problem. Some constraints need to be addressed at the business level before a single tool gets added.</p>
            <p>That's not a failure. It's an honest read — which is the only kind worth paying for.</p>
          </div>
          <div class="ar-honest-callout">
            <span class="ar-honest-callout-label">The real outcome</span>
            <p>"You leave knowing where AI belongs in your business right now — and equally important, where it doesn't."</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── BEFORE / AFTER ─────────────────────────────────────── -->
    <section class="ar-ba ar-section">
      <div class="ar-wrap">
        <div class="ar-ba-head">
          <span class="ar-eyebrow">What Changes</span>
          <hr class="ar-rule ar-rule-center" />
          <h2>Before and after a clear diagnosis.</h2>
        </div>
        <div class="ar-ba-grid">
          <div class="ar-ba-col before">
            <span class="ar-ba-col-label">Before</span>
            <ul class="ar-ba-list">
              <li>Tools in place. Team not using them consistently.</li>
              <li>You suspect there's leverage somewhere — you can't tell what's real.</li>
              <li>Important decisions still run through you.</li>
              <li>Not sure if the problem is AI, process, team structure, or positioning.</li>
            </ul>
          </div>
          <div class="ar-ba-col after">
            <span class="ar-ba-col-label">After</span>
            <ul class="ar-ba-list">
              <li>You know the real constraint blocking leverage.</li>
              <li>You know which workflows need attention first — and which ones AI shouldn't touch yet.</li>
              <li>You have a 90-day roadmap, not a pile of ideas.</li>
              <li>The next move is clear: fix the foundation, adjust the approach, or hold off until the business is ready.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ── WHAT THIS IS ────────────────────────────────────────── -->
    <section class="ar-s5 ar-section">
      <div class="ar-wrap">
        <div class="ar-s5-grid">
          <div>
            <span class="ar-eyebrow">The AI Readiness Deep Dive</span>
            <hr class="ar-rule" />
            <h2>This is not an AI course. Not a software demo. It's a diagnosis — and a 90-day plan.</h2>
            <p>Three working sessions. Each one builds on the last. By the end, you know exactly why AI hasn't worked, what needs to change first, and where AI creates the most leverage once the foundation is set.</p>
            <p>Corbin runs every session. No junior consultants, no templated frameworks, no generic tool lists. The diagnosis is specific to your business — your tools, your workflows, your blockers.</p>
            <div class="ar-notlist-box">
              <span class="ar-notlist-label">This is not</span>
              <ul class="ar-notlist">
                <li>An AI tool recommendation service</li>
                <li>A generic productivity workshop</li>
                <li>A done-for-you implementation</li>
                <li>Advice without deliverables</li>
                <li>A pitch for a software platform</li>
              </ul>
            </div>
          </div>
          <div class="ar-s5-img">
            <picture>
              <source type="image/webp" srcset="/static/images/intensive-ai.webp" />
              <img src="/static/images/intensive-ai.jpg" alt="AI strategy session with business owner" loading="lazy" />
            </picture>
          </div>
        </div>
      </div>
    </section>

    <!-- ── THREE SESSIONS ──────────────────────────────────────── -->
    <section class="ar-s6 ar-section" id="how-it-works">
      <div class="ar-wrap">
        <div class="ar-s6-head">
          <span class="ar-eyebrow">How It Works</span>
          <hr class="ar-rule ar-rule-center" />
          <h2>Three sessions. Each one builds on the last.</h2>
          <p>Each session has a clear purpose and ends with something concrete in hand. This is a working diagnostic — not a presentation, not a training.</p>
        </div>

        <div class="ar-session-stack">

          <!-- Session 01 -->
          <div class="ar-session">
            <div class="ar-session-num-col">
              <div class="ar-session-num">01</div>
              <p class="ar-session-meta">90 minutes<br/>Session One</p>
            </div>
            <div>
              <h3>AI Readiness Assessment</h3>
              <span class="ar-session-sub">Why AI hasn't worked</span>
              <p>We go inside what you've already tried — which tools, what happened, why nothing stuck. Then we identify the primary blocker: process gaps, unclear roles, owner dependency, missing structure. You leave knowing exactly what's in the way and why it matters.</p>
              <div class="ar-session-leaves">
                <span class="ar-session-leaves-label">You leave with</span>
                <ul>
                  <li>A clear read on why AI hasn't worked — and why it's not the tools</li>
                  <li>The #1 constraint blocking AI adoption in your specific business</li>
                  <li>A baseline: where you are now vs. what AI-ready actually looks like</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Session 02 -->
          <div class="ar-session">
            <div class="ar-session-num-col">
              <div class="ar-session-num">02</div>
              <p class="ar-session-meta">90 minutes<br/>Session Two</p>
            </div>
            <div>
              <h3>Foundation Fix Plan</h3>
              <span class="ar-session-sub">What needs to change before AI can work</span>
              <p>Now we map the fix. What needs to be in place before AI can hold? Document processes? Clarify roles? Build handoff structure? We identify the 20% of changes that unlock 80% of the value — then sequence them into a step-by-step plan with a clear timeline.</p>
              <div class="ar-session-leaves">
                <span class="ar-session-leaves-label">You leave with</span>
                <ul>
                  <li>A Foundation Fix Plan — what to address, in what order, by when</li>
                  <li>A sequenced action list covering Weeks 1–6</li>
                  <li>Clarity that once the foundation is set, AI adoption becomes the best path forward</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Session 03 -->
          <div class="ar-session">
            <div class="ar-session-num-col">
              <div class="ar-session-num">03</div>
              <p class="ar-session-meta">90 minutes<br/>Session Three</p>
            </div>
            <div>
              <h3>AI Integration Roadmap</h3>
              <span class="ar-session-sub">Where AI belongs — and where it doesn't</span>
              <p>With the foundation mapped, we identify the specific places in your business where AI creates real leverage — and the places where it should wait. We prioritize by impact, sequence by readiness, and build a clear picture of what the next 90 days looks like.</p>
              <div class="ar-session-leaves">
                <span class="ar-session-leaves-label">You leave with</span>
                <ul>
                  <li>AI Integration Roadmap — where AI fits, which tools are relevant, likely value per use case</li>
                  <li>A 90-Day Clarity Plan — what to address in Weeks 1–6, what becomes possible in Weeks 7–12</li>
                  <li>A clear, defensible decision about where AI belongs in your business right now</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── DELIVERABLES ────────────────────────────────────────── -->
    <section class="ar-s7 ar-section">
      <div class="ar-wrap ar-s7-inner">
        <div class="ar-s7-head">
          <span class="ar-eyebrow ar-eyebrow-light">What You Walk Away With</span>
          <hr class="ar-rule ar-rule-center" />
          <h2>Six concrete outputs. Usable independently.</h2>
          <p>Together, a complete picture of what to fix, what to prioritize, and where AI actually belongs in your business.</p>
        </div>
        <div class="ar-deliverables">

          <div class="ar-deliv-card">
            <span class="ar-deliv-num">01</span>
            <h4>AI Readiness Assessment Report</h4>
            <p>Why AI hasn't worked, the primary blocker, current state vs. AI-ready.</p>
          </div>

          <div class="ar-deliv-card">
            <span class="ar-deliv-num">02</span>
            <h4>Foundation Fix Plan</h4>
            <p>What to address, step-by-step, with a timeline for Weeks 1–6.</p>
          </div>

          <div class="ar-deliv-card">
            <span class="ar-deliv-num">03</span>
            <h4>AI Integration Roadmap</h4>
            <p>Where AI creates leverage, which tools are relevant, expected value per use case.</p>
          </div>

          <div class="ar-deliv-card">
            <span class="ar-deliv-num">04</span>
            <h4>90-Day Clarity Plan</h4>
            <p>What to address now, what becomes possible after the foundation is set.</p>
          </div>

          <div class="ar-deliv-card">
            <span class="ar-deliv-num">05</span>
            <h4>Session Recordings</h4>
            <p>All three sessions recorded and shared. Reference them, share with your team, revisit as needed.</p>
          </div>

          <div class="ar-deliv-card">
            <span class="ar-deliv-num">06</span>
            <h4>30-Day Follow-Up Call</h4>
            <p>Progress check, open questions, plan adjustment if needed.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ── IMAGE BREAK / PULL QUOTE ───────────────────────────── -->
    <div class="ar-imgbreak">
      <picture>
        <source type="image/webp" srcset="/static/images/section-strategy-session.webp" />
        <img src="/static/images/section-strategy-session.jpg" alt="Strategy session in progress" loading="lazy" />
      </picture>
      <div class="ar-imgbreak-overlay"></div>
      <div class="ar-imgbreak-text">
        <blockquote>
          <p>"The businesses that got AI working didn't find better tools. They understood the foundation first."</p>
          <cite>— Corbin Cook, SMB Strategy Consultants</cite>
        </blockquote>
      </div>
    </div>

    <!-- ── CASE STUDIES ────────────────────────────────────────── -->
    <section class="ar-s8 ar-section">
      <div class="ar-wrap">
        <div class="ar-s8-head">
          <span class="ar-eyebrow">What This Looks Like When It Works</span>
          <hr class="ar-rule ar-rule-center" />
          <h2>The businesses that got AI working didn't find better tools. They understood the foundation first.</h2>
          <p>Two examples of what changes when the real blocker — not the assumed one — finally gets addressed.</p>
        </div>

        <div class="ar-case-grid">

          <div class="ar-case-card">
            <picture>
              <source type="image/webp" srcset="/static/images/mpl-team-strategy.webp" />
              <img class="ar-case-img" src="/static/images/mpl-team-strategy.jpg" alt="Healthcare services team strategy" loading="lazy" />
            </picture>
            <div class="ar-case-body">
              <span class="ar-case-label">Case Study 01</span>
              <h3>Healthcare Services Group</h3>
              <p>This group had tried AI for content and outreach. Nothing stuck. The team had quietly gone back to doing it manually.</p>
              <p>The assessment revealed the issue wasn't the tools. Their workflows weren't structured to support consistent AI output — no approval chain, no quality checkpoints, no defined guardrails for the AI to work within.</p>
              <p>Once the foundation was clear and the structure was in place, the output became usable. Campaigns now run with automated steps and human QA loops built into the workflow — not bolted on after the fact. The owner is no longer in the middle of every content decision. The output holds because the guardrails were designed correctly from the start.</p>
              <div class="ar-case-shift">
                <div class="ar-shift-row">
                  <span class="ar-shift-label">Assumed problem</span>
                  <p class="ar-shift-before">"We need better AI tools"</p>
                  <p class="ar-shift-after">→ Real problem: No workflow structure, no guardrails, no approval chain</p>
                </div>
              </div>
            </div>
          </div>

          <div class="ar-case-card">
            <picture>
              <source type="image/webp" srcset="/static/images/section-dashboard.webp" />
              <img class="ar-case-img" src="/static/images/section-dashboard.jpg" alt="SMB Strategy Consultants own AI implementation" loading="lazy" />
            </picture>
            <div class="ar-case-body">
              <span class="ar-case-label">Case Study 02</span>
              <h3>SMB Strategy Consultants — Our Own Business</h3>
              <p>We didn't learn this from the outside. We went through the same frustration — bought tools that were supposed to work, watched them not stick, and worked through why.</p>
              <p>What changed wasn't the tools. It was understanding what the tools needed to function. Once workflows were defined and quality checkpoints were built in, the same tools produced results we could trust and use consistently.</p>
              <p>Data analysis, report generation, client research, and outreach are now systematized inside our own business — not experimentally, but operationally. That's the experience behind this engagement. Not a framework built in theory — a process built through the same problem our clients are trying to solve.</p>
              <div class="ar-case-shift">
                <div class="ar-shift-row">
                  <span class="ar-shift-label">The shift</span>
                  <p class="ar-shift-before">"The AI sounds promising"</p>
                  <p class="ar-shift-after">→ "The AI is actually running the work"</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── IS THIS FOR YOU ─────────────────────────────────────── -->
    <section class="ar-fit ar-section">
      <div class="ar-wrap">
        <div class="ar-fit-head">
          <span class="ar-eyebrow">Who This Is Built For</span>
          <hr class="ar-rule ar-rule-center" />
          <h2>Is this the right engagement?</h2>
        </div>
        <div class="ar-fit-grid">
          <div class="ar-fit-col yes">
            <span class="ar-fit-col-label">This is for you if</span>
            <ul class="ar-fit-list">
              <li>You run a service business doing $500K–$5M</li>
              <li>You've tried AI but it hasn't created real operational change</li>
              <li>Too many decisions still depend on you</li>
              <li>You're not sure if the problem is AI, process, structure, or something else entirely</li>
              <li>You want clarity before spending more on tools, subscriptions, or outside help</li>
            </ul>
          </div>
          <div class="ar-fit-col no">
            <span class="ar-fit-col-label">This is not for you if</span>
            <ul class="ar-fit-list">
              <li>You want a course or general AI training</li>
              <li>You want someone to build your automations without first understanding the constraint</li>
              <li>Your business doesn't yet have repeatable workflows or a consistent team</li>
              <li>You want a tool recommendation instead of a real diagnosis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CORBIN ──────────────────────────────────────────────── -->
    <section class="ar-s9 ar-section">
      <div class="ar-wrap">
        <div class="ar-s9-grid">
          <div class="ar-s9-img">
            <picture>
              <source type="image/webp" srcset="/static/images/corbin-headshot-outdoor.webp" />
              <img src="/static/images/corbin-headshot-outdoor.jpg" alt="Corbin Cook — SMB Strategy Consultants" loading="lazy" />
            </picture>
          </div>
          <div>
            <span class="ar-eyebrow ar-eyebrow-light">Who Runs the Sessions</span>
            <hr class="ar-rule" />
            <p class="ar-s9-name">Corbin Cook</p>
            <p class="ar-s9-title">Founder, SMB Strategy Consultants · Atlanta, GA</p>
            <p>Corbin didn't come to AI as a consultant. He came to it as a business owner — went through the same frustration, bought tools that didn't stick, and worked through what was actually getting in the way.</p>
            <p>After building working AI systems inside his own business and for clients — with quality assurance loops and human checkpoints designed into the workflow from the start — he developed a clear pattern for what separates AI that holds from AI that gets abandoned.</p>
            <p>He's not reading from a framework. <strong>He's working from a process he's lived on both sides: the failed attempts and the working implementations.</strong></p>
            <p>SMB Strategy Consultants works with trades and service businesses doing $500K–$5M — HVAC, legal, healthcare, consulting, financial services — who want to understand where AI actually belongs in their business before they spend another quarter finding out the hard way.</p>
            <div class="ar-cred-chips">
              <span class="ar-cred-chip">CEPA Certified</span>
              <span class="ar-cred-chip">AASBC Member</span>
              <span class="ar-cred-chip">Value Builder Advisor</span>
              <span class="ar-cred-chip">Capitaliz Partner</span>
              <span class="ar-cred-chip">Serving SMBs Since 2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FAQ ────────────────────────────────────────────────── -->
    <section class="ar-s10 ar-section">
      <div class="ar-wrap">
        <div class="ar-s10-head">
          <span class="ar-eyebrow">Common Questions</span>
          <hr class="ar-rule" />
          <h2>Answers before you apply.</h2>
          <p>If you have a question that isn't addressed here, we'd rather answer it upfront.</p>
        </div>
        <div class="ar-faq-grid">

          <div class="ar-faq-card">
            <h4>"We already use ChatGPT. Why would we need this?"</h4>
            <p>Using AI and using it well are different things. The issue is usually that the workflow underneath is unclear, the use cases are weak, or the owner is still the bottleneck. This helps you figure out what's actually worth addressing — and what to stop spending time on.</p>
          </div>

          <div class="ar-faq-card">
            <h4>"How do I know this won't become another unused initiative?"</h4>
            <p>Because this is about decision clarity, not tool enthusiasm. You leave with a roadmap tied to your real constraints, your actual business model, and what your team can realistically act on over 90 days.</p>
          </div>

          <div class="ar-faq-card">
            <h4>"Why not just hire someone to build the automations?"</h4>
            <p>Adding automation to a broken workflow creates faster confusion, not better results. This helps you understand what should be addressed first, what should be structured second, and what should stay human. That sequence matters before anyone builds anything.</p>
          </div>

          <div class="ar-faq-card">
            <h4>"What if the real problem isn't AI?"</h4>
            <p>Then that's still a valuable outcome. This engagement is designed to surface the real constraint — whether it's owner dependency, workflow gaps, unclear roles, or positioning. You leave with a clear answer either way.</p>
          </div>

          <div class="ar-faq-card">
            <h4>"Why $6,500 before implementation?"</h4>
            <p>Because clarity before action prevents expensive mistakes. You're not paying for software setup. You're paying to understand the real leverage points in your business before another quarter gets spent in the wrong direction.</p>
          </div>

          <div class="ar-faq-card">
            <h4>"What if we're not ready for AI yet?"</h4>
            <p>That's exactly the kind of thing this is meant to answer. Sometimes the right next move is AI. Sometimes it's fixing the foundation first. The point is to stop guessing.</p>
          </div>

          <div class="ar-faq-card">
            <h4>"Will we leave with something tangible?"</h4>
            <p>Yes. A scored assessment, a foundation fix plan, a workflow priority map, and a 90-day roadmap showing what to address, what to prioritize, and what to set aside.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ── INVESTMENT ──────────────────────────────────────────── -->
    <section class="ar-s11 ar-section" id="apply">
      <div class="ar-wrap">
        <div class="ar-s11-grid">
          <div>
            <span class="ar-eyebrow">Investment</span>
            <hr class="ar-rule" />
            <h2>Three sessions. One clear decision. A business that knows where AI belongs.</h2>
            <p>By the end of the engagement, you will leave with one of three outcomes: a clear 90-day roadmap for where AI belongs, a clear non-AI constraint that needs to come first, or a clear decision that now isn't the right time.</p>
            <div class="ar-risk-box">
              <p><strong>If none of those is clear by the end of the sessions, we continue at no additional cost until it is.</strong> The engagement doesn't end when the last recording stops.</p>
            </div>
            <div class="ar-urgency-note">
              <p><strong>Limited spots each month.</strong> This is a hands-on engagement, not a course. We limit spots so the pre-work review, session preparation, and roadmap stay genuinely specific to each business. Pre-work is required 48 hours before each session. Once the current cycle is filled, the next opening rolls to the following month.</p>
            </div>
          </div>
          <div class="ar-price-card">
            <div class="ar-price-card-top">
              <span class="ar-price-card-badge">AI Readiness Deep Dive</span>
              <div class="ar-price-amount"><span>$</span>6,500</div>
              <p class="ar-price-sub">Three 90-minute working sessions</p>
            </div>
            <div class="ar-price-card-body">
              <span class="ar-price-includes-label">Everything included</span>
              <ul class="ar-price-includes">
                <li>Three 90-minute working sessions — Assessment, Foundation Fix, AI Integration Roadmap</li>
                <li>Pre-session review before each call — no starting from scratch</li>
                <li>AI Readiness Assessment Report</li>
                <li>Foundation Fix Plan (Weeks 1–6)</li>
                <li>AI Integration Roadmap with value estimates per use case</li>
                <li>90-Day Clarity Plan with sequenced priorities</li>
                <li>All session recordings</li>
                <li>30-day follow-up call</li>
              </ul>
              <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="ar-price-cta">Apply for the AI Readiness Deep Dive →</a>
              <p class="ar-price-micro">Free to apply · Limited spots each month · We review for fit before scheduling</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FINAL CTA ───────────────────────────────────────────── -->
    <section class="ar-s12">
      <div class="ar-s12-inner">
        <span class="ar-eyebrow ar-eyebrow-light" style="text-align:center; display:block; margin-bottom:1.5rem;">Ready When You Are</span>
        <h2>The tools work. Your business just needs to be <em>ready for them.</em></h2>
        <p>The owners who've gotten AI working didn't find better tools. They understood what was blocking adoption first — then moved in the right order. That's what three sessions produces.</p>
        <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="ar-btn">Apply for the AI Readiness Deep Dive →</a>
        <p class="ar-s12-micro">Free to apply · No commitment until we confirm fit · Limited spots each month</p>
      </div>
    </section>

  </main>

  <!-- ── FOOTER ──────────────────────────────────────────────── -->
  <footer class="ar-footer">
    <p>&copy; 2026 SMB Strategy Consultants, LLC</p>
    <div class="ar-footer-links">
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms-conditions">Terms of Service</a>
      <a href="/">smbstrategyconsultants.com</a>
    </div>
  </footer>

</body>
</html>`

  return c.html(html)
})

export default aiReadinessDeepDive
