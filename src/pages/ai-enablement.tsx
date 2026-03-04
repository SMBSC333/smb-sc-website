import { Hono } from 'hono'

const aiEnablement = new Hono()

aiEnablement.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <span class="eyebrow">The AI Moment — Act Now</span>
          <h1>AI is compressing the cost of everything. Your margin depends on how fast you adopt.</h1>
          <p class="lead">We help service-based businesses install 1–3 practical AI workflows inside their existing tools — with human guardrails, no chaos, and measurable results within 90 days.</p>
          <div class="hero-actions">
            <a href="/ai-assessment" class="btn btn-primary btn-lg">Book the Free AI Readiness Assessment</a>
            <a href="/growth-diagnostic" class="btn btn-ghost btn-lg">Book the Growth Diagnostic</a>
          </div>
        </div>
      </section>

      {/* The Plain Language Argument */}
      <section class="section aios-section">
        <div class="container">
          <div class="aios-inner">
            <div>
              <span class="eyebrow">The Economic Reality</span>
              <h2>This window is open right now. It will not stay open.</h2>
              <div class="gold-line"></div>
              <p>Right now, market prices for professional services are still high. AI is rapidly compressing the cost to deliver those same services. The businesses that build AI into their operations today will widen their margin significantly over the next 24 months.</p>
              <p>The ones that wait will find their margin disappearing from both directions — prices falling as the market normalizes, costs staying high because they never adopted. The gap between early adopters and late adopters will be the story of the next two years in every service industry.</p>
              <p>This is not a prediction. It is already happening in legal, accounting, marketing, and professional services. The question is not whether AI will change your cost structure. It is whether you will be on the right side of that change when it does.</p>
            </div>
            <div>
              <div class="highlight-box">
                <h4 class="mb-3">Three things that shift when AI is properly installed</h4>
                <ul class="intensive-includes">
                  <li>Delivery cost drops — the same output requires fewer hours and less coordination overhead</li>
                  <li>Decision speed increases — owners and team leads stop waiting on information to act</li>
                  <li>Owner capacity opens — low-leverage work routes away from the person with the highest hourly cost</li>
                </ul>
                <div style="background:rgba(201,168,76,0.07); border:1px solid rgba(201,168,76,0.15); border-radius:4px; padding:0.75rem 1rem; margin-top:1.5rem;">
                  <p style="font-size:0.85rem; color:var(--color-text); margin:0;">The businesses that build AI into their operations today will have a measurable margin advantage over those that adopt it later. The window is open now.</p>
                </div>
                <a href="/ai-assessment" class="btn btn-ghost btn-sm mt-4">Book the Free AI Readiness Assessment</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Practical AI Looks Like */}
      <section class="section bg-dark">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Practical AI Integration</span>
            <h2>Not autonomous. Not chaotic. Bounded.</h2>
            <p>We install AI the way a good contractor installs a system — with the right guardrails, tested before it runs, and built for the people who have to use it every day.</p>
          </div>
          <div class="grid-3">
            <div class="card card-accent">
              <h4 class="mb-2">Human in the Loop</h4>
              <p style="font-size:0.88rem;">Every AI workflow we install has a defined handoff point where a human makes the call. We never automate judgment. We automate the work that does not require it.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Inside Your Existing Tools</h4>
              <p style="font-size:0.88rem;">We do not sell new software. We identify where AI can create leverage inside the systems you already pay for and already use. No new platforms, no new logins.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Measured by Results</h4>
              <p style="font-size:0.88rem;">Every workflow installation comes with a 90-day scorecard. If it is not creating measurable improvement in delivery time, cost, or decision speed — we revisit it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section class="section bg-surface">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">What We Actually Install</span>
              <h2>Practical AI applications that move the needle.</h2>
              <div class="gold-line"></div>
              <p>These are not theoretical use cases. These are the workflows we install most frequently — the ones that create measurable margin improvement within the first 90 days.</p>
            </div>
            <div>
              <div class="card card-accent mb-3">
                <h4 class="mb-1">Client Follow-Up and Nurture</h4>
                <p style="font-size:0.85rem;">Automated follow-up sequences that move leads through a defined process and escalate to a human when buying signals appear. Reduces owner time on repetitive outreach by 60–80%.</p>
              </div>
              <div class="card card-accent mb-3">
                <h4 class="mb-1">Quote and Proposal Workflow</h4>
                <p style="font-size:0.85rem;">AI-assisted proposal generation that pulls from a structured template and client intake data. Reduces turnaround from days to hours without reducing quality or personalization.</p>
              </div>
              <div class="card card-accent mb-3">
                <h4 class="mb-1">Scheduling and Task Routing</h4>
                <p style="font-size:0.85rem;">Removes the owner from low-leverage coordination — intake, scheduling, task assignment — so human attention stays on high-value work.</p>
              </div>
              <div class="card card-accent">
                <h4 class="mb-1">Financial Reporting Summary</h4>
                <p style="font-size:0.85rem;">AI reads the month-end data and surfaces anomalies, trends, and flags before the meeting. Decision-makers walk in prepared instead of reactive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Intensive Includes */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">The AI Enablement Intensive</span>
              <h2>What is included in the engagement.</h2>
              <div class="gold-line"></div>
              <ul class="pain-list">
                <li><strong>AI Readiness Assessment</strong> — Scored evaluation of your current operations against AI opportunity areas</li>
                <li><strong>Workflow Mapping Session</strong> — We identify where AI creates leverage vs. where it creates complexity</li>
                <li><strong>1–3 Bounded Workflow Installations</strong> — Built inside your existing tools with guardrails and QA systems</li>
                <li><strong>Team Walkthrough</strong> — Every workflow is explained and tested with the people who will use it</li>
                <li><strong>90-Day AI Adoption Scorecard</strong> — Measurable benchmarks from week one</li>
              </ul>
            </div>
            <div>
              <span class="eyebrow">Who This Is For</span>
              <h3 class="mb-3">Service-based businesses with $1M–$10M in revenue.</h3>
              <p>You have a team. You have existing tools. You want leverage, not disruption. You are not looking for a technology overhaul — you are looking for 2–3 specific places where AI can meaningfully reduce cost or improve speed this quarter.</p>
              <div class="highlight-box mt-3">
                <h4 class="mb-2">What This Is Not</h4>
                <ul class="intensive-includes">
                  <li>Not a ChatGPT training course</li>
                  <li>Not full business automation</li>
                  <li>Not a 6-month technology project</li>
                  <li>Not a pitch for new software platforms</li>
                  <li>Not autonomous AI replacing human judgment</li>
                </ul>
              </div>
              <a href="/ai-assessment" class="btn btn-primary mt-4">Book the Free AI Readiness Assessment</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section class="section-sm bg-surface">
        <div class="container">
          <div class="grid-4">
            <div class="stat-block">
              <div class="stat-number">69%</div>
              <div class="stat-label">of business owners say AI strategy is a priority</div>
            </div>
            <div class="stat-block">
              <div class="stat-number">90</div>
              <div class="stat-label">days to measurable results from our AI installations</div>
            </div>
            <div class="stat-block">
              <div class="stat-number">1–3</div>
              <div class="stat-label">workflows installed per engagement — focused, not overwhelming</div>
            </div>
            <div class="stat-block">
              <div class="stat-number">24mo</div>
              <div class="stat-label">window to capture maximum margin advantage before compression</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-band">
        <div class="container">
          <span class="eyebrow" style="display:block; text-align:center; margin-bottom:1rem;">Start with the Assessment</span>
          <h2>Find out where AI creates margin in your business.</h2>
          <p class="lead">The free AI Readiness Assessment scores your current operations and identifies your highest-leverage AI opportunity. You leave knowing exactly where to start.</p>
          <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <a href="/ai-assessment" class="btn btn-primary btn-lg">Book the Free AI Assessment</a>
            <a href="/growth-diagnostic" class="btn btn-outline btn-lg">Book the Growth Diagnostic</a>
          </div>
        </div>
      </section>
    </div>,
    { title: 'AI Enablement — Practical AI Integration for SMBs', activeNav: 'ai' }
  )
})

export default aiEnablement
