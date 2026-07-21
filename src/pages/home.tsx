import { Hono } from 'hono'

const home = new Hono()

home.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="hero hero-photo section-lg">
        <picture class="hero-bg-picture" aria-hidden="true">
          <source type="image/webp" srcset="/static/images/smb-sc-hero-768.webp 768w, /static/images/smb-sc-hero-1024.webp 1024w, /static/images/smb-sc-hero-1440.webp 1440w, /static/images/smb-sc-hero-1920.webp 1920w" sizes="100vw" />
          <source type="image/jpeg" srcset="/static/images/smb-sc-hero-768.jpg 768w, /static/images/smb-sc-hero-1024.jpg 1024w, /static/images/smb-sc-hero-1440.jpg 1440w, /static/images/smb-sc-hero-1920.jpg 1920w" sizes="100vw" />
          <img src="/static/images/smb-sc-hero-1024.jpg" alt="" class="hero-bg-img" fetchpriority="high" decoding="async" />
        </picture>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="container hero-content">
          <span class="eyebrow hero-eyebrow">AI Implementation for Owner-Led Service Firms</span>
          <h1>The businesses winning right now aren't working harder.<br/>They're using AI to do more with less.</h1>
          <p class="lead">Same team, more output, no added headcount — that's the leverage. We diagnose the real constraint — live, in 30 minutes — and build the system that gets you there. Then you own it.</p>
          <div class="hero-actions">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            <a href="/who-its-for" class="btn btn-ghost-light btn-lg">See If You're a Fit</a>
          </div>
        </div>
      </section>

      {/* ── FAILURE STRIP — make the right visitor feel seen ── */}
      <section class="section-sm bg-white">
        <div class="container">
          <p class="text-center" style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--color-text-muted); margin-bottom:1.5rem;">If any of these sound familiar, you're in the right place</p>
          <div class="grid-3" style="gap:1.5rem; max-width:900px; margin:0 auto;">
            <div style="padding:1.25rem 1.5rem; background:var(--color-bg-soft); border-radius:var(--radius-md); border-left:3px solid var(--color-gold);">
              <p style="margin:0; font-size:0.95rem; line-height:1.6; color:var(--color-text);">"We set up the tools. The team used them for two weeks. Then everything drifted back."</p>
            </div>
            <div style="padding:1.25rem 1.5rem; background:var(--color-bg-soft); border-radius:var(--radius-md); border-left:3px solid var(--color-gold);">
              <p style="margin:0; font-size:0.95rem; line-height:1.6; color:var(--color-text);">"I'm still the bottleneck. Every approval, every exception still runs through me."</p>
            </div>
            <div style="padding:1.25rem 1.5rem; background:var(--color-bg-soft); border-radius:var(--radius-md); border-left:3px solid var(--color-gold);">
              <p style="margin:0; font-size:0.95rem; line-height:1.6; color:var(--color-text);">"We've spent money on AI twice. I can't tell if the problem is us or the technology."</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div class="trust-bar">
        <div class="container">
          <div class="trust-bar-inner">
            <div class="cert-logo-bar">
              <img src="/static/images/badge-cepa.png" alt="CEPA — Certified Exit Planning Advisor" loading="lazy" />
              <img src="/static/images/badge-aasbc.png" alt="AASBC Member" loading="lazy" />
              <img src="/static/images/badge-value-builder.png" alt="Value Builder Certified" loading="lazy" />
              <img src="/static/images/badge-fathom.png" alt="Fathom Certified Advisor" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* ── THE PROBLEM (external + internal) ── */}
      <section class="section bg-white pb-0">
        <div class="container">
          <div class="split-section">
            <div class="split-content">
              <span class="eyebrow">The Real Problem</span>
              <h2>It's not the tools. It's never the tools.</h2>
              <div class="gold-line mb-4"></div>
              <div class="body-v2">
                <p>You bought the tools. You tested the prompts. You sat through demos and maybe ran a pilot. For a moment it looked like it was going to work.</p>
                <p><strong>Then it stopped.</strong> The owner is still the bottleneck. Workflows are still messy. The AI just sits there, another subscription you're not fully using.</p>
                <p class="mt-3" style="font-size:1.05rem; line-height:1.75;">The frustration is not that AI failed. The frustration is that you believed it would work — and you can't figure out what you did wrong.</p>
                <p class="mt-3 lead">You didn't do anything wrong. The constraint was upstream from where you deployed the tool. That's a diagnosable problem. It has a specific fix.</p>
              </div>
            </div>
            <div class="split-img-container">
              <img src="/static/images/truth-stalled.png" alt="AI implementation stalled" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE GUIDE (empathy + authority) ── */}
      <section class="section bg-white pt-5">
        <div class="container">
          <div class="split-section reversed">
            <div class="split-img-container">
              <img src="/static/images/identity-advisory.png" alt="SMB Strategy Consultants — your implementation guide" loading="lazy" />
            </div>
            <div class="split-content">
              <span class="eyebrow">The AI Leverage Path</span>
              <h2>Yes, most AI projects haven't been effective — usually for two reasons.</h2>
              <div class="gold-line mb-4"></div>
              <div class="body-v2">
                <p><strong>One: nobody diagnosed the actual constraint</strong> before picking a tool. <strong>Two: nobody owned the follow-through</strong> past week two, so it drifted back to the old way. Neither one is a technology problem — and both are fixable.</p>
                <p>We start with one question: <strong>what is the specific constraint blocking AI from creating value in your business?</strong> Every recommendation is filtered through margin, capacity, and operational return. If standard software can solve it, we tell you which one and how to sequence it. If the constraint requires a custom tool, we build it — larger builds run in 90-day sprints to a milestone, and you own it when it's done.</p>
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-sm mt-4">Book Your Free Strategy Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PLAN (3 steps) ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">How It Works</span>
            <h2>Three steps. One clear path forward.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="process-timeline">
            <div class="grid-3" style="gap:2rem; max-width:860px; margin:0 auto;">
              <div class="step-item" style="text-align:center;">
                <div class="step-num">01</div>
                <h5>Diagnose the constraint</h5>
                <p>We identify the specific upstream blocker — whether it's workflow, owner dependency, team readiness, or sequencing — live on a 30-minute call. No homework required.</p>
              </div>
              <div class="step-item" style="text-align:center;">
                <div class="step-num">02</div>
                <h5>Build around it</h5>
                <p>We prescribe the right implementation path for your business. If standard software covers it, we sequence that. If the constraint needs a custom tool, we build it — larger builds run in 90-day sprints to a milestone; some engagements move faster.</p>
              </div>
              <div class="step-item" style="text-align:center;">
                <div class="step-num">03</div>
                <h5>Hand you ownership</h5>
                <p>You leave with a documented system your team runs without you — trained, tested, and built for the reality of your business. Not a consultant dependency. Actual ownership.</p>
              </div>
            </div>
          </div>
          <div class="btn-center mt-5">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Why We're Different</span>
            <h2>Diagnosis before prescription. Every time.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3" style="gap:2.5rem;">
            <div class="card card-white p-5">
              <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1.5rem;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
              <h4 class="mb-3">Constraint-first thinking</h4>
              <p>Most consultants give you advice. We identify whether your block is workflow, owner dependency, team readiness, or economics — before recommending anything. A prescription without a diagnosis is malpractice.</p>
            </div>
            <div class="card card-white p-5">
              <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1.5rem;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div>
              <h4 class="mb-3">Financial-first decisions</h4>
              <p>Every recommendation runs through margin, capacity, and operational return. We don't recommend tools you can't justify. If we can't show you the economic case, we don't make the recommendation.</p>
            </div>
            <div class="card card-white p-5">
              <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1.5rem;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <h4 class="mb-3">Implementation, not advice</h4>
              <p>We build it. We document it. We train your team on it. You own a working system — not a strategy deck and a bill. Larger builds run in 90-day sprints to a milestone; some are faster, some come out of the box. If standard software can't solve a unique friction point, we build the custom internal tool that does.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEVERAGE POINTS SCROLL STRIP ── */}
      <section class="section-sm bg-soft">
        <div class="container">
          <div class="section-header center mb-4">
            <span class="eyebrow">Where We're Finding Leverage</span>
            <h2 style="font-size:1.6rem;">A few examples, industry by industry</h2>
          </div>
          <div class="leverage-strip">
            <div class="leverage-card">
              <div class="leverage-card__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1M9 13h1M14 9h1M14 13h1M9 21v-4h6v4"/></svg></div>
              <div class="leverage-card__stat">−50–60% spec time</div>
              <h5>Architecture Firms</h5>
              <p>Spec writing and code cross-referencing, automated, per project.</p>
            </div>
            <div class="leverage-card">
              <div class="leverage-card__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 008.5 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H2.5a2 2 0 010-4h.09A1.65 1.65 0 004.6 8.5a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V2.5a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg></div>
              <div class="leverage-card__stat">−50–70% report time</div>
              <h5>Engineering Firms</h5>
              <p>Technical reports and memos drafted straight from raw data.</p>
            </div>
            <div class="leverage-card">
              <div class="leverage-card__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M6 21V9l6-4 6 4v12M10 21v-6h4v6"/></svg></div>
              <div class="leverage-card__stat">30–40% faster fill</div>
              <h5>Property Management</h5>
              <p>AI leasing assistant qualifies leads and books tours automatically.</p>
            </div>
            <div class="leverage-card">
              <div class="leverage-card__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-5.5 8-12a8 8 0 10-16 0c0 6.5 8 12 8 12z"/><circle cx="12" cy="10" r="2.5"/></svg></div>
              <div class="leverage-card__stat">−20–30% drive time</div>
              <h5>Landscapers</h5>
              <p>Route optimization gets the same crew to more stops a week.</p>
            </div>
            <div class="leverage-card">
              <div class="leverage-card__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 7V4a3 3 0 016 0v3M6 10h12M6 10a6 6 0 0012 0M6 10l-3-2M18 10l3-2M6 14l-3 2M18 14l3 2M12 10v9"/></svg></div>
              <div class="leverage-card__stat">−40–60% churn</div>
              <h5>Pest Control</h5>
              <p>Automated renewal reminders cut recurring plan cancellations.</p>
            </div>
            <div class="leverage-card">
              <div class="leverage-card__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-6 9 6M5 10v10h14V10"/><path d="M9 21v-6h6v6"/></svg></div>
              <div class="leverage-card__stat">First response wins</div>
              <h5>Real Estate Investment</h5>
              <p>Automated investor intake means no lead waits 47 hours for a call.</p>
            </div>
          </div>
          <p class="text-center text-sm" style="color:var(--color-text-muted); margin-top:0.5rem;">Scroll for more &rarr; — or see the full breakdown on <a href="/ai-leverage-points">where AI creates leverage by industry</a>.</p>
        </div>
      </section>

      {/* ── FEATURED SIGNAL ── */}
      <section class="section bg-white" style="padding-top:3rem; padding-bottom:3rem;">
        <div class="container">
          <div style="max-width:860px; margin:0 auto; border:1px solid var(--color-border); border-radius:var(--radius-lg); overflow:hidden;">
            <div style="background:var(--color-navy); padding:1rem 1.75rem; display:flex; align-items:center; gap:0.75rem;">
              <span style="font-size:0.7rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--color-gold);">What the Data Says</span>
              <span style="font-size:0.7rem; color:rgba(255,255,255,0.35); letter-spacing:0.06em;">July 2026 &nbsp;·&nbsp; Guggenheim Securities / 150 Enterprise IT Professionals</span>
            </div>
            <div style="padding:1.75rem; background:var(--color-bg-soft);">
              <p style="font-size:1rem; font-weight:600; color:var(--color-text); margin:0 0 1.25rem; line-height:1.5;">81% of large enterprises have already deployed AI agents. Goldman Sachs puts the all-of-corporate-America baseline at 20.6%. Owner-led service firms are likely well below that. That gap is the opportunity — and it closes fast for whoever moves first.</p>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.875rem; margin-bottom:1.25rem;">
                <div style="background:#fff; border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1rem 1.25rem;">
                  <div style="font-size:1.75rem; font-weight:800; color:var(--color-navy); line-height:1;">81%</div>
                  <div style="font-size:0.8rem; color:var(--color-text-muted); margin-top:0.35rem; line-height:1.4;">of large enterprises already running AI agents</div>
                </div>
                <div style="background:#fff; border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1rem 1.25rem;">
                  <div style="font-size:1.75rem; font-weight:800; color:var(--color-navy); line-height:1;">18%</div>
                  <div style="font-size:0.8rem; color:var(--color-text-muted); margin-top:0.35rem; line-height:1.4;">measured productivity gain at current usage levels</div>
                </div>
                <div style="background:#fff; border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1rem 1.25rem;">
                  <div style="font-size:1.75rem; font-weight:800; color:var(--color-navy); line-height:1;">2.5%</div>
                  <div style="font-size:0.8rem; color:var(--color-text-muted); margin-top:0.35rem; line-height:1.4;">average headcount reduction — not the mass layoffs feared</div>
                </div>
                <div style="background:#fff; border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1rem 1.25rem;">
                  <div style="font-size:1.75rem; font-weight:800; color:var(--color-navy); line-height:1;">3.1%</div>
                  <div style="font-size:0.8rem; color:var(--color-text-muted); margin-top:0.35rem; line-height:1.4;">projected operating margin lift by 2027</div>
                </div>
              </div>
              <p style="font-size:0.875rem; color:var(--color-text-muted); margin:0; line-height:1.6;">The businesses winning right now aren't laying people off — they're getting more output from the same team. That's the actual AI story. It's not about replacement. It's about leverage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section id="proof" class="proof-section">
        <div class="container">
          <div class="section-header center">
            <h2>The constraint is always findable.<br/>The fix is always specific.</h2>
            <p>What changes when the right problem gets solved.</p>
          </div>
          <div class="proof-grid">
            <div class="proof-card">
              <p class="proof-quote">"We thought we needed more headcount. They showed us the bottleneck was the legacy workflow. We now handle <strong>10x the volume</strong> with the same team."</p>
              <div class="proof-attribution">Professional Services Firm</div>
            </div>
            <div class="proof-card">
              <p class="proof-quote">"The issue was not the marketing spend — it was the data logic underneath it. Shifting to a <strong>data-led approach</strong> built consumer trust before the first call."</p>
              <div class="proof-attribution">Multi-Site Advisory Client</div>
            </div>
            <div class="proof-card">
              <p class="proof-quote">"They helped us see the real blocker in the first 90 minutes. We stopped building features and started building the <strong>behavioral logic</strong> that actually drives revenue."</p>
              <div class="proof-attribution">Software Engineering Lead</div>
            </div>
            <div class="proof-card">
              <p class="proof-quote">"Leveraging this framework cut execution time by <span class="highlight">70%</span>. It cleared the fog, making room for <strong>decisions that actually move the needle.</strong>"</p>
              <div class="proof-attribution">Strategic Lead</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUCCESS VISION / FINAL CTA ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <span class="eyebrow" style="color:var(--color-gold);">What's on the Other Side</span>
          <h2 style="color:#fff; max-width:780px; margin:0 auto 1.5rem;">Workflows that run without you. Decisions based on real numbers. AI that actually stuck.</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width:720px; margin:0 auto 2.5rem;">
            That's the outcome. You own a documented, running system. Your team handles it. You're no longer the single point of failure in your own business — and you know your numbers clearly enough to move with confidence.
          </p>
          <p style="color:rgba(255,255,255,0.65); max-width:620px; margin:0 auto 2.5rem; font-size:1rem;">
            It starts with one call. 30 minutes to find the constraint that's blocking all of it.
          </p>
          <div class="hero-actions" style="justify-content:center; margin-top:2.5rem;">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            <a href="/who-its-for" class="btn btn-ghost-light btn-lg">See If You're a Fit</a>
          </div>
        </div>
      </section>

    </div>,
    {
      title: 'AI Implementation for Owner-Led Service Firms',
      description: 'The businesses winning right now are using AI to do more with less — same team, more output, no added headcount. We find the real constraint — live, in 30 minutes — and build the system. Owner-led service firms, $500K–$3M.'
    }
  )
})

export default home
