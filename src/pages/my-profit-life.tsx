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
          <h1>Advanced support for the right-stage owner.</h1>
          <div class="mpl-hero-rule" aria-hidden="true"></div>
          <p class="mpl-hero-sub">My Profit Life is a deeper leadership and operating support path for owners who have already clarified the business constraint and are ready to build stronger decisions, better priorities, and more durable leverage.</p>
          <div class="hero-actions" style="margin-top:2rem;">
            <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
          </div>
        </div>
      </section>

      {/* ── WHAT THIS IS ── image-left / content-right */}
      <section class="section bg-soft" style="padding-top:0;">
        <div class="mpl-wti-img">
          <picture>
            <source srcset="/static/images/mpl-principle-leader.webp" type="image/webp" />
            <img src="/static/images/mpl-principle-leader.jpg" alt="Principle-centered leader working with intention" loading="lazy" />
          </picture>
          <div class="mpl-wti-img-overlay" aria-hidden="true"></div>
        </div>
        <div class="container" style="padding-top:3rem;">
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
              <p style="margin:0;">If your leadership system is reactive, AI doesn't create leverage—it creates noise.</p>
            </div>
            <div>
              <h4 style="color:var(--color-navy); margin-bottom:1.5rem;">The Principle-Centered AI Framework — At a Glance</h4>
              <div class="mpl-glance-row">
                <div class="mpl-glance-item">
                  <span class="mpl-glance-label">Foundation</span>
                  <p>Principle-centered leadership method with measurable progress</p>
                </div>
                <div class="mpl-glance-item">
                  <span class="mpl-glance-label">Leverage</span>
                  <p>AI integration + brand positioning + go-to-market strategy installed into operations</p>
                </div>
                <div class="mpl-glance-item">
                  <span class="mpl-glance-label">Support</span>
                  <p>1:1 coaching + small-group mastermind</p>
                </div>
                <div class="mpl-glance-item">
                  <span class="mpl-glance-label">Outcome</span>
                  <p>More clarity, more leverage, less owner dependency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ── dark full-width, 3-up truth cards */}
      <section class="mpl-why-section">
        <div class="container">
          <div class="section-header center" style="margin-bottom:3rem;">
            <span class="eyebrow" style="color:var(--color-gold-light);">Why It Works</span>
            <h2 style="color:#fff;">AI shouldn't feel like another thing you have to carry.</h2>
            <div class="gold-line" style="margin:1.25rem auto 0;"></div>
          </div>
          <div class="mpl-why-cards">
            <div class="mpl-why-card">
              <div class="mpl-why-icon" aria-hidden="true">◻</div>
              <h4>We set the rules so your team isn't guessing what's okay and what isn't.</h4>
            </div>
            <div class="mpl-why-card mpl-why-card--featured">
              <div class="mpl-why-icon" aria-hidden="true">◎</div>
              <h4>We start small on purpose—1–3 places where AI saves time fast without risking quality.</h4>
            </div>
            <div class="mpl-why-card">
              <div class="mpl-why-icon" aria-hidden="true">✓</div>
              <h4>We make it stick with training, checklists, and simple accountability.</h4>
            </div>
          </div>
          <p style="text-align:center; color:rgba(255,255,255,0.6); margin-top:2rem; font-size:0.95rem;">So AI becomes helpful… not chaotic.</p>
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

      {/* ── WHO THIS IS FOR — always-visible personas ── */}
      <section class="section bg-warm">
        <div class="container">
          <div class="section-header center" style="margin-bottom:3.5rem;">
            <span class="eyebrow">Ideal Client</span>
            <h2>Who This Is For</h2>
            <div class="gold-line" style="margin:1.25rem auto 0;"></div>
            <p style="max-width:560px; margin:1rem auto 0; color:var(--color-text-muted);">Service business owners between $1M–$5M who refuse to let urgency win over legacy.</p>
          </div>

          <div class="mpl-persona-stack">

            <div class="mpl-persona-row">
              <div class="mpl-persona-label">
                <span class="mpl-persona-num">01</span>
                <span class="mpl-ptab-tag">Most Common</span>
                <h3>The Bottleneck Builder</h3>
                <p class="mpl-persona-meta">$1M–$3M &nbsp;·&nbsp; 8–15+ employees &nbsp;·&nbsp; Professional Services</p>
              </div>
              <div class="mpl-persona-content">
                <p>Your business depends entirely on you. You can't take a vacation. You miss family moments. You're exhausted—and secretly scared a key person walks out the door and takes everything with them.</p>
                <div class="mpl-ppanel-gives">
                  <span class="mpl-ppanel-gives-label">This program gives you</span>
                  <p>20 hours back per week, delegation confidence, and a business that runs on principle—not your presence.</p>
                </div>
              </div>
            </div>

            <div class="mpl-persona-divider" aria-hidden="true"></div>

            <div class="mpl-persona-row">
              <div class="mpl-persona-label">
                <span class="mpl-persona-num">02</span>
                <h3>The Scaling Operator</h3>
                <p class="mpl-persona-meta">$2M–$5M &nbsp;·&nbsp; 15–50+ employees &nbsp;·&nbsp; Service Delivery</p>
              </div>
              <div class="mpl-persona-content">
                <p>You're growing—but operational chaos and financial fog are eating your margins. Competitors are deploying AI to undercut your pricing. A PE firm reached out last quarter. You're not ready.</p>
                <div class="mpl-ppanel-gives">
                  <span class="mpl-ppanel-gives-label">This program gives you</span>
                  <p>AI-powered operations, 25–30% margins, and a business positioned for a $8M–$25M exit.</p>
                </div>
              </div>
            </div>

            <div class="mpl-persona-divider" aria-hidden="true"></div>

            <div class="mpl-persona-row">
              <div class="mpl-persona-label">
                <span class="mpl-persona-num">03</span>
                <h3>The Creative Sovereign</h3>
                <p class="mpl-persona-meta">$1.5M–$5M &nbsp;·&nbsp; 8–30+ employees &nbsp;·&nbsp; Creative/Knowledge Services</p>
              </div>
              <div class="mpl-persona-content">
                <p>You've built something with real craft and identity. Revenue is inconsistent. You're underpriced. And the fear that AI will replace what you do keeps you up at night—even though you haven't tested that assumption.</p>
                <div class="mpl-ppanel-gives">
                  <span class="mpl-ppanel-gives-label">This program gives you</span>
                  <p>Stable retainer revenue, 30–40% margins, and AI positioned as your creative amplifier—not your replacement.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FIT FILTER — dark strip ── */}
      <section class="mpl-fit-strip">
        <div class="container">
          <div class="mpl-fit-cols">
            <div class="mpl-fit-col mpl-fit-col--yes">
              <h4>This IS for you if…</h4>
              <ul>
                <li>You own or lead a $1M–$5M service business</li>
                <li>You're serious about transformation—not just tactics</li>
                <li>You're willing to do the inner work AND the strategic work</li>
                <li>You want measurable outcomes, not motivational fluff</li>
                <li>You're ready to invest in yourself at a premium level</li>
                <li>You sense the AI window is open right now and you need to move</li>
              </ul>
            </div>
            <div class="mpl-fit-divider" aria-hidden="true"></div>
            <div class="mpl-fit-col mpl-fit-col--no">
              <h4>This is NOT for you if…</h4>
              <ul>
                <li>You're looking for a cheap AI course or a toolbox of shortcuts</li>
                <li>You want someone else to do the work while you observe</li>
                <li>You're not open to examining your own leadership patterns</li>
                <li>Your business is under $500K in annual revenue</li>
                <li>You're not willing to show up consistently</li>
                <li>You believe mindset work is "soft" and just want tactics</li>
              </ul>
            </div>
          </div>
          <div style="text-align:center; margin-top:2.5rem; display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <a href="https://app.usemotion.com/meet/corbin/SMB?d=60" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Book a Clarity Kickoff Call</a>
            <a href="https://ydbg-pc-score-assessment.lovable.app/" class="btn btn-ghost-light btn-lg" target="_blank" rel="noopener noreferrer">Take the Principle-Centered Assessment</a>
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
                <li><strong>Find the best AI plays:</strong> where it saves time or money first (without risking quality).</li>
                <li><strong>Get a simple 90-day plan:</strong> what to do first, who owns it, and what "done" looks like.</li>
                <li><strong>Tighten your message + offer:</strong> so you stop underpricing and overdelivering.</li>
                <li><strong>Help your team adopt it:</strong> training + support so it doesn't die after week two.</li>
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
              <p>It runs in phases, not "weeks on a calendar." Some owners move faster, some take longer depending on team readiness and how much we're building at once. You'll get a clear timeline after the Clarity Kickoff.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>Is this only available in Atlanta? I'm not local.</h4>
              <p>No. Most of it is virtual. The only Atlanta piece is the two in-person GameDays. Everything else works remotely.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>What if I'm already working with SMB Strategy Consultants?</h4>
              <p>That's fine. We'll line this up with what you're already doing and avoid overlap. The Clarity Kickoff is where we decide what stays, what changes, and what we prioritize next.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>What's the weekly time commitment?</h4>
              <p>Plan on 2–4 hours per week most weeks. Some weeks are lighter, and some weeks (like GameDays or key planning sessions) are heavier. The goal is progress without this becoming another full-time job.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>How is this different from other AI consultants?</h4>
              <p>Most AI consultants hand you tools, prompts, or ideas. This starts with how you lead—because if the leadership system is messy, AI just makes the mess faster. We set rules, pick a few smart use-cases, and help your team actually use it.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>What if I'm not "ready" for AI? I don't even know where to start.</h4>
              <p>That's normal. You don't need to be "good at AI." You need a starting point and a plan that won't create chaos. We make it simple: what to do first, what to ignore for now, and how to roll it out safely.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>What is the PC Score and why does it matter?</h4>
              <p>It's a baseline that shows how strong your leadership capacity is right now—so you're not guessing. It helps us track whether you're actually getting clearer, more consistent, and less reactive as the business grows.</p>
            </div>
            <div class="mpl-faq-item">
              <h4>Are spots really limited to 15 participants per month?</h4>
              <p>Yes. This includes real support (coaching + small group accountability), so we cap spots to protect outcomes and keep quality high.</p>
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
