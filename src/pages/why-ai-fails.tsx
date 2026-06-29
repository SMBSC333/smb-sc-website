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
            <h1 style="color: #fff;">Why AI fails in owner-led businesses &mdash; and what actually fixes it.</h1>
            <p class="hero-lead">
              It is not the tools. It is not your team. It is not the prompts. AI fails in most small businesses because the constraint was never the software to begin with.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Get the Real Diagnosis &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PATTERN ── */}
      <section class="section bg-white">
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
                  <p style="color: var(--color-text-muted); margin: 0;">ChatGPT, Zapier, an AI scheduling tool, maybe a CRM with automation. You invested real money and real time getting set up.</p>
                </div>
              </div>
              <div style="display: flex; gap: 2rem; padding: 2rem; border: 1px solid var(--color-bg-border); border-top: none; background: var(--color-bg-soft);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700; color: var(--color-gold-dark); flex-shrink: 0; width: 2.5rem;">2</div>
                <div>
                  <h4 style="color: var(--color-navy); margin: 0 0 0.5rem;">Adoption stalled.</h4>
                  <p style="color: var(--color-text-muted); margin: 0;">Your team didn&rsquo;t use it consistently. Or the workflow broke down at the handoff point. Or you ran out of time to manage the rollout.</p>
                </div>
              </div>
              <div style="display: flex; gap: 2rem; padding: 2rem; border: 1px solid var(--color-bg-border); border-top: none; background: #fff;">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700; color: var(--color-gold-dark); flex-shrink: 0; width: 2.5rem;">3</div>
                <div>
                  <h4 style="color: var(--color-navy); margin: 0 0 0.5rem;">You absorbed the blame.</h4>
                  <p style="color: var(--color-text-muted); margin: 0;">You assumed you did something wrong. You bought a course. You tried again. The result was the same.</p>
                </div>
              </div>
              <div style="display: flex; gap: 2rem; padding: 2rem; border: 1px solid var(--color-bg-border); border-top: none; border-radius: 0 0 var(--radius-lg) var(--radius-lg); background: var(--color-bg-soft);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700; color: var(--color-gold-dark); flex-shrink: 0; width: 2.5rem;">4</div>
                <div>
                  <h4 style="color: var(--color-navy); margin: 0 0 0.5rem;">The problem was never the tool.</h4>
                  <p style="color: var(--color-text-muted); margin: 0;">You had an undiagnosed workflow constraint, a role clarity gap, or an adoption gap that no AI tool can resolve by itself. The tool failed because the foundation wasn&rsquo;t there.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 5 REAL REASONS ── */}
      <section class="section bg-soft">
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
              <p style="color: var(--color-text-muted);">AI integrates into processes, not chaos. If your core workflows are undocumented, inconsistent, or owner-dependent, there is no clean place for AI to plug in. It either creates more steps or gets abandoned.</p>
            </div>
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint 02</span>
              <h3>Owner dependency</h3>
              <p style="color: var(--color-text-muted);">If decisions, approvals, and quality checks still run through you, AI can&rsquo;t accelerate the bottleneck &mdash; it hits it. Leverage requires delegation pathways that already work without you.</p>
            </div>
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint 03</span>
              <h3>Role clarity gaps</h3>
              <p style="color: var(--color-text-muted);">AI generates outputs. Someone has to own, review, and act on those outputs. When ownership is unclear, AI outputs pile up unreviewed and the system stops being used within weeks.</p>
            </div>
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint 04</span>
              <h3>Team readiness</h3>
              <p style="color: var(--color-text-muted);">Adoption requires training, not just access. Most teams are handed a login and expected to figure it out. Without structured onboarding and clear SOPs, the tool sits unused within 30 days.</p>
            </div>
            <div class="card card-white p-5" style="grid-column: 1 / -1; max-width: 480px; margin: 0 auto; width: 100%;">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint 05</span>
              <h3>Economics</h3>
              <p style="color: var(--color-text-muted);">The ROI math was never run before the tool purchase. When costs don&rsquo;t trace to outcomes, tools get cut at the first budget pressure review. Sustainable AI adoption requires a validated economic case from the start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT ACTUALLY FIXES IT ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">The Fix</span>
              <h2>What actually fixes an AI implementation failure</h2>
              <p class="mt-4" style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                The answer is not a better tool. It is not a more expensive platform. It is a systematic diagnosis of the specific constraint blocking adoption in your specific business, followed by a structured implementation that builds around it.
              </p>
              <p style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                That is the work we do. We call it Growth-Leveraged AI: AI deployed correctly as a lever for growth, not a tool bolted on top of a broken system.
              </p>
              <div class="mt-5">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free Fit Call &rarr;</a>
              </div>
            </div>
            <div class="card card-navy" style="padding: 2.5rem;">
              <h4 style="color: var(--color-gold-light);">The 90-Day Implementation Sprint</h4>
              <p style="color: rgba(255,255,255,0.75); margin-top: 1rem;">Three phases. One integrated engagement built for owner-led service firms.</p>
              <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
                <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85);">Month 1 &mdash; Diagnostic: identify the real constraint</li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85);">Month 2 &mdash; Build: custom workflows, integrations, SOPs</li>
                <li style="padding: 0.75rem 0; color: rgba(255,255,255,0.85);">Month 3 &mdash; Hand-Off: team training, documentation, 30-day support</li>
              </ul>
              <a href="/services" style="display: inline-block; margin-top: 2rem; color: var(--color-gold-light); font-weight: 600; text-decoration: underline;">See full engagement details &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-navy-deep">
        <div class="container text-center">
          <span class="eyebrow" style="color: var(--color-gold);">Next Step</span>
          <h2 style="color: #fff; max-width: 680px; margin: 1rem auto;">Tell us what happened. We&rsquo;ll tell you what the real constraint was.</h2>
          <p style="color: rgba(255,255,255,0.75); max-width: 600px; margin: 1.5rem auto; font-size: 1.1rem;">
            20 minutes. No pitch. We review your current state, identify whether there&rsquo;s a diagnosable constraint, and tell you plainly what we see.
          </p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg mt-4">Book a Free Fit Call &rarr;</a>
        </div>
      </section>
    </div>,
    {
      title: 'Why AI Fails in Small Businesses',
      description: 'AI fails in small businesses not because of tools, but because of undiagnosed workflow, owner dependency, and team readiness issues. Here is what fixes it.',
      activeNav: ''
    }
  )
})

export default whyAiFails
