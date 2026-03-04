import { Hono } from 'hono'

const intensives = new Hono()

intensives.get('/', (c) => {
  return c.render(
    <div>

      {/* ── PAGE HERO ── */}
      <section class="page-hero">
        <div class="container">
          <span class="eyebrow">The Core Offer</span>
          <h1>One problem. One intensive. Measurable movement.</h1>
          <p class="lead">A Strategy Intensive is a focused 1-on-1 engagement — 2 to 4 sessions designed to diagnose one high-impact constraint and build the system to resolve it. You leave with a 90-day roadmap and a clear plan to execute.</p>
          <div class="hero-actions" style="margin-top:2rem;">
            <a href="/growth-diagnostic" class="btn btn-primary">Book the Free Growth Diagnostic</a>
            <a href="#finance" class="btn btn-ghost-light">Explore the Four Intensives</a>
          </div>
          <p class="hero-microcopy" style="margin-top:1rem;">Not sure which intensive fits? The Growth Diagnostic tells you exactly where to start.</p>
        </div>
      </section>

      {/* ── STICKY INTENSIVE NAV ── */}
      <nav class="intensive-nav" aria-label="Jump to intensive">
        <div class="intensive-nav-inner">
          <a href="#finance"  class="intensive-nav-link"><span class="intensive-nav-num">01</span>Financial Foundations</a>
          <a href="#growth"   class="intensive-nav-link"><span class="intensive-nav-num">02</span>Brand &amp; Strategy</a>
          <a href="#capacity" class="intensive-nav-link"><span class="intensive-nav-num">03</span>Capacity</a>
          <a href="#ai"       class="intensive-nav-link"><span class="intensive-nav-num">04</span>AI Enablement</a>
        </div>
      </nav>

      {/* ── WHAT IT IS ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <div>
              <span class="eyebrow">The Format</span>
              <h2>Surgical. Focused. Fast.</h2>
              <div class="gold-line"></div>
              <p>This is not a retainer. This is not a six-month program. A Strategy Intensive is a concentrated engagement built for founders in the $1M–$5M range who have identified a specific ceiling and need to move through it quickly.</p>
              <p>We go deep on one problem. We build the system that resolves it. You leave with a clear 90-day plan and the tools to execute it — whether you implement it yourself or use our partner network to do it with you.</p>
            </div>
            <div>
              <h4 style="color:var(--color-navy); margin-bottom:1.25rem;">Every Intensive includes:</h4>
              <ul class="intensive-includes" style="gap:0.85rem;">
                <li>90-minute strategy sessions (2–4 depending on depth)</li>
                <li>Root cause and opportunity mapping</li>
                <li>Customized strategy audit report</li>
                <li>One-page strategy map aligned to your top goal</li>
                <li>Follow-up summary and next steps plan</li>
              </ul>
              <div class="highlight-box" style="margin-top:1.75rem;">
                <h4 class="mb-2">Optional: Implementation Support</h4>
                <p style="font-size:0.88rem; color:var(--color-text-muted);">Every intensive can extend into hands-on implementation through our partner network — virtual staffing, marketing execution, financial operations, and AI workflow deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section class="section-sm bg-navy">
        <div class="container">
          <div style="max-width:860px; margin:0 auto; text-align:center;">
            <span class="eyebrow" style="color:var(--color-gold-light);">Who This Is For</span>
            <h3 style="color:#fff; margin-bottom:1.5rem;">Built for growth-stage businesses that have hit a specific ceiling.</h3>
            <div class="grid-2" style="text-align:left; gap:1.5rem; margin-top:1rem;">
              <ul class="intensive-includes">
                <li style="color:rgba(255,255,255,0.88);">Led by founders ready to become leader-driven companies</li>
                <li style="color:rgba(255,255,255,0.88);">Plenty of opportunity — unclear on which to execute first</li>
                <li style="color:rgba(255,255,255,0.88);">Cash is coming in but clarity is not following</li>
              </ul>
              <ul class="intensive-includes">
                <li style="color:rgba(255,255,255,0.88);">Team is busy but the needle is not moving</li>
                <li style="color:rgba(255,255,255,0.88);">Preparing for new growth, new markets, or exit readiness</li>
                <li style="color:rgba(255,255,255,0.88);">Revenue exists — but it is unpredictable and hard-won</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          INTENSIVE 01 — FINANCIAL FOUNDATIONS
      ════════════════════════════════════════════ */}
      <section class="intensive-section" id="finance">
        <div class="container">

          {/* Header */}
          <div style="display:flex; align-items:center; gap:1rem; margin-bottom:0.5rem;">
            <span class="intensive-tag">01 &nbsp;Financial Foundations</span>
          </div>
          <h2 style="max-width:680px; margin-bottom:0.5rem;">You are running hard — and still not sure if you are winning.</h2>
          <div class="gold-line"></div>

          {/* Main split: hook copy + photo */}
          <div class="grid-2" style="align-items:center; gap:4rem; margin-top:2.5rem;">
            <div>
              <p class="intensive-hook">"Revenue is up. Why does it still feel like we are barely getting by?"</p>
              <p>That quiet anxiety at the end of every month — wondering if payroll will clear, whether the strong quarter was real or just luck — is one of the most common and least talked-about experiences of growing a business. It is not a cash flow problem. It is a visibility problem.</p>
              <p>When the numbers are not structured to tell you the truth, every major decision carries more risk than it should. You hesitate on hiring. You delay investment. You hold back on growth moves that the business is probably ready for — because you cannot be sure.</p>
              <p>The Financial Foundations Intensive builds the reporting and forecasting infrastructure that turns your financials from a rear-view mirror into a forward-looking instrument panel.</p>
              <div class="intensive-outcome-statement">
                <strong>After this intensive:</strong> You know your cash position, your true margins, and your trend lines — before your bank statement does. Decisions stop feeling like guesses.
              </div>
              <a href="/growth-diagnostic" class="btn btn-primary">Start with the Diagnostic</a>
            </div>
            <div class="intensive-photo" style="aspect-ratio:4/3;">
              <picture>
                <source type="image/webp" srcset="/static/images/intensive-finance.webp" />
                <img src="/static/images/intensive-finance.jpg" alt="Business owner reviewing financial reports" loading="lazy" />
              </picture>
            </div>
          </div>

          {/* Detail boxes */}
          <div class="intensive-detail-grid">
            <div class="intensive-detail-box">
              <h4>What We Do</h4>
              <ul class="intensive-includes">
                <li>P&amp;L review and restructure for real decision-making</li>
                <li>Cash flow architecture and 13-week forecast installation</li>
                <li>Financial reporting rhythm — monthly and quarterly cadence</li>
                <li>KPI identification and scorecard design</li>
                <li>Budget vs. actual framework</li>
                <li>AI-assisted anomaly detection and reporting summaries</li>
              </ul>
            </div>
            <div class="intensive-detail-box outcome-box">
              <h4>What This Fixes</h4>
              <ul class="intensive-includes">
                <li>Cash disappears even when revenue looks strong</li>
                <li>No reliable forecast beyond the current month</li>
                <li>Financials are not reviewed until tax season</li>
                <li>Pricing decisions made without real margin data</li>
                <li>Payroll feels like a gamble every two weeks</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      <div class="intensive-divider"></div>

      {/* ════════════════════════════════════════════
          INTENSIVE 02 — BRAND & STRATEGY / GROWTH
      ════════════════════════════════════════════ */}
      <section class="intensive-section" id="growth">
        <div class="container">

          <div style="display:flex; align-items:center; gap:1rem; margin-bottom:0.5rem;">
            <span class="intensive-tag">02 &nbsp;Brand &amp; Strategy</span>
          </div>
          <h2 style="max-width:680px; margin-bottom:0.5rem;">You are doing good work — but the right people are not finding you.</h2>
          <div class="gold-line"></div>

          <div class="grid-2" style="align-items:center; gap:4rem; margin-top:2.5rem;">
            <div class="intensive-photo" style="aspect-ratio:4/3;">
              <picture>
                <source type="image/webp" srcset="/static/images/intensive-growth.webp" />
                <img src="/static/images/intensive-growth.jpg" alt="Business owner thinking strategically, looking out window" loading="lazy" />
              </picture>
            </div>
            <div>
              <p class="intensive-hook">"We get referrals, but I have no idea how to create demand intentionally."</p>
              <p>There is a particular frustration that comes with knowing your work is excellent — and still watching lesser competitors win business you should have. It usually comes down to one thing: clarity. Clarity about who you serve, what you solve, and why you are the only credible choice for that specific client at that specific moment.</p>
              <p>When positioning is vague, every sales conversation starts from scratch. When the pipeline runs entirely on referrals and the owner's relationships, growth is capped by the founder's calendar. Revenue is there — but it is fragile, inconsistent, and exhausting to sustain.</p>
              <p>The Brand &amp; Strategy Intensive sharpens your message, rebuilds your demand system, and installs a pipeline that moves without the owner manually pushing every deal forward.</p>
              <div class="intensive-outcome-statement">
                <strong>After this intensive:</strong> Your message attracts better-fit clients at higher margins. Your pipeline runs through a defined process — not through your personal inbox.
              </div>
              <a href="/growth-diagnostic" class="btn btn-primary">Start with the Diagnostic</a>
            </div>
          </div>

          <div class="intensive-detail-grid">
            <div class="intensive-detail-box">
              <h4>What We Do</h4>
              <ul class="intensive-includes">
                <li>Go-to-market strategy review and rebuild</li>
                <li>Brand message sharpening and positioning clarity</li>
                <li>Pipeline architecture and stage definition</li>
                <li>Lead-to-close process mapping and gap analysis</li>
                <li>Conversion point identification and optimization</li>
                <li>AI-assisted follow-up and nurture workflow design</li>
              </ul>
            </div>
            <div class="intensive-detail-box outcome-box">
              <h4>What This Fixes</h4>
              <ul class="intensive-includes">
                <li>Revenue depends entirely on referrals with no consistent engine</li>
                <li>Your positioning sounds like every other firm in your category</li>
                <li>Proposals go out and then go silent</li>
                <li>Marketing spend exists but ROI is invisible</li>
                <li>Every new client requires the founder to close it personally</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      <div class="intensive-divider"></div>

      {/* ════════════════════════════════════════════
          INTENSIVE 03 — CAPACITY
      ════════════════════════════════════════════ */}
      <section class="intensive-section" id="capacity">
        <div class="container">

          <div style="display:flex; align-items:center; gap:1rem; margin-bottom:0.5rem;">
            <span class="intensive-tag">03 &nbsp;Capacity</span>
          </div>
          <h2 style="max-width:700px; margin-bottom:0.5rem;">You built something worth protecting — now the business needs a structure to match its ambition.</h2>
          <div class="gold-line"></div>

          <div class="grid-2" style="align-items:center; gap:4rem; margin-top:2.5rem;">
            <div>
              <p class="intensive-hook">"I have great people. I just cannot figure out why I still have to be involved in everything."</p>
              <p>This is one of the most disorienting stages of business growth. You hired well. The team genuinely wants to perform. But somewhere between the hiring and the execution, the systems needed to support independent operation were never fully built. So decisions still flow up. Approvals still land in your inbox. The business still runs at the speed of the founder.</p>
              <p>This is not a personnel problem. It is a structural one. The accountability is unclear. The operating rhythm is informal. The handoffs are undocumented. And so, despite having capable people around you, growth is still constrained by how much of yourself you can give to it.</p>
              <p>The Capacity Intensive installs the organizational structure, delegation framework, and operating rhythm that allows your team to run the day-to-day — and frees you to lead at the level the business now requires.</p>
              <div class="intensive-outcome-statement">
                <strong>After this intensive:</strong> Your team operates with clarity and ownership. You move from managing tasks to leading strategy — with time and energy to actually grow.
              </div>
              <a href="/growth-diagnostic" class="btn btn-primary">Start with the Diagnostic</a>
            </div>
            <div class="intensive-photo" style="aspect-ratio:4/3;">
              <picture>
                <source type="image/webp" srcset="/static/images/intensive-capacity.webp" />
                <img src="/static/images/intensive-capacity.jpg" alt="Engaged team collaborating independently in modern office" loading="lazy" />
              </picture>
            </div>
          </div>

          <div class="intensive-detail-grid">
            <div class="intensive-detail-box">
              <h4>What We Do</h4>
              <ul class="intensive-includes">
                <li>Accountability chart and organizational design</li>
                <li>Task and workflow audit — clarity on who owns what</li>
                <li>Delegation map: what to keep, assign, and automate</li>
                <li>Virtual staffing integration and role design</li>
                <li>Operating cadence and meeting rhythm installation</li>
                <li>Leadership capacity framework for the next stage</li>
              </ul>
            </div>
            <div class="intensive-detail-box outcome-box">
              <h4>What This Fixes</h4>
              <ul class="intensive-includes">
                <li>Important things slip whenever the owner steps away</li>
                <li>No one is fully clear on who owns which outcomes</li>
                <li>Growth has added headcount but not leverage</li>
                <li>The team asks for guidance on decisions that should not require you</li>
                <li>You know what needs to happen — getting it executed consistently is the problem</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      <div class="intensive-divider"></div>

      {/* ════════════════════════════════════════════
          INTENSIVE 04 — AI ENABLEMENT
      ════════════════════════════════════════════ */}
      <section class="intensive-section" id="ai">
        <div class="container">

          <div style="display:flex; align-items:center; gap:1rem; margin-bottom:0.5rem;">
            <span class="intensive-tag">04 &nbsp;AI Enablement</span>
          </div>
          <h2 style="max-width:680px; margin-bottom:0.5rem;">Every competitor is moving. The question is whether you move with intent or scramble to catch up.</h2>
          <div class="gold-line"></div>

          <div class="grid-2" style="align-items:center; gap:4rem; margin-top:2.5rem;">
            <div class="intensive-photo" style="aspect-ratio:4/3;">
              <picture>
                <source type="image/webp" srcset="/static/images/intensive-ai.webp" />
                <img src="/static/images/intensive-ai.jpg" alt="Professional reviewing AI workflow on laptop in calm office" loading="lazy" />
              </picture>
            </div>
            <div>
              <p class="intensive-hook">"I know AI matters. I just do not know where to start without creating more chaos."</p>
              <p>The pressure is real. AI is compressing delivery costs, accelerating competitor capabilities, and redefining client expectations — often faster than most owners have time to process. The instinct is to wait until things are clearer. But waiting has its own cost: every quarter of inaction is a quarter your margins stay under pressure and your competitors grow more efficient.</p>
              <p>What makes AI complicated is not the technology. It is knowing where in your specific operation it creates genuine leverage — versus where it creates distraction, risk, or team friction. The wrong workflow in the wrong place can cost more than it saves.</p>
              <p>The AI Enablement Intensive builds your AI strategy from the inside out — assessing your operations, identifying 1 to 3 bounded workflows with clear ROI, and installing them inside the tools your team already uses. No disruption. No experiments. Measurable results within 90 days.</p>
              <div class="intensive-outcome-statement">
                <strong>After this intensive:</strong> AI is running inside your business — bounded, practical, and producing measurable time and cost savings within the first 90 days.
              </div>
              <a href="/ai-enablement" class="btn btn-primary">Learn More About AI Enablement</a>
            </div>
          </div>

          <div class="intensive-detail-grid">
            <div class="intensive-detail-box">
              <h4>What We Do</h4>
              <ul class="intensive-includes">
                <li>AI readiness assessment scored against your current operations</li>
                <li>Workflow mapping — where AI creates leverage vs. where it creates risk</li>
                <li>Installation of 1–3 bounded AI workflows inside existing tools</li>
                <li>Guardrail and quality assurance setup for every workflow</li>
                <li>Pilot implementation and team walkthrough</li>
                <li>90-day AI adoption scorecard</li>
              </ul>
            </div>
            <div class="intensive-detail-box outcome-box">
              <h4>What This Fixes</h4>
              <ul class="intensive-includes">
                <li>AI tools have been tried but nothing has stuck or scaled</li>
                <li>No framework for deciding where AI is actually appropriate</li>
                <li>Team friction because AI feels like a threat, not a tool</li>
                <li>Delivery time is a growing competitive disadvantage</li>
                <li>The cost to deliver is too high relative to what the market pays</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA BAND ── */}
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
