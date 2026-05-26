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
          <span class="eyebrow hero-eyebrow">For Owner-Led Service Firms</span>
          <h1>Your business is losing $37,000 a year to friction you can&rsquo;t see.</h1>
          <p class="lead">AI already failed in your business. We find out why. For owner-led B2B service firms doing $1M&ndash;$5M, we identify the real constraint and build your <strong>Growth-Leveraged AI</strong> implementation path.</p>
          <div class="hero-actions">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free 20-Min Fit Call &rarr;</a>
            <a href="/who-its-for" class="btn btn-ghost-light btn-lg">See If Your Business Is a Fit</a>
          </div>
          <p class="hero-microcopy">Implementation, not advice.</p>
        </div>
      </section>

      {/* ── TRUST BAR — certification badges ── */}
      <div class="trust-bar">
        <div class="container">
          <div class="trust-bar-inner">
            <div class="cert-logo-bar">
              <img src="/static/images/badge-cepa.png" alt="CEPA — Certified Exit Planning Advisor" loading="lazy" />
              <img src="/static/images/badge-aasbc.png" alt="AASBC Member" loading="lazy" />
              <img src="/static/images/badge-value-builder.png" alt="Value Builder Certified" loading="lazy" />
              <img src="/static/images/badge-fathom.png" alt="Fathom Certified Advisor" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: PROBLEM RECOGNITION (The Hidden Cost) ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Hidden Cost</span>
            <h2>Where your profit is actually leaking.</h2>
            <div class="gold-line gold-line-center"></div>
            <p class="lead">This is not theory. This is the cost of workflows that should be automated but aren&rsquo;t.</p>
            <p>Most owner-led service firms have 5&ndash;7 operational friction points active at any time. Without the right foundations, AI only makes these problems visible&mdash;it doesn't fix them.</p>
          </div>
          <div class="grid-4">
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Unworked Leads</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Inquiries go cold after 48 hours without automated follow-up.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$9K &ndash; $18K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Manual Reporting</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Owners spend 2&ndash;4 hours per week building dashboards by hand.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$4.8K &ndash; $7.2K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Scheduling Friction</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Back-and-forth coordination delays starts and strains client experience.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$2.4K &ndash; $4.8K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Bookkeeping Lag</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Decisions based on stale P&L data that's always 2&ndash;3 weeks behind.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$3.1K &ndash; $5.5K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Proposal Delays</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Quotes take too long, losing deals to faster competitors.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$4.2K &ndash; $9K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Onboarding Gaps</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">New client starts are slow or depend entirely on the owner.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$5.6K &ndash; $10.4K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Data Silos</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Disconnected tools that prevent real visibility into what's actually working.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$3.2K &ndash; $6.1K / yr</p>
            </div>
            <div class="card card-navy d-flex flex-column justify-content-center align-items-center text-center">
              <p style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-gold-light); margin-bottom:0.75rem;">Typical Annual Friction Cost</p>
              <p style="font-size:2.2rem; font-weight:700; color:#fff; line-height:1.1;">$32K &ndash; $61K</p>
              <p style="font-size:0.85rem; color:rgba(255,255,255,0.65); margin-top:0.75rem;">Per owner-led service firm, $1M&ndash;$5M revenue</p>
            </div>
          </div>
          <div class="btn-center" style="margin-top:3rem;">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Find Out Where Your Friction Lives</a>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE HARD TRUTH ── */}
      <section class="section bg-white pb-0">
        <div class="container">
          <div class="split-section">
            <div class="split-content">
              <span class="eyebrow">The Hard Truth</span>
              <h2>You already tried AI. That is not the issue.</h2>
              <div class="gold-line mb-4"></div>
              <div class="body-v2">
                <p>You bought the tools. You tested prompts. You sat through demos.</p>
                <p><strong>But adoption stalled.</strong></p>
                <p>In most firms, AI does not fail because of the software. It fails because the business underneath it is not ready. <strong>Without the right foundations, AI just amplifies the noise.</strong> Growth-Leveraged AI requires building the right systems first.</p>
              </div>
            </div>
            <div class="split-img-container">
              <img src="/static/images/truth-stalled.png" alt="Abstract Knowledge Graph Hub Visualization" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUR IDENTITY ── */}
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
                <p><strong>We identify the real constraint</strong> blocking AI from creating value in your business and build the <strong>Growth-Leveraged AI</strong> implementation path that keeps you ahead of the competition.</p>
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-sm mt-4">Book a Free 20-Min Fit Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: THE SOLUTION PATH ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Solution Path</span>
            <h2>Implementation, not advice.</h2>
            <div class="gold-line gold-line-center"></div>
            <p class="lead">We spend 90 days diagnosing the real constraint, building the right workflows, and handing you a business that runs itself &mdash; not theories, not templates, not another software recommendation. Real implementation. Real results.</p>
          </div>
          <div class="grid-3" style="gap:2.5rem;">
            <div class="card card-white p-5">
              <div class="card-number">01</div>
              <h4 class="mb-3">Month 1: Diagnose & Quick Wins</h4>
              <p>We audit your current state and identify the top 1-3 AI-ready constraints. We deliver immediate quick wins so you see real ROI within the first 30 days.</p>
            </div>
            <div class="card card-white p-5">
              <div class="card-number">02</div>
              <h4 class="mb-3">Month 2: Build & Install</h4>
              <p>We design and install 2-3 tailored AI workflows (Leads, Reporting, or Proposals) documented as SOPs so your team can operate without you.</p>
            </div>
            <div class="card card-white p-5">
              <div class="card-number">03</div>
              <h4 class="mb-3">Month 3: Train & Hand Off</h4>
              <p>We train your team on the new systems and deliver the full operating package. You leave with a business that runs itself&mdash;ahead of the competition.</p>
            </div>
          </div>
          
          <div class="text-center mt-5" style="background: var(--color-navy-deep); color: #fff; padding: 4rem; border-radius: var(--radius-xl); border: 1px solid var(--color-gold);">
             <span class="eyebrow" style="color: var(--color-gold-light);">The Key Promise</span>
             <h3 style="color: #fff; font-size: 2.5rem; margin-bottom: 1rem;">2.5x Average Year-One ROI</h3>
             <p class="lead" style="color: rgba(255,255,255,0.85);">90 days. Full hand-off. A business that is operationally competitive.</p>
             <div class="mt-4">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
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

      {/* ── SECTION 6: THE PATH TO SCALE (Value Ladder) ── */}
      <section id="solutions" class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Path to Scale</span>
            <h2>The Value Ladder</h2>
            <p class="lead">We build in sequences. Each step installs a new layer of capacity and leverage.</p>
          </div>

          <div style="max-width: 900px; margin: 0 auto;">
            <div class="ladder" style="border: 1px solid var(--color-bg-border); border-radius: var(--radius-xl); overflow: hidden; background: #fff; box-shadow: var(--shadow-md);">
              <div class="ls" style="display: flex; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid var(--color-bg-border);">
                <div style="font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--color-text-muted); width: 50px;">00</div>
                <div style="flex: 1;">
                   <div style="font-weight: 700; color: var(--color-navy); font-size: 1.1rem;">Free 20-Min Fit Call</div>
                   <div style="font-size: 0.85rem; color: var(--color-text-muted);">Identify the real constraint blocking your growth.</div>
                </div>
                <div style="font-weight: 700; color: var(--color-gold-dark); font-size: 1.1rem;">Free</div>
              </div>
              <div class="ls" style="display: flex; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid var(--color-bg-border);">
                <div style="font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--color-text-muted); width: 50px;">01</div>
                <div style="flex: 1;">
                   <div style="font-weight: 700; color: var(--color-navy); font-size: 1.1rem;">AI Constraint Diagnostic Report</div>
                   <div style="font-size: 0.85rem; color: var(--color-text-muted);">A surgical audit of your workflows and technical readiness.</div>
                </div>
                <div style="font-weight: 700; color: var(--color-navy); font-size: 1.1rem;">$1,497</div>
              </div>
              <div class="ls hl" style="display: flex; align-items: center; padding: 2rem; border-bottom: 1px solid var(--color-bg-border); background: var(--color-bg-soft); position: relative;">
                <div style="font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--color-gold-dark); width: 50px;">02</div>
                <div style="flex: 1;">
                   <div style="font-weight: 800; color: var(--color-navy); font-size: 1.25rem;">90-Day AI Implementation Sprint <span class="intensive-tag" style="margin-left: 0.5rem; vertical-align: middle;">Primary</span></div>
                   <div style="font-size: 0.95rem; color: var(--color-navy); margin-top: 0.25rem;">Full installation of your Growth-Leveraged foundations.</div>
                </div>
                <div style="font-weight: 800; color: var(--color-navy); font-size: 1.2rem;">$4,997/mo</div>
              </div>
              <div class="ls" style="display: flex; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid var(--color-bg-border);">
                <div style="font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--color-text-muted); width: 50px;">03</div>
                <div style="flex: 1;">
                   <div style="font-weight: 700; color: var(--color-navy); font-size: 1.1rem;">AI Systems Retainer</div>
                   <div style="font-size: 0.85rem; color: var(--color-text-muted);">Ongoing optimization and agent maintenance.</div>
                </div>
                <div style="font-weight: 700; color: var(--color-navy); font-size: 1.1rem;">$3,497/mo</div>
              </div>
              <div class="ls" style="display: flex; align-items: center; padding: 1.5rem 2rem;">
                <div style="font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--color-text-muted); width: 50px;">04</div>
                <div style="flex: 1;">
                   <div style="font-weight: 700; color: var(--color-navy); font-size: 1.1rem;">Full AI Transformation Project</div>
                   <div style="font-size: 0.85rem; color: var(--color-text-muted);">Custom architecture for enterprise-level scale.</div>
                </div>
                <div style="font-weight: 700; color: var(--color-navy); font-size: 1.1rem;">$28K&ndash;$65K</div>
              </div>
            </div>
            
            <div class="btn-center" style="margin-top: 3.5rem;">
               <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Start at Level 00 &mdash; Free Fit Call</a>
            </div>
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
          <h2 style="color:#fff;">Ready to find your friction?</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width: 800px; margin: 1.5rem auto;">Book a free 20-minute fit call. We will look at your operations and tell you honestly whether the Sprint is right for you &mdash; and where your biggest leaks are.</p>
          <div class="hero-actions" style="justify-content:center; margin-top:2.5rem;">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free 20-Min Fit Call &rarr;</a>
            <a href="/who-its-for" class="btn btn-ghost-light btn-lg">See If Your Business Is a Fit</a>
          </div>
        </div>
      </section>

    </div>,
    { title: 'AI-Enabled Business Growth for SMBs' }
  )
})

export default home
