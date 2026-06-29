import { Hono } from 'hono'

const aiOperationsIntensive = new Hono()

aiOperationsIntensive.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Focused Sprint</span>
            <h1 style="color: #fff;">Three AI workflows deployed and adopted.<br/>In 30 days. Specific to your business.</h1>
            <p class="hero-lead">
              Not a generic automation template. Not a tool recommendation and a handshake. Three AI workflows built to your actual operations, trained into your team, and running by day 30.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
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
              <h2>You know what should be automated. You can't get to the build.</h2>
              <div class="gold-line mb-4"></div>
              <p style="font-size:1.05rem; line-height:1.8; color:var(--color-text);">
                Most service business owners can name three or four things that should be running on automation. The bottleneck isn't knowledge — it's time, and the gap between "I want to build this" and "it's deployed and my team uses it."
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                The AI Operations Intensive closes that gap. We run a constraint-first diagnostic to identify the three highest-leverage workflows for your specific business, then we build and deploy them — with team training and SOPs included.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                You don't get three tools set up. You get three workflows running.
              </p>
            </div>
            <div class="card card-navy p-5">
              <h4 style="color: var(--color-gold-light); margin-bottom: 1.5rem;">Symptom check — if any of these are true, this is for you</h4>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color: rgba(255,255,255,0.85);">You have AI tools you're not fully using because no one built the workflow.</li>
                <li style="color: rgba(255,255,255,0.85);">You know what should be automated but never have time to build it.</li>
                <li style="color: rgba(255,255,255,0.85);">Previous AI implementations got set up but never fully adopted.</li>
                <li style="color: rgba(255,255,255,0.85);">Your team knows they should be using AI but doesn't know where to start.</li>
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
            <h2>Three workflows. Deployed. Adopted.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3" style="gap: 2rem;">
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">01</span>
              <h4>Constraint Diagnosis</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">We identify which three workflows will produce the highest leverage for your specific business — not a generic list, a prioritized selection based on your actual operations and the friction costing you the most right now.</p>
            </div>
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">02</span>
              <h4>Build and Deploy</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">We build the three workflows to your actual business operations. If standard tools can implement them, we build on those. If a friction point requires a custom integration, we build that too.</p>
            </div>
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">03</span>
              <h4>Team Training and SOPs</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">Every workflow comes with documented SOPs and live team training. The definition of "deployed" here is "your team uses it without asking you how." We don't hand off until that's true.</p>
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
              <h2 style="color:#fff; margin-top:0.75rem;">Three running workflows. Owned by your team. Not dependent on us.</h2>
              <p style="color:rgba(255,255,255,0.8); font-size:1.05rem; line-height:1.8; margin-top:1.5rem;">
                By day 30, you have three AI workflows deployed and running, documented in SOPs, and trained into your team. The tools are set up correctly. The processes are documented. Ownership is with your team — not with us.
              </p>
              <p style="color:rgba(255,255,255,0.8); font-size:1.05rem; line-height:1.8; margin-top:1rem;">
                The goal is adoption, not access. If the workflows aren't being used by the team by day 30, we extend the support window until they are.
              </p>
              <div class="mt-5">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Start With a Free Diagnostic Call</a>
              </div>
            </div>
            <div>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color:rgba(255,255,255,0.85);">Three highest-leverage workflows identified via constraint diagnosis</li>
                <li style="color:rgba(255,255,255,0.85);">All three built to your actual operations — not templates adapted to you</li>
                <li style="color:rgba(255,255,255,0.85);">Team trained with live sessions on each workflow</li>
                <li style="color:rgba(255,255,255,0.85);">SOPs documented and stored where your team can find them</li>
                <li style="color:rgba(255,255,255,0.85);">Adoption confirmed — not just access granted</li>
                <li style="color:rgba(255,255,255,0.85);">30-day live support after deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-soft">
        <div class="container text-center">
          <h2>One diagnostic call identifies which three workflows to build first.</h2>
          <p class="lead" style="max-width:640px; margin:1.5rem auto;">30 minutes. We review your current operations and tell you honestly where AI will produce the most leverage the fastest.</p>
          <div class="mt-4">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call</a>
          </div>
        </div>
      </section>

    </div>,
    {
      title: 'AI Operations Intensive',
      description: 'Three AI workflows deployed and adopted in 30 days. Specific to your business, trained into your team, running before we leave.',
      activeNav: 'services'
    }
  )
})

export default aiOperationsIntensive
