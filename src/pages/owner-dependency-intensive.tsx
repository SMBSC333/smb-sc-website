import { Hono } from 'hono'

const intensive = new Hono()

intensive.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO ── */}
      <section class="hero hero-photo section-lg">
        <picture class="hero-bg-picture" aria-hidden="true">
          <img src="/static/images/intensive-owner-dependency.png" alt="Owner Dependency" class="hero-bg-img" fetchpriority="high" />
        </picture>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="container hero-content">
          <span class="eyebrow" style="color:var(--color-gold-light);">The AI Implementation Partner — Path 03</span>
          <h1 style="color:#fff;">Owner Dependency</h1>
          <p class="lead" style="color:rgba(255,255,255,0.9);">
            Exit your own business, operationally. We remove the founder as the primary bottleneck and install a team-led operating rhythm.
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
              <h2>You don't own a business; you own a high-stress job.</h2>
              <div class="gold-line"></div>
              <p class="lead">
                If you can't take a 30-day vacation without the revenue dropping or the team stalling, you have a dependency problem. The business is built on your personal willpower, not on systems.
              </p>
              <p class="body-v2">
                The Owner Dependency Intensive is about surgical extraction. We identify every decision that funnels through you and install the role architecture and delegation frameworks to move authorship to your leaders.
              </p>
            </div>
            <div class="card card-accent" style="padding: 2.5rem; background: var(--color-navy); color: #fff;">
              <h4 style="color: var(--color-gold-light); margin-bottom: 1.5rem;">Symptom Check</h4>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color: rgba(255,255,255,0.85);">Every "quick question" from the team requires your input.</li>
                <li style="color: rgba(255,255,255,0.85);">You are the primary salesperson or the "firefighter" for all problems.</li>
                <li style="color: rgba(255,255,255,0.85);">Internal projects stall as soon as you stop pushing them.</li>
                <li style="color: rgba(255,255,255,0.85);">Strategic thinking is sidelined because you're stuck in daily operations.</li>
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
            <h2>Transitioning to ownership.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3">
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">01</span>
              <h4>Bottleneck Identification</h4>
              <p class="text-sm">A deep audit of your time and decision-making. We find exactly which tasks can be automated, delegated, or eliminated immediately.</p>
            </div>
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">02</span>
              <h4>Role Architecture</h4>
              <p class="text-sm">We rebuild your org chart based on outcomes, not titles. Every team member becomes responsible for a result, not just a list of tasks.</p>
            </div>
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">03</span>
              <h4>The Operating Rhythm</h4>
              <p class="text-sm">Installation of a meeting and reporting cadence that keeps the business moving forward without your constant manual intervention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section class="section">
        <div class="container">
          <div class="intensive-detail-box outcome-box" style="padding: 3rem; border-radius: var(--radius-xl);">
            <span class="eyebrow" style="color: var(--color-gold-light);">The Outcome</span>
            <h2 style="color: #fff; margin-bottom: 2rem;">The Self-Operating Blueprint</h2>
            <div class="grid-2">
              <div>
                <h4 style="color: var(--color-gold-light); font-size: 0.75rem; letter-spacing: 0.15em;">Immediate Assets</h4>
                <ul class="intensive-includes">
                  <li><strong>The Delegation Matrix:</strong> Clear rules for what you touch vs. what they touch.</li>
                  <li><strong>Outcome-Based Job Scores:</strong> Tracking performance by results, not hours.</li>
                  <li><strong>Strategic Calendar:</strong> Reclaiming 20+ hours of founder time per week.</li>
                </ul>
              </div>
              <div>
                <h4 style="color: var(--color-gold-light); font-size: 0.75rem; letter-spacing: 0.15em;">Strategic Impact</h4>
                <ul class="intensive-includes">
                  <li>Business value increases significantly (exit-readiness).</li>
                  <li>Founders can focus on the "next big thing."</li>
                  <li>Team morale improves through empowered leadership.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <h2 style="color:#fff;">Time to step out of the engine.</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width:800px; margin: 1.5rem auto;">
            Intensives are targeted solutions. We verify if this is your primary constraint during the AI Implementation Strategy Call.
          </p>
          <div style="margin-top: 2.5rem;">
            <a href="/strategy-call" class="btn btn-primary btn-lg">Book Your Strategy Assessment</a>
          </div>
        </div>
      </section>
    </div>,
    { title: 'Owner Dependency Intensive | SMB Strategy Consultants', activeNav: 'intensives' }
  )
})

export default intensive
