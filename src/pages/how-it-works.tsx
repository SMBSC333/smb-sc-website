import { Hono } from 'hono'

const howItWorks = new Hono()

howItWorks.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <span class="eyebrow">The Model</span>
          <h1>We diagnose the constraint. We install the system. We stay in the room while it works.</h1>
          <p class="lead">A structured, three-phase process built for service-based businesses ready to move from founder-led chaos to scalable, systems-driven growth.</p>
        </div>
      </section>

      {/* Three Phases */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">The Three Phases</span>
            <h2>Not advice. Installation.</h2>
            <p>Most consultants hand you a report and leave. We stay in the engagement until the system is running. Here is how that process works.</p>
          </div>
          <div class="grid-2" style="align-items:center; gap:4rem; margin-top:3rem;">
            <div class="steps">
              <div class="step">
                <div class="step-num">1</div>
                <div class="step-content">
                  <h4>Assess and Clarify</h4>
                  <p>The Growth Diagnostic is the starting point for every engagement. We review your financials, your team structure, your pipeline, and your operations. We identify your top growth constraint and score your AI readiness. You leave with a written 30–90 day focus plan and a clear recommendation for which engagement path fits your stage.</p>
                </div>
              </div>
              <div class="step">
                <div class="step-num">2</div>
                <div class="step-content">
                  <h4>Build and Install</h4>
                  <p>We build the specific system that removes the identified constraint. This happens through one or more Strategy Intensives — focused, 2–4 session engagements targeting one high-impact problem area at a time. Each intensive ends with a 90-day roadmap, a root cause analysis report, and a one-page strategy map you can execute.</p>
                </div>
              </div>
              <div class="step">
                <div class="step-num">3</div>
                <div class="step-content">
                  <h4>Activate and Scale</h4>
                  <p>We activate the team around the installed system, integrate AI where it creates measurable leverage, and build the operating rhythm that holds it all together. This is where the business begins running with the owner in it strategically — not operationally at every node.</p>
                </div>
              </div>
            </div>
            <div class="hiw-img-wrap">
              <picture>
                <source srcset="/static/images/hiw-strategy-session.webp" type="image/webp" />
                <img src="/static/images/hiw-strategy-session.jpg" alt="Consultant and business owner working through a strategy plan together" class="hiw-img" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* AI Sits Inside Everything */}
      <section class="section bg-surface">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <div>
              <span class="eyebrow">Where AI Fits</span>
              <h2>AI is not a separate product. It is integrated into every engagement.</h2>
              <div class="gold-line"></div>
              <p>We do not sell AI training or tool subscriptions. AI is woven into the delivery of every system we install — reducing delivery cost, speeding up decisions, and creating leverage inside your existing operations.</p>
              <p>Every engagement includes an AI readiness evaluation and, where appropriate, the installation of 1–3 bounded AI workflows with human guardrails built in. Safe. Practical. Measurable.</p>
            </div>
            <div class="highlight-box">
              <h4 class="mb-3">Practical AI applications we install</h4>
              <ul class="intensive-includes">
                <li>Automated follow-up sequences that escalate to a human at the right moment</li>
                <li>Quote and proposal workflows that reduce turnaround from days to hours</li>
                <li>Scheduling and task routing that removes the owner from low-leverage coordination</li>
                <li>Financial reporting summaries that flag anomalies before the monthly meeting</li>
                <li>Lead qualification and intake workflows that filter before human time is spent</li>
                <li>Operating dashboards that surface the right numbers at the right cadence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Engagement Paths */}
      <section class="section bg-dark" id="engagement-paths">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Engagement Paths</span>
            <h2>Four ways to work together. One starting point.</h2>
            <p>Every engagement begins with the Growth Diagnostic. From there, the right path depends on your constraint, your timeline, and your stage of growth.</p>
          </div>
          <div class="grid-2">
            <div class="path-card">
              <span class="intensive-tag">Weeks 2–6</span>
              <h3 class="mb-2">Strategy Intensive</h3>
              <p style="font-size:0.9rem;">One problem. 2–4 focused sessions. You leave with a 90-day roadmap built around your specific constraint — whether that is financial clarity, growth systems, team capacity, or AI integration.</p>
              <p style="font-size:0.85rem; color:var(--color-text-muted); margin-top:0.75rem;">Best for owners who have identified a specific ceiling and need to move through it quickly.</p>
              <a href="/strategy-intensives" class="btn btn-ghost btn-sm mt-3">View the Four Intensives</a>
            </div>
            <div class="path-card featured" id="growth-acceleration-sprint">
              <span class="path-badge">Most Requested</span>
              <span class="intensive-tag">90 Days</span>
              <h3 class="mb-2">Growth Acceleration Sprint</h3>
              <p style="font-size:0.9rem;">The 90-Day Growth Acceleration Sprint, powered by our Growth Acceleration System. We stabilize the core and ignite growth through a full system build across your top two constraints. AI integration is included. Implementation support is available through our team.</p>
              <p style="font-size:0.85rem; color:var(--color-text-muted); margin-top:0.75rem;">Best for $1M–$5M businesses ready to install real systems and see movement within a quarter.</p>
              <a href="/growth-diagnostic" class="btn btn-primary btn-sm mt-3">Book the Diagnostic to Start</a>
            </div>
            <div class="path-card">
              <span class="intensive-tag">Ongoing</span>
              <h3 class="mb-2">Strategic Financial Partner</h3>
              <p style="font-size:0.9rem;">A high-trust leadership seat. Corbin joins your executive cadence as your strategic financial mind — not as a reporter, but as a voice in every key decision. Monthly or biweekly meetings, real-time support, quarterly intensives.</p>
              <p style="font-size:0.85rem; color:var(--color-text-muted); margin-top:0.75rem;">Best for $1M–$10M businesses transitioning from founder-led to professionally managed. Limited availability.</p>
              <a href="/virtual-cfo" class="btn btn-ghost btn-sm mt-3">Learn About the CFO Partnership</a>
            </div>
            <div class="path-card">
              <span class="intensive-tag">12–24 Months</span>
              <h3 class="mb-2">Exit Planning</h3>
              <p style="font-size:0.9rem;">Exit on your terms. The Capitaliz 21-Step Sell-Ready Process methodically builds your business toward the top 20% of its industry — with AI-ready operations now part of the value story buyers evaluate.</p>
              <p style="font-size:0.85rem; color:var(--color-text-muted); margin-top:0.75rem;">Best for owners planning a transition within 1–5 years who want to maximize sale value.</p>
              <a href="/exit-planning" class="btn btn-ghost btn-sm mt-3">Learn About Exit Planning</a>
            </div>
          </div>
        </div>
      </section>

      {/* The Growth Acceleration System */}
      <section class="section bg-warm">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <div class="hiw-img-wrap">
              <picture>
                <source srcset="/static/images/hiw-owner-clarity.webp" type="image/webp" />
                <img src="/static/images/hiw-owner-clarity.jpg" alt="Business owner confidently reviewing metrics and growth data" class="hiw-img" loading="lazy" />
              </picture>
            </div>
            <div>
              <span class="eyebrow">The Flagship Engagement</span>
              <h2>My Profit Life is the complete transformation container.</h2>
              <div class="gold-line"></div>
              <p>For owners who are done with incremental progress. My Profit Life is a structured engagement that addresses all four growth pillars simultaneously — with Corbin directly involved in every phase and the full Growth Acceleration System installed as the operating framework.</p>
              <p>It is not a course. It is not coaching in the traditional sense. It is system installation across your entire business with accountability built into every step. The six-month foundation sets the structure; the ongoing community deepens and optimizes it indefinitely.</p>
              <a href="/my-profit-life" class="btn btn-outline mt-3">Learn About My Profit Life</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-band">
        <div class="container">
          <span class="eyebrow" style="display:block; text-align:center; margin-bottom:1rem;">Every path starts here</span>
          <h2>Book the Free Growth Diagnostic.</h2>
          <p class="lead">One conversation. One constraint identified. One clear next move.</p>
          <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Book the Free Growth Diagnostic</a>
        </div>
      </section>
    </div>,
    { title: 'How It Works', activeNav: 'how' }
  )
})

export default howItWorks
