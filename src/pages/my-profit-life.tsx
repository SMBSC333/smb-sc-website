import { Hono } from 'hono'

const mpl = new Hono()

mpl.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="mpl-hero">
        <div class="mpl-hero-overlay" aria-hidden="true"></div>
        <div class="container mpl-hero-content">
          <span class="eyebrow hero-eyebrow">My Profit Life</span>
          <h1>The Principle-Centered AI Framework that helps you master yourself and multiply your impact.</h1>
          <div class="mpl-hero-rule" aria-hidden="true"></div>
          <p class="mpl-hero-sub">Build the leadership foundation to scale your business with AI—without losing your soul.</p>
          <div class="hero-actions" style="margin-top:2rem;">
            <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Book a Clarity Kickoff Call</a>
            <a href="https://ydbg-pc-score-assessment.lovable.app/" class="btn btn-ghost-light btn-lg" target="_blank" rel="noopener noreferrer">Take the Assessment</a>
          </div>
          <p class="mpl-micro">For $500K–$10M service business owners navigating AI disruption, margin pressure, and owner dependency.</p>
        </div>
      </section>

      {/* ── WHAT THIS IS ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">What This Is</span>
              <h2>Not a course. Not coaching in the traditional sense.</h2>
              <div class="gold-line"></div>
              <p>AI is changing how service businesses deliver, sell, hire, and compete. Competitors are moving. Clients are expecting faster response times. And margins are getting tighter.</p>
              <p>But for most owners, AI has turned into one of two things:</p>
              <ul class="pain-list" style="margin:1rem 0;">
                <li>A chaotic experiment run by whoever is most "techy"</li>
                <li>Another thing the owner has to carry</li>
              </ul>
              <p>If your leadership system is reactive, AI doesn't create leverage—it creates noise.</p>
            </div>
            <div class="highlight-box">
              <h4 class="mb-3" style="color:var(--color-gold);">The Principle-Centered AI Framework — At a Glance</h4>
              <ul class="pain-list">
                <li><strong>Foundation:</strong> Principle-centered leadership method (measurable progress)</li>
                <li><strong>Leverage:</strong> AI integration + brand positioning + go-to-market strategy installed into operations</li>
                <li><strong>Support:</strong> 1:1 coaching + small-group mastermind</li>
                <li><strong>Outcome:</strong> More clarity, more leverage, less owner dependency</li>
              </ul>
              <div style="margin-top:2rem;">
                <picture>
                  <source srcset="/static/images/mpl-principle-leader.webp" type="image/webp" />
                  <img src="/static/images/mpl-principle-leader.jpg" alt="Principle-centered leader working with intention" style="width:100%; border-radius:var(--radius-lg); box-shadow:var(--shadow-md);" loading="lazy" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING THE GAP ── */}
      <section class="section bg-warm">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <div>
              <span class="eyebrow">Why It Works</span>
              <h2>Most AI programs start with tools. Most leadership programs ignore leverage.</h2>
              <div class="gold-line"></div>
              <p><strong>The Principle-Centered AI Framework closes the gap</strong> by building principle-centered leadership and installing AI leverage you can trust—so your business scales with intelligence, without losing standards, culture, or sanity.</p>
            </div>
            <div class="mpl-truth-block" style="margin-top:0;">
              <p><strong>Technology without principle-centered leadership creates chaos, not growth.</strong></p>
              <p>You can't scale with intelligence if you're leading from reaction, not clarity.</p>
              <p style="margin:0;">This engagement builds both—together—so you can lead with principle, install real leverage, and build a business that runs with less reliance on you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES THIS DIFFERENT ── */}
      <section class="section bg-navy-deep-section">
        <div class="container">
          <div class="section-header center" style="margin-bottom:3rem;">
            <span class="eyebrow" style="color:var(--color-gold-light);">Why This Works</span>
            <h2 style="color:#fff;">What Makes This Different</h2>
            <div class="gold-line" style="margin:1.25rem auto 0;"></div>
            <p style="color:rgba(255,255,255,0.75); max-width:600px; margin:1rem auto 0;">This is built for owners who want AI to become part of the operating system—without turning the company into a chaotic experiment.</p>
          </div>
          <div class="grid-3">
            <div class="mpl-diff-card">
              <div class="mpl-diff-icon">01</div>
              <h4>Principle-centered first.</h4>
              <p>Clarity, standards, and leadership rhythm come before tools.</p>
            </div>
            <div class="mpl-diff-card">
              <div class="mpl-diff-icon">02</div>
              <h4>Leverage you can trust.</h4>
              <p>Clear ownership, guardrails, and review—so quality stays intact.</p>
            </div>
            <div class="mpl-diff-card">
              <div class="mpl-diff-icon">03</div>
              <h4>No tool sprawl.</h4>
              <p>Your team uses the same standards and workflows, not scattered experiments.</p>
            </div>
            <div class="mpl-diff-card">
              <div class="mpl-diff-icon">04</div>
              <h4>Installed into real operations.</h4>
              <p>AI goes where work actually happens—not into a separate "AI sandbox."</p>
            </div>
            <div class="mpl-diff-card">
              <div class="mpl-diff-icon">05</div>
              <h4>Measurable adoption.</h4>
              <p>You'll track usage, time reclaimed, and quality improvements.</p>
            </div>
            <div class="mpl-diff-card">
              <div class="mpl-diff-icon">06</div>
              <h4>Built for real service businesses.</h4>
              <p>Teams, clients, margins, delivery standards—not theory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section class="section bg-warm">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <div>
              <span class="eyebrow">The Sequence</span>
              <h2>How It Works</h2>
              <div class="gold-line"></div>
              <p style="margin-bottom:2rem;">A clear, structured sequence that develops both the leader and the business—without adding chaos.</p>
              <div class="steps">
                <div class="step">
                  <div class="step-num">01</div>
                  <div class="step-content">
                    <h4>Clarity Kickoff</h4>
                    <p style="font-size:0.88rem;">A focused session that creates immediate clarity on what's actually happening: owner dependency, operational bottlenecks, margin pressure, and where AI can (and cannot) help right now.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num">02</div>
                  <div class="step-content">
                    <h4>Principle-Centered Foundation</h4>
                    <p style="font-size:0.88rem;">Establish your principle-centered baseline and install leadership rhythms that make delegation, execution, and change possible—without burnout.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num">03</div>
                  <div class="step-content">
                    <h4>Leverage Strategy Install</h4>
                    <p style="font-size:0.88rem;">AI integration, brand positioning, and go-to-market strategy designed for your market—built around clear owners, standards, and execution milestones.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num">04</div>
                  <div class="step-content">
                    <h4>Embed, Adopt, and Scale</h4>
                    <p style="font-size:0.88rem;">Team training, change management, and an operating cadence that sticks—so what gets installed actually becomes "how the business runs."</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="hiw-img-wrap">
              <picture>
                <source srcset="/static/images/mpl-team-strategy.webp" type="image/webp" />
                <img src="/static/images/mpl-team-strategy.jpg" alt="Team working through a structured strategy session" class="hiw-img" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center" style="margin-bottom:3rem;">
            <span class="eyebrow">Ideal Client</span>
            <h2>Who This Is For</h2>
            <div class="gold-line" style="margin:1.25rem auto 0;"></div>
            <h3 style="font-size:1.3rem; font-weight:400; color:var(--color-text-muted); margin-top:1rem; font-family:var(--font-body);">Built for One Type of Leader</h3>
            <p style="max-width:600px; margin:0.5rem auto 0;">Service business owners between $500K–$10M who refuse to let urgency win over legacy.</p>
          </div>

          {/* Persona Cards */}
          <div class="grid-3" style="margin-bottom:3rem;">
            <div class="mpl-persona-card">
              <span class="mpl-persona-tag most-common">Most Common</span>
              <h4>The Bottleneck Builder</h4>
              <p class="mpl-persona-meta">$800K–$3M · 5–15 employees · Professional Services</p>
              <p style="font-size:0.88rem;">Your business depends entirely on you. You can't take a vacation. You miss family moments. You're exhausted—and secretly scared a key person walks out the door and takes everything with them.</p>
              <div class="mpl-persona-gives">
                <strong>This program gives you:</strong>
                <p style="font-size:0.85rem; margin:0.5rem 0 0;">20 hours back per week, delegation confidence, and a business that runs on principle—not your presence.</p>
              </div>
            </div>
            <div class="mpl-persona-card">
              <h4>The Scaling Operator</h4>
              <p class="mpl-persona-meta">$2M–$8M · 15–50 employees · Service Delivery</p>
              <p style="font-size:0.88rem;">You're growing—but operational chaos and financial fog are eating your margins. Competitors are deploying AI to undercut your pricing. A PE firm reached out last quarter. You're not ready.</p>
              <div class="mpl-persona-gives">
                <strong>This program gives you:</strong>
                <p style="font-size:0.85rem; margin:0.5rem 0 0;">AI-powered operations, 25–30% margins, and a business positioned for a $8M–$25M exit.</p>
              </div>
            </div>
            <div class="mpl-persona-card">
              <h4>The Creative Sovereign</h4>
              <p class="mpl-persona-meta">$1.5M–$6M · 8–30 employees · Creative/Knowledge Services</p>
              <p style="font-size:0.88rem;">You've built something with real craft and identity. Revenue is inconsistent. You're underpriced. And the fear that AI will replace what you do keeps you up at night—even though you haven't tested that assumption.</p>
              <div class="mpl-persona-gives">
                <strong>This program gives you:</strong>
                <p style="font-size:0.85rem; margin:0.5rem 0 0;">Stable retainer revenue, 30–40% margins, and AI positioned as your creative amplifier—not your replacement.</p>
              </div>
            </div>
          </div>

          {/* Fit Filters */}
          <div class="grid-2" style="gap:2rem;">
            <div class="mpl-fit-card fit-yes">
              <h4 style="color:var(--color-navy); margin-bottom:1.25rem;">✓ &nbsp;This IS for you if…</h4>
              <ul class="mpl-fit-list">
                <li>You own or lead a $500K–$10M service business</li>
                <li>You're serious about transformation—not just tactics</li>
                <li>You're willing to do the inner work AND the strategic work</li>
                <li>You want measurable outcomes, not motivational fluff</li>
                <li>You're ready to invest in yourself at a premium level</li>
                <li>You sense the AI window is open right now and you need to move</li>
              </ul>
            </div>
            <div class="mpl-fit-card fit-no">
              <h4 style="color:var(--color-text-muted); margin-bottom:1.25rem;">✗ &nbsp;This is NOT for you if…</h4>
              <ul class="mpl-fit-list muted">
                <li>You're looking for a cheap AI course or a toolbox of shortcuts</li>
                <li>You want someone else to do the work while you observe</li>
                <li>You're not open to examining your own leadership patterns</li>
                <li>Your business is under $500K in annual revenue</li>
                <li>You're not willing to show up consistently for coaching and mastermind</li>
                <li>You believe mindset work is "soft" and just want tactics</li>
              </ul>
            </div>
          </div>

          {/* CTA Repeat */}
          <div style="text-align:center; margin-top:3rem; display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Book a Clarity Kickoff Call</a>
            <a href="https://ydbg-pc-score-assessment.lovable.app/" class="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer">Take the Principle-Centered Assessment</a>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section class="section bg-warm">
        <div class="container">
          <div class="section-header center" style="margin-bottom:3rem;">
            <span class="eyebrow">The Framework</span>
            <h2>What's Included</h2>
            <div class="gold-line" style="margin:1.25rem auto 0;"></div>
            <p style="max-width:620px; margin:1rem auto 0;">A Three-Phase Transformation Framework—built to develop both the leader and the business, phase by phase.</p>
          </div>
          <div class="grid-3">
            {/* Phase 01 */}
            <div class="mpl-phase-card">
              <div class="mpl-phase-num">01</div>
              <span class="mpl-phase-partner">YDBG Framework</span>
              <h3 class="mpl-phase-title">Build the Foundation</h3>
              <p class="mpl-phase-sub">Principle-Centered Leadership Development</p>
              <ul class="intensive-includes" style="margin-top:1.25rem;">
                <li><strong>3D Blueprint Modules (Lifetime Access):</strong> production capability, fitness, lifestyle, consciousness</li>
                <li><strong>2 In-Person GameDays (Atlanta):</strong> comprehensive assessments + breakthrough sessions</li>
                <li><strong>Trust Account App (1 Year):</strong> daily habits, self-trust, real-time principle-centered tracking</li>
                <li><strong>Accountability System:</strong> 12 private sessions + weekly mastermind + accountability partnerships</li>
              </ul>
            </div>
            {/* Phase 02 */}
            <div class="mpl-phase-card featured-phase">
              <div class="mpl-phase-num">02</div>
              <span class="mpl-phase-partner">SMB Strategy Consultants</span>
              <h3 class="mpl-phase-title">Integrate the Leverage</h3>
              <p class="mpl-phase-sub">AI Integration, Brand Positioning &amp; Go-To-Market Strategy</p>
              <ul class="intensive-includes" style="margin-top:1.25rem;">
                <li><strong>AI Opportunity Audit + Roadmap:</strong> highest-ROI use-cases + a prioritized plan with owners and milestones</li>
                <li><strong>Brand Positioning Rebuild:</strong> messaging clarity + premium market position anchored to your principle-centered promise</li>
                <li><strong>Offer Design &amp; Packaging:</strong> restructure offers for margin, value, scalable delivery</li>
                <li><strong>GTM + Team Adoption:</strong> channel strategy + training + change management so execution sticks</li>
              </ul>
            </div>
            {/* Phase 03 */}
            <div class="mpl-phase-card">
              <div class="mpl-phase-num">03</div>
              <span class="mpl-phase-partner">Optional Add-On</span>
              <h3 class="mpl-phase-title">Scale With Intelligence</h3>
              <p class="mpl-phase-sub">Ongoing Growth Acceleration — SMB Strategy Partnership</p>
              <ul class="intensive-includes" style="margin-top:1.25rem;">
                <li><strong>Quarterly Strategic Planning:</strong> align leadership team and capital allocation</li>
                <li><strong>AI-Powered Operations Optimization:</strong> refine workflows as tools and business evolve</li>
                <li><strong>Leadership Team Development:</strong> extend principle-centered execution through management layers</li>
                <li><strong>Exit Readiness + Enterprise Value:</strong> systems, story, documentation that increase valuation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center" style="margin-bottom:3rem;">
            <span class="eyebrow">Social Proof</span>
            <h2>What Leaders Are Saying</h2>
            <div class="gold-line" style="margin:1.25rem auto 0;"></div>
            <p style="max-width:580px; margin:1rem auto 0; color:var(--color-text-muted);">Trusted by Fortune 500 executives—now purpose-built for ambitious business owners.</p>
          </div>
          <div class="grid-3">
            <div class="testimonial">
              <p class="testimonial-text">"The YDBG framework gave me something no MBA ever did — a clear, measurable way to see where I was leaking energy and why my team couldn't perform without me. Within 90 days I had reclaimed 15 hours a week and my business was still growing."</p>
              <div style="display:flex; align-items:center; gap:0.75rem; margin-top:1.25rem;">
                <div class="mpl-avatar">JM</div>
                <div>
                  <p class="testimonial-author" style="margin:0;">J. Mitchell</p>
                  <p style="font-size:0.78rem; color:var(--color-text-muted); margin:0;">CEO, Professional Services Firm — $4.2M Revenue</p>
                </div>
              </div>
            </div>
            <div class="testimonial">
              <p class="testimonial-text">"I was terrified AI would commoditize what we do. The SMB Strategy team helped me see it the opposite way — AI amplified our creative output and we cut our delivery costs by 35%. My clients got better results, faster. My margins went up."</p>
              <div style="display:flex; align-items:center; gap:0.75rem; margin-top:1.25rem;">
                <div class="mpl-avatar">SR</div>
                <div>
                  <p class="testimonial-author" style="margin:0;">S. Reynolds</p>
                  <p style="font-size:0.78rem; color:var(--color-text-muted); margin:0;">Founder, Creative Agency — $2.8M Revenue</p>
                </div>
              </div>
            </div>
            <div class="testimonial">
              <p class="testimonial-text">"I've done EOS, coaching, therapy, and mastermind groups. Nothing addressed the root problem: I didn't trust myself to make decisions without being in the room. The Trust App changed that. Now my team runs plays without me — and wins."</p>
              <div style="display:flex; align-items:center; gap:0.75rem; margin-top:1.25rem;">
                <div class="mpl-avatar">DK</div>
                <div>
                  <p class="testimonial-author" style="margin:0;">D. Kessler</p>
                  <p style="font-size:0.78rem; color:var(--color-text-muted); margin:0;">Managing Partner, Consulting Firm — $6.1M Revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR IMAGE BREAK ── */}
      <section class="mpl-image-break">
        <div class="mpl-image-break-overlay" aria-hidden="true"></div>
        <div class="container" style="position:relative; z-index:1; text-align:center;">
          <span class="eyebrow" style="color:var(--color-gold-light);">The Shift</span>
          <h2 style="color:#fff; max-width:680px; margin:0.75rem auto 0;">From reactive owner to principle-centered leader. From tool chaos to trusted AI leverage.</h2>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center" style="margin-bottom:3rem;">
            <span class="eyebrow">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
            <div class="gold-line" style="margin:1.25rem auto 0;"></div>
          </div>
          <div class="mpl-faq-grid">
            <div class="mpl-faq-item">
              <h4>How long does the program run?</h4>
              <p>The Framework is delivered in a structured, phase-by-phase sequence. The exact timeline depends on your starting point, team readiness, and the scope confirmed during the Clarity Kickoff.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>Is this only available in Atlanta? I'm not local.</h4>
              <p>No. Most of the work is delivered virtually. Atlanta is required only for the two GameDays (in-person assessment + breakthrough sessions). Everything else can be completed remotely.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>What if I'm already working with SMB Strategy Consultants?</h4>
              <p>Great. We'll align the Framework to your current engagement and avoid duplication. The Clarity Kickoff determines the cleanest path and what gets prioritized first.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>What's the weekly time commitment?</h4>
              <p>Expect a focused weekly cadence—designed to create real change without becoming another burden. Your exact commitment depends on the phase you're in, and we'll set expectations clearly during onboarding.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>How is this different from other AI consultants?</h4>
              <p>Most AI consultants sell tools, prompts, or experiments. This Framework installs principle-centered leadership first—then applies AI through clear standards, ownership, and adoption so it becomes leverage you can trust (not tool sprawl or chaos).</p>
            </div>
            <div class="mpl-faq-item">
              <h4>What if I'm not "ready" for AI? I don't even know where to start.</h4>
              <p>That's exactly why the Framework begins with clarity and foundation. You don't need to be "good at AI." You need a clear starting point, standards, and a practical sequence—so you don't waste time or introduce risk.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>What is the PC Score and why does it matter?</h4>
              <p>The PC Score is a measurable baseline that reflects your leadership capacity across the areas that drive sustainable performance—so you're not guessing whether you're improving. In this Framework, it acts as a simple way to track whether your leadership foundation is strengthening as leverage is installed.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>Are spots really limited to 15 participants per month?</h4>
              <p>Yes—this Framework includes deep support (coaching, small-group accountability, and implementation guidance), so enrollment is intentionally capped to protect outcomes and quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section class="cta-band">
        <div class="container">
          <span class="eyebrow" style="display:block; text-align:center; margin-bottom:1rem;">Ready to lead with principle and scale with intelligence?</span>
          <h2>Start with the Assessment. Then book your Clarity Kickoff.</h2>
          <p class="lead">Start with the Principle-Centered Assessment. Then book a Clarity Kickoff to map the right path.</p>
          <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <a href="https://ydbg-pc-score-assessment.lovable.app/" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Take the Principle-Centered Assessment</a>
            <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="btn btn-ghost-light btn-lg" target="_blank" rel="noopener noreferrer">Book a Clarity Kickoff Call</a>
          </div>
        </div>
      </section>

    </div>,
    { title: 'My Profit Life — The Principle-Centered AI Framework', activeNav: 'mpl' }
  )
})

export default mpl
