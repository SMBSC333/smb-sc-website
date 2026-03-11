import { Hono } from 'hono'

const capacityClarity = new Hono()

capacityClarity.get('/', (c) => {
  // Bypass renderer — custom layout with logo-only header (no nav)
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="The Capacity Clarity Session: a focused 45-minute diagnostic for owner-led service businesses hitting a ceiling because too much still runs through the founder." />
  <title>Capacity Clarity Session — SMB Strategy Consultants</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link href="/static/style.css" rel="stylesheet" />
  <style>
    /* ── Capacity Clarity landing-page overrides ─────────────── */
    .cc-header {
      background: #fff;
      border-bottom: 1px solid #e8e3da;
      padding: 1.1rem 0;
      text-align: center;
    }
    .cc-header img { height: 40px; width: auto; display: inline-block; }

    /* Hero */
    .cc-hero {
      background: var(--color-navy, #0d1c32);
      padding: 5rem 0 4.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cc-hero::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 60% 0%, rgba(201,168,76,0.12) 0%, transparent 65%);
      pointer-events: none;
    }
    .cc-hero .eyebrow { color: var(--color-gold-light, #e0b84c); }
    .cc-hero h1 {
      font-size: clamp(2rem, 4.5vw, 3.2rem);
      font-weight: 800;
      color: #fff;
      line-height: 1.2;
      max-width: 780px;
      margin: 0.75rem auto 1.5rem;
    }
    .cc-hero-sub {
      font-size: clamp(1rem, 1.8vw, 1.2rem);
      color: rgba(255,255,255,0.82);
      max-width: 680px;
      margin: 0 auto 1.25rem;
      line-height: 1.7;
    }
    .cc-hero-body {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.68);
      max-width: 620px;
      margin: 0 auto 2.5rem;
      line-height: 1.75;
    }
    .cc-hero-micro {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.42);
      letter-spacing: 0.03em;
      margin-top: 1rem;
    }

    /* Gold rule */
    .cc-rule {
      width: 48px; height: 3px;
      background: var(--color-gold, #c9a84c);
      border: none; margin: 1.25rem auto;
      border-radius: 2px;
    }

    /* Section label */
    .cc-section-label {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-gold, #c9a84c);
      margin-bottom: 0.6rem;
      display: block;
    }

    /* Problem section */
    .cc-problem { background: var(--color-bg-soft, #f8f7f4); padding: 5rem 0; }
    .cc-problem h2 {
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      max-width: 640px;
      margin-bottom: 1.25rem;
    }
    .cc-problem-intro {
      font-size: 1.05rem;
      color: var(--color-text-muted, #4a5568);
      max-width: 640px;
      line-height: 1.75;
      margin-bottom: 2rem;
    }
    .cc-symptom-list {
      list-style: none;
      padding: 0; margin: 0 0 2rem;
      max-width: 640px;
    }
    .cc-symptom-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 0.65rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.06);
      font-size: 0.97rem;
      color: var(--color-text, #1a2a3a);
      line-height: 1.6;
    }
    .cc-symptom-list li:last-child { border-bottom: none; }
    .cc-symptom-list li::before {
      content: '–';
      color: var(--color-gold, #c9a84c);
      font-weight: 700;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .cc-closing-note {
      font-size: 0.97rem;
      color: var(--color-text-muted, #4a5568);
      max-width: 620px;
      line-height: 1.75;
      font-style: italic;
    }

    /* Misdiagnosis — dark navy */
    .cc-misdiag {
      background: var(--color-navy, #0d1c32);
      padding: 5rem 0;
    }
    .cc-misdiag h2 {
      font-size: clamp(1.45rem, 2.6vw, 2rem);
      font-weight: 700;
      color: #fff;
      max-width: 620px;
      margin-bottom: 0.5rem;
    }
    .cc-misdiag h3 {
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--color-gold-light, #e0b84c);
      max-width: 620px;
      margin-bottom: 1.5rem;
    }
    .cc-misdiag p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.75);
      max-width: 620px;
      line-height: 1.75;
      margin-bottom: 1.1rem;
    }
    .cc-misdiag .cc-symptom-list li { color: rgba(255,255,255,0.85); border-bottom-color: rgba(255,255,255,0.08); }
    .cc-misdiag-closer {
      font-size: 1rem;
      color: rgba(255,255,255,0.6);
      max-width: 480px;
      margin-top: 2rem;
      line-height: 1.75;
      font-style: italic;
    }
    .cc-misdiag-closer strong { color: rgba(255,255,255,0.9); font-style: normal; }

    /* Symptoms callout — warm bg */
    .cc-symptoms { background: var(--color-bg-warm, #f2efe9); padding: 5rem 0; }
    .cc-symptoms h2 {
      font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      max-width: 580px;
      margin-bottom: 2rem;
    }
    .cc-check-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem 3rem;
      max-width: 720px;
      margin-bottom: 2rem;
    }
    @media (max-width: 640px) { .cc-check-grid { grid-template-columns: 1fr; } }
    .cc-check-grid li {
      display: flex;
      align-items: flex-start;
      gap: 0.65rem;
      font-size: 0.94rem;
      color: var(--color-text, #1a2a3a);
      line-height: 1.6;
      list-style: none;
    }
    .cc-check-grid li .cc-dot {
      width: 7px; height: 7px;
      border-radius: 50%;
      background: var(--color-gold, #c9a84c);
      flex-shrink: 0;
      margin-top: 6px;
    }
    .cc-expose-note {
      font-size: 0.95rem;
      color: var(--color-text-muted, #4a5568);
      max-width: 560px;
      line-height: 1.75;
      font-style: italic;
    }

    /* What the session does */
    .cc-session { background: var(--color-bg-soft, #f8f7f4); padding: 5rem 0; }
    .cc-session-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }
    @media (max-width: 760px) { .cc-session-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
    .cc-session h2 {
      font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 1rem;
    }
    .cc-session p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #4a5568);
      line-height: 1.75;
      margin-bottom: 0.9rem;
    }
    .cc-agenda {
      list-style: none;
      padding: 0; margin: 0 0 2rem;
      counter-reset: agenda;
    }
    .cc-agenda li {
      display: flex;
      gap: 1rem;
      padding: 0.85rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.07);
      font-size: 0.95rem;
      color: var(--color-text, #1a2a3a);
      line-height: 1.6;
      counter-increment: agenda;
    }
    .cc-agenda li:last-child { border-bottom: none; }
    .cc-agenda-num {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--color-gold, #c9a84c);
      background: rgba(201,168,76,0.12);
      border-radius: 3px;
      padding: 2px 6px;
      flex-shrink: 0;
      margin-top: 2px;
      letter-spacing: 0.04em;
    }
    .cc-takeaway-box {
      background: var(--color-navy, #0d1c32);
      border-radius: 8px;
      padding: 2rem;
      color: #fff;
    }
    .cc-takeaway-box h4 {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold-light, #e0b84c);
      margin-bottom: 1rem;
    }
    .cc-takeaway-box p {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.85);
      line-height: 1.7;
      margin-bottom: 0;
    }

    /* Who This Is For */
    .cc-who { background: var(--color-navy, #0d1c32); padding: 5rem 0; }
    .cc-who h2 {
      font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      font-weight: 700;
      color: #fff;
      margin-bottom: 2.5rem;
    }
    .cc-who-cols {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    @media (max-width: 680px) { .cc-who-cols { grid-template-columns: 1fr; } }
    .cc-who-col { padding: 2rem; border-radius: 8px; }
    .cc-who-col.yes { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); }
    .cc-who-col.no  { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); }
    .cc-who-col h4 {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 1rem;
    }
    .cc-who-col.yes h4 { color: var(--color-gold-light, #e0b84c); }
    .cc-who-col.no  h4 { color: rgba(255,255,255,0.35); }
    .cc-fit-list { list-style: none; padding: 0; margin: 0; }
    .cc-fit-list li {
      font-size: 0.9rem;
      line-height: 1.65;
      padding: 0.45rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
    }
    .cc-fit-list li:last-child { border-bottom: none; }
    .cc-who-col.yes .cc-fit-list li { color: rgba(255,255,255,0.85); }
    .cc-who-col.no  .cc-fit-list li { color: rgba(255,255,255,0.38); }
    .cc-fit-list li .fi { flex-shrink: 0; font-style: normal; }
    .cc-who-col.yes .fi { color: var(--color-gold, #c9a84c); }
    .cc-who-col.no  .fi { color: rgba(255,255,255,0.22); }

    /* Why Now */
    .cc-why-now { background: var(--color-bg-warm, #f2efe9); padding: 5rem 0; }
    .cc-why-now h2 {
      font-size: clamp(1.45rem, 2.6vw, 2rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      max-width: 600px;
      margin-bottom: 1rem;
    }
    .cc-why-now > .container > p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #4a5568);
      max-width: 580px;
      line-height: 1.75;
      margin-bottom: 1.75rem;
    }
    .cc-compound-list {
      list-style: none; padding: 0; margin: 0 0 2rem;
      max-width: 600px;
    }
    .cc-compound-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 0.6rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.06);
      font-size: 0.95rem;
      color: var(--color-text, #1a2a3a);
      line-height: 1.6;
    }
    .cc-compound-list li:last-child { border-bottom: none; }
    .cc-compound-list li::before {
      content: '→';
      color: var(--color-gold, #c9a84c);
      font-weight: 600;
      flex-shrink: 0;
    }
    .cc-why-now-close {
      font-size: 0.97rem;
      color: var(--color-text-muted, #4a5568);
      max-width: 560px;
      line-height: 1.75;
    }
    .cc-why-now-close strong { color: var(--color-navy, #0d1c32); }

    /* Transition / Intensive preview */
    .cc-intensive { background: var(--color-bg-soft, #f8f7f4); padding: 5rem 0; }
    .cc-intensive-inner {
      max-width: 740px;
      margin: 0 auto;
      text-align: center;
    }
    .cc-intensive h2 {
      font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 1.25rem;
    }
    .cc-intensive p {
      font-size: 0.97rem;
      color: var(--color-text-muted, #4a5568);
      line-height: 1.75;
      margin-bottom: 1rem;
      text-align: left;
    }
    .cc-intensive-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin: 2rem 0;
    }
    @media (max-width: 580px) { .cc-intensive-cards { grid-template-columns: 1fr; } }
    .cc-intensive-card {
      background: #fff;
      border: 1px solid #e8e3da;
      border-left: 3px solid var(--color-gold, #c9a84c);
      border-radius: 6px;
      padding: 1.25rem 1.25rem 1.25rem 1.4rem;
      text-align: left;
      font-size: 0.9rem;
      color: var(--color-text, #1a2a3a);
      line-height: 1.6;
    }
    .cc-intensive-close {
      font-size: 0.9rem;
      color: var(--color-text-muted, #4a5568);
      text-align: left;
      line-height: 1.75;
    }

    /* Authority */
    .cc-authority {
      background: var(--color-navy, #0d1c32);
      padding: 5rem 0;
    }
    .cc-authority-inner { max-width: 680px; margin: 0 auto; text-align: center; }
    .cc-authority h2 {
      font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      font-weight: 700;
      color: #fff;
      margin-bottom: 1.5rem;
    }
    .cc-authority p {
      font-size: 0.97rem;
      color: rgba(255,255,255,0.75);
      line-height: 1.8;
      margin-bottom: 1rem;
      text-align: left;
    }
    .cc-authority-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: rgba(201,168,76,0.12);
      border: 1px solid rgba(201,168,76,0.3);
      border-radius: 4px;
      padding: 0.6rem 1rem;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--color-gold-light, #e0b84c);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-top: 1.5rem;
    }

    /* FAQ */
    .cc-faq { background: var(--color-bg-soft, #f8f7f4); padding: 5rem 0; }
    .cc-faq h2 {
      font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 2.5rem;
      text-align: center;
    }
    .cc-faq-list { max-width: 740px; margin: 0 auto; }
    .cc-faq-item {
      padding: 1.5rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.08);
    }
    .cc-faq-item:last-child { border-bottom: none; }
    .cc-faq-item h4 {
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-navy, #0d1c32);
      margin-bottom: 0.6rem;
    }
    .cc-faq-item p {
      font-size: 0.93rem;
      color: var(--color-text-muted, #4a5568);
      line-height: 1.75;
      margin: 0;
    }

    /* Final CTA */
    .cc-final-cta {
      background: var(--color-navy, #0d1c32);
      padding: 6rem 0 5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cc-final-cta::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.1) 0%, transparent 65%);
      pointer-events: none;
    }
    .cc-final-cta h2 {
      font-size: clamp(1.7rem, 3.2vw, 2.4rem);
      font-weight: 800;
      color: #fff;
      max-width: 660px;
      margin: 0 auto 1rem;
      line-height: 1.25;
    }
    .cc-final-cta .cc-sub {
      font-size: clamp(1rem, 1.8vw, 1.15rem);
      color: rgba(255,255,255,0.78);
      max-width: 560px;
      margin: 0 auto 2rem;
      line-height: 1.7;
    }
    .cc-final-cta .cc-limit-note {
      font-size: 0.82rem;
      color: rgba(255,255,255,0.45);
      max-width: 480px;
      margin: 1.25rem auto 0;
      line-height: 1.65;
    }
    .cc-final-cta .cc-confirm-note {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.38);
      max-width: 480px;
      margin: 0.75rem auto 0;
      line-height: 1.6;
    }
    .cc-final-support {
      font-size: 0.72rem;
      color: rgba(255,255,255,0.28);
      letter-spacing: 0.04em;
      margin-top: 2rem;
    }

    /* Minimal footer for landing page */
    .cc-footer {
      background: #0a1626;
      padding: 1.75rem 0;
      text-align: center;
    }
    .cc-footer p {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.28);
      margin: 0.2rem 0;
    }
    .cc-footer a { color: rgba(255,255,255,0.4); text-decoration: none; }
    .cc-footer a:hover { color: rgba(255,255,255,0.7); }
  </style>
</head>
<body>

  <!-- ── LOGO-ONLY HEADER (no nav) ───────────────────────── -->
  <header class="cc-header">
    <a href="/" aria-label="SMB Strategy Consultants">
      <img src="/static/images/logo-horizontal-transparent.png" alt="SMB Strategy Consultants" />
    </a>
  </header>

  <main>

    <!-- ── SECTION 1: HERO ──────────────────────────────── -->
    <section class="cc-hero">
      <div class="container">
        <span class="eyebrow">Capacity Clarity Session</span>
        <h1>Your business is growing.<br/>So why does it still run through you?</h1>
        <hr class="cc-rule" />
        <p class="cc-hero-sub">If approvals, decisions, problem-solving, and follow-through still funnel back to you — that is not a motivation problem. That is a structural bottleneck. And it has a cost most owners never stop to calculate.</p>
        <p class="cc-hero-body">The Capacity Clarity Session is a focused 45-minute working session for owner-led businesses that are hitting a ceiling because too much of the operation still runs on the founder. We will help you identify exactly where the dependency is coming from, what it is costing you, and the next moves to reduce the drag.</p>
        <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Book My Capacity Clarity Session</a>
        <p class="cc-hero-micro">For service businesses that are growing — but still too dependent on the owner</p>
      </div>
    </section>

    <!-- ── SECTION 2: THE REAL PROBLEM ─────────────────── -->
    <section class="cc-problem">
      <div class="container">
        <span class="cc-section-label">The Real Problem</span>
        <h2>This is the stage where growth starts feeling heavier instead of better.</h2>
        <p class="cc-problem-intro">From the outside, the business may look healthy. Revenue is moving. The team is working. Clients are being served.<br/>But from the inside, it still feels like this:</p>
        <ul class="cc-symptom-list">
          <li>You are the default decision-maker for things that should not require you</li>
          <li>The team needs too much clarification before they can move</li>
          <li>Problems wait in your inbox instead of getting solved</li>
          <li>Delegation happens — but nothing really changes</li>
          <li>Time away feels risky, not earned</li>
          <li>You are working harder than ever, and it is not getting easier</li>
        </ul>
        <p class="cc-closing-note">That is not a small inefficiency. That is the signal that the business is still structured around the founder. And the longer that stays true, the more expensive growth becomes — in time, in energy, in margin, and in the opportunities you are too stretched to pursue.</p>
      </div>
    </section>

    <!-- ── SECTION 3: THE MISDIAGNOSIS ─────────────────── -->
    <section class="cc-misdiag">
      <div class="container">
        <span class="cc-section-label" style="color:var(--color-gold-light,#e0b84c);">The Misdiagnosis</span>
        <h2>Most owners think they have a people problem.</h2>
        <h3>Usually, they have a structure problem.</h3>
        <p>This is where most businesses stall. The instinct is to push the team harder, hire someone better, communicate more often, or just hold people more accountable. But none of that fixes the root issue.</p>
        <p>Because when the founder is still the safety net for decisions, quality, follow-through, and coordination — the real problem is structural:</p>
        <ul class="cc-symptom-list">
          <li>Ownership is fuzzy</li>
          <li>Roles are unclear</li>
          <li>Decision rights are not defined</li>
          <li>Handoffs break because nothing is documented</li>
          <li>The operating rhythm is too informal to support a team that can run independently</li>
        </ul>
        <p class="cc-misdiag-closer">So the owner becomes the glue.<br/><strong>And glue does not scale.</strong></p>
      </div>
    </section>

    <!-- ── SECTION 4: SYMPTOMS BLOCK ───────────────────── -->
    <section class="cc-symptoms">
      <div class="container">
        <span class="cc-section-label">What It Looks Like</span>
        <h2>What founder dependency actually looks like</h2>
        <p style="font-size:0.97rem; color:var(--color-text-muted,#4a5568); max-width:580px; line-height:1.75; margin-bottom:1.75rem;">You may not call it a bottleneck. But it probably shows up like this:</p>
        <ul class="cc-check-grid">
          <li><span class="cc-dot"></span>Team members ask you questions they should be able to answer</li>
          <li><span class="cc-dot"></span>Things stall whenever you are unavailable</li>
          <li><span class="cc-dot"></span>Standards slip unless you are personally checking them</li>
          <li><span class="cc-dot"></span>Meetings happen — but ownership is never clear afterward</li>
          <li><span class="cc-dot"></span>You keep hiring, but your load does not get lighter</li>
          <li><span class="cc-dot"></span>You are still translating, clarifying, and cleaning up behind the team</li>
          <li><span class="cc-dot"></span>You have capable people around you, but not enough leverage from them</li>
          <li><span class="cc-dot"></span>The business works — because you are holding it together</li>
        </ul>
        <p class="cc-expose-note">That is the exact pattern this session is designed to expose.</p>
      </div>
    </section>

    <!-- ── SECTION 5: WHAT THE SESSION DOES ────────────── -->
    <section class="cc-session">
      <div class="container">
        <span class="cc-section-label">The Session</span>
        <div class="cc-session-grid">
          <div>
            <h2>What happens in the Capacity Clarity Session — and what you leave with</h2>
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
          <div>
            <div class="cc-takeaway-box">
              <h4>What you leave with</h4>
              <p>You will not leave with a conversation.</p>
              <p>You will leave with a <strong style="color:#fff;">diagnosis</strong> — a clear picture of where the dependency lives, what it is costing, and which structural piece needs to change first.</p>
              <p style="margin-top:1.5rem; font-size:0.82rem; color:rgba(255,255,255,0.45); font-style:italic;">45 minutes · Working session · Owner-led service businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SECTION 6: WHO THIS IS FOR ──────────────────── -->
    <section class="cc-who">
      <div class="container">
        <span class="cc-section-label" style="color:var(--color-gold-light,#e0b84c);">Who This Is For</span>
        <h2>This session is built for a specific kind of owner.</h2>
        <div class="cc-who-cols">
          <div class="cc-who-col yes">
            <h4>This is for you if</h4>
            <ul class="cc-fit-list">
              <li><i class="fi">✓</i> You lead a service-based business with an existing team</li>
              <li><i class="fi">✓</i> Revenue is real, but the business still leans too hard on you</li>
              <li><i class="fi">✓</i> The company slows down or stalls when you step away</li>
              <li><i class="fi">✓</i> Delegation has happened — but not deeply enough to change your workload</li>
              <li><i class="fi">✓</i> You are tired of being the backstop for too much</li>
              <li><i class="fi">✓</i> You want structural change, not motivational advice</li>
              <li><i class="fi">✓</i> You know the next level requires a different way of operating</li>
            </ul>
          </div>
          <div class="cc-who-col no">
            <h4>Probably not a fit if</h4>
            <ul class="cc-fit-list">
              <li><i class="fi">✗</i> You are a solo operator with no team</li>
              <li><i class="fi">✗</i> You want a general brainstorming call</li>
              <li><i class="fi">✗</i> You are unwilling to change how ownership, accountability, or decisions work in your business</li>
              <li><i class="fi">✗</i> You want a quick fix rather than an operational change</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SECTION 7: WHY NOW ───────────────────────────── -->
    <section class="cc-why-now">
      <div class="container">
        <span class="cc-section-label">Why Now</span>
        <h2>The longer this goes unaddressed, the more it compounds.</h2>
        <p>Most owners tolerate this because the business is still functioning. But functioning is not the same as scalable.</p>
        <p>When founder dependency stays in place:</p>
        <ul class="cc-compound-list">
          <li>Decision-making stays slow and centralized around you</li>
          <li>Leaders never fully develop underneath you</li>
          <li>Execution becomes uneven and hard to maintain at scale</li>
          <li>Your hours stay inflated — and the calendar never actually clears</li>
          <li>Growth adds stress instead of freedom</li>
          <li>The business becomes harder to hand off, harder to exit, and harder to scale beyond what you can personally carry</li>
        </ul>
        <p class="cc-why-now-close">The cost is not dramatic. It is quiet. It shows up in the things you keep pushing to next quarter.<br/><br/><strong>This is the point where structure starts producing capacity. Not later. Now.</strong></p>
      </div>
    </section>

    <!-- ── SECTION 8: TRANSITION TO INTENSIVE ──────────── -->
    <section class="cc-intensive">
      <div class="container">
        <div class="cc-intensive-inner">
          <span class="cc-section-label" style="text-align:center; display:block;">What Comes Next</span>
          <h2>What comes next — if the fit is right</h2>
          <p>The diagnostic comes first. The prescription follows.</p>
          <p>Not every business needs the same next step. For some owners, the session alone will create enough clarity to act. For the right fit, the next step is the <strong>Capacity Intensive</strong>: a focused 90-day engagement that installs the organizational structure, delegation framework, and operating rhythm the business needs to run more independently.</p>
          <p>That means:</p>
          <div class="cc-intensive-cards">
            <div class="cc-intensive-card">Clearer ownership and accountability across the team</div>
            <div class="cc-intensive-card">A delegation structure that actually holds without your constant reinforcement</div>
            <div class="cc-intensive-card">An operating cadence your team can run without the founder in the middle of everything</div>
            <div class="cc-intensive-card">Less founder drag. More consistent, team-led execution.</div>
          </div>
          <p class="cc-intensive-close">The session is where the diagnosis happens. The Intensive is where the structure gets built.<br/><br/>If it is a fit, you will know by the end of the call.</p>
        </div>
      </div>
    </section>

    <!-- ── SECTION 9: AUTHORITY ─────────────────────────── -->
    <section class="cc-authority">
      <div class="container">
        <div class="cc-authority-inner">
          <span class="cc-section-label" style="text-align:center; display:block; color:var(--color-gold-light,#e0b84c);">Why This Approach Works</span>
          <h2>Most businesses do not become less dependent on the founder by accident.</h2>
          <p>They become less dependent when structure gets stronger than personality.</p>
          <p>That means installing role clarity, decision rights, accountability systems, and leadership rhythm — so the business runs on infrastructure instead of the founder's constant involvement.</p>
          <p>This is the operating principle behind the SMB Strategy Consultants framework: helping owner-led businesses move from reactive, founder-centered growth to a more professionally managed operation.</p>
          <p>Not through culture talks or motivational frameworks. <strong style="color:#fff;">Through structure.</strong></p>
          <div class="cc-authority-badge">
            SMB Strategy Consultants · Principle-Centered Business Advisory
          </div>
        </div>
      </div>
    </section>

    <!-- ── SECTION 10: FAQ ──────────────────────────────── -->
    <section class="cc-faq">
      <div class="container">
        <h2>Common Questions</h2>
        <div class="cc-faq-list">
          <div class="cc-faq-item">
            <h4>Is this just a sales call?</h4>
            <p>No. This is a working diagnostic session. We will actually do the work of identifying where your owner bottleneck is, what it is costing, and what structural piece is missing. If you are a strong fit for the Capacity Intensive after that, we will tell you clearly and explain why. If you are not, we will still give you a useful next step. The goal of the session is an honest diagnosis — not a pitch dressed up as a consultation.</p>
          </div>
          <div class="cc-faq-item">
            <h4>Who is this best suited for?</h4>
            <p>Owner-led service businesses with a real team, real revenue, and a clear sense that the company is still leaning too hard on the founder. You do not need to have a perfectly defined problem — the feeling that things should be running more independently than they are is enough of a starting point.</p>
          </div>
          <div class="cc-faq-item">
            <h4>How long is the session?</h4>
            <p>Plan for 45 minutes.</p>
          </div>
          <div class="cc-faq-item">
            <h4>What will we cover?</h4>
            <p>Where the dependency is showing up, why it has persisted, what it is costing in real terms, and what the structural next steps look like.</p>
          </div>
          <div class="cc-faq-item">
            <h4>What is the Capacity Intensive and what does it cost?</h4>
            <p>The Capacity Intensive is a focused 90-day engagement — 2 to 4 sessions — designed to install the structure your business needs to operate with more team ownership and less founder involvement. It includes organizational design, delegation mapping, and an operating cadence your team can run independently. The investment is $2,500. We only recommend it after the diagnostic confirms it is the right fit for where you are.</p>
          </div>
          <div class="cc-faq-item">
            <h4>What if I just need better delegation?</h4>
            <p>Delegation is usually part of it — but shallow delegation is almost never the root cause. We are looking at the structural layer underneath: ownership clarity, decision rights, accountability systems, and operating rhythm. Better delegation follows better structure. Without the structure, delegation keeps slipping back to you.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SECTION 11: FINAL CTA ────────────────────────── -->
    <section class="cc-final-cta">
      <div class="container">
        <span class="cc-section-label" style="text-align:center; display:block; color:var(--color-gold-light,#e0b84c);">Ready to Start</span>
        <h2>You do not need to stay the glue holding everything together.</h2>
        <hr class="cc-rule" />
        <p class="cc-sub">You need to know where the dependency is — and what to fix first.<br/>Book the Capacity Clarity Session and get a direct, honest look at the bottleneck that is quietly limiting your growth, your team, and your time.</p>
        <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Book My Capacity Clarity Session</a>
        <p class="cc-limit-note">We take a limited number of new diagnostic sessions each month to make sure every session gets the focus it deserves.</p>
        <p class="cc-confirm-note">You will choose a time, receive a confirmation, and get three short prep questions so we can make the most of 45 minutes together.</p>
        <p class="cc-final-support">For owner-led service businesses ready to reduce founder dependency and build a structure that holds.</p>
      </div>
    </section>

  </main>

  <!-- ── MINIMAL FOOTER ───────────────────────────────────── -->
  <footer class="cc-footer">
    <p>&copy; 2026 SMB Strategy Consultants, LLC. All rights reserved.</p>
    <p><a href="/privacy-policy">Privacy Policy</a> &nbsp;·&nbsp; <a href="/terms-conditions">Terms of Service</a> &nbsp;·&nbsp; <a href="/">smbstrategyconsultants.com</a></p>
  </footer>

</body>
</html>`

  return c.html(html)
})

export default capacityClarity
