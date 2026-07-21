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
            <h1 style="color: #fff;">Four steps from "imagine AI Leverage"<br/>to a working 90-Day Sprint.</h1>
            <p class="hero-lead">
              We don't start with a proposal, a scope of work, or a tool recommendation. We start by showing you where AI Leverage exists in your business — then we sequence everything that follows from there.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free AI Leverage Call &rarr;</a>
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
            <p class="mt-3"><strong>Sequencing is the work.</strong> That's why the process starts with a report, not a pitch — and why every step after it exists to find your specific AI Leverage, in the right order.</p>
          </div>
        </div>
      </section>

      {/* ── STEP 1: AI LEVERAGE REPORT ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <div class="step-num" style="width:auto; height:auto; background:transparent; border-radius:0; font-size:3rem; color:var(--color-gold); font-family:var(--font-heading); font-weight:700; line-height:1; margin-bottom:1.5rem;">01</div>
              <span class="eyebrow">Step One</span>
              <h2 class="mt-2">Receive Your AI Leverage Report</h2>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1.5rem; color:var(--color-text);">
                Before any call, you get a free, personalized report on where AI is creating real leverage in your specific industry — not a generic AI overview, built for your business.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                This is where you start to imagine your business with AI Leverage: what competitors are deploying, where the efficiency gains actually are, and where it's worth your attention.
              </p>
              <div class="mt-4">
                <a href="/get-your-report" class="btn btn-primary">Get Your Free AI Leverage Report</a>
              </div>
            </div>
            <div class="card card-navy p-5">
              <h4 style="color:var(--color-gold-light); margin-bottom:1.5rem;">What's in the report</h4>
              <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:1.25rem;">
                <li style="display:flex; gap:1rem; align-items:start;">
                  <span style="color:var(--color-gold); font-weight:700; flex-shrink:0; font-family:var(--font-heading);">1</span>
                  <span style="color:rgba(255,255,255,0.85); font-size:0.95rem; line-height:1.65;">What AI tools competitors in your industry are actually deploying</span>
                </li>
                <li style="display:flex; gap:1rem; align-items:start;">
                  <span style="color:var(--color-gold); font-weight:700; flex-shrink:0; font-family:var(--font-heading);">2</span>
                  <span style="color:rgba(255,255,255,0.85); font-size:0.95rem; line-height:1.65;">Where the biggest efficiency gains are for a business like yours</span>
                </li>
                <li style="display:flex; gap:1rem; align-items:start;">
                  <span style="color:var(--color-gold); font-weight:700; flex-shrink:0; font-family:var(--font-heading);">3</span>
                  <span style="color:rgba(255,255,255,0.85); font-size:0.95rem; line-height:1.65;">The leverage points worth your attention first</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 2: THE AI LEVERAGE CALL ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <div class="step-num" style="width:auto; height:auto; background:transparent; border-radius:0; font-size:3rem; color:var(--color-gold); font-family:var(--font-heading); font-weight:700; line-height:1; margin-bottom:1.5rem;">02</div>
              <span class="eyebrow">Step Two</span>
              <h2 class="mt-2">The Free AI Leverage Call</h2>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1.5rem; color:var(--color-text);">
                This is a live 30-minute call with the SMB team. Not a sales pitch — a real look at the ROI of an AI implementation plan built around your business.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                We cover what AI implementations you've already tried and what happened, where the owner is still required in the business, and what the financial picture looks like at the operational level.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                You leave with a clear read on the ROI case — whether or not we work together.
              </p>
              <div class="mt-4">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Book Your Free AI Leverage Call</a>
              </div>
            </div>
            <div class="card card-accent p-5">
              <h4 class="mb-3">What we're looking for on the call</h4>
              <ul class="feature-list">
                <li>How the constraint surfaced in your AI Leverage Report shows up specifically in your business — workflow gap, owner dependency, team readiness, or sequencing failure</li>
                <li>Whether foundations exist for AI to connect to — or whether those need to be built first</li>
                <li>The economic case — whether the friction cost justifies the implementation investment</li>
                <li>Whether an AI Sequence Blueprint Session is the right next move</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 3: THE AI SEQUENCE BLUEPRINT SESSION ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div class="card card-navy p-5">
              <h4 style="color:var(--color-gold-light); margin-bottom:1.5rem;">What gets mapped in the Blueprint Session</h4>
              <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:1.25rem;">
                <li style="display:flex; gap:1rem; align-items:start;">
                  <span style="color:var(--color-gold); font-weight:700; flex-shrink:0; font-family:var(--font-heading);">1</span>
                  <span style="color:rgba(255,255,255,0.85); font-size:0.95rem; line-height:1.65;">The exact build sequence — what gets solved first, and why</span>
                </li>
                <li style="display:flex; gap:1rem; align-items:start;">
                  <span style="color:var(--color-gold); font-weight:700; flex-shrink:0; font-family:var(--font-heading);">2</span>
                  <span style="color:rgba(255,255,255,0.85); font-size:0.95rem; line-height:1.65;">Which parts standard software can solve, and which need a custom tool</span>
                </li>
                <li style="display:flex; gap:1rem; align-items:start;">
                  <span style="color:var(--color-gold); font-weight:700; flex-shrink:0; font-family:var(--font-heading);">3</span>
                  <span style="color:rgba(255,255,255,0.85); font-size:0.95rem; line-height:1.65;">A scoped 90-Day Sprint plan with a clear milestone</span>
                </li>
              </ul>
            </div>
            <div>
              <div class="step-num" style="width:auto; height:auto; background:transparent; border-radius:0; font-size:3rem; color:var(--color-gold); font-family:var(--font-heading); font-weight:700; line-height:1; margin-bottom:1.5rem;">03</div>
              <span class="eyebrow">Step Three</span>
              <h2 class="mt-2">The AI Sequence Blueprint Session</h2>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1.5rem; color:var(--color-text);">
                A working session directly with Corbin. This is where the diagnosis becomes a plan — the specific sequence of what gets built, in what order, for your specific constraint.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                Every recommendation is filtered through margin, capacity, and operational return. You leave the session with a scoped plan for your first 90-Day Sprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 4: THE 90-DAY SPRINT ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <div class="step-num" style="width:auto; height:auto; background:transparent; border-radius:0; font-size:3rem; color:var(--color-gold); font-family:var(--font-heading); font-weight:700; line-height:1; margin-bottom:1.5rem;">04</div>
              <span class="eyebrow">Step Four</span>
              <h2 class="mt-2">Implement Your First 90-Day Sprint</h2>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1.5rem; color:var(--color-text);">
                This is where the work happens. We build the specific system your Blueprint Session mapped — workflow documentation, AI integrations sequenced in the right order, custom tools where standard software can't cross the gap.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                Your team gets trained on every system we build. Documentation is finalized so new hires can be onboarded from it. We run a live support window through the finish.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                The definition of success is specific: <strong>your team runs the system without us, and you own it completely.</strong> Some engagements move faster, some come out of the box — either way, we don't call it done until that's true.
              </p>
            </div>
            <div class="card card-accent p-5">
              <h4 class="mb-3">What you own at the end of the Sprint</h4>
              <ul class="feature-list">
                <li>Documented workflows your team follows without asking you</li>
                <li>AI integrations that are adopted, not just set up</li>
                <li>SOP library new hires can be trained from</li>
                <li>Custom tools you own outright — no license dependency on us</li>
                <li>Measurable owner hours freed — not a percentage, an actual number</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <span class="eyebrow" style="color:var(--color-gold);">Step One</span>
          <h2 style="color:#fff;">Your AI Leverage Report is free.<br/>The clarity it produces is immediate.</h2>
          <p class="lead" style="color:rgba(255,255,255,0.8); max-width:640px; margin:1.5rem auto 2.5rem;">
            No pitch, no proposal, no obligation. See where AI Leverage exists in your business first — then decide if the call is worth your 30 minutes.
          </p>
          <div class="hero-actions" style="justify-content:center;">
            <a href="/get-your-report" class="btn btn-primary btn-lg">Get Your Free AI Leverage Report &rarr;</a>
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-ghost-light btn-lg">Book Your Free AI Leverage Call &rarr;</a>
          </div>
        </div>
      </section>

    </div>,
    {
      title: 'How It Works',
      description: 'Four steps: get your free AI Leverage Report, book a free AI Leverage Call, map your AI Sequence Blueprint Session with Corbin, then implement your first 90-Day Sprint. You own the working system at the end.',
      activeNav: 'how'
    }
  )
})

export default howItWorks
