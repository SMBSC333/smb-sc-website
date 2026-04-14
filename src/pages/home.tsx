import { Hono } from 'hono'

const home = new Hono()

home.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO — Photo background, dark navy overlay ── */}
      <section class="hero hero-photo section-lg">
        <picture class="hero-bg-picture" aria-hidden="true">
          <source type="image/webp" srcset="/static/images/smb-sc-hero-768.webp 768w, /static/images/smb-sc-hero-1024.webp 1024w, /static/images/smb-sc-hero-1440.webp 1440w, /static/images/smb-sc-hero-1920.webp 1920w" sizes="100vw" />
          <source type="image/jpeg" srcset="/static/images/smb-sc-hero-768.jpg 768w, /static/images/smb-sc-hero-1024.jpg 1024w, /static/images/smb-sc-hero-1440.jpg 1440w, /static/images/smb-sc-hero-1920.jpg 1920w" sizes="100vw" />
          <img src="/static/images/smb-sc-hero-1024.jpg" alt="" class="hero-bg-img" fetchpriority="high" decoding="async" />
        </picture>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="container hero-content">
          <span class="eyebrow hero-eyebrow">The AI Implementation Partner</span>
          <h1>AI already failed in your business. We find out why — and show you the right implementation path.</h1>
          <p class="lead">For owner-led B2B service firms doing $1M–$5M, we identify the real constraint blocking AI adoption — whether it is workflow, owner dependency, team readiness, role clarity, or economics — and outline the next implementation move that will create the most leverage.</p>
          <div class="hero-actions">
            <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
            <a href="/who-its-for" class="btn btn-ghost-light btn-lg">See If Your Business Is a Fit</a>
          </div>
          <p class="hero-microcopy">Strategic. Practical. Built to identify the right next move.</p>
        </div>
      </section>

      {/* ── TRUST BAR — certification badges ── */}
      <div class="trust-bar">
        <div class="container">
          <div class="trust-bar-inner">
            <div class="cert-logo-bar">
              <img src="/static/images/badge-cepa.png"          alt="CEPA — Certified Exit Planning Advisor"  loading="lazy" />
              <img src="/static/images/badge-aasbc.png"         alt="AASBC Member"                           loading="lazy" />
              <img src="/static/images/badge-value-builder.png" alt="Value Builder Certified"                loading="lazy" />
              <img src="/static/images/badge-fathom.png"        alt="Fathom Certified Advisor"               loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: THE HARD TRUTH ── */}
      <section class="section bg-white pb-0">
        <div class="container">
          <div class="split-section">
            <div class="split-content">
              <span class="eyebrow">The Hard Truth</span>
              <h2>You already tried AI. That is not the issue.</h2>
              <div class="gold-line mb-4"></div>
              <div class="body-v2">
                <p>You bought the tools. You tested prompts. You sat through demos. Maybe your team even used them for a week or two.</p>
                <p><strong>But adoption stalled.</strong> The owner is still the bottleneck. Workflows still feel messy. Capacity did not improve. And the promised leverage never showed up.</p>
                <p class="lead mt-4">In most firms, AI does not fail because of the software. It fails because the business underneath it is not ready.</p>
              </div>
            </div>
            <div class="split-img-container">
              <img src="/static/images/truth-stalled.png" alt="Abstract Knowledge Graph Hub Visualization" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OUR IDENTITY ── */}
      <section class="section bg-white pt-5">
        <div class="container">
          <div class="split-section reversed">
            <div class="split-img-container">
              <img src="/static/images/identity-advisory.png" alt="Trusted Strategic Advisory" loading="lazy" />
            </div>
            <div class="split-content">
              <span class="eyebrow">Our Identity</span>
              <h2>We are the firm owners hire after AI has already failed.</h2>
              <div class="gold-line mb-4"></div>
              <div class="body-v2">
                <p>We do not start with software recommendations. We do not lead with generic AI strategy. We do not hand you a templated playbook.</p>
                <p><strong>We identify the real constraint</strong> blocking AI from creating value in your business and show you the right implementation path based on what your business actually needs.</p>
                <a href="#contact" class="btn btn-primary btn-sm mt-4">Book the AI Implementation Strategy Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DIFFERENTIATORS ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Why We Differ</span>
            <h2>Diagnosis before Prescription</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3" style="gap:2.5rem;">
            <div class="card card-white p-5">
              <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1.5rem;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
              <h4 class="mb-3">Diagnose before prescribe</h4>
              <p>We identify whether the issue is workflow, owner dependency, role clarity, team readiness, economics, or AI fit.</p>
            </div>
            <div class="card card-white p-5">
              <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1.5rem;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div>
              <h4 class="mb-3">Financial-first thinking</h4>
              <p>Every recommendation is filtered through margin, capacity, delivery efficiency, and operational return.</p>
            </div>
            <div class="card card-white p-5">
              <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1.5rem;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <h4 class="mb-3">Practical implementation</h4>
              <p>We focus on solutions your team can actually adopt and use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW IT WORKS ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Path</span>
            <h2>One strategy call. Clear next move.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="process-timeline">
            <div class="grid-4">
              <div class="step-item">
                <div class="step-num">01</div>
                <h5>Assess</h5>
                <p>We assess the real blocker live.</p>
              </div>
              <div class="step-item">
                <div class="step-num">02</div>
                <h5>Identify</h5>
                <p>We identify what is actually preventing adoption or ROI.</p>
              </div>
              <div class="step-item">
                <div class="step-num">03</div>
                <h5>Prescribe</h5>
                <p>We prescribe the right next solution.</p>
              </div>
              <div class="step-item">
                <div class="step-num">04</div>
                <h5>Implement</h5>
                <p>If fit is right, we move into roadmap and implementation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE RESULT (SHOWCASE) ── */}
      <section id="solutions" class="showcase-section">
        <div class="container">
          <div class="showcase-header">
            <span class="eyebrow">The Result</span>
            <h2>The right solution depends on the real constraint.</h2>
            <p>Not every business needs the same next step. We diagnose first, then prescribe the right path.</p>
          </div>

          <div class="outcome-grid">
            {/* 1. AI Clarity */}
            <div class="outcome-card">
              <div class="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <h3>AI Clarity Roadmap & Implementation</h3>
            </div>

            {/* 2. Strategy Intensives */}
            <div class="outcome-card">
              <div class="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="22" y1="12" x2="18" y2="12"></line>
                  <line x1="6" y1="12" x2="2" y2="12"></line>
                  <line x1="12" y1="6" x2="12" y2="2"></line>
                  <line x1="12" y1="22" x2="12" y2="18"></line>
                </svg>
              </div>
              <h3>Strategy Intensives</h3>
            </div>

            {/* 3. Financial Foundations */}
            <div class="outcome-card">
              <div class="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h3>Financial Foundations / Virtual CFO</h3>
            </div>

            {/* 4. Team Structure */}
            <div class="outcome-card">
              <div class="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Capacity and Team Structure</h3>
            </div>

            {/* 5. Exit Readiness */}
            <div class="outcome-card">
              <div class="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3>Exit Readiness / Value Building</h3>
            </div>

            {/* 6. Leadership Support */}
            <div class="outcome-card">
              <div class="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Leadership and Operating Support</h3>
            </div>
          </div>

          <div class="btn-center">
            <a href="#contact" class="btn btn-primary">Begin Your Strategy Assessment</a>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PROOF (THE CLARITY MATRIX) ── */}
      <section id="proof" class="proof-section">
        <div class="container">
          <div class="section-header center">
            <h2>What owners want most is clarity.</h2>
            <p>Reliable results come from solving the right problem, not just adding more tools.</p>
          </div>

          <div class="proof-grid">
            {/* 1. Marketing / Data */}
            <div class="proof-card">
              <p class="proof-quote">
                "The issue was not the marketing spend; it was the data-logic underneath it. Shifting to a <strong>data-led approach</strong> built consumer trust before the first call."
              </p>
              <div class="proof-attribution">Multi-Site Advisory Client</div>
            </div>

            {/* 2. Operations / Headcount */}
            <div class="proof-card">
              <p class="proof-quote">
                "We thought we needed more headcount. They showed us the bottleneck was the legacy workflow. We now handle <strong>10x the volume</strong> via an AI-powered production line."
              </p>
              <div class="proof-attribution">Professional Services Firm</div>
            </div>

            {/* 3. Strategy / Real Blocker */}
            <div class="proof-card">
              <p class="proof-quote">
                "They helped us see the real blocker in the first 90 minutes. We stopped building features and started building the <strong>behavioral logic</strong> that actually drives revenue."
              </p>
              <div class="proof-attribution">Software Engineering Lead</div>
            </div>

            {/* 4. Efficiency / Our Example */}
            <div class="proof-card">
              <p class="proof-quote">
                "Leveraging this framework cut execution time by <span class="highlight">70%</span>. It cleared the fog, making room for <strong>more crucial decisions</strong> that move the needle."
              </p>
              <div class="proof-attribution">Strategic Lead</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <span class="eyebrow" style="color:var(--color-gold);">The Next Move</span>
          <h2 style="color:#fff;">You do not need more AI advice. You need the right implementation path.</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width: 800px; margin: 1.5rem auto;">If AI has already been tried and still has not produced traction, the next move is not another tool. It is clarity on what is actually blocking leverage — and the right next step to fix it.</p>
          <div class="hero-actions" style="justify-content:center; margin-top:2.5rem;">
            <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
            <a href="/who-its-for" class="btn btn-ghost-light btn-lg">See If Your Business Is a Fit</a>
          </div>
        </div>
      </section>

    </div>,
    { title: 'AI-Enabled Business Growth for SMBs' }
  )
})

export default home
