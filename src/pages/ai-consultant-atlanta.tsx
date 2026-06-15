import { Hono } from 'hono'

const aiConsultantAtlanta = new Hono()

aiConsultantAtlanta.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Atlanta, GA</span>
            <h1 style="color: #fff;">AI implementation consulting for Atlanta-area service businesses.</h1>
            <p class="hero-lead">
              SMB Strategy Consultants is based in Atlanta and works with owner-led B2B service firms across the metro and beyond. If your AI implementation stalled, we diagnose the real constraint and build the system that sticks.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free Fit Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL CONTEXT ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">Atlanta-Based</span>
              <h2>We work where Atlanta businesses work.</h2>
              <p class="mt-4" style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                The Atlanta market is one of the fastest-growing B2B service corridors in the Southeast. Owner-led agencies, MSPs, consultancies, and professional service firms across Buckhead, Midtown, the Perimeter, and the broader metro are navigating the same AI adoption pressure &mdash; and hitting the same implementation walls.
              </p>
              <p style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                We work with Atlanta-area service businesses both in person and remotely. Our engagements are structured for firms doing $1M&ndash;$5M in revenue with 8&ndash;30 employees &mdash; the segment where AI leverage is highest and implementation support is hardest to find.
              </p>
            </div>
            <div class="card card-navy" style="padding: 2.5rem;">
              <h4 style="color: var(--color-gold-light);">Who we work with in Atlanta</h4>
              <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
                <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85);">Marketing and creative agencies</li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85);">Managed service providers (MSPs)</li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85);">Business consulting and advisory firms</li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.85);">Professional services (legal, financial, HR)</li>
                <li style="padding: 0.75rem 0; color: rgba(255,255,255,0.85);">Operations-heavy B2B service firms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM WE SOLVE ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Work</span>
            <h2>What Atlanta firms hire us to do</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3" style="gap: 1.5rem;">
            <div class="card card-white p-5">
              <div class="card-number">01</div>
              <h3>Diagnose the Constraint</h3>
              <p style="color: var(--color-text-muted);">We identify the specific operational constraint blocking AI adoption in your firm before recommending any tools or building any workflows.</p>
            </div>
            <div class="card card-white p-5">
              <div class="card-number">02</div>
              <h3>Build the Right System</h3>
              <p style="color: var(--color-text-muted);">Custom AI workflows and integrations designed around your actual business model, not a generic template adapted from an enterprise playbook.</p>
            </div>
            <div class="card card-white p-5">
              <div class="card-number">03</div>
              <h3>Hand Off to Your Team</h3>
              <p style="color: var(--color-text-muted);">Full documentation, team training, and a 30-day support window. You own everything we build. No dependency on us to keep it running.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY LOCAL MATTERS ── */}
      <section class="section bg-white">
        <div class="container">
          <div style="max-width: 780px; margin: 0 auto;">
            <div class="section-header center mb-5">
              <span class="eyebrow">Why It Matters</span>
              <h2>Atlanta businesses face specific AI adoption challenges.</h2>
              <div class="gold-line gold-line-center"></div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                <div style="background: var(--color-gold); border-radius: 50%; width: 2rem; height: 2rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.2rem;">
                  <span style="color: #fff; font-weight: 700; font-size: 0.8rem;">+</span>
                </div>
                <div>
                  <h4 style="color: var(--color-navy); margin: 0 0 0.5rem;">Competitive pressure from larger firms</h4>
                  <p style="color: var(--color-text-muted); margin: 0;">Atlanta&rsquo;s B2B service market is dense. Owner-led firms compete against national firms with larger AI budgets. The implementation gap is a real competitive disadvantage.</p>
                </div>
              </div>
              <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                <div style="background: var(--color-gold); border-radius: 50%; width: 2rem; height: 2rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.2rem;">
                  <span style="color: #fff; font-weight: 700; font-size: 0.8rem;">+</span>
                </div>
                <div>
                  <h4 style="color: var(--color-navy); margin: 0 0 0.5rem;">Tight labor market</h4>
                  <p style="color: var(--color-text-muted); margin: 0;">Atlanta&rsquo;s talent competition is intense for small firms. AI-leveraged operations allow owner-led firms to extend capacity without competing for headcount they can&rsquo;t afford.</p>
                </div>
              </div>
              <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                <div style="background: var(--color-gold); border-radius: 50%; width: 2rem; height: 2rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.2rem;">
                  <span style="color: #fff; font-weight: 700; font-size: 0.8rem;">+</span>
                </div>
                <div>
                  <h4 style="color: var(--color-navy); margin: 0 0 0.5rem;">Growth-phase constraints</h4>
                  <p style="color: var(--color-text-muted); margin: 0;">Many Atlanta service firms are in the $1M&ndash;$5M growth band where owner dependency becomes the ceiling. AI implementation is a direct path to breaking through that ceiling without adding management overhead.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-navy-deep">
        <div class="container text-center">
          <span class="eyebrow" style="color: var(--color-gold);">Atlanta &amp; Beyond</span>
          <h2 style="color: #fff; max-width: 680px; margin: 1rem auto;">Book a free 20-minute fit call.</h2>
          <p style="color: rgba(255,255,255,0.75); max-width: 580px; margin: 1.5rem auto; font-size: 1.1rem;">
            We work with Atlanta-area firms in person and serve clients remotely across the U.S. If you&rsquo;re an owner-led service firm and AI implementation has stalled, the fit call is the right first step.
          </p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg mt-2">Book a Free Fit Call &rarr;</a>
        </div>
      </section>
    </div>,
    {
      title: 'AI Implementation Consultant — Atlanta, GA',
      description: 'SMB Strategy Consultants is an Atlanta-based AI implementation consulting firm serving owner-led B2B service businesses across the Atlanta metro. We diagnose the real constraint and build the implementation that sticks.',
      activeNav: ''
    }
  )
})

export default aiConsultantAtlanta
