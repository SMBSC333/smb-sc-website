import { Hono } from 'hono'

const services = new Hono()

services.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO SECTION ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Our Solutions</span>
            <h1 style="color: #fff;">Diagnosis Before Prescription.</h1>
            <p class="hero-lead">
              We do not sell pre-packaged ideas. We identify the root constraint of your business—whether it's financial leak, owner dependency, or operational friction—and prescribe the specific strategy required to solve it.
            </p>
            <div class="hero-actions" style="margin-top:2.5rem; display: flex; gap: 1rem; align-items: center;">
              <a href="/strategy-call" class="btn btn-primary btn-lg">Book the Strategy Call</a>
              <a href="/strategy-intensives" class="btn btn-ghost-light btn-lg">Explore All Paths</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE INTENSIVES — Prescribed Tracks ── */}
      <section class="section bg-white" id="tracks">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Strategic Tracks</span>
            <h2>The Strategy Intensives</h2>
            <div class="gold-line gold-line-center"></div>
            <p class="lead" style="max-width:800px; margin: 0 auto;">
              These are focused, concentrated strategic bursts designed to install capacity and leverage. They are prescribed only after we have mapped your primary constraints.
            </p>
          </div>

          <div class="grid-2">
            
            {/* PATH 01: FINANCIAL CLARITY */}
            <div class="card card-white p-5 border-light">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Track 01</span>
              <h3>Financial Clarity</h3>
              <p>A surgical diagnostic of your company’s financial health. We identify exactly why profit is leaking and where your unit economics are broken.</p>
              <ul class="intensive-includes mb-4" style="list-style: none; padding: 0;">
                <li>Unit Economics Audit</li>
                <li>Margin & Profitability Health</li>
                <li>Strategic Forecasting</li>
              </ul>
            </div>

            {/* PATH 02: GROWTH SYSTEMS */}
            <div class="card card-white p-5 border-light">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Track 02</span>
              <h3>Growth Systems</h3>
              <p>Breaking through revenue plateaus. We rebuild your client acquisition engine and install the pricing power needed to scale sustainably.</p>
              <ul class="intensive-includes mb-4" style="list-style: none; padding: 0;">
                <li>Scalability Audit</li>
                <li>Pricing Power Analysis</li>
                <li>Positioning Refinement</li>
              </ul>
            </div>

            {/* PATH 03: OWNER DEPENDENCY */}
            <div class="card card-white p-5 border-light">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Track 03</span>
              <h3>Owner Dependency</h3>
              <p>Exit your own business, operationally. We remove the founder as the primary bottleneck and install a team-led operating rhythm.</p>
              <ul class="intensive-includes mb-4" style="list-style: none; padding: 0;">
                <li>Bottleneck Identification</li>
                <li>Role Architecture Rebuild</li>
                <li>Outcome-Level Delegation</li>
              </ul>
            </div>

            {/* PATH 04: AI OPERATIONS */}
            <div class="card card-white p-5 border-light">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Track 04</span>
              <h3>AI-Enabled Operations</h3>
              <p>Beyond the hype—practical installation. We map your team's constraints and install custom AI agents to reclaim 40%+ operational capacity.</p>
              <ul class="intensive-includes mb-4" style="list-style: none; padding: 0;">
                <li>Workflow Constraint Mapping</li>
                <li>Custom AI Agent Installation</li>
                <li>Back-Office Automation</li>
              </ul>
            </div>

          </div>

          <div class="text-center mt-5">
            <a href="/strategy-intensives" class="btn btn-outline btn-lg">View Full Intensive Breakdown</a>
          </div>

          {/* AUTHORITY BAND */}
          <div class="logic-callout mt-5 bg-navy-deep text-white p-5 text-center" style="border-radius: var(--radius-lg); border: 1px solid rgba(201,168,76,0.2);">
            <span class="eyebrow" style="color: var(--color-gold-light); margin-bottom: 0.5rem; display: block;">Authority First</span>
            <h3 style="color: #fff; margin-bottom: 1rem;">Strategic Prerequisite</h3>
            <p class="lead" style="color: rgba(255,255,255,0.9);">We do not accept client engagements without a verified diagnosis.</p>
            <p style="color: rgba(255,255,255,0.7);">Every solution begins with the Implementation Strategy Call to ensure adoption beats installation.</p>
            <div class="mt-4">
              <a href="/strategy-call" class="btn btn-primary btn-lg">Book Your Diagnostic Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ── */}
      <section class="cta-band bg-soft">
        <div class="container">
          <h2>Ready to identify the real blocker?</h2>
          <p class="lead">45 minutes to find the constraint. A lifetime of operational leverage.</p>
          <a href="/strategy-call" class="btn btn-primary btn-lg">Book the Implementation Strategy Call</a>
        </div>
      </section>
    </div>,
    { 
      title: "Our Solutions — SMB Strategy Consultants", 
      description: "We don't force business into one-size-fits-all solutions. We diagnose the constraint first, then prescribe the AI path.",
      activeNav: 'services' 
    }
  )
})

export default services
