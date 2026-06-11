import { Hono } from 'hono'

const howItWorks = new Hono()

howItWorks.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Implementation System</span>
            <h1 style="color: #fff;">The 90-Day AI Implementation Sprint: From Diagnosis to Hand-Off</h1>
            <p class="hero-lead">
              This is not a retainer. It's not consulting. It's a 90-day implementation system designed to identify your constraint, build the solution, and hand you operational control.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 90-DAY SPRINT MILESTONES ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">The AI Implementation Engagement</span>
            <h2>Three months to operational clarity</h2>
          </div>
          
          <div class="process-vertical">
            {/* Step 1 */}
            <div class="process-step-v">
              <div class="step-dot">1</div>
              <h3>Weeks 1-4: Identify the Real Constraint</h3>
              <p>We audit your current state: workflows, automation gaps, team readiness, owner dependencies, and economic viability. We identify your top 1-3 AI-ready constraints and deliver quick wins for immediate ROI.</p>
              <p class="text-sm mt-2" style="color:var(--color-gold-dark);">Deliverables: Diagnostic report. Quick-win implementation. Roadmap for months 2-3.</p>
            </div>
            
            {/* Step 2 */}
            <div class="process-step-v">
              <div class="step-dot">2</div>
              <h3>Weeks 5-8: Design and Deploy Tailored AI Workflows</h3>
              <p>We execute the roadmap in sequence. For areas of agitation where standard software falls short, we build custom internal tools to bridge the gap and create unique leverage.</p>
              <p class="text-sm mt-2" style="color:var(--color-gold-dark);">Deliverables: 2-3 deployed workflows (and custom internal tools if needed). Full SOPs. Team checklist for daily use.</p>
            </div>
            
            {/* Step 3 */}
            <div class="process-step-v">
              <div class="step-dot">3</div>
              <h3>Weeks 9-12: Train Your Team and Deliver Ownership</h3>
              <p>Comprehensive training for your team on new systems, prompts, and daily workflows. We deliver the full operating documentation package to ensure smooth adoption.</p>
              <p class="text-sm mt-2" style="color:var(--color-gold-dark);">Deliverables: Trained team. Complete documentation. Operating manual. 30-day support window.</p>
            </div>
            
            {/* Step 4 */}
            <div class="process-step-v">
              <div class="step-dot">4</div>
              <h3>Growth-Leveraged AI</h3>
              <p>You leave with foundations that keep you ahead of the competition. Without these foundations, AI just amplifies the noise. With them, it creates scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS WORKS ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">The Difference</span>
            <h2>Why This Works</h2>
          </div>

          <div class="grid-4">
             <div class="card card-white">
                <h4 style="color:var(--color-gold-dark);">Fast</h4>
                <p class="text-sm">Results in 90 days, not 6-12 months of perpetual consulting. We move at the speed of your growth.</p>
             </div>
             <div class="card card-white">
                <h4 style="color:var(--color-gold-dark);">Practical</h4>
                <p class="text-sm">Built on your actual workflows, not generic best practices. We solve your real problems.</p>
             </div>
             <div class="card card-white">
                <h4 style="color:var(--color-gold-dark);">Owned</h4>
                <p class="text-sm">You run it after day 90. No ongoing dependency on us for daily operations.</p>
             </div>
             <div class="card card-white">
                <h4 style="color:var(--color-gold-dark);">Measurable</h4>
                <p class="text-sm">2.5x average year-one ROI ($37k friction saved vs. $14,991 invested in implementation).</p>
             </div>
          </div>
        </div>
      </section>

      {/* ── THE STRATEGIC FOUNDATIONS ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Strategic Logic</span>
            <h2>Foundations First. AI Second.</h2>
            <div class="gold-line gold-line-center"></div>
            <p class="lead" style="max-width: 800px; margin: 1.5rem auto;">We don&rsquo;t bolt software to broken systems. We solve for the five foundational constraints that make AI actually work.</p>
          </div>

          <div class="grid-2 mt-5">
            {/* 1. Financial Clarity */}
            <div class="option-card">
              <div class="option-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h4>Financial Clarity</h4>
              <p class="text-sm">We find the profit leaks and fix unit economics so your AI ROI is measurable, not guessed.</p>
            </div>

            {/* 2. Growth Systems */}
            <div class="option-card">
              <div class="option-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h4>Growth Systems</h4>
              <p class="text-sm">We rebuild acquisition engines so you can scale without adding operational chaos.</p>
            </div>

            {/* 3. Owner Dependency */}
            <div class="option-card">
              <div class="option-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <h4>Owner Dependency</h4>
              <p class="text-sm">We remove the founder as the bottleneck, installing the team-led rhythm needed for adoption.</p>
            </div>

            {/* 4. AI Operations */}
            <div class="option-card">
              <div class="option-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                </svg>
              </div>
              <h4>AI Operations</h4>
              <p class="text-sm">We install custom agents to handle high-variance manual tasks, reclaiming 40% capacity.</p>
            </div>

            {/* 5. Operational Systems */}
            <div class="option-card">
              <div class="option-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h4>Operational Systems</h4>
              <p class="text-sm">We map every role's step-by-step process, install the operating rhythm, and use that clarity as the foundation for AI deployment that actually sticks.</p>
            </div>
          </div>

          <div class="logic-callout mt-6 bg-navy-deep text-white p-5 text-center" style="border-radius: var(--radius-lg);">
             <p style="font-size: 1.25rem; margin-bottom: 0;">
                <strong>Diagnosis Before Prescription.</strong> We identify your primary constraint during the Fit Call before recommending any implementation path.
             </p>
             <div class="mt-4">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Book Your Free Strategy Call</a>
             </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ── */}
      <section class="cta-band bg-soft">
        <div class="container">
          <h2>Ready to find your friction?</h2>
          <p class="lead">Book a free 30-minute strategy call. We will look at your operations and tell you honestly where your biggest leaks are.</p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call</a>
        </div>
      </section>
    </div>,
    { title: 'How It Works', activeNav: 'how' }
  )
})

export default howItWorks
