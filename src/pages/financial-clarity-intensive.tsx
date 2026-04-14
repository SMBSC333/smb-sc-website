import { Hono } from 'hono'

const intensive = new Hono()

intensive.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO ── */}
      <section class="hero hero-photo section-lg">
        <picture class="hero-bg-picture" aria-hidden="true">
          <img src="/static/images/intensive-financial-clarity.png" alt="Financial Clarity" class="hero-bg-img" fetchpriority="high" />
        </picture>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="container hero-content">
          <span class="eyebrow" style="color:var(--color-gold-light);">The AI Implementation Partner — Path 01</span>
          <h1 style="color:#fff;">Financial Clarity</h1>
          <p class="lead" style="color:rgba(255,255,255,0.9);">
            A surgical diagnostic of your company’s financial health. We identify exactly why profit is leaking and where your unit economics are broken.
          </p>
          <div class="hero-actions" style="margin-top:2rem;">
            <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center;">
            <div>
              <span class="eyebrow">The Constraint</span>
              <h2>Revenue is growing, but margin is shrinking.</h2>
              <div class="gold-line"></div>
              <p class="lead">
                Most $1M+ businesses have a "visibility" problem, not a sales problem. You are making money, but you don't know exactly which products, clients, or workflows are driving profit versus just creating noise.
              </p>
              <p class="body-v2">
                The Financial Clarity Intensive is designed to find the leaks. We move past bookkeeping to strategic analysis—mapping your unit economics so you can scale with confidence.
              </p>
            </div>
            <div class="card card-accent" style="padding: 2.5rem; background: var(--color-navy); color: #fff;">
              <h4 style="color: var(--color-gold-light); margin-bottom: 1.5rem;">Symptom Check</h4>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color: rgba(255,255,255,0.85);">You hit revenue targets but bank balances remain flat.</li>
                <li style="color: rgba(255,255,255,0.85);">You're afraid to increase prices because you don't know your true margins.</li>
                <li style="color: rgba(255,255,255,0.85);">Cash flow feels like a roller coaster despite consistent sales.</li>
                <li style="color: rgba(255,255,255,0.85);">You lack accurate forecasts for the next 6–12 months.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULAR BREAKDOWN ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Installation Phase</span>
            <h2>What we audit and install.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3">
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">01</span>
              <h4>Unit Economics Audit</h4>
              <p class="text-sm">We break down the cost-to-deliver for every service line. You'll see exactly which clients are profitable and which are costing you more than they pay.</p>
            </div>
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">02</span>
              <h4>Cash flow Architecture</h4>
              <p class="text-sm">Mapping your cash conversion cycle. We identify delays in billing, collections, and vendor payments that are strangling your liquidity.</p>
            </div>
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">03</span>
              <h4>The Profit Scorecard</h4>
              <p class="text-sm">Installation of a high-level strategic dashboard. No more messy spreadsheets—just the 3–5 numbers that actually drive your growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section class="section">
        <div class="container">
          <div class="intensive-detail-box outcome-box" style="padding: 3rem; border-radius: var(--radius-xl);">
            <span class="eyebrow" style="color: var(--color-gold-light);">The Outcome</span>
            <h2 style="color: #fff; margin-bottom: 2rem;">The Financial Blueprint</h2>
            <div class="grid-2">
              <div>
                <h4 style="color: var(--color-gold-light); font-size: 0.75rem; letter-spacing: 0.15em;">Immediate Assets</h4>
                <ul class="intensive-includes">
                  <li><strong>Margin Analysis Report:</strong> Know where your profit is leaking.</li>
                  <li><strong>Product Mix Optimizer:</strong> Tool to price future jobs accurately for maximum yield.</li>
                  <li><strong>Liquidity Dashboard:</strong> Steps to stabilize cash flow and build a 6-month reserve.</li>
                </ul>
              </div>
              <div>
                <h4 style="color: var(--color-gold-light); font-size: 0.75rem; letter-spacing: 0.15em;">Strategic Impact</h4>
                <ul class="intensive-includes">
                  <li>Waste is eliminated through data-backed decisions.</li>
                  <li>Confidence to scale without fear of a "growth crunch."</li>
                  <li>A clear path to doubling profitability per project.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <h2 style="color:#fff;">Prescription comes after diagnosis.</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width:800px; margin: 1.5rem auto;">
            Intensives are targeted solutions. We verify if this is your primary constraint during the AI Implementation Strategy Call.
          </p>
          <div style="margin-top: 2.5rem;">
            <a href="/strategy-call" class="btn btn-primary btn-lg">Book Your Strategy Assessment</a>
          </div>
        </div>
      </section>
    </div>,
    { title: 'Financial Clarity Intensive | SMB Strategy Consultants', activeNav: 'intensives' }
  )
})

export default intensive
