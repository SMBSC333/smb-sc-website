import { Hono } from 'hono'

const about = new Hono()

about.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO SECTION ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">The Firm</span>
            <h1 style="color: #fff;">Built for firms that have learned the hard way.</h1>
            <p class="hero-lead">
              We are SMB Strategy Consultants. We help owner-led businesses become operationally competitive in the AI era.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free 20-Min Fit Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: OUR PHILOSOPHY ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: start; gap: 4rem;">
            <div>
              <span class="eyebrow">Methodology</span>
              <h2>Our Philosophy</h2>
              <div class="mt-4" style="font-size: 1.1rem; line-height: 1.7; color: var(--color-text);">
                <p><strong>The Insight:</strong> Most AI implementations fail because they are built on broken foundations. Tools don&rsquo;t fail. Businesses do. Without the right workflows, team readiness, owner clarity, and economic model, <strong>AI just amplifies the noise.</strong></p>
                <p class="mt-3"><strong>Our Method:</strong> Diagnose the real constraint. Build the right system. Hand you ownership. 90 days. Full implementation. Real results.</p>
                <p class="mt-3"><strong>Our Commitment:</strong> We don&rsquo;t sell tools. We don&rsquo;t sell advice. We build implementation systems that work and hand them to you.</p>
              </div>
            </div>
            <div class="card card-navy p-5">
               <h3 style="color: #fff; margin-bottom: 1.5rem;">What Success Looks Like</h3>
               <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                  <li style="color: rgba(255,255,255,0.85);">Measurable margin or capacity improvement (2.5x year-one ROI).</li>
                  <li style="color: rgba(255,255,255,0.85);">Workflows that run without you in the room.</li>
                  <li style="color: rgba(255,255,255,0.85);">Team trained and confident on new systems.</li>
                  <li style="color: rgba(255,255,255,0.85);">Documentation that allows you to evolve.</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHO WE WORK WITH ── */}
      <section class="section bg-soft">
        <div class="container text-center">
          <span class="eyebrow">Audience Fit</span>
          <h2>Who We Work With</h2>
          <div class="gold-line gold-line-center"></div>
          <div class="grid-4 mt-5">
             <div class="card card-white">
                <h4 style="color:var(--color-gold-dark);">Revenue</h4>
                <p class="text-sm">Owner-led B2B service firms, $1M&ndash;$5M revenue.</p>
             </div>
             <div class="card card-white">
                <h4 style="color:var(--color-gold-dark);">Dependency</h4>
                <p class="text-sm">Firms where the owner is still central to operations.</p>
             </div>
             <div class="card card-white">
                <h4 style="color:var(--color-gold-dark);">Experience</h4>
                <p class="text-sm">Businesses that have tried AI and found it didn't stick.</p>
             </div>
             <div class="card card-white">
                <h4 style="color:var(--color-gold-dark);">Commitment</h4>
                <p class="text-sm">Teams ready to invest 90 days in real implementation.</p>
             </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ── */}
      <section class="cta-band">
        <div class="container">
          <h2>Ready to find your friction?</h2>
          <p class="lead">Book a free 20-minute fit call with Corbin to identify your biggest leaks.</p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free 20-Min Fit Call</a>
        </div>
      </section>
    </div>,
    { 
      title: 'About — SMB Strategy Consultants', 
      description: 'Meet Corbin Cook. We help owner-led service firms move from reactive growth to structured leverage through financial clarity and AI implementation.',
      activeNav: 'about' 
    }
  )
})

export default about
