import { Hono } from 'hono'

const growthSystemsIntensive = new Hono()

growthSystemsIntensive.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Focused Sprint</span>
            <h1 style="color: #fff;">You're losing deals to slower follow-up — and building the same proposals from scratch every time.</h1>
            <p class="hero-lead">
              The Growth Systems Intensive is AI Leverage applied to your pipeline — a repeatable, AI-assisted lead-to-close workflow built in weeks. Faster follow-up, consistent proposals, a pipeline the owner doesn't have to manage manually.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free AI Leverage Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CONSTRAINT ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">The Constraint</span>
              <h2>Leads come in. Half of them go cold before anyone follows up.</h2>
              <div class="gold-line mb-4"></div>
              <p style="font-size:1.05rem; line-height:1.8; color:var(--color-text);">
                In most owner-led service firms, lead follow-up depends on the owner's bandwidth. When the owner is delivering, leads wait. When leads wait, deals go to whoever responded faster.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                The proposal problem compounds it. Every proposal is built from scratch because the underlying pricing logic, scope language, and delivery promises are still in the owner's head — not in a system anyone else can use.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                This intensive documents the logic, builds the workflow, and gets AI-assisted follow-up running — so leads get responded to in minutes, not days.
              </p>
            </div>
            <div class="card card-navy p-5">
              <h4 style="color: var(--color-gold-light); margin-bottom: 1.5rem;">Symptom check — if any of these are true, this is for you</h4>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color: rgba(255,255,255,0.85);">Follow-up timing depends entirely on the owner's availability.</li>
                <li style="color: rgba(255,255,255,0.85);">Every proposal takes hours because nothing is templated from your actual workflow.</li>
                <li style="color: rgba(255,255,255,0.85);">Leads who don't hear back within 48 hours go elsewhere.</li>
                <li style="color: rgba(255,255,255,0.85);">Your team can't run the sales process without you in the room.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT GETS BUILT ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">What Gets Built</span>
            <h2>Lead to close — documented and automated</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3" style="gap: 2rem;">
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">01</span>
              <h4>Lead Response Automation</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">Automated first contact within minutes of inquiry. Qualified leads get routed correctly without requiring the owner to review every one that comes in.</p>
            </div>
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">02</span>
              <h4>Proposal System</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">Proposal logic documented, templated, and built into an AI-assisted system that produces a full draft in minutes — not hours. Based on your actual pricing and delivery model.</p>
            </div>
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">03</span>
              <h4>Follow-Up Sequence</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">A documented, AI-assisted multi-step follow-up workflow that runs whether or not the owner is available. Leads stay warm. Deals stay moving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOME ── */}
      <section class="section bg-navy-deep">
        <div class="container">
          <div class="grid-2" style="gap: 4rem; align-items: center;">
            <div>
              <span class="eyebrow" style="color:var(--color-gold);">The Outcome</span>
              <h2 style="color:#fff; margin-top:0.75rem;">A sales pipeline your team runs without you in every deal.</h2>
              <p style="color:rgba(255,255,255,0.8); font-size:1.05rem; line-height:1.8; margin-top:1.5rem;">
                By the end of the intensive, lead response is automated, proposals are built from a documented system, and follow-up runs without owner involvement. Your team has the tools and SOPs to manage the pipeline.
              </p>
              <p style="color:rgba(255,255,255,0.8); font-size:1.05rem; line-height:1.8; margin-top:1rem;">
                You stay informed. You close deals when needed. But the process doesn't stop when you're not watching.
              </p>
              <div class="mt-5">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Book Your Free AI Leverage Call</a>
              </div>
            </div>
            <div>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color:rgba(255,255,255,0.85);">Lead response automation deployed and tested</li>
                <li style="color:rgba(255,255,255,0.85);">Proposal system built from your actual pricing logic</li>
                <li style="color:rgba(255,255,255,0.85);">Follow-up sequence documented and automated</li>
                <li style="color:rgba(255,255,255,0.85);">Team trained on each workflow with SOPs</li>
                <li style="color:rgba(255,255,255,0.85);">CRM configuration reviewed and cleaned if needed</li>
                <li style="color:rgba(255,255,255,0.85);">30-day live support after deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-soft">
        <div class="container text-center">
          <h2>One diagnostic call confirms the constraint and the fit.</h2>
          <p class="lead" style="max-width:640px; margin:1.5rem auto;">30 minutes. We look at your current lead-to-close workflow and tell you honestly where the biggest leaks are.</p>
          <div class="mt-4">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free AI Leverage Call</a>
          </div>
        </div>
      </section>

    </div>,
    {
      title: 'Growth Systems Intensive',
      description: 'Build a repeatable AI-assisted lead-to-close workflow. Faster follow-up, consistent proposals, a pipeline your team runs without you.',
      activeNav: 'services'
    }
  )
})

export default growthSystemsIntensive
