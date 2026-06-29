import { Hono } from 'hono'

const howItWorks = new Hono()

howItWorks.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">The Process</span>
            <h1 style="color: #fff;">One call. One constraint identified.<br/>One clear next move.</h1>
            <p class="hero-lead">
              We don't start with a proposal, a scope of work, or a tool recommendation. We start with a 30-minute diagnostic. Everything else follows from what we find there.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SEQUENCE MATTERS ── */}
      <section class="section bg-white">
        <div class="container" style="max-width:860px;">
          <div class="section-header center mb-5">
            <span class="eyebrow">Before the Steps</span>
            <h2>Why sequencing is the whole game</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div style="font-size:1.05rem; line-height:1.85; color:var(--color-text);">
            <p>Most AI implementations fail because they were built in the wrong order. The tool was real. The intent was real. But somewhere upstream — in a workflow, a handoff, a judgment call only the owner makes — there was a gap that no tool can cross.</p>
            <p class="mt-3">You can deploy the best AI automation money can buy on top of an undocumented process and the adoption will fail every time. Not because of the tool. Because the foundation wasn't there first.</p>
            <p class="mt-3"><strong>Sequencing is the work.</strong> Before anything gets built or recommended, we identify what the actual first step is for your specific business. That's what changes the outcome.</p>
          </div>
        </div>
      </section>

      {/* ── PHASE 1 ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <div class="step-num" style="font-size:3rem; color:var(--color-gold); font-family:var(--font-heading); font-weight:700; line-height:1; margin-bottom:1.5rem;">01</div>
              <span class="eyebrow">Phase One</span>
              <h2 class="mt-2">The Diagnostic Call</h2>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1.5rem; color:var(--color-text);">
                This is a live 30-minute constraint assessment. Not a sales call. Not a discovery call. A diagnostic.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                We cover three areas: what AI implementations you've already tried and what happened, where the owner is still required in the business, and what the financial picture looks like at the operational level.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                You leave with a diagnosis — whether or not we work together. If there's a clear fit, we describe what an engagement looks like. If there isn't, we tell you what the actual next move is.
              </p>
              <div class="mt-4">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Book the Diagnostic Call</a>
              </div>
            </div>
            <div class="card card-navy p-5">
              <h4 style="color:var(--color-gold-light); margin-bottom:1.5rem;">What we're looking for on the call</h4>
              <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:1.25rem;">
                <li style="display:flex; gap:1rem; align-items:start;">
                  <span style="color:var(--color-gold); font-weight:700; flex-shrink:0; font-family:var(--font-heading);">1</span>
                  <span style="color:rgba(255,255,255,0.85); font-size:0.95rem; line-height:1.65;">The specific constraint — workflow gap, owner dependency, team readiness, or sequencing failure</span>
                </li>
                <li style="display:flex; gap:1rem; align-items:start;">
                  <span style="color:var(--color-gold); font-weight:700; flex-shrink:0; font-family:var(--font-heading);">2</span>
                  <span style="color:rgba(255,255,255,0.85); font-size:0.95rem; line-height:1.65;">Whether foundations exist for AI to connect to — or whether those need to be built first</span>
                </li>
                <li style="display:flex; gap:1rem; align-items:start;">
                  <span style="color:var(--color-gold); font-weight:700; flex-shrink:0; font-family:var(--font-heading);">3</span>
                  <span style="color:rgba(255,255,255,0.85); font-size:0.95rem; line-height:1.65;">The economic case — whether the friction cost justifies the implementation investment</span>
                </li>
                <li style="display:flex; gap:1rem; align-items:start;">
                  <span style="color:var(--color-gold); font-weight:700; flex-shrink:0; font-family:var(--font-heading);">4</span>
                  <span style="color:rgba(255,255,255,0.85); font-size:0.95rem; line-height:1.65;">The right first move — not a list of ideas, one ranked next action</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHASE 2 ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div class="card card-accent p-5">
              <h4 class="mb-3">What gets built in Phase 2</h4>
              <ul class="feature-list">
                <li>Core workflow documentation — the processes that were in your head, written down</li>
                <li>AI integrations sequenced in the right order for your specific constraint</li>
                <li>Custom internal tools if standard software can't solve a unique friction point</li>
                <li>SOPs your team can follow without asking you for every edge case</li>
                <li>Financial clarity layer if the numbers are a constraint on decision-making</li>
              </ul>
            </div>
            <div>
              <div class="step-num" style="font-size:3rem; color:var(--color-gold); font-family:var(--font-heading); font-weight:700; line-height:1; margin-bottom:1.5rem;">02</div>
              <span class="eyebrow">Phase Two</span>
              <h2 class="mt-2">The Build</h2>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1.5rem; color:var(--color-text);">
                Month two is where the work happens. We build the specific system your diagnostic revealed — not a generic template adapted to you, but a solution built around your actual business.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                If the constraint is a workflow that's entirely in your head, we document it first. If it's a handoff that breaks at a specific point, we rebuild that point. If standard software can't cross the gap, we build the lightweight custom tool that does.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                You are involved in this phase — but you are not doing the work. We do the build. You do the review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHASE 3 ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <div class="step-num" style="font-size:3rem; color:var(--color-gold); font-family:var(--font-heading); font-weight:700; line-height:1; margin-bottom:1.5rem;">03</div>
              <span class="eyebrow">Phase Three</span>
              <h2 class="mt-2">The Hand-Off</h2>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1.5rem; color:var(--color-text);">
                Month three is about transfer. Your team gets trained on every system we built. Documentation is finalized so new hires can be onboarded from it. We run a 30-day live support window.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                The definition of success here is specific: <strong>your team runs the system without us, and you own it completely.</strong> If that's not happening by day 90, we don't call it done.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                We don't sell retainers after this. The goal is that you don't need one.
              </p>
            </div>
            <div class="card card-navy p-5">
              <h4 style="color:var(--color-gold-light); margin-bottom:1.5rem;">What you own at day 90</h4>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color:rgba(255,255,255,0.85);">Documented workflows your team follows without asking you</li>
                <li style="color:rgba(255,255,255,0.85);">AI integrations that are adopted, not just set up</li>
                <li style="color:rgba(255,255,255,0.85);">SOP library new hires can be trained from</li>
                <li style="color:rgba(255,255,255,0.85);">Custom tools you own outright — no license dependency on us</li>
                <li style="color:rgba(255,255,255,0.85);">Measurable owner hours freed — not a percentage, an actual number</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <span class="eyebrow" style="color:var(--color-gold);">Step One</span>
          <h2 style="color:#fff;">The diagnostic call is free.<br/>The clarity it produces is immediate.</h2>
          <p class="lead" style="color:rgba(255,255,255,0.8); max-width:640px; margin:1.5rem auto 2.5rem;">
            30 minutes. No pitch, no proposal, no obligation. You leave with a specific diagnosis and one clear next move — regardless of whether we work together.
          </p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Diagnostic Call &rarr;</a>
        </div>
      </section>

    </div>,
    {
      title: 'How It Works',
      description: 'Three phases: diagnose the constraint, build the system, hand off ownership. Starts with a free 30-minute diagnostic call. Ends with a working system your team owns in 90 days.',
      activeNav: 'how'
    }
  )
})

export default howItWorks
