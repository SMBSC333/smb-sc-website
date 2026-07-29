import { Hono } from 'hono'

const aiReadinessAssessment = new Hono()

aiReadinessAssessment.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">AI Readiness</span>
            <h1 style="color: #fff;">Is your business actually ready for AI leverage?</h1>
            <p class="hero-lead">
              Most AI implementations fail for the same handful of reasons — long before the tool itself is the problem. Here's what actually blocks adoption in owner-led service firms, and how to find out which one applies to you.
            </p>
            <div class="hero-cta-group">
              <a href="/ai-leverage-now" class="btn btn-primary btn-lg">Get Your Free AI Leverage Report &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">The Real Question</span>
              <h2>It's rarely the tool. It's the constraint underneath it.</h2>
              <p class="mt-4" style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                Most AI readiness advice asks whether you have the right tools. That's the wrong question. The real question is: what is the specific operational constraint that would cause AI to fail in your business right now?
              </p>
              <p style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                We find that out on the call — not through a form. Get your free AI Leverage Report first, then book the free 30-minute call and we'll name your constraint together, in the context of your actual business.
              </p>
            </div>
            <div>
              <div class="card card-white p-5" style="border: 1px solid var(--color-bg-border);">
                <h4 style="color: var(--color-navy);">On the call, we look at:</h4>
                <ul class="feature-list mt-4">
                  <li>Workflow documentation and consistency</li>
                  <li>Owner dependency level and delegation readiness</li>
                  <li>Role clarity and AI output ownership</li>
                  <li>Team capacity for adoption and training</li>
                  <li>Current tech stack and integration gaps</li>
                  <li>Economics: cost, time investment, and expected ROI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 5 CONSTRAINT AREAS ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Framework</span>
            <h2>Five constraint areas. One is likely blocking you.</h2>
            <div class="gold-line gold-line-center"></div>
            <p>AI implementation fails in predictable ways. On the call, we map your business to the most likely constraint, so you know what to fix before you build.</p>
          </div>

          <div class="grid-3" style="gap: 1.5rem;">
            <div class="card card-white p-4">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint A</span>
              <h4 style="color: var(--color-navy);">Workflow Gaps</h4>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">Undocumented or inconsistent processes that AI cannot plug into cleanly. AI creates more steps instead of fewer.</p>
            </div>
            <div class="card card-white p-4">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint B</span>
              <h4 style="color: var(--color-navy);">Owner Dependency</h4>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">Decisions and approvals still route through the owner. AI accelerates the workflows but hits the same bottleneck.</p>
            </div>
            <div class="card card-white p-4">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint C</span>
              <h4 style="color: var(--color-navy);">Role Clarity</h4>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">No one owns the AI outputs. Outputs go unreviewed. The system gets abandoned within 30 days.</p>
            </div>
            <div class="card card-white p-4">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint D</span>
              <h4 style="color: var(--color-navy);">Team Readiness</h4>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">Adoption requires structured training and clear SOPs. Most teams get a login and no guidance. Adoption dies.</p>
            </div>
            <div class="card card-white p-4">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Constraint E</span>
              <h4 style="color: var(--color-navy);">Economics</h4>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">The ROI math was never validated before purchase. Costs don&rsquo;t trace to outcomes. The tool gets cut at the next budget review.</p>
            </div>
            <div class="card card-navy p-4" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
              <p style="color: rgba(255,255,255,0.85); font-size: 1rem; line-height: 1.6;">Most businesses have one primary constraint. We find yours on the call.</p>
              <a href="/strategy-call" class="btn btn-primary btn-sm mt-4">Book Your Free AI Leverage Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO NEEDS THIS ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Is This For You</span>
            <h2>This applies to you if&hellip;</h2>
            <div class="gold-line gold-line-center"></div>
          </div>

          <div style="max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1.25rem 1.5rem; background: var(--color-bg-soft); border-radius: var(--radius-md);">
              <span style="color: var(--color-gold-dark); font-weight: 700; font-size: 1.1rem; flex-shrink: 0;">+</span>
              <span style="color: var(--color-text);">You&rsquo;ve already tried AI tools and adoption stalled</span>
            </div>
            <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1.25rem 1.5rem; background: var(--color-bg-soft); border-radius: var(--radius-md);">
              <span style="color: var(--color-gold-dark); font-weight: 700; font-size: 1.1rem; flex-shrink: 0;">+</span>
              <span style="color: var(--color-text);">You&rsquo;re planning an AI rollout and want to avoid the common failure points</span>
            </div>
            <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1.25rem 1.5rem; background: var(--color-bg-soft); border-radius: var(--radius-md);">
              <span style="color: var(--color-gold-dark); font-weight: 700; font-size: 1.1rem; flex-shrink: 0;">+</span>
              <span style="color: var(--color-text);">You own or run an owner-led B2B service firm</span>
            </div>
            <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1.25rem 1.5rem; background: var(--color-bg-soft); border-radius: var(--radius-md);">
              <span style="color: var(--color-gold-dark); font-weight: 700; font-size: 1.1rem; flex-shrink: 0;">+</span>
              <span style="color: var(--color-text);">You&rsquo;re still central to delivery, approvals, or sales and want to change that</span>
            </div>
          </div>

          <div class="text-center mt-5">
            <a href="/ai-leverage-now" class="btn btn-primary btn-lg">Get Your Free AI Leverage Report &rarr;</a>
            <p style="color: var(--color-text-muted); margin-top: 1rem; font-size: 0.9rem;">Instant, industry-specific, and free.</p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">How This Works</span>
            <h2>Two steps to a named constraint.</h2>
            <div class="gold-line gold-line-center"></div>
            <p>No quiz to fill out. We diagnose your constraint together, in the context of your actual business.</p>
          </div>
          <div class="grid-3" style="gap: 1.5rem;">
            <div class="card card-white p-4 text-center">
              <div class="card-number" style="margin: 0 auto 1rem;">01</div>
              <h4 style="color: var(--color-navy);">Get Your Free AI Leverage Report</h4>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">Instant, industry-specific breakdown of where AI is already creating ROI in businesses like yours.</p>
            </div>
            <div class="card card-white p-4 text-center">
              <div class="card-number" style="margin: 0 auto 1rem;">02</div>
              <h4 style="color: var(--color-navy);">Book Your Free AI Leverage Call</h4>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">30 minutes. We name your constraint and map how the fix plays out in your actual business.</p>
            </div>
            <div class="card card-white p-4 text-center">
              <div class="card-number" style="margin: 0 auto 1rem;">03</div>
              <h4 style="color: var(--color-navy);">Get the Implementation Path</h4>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">A clear recommendation on what to build, in what order, and why.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-navy-deep">
        <div class="container text-center">
          <h2 style="color: #fff; max-width: 680px; margin: 0 auto;">Find out what&rsquo;s actually blocking your AI implementation.</h2>
          <p style="color: rgba(255,255,255,0.75); max-width: 580px; margin: 1.5rem auto; font-size: 1.1rem;">Free report. Free 30-minute call. No quiz to fill out.</p>
          <a href="/ai-leverage-now" class="btn btn-primary btn-lg mt-2">Get Your Free AI Leverage Report &rarr;</a>
        </div>
      </section>
    </div>,
    {
      title: 'AI Readiness: What Actually Blocks AI Adoption',
      description: 'Is your business actually ready for AI? Here are the five constraints that block AI adoption in owner-led service firms — and how to find out which one applies to you.',
      activeNav: 'resources'
    }
  )
})

export default aiReadinessAssessment
