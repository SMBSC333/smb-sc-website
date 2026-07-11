import { Hono } from 'hono'

const home = new Hono()

home.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="hero hero-photo section-lg">
        <picture class="hero-bg-picture" aria-hidden="true">
          <source type="image/webp" srcset="/static/images/smb-sc-hero-768.webp 768w, /static/images/smb-sc-hero-1024.webp 1024w, /static/images/smb-sc-hero-1440.webp 1440w, /static/images/smb-sc-hero-1920.webp 1920w" sizes="100vw" />
          <source type="image/jpeg" srcset="/static/images/smb-sc-hero-768.jpg 768w, /static/images/smb-sc-hero-1024.jpg 1024w, /static/images/smb-sc-hero-1440.jpg 1440w, /static/images/smb-sc-hero-1920.jpg 1920w" sizes="100vw" />
          <img src="/static/images/smb-sc-hero-1024.jpg" alt="" class="hero-bg-img" fetchpriority="high" decoding="async" />
        </picture>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="container hero-content">
          <span class="eyebrow hero-eyebrow">AI Leverage for Owner-Led Service Firms</span>
          <h1>The businesses winning right now aren't working harder.<br/>They're leveraging AI in ways their competitors aren't.</h1>
          <p class="lead">We build custom AI systems that plug into the tools your team already uses — so you do more with the people you have, grow faster, and hit your financial goals without adding headcount.</p>
          <div class="hero-actions">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            <a href="/who-its-for" class="btn btn-ghost-light btn-lg">See If You're a Fit</a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
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

      {/* ── AI LEVERAGE LEAD MAGNET — center of the page ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="split-section">
            <div class="split-content">
              <span class="eyebrow">AI Leverage by Industry</span>
              <h2>Your competitors are already using AI to outproduce you with a smaller team. See exactly how.</h2>
              <div class="gold-line mb-4"></div>
              <p class="lead" style="margin-bottom:1.25rem;">
                AI leverage is not generic. What works in HVAC is different from what works in accounting or law. The businesses gaining ground right now have figured out the specific moves for their industry — the tools, the workflows, the integrations that actually compound.
              </p>
              <p style="color:var(--color-text); line-height:1.75; margin-bottom:1.5rem;">
                We've documented exactly what's happening across 12 service industries — who's moving, how they're doing it, and where the next open window is before it closes.
              </p>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.4rem 1.5rem; max-width:420px;">
                <div class="industry-bullet">Accounting</div>
                <div class="industry-bullet">Law Firms</div>
                <div class="industry-bullet">HVAC</div>
                <div class="industry-bullet">Plumbing</div>
                <div class="industry-bullet">IT / MSPs</div>
                <div class="industry-bullet">Pest Control</div>
                <div class="industry-bullet">Marketing Agencies</div>
                <div class="industry-bullet">Property Mgmt</div>
                <div class="industry-bullet" style="grid-column:1/-1; color:var(--color-text-muted); font-size:0.82rem;">+ Architecture, Electrical, Engineering, Landscaping</div>
              </div>
            </div>

            <div class="split-form-container">
              <div class="report-form-card">
                <h3 style="font-size:1.3rem; font-weight:800; color:var(--color-navy); margin-bottom:0.4rem;">Get Your Free AI Leverage Report</h3>
                <p style="font-size:0.88rem; color:var(--color-text-muted); margin-bottom:1.25rem; line-height:1.6;">
                  Select your industry and get the report built for your sector — where the leverage is, what the early movers are doing, and where to start.
                </p>
                <form action="/.netlify/functions/capture-report-lead" method="POST" class="report-form">
                  <div class="form-group">
                    <label for="hp-firstName">First Name</label>
                    <input type="text" id="hp-firstName" name="firstName" placeholder="Your first name" />
                  </div>
                  <div class="form-group">
                    <label for="hp-email">Email <span style="color:#c0392b;">*</span></label>
                    <input type="email" id="hp-email" name="email" required placeholder="your@email.com" />
                  </div>
                  <div class="form-group">
                    <label for="hp-industry">Your Industry <span style="color:#c0392b;">*</span></label>
                    <select id="hp-industry" name="industry" required>
                      <option value="">Select your industry</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Architecture">Architecture</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Engineering">Engineering</option>
                      <option value="HVAC">HVAC</option>
                      <option value="IT / MSPs">IT / MSPs</option>
                      <option value="Landscaping">Landscaping</option>
                      <option value="Law Firms">Law Firms</option>
                      <option value="Marketing Agencies">Marketing Agencies</option>
                      <option value="Pest Control">Pest Control</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Property Management">Property Management</option>
                    </select>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Get My Industry Report &rarr;</button>
                  <p style="font-size:0.72rem; color:var(--color-text-muted); text-align:center; margin-top:0.6rem;">No spam. Unsubscribe anytime.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE LEVERAGE THESIS ── */}
      <section class="section bg-white pb-0">
        <div class="container">
          <div class="split-section">
            <div class="split-content">
              <span class="eyebrow">The Leverage Problem</span>
              <h2>You don't need more people. You need the work to multiply.</h2>
              <div class="gold-line mb-4"></div>
              <div class="body-v2">
                <p>Margins in service businesses are under more pressure than they've been in a decade. The answer isn't hiring faster — the math on that doesn't work anymore. The answer is leverage: getting more output from the same team by building AI into how the work actually gets done.</p>
                <p><strong>That's not about buying tools.</strong> It's about building custom systems that connect to the software your team already uses, handle the repetitive work that drains your best people, and create capacity your business can grow into without adding payroll.</p>
                <p class="mt-3 lead">The businesses that figure this out first in their market are going to be nearly impossible to compete with in five years. The window is open right now.</p>
              </div>
            </div>
            <div class="split-img-container">
              <img src="/static/images/truth-stalled.png" alt="AI leverage for service businesses" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OBJECTION BRIDGE — "IT DIDN'T WORK BEFORE" ── */}
      <section class="section bg-navy">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow" style="color:var(--color-gold);">If You've Already Tried AI</span>
            <h2 style="color:#fff; max-width:780px; margin:0 auto;">If AI didn't deliver for your business — we understand that. And we know exactly why it happens.</h2>
            <div class="gold-line gold-line-center mt-4"></div>
          </div>
          <p class="lead" style="color:rgba(255,255,255,0.85); text-align:center; max-width:760px; margin:0 auto 3rem;">
            For many businesses, AI's implementation fell short before it ever had a chance — not because of the technology, but because of constraints already inside the business. Unclear processes. No financial visibility. Tools layered on top of how people actually work instead of built into it. AI amplifies what's already there. When those constraints are present, it amplifies the wrong things.
          </p>
          <div class="grid-3" style="gap:2rem; margin-bottom:3rem;">
            <div class="card p-5" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); border-radius:12px;">
              <div style="color:var(--color-gold); font-size:0.78rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.75rem;">Constraint 1</div>
              <h4 style="color:#fff; margin-bottom:0.75rem;">Process gaps</h4>
              <p style="color:rgba(255,255,255,0.75); line-height:1.75;">If the workflow lives in someone's head, varies by person, or has no defined steps — AI can't run on it. The process has to be clear before it can be compounded.</p>
            </div>
            <div class="card p-5" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); border-radius:12px;">
              <div style="color:var(--color-gold); font-size:0.78rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.75rem;">Constraint 2</div>
              <h4 style="color:#fff; margin-bottom:0.75rem;">No financial clarity</h4>
              <p style="color:rgba(255,255,255,0.75); line-height:1.75;">Without knowing your real margins and where the money is going, AI creates speed without direction. Every system we build is tied to an economic outcome — that only works when the numbers are clear.</p>
            </div>
            <div class="card p-5" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); border-radius:12px;">
              <div style="color:var(--color-gold); font-size:0.78rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.75rem;">Constraint 3</div>
              <h4 style="color:#fff; margin-bottom:0.75rem;">Tools added, not integrated</h4>
              <p style="color:rgba(255,255,255,0.75); line-height:1.75;">A tool your team has to separately log into doesn't generate leverage — it generates overhead. AI that's built into how work already gets done is the only kind your team will actually use.</p>
            </div>
          </div>
          <div style="background:rgba(255,255,255,0.08); border-left:4px solid var(--color-gold); border-radius:8px; padding:2rem 2.5rem; max-width:760px; margin:0 auto; text-align:left;">
            <p style="color:#fff; font-size:1.05rem; line-height:1.85; margin:0 0 1rem;">
              <strong style="color:var(--color-gold);">That's exactly what our strategy call is designed to do.</strong> We have a step-by-step process to identify the specific constraints blocking leverage in your business — and work through them directly, in that conversation.
            </p>
            <p style="color:rgba(255,255,255,0.8); font-size:0.97rem; line-height:1.8; margin:0 0 1.5rem;">
              If the fundamentals need addressing first, you'll leave knowing exactly what to fix and in what order. If the path is clear, we show you where the leverage is and how to capture it. Either way, the constraint gets named and the next move gets clear.
            </p>
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Book the Constraint Diagnosis Call &rarr;</a>
          </div>
        </div>
      </section>

      {/* ── THE GUIDE ── */}
      <section class="section bg-white pt-5">
        <div class="container">
          <div class="split-section reversed">
            <div class="split-img-container">
              <img src="/static/images/identity-advisory.png" alt="SMB Strategy Consultants — AI implementation" loading="lazy" />
            </div>
            <div class="split-content">
              <span class="eyebrow">What We Actually Do</span>
              <h2>We build the system. You own it.</h2>
              <div class="gold-line mb-4"></div>
              <div class="body-v2">
                <p>We don't hand you a playbook and wish you luck. We diagnose the specific workflow in your business where AI creates the most leverage — then we build the custom tool that does that job.</p>
                <p>It plugs into the software your team already uses. It's built around how your people actually work. And in 90 days, you own a running system — not a consultant dependency.</p>
                <p>Every recommendation is filtered through margin, capacity, and operational return. If standard software solves it, we tell you which one and how to sequence it. If the constraint needs something custom, we build it.</p>
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-sm mt-4">Book Your Free Strategy Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PLAN (3 steps) ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">How It Works</span>
            <h2>Find the lever. Build the system. Hand you the wheel.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="process-timeline">
            <div class="grid-3" style="gap:2rem; max-width:860px; margin:0 auto;">
              <div class="step-item" style="text-align:center;">
                <div class="step-num">01</div>
                <h5>Find the leverage point</h5>
                <p>A 30-minute diagnostic call identifies the specific workflow where AI creates the most measurable return — capacity, speed, cost, or margin. No homework required.</p>
              </div>
              <div class="step-item" style="text-align:center;">
                <div class="step-num">02</div>
                <h5>Build the right system</h5>
                <p>We build a custom AI tool that integrates with the software your team already uses — not a generic SaaS subscription, a system built for your business and your people.</p>
              </div>
              <div class="step-item" style="text-align:center;">
                <div class="step-num">03</div>
                <h5>You own it in 90 days</h5>
                <p>Trained, documented, and running in your business. Your team operates it without you. You have leverage — actual leverage — not another tool collecting dust.</p>
              </div>
            </div>
          </div>
          <div class="btn-center mt-5">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Start With a Free Call &rarr;</a>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Why We're Different</span>
            <h2>Custom-built. Integrated. Yours.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3" style="gap:2.5rem;">
            <div class="card card-white p-5">
              <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1.5rem;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
              <h4 class="mb-3">Built for your business, not the market</h4>
              <p>Generic AI tools are built for everyone. We build custom systems for one business — yours. The workflows, the integrations, the edge cases your team actually deals with every day.</p>
            </div>
            <div class="card card-white p-5">
              <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1.5rem;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div>
              <h4 class="mb-3">Margin-first, always</h4>
              <p>Every system we build runs through one filter: does this generate a measurable return? Capacity, speed, cost reduction, or revenue — if we can't show you the economic case, we don't build it.</p>
            </div>
            <div class="card card-white p-5">
              <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1.5rem;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <h4 class="mb-3">Integrated, not layered on top</h4>
              <p>The system lives inside the tools your team already uses. No new software to learn. No workarounds. It runs in the background and does the work — which is the only way a team actually adopts it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section id="proof" class="proof-section">
        <div class="container">
          <div class="section-header center">
            <h2>The leverage is always findable.<br/>The system is always buildable.</h2>
            <p>What changes when the right constraint gets solved.</p>
          </div>
          <div class="proof-grid">
            <div class="proof-card">
              <p class="proof-quote">"We thought we needed more headcount. They showed us the bottleneck was the legacy workflow. We now handle <strong>10x the volume</strong> with the same team."</p>
              <div class="proof-attribution">Professional Services Firm</div>
            </div>
            <div class="proof-card">
              <p class="proof-quote">"The issue was not the marketing spend — it was the data logic underneath it. Shifting to a <strong>data-led approach</strong> built consumer trust before the first call."</p>
              <div class="proof-attribution">Multi-Site Advisory Client</div>
            </div>
            <div class="proof-card">
              <p class="proof-quote">"They helped us see the real blocker in the first 90 minutes. We stopped building features and started building the <strong>behavioral logic</strong> that actually drives revenue."</p>
              <div class="proof-attribution">Software Engineering Lead</div>
            </div>
            <div class="proof-card">
              <p class="proof-quote">"Leveraging this framework cut execution time by <span class="highlight">70%</span>. It cleared the fog, making room for <strong>decisions that actually move the needle.</strong>"</p>
              <div class="proof-attribution">Strategic Lead</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHECK ENGINE ── */}
      <section id="check-engine" class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Scorecard</span>
            <h2>Your business has an economic check engine light.<br/>Most owners never look at it.</h2>
            <div class="gold-line gold-line-center"></div>
            <p class="lead mt-4" style="max-width:720px; margin-left:auto; margin-right:auto;">
              Every business is operating in economic and operational conditions right now — conditions that are either working for you or against you. Green means your environment supports the next move. Yellow means proceed with eyes open. Red means the conditions are creating drag, regardless of how hard you push.
            </p>
          </div>
          <div class="check-engine-feature-block">
            <div class="check-engine-icon-wrap">
              <div class="check-engine-glow-ring">
                <img src="/static/images/check-engine-icon-transparent.png" alt="Business Check Engine Light" class="check-engine-hero-icon" width="120" height="120" />
              </div>
              <div class="check-engine-status-badge">
                <img src="/static/images/check-engine-icon-transparent.png" alt="" class="check-engine-badge-icon" width="16" height="16" aria-hidden="true" />
                <span>Q2 2026 — Engine Status: <strong>YELLOW</strong></span>
              </div>
            </div>
            <div class="check-engine-hook">
              <h3>Right now, economic conditions are either working for your business or against it.</h3>
              <p class="lead mt-3">Most owners are pushing harder without knowing whether the environment supports the move. The Profit Engine Scorecard reads 35 macro indicators — NFIB, FRED, ISM, NY Fed — and outputs a single signal: <strong>Green. Yellow. Red.</strong></p>
              <p class="mt-3" style="color:var(--color-text-muted);">Yellow or red is not a reason to stop. It is a reason to call. We help you navigate the conditions working against you and identify exactly where leverage still exists.</p>
            </div>
            <div class="check-engine-cards grid-3 mt-5" style="gap:2rem;">
              <div class="card card-white p-5">
                <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1rem;"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg></div>
                <h4 class="mb-3">Real-Time Conditions</h4>
                <p>35 macro indicators updated each quarter — economic pressure, market conditions, operational signals — not last year's data.</p>
              </div>
              <div class="card card-white p-5">
                <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1rem;"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></div>
                <h4 class="mb-3">One Signal. No Guessing.</h4>
                <p>Green, yellow, or red. Each indicator tells you whether that dimension of your business environment is clear, cautionary, or working against you.</p>
              </div>
              <div class="card card-white p-5">
                <div class="card-icon" style="color:var(--color-gold-dark); margin-bottom:1rem;"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
                <h4 class="mb-3">Know the Right Next Move</h4>
                <p>Yellow or red is not a stop sign — it is a signal. It tells you where to focus so effort produces leverage instead of friction.</p>
              </div>
            </div>
          </div>
          <div class="btn-center mt-5">
            <a href="https://smb-engine-light-ab7bf77b.viktor.space" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">Check My Engine Light &rarr;</a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <span class="eyebrow" style="color:var(--color-gold);">What's on the Other Side</span>
          <h2 style="color:#fff; max-width:780px; margin:0 auto 1.5rem;">More output. Same team. A business that runs without you being the bottleneck.</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width:720px; margin:0 auto 2.5rem;">
            That's the outcome. A custom AI system built into how your team works — generating the capacity you need to grow, without adding the payroll you can't afford. You know your numbers. Your people run the system. You focus on the decisions only you can make.
          </p>
          <p style="color:rgba(255,255,255,0.65); max-width:620px; margin:0 auto 2.5rem; font-size:1rem;">
            It starts with one call. 30 minutes to find the leverage point.
          </p>
          <div class="hero-actions" style="justify-content:center; margin-top:2.5rem;">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            <a href="/who-its-for" class="btn btn-ghost-light btn-lg">See If You're a Fit</a>
          </div>
        </div>
      </section>

    </div>,
    {
      title: 'AI Leverage for Owner-Led Service Firms — SMB Strategy Consultants',
      description: 'We build custom AI systems that plug into the tools your team already uses — so you do more with the people you have, grow faster, and hit your financial goals without adding headcount.'
    }
  )
})

export default home
