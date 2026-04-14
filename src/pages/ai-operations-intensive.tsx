import { Hono } from 'hono'

const intensive = new Hono()

intensive.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO ── */}
      <section class="hero hero-photo section-lg">
        <picture class="hero-bg-picture" aria-hidden="true">
          <img src="/static/images/intensive-ai-operations.png" alt="AI Operations" class="hero-bg-img" fetchpriority="high" />
        </picture>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="container hero-content">
          <span class="eyebrow" style="color:var(--color-gold-light);">The AI Implementation Partner — Path 04</span>
          <h1 style="color:#fff;">AI-Enabled Operations</h1>
          <p class="lead" style="color:rgba(255,255,255,0.9);">
            Beyond the hype—practical installation. We map your team's constraints and install custom AI agents to reclaim 40%+ of your operational capacity.
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
              <span class="eyebrow">The Opportunity</span>
              <h2>Your team is doing work that shouldn't belong to humans.</h2>
              <div class="gold-line"></div>
              <p class="lead">
                The biggest drain on service-based businesses is "administrative friction"—the manual data entry, the repetitive email follow-ups, and the basic research that eats up your highest-paid talent's time.
              </p>
              <p class="body-v2">
                The AI-Enabled Operations Intensive isn't about teaching your team to "use ChatGPT." It's about building and installing autonomous agents that live in your workflows and handle the heavy lifting while your team focuses on high-level decision making.
              </p>
            </div>
            <div class="card card-accent" style="padding: 2.5rem; background: var(--color-navy); color: #fff;">
              <h4 style="color: var(--color-gold-light); margin-bottom: 1.5rem;">Symptom Check</h4>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color: rgba(255,255,255,0.85);">Your team feels "overwhelmed" despite having the right head count.</li>
                <li style="color: rgba(255,255,255,0.85);">You have data in multiple places that never talks to each other.</li>
                <li style="color: rgba(255,255,255,0.85);">Content creation, client reporting, or invoicing takes days, not minutes.</li>
                <li style="color: rgba(255,255,255,0.85);">You've tried AI tools but they haven't "stuck" in a meaningful way.</li>
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
            <h2>Moving from Tooling to Agents.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3">
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">01</span>
              <h4>Constraint Mapping</h4>
              <p class="text-sm">We process your team's actual workday to find the repetitive, low-variance tasks that are ideal for AI replacement or augmentation.</p>
            </div>
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">02</span>
              <h4>Agent Installation</h4>
              <p class="text-sm">We don't just recommend—we build. We install custom AI agents (built on your existing tech stack) to handle specific back-office or client-facing workflows.</p>
            </div>
            <div class="card card-white">
              <span class="card-number" style="color: var(--color-gold-dark); opacity: 1;">03</span>
              <h4>Team Adoption Sprints</h4>
              <p class="text-sm">Practical training sessions to ensure your team knows how to prompt, supervise, and improve the AI systems we've installed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section class="section">
        <div class="container">
          <div class="intensive-detail-box outcome-box" style="padding: 3rem; border-radius: var(--radius-xl);">
            <span class="eyebrow" style="color: var(--color-gold-light);">The Outcome</span>
            <h2 style="color: #fff; margin-bottom: 2rem;">The AI-Enabled Infrastructure</h2>
            <div class="grid-2">
              <div>
                <h4 style="color: var(--color-gold-light); font-size: 0.75rem; letter-spacing: 0.15em;">Immediate Assets</h4>
                <ul class="intensive-includes">
                  <li><strong>The Efficiency Map:</strong> Visualizing exactly where time was reclaimed.</li>
                  <li><strong>3 Custom AI Agents:</strong> Built and deployed in your primary workspace.</li>
                  <li><strong>AI Usage Governance:</strong> Clear policies for safety and security.</li>
                </ul>
              </div>
              <div>
                <h4 style="color: var(--color-gold-light); font-size: 0.75rem; letter-spacing: 0.15em;">Strategic Impact</h4>
                <ul class="intensive-includes">
                  <li>40%+ increase in per-person operational capacity.</li>
                  <li>Faster response times for clients and internal tasks.</li>
                  <li>Future-proofing the business against AI disruption.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <h2 style="color:#fff;">The future is here. Are you building on it?</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width:800px; margin: 1.5rem auto;">
            Intensives are targeted solutions. We verify if this is your primary constraint during the AI Implementation Strategy Call.
          </p>
          <div style="margin-top: 2.5rem;">
            <a href="/strategy-call" class="btn btn-primary btn-lg">Book Your Strategy Assessment</a>
          </div>
        </div>
      </section>
    </div>,
    { title: 'AI-Enabled Operations Intensive | SMB Strategy Consultants', activeNav: 'intensives' }
  )
})

export default intensive
