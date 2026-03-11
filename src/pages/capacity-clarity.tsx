import { Hono } from 'hono'

const capacityClarity = new Hono()

capacityClarity.get('/', (c) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="The Capacity Clarity Session: a focused 45-minute diagnostic for owner-led service businesses hitting a ceiling because too much still runs through the founder." />
  <title>Capacity Clarity Session — SMB Strategy Consultants</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link href="/static/style.css" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }

    /* ── ANNOUNCEMENT BAR ─────────────────────────────────── */
    .cc-announce {
      background: var(--color-gold, #c9a84c);
      padding: 0.55rem 1rem;
      text-align: center;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-navy, #0d1c32);
    }
    .cc-announce span { margin-right: 0.5rem; }

    /* ── LOGO HEADER ──────────────────────────────────────── */
    .cc-header {
      background: var(--color-navy, #0d1c32);
      border-bottom: 1px solid rgba(255,255,255,0.08);
      padding: 1.5rem 2rem;
      text-align: center;
    }
    .cc-header-inner {
      max-width: 1160px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
    .cc-header-logo-wrap {
      display: inline-block;
      background: #fff;
      border-radius: 6px;
      padding: 0.6rem 1.25rem;
    }
    .cc-header img { height: 60px; width: auto; display: block; }

    /* ── HERO — 2-COLUMN SPLIT ────────────────────────────── */
    .cc-hero {
      background: var(--color-navy, #0d1c32);
      padding: 5rem 0 5.5rem;
      position: relative;
      overflow: hidden;
    }
    .cc-hero::after {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 55%;
      height: 100%;
      background: radial-gradient(ellipse at 80% 30%, rgba(201,168,76,0.07) 0%, transparent 65%);
      pointer-events: none;
    }
    .cc-hero-grid {
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 4rem;
      align-items: center;
      max-width: 1160px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    @media (max-width: 900px) {
      .cc-hero-grid { grid-template-columns: 1fr; gap: 3rem; }
    }

    /* Left col */
    .cc-hero-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      border: 1px solid rgba(201,168,76,0.4);
      border-radius: 100px;
      padding: 0.3rem 0.85rem;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-gold-light, #e0b84c);
      margin-bottom: 1.5rem;
    }
    .cc-hero-pill::before {
      content: '+';
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--color-gold, #c9a84c);
    }
    .cc-hero h1 {
      font-size: clamp(2.4rem, 5vw, 3.6rem);
      font-weight: 800;
      color: #fff;
      line-height: 1.1;
      margin: 0 0 1.5rem;
    }
    .cc-hero h1 em {
      font-style: italic;
      color: var(--color-gold-light, #e0b84c);
      font-weight: 800;
    }
    .cc-hero-sub {
      font-size: 1rem;
      color: rgba(255,255,255,0.72);
      line-height: 1.75;
      margin-bottom: 2.25rem;
      max-width: 500px;
    }
    .cc-hero-cta-row { display: flex; flex-direction: column; gap: 0.9rem; align-items: flex-start; }
    .cc-hero-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--color-gold, #c9a84c);
      color: var(--color-navy, #0d1c32);
      font-size: 0.92rem;
      font-weight: 700;
      padding: 0.85rem 1.75rem;
      border-radius: 4px;
      text-decoration: none;
      letter-spacing: 0.01em;
      transition: background 0.15s, transform 0.15s;
    }
    .cc-hero-btn:hover { background: #b8943e; transform: translateY(-1px); }
    .cc-hero-btn .arrow { font-size: 1rem; }
    .cc-hero-micro {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.38);
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .cc-hero-micro::before { content: '✓'; color: var(--color-gold, #c9a84c); font-size: 0.8rem; }

    /* Right col — takeaway card */
    .cc-hero-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-top: 3px solid var(--color-gold, #c9a84c);
      border-radius: 8px;
      padding: 2rem;
      position: relative;
      z-index: 1;
    }
    .cc-hero-card-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: rgba(255,255,255,0.4);
      margin-bottom: 0.75rem;
    }
    .cc-hero-card h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #fff;
      line-height: 1.3;
      margin-bottom: 1.5rem;
    }
    .cc-card-list {
      list-style: none;
      padding: 0; margin: 0 0 1.75rem;
    }
    .cc-card-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.65rem;
      padding: 0.55rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      font-size: 0.93rem;
      color: rgba(255,255,255,0.78);
      line-height: 1.6;
    }
    .cc-card-list li:last-child { border-bottom: none; }
    .cc-card-list li::before {
      content: '→';
      color: var(--color-gold, #c9a84c);
      font-size: 0.8rem;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .cc-card-meta {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: rgba(255,255,255,0.08);
      border-radius: 4px;
      overflow: hidden;
    }
    .cc-card-meta-item {
      background: rgba(255,255,255,0.03);
      padding: 0.75rem 1rem;
    }
    .cc-card-meta-item span {
      display: block;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: rgba(255,255,255,0.35);
      margin-bottom: 0.2rem;
    }
    .cc-card-meta-item strong {
      font-size: 0.95rem;
      font-weight: 700;
      color: #fff;
    }

    /* ── SHARED SECTION UTILITIES ─────────────────────────── */
    .cc-section { padding: 5.5rem 0; }
    .cc-container {
      max-width: 1160px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    .cc-eyebrow {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-gold, #c9a84c);
      display: block;
      margin-bottom: 0.75rem;
    }
    .cc-rule {
      width: 40px; height: 3px;
      background: var(--color-gold, #c9a84c);
      border: none; margin: 1.1rem 0 1.5rem;
      border-radius: 2px;
      display: block;
    }
    .cc-rule-center { margin: 1.1rem auto 1.5rem; }

    /* ── SECTION 2 — THE REAL PROBLEM: image left, list right ─ */
    .cc-s2 { background: var(--color-bg-soft, #f8f7f4); }
    .cc-s2-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
    }
    @media (max-width: 820px) { .cc-s2-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .cc-s2-img {
      border-radius: 8px;
      overflow: hidden;
      position: relative;
    }
    .cc-s2-img img {
      width: 100%;
      height: 480px;
      object-fit: cover;
      object-position: center top;
      display: block;
    }
    .cc-s2-img-badge {
      position: absolute;
      bottom: 1.5rem;
      left: 1.5rem;
      background: var(--color-navy, #0d1c32);
      border-left: 3px solid var(--color-gold, #c9a84c);
      border-radius: 4px;
      padding: 0.65rem 1rem;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.85);
      line-height: 1.4;
    }
    .cc-s2-img-badge strong { color: #fff; display: block; font-size: 0.85rem; }
    .cc-s2 h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      line-height: 1.25;
      margin-bottom: 1rem;
    }
    .cc-s2 p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #4a5568);
      line-height: 1.75;
      margin-bottom: 1.25rem;
    }
    .cc-dash-list {
      list-style: none;
      padding: 0; margin: 0 0 1.5rem;
    }
    .cc-dash-list li {
      display: flex;
      gap: 0.75rem;
      padding: 0.6rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.07);
      font-size: 0.97rem;
      color: var(--color-text, #1a2a3a);
      line-height: 1.65;
    }
    .cc-dash-list li:last-child { border-bottom: none; }
    .cc-dash-list li::before {
      content: '–';
      color: var(--color-gold, #c9a84c);
      font-weight: 700;
      flex-shrink: 0;
    }

    /* ── SECTION 3 — MISDIAGNOSIS: full-width dark with callout ── */
    .cc-s3 {
      background: var(--color-navy, #0d1c32);
    }
    .cc-s3-grid {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 5rem;
      align-items: start;
    }
    @media (max-width: 820px) { .cc-s3-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .cc-s3 h2 {
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 0.5rem;
    }
    .cc-s3-sub {
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--color-gold-light, #e0b84c);
      margin-bottom: 1.5rem;
    }
    .cc-s3 p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.68);
      line-height: 1.75;
      margin-bottom: 1rem;
    }
    .cc-s3-list {
      list-style: none;
      padding: 0; margin: 0;
    }
    .cc-s3-list li {
      display: flex;
      gap: 0.75rem;
      padding: 0.6rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      font-size: 0.97rem;
      color: rgba(255,255,255,0.78);
      line-height: 1.65;
    }
    .cc-s3-list li:last-child { border-bottom: none; }
    .cc-s3-list li::before {
      content: '–';
      color: var(--color-gold, #c9a84c);
      font-weight: 700;
      flex-shrink: 0;
    }
    /* Right callout box */
    .cc-s3-callout {
      background: rgba(201,168,76,0.08);
      border: 1px solid rgba(201,168,76,0.25);
      border-radius: 8px;
      padding: 1.75rem;
      position: sticky;
      top: 2rem;
    }
    .cc-s3-callout-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold-light, #e0b84c);
      margin-bottom: 1rem;
    }
    .cc-s3-callout p {
      font-size: 0.88rem;
      color: rgba(255,255,255,0.75);
      line-height: 1.7;
      margin-bottom: 0.75rem;
    }
    .cc-s3-callout p:last-child { margin-bottom: 0; }
    .cc-s3-callout strong { color: #fff; font-style: normal; }

    /* ── SECTION 4 — SYMPTOMS: full-width dark grid ─────────── */
    .cc-s4 { background: var(--color-bg-warm, #f2efe9); }
    .cc-s4-header { text-align: center; margin-bottom: 3rem; }
    .cc-s4-header h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      max-width: 560px;
      margin: 0 auto;
    }
    .cc-s4-header p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #4a5568);
      margin-top: 1rem;
    }
    .cc-symptom-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }
    @media (max-width: 900px) { .cc-symptom-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 540px)  { .cc-symptom-grid { grid-template-columns: 1fr; } }
    .cc-symptom-card {
      background: #fff;
      border: 1px solid #e8e3da;
      border-top: 2px solid var(--color-gold, #c9a84c);
      border-radius: 6px;
      padding: 1.25rem;
    }
    .cc-symptom-card p {
      font-size: 0.95rem;
      color: var(--color-text, #1a2a3a);
      line-height: 1.65;
      margin: 0;
    }
    .cc-symptom-card .cc-num {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold, #c9a84c);
      display: block;
      margin-bottom: 0.5rem;
      line-height: 1;
    }
    .cc-s4-footer {
      text-align: center;
      margin-top: 2.5rem;
      font-size: 0.93rem;
      color: var(--color-text-muted, #4a5568);
      font-style: italic;
    }

    /* ── SECTION 5 — WHAT THE SESSION DOES: image right ─────── */
    .cc-s5 { background: var(--color-bg-soft, #f8f7f4); }
    .cc-s5-grid {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 5rem;
      align-items: start;
    }
    @media (max-width: 860px) { .cc-s5-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .cc-s5 h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      line-height: 1.25;
      margin-bottom: 1rem;
    }
    .cc-s5 p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #4a5568);
      line-height: 1.75;
      margin-bottom: 1rem;
    }
    .cc-agenda {
      list-style: none;
      padding: 0; margin: 1.5rem 0 2rem;
      counter-reset: agenda;
    }
    .cc-agenda li {
      display: flex;
      gap: 1rem;
      padding: 0.9rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.07);
      font-size: 0.94rem;
      color: var(--color-text, #1a2a3a);
      line-height: 1.6;
    }
    .cc-agenda li:last-child { border-bottom: none; }
    .cc-agenda-num {
      min-width: 28px;
      height: 24px;
      border-radius: 3px;
      background: rgba(201,168,76,0.15);
      color: var(--color-gold, #c9a84c);
      font-size: 0.68rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .cc-s5-img-wrap {
      position: sticky;
      top: 2rem;
    }
    .cc-s5-img-wrap img {
      width: 100%;
      height: 380px;
      object-fit: cover;
      border-radius: 8px;
      display: block;
    }
    /* ── DIAGNOSIS BREAK — full-width statement ────────────── */
    .cc-diagnosis-break {
      background: var(--color-navy, #0d1c32);
      padding: 5rem 0;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cc-diagnosis-break::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.09) 0%, transparent 65%);
      pointer-events: none;
    }
    .cc-diagnosis-break-inner {
      max-width: 760px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 1;
    }
    .cc-diagnosis-eyebrow {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--color-gold, #c9a84c);
      display: block;
      margin-bottom: 1.5rem;
    }
    .cc-diagnosis-quote {
      font-size: clamp(1.5rem, 3.2vw, 2.4rem);
      font-weight: 800;
      color: #fff;
      line-height: 1.25;
      margin: 0 0 0.5rem;
    }
    .cc-diagnosis-quote em {
      font-style: italic;
      color: var(--color-gold-light, #e0b84c);
    }
    .cc-diagnosis-rule {
      width: 40px; height: 3px;
      background: var(--color-gold, #c9a84c);
      border: none;
      border-radius: 2px;
      margin: 1.5rem auto;
    }
    .cc-diagnosis-sub {
      font-size: 1.05rem;
      color: rgba(255,255,255,0.68);
      line-height: 1.75;
      margin: 0 auto 2.5rem;
      max-width: 580px;
    }

    /* ── SECTION 6 — WHO THIS IS FOR: 3-col split ────────────── */
    .cc-s6 { background: var(--color-navy, #0d1c32); }
    .cc-s6-header { margin-bottom: 3rem; }
    .cc-s6-header h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: #fff;
    }
    .cc-s6-grid {
      display: grid;
      grid-template-columns: 1fr 40px 1fr;
      gap: 2rem;
      align-items: start;
    }
    @media (max-width: 720px) { .cc-s6-grid { grid-template-columns: 1fr; gap: 2.5rem; } .cc-s6-divider { display: none; } }
    .cc-s6-col h4 {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      margin-bottom: 1rem;
    }
    .cc-s6-col.yes h4 { color: var(--color-gold-light, #e0b84c); }
    .cc-s6-col.no  h4 { color: rgba(255,255,255,0.3); }
    .cc-fit-list { list-style: none; padding: 0; margin: 0; }
    .cc-fit-list li {
      display: flex;
      gap: 0.65rem;
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-size: 0.95rem;
      line-height: 1.6;
      align-items: flex-start;
    }
    .cc-fit-list li:last-child { border-bottom: none; }
    .cc-s6-col.yes .cc-fit-list li { color: rgba(255,255,255,0.82); }
    .cc-s6-col.no  .cc-fit-list li { color: rgba(255,255,255,0.32); }
    .cc-fit-icon { flex-shrink: 0; font-style: normal; }
    .cc-s6-col.yes .cc-fit-icon { color: var(--color-gold, #c9a84c); }
    .cc-s6-col.no  .cc-fit-icon { color: rgba(255,255,255,0.2); }
    .cc-s6-divider {
      width: 1px;
      background: rgba(255,255,255,0.1);
      height: 100%;
      margin: 0 auto;
    }

    /* ── SECTION 7 — WHY NOW: bold statement + image ─────────── */
    .cc-s7 { background: var(--color-bg-warm, #f2efe9); }
    .cc-s7-grid {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 5rem;
      align-items: center;
    }
    @media (max-width: 860px) { .cc-s7-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .cc-s7-img {
      border-radius: 8px;
      overflow: hidden;
    }
    .cc-s7-img img {
      width: 100%;
      height: 440px;
      object-fit: cover;
      display: block;
    }
    .cc-s7 h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 1rem;
    }
    .cc-s7 > .cc-container > .cc-s7-grid > div > p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #4a5568);
      line-height: 1.75;
      margin-bottom: 1.25rem;
    }
    .cc-arrow-list {
      list-style: none;
      padding: 0; margin: 0 0 1.5rem;
    }
    .cc-arrow-list li {
      display: flex;
      gap: 0.75rem;
      padding: 0.6rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.07);
      font-size: 0.97rem;
      color: var(--color-text, #1a2a3a);
      line-height: 1.65;
    }
    .cc-arrow-list li:last-child { border-bottom: none; }
    .cc-arrow-list li::before {
      content: '→';
      color: var(--color-gold, #c9a84c);
      font-weight: 600;
      flex-shrink: 0;
    }
    .cc-s7-closer {
      font-size: 0.95rem;
      color: var(--color-text-muted, #4a5568);
      line-height: 1.75;
    }
    .cc-s7-closer strong { color: var(--color-navy, #0d1c32); }

    /* ── SECTION 8 — NEXT STEP: centered + 4 cards ───────────── */
    .cc-s8 { background: var(--color-bg-soft, #f8f7f4); }
    .cc-s8-head {
      max-width: 660px;
      margin: 0 auto 3rem;
      text-align: center;
    }
    .cc-s8-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 1rem;
    }
    .cc-s8-head p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #4a5568);
      line-height: 1.75;
    }
    .cc-s8-cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-bottom: 2.5rem;
    }
    @media (max-width: 860px) { .cc-s8-cards { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 480px)  { .cc-s8-cards { grid-template-columns: 1fr; } }
    .cc-s8-card {
      background: #fff;
      border: 1px solid #e8e3da;
      border-left: 3px solid var(--color-gold, #c9a84c);
      border-radius: 6px;
      padding: 1.5rem;
    }
    .cc-s8-card .cc-outcome-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold, #c9a84c);
      margin-bottom: 0.65rem;
      display: block;
    }
    .cc-s8-card p {
      font-size: 0.95rem;
      color: var(--color-text, #1a2a3a);
      line-height: 1.65;
      margin: 0;
    }
    .cc-s8-foot {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
      font-size: 0.93rem;
      color: var(--color-text-muted, #4a5568);
      line-height: 1.75;
    }

    /* ── SECTION 9 — AUTHORITY: image + text ─────────────────── */
    .cc-s9 { background: var(--color-navy, #0d1c32); }
    .cc-s9-grid {
      display: grid;
      grid-template-columns: 340px 1fr;
      gap: 5rem;
      align-items: center;
    }
    @media (max-width: 820px) { .cc-s9-grid { grid-template-columns: 1fr; gap: 3rem; } }
    .cc-s9-img {
      border-radius: 8px;
      overflow: hidden;
    }
    .cc-s9-img img {
      width: 100%;
      height: 420px;
      object-fit: cover;
      object-position: center 15%;
      display: block;
    }
    .cc-s9 h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.25;
      margin-bottom: 1.25rem;
    }
    .cc-s9 p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.68);
      line-height: 1.8;
      margin-bottom: 1rem;
    }
    .cc-s9 strong { color: #fff; }
    .cc-authority-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(201,168,76,0.1);
      border: 1px solid rgba(201,168,76,0.25);
      border-radius: 4px;
      padding: 0.55rem 1rem;
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--color-gold-light, #e0b84c);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-top: 1.5rem;
    }

    /* ── TESTIMONIALS ─────────────────────────────────────────── */
    .cc-testi { background: var(--color-bg-warm, #f2efe9); }
    .cc-testi-head {
      text-align: center;
      margin-bottom: 3rem;
    }
    .cc-testi-head h2 {
      font-size: clamp(1.4rem, 2.6vw, 2rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
    }
    .cc-testi-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    @media (max-width: 860px) { .cc-testi-grid { grid-template-columns: 1fr; max-width: 560px; margin: 0 auto; } }
    .cc-testi-card {
      background: #fff;
      border: 1px solid #e8e3da;
      border-radius: 8px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      position: relative;
    }
    .cc-testi-card::before {
      content: '“';
      position: absolute;
      top: 1.25rem;
      right: 1.5rem;
      font-size: 3.5rem;
      line-height: 1;
      color: rgba(201,168,76,0.18);
      font-family: Georgia, serif;
      font-weight: 700;
    }
    .cc-testi-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold, #c9a84c);
      display: block;
      margin-bottom: 0.75rem;
    }
    .cc-testi-quote {
      font-size: 0.97rem;
      color: var(--color-text, #1a2a3a);
      line-height: 1.75;
      flex: 1;
      margin: 0;
    }
    .cc-testi-author {
      border-top: 1px solid #e8e3da;
      padding-top: 1rem;
    }
    .cc-testi-author strong {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      display: block;
    }
    .cc-testi-author span {
      font-size: 0.78rem;
      color: var(--color-text-muted, #4a5568);
    }

    /* ── SECTION 10 — FAQ: 2 columns ─────────────────────────── */
    .cc-s10 { background: var(--color-bg-soft, #f8f7f4); }
    .cc-s10-head {
      text-align: center;
      margin-bottom: 3rem;
    }
    .cc-s10-head h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
    }
    .cc-faq-cols {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 4rem;
    }
    @media (max-width: 720px) { .cc-faq-cols { grid-template-columns: 1fr; } }
    .cc-faq-item {
      padding: 1.5rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.08);
    }
    .cc-faq-item:last-child { border-bottom: none; }
    .cc-faq-item h4 {
      font-size: 0.97rem;
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.55rem;
    }
    .cc-faq-item p {
      font-size: 0.95rem;
      color: var(--color-text-muted, #4a5568);
      line-height: 1.75;
      margin: 0;
    }

    /* ── SECTION 11 — FINAL CTA ───────────────────────────────── */
    .cc-s11 {
      background: var(--color-navy, #0d1c32);
      padding: 6.5rem 0 5.5rem;
      position: relative;
      overflow: hidden;
      text-align: center;
    }
    .cc-s11::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.1) 0%, transparent 60%);
      pointer-events: none;
    }
    .cc-s11-inner { max-width: 680px; margin: 0 auto; position: relative; z-index: 1; }
    .cc-s11 h2 {
      font-size: clamp(1.9rem, 3.8vw, 2.8rem);
      font-weight: 800;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 1.25rem;
    }
    .cc-s11-sub {
      font-size: 1.05rem;
      color: rgba(255,255,255,0.72);
      line-height: 1.75;
      max-width: 540px;
      margin: 0 auto 2.5rem;
    }
    .cc-s11-limit {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.38);
      max-width: 440px;
      margin: 1.25rem auto 0;
      line-height: 1.65;
    }
    .cc-s11-confirm {
      font-size: 0.76rem;
      color: rgba(255,255,255,0.28);
      max-width: 420px;
      margin: 0.65rem auto 0;
      line-height: 1.6;
    }
    .cc-s11-support {
      font-size: 0.68rem;
      color: rgba(255,255,255,0.2);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-top: 2.5rem;
    }

    /* ── MINIMAL FOOTER ───────────────────────────────────────── */
    .cc-footer {
      background: #080f1a;
      padding: 1.75rem 0;
      text-align: center;
    }
    .cc-footer p {
      font-size: 0.72rem;
      color: rgba(255,255,255,0.25);
      margin: 0.25rem 0;
    }
    .cc-footer a { color: rgba(255,255,255,0.35); text-decoration: none; }
    .cc-footer a:hover { color: rgba(255,255,255,0.6); }
  </style>
</head>
<body>

  <!-- ── ANNOUNCEMENT BAR ─────────────────────────────────────── -->
  <div class="cc-announce">
    <span>⚡</span> Limited availability — we cap diagnostic sessions to ensure every call gets full focus
  </div>

  <!-- ── LOGO-ONLY HEADER ─────────────────────────────────────── -->
  <header class="cc-header">
    <div class="cc-header-inner">
      <div class="cc-header-logo-wrap">
        <a href="/" aria-label="SMB Strategy Consultants">
          <img src="/static/images/logo-horizontal-transparent.png" alt="SMB Strategy Consultants" />
        </a>
      </div>
    </div>
  </header>

  <main>

    <!-- ═══════════════════════════════════════════════════════════
         SECTION 1 — HERO: left text + right takeaway card
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-hero">
      <div class="cc-hero-grid">

        <!-- Left column -->
        <div>
          <div class="cc-hero-pill">Capacity Clarity Session</div>
          <h1>
            Your business is growing.<br/>
            So why does it still<br/>
            <em>run through you?</em>
          </h1>
          <p class="cc-hero-sub">If approvals, decisions, problem-solving, and follow-through still funnel back to you — that is not a motivation problem. That is a structural bottleneck. And it has a cost most owners never stop to calculate.</p>
          <div class="cc-hero-cta-row">
            <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="cc-hero-btn" target="_blank" rel="noopener noreferrer">
              Book My Capacity Clarity Session <span class="arrow">→</span>
            </a>
            <p class="cc-hero-micro">45 minutes. Real clarity. A clear next step.</p>
          </div>
        </div>

        <!-- Right column — card -->
        <div class="cc-hero-card">
          <p class="cc-hero-card-label">What you walk away with</p>
          <h3>Clarity — not just a conversation.</h3>
          <ul class="cc-card-list">
            <li>Your primary owner bottleneck, specifically named</li>
            <li>What it is costing in time, energy, and growth drag</li>
            <li>Why it has persisted despite real effort</li>
            <li>The structural piece that is missing underneath it</li>
            <li>Your next 3 moves to reduce the pressure fastest</li>
          </ul>
          <div class="cc-card-meta">
            <div class="cc-card-meta-item">
              <span>Session length</span>
              <strong>45 Minutes</strong>
            </div>
            <div class="cc-card-meta-item">
              <span>Format</span>
              <strong>Live 1-on-1</strong>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SECTION 2 — THE REAL PROBLEM: image left / copy + list right
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-section cc-s2">
      <div class="cc-container">
        <div class="cc-s2-grid">

          <!-- Image -->
          <div class="cc-s2-img">
            <img
              src="/static/images/section-overwhelmed-owner.webp"
              alt="Owner at desk feeling the weight of the business"
            />
            <div class="cc-s2-img-badge">
              <strong>The hidden cost</strong>
              Every decision that flows back to you is time, margin, and momentum you will not get back.
            </div>
          </div>

          <!-- Copy -->
          <div>
            <span class="cc-eyebrow">The Real Problem</span>
            <h2>This is the stage where growth starts feeling heavier instead of better.</h2>
            <hr class="cc-rule" />
            <p>From the outside, the business may look healthy. Revenue is moving. The team is working. Clients are being served. But from the inside, it still feels like this:</p>
            <ul class="cc-dash-list">
              <li>You are the default decision-maker for things that should not require you</li>
              <li>The team needs too much clarification before they can move</li>
              <li>Problems wait in your inbox instead of getting solved</li>
              <li>Delegation happens — but nothing really changes</li>
              <li>Time away feels risky, not earned</li>
              <li>You are working harder than ever, and it is not getting easier</li>
            </ul>
            <p style="font-size:0.93rem; color:var(--color-text-muted,#4a5568); font-style:italic; line-height:1.75;">That is the signal that the business is still structured around the founder. And the longer that stays true, the more expensive growth becomes.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SECTION 3 — THE MISDIAGNOSIS: dark bg, copy left, callout right
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-section cc-s3">
      <div class="cc-container">
        <div class="cc-s3-grid">

          <!-- Left copy -->
          <div>
            <span class="cc-eyebrow" style="color:var(--color-gold-light,#e0b84c);">The Misdiagnosis</span>
            <h2>Most owners think they have a people problem.</h2>
            <p class="cc-s3-sub">Usually, they have a structure problem.</p>
            <p>This is where most businesses stall. The instinct is to push the team harder, hire someone better, communicate more often, or just hold people more accountable. But none of that fixes the root issue.</p>
            <p>Because when the founder is still the safety net for decisions, quality, follow-through, and coordination — the real problem is structural:</p>
            <ul class="cc-s3-list">
              <li>Ownership is fuzzy</li>
              <li>Roles are unclear</li>
              <li>Decision rights are not defined</li>
              <li>Handoffs break because nothing is documented</li>
              <li>The operating rhythm is too informal to support an independent team</li>
            </ul>
          </div>

          <!-- Right callout -->
          <div class="cc-s3-callout">
            <p class="cc-s3-callout-label">The result</p>
            <p>So the owner becomes the glue.</p>
            <p><strong>And glue does not scale.</strong></p>
            <p>The harder you hold it together, the harder it becomes to step back — and the more the business depends on your constant presence to function.</p>
            <p>Structure is the only thing that changes this. Not effort. Not more meetings. <strong>Structure.</strong></p>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SECTION 4 — SYMPTOMS: centered header + 8-card grid
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-section cc-s4">
      <div class="cc-container">
        <div class="cc-s4-header">
          <span class="cc-eyebrow" style="text-align:center; display:block;">What It Looks Like</span>
          <h2>What founder dependency actually looks like</h2>
          <p>You may not call it a bottleneck. But it probably shows up like this.</p>
        </div>
        <div class="cc-symptom-grid">
          <div class="cc-symptom-card">
            <span class="cc-num">01</span>
            <p>Team members ask you questions they should be able to answer</p>
          </div>
          <div class="cc-symptom-card">
            <span class="cc-num">02</span>
            <p>Things stall whenever you are unavailable</p>
          </div>
          <div class="cc-symptom-card">
            <span class="cc-num">03</span>
            <p>Standards slip unless you are personally checking them</p>
          </div>
          <div class="cc-symptom-card">
            <span class="cc-num">04</span>
            <p>Meetings happen — but ownership is never clear afterward</p>
          </div>
          <div class="cc-symptom-card">
            <span class="cc-num">05</span>
            <p>You keep hiring, but your load does not get lighter</p>
          </div>
          <div class="cc-symptom-card">
            <span class="cc-num">06</span>
            <p>You are still translating, clarifying, and cleaning up behind the team</p>
          </div>
          <div class="cc-symptom-card">
            <span class="cc-num">07</span>
            <p>You have capable people around you, but not enough leverage from them</p>
          </div>
          <div class="cc-symptom-card">
            <span class="cc-num">08</span>
            <p>The business works — because you are holding it together</p>
          </div>
        </div>
        <p class="cc-s4-footer">That is the exact pattern this session is designed to expose.</p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SECTION 5 — THE SESSION: agenda left, image + card right
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-section cc-s5">
      <div class="cc-container">
        <div class="cc-s5-grid">

          <!-- Left: agenda -->
          <div>
            <span class="cc-eyebrow">The Session</span>
            <h2>What happens in 45 minutes — and what you leave with</h2>
            <hr class="cc-rule" />
            <p>This is not a discovery call. It is not a free coaching session. It is a focused diagnostic.</p>
            <p>In 45 minutes, we will work through:</p>
            <ol class="cc-agenda">
              <li><span class="cc-agenda-num">01</span> Where founder dependency is showing up most in your business</li>
              <li><span class="cc-agenda-num">02</span> What it is actually costing — in time, energy, and growth drag</li>
              <li><span class="cc-agenda-num">03</span> Why it has persisted despite real effort and good intentions</li>
              <li><span class="cc-agenda-num">04</span> What structural piece is missing underneath the problem</li>
              <li><span class="cc-agenda-num">05</span> The next 3 moves that would reduce the pressure fastest</li>
            </ol>
            <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Reserve My Session</a>
          </div>

          <!-- Right: image only -->
          <div class="cc-s5-img-wrap">
            <img
              src="/static/images/hiw-strategy-session.webp"
              alt="Strategy session in progress"
              style="border-radius:8px;"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         DIAGNOSIS BREAK — full-width pull-quote + CTA
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-diagnosis-break">
      <div class="cc-diagnosis-break-inner">
        <span class="cc-diagnosis-eyebrow">What you leave with</span>
        <h2 class="cc-diagnosis-quote">
          You will not leave with a conversation.<br/>
          You will leave with <em>clarity.</em>
        </h2>
        <hr class="cc-diagnosis-rule" />
        <p class="cc-diagnosis-sub">A clear picture of where the dependency lives, what it is costing, and which structural piece needs to change first.</p>
        <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="cc-hero-btn" style="display:inline-flex; margin:0 auto;" target="_blank" rel="noopener noreferrer">
          Book My Capacity Clarity Session <span class="arrow">→</span>
        </a>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SECTION 6 — WHO THIS IS FOR: dark + 2-col fit filter
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-section cc-s6">
      <div class="cc-container">
        <div class="cc-s6-header">
          <span class="cc-eyebrow" style="color:var(--color-gold-light,#e0b84c);">Who This Is For</span>
          <h2 style="font-size:clamp(1.5rem,2.8vw,2.1rem); font-weight:700; color:#fff; margin-top:0.25rem;">This session is built for a specific kind of owner.</h2>
        </div>
        <div class="cc-s6-grid">
          <div class="cc-s6-col yes">
            <h4>This is for you if</h4>
            <ul class="cc-fit-list">
              <li><i class="cc-fit-icon">✓</i> You lead a service-based business with an existing team</li>
              <li><i class="cc-fit-icon">✓</i> Revenue is real, but the business still leans too hard on you</li>
              <li><i class="cc-fit-icon">✓</i> The company slows down or stalls when you step away</li>
              <li><i class="cc-fit-icon">✓</i> Delegation has happened — but not deeply enough to change your workload</li>
              <li><i class="cc-fit-icon">✓</i> You are tired of being the backstop for too much</li>
              <li><i class="cc-fit-icon">✓</i> You want structural change, not motivational advice</li>
              <li><i class="cc-fit-icon">✓</i> You know the next level requires a different way of operating</li>
            </ul>
          </div>
          <div class="cc-s6-divider"></div>
          <div class="cc-s6-col no">
            <h4>Probably not a fit if</h4>
            <ul class="cc-fit-list">
              <li><i class="cc-fit-icon">✗</i> You are a solo operator with no team</li>
              <li><i class="cc-fit-icon">✗</i> You want a general brainstorming call</li>
              <li><i class="cc-fit-icon">✗</i> You are unwilling to change how ownership, accountability, or decisions work</li>
              <li><i class="cc-fit-icon">✗</i> You want a quick fix rather than an operational change</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SECTION 7 — WHY NOW: image left + copy right
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-section cc-s7">
      <div class="cc-container">
        <div class="cc-s7-grid">

          <!-- Image -->
          <div class="cc-s7-img">
            <img
              src="/static/images/intensive-capacity.webp"
              alt="The cost of waiting compounds quietly"
            />
          </div>

          <!-- Copy -->
          <div>
            <span class="cc-eyebrow">Why Now</span>
            <h2>The longer this goes unaddressed, the more it compounds.</h2>
            <hr class="cc-rule" />
            <p style="font-size:0.97rem; color:var(--color-text-muted,#4a5568); line-height:1.75; margin-bottom:1.25rem;">Most owners tolerate this because the business is still functioning. But functioning is not the same as scalable. When founder dependency stays in place:</p>
            <ul class="cc-arrow-list">
              <li>Decision-making stays slow and centralized around you</li>
              <li>Leaders never fully develop underneath you</li>
              <li>Execution becomes uneven and hard to maintain at scale</li>
              <li>Your hours stay inflated — the calendar never actually clears</li>
              <li>Growth adds stress instead of freedom</li>
              <li>The business becomes harder to hand off, exit, or scale beyond what you can personally carry</li>
            </ul>
            <p class="cc-s7-closer">The cost is not dramatic. It is quiet. It shows up in the things you keep pushing to next quarter.<br/><br/><strong>This is the point where structure starts producing capacity. Not later. Now.</strong></p>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SECTION 8 — WHAT COMES NEXT: centered + 4 cards + close
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-section cc-s8">
      <div class="cc-container">
        <div class="cc-s8-head">
          <span class="cc-eyebrow" style="text-align:center; display:block;">What Comes Next</span>
          <h2>The diagnostic comes first. The prescription follows.</h2>
          <p>Not every business needs the same next step. For some owners, the session alone will create enough clarity to act. For the right fit, the next step is the <strong>Capacity Intensive</strong> — a focused 90-day engagement that installs the structure the business needs to run more independently.</p>
        </div>
        <div class="cc-s8-cards">
          <div class="cc-s8-card">
            <span class="cc-outcome-label">Outcome 01</span>
            <p>Clearer ownership and accountability across the team</p>
          </div>
          <div class="cc-s8-card">
            <span class="cc-outcome-label">Outcome 02</span>
            <p>A delegation structure that actually holds without your constant reinforcement</p>
          </div>
          <div class="cc-s8-card">
            <span class="cc-outcome-label">Outcome 03</span>
            <p>An operating cadence your team can run without the founder in the middle of everything</p>
          </div>
          <div class="cc-s8-card">
            <span class="cc-outcome-label">Outcome 04</span>
            <p>Less founder drag. More consistent, team-led execution.</p>
          </div>
        </div>
        <p class="cc-s8-foot">The session is where the clarity happens. The Intensive is where the structure gets built. If it is a fit, you will know by the end of the call.</p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SECTION 9 — AUTHORITY: headshot left + copy right
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-section cc-s9">
      <div class="cc-container">
        <div class="cc-s9-grid">

          <!-- Headshot -->
          <div class="cc-s9-img">
            <img
              src="/static/images/corbin-headshot-new.webp"
              alt="Corbin Cook — SMB Strategy Consultants"
            />
          </div>

          <!-- Copy -->
          <div>
            <span class="cc-eyebrow" style="color:var(--color-gold-light,#e0b84c);">Why This Approach Works</span>
            <h2>Most businesses do not become less dependent on the founder by accident.</h2>
            <hr class="cc-rule" />
            <p>They become less dependent when structure gets stronger than personality.</p>
            <p>That means installing role clarity, decision rights, accountability systems, and leadership rhythm — so the business runs on infrastructure instead of the founder's constant involvement.</p>
            <p>This is the operating principle behind the SMB Strategy Consultants framework: helping owner-led businesses move from reactive, founder-centered growth to a more professionally managed operation.</p>
            <p>Not through culture talks or motivational frameworks. <strong>Through structure.</strong></p>
            <div style="display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap; margin-top:1.75rem;">
              <img src="/static/images/badge-cepa.png"          alt="CEPA Certified"           loading="lazy" style="height:50px; width:auto; opacity:0.75; filter:grayscale(100%) brightness(2);" />
              <img src="/static/images/badge-aasbc.png"         alt="AASBC Member"             loading="lazy" style="height:50px; width:auto; opacity:0.75; filter:grayscale(100%) brightness(2);" />
              <img src="/static/images/badge-value-builder.png" alt="Value Builder Certified"  loading="lazy" style="height:50px; width:auto; opacity:0.75; filter:grayscale(100%) brightness(2);" />
              <img src="/static/images/badge-fathom.png"        alt="Fathom Certified Advisor" loading="lazy" style="height:50px; width:auto; opacity:0.75; filter:grayscale(100%) brightness(2);" />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         TESTIMONIALS
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-section cc-testi">
      <div class="cc-container">
        <div class="cc-testi-head">
          <span class="cc-eyebrow" style="text-align:center; display:block;">What Owners Say</span>
          <h2>From people who were in the same position.</h2>
        </div>
        <div class="cc-testi-grid">

          <!-- Guy Roberts — retooled toward staying elevated / out of daily operations -->
          <div class="cc-testi-card">
            <div>
              <span class="cc-testi-label">On staying out of the weeds</span>
              <p class="cc-testi-quote">Corbin has the ability to keep us at the 10,000 foot level and brings insights and discernment that we need to keep our business growing with a long-range plan. The service he provides is exceptional.</p>
            </div>
            <div class="cc-testi-author">
              <strong>Guy Roberts</strong>
              <span>Pat Murphy Electric</span>
            </div>
          </div>

          <!-- Steve Thompson — retooled toward rapid, precise diagnosis of the specific business -->
          <div class="cc-testi-card">
            <div>
              <span class="cc-testi-label">On getting a precise diagnosis</span>
              <p class="cc-testi-quote">Corbin brings a unique perspective to growing your business. Not only is he able to quickly understand the nuances of your particular business, but he has been invaluable in introducing me to key people to help me transform and grow.</p>
            </div>
            <div class="cc-testi-author">
              <strong>Steve Thompson</strong>
              <span>Business Owner</span>
            </div>
          </div>

          <!-- Gerrie van Niekerk — retooled toward what starts as one session can become real structural change -->
          <div class="cc-testi-card">
            <div>
              <span class="cc-testi-label">On what one session can become</span>
              <p class="cc-testi-quote">Corbin and the SMB team jumped in during a very tough period for our company. The onboarding process was seamless and the team quickly took control of the situation. What I thought would be a short-term engagement turned into a successful two-year partnership.</p>
            </div>
            <div class="cc-testi-author">
              <strong>Gerrie van Niekerk</strong>
              <span>Business Owner</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SECTION 10 — FAQ: 2-column layout
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-section cc-s10">
      <div class="cc-container">
        <div class="cc-s10-head">
          <span class="cc-eyebrow" style="text-align:center; display:block;">Common Questions</span>
          <h2>Answers before you book.</h2>
        </div>
        <div class="cc-faq-cols">
          <div>
            <div class="cc-faq-item">
              <h4>Is this just a sales call?</h4>
              <p>No. This is a working diagnostic session. We will actually identify where your owner bottleneck is, what it is costing, and what structural piece is missing. If you are a strong fit for the Capacity Intensive, we will tell you clearly and explain why. If you are not, you will still leave with a useful next step.</p>
            </div>
            <div class="cc-faq-item">
              <h4>Who is this best suited for?</h4>
              <p>Owner-led service businesses with a real team, real revenue, and a clear sense that the company is still leaning too hard on the founder. The feeling that things should be running more independently than they are is enough of a starting point.</p>
            </div>
            <div class="cc-faq-item">
              <h4>How long is the session?</h4>
              <p>Plan for 45 minutes.</p>
            </div>
          </div>
          <div>
            <div class="cc-faq-item">
              <h4>What will we cover?</h4>
              <p>Where the dependency is showing up, why it has persisted, what it is costing in real terms, and what the structural next steps look like.</p>
            </div>
            <div class="cc-faq-item">
              <h4>What is the Capacity Intensive and what does it cost?</h4>
              <p>The Capacity Intensive is a focused 90-day engagement — 2 to 4 sessions — designed to install the structure your business needs to operate with more team ownership and less founder involvement. The investment is $2,500. We only recommend it after the diagnostic confirms it is the right fit.</p>
            </div>
            <div class="cc-faq-item">
              <h4>What if I just need better delegation?</h4>
              <p>Delegation is usually part of it — but shallow delegation is almost never the root cause. We are looking at the structural layer underneath: ownership clarity, decision rights, accountability systems, and operating rhythm. Better delegation follows better structure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SECTION 11 — FINAL CTA
    ════════════════════════════════════════════════════════════ -->
    <section class="cc-s11">
      <div class="cc-s11-inner">
        <span class="cc-eyebrow" style="text-align:center; display:block; color:var(--color-gold-light,#e0b84c);">Ready to Start</span>
        <h2>You do not need to stay the glue holding everything together.</h2>
        <p class="cc-s11-sub">You need to know where the dependency is — and what to fix first. Book the Capacity Clarity Session and get a direct, honest look at the bottleneck that is quietly limiting your growth, your team, and your time.</p>
        <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="cc-hero-btn" style="display:inline-flex; margin:0 auto;" target="_blank" rel="noopener noreferrer">
          Book My Capacity Clarity Session <span class="arrow">→</span>
        </a>
        <p class="cc-s11-limit">We take a limited number of new diagnostic sessions each month to make sure every session gets the focus it deserves.</p>
        <p class="cc-s11-confirm">You will choose a time, receive a confirmation, and get three short prep questions so we can make the most of 45 minutes together.</p>
        <p class="cc-s11-support">For owner-led service businesses ready to reduce founder dependency and build a structure that holds.</p>
      </div>
    </section>

  </main>

  <!-- ── MINIMAL FOOTER ─────────────────────────────────────────── -->
  <footer class="cc-footer">
    <p>&copy; 2026 SMB Strategy Consultants, LLC. All rights reserved.</p>
    <p><a href="/privacy-policy">Privacy Policy</a> &nbsp;·&nbsp; <a href="/terms-conditions">Terms of Service</a> &nbsp;·&nbsp; <a href="/">smbstrategyconsultants.com</a></p>
  </footer>

</body>
</html>`

  return c.html(html)
})

export default capacityClarity
