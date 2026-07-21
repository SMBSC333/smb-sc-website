import { Hono } from 'hono'

const aiImplementationConsultant = new Hono()

aiImplementationConsultant.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">AI Implementation Consulting</span>
            <h1 style="color: #fff;">The AI implementation consultant for owner-led B2B service firms.</h1>
            <p class="hero-lead">
              You bought the tools. You tested the prompts. Adoption stalled anyway. We diagnose the real constraint &mdash; workflow, team readiness, owner dependency, or economics &mdash; and build the implementation that actually sticks.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free AI Leverage Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">The AI Leverage Path</span>
              <h2>Yes, most AI implementations haven't been effective — usually for two reasons.</h2>
              <p class="mt-4" style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                One: nobody diagnosed the actual constraint before picking a tool. Two: nobody owned the follow-through past week two, so adoption drifted back to the old way. AI deployed on top of an undiagnosed workflow doesn&rsquo;t fix the workflow &mdash; it amplifies the friction. Neither one is a technology problem, and both are fixable.
              </p>
              <p style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                We identify the real constraint blocking adoption and build the implementation system that transforms it into measurable operational leverage &mdash; and you own it when it's done.
              </p>
            </div>
            <div>
              <div class="card card-navy" style="padding: 2.5rem;">
                <h4 style="color: var(--color-gold-light);">The Five Constraint Categories</h4>
                <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
                  <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85);">Workflow &mdash; processes AI can&rsquo;t plug into</li>
                  <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85);">Owner dependency &mdash; the firm can&rsquo;t run without you</li>
                  <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85);">Role clarity &mdash; no one owns the AI outputs</li>
                  <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85);">Team readiness &mdash; adoption requires training, not just tools</li>
                  <li style="padding: 0.75rem 0; color: rgba(255,255,255,0.85);">Economics &mdash; the ROI math was never validated</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT AN AI IMPLEMENTATION CONSULTANT ACTUALLY DOES ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Work</span>
            <h2>What an AI implementation consultant actually does</h2>
            <div class="gold-line gold-line-center"></div>
            <p>This is not a course, a playbook, or a done-for-you automation. It&rsquo;s a structured engagement that identifies your real constraint, builds the right system, and hands it off to your team.</p>
          </div>

          <div class="grid-3">
            <div class="card card-white p-5 border-light">
              <div class="card-number">01</div>
              <h3>Diagnose the Constraint</h3>
              <p style="color: var(--color-text-muted);">A current-state workflow audit identifies the specific friction point blocking AI adoption in your firm &mdash; before we build anything.</p>
            </div>
            <div class="card card-white p-5 border-light">
              <div class="card-number">02</div>
              <h3>Design the Implementation Path</h3>
              <p style="color: var(--color-text-muted);">We define which AI tools, workflows, and systems are right for your specific constraint. No guessing. No tool-first thinking.</p>
            </div>
            <div class="card card-white p-5 border-light">
              <div class="card-number">03</div>
              <h3>Build and Hand Off</h3>
              <p style="color: var(--color-text-muted);">We build the workflows, train your team, and document every system. You own the output. The engagement ends when your team is running it independently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ENGAGEMENT ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">The Engagement</span>
              <h2>The 90-Day AI Implementation Sprint</h2>
              <p class="mt-4" style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                Three phases. Diagnostic, Build, and Hand-Off. One integrated offer built for owner-led B2B service firms who need the work done, not another thing to manage.
              </p>
              <ul class="feature-list mt-4">
                <li>Month 1: Constraint diagnosis and quick-win implementation</li>
                <li>Month 2: Custom workflow build and system integration</li>
                <li>Month 3: Team training, documentation, and hand-off</li>
                <li>30-day post-launch support window included</li>
              </ul>
              <div class="mt-5">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">See if You Qualify &rarr;</a>
              </div>
            </div>
            <div style="background: var(--color-bg-soft); border-radius: var(--radius-lg); padding: 2.5rem;">
              <h4 style="color: var(--color-navy);">Who this engagement is for</h4>
              <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
                <li style="padding: 0.6rem 0; border-bottom: 1px solid var(--color-bg-border); display: flex; align-items: flex-start; gap: 0.75rem;">
                  <span style="color: var(--color-gold-dark); font-weight: 700; flex-shrink: 0;">+</span>
                  <span>Owner-led B2B service firm</span>
                </li>
                <li style="padding: 0.6rem 0; border-bottom: 1px solid var(--color-bg-border); display: flex; align-items: flex-start; gap: 0.75rem;">
                  <span style="color: var(--color-gold-dark); font-weight: 700; flex-shrink: 0;">+</span>
                  <span>Owner still central to delivery, sales, or approvals</span>
                </li>
                <li style="padding: 0.6rem 0; border-bottom: 1px solid var(--color-bg-border); display: flex; align-items: flex-start; gap: 0.75rem;">
                  <span style="color: var(--color-gold-dark); font-weight: 700; flex-shrink: 0;">+</span>
                  <span>Already tried AI tools &mdash; adoption stalled or ROI never materialized</span>
                </li>
                <li style="padding: 0.6rem 0; display: flex; align-items: flex-start; gap: 0.75rem;">
                  <span style="color: var(--color-gold-dark); font-weight: 700; flex-shrink: 0;">+</span>
                  <span>Ready to implement the right system, not buy another tool</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SMB STRATEGY CONSULTANTS ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Why Us</span>
            <h2>This is not generic AI consulting.</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-2" style="gap: 2rem; max-width: 900px; margin: 0 auto;">
            <div class="card card-white p-4">
              <h4 style="color: var(--color-navy);">We diagnose before we build</h4>
              <p style="color: var(--color-text-muted);">Most consultants sell a solution before understanding the problem. We identify your specific constraint in Month 1 before building anything in Month 2.</p>
            </div>
            <div class="card card-white p-4">
              <h4 style="color: var(--color-navy);">You own what we build</h4>
              <p style="color: var(--color-text-muted);">No retainer dependency. No black-box systems. Every workflow, SOP, and integration is documented and handed to your team at the end of Month 3.</p>
            </div>
            <div class="card card-white p-4">
              <h4 style="color: var(--color-navy);">We specialize in your firm type</h4>
              <p style="color: var(--color-text-muted);">Owner-led service businesses have specific constraints &mdash; owner dependency, role ambiguity, and tight margins. Our methodology is built for that context, not adapted from enterprise playbooks.</p>
            </div>
            <div class="card card-white p-4">
              <h4 style="color: var(--color-navy);">Growth-Leveraged AI</h4>
              <p style="color: var(--color-text-muted);">AI deployed correctly is a lever. Deployed on broken foundations, it amplifies the noise. We build the foundations first, then deploy the leverage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-navy-deep">
        <div class="container text-center">
          <span class="eyebrow" style="color: var(--color-gold);">Start Here</span>
          <h2 style="color: #fff; max-width: 700px; margin: 1rem auto;">Book a free 20-minute fit call.</h2>
          <p style="color: rgba(255,255,255,0.75); max-width: 600px; margin: 1.5rem auto; font-size: 1.1rem;">
            We review your current state, identify whether this engagement is a fit, and tell you plainly what we see. No pitch. No pressure. If we&rsquo;re the right firm for your constraint, we&rsquo;ll tell you exactly why.
          </p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg mt-4">Book Your Free AI Leverage Call &rarr;</a>
        </div>
      </section>
    </div>,
    {
      title: 'AI Consultant for Service Firms',
      description: 'The AI implementation firm owner-led service businesses hire after AI has failed. We find the real constraint and build the implementation that sticks.',
      activeNav: 'services'
    }
  )
})

export default aiImplementationConsultant
