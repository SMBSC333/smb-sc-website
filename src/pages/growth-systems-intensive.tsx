import { Hono } from 'hono'

const intensive = new Hono()

intensive.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO ── */}
      <section class="hero hero-photo section-lg">
        <picture class="hero-bg-picture" aria-hidden="true">
          <img src="/static/images/intensive-growth-systems.png" alt="Growth Systems" class="hero-bg-img" fetchpriority="high" />
        </picture>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="container hero-content">
          <span class="eyebrow" style="color:var(--color-gold-light);">The AI Implementation Partner — Path 02</span>
          <h1 style="color:#fff;">Growth Systems</h1>
          <p class="lead" style="color:rgba(255,255,255,0.9);">
            Breaking through revenue plateaus. We rebuild your client acquisition engine and install the pricing power needed to scale sustainably.
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
              <h2>You've hit a ceiling that "more hustle" won't fix.</h2>
              <div class="gold-line"></div>
              <p class="lead">
                Most businesses stall between $1M and $3M because their acquisition engine is inconsistent and their pricing is too low for the scale of operations they need.
              </p>
              <p class="body-v2">
                The Growth Systems Intensive is about surgical refinement of your market positioning. We find the high-leverage services you should be doubling down on and install the scripts and systems to sell them at premium rates.
              </p>
            </div>
            <div class="card card-accent" style="padding: 2.5rem; background: var(--color-navy); color: #fff;">
              <h4 style="color: var(--color-gold-light); margin-bottom: 1.5rem;">Symptom Check</h4>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color: rgba(255,255,255,0.85);">Growth has plateaued despite consistent effort.</li>
                <li style="color: rgba(255,255,255,0.85);">Referrals are your only reliable lead source.</li>
                <li style="color: rgba(255,255,255,0.85);">You're "busy" but not growing in profit or revenue.</li>
                <li style="color: rgba(255,255,255,0.85);">Low-value clients are taking up 80% of your team's capacity.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULAR BREAKDOWN ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Installation</span>
            <h2>Building the growth engine.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3">
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">01</span>
              <h4>Scalability Audit</h4>
              <p class="text-sm">We identify which service lines can scale to 10x current volume without breaking your operations or quality standards.</p>
            </div>
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">02</span>
              <h4>Pricing Power Matrix</h4>
              <p class="text-sm">Refining your offer architecture. We move you from variable cost-based pricing to value-based outcomes that command higher margins.</p>
            </div>
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">03</span>
              <h4>Acquisition Cadence</h4>
              <p class="text-sm">Installation of a predictable lead generation system that doesn't rely on the founder's personal network or daily manual effort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section class="section">
        <div class="container">
          <div class="intensive-detail-box outcome-box" style="padding: 3rem; border-radius: var(--radius-xl);">
            <span class="eyebrow" style="color: var(--color-gold-light);">The Outcome</span>
            <h2 style="color: #fff; margin-bottom: 2rem;">Growth Activation Roadmap</h2>
            <div class="grid-2">
              <div>
                <h4 style="color: var(--color-gold-light); font-size: 0.75rem; letter-spacing: 0.15em;">Immediate Assets</h4>
                <ul class="intensive-includes">
                  <li><strong>The Scalability Audit:</strong> Identifying which parts of your engine break at 2x revenue.</li>
                  <li><strong>Target Acquisition Map:</strong> Your highest-ROI client profiles.</li>
                  <li><strong>Sales Tracking Engine:</strong> Clear metrics for every stage of the funnel.</li>
                </ul>
              </div>
              <div>
                <h4 style="color: var(--color-gold-light); font-size: 0.75rem; letter-spacing: 0.15em;">Strategic Impact</h4>
                <ul class="intensive-includes">
                  <li>Escape from random acts of marketing.</li>
                  <li>A predictable acquisition engine that you control.</li>
                  <li>Improved pricing power and win rates.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <h2 style="color:#fff;">Ready to break the ceiling?</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width:800px; margin: 1.5rem auto;">
            Intensives are targeted solutions. We verify if this is your primary constraint during the AI Implementation Strategy Call.
          </p>
          <div style="margin-top: 2.5rem;">
            <a href="/strategy-call" class="btn btn-primary btn-lg">Book Your Strategy Assessment</a>
          </div>
        </div>
      </section>
    </div>,
    { title: 'Growth Systems Intensive | SMB Strategy Consultants', activeNav: 'intensives' }
  )
})

export default intensive
