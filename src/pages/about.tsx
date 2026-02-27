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
              <p>The approach blends financial discipline with operational insight and real-world marketing execution to help owners move from reactive to strategic. From owner-dependent to system-driven. From surviving the month to building a business worth owning — and eventually worth selling.</p>
            </div>
            <div>
              <div class="highlight-box mb-3">
                <span class="eyebrow">Vision</span>
                <p style="font-size:1.05rem; color:var(--color-white); font-style:italic; margin:0;">"We help ambitious business owners win in an AI-transformed world."</p>
              </div>
              <div class="highlight-box">
                <span class="eyebrow">Mission</span>
                <p style="font-size:1.05rem; color:var(--color-white); font-style:italic; margin:0;">"We deliver decision clarity, system installation, and safe AI integration so business owners can scale profitably without burning out."</p>
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
              <p style="font-size:0.88rem;">A system that is installed but not adopted is worth nothing. We measure success by scorecards and behavior change — not by deliverables on a scope of work.</p>
            </div>
            <div class="card card-accent">
              <div class="card-number">05</div>
              <h4 class="mb-2">Owner Capacity Matters</h4>
              <p style="font-size:0.88rem;">Developing the owner as a leader — not just a better operator — is part of every engagement. We work on the P and the PC simultaneously: the production and the capacity to produce.</p>
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
              <p>Whether an owner is stuck at a revenue plateau, drowning in operations, or struggling with cash flow, Corbin helps cut through the noise and focus on what actually works. The mission behind it all is simple: equip business owners with systems that create margin, scale with intention, and give them back the freedom they started out to find.</p>
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

      {/* The SMB Ecosystem */}
      <section class="section bg-surface">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">The SMB Ecosystem</span>
            <h2>Strategy without execution is a whiteboard conversation.</h2>
            <p>The SMB ecosystem includes three sister companies that provide the implementation capacity to execute what we strategize.</p>
          </div>
          <div class="grid-3">
            <div class="card card-accent">
              <h4 class="mb-2">Disruptive Marketing</h4>
              <p style="font-size:0.88rem;">The marketing execution arm. When the Growth Intensive identifies the strategy, Disruptive Marketing builds and runs the engine — campaigns, content, and demand generation.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Virtual Staffing</h4>
              <p style="font-size:0.88rem;">Philippine-based virtual staffing for roles designed in the Capacity Intensive. Skilled, cost-effective, and managed inside the accountability structure we install.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">SMB Business Coaching</h4>
              <p style="font-size:0.88rem;">The AI-powered coaching program. Combines the Growth Acceleration System with hands-on coaching to map out real growth — with My Profit Life as the flagship container.</p>
            </div>
          </div>
          <div class="text-center mt-4">
            <p style="font-size:0.88rem; color:var(--color-text-muted);">Serving businesses in Atlanta, Marietta, Roswell, Sandy Springs, Smyrna — and nationally.</p>
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
