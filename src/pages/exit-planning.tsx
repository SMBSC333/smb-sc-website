import { Hono } from 'hono'

const exitPlanning = new Hono()

exitPlanning.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <div class="breadcrumb">
            <a href="/">Home</a><span class="breadcrumb-sep">/</span><span>Exit Planning</span>
          </div>
          <span class="eyebrow">Plan Intelligently. Extract Confidently. Exit on Your Terms.</span>
          <h1>8 out of 10 businesses do not sell for what the owner hopes.</h1>
          <p class="lead">Our 21-Step Sell-Ready Process methodically drives your business to the top 20% of its industry — and in the AI era, that includes building the AI-ready operations that buyers increasingly factor into their valuation.</p>
          <a href="/growth-diagnostic" class="btn btn-primary mt-4">Start the Conversation</a>
        </div>
      </section>

      {/* The Problem */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">The Reality</span>
              <h2>Most owners have the majority of their wealth tied up in their business.</h2>
              <div class="gold-line"></div>
              <p>And most have no formal plan to extract it. The result is lost value, higher taxes, and missed opportunities — not because the business was not good, but because it was never made ready to sell.</p>
              <p style="color:var(--color-text-muted); font-style:italic; font-size:0.95rem;">"It is just plain wrong that so many business owners' life and business plans fail to materialize or take years longer than they should. When in reality, they run into the same challenges time and time again." — Corbin Cook, ASBC, CEPA</p>
            </div>
            <div>
              <div class="card card-accent mb-3">
                <div class="stat-number" style="font-size:2rem;">69%</div>
                <p style="font-size:0.85rem; margin:0;">of business owners say exit strategy is a priority</p>
              </div>
              <div class="card card-accent mb-3">
                <div class="stat-number" style="font-size:2rem;">53%</div>
                <p style="font-size:0.85rem; margin:0;">do not have a written, formal transition plan</p>
              </div>
              <div class="card card-accent">
                <div class="stat-number" style="font-size:2rem;">78%</div>
                <p style="font-size:0.85rem; margin:0;">still need to develop a transition team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section class="section bg-surface">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">The 21-Step Sell-Ready Process</span>
            <h2>The gold standard in exit planning — recognized by the Exit Planning Institute.</h2>
            <p>Over 12–24 months, we work alongside you and your key advisors to drive high-value improvements while building a legacy that lasts. The process is powered by Capitaliz — the platform built specifically for this framework.</p>
          </div>
          <div class="grid-3">
            <div class="card card-accent">
              <div class="card-number">01</div>
              <h4 class="mb-2">Know Your Value</h4>
              <p style="font-size:0.85rem;">We start with a clear, objective assessment of what your business is worth today — and what it needs to be worth at exit. The Value Builder Score gives you a baseline and a gap to close.</p>
            </div>
            <div class="card card-accent">
              <div class="card-number">02</div>
              <h4 class="mb-2">Build an Attractive Business</h4>
              <p style="font-size:0.85rem;">Systematically improve across the 8 key value drivers buyers care about — including the new ninth driver: AI-ready operations. Each improvement directly increases what buyers will pay.</p>
            </div>
            <div class="card card-accent">
              <div class="card-number">03</div>
              <h4 class="mb-2">Exit Like a Boss</h4>
              <p style="font-size:0.85rem;">When the time is right, you have the team, the documentation, the financials, and the story a buyer needs to feel confident paying a premium. You walk away on your terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI as a Value Driver */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <div>
              <span class="eyebrow">New in 2026 — The AI Advantage</span>
              <h2>AI-ready operations are becoming the ninth value driver.</h2>
              <div class="gold-line"></div>
              <p>The traditional 8 value drivers of the Value Builder System are the foundation. But buyers in 2026 and beyond are increasingly evaluating a new variable: whether the business has built AI into its operations in a way that protects and expands margins.</p>
              <p>A business that demonstrates AI-integrated delivery, reduced owner dependency, and documented AI workflows commands a stronger valuation story — and differentiates itself from the 80% of businesses that do not sell for what the owner hoped.</p>
              <p>This is a competitive angle no other CEPA in your market is offering yet. We are.</p>
            </div>
            <div class="highlight-box">
              <h4 class="mb-3">The 8 Value Builder Drivers (plus the emerging ninth)</h4>
              <ul class="intensive-includes">
                <li>Financial performance — clean, reliable, and growing</li>
                <li>Growth potential — a clear, defensible path forward</li>
                <li>Switzerland structure — no dangerous concentrations</li>
                <li>Valuation teeter-totter — recurring vs. one-time revenue</li>
                <li>Hierarchy of recurring revenue — predictable income</li>
                <li>Monopoly of control — brand and IP protection</li>
                <li>Customer satisfaction — retention and loyalty metrics</li>
                <li>Hub and spoke — independence from the owner</li>
                <li style="color:var(--color-gold);"><strong>AI-ready operations — documented, adopted, margin-positive (emerging)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Tools */}
      <section class="section bg-surface">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Assessment Tools</span>
            <h2>Three tools to understand where you stand today.</h2>
          </div>
          <div class="grid-3">
            <div class="card card-accent">
              <h4 class="mb-2">Value Builder Score</h4>
              <p style="font-size:0.85rem;">A data-driven assessment measuring your company's performance across the 8 key drivers buyers evaluate. Identifies your strengths and closes your gaps — whether you are selling soon or building long-term.</p>
              <a href="/value-builder-score-questionnaire" class="btn btn-ghost btn-sm mt-3">Take the Assessment</a>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Freedom Score</h4>
              <p style="font-size:0.85rem;">A 10-minute online assessment that calculates your Freedom Point — the moment when the sale of your business can fund your ideal post-exit lifestyle. Gives you clarity on what the exit needs to deliver.</p>
              <a href="/growth-diagnostic" class="btn btn-ghost btn-sm mt-3">Discuss in the Diagnostic</a>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">PREScore</h4>
              <p style="font-size:0.85rem;">A short tool assessing your personal readiness for exit based on four key drivers: vision for life after the sale, flexibility in deal structure, emotional detachment from the business, and team independence.</p>
              <a href="/pre-score-questionnaire" class="btn btn-ghost btn-sm mt-3">Take the Assessment</a>
            </div>
          </div>
        </div>
      </section>

      {/* CEPA and Team */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">Your Exit Planning Team</span>
              <h2>Corbin Cook, CEPA — and Steve Ike.</h2>
              <div class="gold-line"></div>
              <p>Our exit planning practice is led by Corbin Cook, a Certified Exit Planning Advisor (CEPA) and accredited Capitaliz advisor, and Steve Ike. Together, they bring the financial, operational, and strategic perspective needed to build a business that commands a premium when the time comes.</p>
              <p>Whether you are planning to exit in 1 year or 10, the work of building a more valuable business starts now. The 21-step process runs in parallel with everything you are already doing — and every improvement in the business makes both the day-to-day and the eventual exit better.</p>
            </div>
            <div>
              <div class="cred-bar" style="flex-wrap:wrap; gap:1rem; margin-bottom:2rem;">
                <span class="cred-badge">CEPA</span>
                <span class="cred-badge">Capitaliz Accredited</span>
                <span class="cred-badge">AASBC</span>
                <span class="cred-badge">Value Builder Certified</span>
                <span class="cred-badge">Fathom Certified</span>
                <span class="cred-badge">EPI Member</span>
              </div>
              <div class="highlight-box">
                <h4 class="mb-2">Exit Planning Services Available In</h4>
                <p style="font-size:0.88rem;">Atlanta, Marietta, Roswell, Sandy Springs, Smyrna — and nationwide for qualified engagements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-band">
        <div class="container">
          <span class="eyebrow" style="display:block; text-align:center; margin-bottom:1rem;">Your business is likely your largest financial asset.</span>
          <h2>Preparing it for exit is not optional. It is essential.</h2>
          <p class="lead">Start the conversation with the Growth Diagnostic. Whether exit is 2 years or 10 years away, the work of building a more valuable business starts today.</p>
          <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Start the Conversation</a>
        </div>
      </section>
    </div>,
    { title: 'Exit Planning — Exit on Your Terms', activeNav: 'exit' }
  )
})

export default exitPlanning
