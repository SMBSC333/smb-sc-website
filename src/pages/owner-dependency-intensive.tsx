import { Hono } from 'hono'

const ownerDependencyIntensive = new Hono()

ownerDependencyIntensive.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Focused Sprint</span>
            <h1 style="color: #fff;">Every decision still runs through you.<br/>That's the constraint.</h1>
            <p class="hero-lead">
              The Owner Dependency Intensive documents the judgment calls only you currently make — and builds the systems so your team can make them correctly without you. In weeks, not quarters.
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
              <h2>The business is profitable. But it only runs when you're in it.</h2>
              <div class="gold-line mb-4"></div>
              <p style="font-size:1.05rem; line-height:1.8; color:var(--color-text);">
                Owner dependency is the single most common constraint in service businesses at $500K–$3M. You built the business. You know how decisions should be made. Your team is good — but every exception, edge case, and approval still comes back to you.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                That's not a team problem. It's a documentation problem. The knowledge is in your head in a form that can't be delegated, because it was never written down in a way anyone else can follow.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                This intensive extracts that knowledge, structures it into SOPs, and builds the decision-making layer your team needs to act without escalating to you.
              </p>
            </div>
            <div class="card card-navy p-5">
              <h4 style="color: var(--color-gold-light); margin-bottom: 1.5rem;">Symptom check — if any of these are true, this is for you</h4>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color: rgba(255,255,255,0.85);">You can't take a full week off without the business visibly slowing.</li>
                <li style="color: rgba(255,255,255,0.85);">Your team asks you about exceptions that should be routine.</li>
                <li style="color: rgba(255,255,255,0.85);">Client delivery quality varies based on who the owner is available to.</li>
                <li style="color: rgba(255,255,255,0.85);">You've tried delegating before. It worked for two weeks then drifted back.</li>
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
            <h2>The judgment layer your team needs to run without you</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3" style="gap: 2rem;">
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">01</span>
              <h4>Constraint Audit</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">We map every decision point where the owner is currently the required approver. Not just the obvious ones — the invisible judgment calls embedded in day-to-day operations.</p>
            </div>
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">02</span>
              <h4>Decision Documentation</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">The judgment calls that live in your head get extracted, structured, and documented as decision trees and SOPs your team can follow independently — including edge cases and exceptions.</p>
            </div>
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">03</span>
              <h4>Delegation Infrastructure</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">Role clarity, escalation paths, and AI-assisted decision support tools that give your team the confidence to act — and you the visibility to trust that they did.</p>
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
              <h2 style="color:#fff; margin-top:0.75rem;">A business that runs when you're not watching.</h2>
              <p style="color:rgba(255,255,255,0.8); font-size:1.05rem; line-height:1.8; margin-top:1.5rem;">
                By the end of the intensive, your team has documented SOPs for the decisions that currently escalate to you, role clarity about who owns what, and the AI-assisted tools to handle exceptions without needing your input.
              </p>
              <p style="color:rgba(255,255,255,0.8); font-size:1.05rem; line-height:1.8; margin-top:1rem;">
                The measure of success is simple and specific: owner hours reduced by a documented amount within 60 days of deployment. If we can't get there, we don't call it done.
              </p>
              <div class="mt-5">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Start With a Free Diagnostic Call</a>
              </div>
            </div>
            <div>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color:rgba(255,255,255,0.85);">All owner-dependent decision points mapped and documented</li>
                <li style="color:rgba(255,255,255,0.85);">Decision SOPs written for top 10 escalation types</li>
                <li style="color:rgba(255,255,255,0.85);">Role clarity structure rebuilt around actual workflows</li>
                <li style="color:rgba(255,255,255,0.85);">AI-assisted decision support tools deployed where needed</li>
                <li style="color:rgba(255,255,255,0.85);">Team trained on each SOP with parallel-run validation</li>
                <li style="color:rgba(255,255,255,0.85);">30-day live support after deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-soft">
        <div class="container text-center">
          <h2>One diagnostic call finds the specific dependency that's costing you the most.</h2>
          <p class="lead" style="max-width:640px; margin:1.5rem auto;">30 minutes. We review your current state and identify which owner dependencies have the highest leverage to remove first.</p>
          <div class="mt-4">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call</a>
          </div>
        </div>
      </section>

    </div>,
    {
      title: 'Owner Dependency Intensive',
      description: 'Remove yourself as the bottleneck. Document the judgment calls only you make. Build the delegation infrastructure so your team runs without you.',
      activeNav: 'services'
    }
  )
})

export default ownerDependencyIntensive
