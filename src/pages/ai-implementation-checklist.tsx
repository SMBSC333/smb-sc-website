import { Hono } from 'hono'

const aiImplementationChecklist = new Hono()

aiImplementationChecklist.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Free Checklist</span>
            <h1 style="color: #fff;">AI Implementation Checklist for Service Businesses</h1>
            <p class="hero-lead">
              The 23-point pre-implementation audit that most firms skip &mdash; and why skipping it is the primary reason AI stalls within 90 days.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Get a Custom Review &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section class="section bg-white">
        <div class="container">
          <div style="max-width: 780px; margin: 0 auto; text-align: center;">
            <span class="eyebrow">Why This Matters</span>
            <h2>Most AI implementations fail on things that had nothing to do with the AI.</h2>
            <div class="gold-line gold-line-center"></div>
            <p style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7; margin-top: 1.5rem;">
              The tools are functional. The problem is that the business was not ready to integrate them. This checklist covers the five operational foundations that need to be in place before AI creates leverage instead of friction.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE CHECKLIST ── */}
      <section class="section bg-soft">
        <div class="container">
          <div style="max-width: 820px; margin: 0 auto;">

            {/* SECTION 1 */}
            <div style="margin-bottom: 3rem;">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: var(--color-navy); color: #fff; font-family: var(--font-heading); font-weight: 700; font-size: 0.85rem; padding: 0.4rem 1rem; border-radius: 2rem; white-space: nowrap;">Foundation 1</div>
                <h3 style="margin: 0; color: var(--color-navy);">Workflow Documentation</h3>
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                {[
                  'Your top 5 recurring workflows are written out step by step',
                  'Each workflow has a clear start trigger and end state',
                  'No workflow step is "ask the owner" without a documented decision framework',
                  'You could hand each workflow to a new hire and have them complete it unassisted',
                  'Workflows are reviewed and updated at least annually'
                ].map((item, i) => (
                  <div key={i} style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: #fff; border-radius: var(--radius-md); border: 1px solid var(--color-bg-border);">
                    <div style="width: 1.25rem; height: 1.25rem; border: 2px solid var(--color-bg-border); border-radius: 3px; flex-shrink: 0; margin-top: 0.1rem;"></div>
                    <span style="color: var(--color-text); font-size: 0.95rem;">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2 */}
            <div style="margin-bottom: 3rem;">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: var(--color-navy); color: #fff; font-family: var(--font-heading); font-weight: 700; font-size: 0.85rem; padding: 0.4rem 1rem; border-radius: 2rem; white-space: nowrap;">Foundation 2</div>
                <h3 style="margin: 0; color: var(--color-navy);">Owner Dependency Audit</h3>
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                {[
                  'You can identify which decisions require your personal input versus can be delegated',
                  'Your team can resolve client issues at their level without escalating to you first',
                  'Your business can operate for 2 weeks without you present',
                  'There is a documented approval path for items that do require your input',
                  'At least one team member can make quality calls in your primary delivery area'
                ].map((item, i) => (
                  <div key={i} style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: #fff; border-radius: var(--radius-md); border: 1px solid var(--color-bg-border);">
                    <div style="width: 1.25rem; height: 1.25rem; border: 2px solid var(--color-bg-border); border-radius: 3px; flex-shrink: 0; margin-top: 0.1rem;"></div>
                    <span style="color: var(--color-text); font-size: 0.95rem;">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3 */}
            <div style="margin-bottom: 3rem;">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: var(--color-navy); color: #fff; font-family: var(--font-heading); font-weight: 700; font-size: 0.85rem; padding: 0.4rem 1rem; border-radius: 2rem; white-space: nowrap;">Foundation 3</div>
                <h3 style="margin: 0; color: var(--color-navy);">Role Clarity &amp; AI Output Ownership</h3>
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                {[
                  'Each team member has a written role with clear deliverable ownership',
                  'You have identified which team member would own each AI workflow you plan to deploy',
                  'There is a defined review and approval process for AI-generated outputs',
                  'Your team understands what "good" looks like for outputs in their area',
                  'There is a feedback loop for improving AI outputs over time'
                ].map((item, i) => (
                  <div key={i} style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: #fff; border-radius: var(--radius-md); border: 1px solid var(--color-bg-border);">
                    <div style="width: 1.25rem; height: 1.25rem; border: 2px solid var(--color-bg-border); border-radius: 3px; flex-shrink: 0; margin-top: 0.1rem;"></div>
                    <span style="color: var(--color-text); font-size: 0.95rem;">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 4 */}
            <div style="margin-bottom: 3rem;">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: var(--color-navy); color: #fff; font-family: var(--font-heading); font-weight: 700; font-size: 0.85rem; padding: 0.4rem 1rem; border-radius: 2rem; white-space: nowrap;">Foundation 4</div>
                <h3 style="margin: 0; color: var(--color-navy);">Team Readiness</h3>
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                {[
                  'Your team has basic familiarity with the AI tools you plan to deploy',
                  'You have a structured onboarding plan (not just a login) for new tools',
                  'Team members know what problem each tool is solving and why it matters',
                  'There is scheduled time budgeted for adoption and learning during rollout'
                ].map((item, i) => (
                  <div key={i} style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: #fff; border-radius: var(--radius-md); border: 1px solid var(--color-bg-border);">
                    <div style="width: 1.25rem; height: 1.25rem; border: 2px solid var(--color-bg-border); border-radius: 3px; flex-shrink: 0; margin-top: 0.1rem;"></div>
                    <span style="color: var(--color-text); font-size: 0.95rem;">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5 */}
            <div style="margin-bottom: 2rem;">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: var(--color-navy); color: #fff; font-family: var(--font-heading); font-weight: 700; font-size: 0.85rem; padding: 0.4rem 1rem; border-radius: 2rem; white-space: nowrap;">Foundation 5</div>
                <h3 style="margin: 0; color: var(--color-navy);">Economics</h3>
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                {[
                  'You have calculated the time cost of the workflows you plan to automate',
                  'You have a projected ROI for each AI tool before purchasing',
                  'AI tool costs are tracked against a defined outcome metric',
                  'You have a 90-day review trigger to evaluate whether the tool is delivering'
                ].map((item, i) => (
                  <div key={i} style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: #fff; border-radius: var(--radius-md); border: 1px solid var(--color-bg-border);">
                    <div style="width: 1.25rem; height: 1.25rem; border: 2px solid var(--color-bg-border); border-radius: 3px; flex-shrink: 0; margin-top: 0.1rem;"></div>
                    <span style="color: var(--color-text); font-size: 0.95rem;">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SCORING ── */}
      <section class="section bg-white">
        <div class="container">
          <div style="max-width: 780px; margin: 0 auto;">
            <div class="section-header center mb-5">
              <span class="eyebrow">How to Read Your Score</span>
              <h2>What your checklist results mean</h2>
              <div class="gold-line gold-line-center"></div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.5rem; border-radius: var(--radius-lg); background: #e8f5e9; border: 1px solid #a5d6a7;">
                <div style="font-weight: 700; color: #2e7d32; white-space: nowrap; font-family: var(--font-heading);">20&ndash;23 checked</div>
                <div style="color: var(--color-text);">Your foundations are in place. You are ready to design and deploy an AI implementation. The next step is selecting the right workflows to target first based on ROI and effort.</div>
              </div>
              <div style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.5rem; border-radius: var(--radius-lg); background: #fff8e1; border: 1px solid #ffe082;">
                <div style="font-weight: 700; color: #f57f17; white-space: nowrap; font-family: var(--font-heading);">12&ndash;19 checked</div>
                <div style="color: var(--color-text);">You have some foundations, but gaps in specific areas. AI can still succeed, but the unchecked items will create friction. Diagnose which section has the most unchecked items &mdash; that is your starting constraint.</div>
              </div>
              <div style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.5rem; border-radius: var(--radius-lg); background: #fce4ec; border: 1px solid #f48fb1;">
                <div style="font-weight: 700; color: #c62828; white-space: nowrap; font-family: var(--font-heading);">Under 12 checked</div>
                <div style="color: var(--color-text);">Deploying AI before addressing these gaps will produce the same result you have already seen: tools purchased, adoption stalled. Foundation work comes first. The good news: most of these items can be resolved in 30&ndash;60 days with the right structure.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-navy-deep">
        <div class="container text-center">
          <span class="eyebrow" style="color: var(--color-gold);">Next Step</span>
          <h2 style="color: #fff; max-width: 680px; margin: 1rem auto;">Not sure what to fix first? That&rsquo;s what the fit call is for.</h2>
          <p style="color: rgba(255,255,255,0.75); max-width: 580px; margin: 1.5rem auto; font-size: 1.1rem;">
            20 minutes. We review your checklist results, identify your primary constraint, and tell you whether the engagement is a fit for your situation.
          </p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg mt-2">Book a Free Fit Call &rarr;</a>
        </div>
      </section>
    </div>,
    {
      title: 'AI Implementation Checklist for Service Businesses — 23-Point Pre-Implementation Audit',
      description: 'The 23-point AI implementation checklist for owner-led service firms. Covers workflow documentation, owner dependency, role clarity, team readiness, and economics before deploying any AI tool.',
      activeNav: 'resources'
    }
  )
})

export default aiImplementationChecklist
