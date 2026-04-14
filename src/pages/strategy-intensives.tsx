import { Hono } from 'hono'

const intensives = new Hono()

intensives.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO — Photo background, dark navy overlay (Standard Home Style) ── */}
      <section class="hero hero-photo section-lg">
        <picture class="hero-bg-picture" aria-hidden="true">
          <img src="/static/images/intensive-hero-main.png" alt="" class="hero-bg-img" fetchpriority="high" decoding="async" />
        </picture>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="container hero-content">
          <span class="eyebrow hero-eyebrow" style="color:var(--color-gold-light);">The AI Implementation Partner</span>
          <h1 style="color:#fff;">When the real constraint is clear, this is how we solve it.</h1>
          <p class="lead" style="color:rgba(255,255,255,0.9);">
            Focused strategic engagements for businesses that need a deeper solution around financial clarity, growth systems, owner dependency, or AI-enabled operations.
          </p>
          <p class="eyebrow" style="color:var(--color-gold-light); letter-spacing: 0.1em; font-size: 0.7rem; margin-top: 1.5rem;">
            Usually recommended after the AI Implementation Strategy Call
          </p>
          <div class="hero-actions" style="margin-top:2.5rem;">
            <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
            <a href="#tracks" class="btn btn-ghost-light btn-lg">Explore Paths</a>
          </div>
        </div>
      </section>

      {/* ── THE METHOD — Intro ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Method</span>
            <h2>A concentrated burst of strategy and installation.</h2>
            <div class="gold-line gold-line-center"></div>
            <p class="lead" style="max-width:800px; margin: 0 auto;">
              Most consulting is too long and too vague. Our Intensives are designed to be completed in 2–4 targeted sessions. We diagnose the friction, build the roadmap, and install the tracking systems so your team can take over.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE PATHS — Diagnostic Hub ── */}
      <section class="section bg-soft" id="tracks">
        <div class="container">
          <div class="grid-2">
            
            {/* PATH 01: FINANCIAL CLARITY */}
            <div id="financial" class="card card-white p-0 overflow-hidden">
               <div class="split-img-container" style="height: 300px; border-radius: 0;">
                <img src="/static/images/intensive-financial-clarity.png" alt="Financial Clarity" />
              </div>
              <div class="p-5">
                <span class="eyebrow">Path 01</span>
                <h3>Financial Clarity</h3>
                <p class="body-v2">A surgical diagnostic of your company’s financial health. We identify exactly why profit is leaking and where your unit economics are broken.</p>
                <ul class="intensive-includes mb-4">
                  <li>Unit Economics Audit</li>
                  <li>Margin & Profitability Health</li>
                  <li>Cash Flow Cycle Optimization</li>
                  <li>Strategic Financial Forecasting</li>
                </ul>
                <a href="/financial-clarity-intensive" class="btn btn-outline btn-sm">Learn More & Explore Outcomes</a>
              </div>
            </div>

            {/* PATH 02: GROWTH SYSTEMS */}
            <div id="growth" class="card card-white p-0 overflow-hidden">
              <div class="split-img-container" style="height: 300px; border-radius: 0;">
                <img src="/static/images/intensive-growth-systems.png" alt="Growth Systems" />
              </div>
              <div class="p-5">
                <span class="eyebrow">Path 02</span>
                <h3>Growth Systems</h3>
                <p class="body-v2">Breaking through revenue plateaus. We rebuild your client acquisition engine and install the pricing power needed to scale sustainably.</p>
                <ul class="intensive-includes mb-4">
                  <li>Scalability Audit</li>
                  <li>Pricing Power Analysis</li>
                  <li>Client Acquisition Engine</li>
                  <li>Market Positioning Refinement</li>
                </ul>
                <a href="/growth-systems-intensive" class="btn btn-outline btn-sm">Learn More & Explore Outcomes</a>
              </div>
            </div>

            {/* PATH 03: OWNER DEPENDENCY */}
            <div id="owner" class="card card-white p-0 overflow-hidden">
              <div class="split-img-container" style="height: 300px; border-radius: 0;">
                <img src="/static/images/intensive-owner-dependency.png" alt="Owner Dependency" />
              </div>
              <div class="p-5">
                <span class="eyebrow">Path 03</span>
                <h3>Owner Dependency</h3>
                <p class="body-v2">Exit your own business, operationally. We remove the founder as the primary bottleneck and install a team-led operating rhythm.</p>
                <ul class="intensive-includes mb-4">
                  <li>Bottleneck Identification</li>
                  <li>Role Architecture Rebuild</li>
                  <li>The Operating Rhythm</li>
                  <li>Outcome-Level Delegation</li>
                </ul>
                <a href="/owner-dependency-intensive" class="btn btn-outline btn-sm">Learn More & Explore Outcomes</a>
              </div>
            </div>

            {/* PATH 04: AI OPERATIONS */}
            <div id="ai" class="card card-white p-0 overflow-hidden">
              <div class="split-img-container" style="height: 300px; border-radius: 0;">
                <img src="/static/images/intensive-ai-operations.png" alt="AI Operations" />
              </div>
              <div class="p-5">
                <span class="eyebrow">Path 04</span>
                <h3>AI-Enabled Operations</h3>
                <p class="body-v2">Beyond the hype—practical installation. We map your team's constraints and install custom AI agents to reclaim 40%+ of your operational capacity.</p>
                <ul class="intensive-includes mb-4">
                  <li>Workflow Constraint Mapping</li>
                  <li>Custom AI Agent Installation</li>
                  <li>Back-Office Automation</li>
                  <li>Team Adoption Systems</li>
                </ul>
                <a href="/ai-operations-intensive" class="btn btn-outline btn-sm">Learn More & Explore Outcomes</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SYMPTOMS — Diagnostic Check ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Symptoms</span>
            <h2>Is an Intensive right for you?</h2>
            <div class="gold-line gold-line-center"></div>
            <p>These symptoms indicate a specific strategic constraint that requires isolation and repair.</p>
          </div>
          <div class="grid-4">
            <div class="card card-accent">
              <h4>The Profit Gap</h4>
              <p class="text-sm">Revenue is growing but your bank account isn't. You can't see where the money is going.</p>
            </div>
            <div class="card card-accent">
              <h4>The Founder Trap</h4>
              <p class="text-sm">You can't take a week off without the wheels coming off. Your team is waiting for you to decide.</p>
            </div>
            <div class="card card-accent">
              <h4>The Stalled Engine</h4>
              <p class="text-sm">You've hit a revenue ceiling and more "hustle" is producing more fatigue, not more growth.</p>
            </div>
            <div class="card card-accent">
              <h4>The Friction Point</h4>
              <p class="text-sm">You have a great team, but ownership is fuzzy, and things are slipping through the cracks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — Diagnostic Closure ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <span class="eyebrow" style="color:var(--color-gold);">Start with Clarity</span>
          <h2 style="color:#fff;">We do not guess. We diagnose.</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width: 800px; margin: 1.5rem auto;">
            We start every engagement with the AI Implementation Strategy Call to identify the real constraint first. You leave with clarity on the right next move.
          </p>
          <div class="hero-actions" style="justify-content:center; margin-top:2.5rem;">
            <a href="/strategy-call" class="btn btn-primary btn-lg">Book Your Strategy Assessment</a>
          </div>
        </div>
      </section>

    </div>,
    { title: 'Strategy Intensives | SMB Strategy Consultants', activeNav: 'intensives' }
  )
})

export default intensives
