import { Hono } from 'hono'

const about = new Hono()

about.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <div class="breadcrumb">
            <a href="/">Home</a><span class="breadcrumb-sep">/</span><span>About</span>
          </div>
          <span class="eyebrow">About SMB Strategy Consultants</span>
          <h1>We help ambitious business owners win in an AI-transformed world.</h1>
          <p class="lead">Practical. Financial. Forward-thinking. We are not theorists — we are strategists who recognize patterns, install systems, and stay in the engagement until the work is done.</p>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">The Firm</span>
              <h2>Built on the belief that most small business problems are not mysteries.</h2>
              <div class="gold-line"></div>
              <p>They are patterns. Patterns in cash flow, hiring, marketing, and operations that — once recognized — can be untangled and rebuilt with purpose. SMB Strategy Consultants exists to bring clarity to the chaos that many service-based business owners face when growth becomes messy.</p>
              <p>The approach blends financial discipline with operational insight and real-world execution to help owners move from reactive to strategic. From owner-dependent to system-driven. From surviving the month to building a business worth owning — and eventually worth selling.</p>
              <p>Balance is the goal. Systems are the answer.</p>
            </div>
            <div>
              <div class="highlight-box mb-3">
                <span class="eyebrow">Vision</span>
                <p style="font-size:1.05rem; color:var(--color-white); font-style:italic; margin:0;">"A world where small business owners do not have to choose between a thriving company and a fulfilling life."</p>
              </div>
              <div class="highlight-box">
                <span class="eyebrow">Mission</span>
                <p style="font-size:1.05rem; color:var(--color-white); font-style:italic; margin:0;">"To install the systems, leadership capacity, and financial clarity that move businesses from founder-led chaos to professionally managed, profitable, and exit-ready."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section class="section bg-surface">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Core Values</span>
            <h2>How we operate. How we advise. How we stay honest.</h2>
          </div>
          <div class="grid-3">
            <div class="card card-accent">
              <div class="card-number">01</div>
              <h4 class="mb-2">Decision-First, Not Tool-First</h4>
              <p style="font-size:0.88rem;">We diagnose before we prescribe. No framework gets applied before we understand the specific constraint. The right tool depends on the right diagnosis.</p>
            </div>
            <div class="card card-accent">
              <div class="card-number">02</div>
              <h4 class="mb-2">Simple Over Complex</h4>
              <p style="font-size:0.88rem;">Maximum three workflows per engagement phase. If a system is too complex to be adopted, it is not a system — it is a liability. We build for the team that has to run it.</p>
            </div>
            <div class="card card-accent">
              <div class="card-number">03</div>
              <h4 class="mb-2">Safe AI, Not Autonomous AI</h4>
              <p style="font-size:0.88rem;">Human judgment at every critical node. We never automate decisions that require human accountability. We automate the work that does not require it.</p>
            </div>
            <div class="card card-accent">
              <div class="card-number">04</div>
              <h4 class="mb-2">Adoption Beats Installation</h4>
              <p style="font-size:0.88rem;">A system that is installed but not adopted is worth nothing. We measure success by scoreboards and behavior change — not by deliverables on a scope of work.</p>
            </div>
            <div class="card card-accent">
              <div class="card-number">05</div>
              <h4 class="mb-2">Owner Capacity Matters</h4>
              <p style="font-size:0.88rem;">Developing the owner as a leader — not just a better operator — is part of every engagement. We work on the business and the leader simultaneously.</p>
            </div>
            <div class="card card-accent">
              <div class="card-number">06</div>
              <h4 class="mb-2">Accountability Over Advice</h4>
              <p style="font-size:0.88rem;">We do not hand you a report and disappear. We stay in the engagement with a weekly cadence, a scoreboard, and the willingness to say the hard thing when the numbers demand it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corbin Cook */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">The Founder</span>
              <h2>Corbin Cook — Builder of practical growth systems for business owners.</h2>
              <div class="gold-line"></div>
              <p>Corbin Cook helps small business owners find clarity in the middle of complexity. As the founder of SMB Strategy Consultants, he brings together some of the most practical, proven tools in business strategy to create real traction for service-based businesses ready to grow.</p>
              <p>At the core of Corbin's work is a pattern: most business problems are not random — they are repeated, predictable, and solvable. His strength lies in recognizing these patterns quickly and building clear, financial-first strategies that align people, marketing, and money to move the business forward.</p>
              <p>Whether an owner is stuck at a revenue plateau, drowning in operations, or struggling with cash flow, Corbin helps cut through the noise and focus on what actually works. The mission behind it all: equip business owners with systems that create margin, scale with intention, and give them back the freedom they set out to find.</p>
            </div>
            <div>
              <div class="cred-bar" style="flex-wrap:wrap; gap:0.75rem; margin-bottom:2rem;">
                <span class="cred-badge">CEPA — Certified Exit Planning Advisor</span>
                <span class="cred-badge">ASBC — Accredited Small Business Consultant</span>
                <span class="cred-badge">Capitaliz Accredited Advisor</span>
                <span class="cred-badge">Value Builder Certified</span>
                <span class="cred-badge">Fathom Certified Advisor</span>
                <span class="cred-badge">EPI Member</span>
              </div>
              <div class="highlight-box">
                <p style="font-size:0.95rem; font-style:italic; color:var(--color-text); margin:0;">"Quality data cuts through hope, qualifies intuition, and drives improvement month over month. Be one of the 30% who achieve the business and lifestyle they set out to build."</p>
                <p style="font-size:0.8rem; color:var(--color-gold); margin-top:0.75rem; font-weight:600;">— Corbin Cook</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section class="section bg-surface">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">What We Do</span>
            <h2>One company. Six capabilities. One client outcome.</h2>
            <p>Our coaching, financial advisory, managed execution, and AI enablement capabilities all operate as one integrated team — deployed in sequence based on where you are in your growth journey.</p>
          </div>
          <div class="grid-3">
            <div class="card card-accent">
              <h4 class="mb-2">Growth Coaching</h4>
              <p style="font-size:0.88rem;">The Growth Acceleration System, Two-Engine Model, My Profit Life community, and principle-centered leadership curriculum — the philosophy and programming engine of our work.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Financial Advisory</h4>
              <p style="font-size:0.88rem;">Bookkeeping, Virtual CFO, exit planning, and value-building — the financial backbone that ensures every strategy is grounded in decision-grade numbers.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Strategy Intensives</h4>
              <p style="font-size:0.88rem;">Targeted 2–4 session engagements that resolve one high-impact constraint and deliver a 90-day roadmap for execution.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Exit Planning</h4>
              <p style="font-size:0.88rem;">CEPA-certified. Capitaliz 21-Step Sell-Ready Process. For owners building toward an exit in 1–5 years — or simply building a more valuable business.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Managed Execution</h4>
              <p style="font-size:0.88rem;">Our delivery team handles implementation — delegation design, SOP infrastructure, and remote execution support — so strategy does not stall at the execution stage.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">AI Enablement</h4>
              <p style="font-size:0.88rem;">Safe, practical AI integration — bounded workflows, human oversight, and governance built in. Our team provides the judgment layer that keeps AI-assisted operations reliable and accountable.</p>
            </div>
          </div>
          <div class="text-center mt-4">
            <p style="font-size:0.88rem; color:var(--color-text-muted);">Serving businesses in Atlanta, Marietta, Roswell, Sandy Springs, Smyrna — and nationally.</p>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section class="section bg-dark">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">How We Deliver</span>
            <h2>One team. Multiple disciplines. All under one roof.</h2>
            <p>SMB Strategy Consultants operates across three functional areas — all staffed and managed internally as part of the same engagement model. Clients work with one team from strategy through execution.</p>
          </div>
          <div class="grid-3">
            <div class="highlight-box">
              <h4 class="mb-2">Coaching &amp; Systems</h4>
              <p style="font-size:0.88rem;">Growth strategy, The Growth Acceleration System, the Two-Engine Model, principle-centered leadership development, and the My Profit Life program. This is where the thinking and architecture live.</p>
            </div>
            <div class="highlight-box">
              <h4 class="mb-2">Financial &amp; Advisory</h4>
              <p style="font-size:0.88rem;">Bookkeeping, Virtual CFO services, exit planning, and financial reporting — including Fathom-powered dashboards and Value Builder System integration. Numbers that speak into every decision.</p>
            </div>
            <div class="highlight-box">
              <h4 class="mb-2">Execution &amp; Delivery</h4>
              <p style="font-size:0.88rem;">Marketing execution, remote implementation support, AI workflow deployment, and ongoing operational support. Where strategy becomes action — with qualified team members managing the work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-band">
        <div class="container">
          <span class="eyebrow" style="display:block; text-align:center; margin-bottom:1rem;">Ready to talk about your business?</span>
          <h2>Call Corbin and his team. Start with the Growth Diagnostic.</h2>
          <p class="lead">One conversation to identify the constraint and map the next move.</p>
          <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Book the Growth Diagnostic</a>
            <a href="/contact" class="btn btn-outline btn-lg">Contact Us</a>
          </div>
        </div>
      </section>
    </div>,
    { title: 'About — SMB Strategy Consultants', activeNav: 'about' }
  )
})

export default about
