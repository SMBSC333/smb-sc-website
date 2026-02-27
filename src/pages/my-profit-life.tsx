import { Hono } from 'hono'

const mpl = new Hono()

mpl.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <div class="breadcrumb">
            <a href="/">Home</a><span class="breadcrumb-sep">/</span><span>My Profit Life</span>
          </div>
          <span class="eyebrow">The Flagship Engagement — Invitation Only</span>
          <h1>Built for owners who are done with incremental.</h1>
          <p class="lead">My Profit Life is the complete business transformation engagement. Six months. Four pillars. One system. Limited availability.</p>
        </div>
      </section>

      {/* What It Is */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">What My Profit Life Is</span>
              <h2>Not a course. Not coaching in the traditional sense.</h2>
              <div class="gold-line"></div>
              <p>My Profit Life is a complete diagnosis and system installation across all four growth pillars — Financial Foundations, Brand and Strategy, Capacity, and AI Enablement — delivered in a structured 6-month container with Corbin Cook directly involved in every phase.</p>
              <p>Most programs give you frameworks. My Profit Life installs the actual systems — in your business, with your team, aligned to your specific goals. By the end of six months, the business operates differently. Not marginally better. Structurally different.</p>
              <p>Because of the hands-on nature of this engagement, a limited number of MPL clients are accepted each year. It is an invitation extended after the Growth Diagnostic when the fit is clear.</p>
            </div>
            <div class="highlight-box">
              <h4 class="mb-3" style="color:var(--color-gold);">My Profit Life — At a Glance</h4>
              <ul class="pain-list">
                <li><strong>Duration:</strong> 6 months, fully structured with defined phases</li>
                <li><strong>Format:</strong> Monthly and biweekly strategy sessions with Corbin</li>
                <li><strong>Coverage:</strong> All four pillars — Finance, Growth, Capacity, AI</li>
                <li><strong>Accountability:</strong> Weekly operating cadence and scoreboard tracking</li>
                <li><strong>Availability:</strong> Limited — by invitation after the Growth Diagnostic</li>
                <li><strong>Partner Access:</strong> Full SMB Implementation Network for execution support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Phases */}
      <section class="section bg-surface">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">The Four Phases</span>
            <h2>Six months. Four phases. One transformed business.</h2>
            <p>Each phase builds on the last. The structure is non-negotiable because the sequence matters — you cannot scale what is not stable, and you cannot exit what is not valuable.</p>
          </div>
          <div style="max-width:820px;">
            <div class="phase-block">
              <div class="phase-label">
                <div class="phase-num">01</div>
                <div class="phase-months">Months 1–2</div>
              </div>
              <div>
                <h3 class="mb-2">Diagnose and Set Standards</h3>
                <p>The Growth Diagnostic goes deep. We review financials, team structure, pipeline, and operations in full. We build the financial baseline — clean books, reliable reporting, and a 13-week cash flow forecast. The team is assessed through Talexes for role fit and capacity. AI readiness is scored across every operational area. By the end of Phase 1, you have a precise picture of where the business stands and where it is going.</p>
                <ul class="intensive-includes mt-3">
                  <li>Deep Growth Diagnostic and constraint mapping</li>
                  <li>Financial baseline — P and L, balance sheet, cash flow, AR/AP</li>
                  <li>Talexes team assessment and capacity mapping</li>
                  <li>AI readiness score across all operations</li>
                  <li>90-day priority roadmap set and committed</li>
                </ul>
              </div>
            </div>
            <div class="phase-block">
              <div class="phase-label">
                <div class="phase-num">02</div>
                <div class="phase-months">Months 2–4</div>
              </div>
              <div>
                <h3 class="mb-2">Install Core Systems</h3>
                <p>This is the build phase. We run Strategy Intensives across the highest-priority constrained pillars identified in Phase 1. Each intensive results in a working system — not a plan to build one. The operating cadence is installed during this phase: weekly meetings, scoreboard structure, decision logs, and communication rhythms that keep the business moving without the owner at every junction.</p>
                <ul class="intensive-includes mt-3">
                  <li>2–4 Strategy Intensives across constrained pillars</li>
                  <li>Accountability chart and team structure finalized</li>
                  <li>Pipeline and lead-to-close system installed</li>
                  <li>Financial reporting rhythm running</li>
                  <li>Operating cadence installed — weekly, monthly, quarterly</li>
                </ul>
              </div>
            </div>
            <div class="phase-block">
              <div class="phase-label">
                <div class="phase-num">03</div>
                <div class="phase-months">Months 3–5</div>
              </div>
              <div>
                <h3 class="mb-2">Adopt and Delegate</h3>
                <p>Systems are only as good as their adoption. This phase focuses on getting the team running the systems without the owner holding their hand. YDBG leadership coaching is integrated to develop the owner's capacity as a leader — not just as the best operator in the room. AI workflows are adopted, tested, and refined based on real usage. Delegation becomes structural, not aspirational.</p>
                <ul class="intensive-includes mt-3">
                  <li>YDBG leadership coaching integration</li>
                  <li>AI workflow adoption and team training</li>
                  <li>Delegation map execution — roles and responsibilities locked</li>
                  <li>Scoreboard reviewed and adjusted based on 60-day performance</li>
                  <li>Owner begins stepping out of operational nodes</li>
                </ul>
              </div>
            </div>
            <div class="phase-block">
              <div class="phase-label">
                <div class="phase-num">04</div>
                <div class="phase-months">Months 5–6</div>
              </div>
              <div>
                <h3 class="mb-2">Scale and Lock In</h3>
                <p>The final phase confirms the trajectory and locks in the systems. The business is reviewed against the Value Builder System's 8 key drivers to assess whether the growth is translating into enterprise value — not just revenue. The 6-month engagement ends with a confirmed path forward: scale, sustain, or prepare for exit. You leave with a documented operating system and a clear next chapter.</p>
                <ul class="intensive-includes mt-3">
                  <li>Profit Acceleration Software full sprint review</li>
                  <li>Value Builder System assessment — 8 key drivers scored</li>
                  <li>Capitaliz Business Insights engagement</li>
                  <li>Growth path or exit path confirmed and mapped</li>
                  <li>Operating system documented and handed to the team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section class="section bg-dark">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">What Is Included</span>
            <h2>Everything needed to transform the business — nothing that is not.</h2>
          </div>
          <div class="grid-3">
            <div class="card card-accent">
              <h4 class="mb-2">All Four Strategy Intensives</h4>
              <p style="font-size:0.88rem;">Finance, Growth, Capacity, and AI Enablement — all four addressed within the 6-month container, sequenced by priority.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Ongoing Strategic Sessions</h4>
              <p style="font-size:0.88rem;">Monthly or biweekly strategy meetings with Corbin. Real-time support via Slack and email between sessions.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Profit Acceleration Software</h4>
              <p style="font-size:0.88rem;">Full PAS sprint access — identify hidden profit and margin leaks, create clear 12–18 month roadmaps.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Value Builder System</h4>
              <p style="font-size:0.88rect;">Capitaliz Business Insights engagement — build the business toward the 8 key drivers that determine what buyers will pay.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">YDBG Leadership Coaching</h4>
              <p style="font-size:0.88rem;">Principle-centered leadership development integrated into the capacity phase. Building the owner as a leader, not just a better operator.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">SMB Implementation Network</h4>
              <p style="font-size:0.88rem;">Access to our partner network — virtual staffing, Disruptive Marketing, financial operations, payroll, and AI agent deployment — for execution support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is a Fit */}
      <section class="section bg-surface">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">Who Is a Fit</span>
              <h2>This is not for every business. It is for the right one.</h2>
              <div class="gold-line"></div>
              <p>My Profit Life is reserved for owner-led businesses between $1M and $10M that are at a real inflection point — where the current model is proving it cannot scale, and the owner is ready to make structural changes rather than incremental improvements.</p>
              <ul class="pain-list mt-3">
                <li>Founder-led business with a real team and real revenue</li>
                <li>Owner is the primary bottleneck — willing to change that</li>
                <li>The backend has not kept pace with front-end growth</li>
                <li>Committed to working on the business, not just in it</li>
                <li>Ready for a 6-month structured engagement with accountability</li>
              </ul>
            </div>
            <div>
              <span class="eyebrow">How to Apply</span>
              <h3 class="mb-3">The path in starts with the Growth Diagnostic.</h3>
              <p>My Profit Life is an invitation extended after the Growth Diagnostic when the fit — your stage, your goals, your readiness — is clear to both of us. It is not sold from a pricing page.</p>
              <p>Book the Growth Diagnostic. If MPL is the right next step, that conversation will make it obvious.</p>
              <a href="/growth-diagnostic" class="btn btn-primary mt-3">Book the Growth Diagnostic</a>
              <p style="font-size:0.8rem; color:var(--color-text-muted); margin-top:0.75rem;">Or contact us directly if you have specific questions about the MPL engagement.</p>
              <a href="/contact" class="btn btn-ghost btn-sm mt-2">Contact Us Directly</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-band">
        <div class="container">
          <span class="eyebrow" style="display:block; text-align:center; margin-bottom:1rem;">Ready to apply?</span>
          <h2>The path in starts with the Growth Diagnostic.</h2>
          <p class="lead">One conversation to confirm the fit. From there, we build the plan together.</p>
          <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Book the Free Growth Diagnostic</a>
        </div>
      </section>
    </div>,
    { title: 'My Profit Life — The Complete Business Transformation', activeNav: 'mpl' }
  )
})

export default mpl
