import { Hono } from 'hono'

const howItWorks = new Hono()

howItWorks.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Engagement Logic</span>
            <h1 style="color: #fff;">One way to start. <br/>The right solution after clarity.</h1>
            <p class="hero-lead">
              Every engagement begins with the <strong>AI Implementation Strategy Call</strong>. We identify the real constraint first, then prescribe the right solution path for your business stage, workflow reality, and growth goal.
            </p>
            <div class="hero-cta-group">
              <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 4-STEP PROCESS ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">The Path</span>
            <h2>How we move from Diagnosis to Implementation</h2>
          </div>
          
          <div class="process-vertical">
            {/* Step 1 */}
            <div class="process-step-v">
              <div class="step-dot">1</div>
              <h3>Strategy Call</h3>
              <p>We assess the business live, identify the likely constraint, and use a structured evaluation process to surface the real blocker.</p>
            </div>
            
            {/* Step 2 */}
            <div class="process-step-v">
              <div class="step-dot">2</div>
              <h3>Constraint Clarity</h3>
              <p>We determine whether the issue is workflow, owner dependency, role clarity, team readiness, economics, AI fit, or a broader operational issue.</p>
            </div>
            
            {/* Step 3 */}
            <div class="process-step-v">
              <div class="step-dot">3</div>
              <h3>Prescribed Solution</h3>
              <p>Based on what we find, we recommend the right next engagement.</p>
            </div>
            
            {/* Step 4 */}
            <div class="process-step-v">
              <div class="step-dot">4</div>
              <h3>Roadmap & Implementation</h3>
              <p>If the fit is right, we build the roadmap and help implement the solution in the right sequence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT STEP OPTIONS ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Recommendations</span>
            <h2>Possible next steps after the Strategy Call</h2>
          </div>

          <div class="options-matrix">
            {/* 1. AI Clarity */}
            <div class="option-card">
              <div class="option-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="15" x2="23" y2="15"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="15" x2="4" y2="15"></line>
                </svg>
              </div>
              <h4>AI Clarity Roadmap & Implementation</h4>
            </div>

            {/* 2. Strategy Intensive */}
            <div class="option-card">
              <div class="option-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h4>Strategy Intensive</h4>
            </div>

            {/* 3. Financial Foundations */}
            <div class="option-card">
              <div class="option-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h4>Financial Foundations</h4>
            </div>

            {/* 4. Capacity / Team */}
            <div class="option-card">
              <div class="option-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>Capacity / Team Structure</h4>
            </div>

            {/* 5. Exit Planning */}
            <div class="option-card">
              <div class="option-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 8 16 12 12 16"></polyline>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h4>Exit Planning / Value Building</h4>
            </div>

            {/* 6. Leadership Support */}
            <div class="option-card">
              <div class="option-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              </div>
              <h4>Leadership Support</h4>
            </div>
          </div>

          <div class="logic-callout">
            <p>You do not need to self-diagnose which service you need. <br/><strong>That is what the Strategy Call is for.</strong></p>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section class="cta-band">
        <div class="container">
          <h2>Ready to identify the real constraint?</h2>
          <p class="lead">Book your Strategy Call today. Total clarity in 45 minutes.</p>
          <a href="/strategy-call" class="btn btn-primary btn-lg">Book the Strategy Call</a>
        </div>
      </section>
    </div>,
    { title: 'How It Works', activeNav: 'how' }
  )
})

export default howItWorks
