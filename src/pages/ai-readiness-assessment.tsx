import { Hono } from 'hono'

const aiReadinessAssessment = new Hono()

aiReadinessAssessment.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Free Assessment</span>
            <h1 style="color: #fff;">AI Readiness Assessment for Owner-Led Service Firms</h1>
            <p class="hero-lead">
              Before you buy another AI tool, find out if your business is actually ready to use one. This assessment identifies the specific constraint blocking adoption in your firm &mdash; in under 10 minutes.
            </p>
            <div class="hero-cta-group">
              <a href="/growth-constraint-quiz" class="btn btn-primary btn-lg">Take the Assessment &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">What You Get</span>
              <h2>Not a generic quiz. A constraint diagnosis.</h2>
              <p class="mt-4" style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                Most AI readiness frameworks ask whether you have the right tools. This assessment asks a different question: what is the specific operational constraint that would cause AI to fail in your business right now?
              </p>
              <p style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                You leave with a named constraint, a plain-English explanation of why it blocks adoption, and a recommended first step based on your specific situation.
              </p>
            </div>
            <div>
              <div class="card card-white p-5" style="border: 1px solid var(--color-bg-border);">
                <h4 style="color: var(--color-navy);">The assessment covers:</h4>
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
            <p>AI implementation fails in predictable ways. The assessment maps your business to the most likely constraint, so you know what to fix before you build.</p>
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
              <p style="color: rgba(255,255,255,0.85); font-size: 1rem; line-height: 1.6;">Most businesses have one primary constraint. The assessment finds yours.</p>
              <a href="/growth-constraint-quiz" class="btn btn-primary btn-sm mt-4">Take the Assessment</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO NEEDS THIS ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Is This For You</span>
            <h2>Take this assessment if&hellip;</h2>
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
            <a href="/growth-constraint-quiz" class="btn btn-primary btn-lg">Take the Free Assessment &rarr;</a>
            <p style="color: var(--color-text-muted); margin-top: 1rem; font-size: 0.9rem;">Takes about 8 minutes. No email required to see your results.</p>
          </div>
        </div>
      </section>

      {/* ── AFTER THE ASSESSMENT ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">What Comes Next</span>
            <h2>The assessment is step one.</h2>
            <div class="gold-line gold-line-center"></div>
            <p>Once you know your constraint, the next step is understanding what it would take to remove it. That&rsquo;s what the free fit call is for.</p>
          </div>
          <div class="grid-3" style="gap: 1.5rem;">
            <div class="card card-white p-4 text-center">
              <div class="card-number" style="margin: 0 auto 1rem;">01</div>
              <h4 style="color: var(--color-navy);">Take the Assessment</h4>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">8 minutes. Get a named constraint and a plain-English explanation.</p>
            </div>
            <div class="card card-white p-4 text-center">
              <div class="card-number" style="margin: 0 auto 1rem;">02</div>
              <h4 style="color: var(--color-navy);">Book the Fit Call</h4>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">20 minutes. We review your results and tell you whether the engagement is a fit.</p>
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
          <p style="color: rgba(255,255,255,0.75); max-width: 580px; margin: 1.5rem auto; font-size: 1.1rem;">Free. 8 minutes. No email required to see results.</p>
          <a href="/growth-constraint-quiz" class="btn btn-primary btn-lg mt-2">Take the Free Assessment &rarr;</a>
        </div>
      </section>
    </div>,
    {
      title: 'Free AI Readiness Assessment',
      description: 'Is your business actually ready for AI? This free assessment identifies the specific constraint blocking adoption in your firm. Takes under 10 minutes.',
      activeNav: 'resources'
    }
  )
})

export default aiReadinessAssessment
