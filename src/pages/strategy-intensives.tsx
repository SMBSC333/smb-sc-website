import { Hono } from 'hono'

const intensives = new Hono()

intensives.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <div class="breadcrumb">
            <a href="/">Home</a><span class="breadcrumb-sep">/</span><span>Strategy Intensives</span>
          </div>
          <span class="eyebrow">The Core Offer</span>
          <h1>One problem. One intensive. Measurable movement.</h1>
          <p class="lead">A Strategy Intensive is a 1-on-1 engagement of 2–4 sessions designed to diagnose and resolve one high-impact constraint. You leave with a 90-day roadmap and a clear plan to execute it.</p>
          <div class="hero-actions">
            <a href="/growth-diagnostic" class="btn btn-primary">Book the Free Growth Diagnostic</a>
            <a href="#finance" class="btn btn-ghost">Explore the Four Intensives</a>
          </div>
          <p class="hero-microcopy" style="margin-top:1rem;">Not sure which intensive fits? The Growth Diagnostic tells you exactly where to start.</p>
        </div>
      </section>

      {/* What it is */}
      <section class="section bg-surface">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">The Format</span>
              <h2>Surgical. Focused. Fast.</h2>
              <div class="gold-line"></div>
              <p>This is not a retainer. This is not a 6-month program. A Strategy Intensive is a concentrated engagement — designed for founders in the $1M–$5M range who have identified a specific ceiling and need to move through it quickly.</p>
              <p>We go deep on one problem. We build the system that resolves it. You walk away with a clear 90-day plan and the tools to execute it — whether you implement it yourself or use our partner network to do it with you.</p>
            </div>
            <div>
              <h4 class="mb-3">Every Intensive includes:</h4>
              <ul class="pain-list">
                <li>90-minute strategy sessions (1–3 depending on depth)</li>
                <li>Root cause and opportunity mapping</li>
                <li>Customized strategy audit report</li>
                <li>One-page strategy map aligned to your top goal</li>
                <li>Follow-up summary and next steps plan</li>
              </ul>
              <div class="highlight-box mt-4">
                <h4 class="mb-2">Optional Add-On</h4>
                <p style="font-size:0.88rem;">Implementation Leadership through our partner network. Virtual staffing, marketing, financial operations, payroll, and AI agent deployment available as execution support after the intensive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section class="section-sm bg-dark">
        <div class="container">
          <div class="highlight-box" style="max-width:820px; margin:0 auto;">
            <span class="eyebrow">Who This Is For</span>
            <h3 class="mb-2">Built for growing businesses that have hit a specific ceiling.</h3>
            <div class="grid-2" style="margin-top:1.5rem; gap:1rem;">
              <ul class="intensive-includes">
                <li>Led by founders who need to become leader-driven companies</li>
                <li>Feeling the weight of misalignment between departments</li>
                <li>Plenty of opportunity, unclear execution</li>
              </ul>
              <ul class="intensive-includes">
                <li>Preparing for new growth, new markets, or exit readiness</li>
                <li>Team is busy but the needle is not moving</li>
                <li>Cash is coming in but clarity is not</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Intensives */}
      <section class="section bg-dark">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">The Four Intensives</span>
            <h2>Each one targets a specific constraint.</h2>
            <p>Choose the one that matches the primary bottleneck in your business. If you are not sure, the Growth Diagnostic will tell you.</p>
          </div>

          {/* Finance Intensive */}
          <div class="intensive-card mb-4" id="finance">
            <div class="grid-2" style="align-items:start; gap:3rem;">
              <div>
                <span class="intensive-tag">Finance</span>
                <h2 class="mb-2">Finance Intensive</h2>
                <p class="intensive-problem">You do not have clear visibility into cash, profit, or what the numbers are telling you. Decisions get made on intuition because the data is not accessible or trustworthy.</p>
                <div class="gold-line"></div>
                <h4 class="mb-2">What We Do</h4>
                <ul class="intensive-includes">
                  <li>P and L review and restructure for decision-making</li>
                  <li>Cash flow architecture and 13-week forecast installation</li>
                  <li>Financial reporting rhythm setup (monthly, quarterly)</li>
                  <li>KPI identification and scoreboard design</li>
                  <li>Budget vs. actual framework</li>
                  <li>AI-assisted anomaly detection and reporting summary</li>
                </ul>
              </div>
              <div>
                <div class="intensive-outcome mb-3">
                  <strong>Outcome:</strong> Decision clarity from your numbers. You know your cash position, your margins, and your trend lines — before your bank statement tells you.
                </div>
                <h4 class="mb-2">Typical Problems We Solve</h4>
                <ul class="intensive-includes">
                  <li>Cash disappears even when revenue is strong</li>
                  <li>No reliable forecast beyond next month</li>
                  <li>Financials are not reviewed until tax season</li>
                  <li>Owner makes pricing decisions without margin data</li>
                  <li>Payroll feels like a gamble every two weeks</li>
                </ul>
                <a href="/growth-diagnostic" class="btn btn-primary mt-4">Start with the Diagnostic</a>
              </div>
            </div>
          </div>

          {/* Growth Intensive */}
          <div class="intensive-card mb-4" id="growth">
            <div class="grid-2" style="align-items:start; gap:3rem;">
              <div>
                <span class="intensive-tag">Growth</span>
                <h2 class="mb-2">Growth Intensive</h2>
                <p class="intensive-problem">Your pipeline is inconsistent, your message is muddy, or your lead-to-close process is leaking value. Revenue exists but it is unpredictable.</p>
                <div class="gold-line"></div>
                <h4 class="mb-2">What We Do</h4>
                <ul class="intensive-includes">
                  <li>Go-to-market strategy review and rebuild</li>
                  <li>Brand message sharpening and positioning clarity</li>
                  <li>Pipeline architecture and stage definition</li>
                  <li>Lead-to-close process mapping and gap analysis</li>
                  <li>Conversion point identification and optimization</li>
                  <li>AI-assisted follow-up and nurture workflow design</li>
                </ul>
              </div>
              <div>
                <div class="intensive-outcome mb-3">
                  <strong>Outcome:</strong> Qualified demand and a system that moves leads. Your message attracts better-fit clients and your pipeline runs through a defined process — not through the owner's memory.
                </div>
                <h4 class="mb-2">Typical Problems We Solve</h4>
                <ul class="intensive-includes">
                  <li>Most clients come from referrals with no consistent mechanism</li>
                  <li>Positioning is unclear — you sound like everyone else</li>
                  <li>Proposals go out and then disappear into silence</li>
                  <li>Marketing spend exists but ROI is not tracked</li>
                  <li>Sales depend entirely on the founder showing up</li>
                </ul>
                <a href="/growth-diagnostic" class="btn btn-primary mt-4">Start with the Diagnostic</a>
              </div>
            </div>
          </div>

          {/* Capacity Intensive */}
          <div class="intensive-card mb-4" id="capacity">
            <div class="grid-2" style="align-items:start; gap:3rem;">
              <div>
                <span class="intensive-tag">Capacity</span>
                <h2 class="mb-2">Capacity Intensive</h2>
                <p class="intensive-problem">You are the bottleneck. Every decision runs through you. The team is capable but the systems do not exist to let them operate without you at every node.</p>
                <div class="gold-line"></div>
                <h4 class="mb-2">What We Do</h4>
                <ul class="intensive-includes">
                  <li>Accountability chart and organizational design</li>
                  <li>Task and workflow audit and optimization</li>
                  <li>Delegation map — what to keep, what to assign, what to automate</li>
                  <li>Virtual staffing integration and role design</li>
                  <li>Operating cadence and meeting rhythm installation</li>
                  <li>Leadership capacity development framework</li>
                </ul>
              </div>
              <div>
                <div class="intensive-outcome mb-3">
                  <strong>Outcome:</strong> A team that runs without you at every decision point. The owner moves from operator to strategist — with systems and people doing the work.
                </div>
                <h4 class="mb-2">Typical Problems We Solve</h4>
                <ul class="intensive-includes">
                  <li>Owner works 60+ hours and cannot step away without things slipping</li>
                  <li>No clear accountability for who owns what</li>
                  <li>Team members ask for decisions the owner should not be making</li>
                  <li>Hiring has happened but leverage has not increased</li>
                  <li>Owner knows what needs to happen but cannot get the team to execute it</li>
                </ul>
                <a href="/growth-diagnostic" class="btn btn-primary mt-4">Start with the Diagnostic</a>
              </div>
            </div>
          </div>

          {/* AI Enablement Intensive */}
          <div class="intensive-card" id="ai">
            <div class="grid-2" style="align-items:start; gap:3rem;">
              <div>
                <span class="intensive-tag">AI Enablement</span>
                <h2 class="mb-2">AI Enablement Intensive</h2>
                <p class="intensive-problem">You know AI should be part of your operation but every direction feels risky, overwhelming, or disconnected from how your business actually works.</p>
                <div class="gold-line"></div>
                <h4 class="mb-2">What We Do</h4>
                <ul class="intensive-includes">
                  <li>AI readiness assessment scored against your current operations</li>
                  <li>Workflow mapping — where AI creates leverage vs. where it creates chaos</li>
                  <li>Installation of 1–3 bounded AI workflows inside existing tools</li>
                  <li>Guardrail and QA system setup for every workflow</li>
                  <li>Pilot implementation and team walkthrough</li>
                  <li>90-day AI adoption scorecard</li>
                </ul>
              </div>
              <div>
                <div class="intensive-outcome mb-3">
                  <strong>Outcome:</strong> Safe, practical AI running inside your business. Not autonomous. Not chaotic. Bounded workflows with human judgment at every critical node — measurable within 90 days.
                </div>
                <h4 class="mb-2">Typical Problems We Solve</h4>
                <ul class="intensive-includes">
                  <li>Owners have tried AI tools but nothing stuck or scaled</li>
                  <li>No framework for deciding where AI is appropriate</li>
                  <li>Team is resistant because AI feels threatening</li>
                  <li>Delivery time is a competitive disadvantage</li>
                  <li>The cost to deliver is too high relative to what the market will pay</li>
                </ul>
                <a href="/ai-enablement" class="btn btn-primary mt-4">Learn More About AI Enablement</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section class="cta-band">
        <div class="container">
          <span class="eyebrow" style="display:block; text-align:center; margin-bottom:1rem;">Start with the Diagnostic</span>
          <h2>Not sure which intensive fits?</h2>
          <p class="lead">The Growth Diagnostic identifies your primary constraint and tells you exactly where to start. Free. Live. One conversation.</p>
          <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Book the Free Growth Diagnostic</a>
        </div>
      </section>
    </div>,
    { title: 'Strategy Intensives', activeNav: 'intensives' }
  )
})

export default intensives
