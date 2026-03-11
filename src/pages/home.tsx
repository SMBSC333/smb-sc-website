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
          <span class="eyebrow hero-eyebrow">Atlanta, GA — Serving SMBs Nationwide</span>
          <h1>If revenue is up but everything still feels hard, you have hit a growth ceiling.</h1>
          <p class="lead">In one free Growth Diagnostic, we identify the constraint creating bottlenecks, slowing decisions, and limiting momentum — and give you the next best move.</p>
          <div class="hero-actions">
            <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Book the Free Growth Diagnostic</a>
            <a href="/growth-constraint-quiz" class="btn btn-ghost-light btn-lg">Find My Growth Constraint</a>
          </div>
          <p class="hero-microcopy">Free. Live. Practical. You leave with a clear next step.</p>
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
            <span class="trust-bar-sub">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              Serving SMBs Since 2015
            </span>
          </div>
        </div>
      </div>

      {/* ── FOUR PILLARS STRIP ── */}
      <div class="pillars-strip">
        <div class="container" style="margin-bottom:1rem;">
          <p class="text-center" style="font-size:0.82rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--color-text-muted); font-weight:600;">Growth gets simpler when the right systems are in place</p>
        </div>
        <div class="container" style="padding:0;">
          <div class="pillars-grid">
            <a href="/strategy-intensives#finance" class="pillar-item" style="text-decoration:none;">
              <div class="pillar-number">01</div>
              <h4>Financial Foundations</h4>
              <p>Cash clarity and profit visibility</p>
            </a>
            <a href="/strategy-intensives#growth" class="pillar-item" style="text-decoration:none;">
              <div class="pillar-number">02</div>
              <h4>Brand and Strategy</h4>
              <p>Positioning and pipeline systems</p>
            </a>
            <a href="/strategy-intensives#capacity" class="pillar-item" style="text-decoration:none;">
              <div class="pillar-number">03</div>
              <h4>Growth Acceleration</h4>
              <p>Lead flow and conversion engines</p>
            </a>
            <a href="/strategy-intensives#ai" class="pillar-item" style="text-decoration:none;">
              <div class="pillar-number">04</div>
              <h4>Capacity</h4>
              <p>Leadership, team, and AI process</p>
            </a>
          </div>
        </div>
        <div class="container" style="margin-top:1rem;">
          <p class="text-center" style="font-size:0.85rem; color:var(--color-text-muted);">Most businesses do not need more ideas. They need alignment across these four areas.</p>
        </div>
      </div>

      {/* ── PAIN SECTION — split: text left, frustrated owner photo right ── */}
      <div class="split-section">
        <div class="split-content bg-soft" style="padding:4.5rem 4rem;">
          <span class="eyebrow">Sound Familiar?</span>
          <h2>If any of this describes your business right now, you are not alone.</h2>
          <div class="gold-line"></div>
          <p>Most service-based businesses in the $1M–$10M range hit the same walls. The problems are predictable. So are the solutions.</p>
          <ul class="pain-list" style="margin-top:1.5rem;">
            <li>The business grew but the backend did not keep up with it.</li>
            <li>You are the bottleneck — every decision runs through you.</li>
            <li>The team is busy but the needle is not moving.</li>
            <li>Cash flow is unpredictable even when revenue looks good.</li>
            <li>You know AI matters but do not know where to start.</li>
            <li>You are closer to burnout than your revenue would suggest.</li>
          </ul>
          <a href="/growth-diagnostic" class="btn btn-outline mt-3">Book the Free Growth Diagnostic</a>
        </div>
        <div class="split-img">
          <picture>
            <source type="image/webp" srcset="/static/images/section-overwhelmed-owner.webp" />
            <img src="/static/images/section-overwhelmed-owner.jpg" alt="Business owner reviewing financials, overwhelmed at desk" loading="lazy" />
          </picture>
        </div>
      </div>

      {/* ── THE DIAGNOSTIC — split: Corbin photo left, content right ── */}
      <div class="split-section split-capped">
        <div class="split-img">
          <picture>
            <source type="image/webp" srcset="/static/images/corbin-headshot-new.webp" />
            <img src="/static/images/corbin-headshot-new.jpg" alt="Corbin Smith, SMB Strategy Consultants founder" loading="eager" style="object-position:center 15%;" />
          </picture>
        </div>
        <div class="split-content bg-navy">
          <span class="eyebrow">The Growth Diagnostic</span>
          <h2 style="color:#fff;">Not a pitch call. A working session.</h2>
          <div class="gold-line"></div>
          <p style="color:rgba(255,255,255,0.82);">It is a guided 60-minute session to identify the one constraint holding the most growth hostage. We look at your financials, team structure, pipeline, and operations — and tell you exactly what to fix first.</p>
          <p style="color:rgba(255,255,255,0.82);">You leave with a 30–90 day focus plan and a clear next action. No obligations.</p>
          <ul class="intensive-includes" style="margin-top:1.5rem;">
            <li style="color:rgba(255,255,255,0.88);">Identify your top growth constraint</li>
            <li style="color:rgba(255,255,255,0.88);">Pinpoint the number-one operational bottleneck</li>
            <li style="color:rgba(255,255,255,0.88);">Map a 30–90 day priority plan</li>
            <li style="color:rgba(255,255,255,0.88);">Understand which engagement path fits your stage</li>
          </ul>
          <a href="/growth-diagnostic" class="btn btn-primary mt-4">Book the Free Growth Diagnostic</a>
        </div>
      </div>

      {/* ── THE PROCESS — light background ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:5rem;">
            <div>
              <span class="eyebrow">The Process</span>
              <h2>From constraint to clarity in one conversation.</h2>
              <div class="gold-line"></div>
              <div class="steps" style="margin-top:2rem;">
                <div class="step">
                  <div class="step-num">1</div>
                  <div class="step-content">
                    <h4>Assess and Clarify</h4>
                    <p>We diagnose the primary constraint — financial, operational, growth, or capacity — and score your AI readiness.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num">2</div>
                  <div class="step-content">
                    <h4>Build and Install</h4>
                    <p>We build the specific system that removes the constraint. One focused intensive at a time.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num">3</div>
                  <div class="step-content">
                    <h4>Activate and Scale</h4>
                    <p>We activate the team, integrate AI where it creates leverage, and install the operating rhythm that holds it together.</p>
                  </div>
                </div>
              </div>
              <a href="/how-it-works" class="btn btn-outline mt-4">See the Full Process</a>
            </div>
            <div>
              <picture>
                <source type="image/webp" srcset="/static/images/section-strategy-session.webp" />
                <img src="/static/images/section-strategy-session.jpg" alt="Strategy session with consultant and business owner" loading="lazy" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI MOMENT — dark circuit background section ── */}
      <section class="section aios-section">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">The AI Moment</span>
              <h2>The cost to deliver great work is falling fast. Your margin depends on how fast you adopt.</h2>
              <div class="gold-line"></div>
              <p>AI is rapidly compressing the cost to deliver professional services. The businesses that build it into their operations today will widen their margin. The ones that wait will find themselves squeezed from both sides — prices falling as the market normalizes, costs staying high because nothing changed internally.</p>
              <p>We are not talking about autonomous AI or replacing your team. We are talking about 1–3 bounded workflows — inside the tools you already use — that reduce delivery cost, speed up decisions, and free the owner from low-leverage work.</p>
              <a href="/ai-enablement" class="btn btn-outline-gold mt-3">Learn About AI Enablement</a>
            </div>
            <div>
              <div class="highlight-box-dark">
                <h4 class="mb-3" style="color:#fff;">What practical AI integration looks like in practice</h4>
                <ul class="intensive-includes">
                  <li style="color:rgba(255,255,255,0.88);">Automated follow-up sequences that escalate to a human at the right moment</li>
                  <li style="color:rgba(255,255,255,0.88);">Quote and proposal workflows that reduce turnaround from days to hours</li>
                  <li style="color:rgba(255,255,255,0.88);">Scheduling and task routing that removes the owner from low-leverage coordination</li>
                  <li style="color:rgba(255,255,255,0.88);">Financial reporting summaries that flag anomalies before the monthly meeting</li>
                  <li style="color:rgba(255,255,255,0.88);">Lead qualification workflows that filter before human time is spent</li>
                </ul>
                <a href="/ai-assessment" class="btn btn-outline-gold btn-sm mt-4">Book the Free AI Readiness Assessment</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE BREAK — dashboard / outcome visual ── */}
      <div class="img-break">
        <picture>
          <source type="image/webp" srcset="/static/images/section-dashboard.webp" />
          <img src="/static/images/section-dashboard.jpg" alt="Financial dashboard showing business growth metrics" loading="lazy" />
        </picture>
        <div class="img-break-overlay"></div>
      </div>

      {/* ── FOUR PILLARS — light warm background ── */}
      <section class="section bg-warm">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">The Four Pillars</span>
            <h2>Every constraint lives in one of four places.</h2>
            <div class="gold-line gold-line-center"></div>
            <p>We identify which one is holding your business back — then we build the system to fix it.</p>
          </div>
          <div class="grid-2" style="gap:1.5rem; margin-top:1rem;">
            <div class="card card-accent">
              <h4 class="mb-2">01 &nbsp;Financial Foundations</h4>
              <p style="font-size:0.9rem;">Unclear cash flow creates decision paralysis. We install the reporting and forecasting that lets you run the business calmly — knowing your numbers before your bank statement does.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">02 &nbsp;Brand and Strategy</h4>
              <p style="font-size:0.9rem;">Outdated positioning repels the right clients. We sharpen your message and rebuild your demand engine so you attract better-fit clients at higher margins.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">03 &nbsp;Growth Acceleration</h4>
              <p style="font-size:0.9rem;">Inconsistent follow-through kills pipeline value. We tighten the system so qualified leads move through a defined process — not through the owner's memory.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">04 &nbsp;Capacity</h4>
              <p style="font-size:0.9rem;">Owner dependency caps the ceiling. We install delegation frameworks, team structure, and AI-assisted workflows so the business runs without you at every decision point.</p>
            </div>
          </div>
          <div class="text-center mt-4">
            <a href="/strategy-intensives" class="btn btn-navy">Explore the Strategy Intensives</a>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT PATHS — white background ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Engagement Paths</span>
            <h2>Four ways to work together.</h2>
            <div class="gold-line gold-line-center"></div>
            <p>After the diagnostic, you enter the path that matches your constraint and your stage.</p>
          </div>
          <div class="grid-2" style="gap:1.5rem; margin-top:1rem;">
            <div class="path-card">
              <span class="intensive-tag">Focused</span>
              <h3 class="mb-2">Strategy Intensive</h3>
              <p style="font-size:0.9rem; color:var(--color-text-muted);">One problem. One intensive. Massive impact. 2–4 sessions targeting your single highest-leverage constraint. You leave with a 90-day roadmap and a clear plan to execute it.</p>
              <a href="/strategy-intensives" class="btn btn-outline btn-sm mt-3">View the Intensives</a>
            </div>
            <div class="path-card featured">
              <span class="path-badge">Most Popular</span>
              <span class="intensive-tag">90 Days</span>
              <h3 class="mb-2">Growth Acceleration Sprint</h3>
              <p style="font-size:0.9rem; color:var(--color-text-muted);">The 90-Day Growth Acceleration Sprint. Stabilize and ignite. A full system build across your top two constraints — with implementation support and AI integration built in.</p>
              <a href="/how-it-works#growth-acceleration-sprint" class="btn btn-primary btn-sm mt-3">Learn About the Sprint</a>
            </div>
            <div class="path-card">
              <span class="intensive-tag">Ongoing</span>
              <h3 class="mb-2">Strategic Financial Partner</h3>
              <p style="font-size:0.9rem; color:var(--color-text-muted);">A leadership seat at your table. Not a reporting function — a strategic financial mind involved in every key decision. Monthly cadence. Real-time support. Limited availability.</p>
              <a href="/virtual-cfo" class="btn btn-outline btn-sm mt-3">Learn More</a>
            </div>
            <div class="path-card">
              <span class="intensive-tag">12–24 Months</span>
              <h3 class="mb-2">Exit Planning</h3>
              <p style="font-size:0.9rem; color:var(--color-text-muted);">Exit on your terms. The 21-Step Sell-Ready Process positions your business in the top 20% of its industry — with AI-ready operations as a core part of the value story.</p>
              <a href="/exit-planning" class="btn btn-outline btn-sm mt-3">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — soft warm background ── */}
      <section class="section bg-warm">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">What Clients Say</span>
            <h2>Results from the work.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3">
            <div class="testimonial">
              <p class="testimonial-text">SMB Strategy Consultants has been a great resource for our company for a number of years. Corbin has the ability to keep us at the 10,000 foot level and brings insights and discernment that we need to keep our business growing with a long-range plan. The service he provides is exceptional.</p>
              <p class="testimonial-author">Guy Roberts, Pat Murphy Electric</p>
            </div>
            <div class="testimonial">
              <p class="testimonial-text">Corbin brings a unique perspective to growing your business. Not only is he able to quickly understand the nuances of your particular business, but he has been invaluable in introducing me to key people to help me transform and grow.</p>
              <p class="testimonial-author">Steve Thompson</p>
            </div>
            <div class="testimonial">
              <p class="testimonial-text">Corbin and the SMB team jumped in during a very tough period for our company. The onboarding process was seamless and the team quickly took control of the situation. What I thought would be a short-term engagement turned into a successful two-year partnership.</p>
              <p class="testimonial-author">Gerrie van Niekerk</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTIC CTA — desk photo background ── */}
      <section class="section diagnostic-cta-section">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <div>
              <span class="eyebrow">Ready for Clarity?</span>
              <h2>Find your growth constraint.</h2>
              <div class="gold-line"></div>
              <p>In one free, live Growth Diagnostic we identify the single constraint that is limiting your revenue, draining your time, and slowing your momentum — then hand you the exact next move to break through it. You leave with a clear 30–90 day plan and the confidence to execute it.</p>
              <a href="/growth-diagnostic" class="btn btn-primary mt-2">Book the Free Growth Diagnostic</a>
            </div>
            <div class="highlight-box">
              <h4 class="mb-3">What you walk away with</h4>
              <ul class="intensive-includes">
                <li>Your single highest-leverage growth constraint identified</li>
                <li>A 30–90 day priority action plan built around your business</li>
                <li>Clarity on which engagement path fits your current stage</li>
                <li>An honest read on where AI can reduce cost and increase margin</li>
                <li>A clear next step — no ambiguity, no obligations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT CORBIN — split: speaking photo + bio ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <picture>
              <source type="image/webp" srcset="/static/images/corbin-speaking.webp" />
              <img src="/static/images/corbin-speaking.jpg" alt="Corbin Smith speaking at a business event" loading="lazy" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" />
            </picture>
            <div>
              <span class="eyebrow">Who We Are</span>
              <h2>Operators who have been in the seat you are in.</h2>
              <div class="gold-line"></div>
              <p>SMB Strategy Consultants was built for business owners who have outgrown the advice they can get from a bookkeeper or a business coach but are not yet ready to hire a full C-suite. We bring the strategic horsepower of a CFO and a growth advisor — without the overhead.</p>
              <p>We work with service-based businesses in the $500K–$10M range who are serious about building something that runs well and sells for a premium.</p>
              <a href="/about" class="btn btn-outline mt-3">Meet the Team</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND — navy ── */}
      <section class="cta-band">
        <div class="container">
          <span class="eyebrow" style="display:block; text-align:center; margin-bottom:1rem;">Ready for a clear next step?</span>
          <h2>Book the Free Growth Diagnostic.</h2>
          <p class="lead">One conversation. One constraint identified. One clear next move.</p>
          <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Book the Free Growth Diagnostic</a>
          <p style="font-size:0.8rem; color:rgba(255,255,255,0.5); margin-top:1rem; display:block;">Free. Live. Practical. You leave with a clear next step.</p>
        </div>
      </section>

    </div>,
    { title: 'AI-Enabled Business Growth for SMBs' }
  )
})

export default home
