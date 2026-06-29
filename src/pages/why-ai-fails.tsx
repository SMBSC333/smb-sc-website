import { Hono } from 'hono'

const whyAiFails = new Hono()

whyAiFails.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">The Real Diagnosis</span>
            <h1 style="color: #fff;">You didn't fail at AI.<br/>You failed at sequencing.</h1>
            <p class="hero-lead">
              The tools work. The failure is almost always one specific thing — one level upstream from where you deployed the technology. It's diagnosable. It has a fix. This page explains what it usually is.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Get the Real Diagnosis &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE INTERNAL PROBLEM ── */}
      <section class="section bg-white">
        <div class="container" style="max-width:840px; margin:0 auto;">
          <div class="section-header center mb-5">
            <span class="eyebrow">Before the Root Causes</span>
            <h2>The part nobody talks about</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <p style="font-size:1.1rem; line-height:1.85;">The external failure is visible: the tool was set up, adoption stalled, the ROI never materialized. Most people stop there and blame the technology or themselves.</p>
          <p style="font-size:1.1rem; line-height:1.85; margin-top:1.25rem;">The internal failure is quieter: the owner feels like they missed something. Like everyone else figured out AI and they didn't. Like they've spent real money twice and still can't get the thing that's supposedly changing every business to actually change theirs.</p>
          <p style="font-size:1.1rem; line-height:1.85; margin-top:1.25rem;"><strong>That feeling is wrong on the facts, but it's understandable.</strong> The actual failure was upstream from the tool. It was architectural. It has nothing to do with how smart or capable you are as an operator.</p>
          <p style="font-size:1.1rem; line-height:1.85; margin-top:1.25rem;">Here's what it actually was.</p>
        </div>
      </section>

      {/* ── THE PATTERN ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Pattern</span>
            <h2>What actually happened in your business</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div style="max-width: 800px; margin: 0 auto;">
            <div style="display: flex; flex-direction: column; gap: 0;">
              <div style="display: flex; gap: 2rem; padding: 2rem; border: 1px solid var(--color-bg-border); border-radius: var(--radius-lg) var(--radius-lg) 0 0; background: #fff;">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700; color: var(--color-gold-dark); flex-shrink: 0; width: 2.5rem;">1</div>
                <div>
                  <h4 style="color: var(--color-navy); margin: 0 0 0.5rem;">You bought the tools.</h4>
                  <p style="color: var(--color-text-muted); margin: 0;">ChatGPT, Zapier, an AI scheduling tool, maybe a CRM with automation. You invested real money and real time getting set up. The demos looked good. It seemed like it was going to work.</p>
                </div>
              </div>
              <div style="display: flex; gap: 2rem; padding: 2rem; border: 1px solid var(--color-bg-border); border-top: none; background: var(--color-bg-soft);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700; color: var(--color-gold-dark); flex-shrink: 0; width: 2.5rem;">2</div>
                <div>
                  <h4 style="color: var(--color-navy); margin: 0 0 0.5rem;">Adoption stalled.</h4>
                  <p style="color: var(--color-text-muted); margin: 0;">Your team didn't use it consistently. Or the workflow broke at the handoff point. Or you ran out of time to manage the rollout while also running the business. It drifted back to the old way.</p>
                </div>
              </div>
              <div style="display: flex; gap: 2rem; padding: 2rem; border: 1px solid var(--color-bg-border); border-top: none; background: #fff;">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700; color: var(--color-gold-dark); flex-shrink: 0; width: 2.5rem;">3</div>
                <div>
                  <h4 style="color: var(--color-navy); margin: 0 0 0.5rem;">You absorbed the blame.</h4>
                  <p style="color: var(--color-text-muted); margin: 0;">You assumed you did something wrong. You bought a course. You tried a different tool. You brought in a consultant who recommended a different platform. The result was the same.</p>
                </div>
              </div>
              <div style="display: flex; gap: 2rem; padding: 2rem; border: 1px solid var(--color-bg-border); border-top: none; border-radius: 0 0 var(--radius-lg) var(--radius-lg); background: rgba(193,155,118,0.06);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700; color: var(--color-gold-dark); flex-shrink: 0; width: 2.5rem;">4</div>
                <div>
                  <h4 style="color: var(--color-navy); margin: 0 0 0.5rem;">The problem was never the tool.</h4>
                  <p style="color: var(--color-text-muted); margin: 0;">There was an undiagnosed constraint upstream — a workflow gap, a role clarity issue, an owner dependency that no AI tool can resolve by itself. The tool failed because the foundation wasn't there first.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 5 REAL REASONS ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Root Cause Analysis</span>
            <h2>The five real reasons AI fails in service businesses</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-2" style="gap: 2rem; max-width: 960px; margin: 0 auto;">
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint 01</span>
              <h3>Workflow gaps</h3>
              <p style="color: var(--color-text-muted); margin-top:0.75rem; line-height:1.75;">AI integrates into processes, not chaos. If your core workflows are undocumented, inconsistent, or owner-dependent, there's no clean place for AI to plug in. It either adds steps or gets abandoned — usually within 30 days.</p>
            </div>
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint 02</span>
              <h3>Owner dependency</h3>
              <p style="color: var(--color-text-muted); margin-top:0.75rem; line-height:1.75;">If decisions, approvals, and quality checks still run through you, AI can't accelerate the bottleneck — it hits it. Leverage requires delegation pathways that already exist without your presence.</p>
            </div>
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint 03</span>
              <h3>Role clarity gaps</h3>
              <p style="color: var(--color-text-muted); margin-top:0.75rem; line-height:1.75;">AI generates outputs. Someone has to own, review, and act on them. When ownership is unclear, AI outputs pile up unreviewed and the system stops being used. Nobody closed the loop.</p>
            </div>
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint 04</span>
              <h3>Team readiness</h3>
              <p style="color: var(--color-text-muted); margin-top:0.75rem; line-height:1.75;">Adoption requires training, not just access. Most teams are handed a login and expected to figure it out. Without structured onboarding and clear SOPs, the tool sits unused within 30 days.</p>
            </div>
            <div class="card card-white p-5" style="grid-column: 1 / -1; max-width: 480px; margin: 0 auto; width: 100%;">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint 05</span>
              <h3>Wrong sequencing</h3>
              <p style="color: var(--color-text-muted); margin-top:0.75rem; line-height:1.75;">The right tool deployed against the wrong first constraint fails every time. Most AI failures are a sequencing problem — the implementation was built in the wrong order, starting at the symptom instead of the upstream cause.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FIX ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">The Fix</span>
              <h2>What actually works</h2>
              <p class="mt-4" style="font-size:1.05rem; line-height:1.8;">
                Not a better tool. Not a more expensive platform. Not another consultant who shows up with a slide deck.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem;">
                A systematic diagnosis of the specific constraint blocking adoption in your specific business, followed by a structured implementation that builds in the right sequence.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem;">
                That's the work. It starts with finding the constraint. It ends with you owning a system that runs without us.
              </p>
              <div class="mt-5">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Find My Constraint — Free Call &rarr;</a>
              </div>
            </div>
            <div class="card card-navy" style="padding: 2.5rem;">
              <h4 style="color: var(--color-gold-light);">The 90-Day Implementation Sprint</h4>
              <p style="color: rgba(255,255,255,0.75); margin-top: 1rem; line-height:1.7;">Three phases. One integrated engagement built for owner-led service firms where AI has already stalled.</p>
              <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
                <li style="padding: 0.85rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); line-height:1.6;">Month 1 — Diagnostic: find the specific upstream constraint</li>
                <li style="padding: 0.85rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); line-height:1.6;">Month 2 — Build: workflows, integrations, custom tools, SOPs</li>
                <li style="padding: 0.85rem 0; color: rgba(255,255,255,0.85); line-height:1.6;">Month 3 — Hand-Off: team training, documentation, 30-day support</li>
              </ul>
              <a href="/services" style="display: inline-block; margin-top: 2rem; color: var(--color-gold-light); font-weight: 600; text-decoration: underline;">See full engagement details &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-navy-deep">
        <div class="container text-center">
          <span class="eyebrow" style="color: var(--color-gold);">Tell Us What Happened</span>
          <h2 style="color: #fff; max-width: 680px; margin: 1rem auto;">Describe your failure. We'll tell you which constraint it was.</h2>
          <p style="color: rgba(255,255,255,0.75); max-width: 600px; margin: 1.5rem auto; font-size: 1.05rem; line-height:1.75;">
            30 minutes. We review your current state, identify whether there's a diagnosable constraint, and give you one specific next move — whether or not we're the right fit to fix it.
          </p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg mt-4">Book a Free Diagnostic Call &rarr;</a>
        </div>
      </section>

    </div>,
    {
      title: 'Why AI Fails in Owner-Led Service Businesses — SMB Strategy Consultants',
      description: 'AI fails not because of the tools but because of workflow gaps, owner dependency, and wrong sequencing. Here is the real diagnosis and what actually fixes it.',
      activeNav: ''
    }
  )
})

export default whyAiFails
