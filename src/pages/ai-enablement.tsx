import { Hono } from 'hono'

const aiEnablement = new Hono()

aiEnablement.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <div class="breadcrumb">
            <a href="/">Home</a><span class="breadcrumb-sep">/</span><span>AI Enablement</span>
          </div>
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
              <div style="background:var(--color-bg-card); border:1px solid var(--color-bg-border); border-radius:var(--radius-lg); padding:2rem;">
                <p class="text-muted mb-3" style="font-size:0.75rem; letter-spacing:0.1em; text-transform:uppercase; font-weight:600;">The AIOS Economic Advantage</p>
                <p style="font-size:0.82rem; color:var(--color-text-muted); margin-bottom:1.5rem; font-style:italic;">AI compresses the cost of everything — your margin depends on how fast you adopt</p>
                <div style="position:relative; height:180px; border-left:1px solid var(--color-bg-border); border-bottom:1px solid var(--color-bg-border); margin-bottom:0.5rem;">
                  <div style="position:absolute; top:8%; left:0; right:0; height:30%; background:linear-gradient(90deg, rgba(201,168,76,0.35) 0%, rgba(201,168,76,0.12) 100%); border-radius:0 8px 0 0;"></div>
                  <div style="position:absolute; top:20%; left:0; right:0; height:40%; background:linear-gradient(90deg, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.28) 60%, rgba(201,168,76,0.08) 100%); clip-path: polygon(0 0, 100% 30%, 100% 80%, 0 50%);"></div>
                  <div style="position:absolute; top:48%; left:0; right:0; height:2px; background:linear-gradient(90deg, rgba(201,168,76,0.6), rgba(201,168,76,0.15)); border-top: 1px dashed rgba(201,168,76,0.5);"></div>
                  <div style="position:absolute; top:6%; left:8px; font-size:0.65rem; color:var(--color-text-muted);">Market Price</div>
                  <div style="position:absolute; top:42%; left:35%; font-size:0.8rem; color:var(--color-gold); font-weight:600;">Your Margin</div>
                  <div style="position:absolute; top:55%; left:8px; font-size:0.65rem; color:var(--color-text-muted);">Cost with AI</div>
                  <div style="position:absolute; bottom:-20px; left:0; font-size:0.62rem; color:var(--color-text-muted);">Now</div>
                  <div style="position:absolute; bottom:-20px; left:43%; font-size:0.62rem; color:var(--color-text-muted);">12 Months</div>
                  <div style="position:absolute; bottom:-20px; right:0; font-size:0.62rem; color:var(--color-text-muted);">24 Months</div>
                </div>
                <p style="font-size:0.72rem; text-align:center; color:var(--color-text-muted); margin-top:1.5rem; letter-spacing:0.06em; text-transform:uppercase;">Time Progression</p>
                <div style="background:rgba(201,168,76,0.07); border:1px solid rgba(201,168,76,0.15); border-radius:4px; padding:0.75rem 1rem; margin-top:1.25rem;">
                  <p style="font-size:0.8rem; color:var(--color-text); margin:0;"><strong style="color:var(--color-gold);">Key insight:</strong> Get in now — high prices, rapidly falling costs. The margin window is open today.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Safe AI Looks Like */}
      <section class="section bg-dark">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Safe AI Integration</span>
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
    { title: 'AI Enablement — Safe AI Integration for SMBs', activeNav: 'ai' }
  )
})

export default aiEnablement
