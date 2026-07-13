import { Hono } from 'hono'

const why4997 = new Hono()

why4997.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO SECTION ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2 text-center" style="max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
            <span class="eyebrow" style="color: var(--color-gold);">The Economics of Scale</span>
            <h1 style="color: #fff;">Why $7,500/month is an easy investment when you're losing $37,000/year.</h1>
            <p class="hero-lead" style="color: rgba(255,255,255,0.85);">
              Implementation, not advice. We don't sell theories; we install the systems that stop the leaks and build your <strong>Growth-Leveraged AI</strong> foundations.
            </p>
            <div class="hero-cta-group mt-5">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FRICTION BASELINE ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Friction Baseline</span>
            <h2>What you're losing right now (annually)</h2>
            <div class="gold-line gold-line-center"></div>
            <p class="lead">Most owners focus on the monthly investment. We focus on the monthly loss you're already paying for in manual work, missed leads, and operational chaos.</p>
          </div>

          <div class="grid-4 mt-5">
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Unworked Leads</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Inquiries go cold after 48 hours without automated follow-up.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$9K &ndash; $18K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Manual Reporting</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Owners spend 2&ndash;4 hours per week building dashboards by hand.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$4.8K &ndash; $7.2K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Scheduling Friction</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Back-and-forth coordination delays starts and strains client experience.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$2.4K &ndash; $4.8K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Bookkeeping Lag</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Decisions based on stale P&L data that's always 2&ndash;3 weeks behind.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$3.1K &ndash; $5.5K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Proposal Delays</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Quotes take too long, losing deals to faster competitors.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$4.2K &ndash; $9K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Onboarding Gaps</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">New client starts are slow or depend entirely on the owner.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$5.6K &ndash; $10.4K / yr</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.25rem;">Data Silos</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); flex-grow: 1;">Disconnected tools that prevent real visibility into what's actually working.</p>
              <p style="font-size:1.1rem; font-weight:700; color:var(--color-gold-dark); margin-top:1.5rem; border-top: 1px solid rgba(0,0,0,0.05); pt-3;">$3.2K &ndash; $6.1K / yr</p>
            </div>
            <div class="card card-navy d-flex flex-column justify-content-center align-items-center text-center">
              <p style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-gold-light); margin-bottom:0.75rem;">Total Annual Friction</p>
              <p style="font-size:2.2rem; font-weight:700; color:#fff; line-height:1.1;">$32K &ndash; $61K</p>
              <p style="font-size:0.85rem; color:rgba(255,255,255,0.65); margin-top:0.75rem;">(Average: $37,000)</p>
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

          <div style="max-width: 750px; margin: 0 auto; background: #fff; border-radius: var(--radius-xl); border: 1px solid var(--color-bg-border); overflow: hidden; box-shadow: var(--shadow-lg);">
             <table style="width: 100%; border-collapse: collapse;">
                <thead>
                   <tr style="background: var(--color-navy-deep); color: #fff; text-align: left;">
                      <th style="padding: 2rem;">Metric</th>
                      <th style="padding: 2rem;">Year One</th>
                      <th style="padding: 2rem;">Year Two+</th>
                   </tr>
                </thead>
                <tbody>
                   <tr style="border-bottom: 1px solid var(--color-bg-border);">
                      <td style="padding: 2rem; font-weight: 600;">
                         Operational Friction Saved
                         <div style="font-size: 0.8rem; font-weight: 400; color: var(--color-text-muted); margin-top: 0.25rem;">(conservative baseline estimate)</div>
                      </td>
                      <td style="padding: 2rem; color: var(--color-gold-dark); font-weight: 700; font-size: 1.1rem;">+$37,000</td>
                      <td style="padding: 2rem; color: var(--color-gold-dark); font-weight: 700; font-size: 1.1rem;">+$37,000</td>
                   </tr>
                   <tr style="border-bottom: 1px solid var(--color-bg-border);">
                      <td style="padding: 2rem; font-weight: 600;">
                         Sprint Investment
                         <div style="font-size: 0.8rem; font-weight: 400; color: var(--color-text-muted); margin-top: 0.25rem;">($2,000 setup + $7,500/mo &times; 3 months)</div>
                      </td>
                      <td style="padding: 2rem; color: #cc0000; font-weight: 700; font-size: 1.1rem;">-$24,500</td>
                      <td style="padding: 2rem; font-weight: 700; font-size: 1.1rem;">$0</td>
                   </tr>
                   <tr style="background: var(--color-bg-soft);">
                      <td style="padding: 2rem; font-weight: 700; color: var(--color-navy); font-size: 1.1rem;">Net Profit Gain</td>
                      <td style="padding: 2rem; font-weight: 800; color: var(--color-navy); font-size: 1.4rem;">+$22,009</td>
                      <td style="padding: 2rem; font-weight: 800; color: var(--color-navy); font-size: 1.4rem;">+$37,000</td>
                   </tr>
                   <tr style="border-top: 2px solid var(--color-gold);">
                      <td style="padding: 2rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-navy);">Total ROI</td>
                      <td style="padding: 2rem; font-weight: 900; color: var(--color-gold-dark); font-size: 1.5rem;">2.5x</td>
                      <td style="padding: 2rem; font-weight: 900; color: var(--color-gold-dark); font-size: 1.5rem;">Infinite</td>
                   </tr>
                </tbody>
             </table>
          </div>
          
          <div class="text-center mt-5">
             <p style="font-style: italic; color: var(--color-text-muted);">This is the math behind a business that is operationally competitive.</p>
          </div>
        </div>
      </section>

      {/* ── TIERED ROI MATRIX ── */}
      <section class="section bg-white">
        <div class="container">
           <div class="section-header center mb-5">
              <span class="eyebrow">Scale & Leverage</span>
              <h2>ROI Estimates by Business Size</h2>
              <p class="lead">The larger the operation, the more noise AI amplifies. We scale the implementation to your friction.</p>
           </div>

           <div class="grid-3 mt-5" style="gap: 2.5rem;">
              {/* Tier 1: Small Firm */}
              <div class="card card-accent p-5 d-flex flex-column" style="border-top: 4px solid var(--color-navy); min-height: 450px;">
                 <span class="eyebrow" style="font-size: 0.7rem; letter-spacing: 0.1em; margin-bottom: 1.5rem; display: block;">Tier 01</span>
                 <h4 class="mb-4" style="font-size: 1.4rem;">Small Firm (8-15 Employees)</h4>
                 
                 <div class="mb-5" style="flex-grow: 1;">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                       <span class="text-sm" style="color: var(--color-text-muted); margin-right: 1rem;">Est. Annual Friction</span>
                       <span style="font-weight: 700; font-size: 1.1rem;">$37,000</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-4">
                       <span class="text-sm" style="color: var(--color-text-muted); margin-right: 1rem;">Sprint Investment</span>
                       <span style="font-weight: 700; font-size: 1.1rem;">$24,500</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center pt-4" style="border-top: 1px dashed rgba(0,0,0,0.1);">
                       <span class="text-sm" style="color: var(--color-navy); font-weight: 600; margin-right: 1rem;">Net Year 1 Gain</span>
                       <span style="font-weight: 800; font-size: 1.25rem; color: var(--color-navy);">+$22,009</span>
                    </div>
                 </div>

                 <div style="padding-top: 2rem; border-top: 1px solid rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-muted); margin-right: 1rem;">Est. Year 1 ROI</span>
                    <span style="font-size: 1.8rem; font-weight: 800; color: var(--color-navy);">2.5x</span>
                 </div>
              </div>

              {/* Tier 2: Mid-Size Firm */}
              <div class="card card-navy p-5 d-flex flex-column" style="border-top: 4px solid var(--color-gold); min-height: 450px; box-shadow: var(--shadow-lg);">
                 <span class="eyebrow" style="font-size: 0.7rem; color: var(--color-gold-light); letter-spacing: 0.1em; margin-bottom: 1.5rem; display: block;">Tier 02 (Core Focus)</span>
                 <h4 class="mb-4" style="color: #fff; font-size: 1.4rem;">Mid-Size Firm (15-30 Employees)</h4>
                 
                 <div class="mb-5" style="flex-grow: 1;">
                    <div class="d-flex justify-content-between align-items-center mb-4" style="color: rgba(255,255,255,0.85);">
                       <span class="text-sm" style="margin-right: 1rem;">Est. Annual Friction</span>
                       <span style="font-weight: 700; color: #fff; font-size: 1.1rem;">$85,000</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-4" style="color: rgba(255,255,255,0.85);">
                       <span class="text-sm" style="margin-right: 1rem;">Sprint Investment</span>
                       <span style="font-weight: 700; color: #fff; font-size: 1.1rem;">$24,500</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center pt-4" style="border-top: 1px dashed rgba(255,255,255,0.2);">
                       <span class="text-sm" style="color: var(--color-gold-light); font-weight: 600; margin-right: 1rem;">Net Year 1 Gain</span>
                       <span style="font-weight: 800; font-size: 1.25rem; color: var(--color-gold-light);">+$70,009</span>
                    </div>
                 </div>

                 <div style="padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.15); display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-gold-light); margin-right: 1rem;">Est. Year 1 ROI</span>
                    <span style="font-size: 1.8rem; font-weight: 800; color: var(--color-gold-light);">5.6x</span>
                 </div>
              </div>

              {/* Tier 3: Enterprise Scale */}
              <div class="card card-accent p-5 d-flex flex-column" style="border-top: 4px solid var(--color-navy); min-height: 450px;">
                 <span class="eyebrow" style="font-size: 0.7rem; letter-spacing: 0.1em; margin-bottom: 1.5rem; display: block;">Tier 03</span>
                 <h4 class="mb-4" style="font-size: 1.4rem;">Enterprise Scale (30+ Employees)</h4>
                 
                 <div class="mb-5" style="flex-grow: 1;">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                       <span class="text-sm" style="color: var(--color-text-muted); margin-right: 1rem;">Est. Annual Friction</span>
                       <span style="font-weight: 700; font-size: 1.1rem;">$180,000</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-4">
                       <span class="text-sm" style="color: var(--color-text-muted); margin-right: 1rem;">Est. Investment</span>
                       <span style="font-weight: 700; font-size: 1.1rem;">$35,000*</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center pt-4" style="border-top: 1px dashed rgba(0,0,0,0.1);">
                       <span class="text-sm" style="color: var(--color-navy); font-weight: 600; margin-right: 1rem;">Net Year 1 Gain</span>
                       <span style="font-weight: 800; font-size: 1.25rem; color: var(--color-navy);">+$145,000</span>
                    </div>
                 </div>

                 <div style="padding-top: 2rem; border-top: 1px solid rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-muted); margin-right: 1rem;">Est. Year 1 ROI</span>
                    <span style="font-size: 1.8rem; font-weight: 800; color: var(--color-navy);">5.1x</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── THE SPEED FACTOR ── */}
      <section class="section bg-white">
        <div class="container">
           <div class="section-header center mb-5">
              <span class="eyebrow">The Speed Factor</span>
              <h2>Sprints. Not a Year-Long Retainer.</h2>
              <div class="gold-line gold-line-center"></div>
              <p class="lead">Most consultants sell retainers that stretch for 6-12 months. We sequence larger builds in 90-day sprints to a milestone — some move faster, some come out of the box — and hand you the keys instead of another invoice.</p>
           </div>
           
           <div class="grid-2 mt-5" style="gap: 3rem;">
              <div class="card card-accent p-5">
                 <h4 style="color: var(--color-navy); margin-bottom: 1.5rem;">Traditional Consultant Path</h4>
                 <ul class="intensive-includes" style="--icon-color: var(--color-text-muted); list-style: none; padding: 0;">
                    <li style="margin-bottom: 1rem;">Month 3: Initial Report Delivered</li>
                    <li style="margin-bottom: 1rem;">Month 6: Strategy Presentation</li>
                    <li style="margin-bottom: 1rem;">Month 9: Software Recommendations</li>
                    <li style="margin-bottom: 1rem;">Month 12: Implementation (maybe)</li>
                    <li style="font-weight: 700; color: var(--color-navy);">Result: Perpetual Dependency.</li>
                 </ul>
              </div>
              <div class="card card-navy p-5" style="border: 1px solid var(--color-gold);">
                 <h4 style="color: var(--color-gold-light); margin-bottom: 1.5rem;">Our Sprint Path (typical larger build)</h4>
                 <ul class="intensive-includes" style="--icon-color: var(--color-gold-light); list-style: none; padding: 0;">
                    <li style="margin-bottom: 1rem; color: #fff;">Sprint start: Diagnosis + First Quick Wins Deployed</li>
                    <li style="margin-bottom: 1rem; color: #fff;">Mid-sprint: 2-3 Tailored AI Workflows Installed</li>
                    <li style="margin-bottom: 1rem; color: #fff;">Milestone: Team Trained + Documentation Delivered</li>
                    <li style="margin-bottom: 1rem; color: #fff;">Day after: Full Operational Control (No Retainer)</li>
                    <li style="font-weight: 700; color: var(--color-gold-light);">Result: Growth-Leveraged AI Ownership.</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section class="section bg-soft">
        <div class="container">
           <div class="section-header center mb-5">
              <span class="eyebrow">The Solution</span>
              <h2>What you're actually paying for</h2>
              <p class="lead">You aren't paying for a report. You are paying for a business that runs itself.</p>
           </div>
           
           <div class="grid-3 mt-5">
              <div class="text-center">
                 <div style="font-size: 2.5rem; color: var(--color-gold-dark); font-weight: 800; margin-bottom: 1rem;">40%</div>
                 <h5 style="color: var(--color-navy);">Reclaimed Capacity</h5>
                 <p class="text-sm">Of your team's operational time returned to high-level work.</p>
              </div>
              <div class="text-center">
                 <div style="font-size: 2.5rem; color: var(--color-gold-dark); font-weight: 800; margin-bottom: 1rem;">100%</div>
                 <h5 style="color: var(--color-navy);">Asset Ownership</h5>
                 <p class="text-sm">You own every agent, prompt, and SOP we build. No black boxes.</p>
              </div>
              <div class="text-center">
                 <div style="font-size: 2.5rem; color: var(--color-gold-dark); font-weight: 800; margin-bottom: 1rem;">2.5x</div>
                 <h5 style="color: var(--color-navy);">Year-One ROI</h5>
                 <p class="text-sm">Measurable return on your $24,500 implementation investment.</p>
              </div>
           </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <h2 style="color:#fff;">Ready to run the math on your business?</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width:800px; margin: 1.5rem auto;">Book a free 30-minute strategy call. We will look at your operations and tell you honestly where your biggest leaks are.</p>
          <div style="margin-top: 2.5rem;">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call</a>
          </div>
        </div>
      </section>
    </div>,
    { 
      title: 'Why $7,500/mo', 
      description: 'Understanding the ROI math behind the 90-Day AI Implementation Sprint and the cost of operational friction.',
      activeNav: 'services' 
    }
  )
})

export default why4997
