import { Hono } from 'hono'

const aiLeveragePoints = new Hono()

aiLeveragePoints.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO SECTION ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2 text-center" style="max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
            <span class="eyebrow" style="color: var(--color-gold);">Real Leverage Points</span>
            <h1 style="color: #fff;">AI doesn't fix everything. It fixes the one thing actually holding your team back.</h1>
            <p class="hero-lead" style="color: rgba(255,255,255,0.85);">
              Every business has a different constraint. Here's where we've found real leverage — industry by industry. This isn't the full playbook. It's enough to start thinking about where it applies to you.
            </p>
            <div class="hero-cta-group mt-5">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY LEVERAGE POINTS ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">How This Shows Up, Industry by Industry</span>
            <h2>The constraint is never the same twice</h2>
            <div class="gold-line gold-line-center"></div>
            <p class="lead">A sample of where we've found real leverage. Your business likely has one nobody outside your four walls has noticed yet — that's what the diagnostic call is for.</p>
          </div>

          <div class="grid-3 mt-5" style="gap: 2rem;">
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.15rem;">HVAC Contractors</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The bottleneck:</strong> drive time and slow quoting cap how many jobs a crew can run.</p>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The leverage:</strong> automated dispatch and routing cuts drive time 25–35% — the same crew runs 2–3 more jobs a week.</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.15rem;">Electrical Contractors</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The bottleneck:</strong> takeoffs and estimating eat 4–8 hours per bid.</p>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The leverage:</strong> AI-assisted estimating gets bids out same-day instead of three days later.</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.15rem;">Plumbing Contractors</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The bottleneck:</strong> the highest-ticket emergency calls go to whoever answers first.</p>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The leverage:</strong> 24/7 AI call answering and booking captures the midnight and weekend calls competitors miss.</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.15rem;">Marketing &amp; Creative Agencies</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The bottleneck:</strong> client reporting eats 6–10 hours per client, every month.</p>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The leverage:</strong> automated reporting pulls the data, writes the narrative, and formats the deck without a human touching it.</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.15rem;">IT Consulting &amp; MSPs</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The bottleneck:</strong> senior techs get buried in routine, repeatable tickets.</p>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The leverage:</strong> AI-powered L1 ticket automation resolves 40–60% of tickets without a human, freeing techs for billable work.</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.15rem;">Accounting Firms &amp; CPAs</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The bottleneck:</strong> partners spend real time just chasing clients for missing documents.</p>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The leverage:</strong> automated document requests and follow-up cut that chase time by roughly 80%.</p>
            </div>
            <div class="card card-accent d-flex flex-column">
              <h4 class="mb-2" style="font-size: 1.15rem;">Law Firms</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The bottleneck:</strong> legal research and contract review consume associate hours on predictable work.</p>
              <p style="font-size:0.9rem; color:var(--color-text-muted);"><strong>The leverage:</strong> AI-assisted research and redlining cut review time 50–80% on standard agreement types.</p>
            </div>
          </div>

          <div class="text-center mt-5">
            <p style="font-style: italic; color: var(--color-text-muted);">This is a sample, not the full list. The diagnostic call is where we find yours.</p>
          </div>
        </div>
      </section>

      {/* ── THE SPEED FACTOR ── */}
      <section class="section bg-soft">
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
      <section class="section bg-white">
        <div class="container">
           <div class="section-header center mb-5">
              <span class="eyebrow">The Solution</span>
              <h2>What you're actually paying for</h2>
              <p class="lead">You aren't paying for a report. You are paying for a business that runs itself.</p>
           </div>

           <div class="grid-3 mt-5">
              <div class="text-center">
                 <h5 style="color: var(--color-navy);">Capacity Reclaimed</h5>
                 <p class="text-sm">Real hours back for your team every week — redeployed to revenue work, not admin.</p>
              </div>
              <div class="text-center">
                 <h5 style="color: var(--color-navy);">100% Asset Ownership</h5>
                 <p class="text-sm">You own every agent, prompt, and SOP we build. No black boxes.</p>
              </div>
              <div class="text-center">
                 <h5 style="color: var(--color-navy);">Industry-Calibrated</h5>
                 <p class="text-sm">Built around the constraint actually slowing your team down — not a generic AI playbook.</p>
              </div>
           </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <h2 style="color:#fff;">Ready to find your constraint?</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width:800px; margin: 1.5rem auto;">Book a free 30-minute strategy call. We will look at your operations and tell you honestly where your biggest leverage point is.</p>
          <div style="margin-top: 2.5rem;">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call</a>
          </div>
        </div>
      </section>
    </div>,
    { 
      title: 'AI Leverage Points by Industry', 
      description: 'Where AI actually moves the needle, industry by industry — and how SMB Strategy Consultants finds the one constraint holding your team back.',
      activeNav: 'services' 
    }
  )
})

export default aiLeveragePoints
