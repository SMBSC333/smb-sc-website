import { Hono } from 'hono'

const why4997 = new Hono()

why4997.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO SECTION ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container text-center">
          <div class="hero-content-v2" style="max-width: 900px; margin: 0 auto;">
            <span class="eyebrow" style="color: var(--color-gold);">The Economics of Scale</span>
            <h1 style="color: #fff;">Why $4,997/mo is an easy &ldquo;Yes&rdquo; when your business is losing $37,000/year.</h1>
            <p class="hero-lead" style="color: rgba(255,255,255,0.85);">
              Implementation, not advice. We don&rsquo;t sell theories; we install the systems that stop the leaks.
            </p>
            <div class="hero-cta-group mt-5">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free 20-Min Fit Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FRICTION BASELINE ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Hidden Leak</span>
            <h2>What you&rsquo;re losing right now (annually)</h2>
            <p class="lead">Most owners see the monthly investment. We see the $3,000+ monthly loss you&rsquo;re already paying for in manual work and missed leads.</p>
          </div>

          <div class="grid-4 mt-5">
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.1rem;">Unworked Leads</h4>
              <p style="font-size:0.85rem; color:var(--color-text-muted); flex-grow: 1;">Inquiries go cold after 48 hours without automated follow-up.</p>
              <p style="font-size:1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1rem;">$9K &ndash; $18K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.1rem;">Manual Reporting</h4>
              <p style="font-size:0.85rem; color:var(--color-text-muted); flex-grow: 1;">Owners spend 2&ndash;4 hours per week building dashboards by hand.</p>
              <p style="font-size:1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1rem;">$4.8K &ndash; $7.2K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.1rem;">Scheduling Friction</h4>
              <p style="font-size:0.85rem; color:var(--color-text-muted); flex-grow: 1;">Back-and-forth coordination delays starts and strains client experience.</p>
              <p style="font-size:1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1rem;">$2.4K &ndash; $4.8K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.1rem;">Bookkeeping Lag</h4>
              <p style="font-size:0.85rem; color:var(--color-text-muted); flex-grow: 1;">Decisions based on stale P&L data that's always 2&ndash;3 weeks behind.</p>
              <p style="font-size:1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1rem;">$3.1K &ndash; $5.5K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.1rem;">Proposal Delays</h4>
              <p style="font-size:0.85rem; color:var(--color-text-muted); flex-grow: 1;">Quotes take too long, losing deals to faster competitors.</p>
              <p style="font-size:1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1rem;">$4.2K &ndash; $9K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.1rem;">Onboarding Gaps</h4>
              <p style="font-size:0.85rem; color:var(--color-text-muted); flex-grow: 1;">New client starts are slow or depend entirely on the owner.</p>
              <p style="font-size:1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1rem;">$5.6K &ndash; $10.4K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.1rem;">Data Silos</h4>
              <p style="font-size:0.85rem; color:var(--color-text-muted); flex-grow: 1;">Disconnected tools that prevent real visibility into what's working.</p>
              <p style="font-size:1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1rem;">$3.2K &ndash; $6.1K / yr</p>
            </div>
            <div class="card card-navy d-flex flex-column justify-content-center align-items-center text-center">
              <p style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-gold-light); margin-bottom:0.5rem;">Average Total Leak</p>
              <p style="font-size:1.8rem; font-weight:700; color:#fff; line-height:1.1;">$37,000 / yr</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ROI MATH ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Calculation</span>
            <h2>The 2.5x ROI Path</h2>
            <p>We move your budget from &ldquo;operational waste&rdquo; to &ldquo;growth infrastructure.&rdquo;</p>
          </div>

          <div style="max-width: 700px; margin: 0 auto; background: #fff; border-radius: var(--radius-xl); border: 1px solid var(--color-bg-border); overflow: hidden; box-shadow: var(--shadow-lg);">
             <table style="width: 100%; border-collapse: collapse;">
                <thead>
                   <tr style="background: var(--color-navy-deep); color: #fff; text-align: left;">
                      <th style="padding: 1.5rem 2rem;">Metric</th>
                      <th style="padding: 1.5rem 2rem;">Year One</th>
                      <th style="padding: 1.5rem 2rem;">Year Two+</th>
                   </tr>
                </thead>
                <tbody>
                   <tr style="border-bottom: 1px solid var(--color-bg-border);">
                      <td style="padding: 1.5rem 2rem; font-weight: 600;">Operational Friction Saved</td>
                      <td style="padding: 1.5rem 2rem; color: var(--color-gold-dark); font-weight: 600;">+$37,000</td>
                      <td style="padding: 1.5rem 2rem; color: var(--color-gold-dark); font-weight: 600;">+$37,000</td>
                   </tr>
                   <tr style="border-bottom: 1px solid var(--color-bg-border);">
                      <td style="padding: 1.5rem 2rem; font-weight: 600;">Sprint Investment</td>
                      <td style="padding: 1.5rem 2rem; color: #cc0000; font-weight: 600;">-$14,991</td>
                      <td style="padding: 1.5rem 2rem;">$0</td>
                   </tr>
                   <tr style="background: var(--color-bg-soft);">
                      <td style="padding: 1.5rem 2rem; font-weight: 700; color: var(--color-navy);">Net Profit Gain</td>
                      <td style="padding: 1.5rem 2rem; font-weight: 800; color: var(--color-navy); font-size: 1.2rem;">+$22,009</td>
                      <td style="padding: 1.5rem 2rem; font-weight: 800; color: var(--color-navy); font-size: 1.2rem;">+$37,000</td>
                   </tr>
                   <tr style="border-top: 2px solid var(--color-gold);">
                      <td style="padding: 1.5rem 2rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Total ROI</td>
                      <td style="padding: 1.5rem 2rem; font-weight: 800; color: var(--color-gold-dark); font-size: 1.3rem;">2.5x</td>
                      <td style="padding: 1.5rem 2rem; font-weight: 800; color: var(--color-gold-dark); font-size: 1.3rem;">Infinite</td>
                   </tr>
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION VS ADVICE ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="gap: 4rem; align-items: center;">
             <div>
                <span class="eyebrow">The Differentiator</span>
                <h2>Implementation, Not Advice.</h2>
                <p class="lead mt-4">Traditional consultants sell you a list of things to do. We install the things that do it for you.</p>
                
                <div class="mt-5">
                   <div style="margin-bottom: 2rem;">
                      <h4 style="color: var(--color-navy); margin-bottom: 0.5rem;">Traditional Consulting</h4>
                      <p class="text-sm">Stretches for 12 months, produces &ldquo;recommendations&rdquo;, and leaves you to manage the complexity.</p>
                   </div>
                   <div>
                      <h4 style="color: var(--color-gold-dark); margin-bottom: 0.5rem;">The 90-Day Sprint</h4>
                      <p class="text-sm">Done in 3 months. Produces installed agents and workflows. Team trained to own the infrastructure.</p>
                   </div>
                </div>
             </div>
             <div class="card card-navy p-5">
                <h3 style="color: #fff; margin-bottom: 1.5rem;">You aren&rsquo;t paying for a report.</h3>
                <p style="color: rgba(255,255,255,0.8); font-size: 1.1rem; line-height: 1.6;">You are paying for a business that runs itself. By moving that $14,991 from waste to infrastructure, you reclaim 40% of your operational capacity in 12 weeks.</p>
                <div class="mt-4">
                   <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-block text-center" style="width:100%;">Run the Math on Your Business</a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ── */}
      <section class="cta-band bg-navy">
        <div class="container text-center">
          <h2 style="color:#fff;">Ready to find your friction?</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width:800px; margin: 1.5rem auto;">Book a free 20-minute fit call. We will look at your operations and tell you honestly where your biggest leaks are.</p>
          <div style="margin-top: 2.5rem;">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free 20-Min Fit Call</a>
          </div>
        </div>
      </section>
    </div>,
    { 
      title: 'Why $4,997/mo — SMB Strategy Consultants', 
      description: 'Understanding the ROI math behind the 90-Day AI Implementation Sprint and the cost of operational friction.',
      activeNav: 'services' 
    }
  )
})

export default why4997
