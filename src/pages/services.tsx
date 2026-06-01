import { Hono } from 'hono'

const services = new Hono()

services.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO SECTION ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">One Integrated Offer</span>
            <h1 style="color: #fff;">The 90-Day AI Implementation Sprint</h1>
            <p class="hero-lead">
              One integrated offer. Three phases. Complete hand-off. We build the foundations for Growth-Leveraged AI.
            </p>
            <div class="hero-actions" style="margin-top:2.5rem; display: flex; gap: 1rem; align-items: center;">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free 20-Min Fit Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Scope</span>
            <h2>What&rsquo;s Included in the Sprint</h2>
            <div class="gold-line gold-line-center"></div>
          </div>

          <div class="grid-3">
            
            {/* PHASE 1: DIAGNOSTIC */}
            <div class="card card-white p-5 border-light">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Month 01</span>
              <h3>Diagnostic Phase</h3>
              <ul class="intensive-includes mb-4" style="list-style: none; padding: 0;">
                <li>Current-state workflow audit</li>
                <li>Team readiness assessment</li>
                <li>Constraint identification (top 1-3 friction points)</li>
                <li>Quick-win implementation (1-3 immediate ROI wins)</li>
                <li>Month 2-3 roadmap and scope definition</li>
              </ul>
            </div>

            {/* PHASE 2: BUILD */}
            <div class="card card-white p-5 border-light">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Month 02</span>
              <h3>Build Phase</h3>
              <ul class="intensive-includes mb-4" style="list-style: none; padding: 0;">
                <li>Workflow design (2-3 tailored AI processes)</li>
                <li>Custom Internal Solutions: Building tools to solve specific agitation where standard software fails</li>
                <li>System integration and setup</li>
                <li>Testing with your team</li>
                <li>SOP documentation for every workflow</li>
                <li>Implementation support and troubleshooting</li>
              </ul>
            </div>

            {/* PHASE 3: HAND-OFF */}
            <div class="card card-white p-5 border-light">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Month 03</span>
              <h3>Hand-Off Phase</h3>
              <ul class="intensive-includes mb-4" style="list-style: none; padding: 0;">
                <li>Comprehensive team training</li>
                <li>Complete operating documentation package</li>
                <li>Full SOPs, checklists, and playbooks</li>
                <li>30-day post-launch support window</li>
                <li>One final optimization pass</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── THE VALUE LADDER ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="mt-2" style="max-width: 800px; margin-left: auto; margin-right: auto;">
            <div class="section-header center mb-4">
              <span class="eyebrow">The Path to Scale</span>
              <h2>The Value Ladder</h2>
              <p>We build in sequences. Each step installs a new layer of capacity and leverage.</p>
            </div>
            
            <div class="ladder" style="border: 1px solid var(--color-bg-border); border-radius: var(--radius-lg); overflow: hidden; background: #fff;">
              <div class="ls" style="display: flex; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--color-bg-border);">
                <div style="font-family: var(--font-heading); font-size: 0.8rem; font-weight: 700; color: var(--color-text-muted); width: 40px;">00</div>
                <div style="flex: 1; font-weight: 600; color: var(--color-navy);">Free 20-Min Fit Call</div>
                <div style="font-weight: 700; color: var(--color-gold-dark);">Free</div>
              </div>
              <div class="ls" style="display: flex; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--color-bg-border);">
                <div style="font-family: var(--font-heading); font-size: 0.8rem; font-weight: 700; color: var(--color-text-muted); width: 40px;">01</div>
                <div style="flex: 1; font-weight: 600; color: var(--color-navy);">AI Constraint Diagnostic Report</div>
                <div style="font-weight: 700; color: var(--color-navy);">$1,497</div>
              </div>
              <div class="ls hl" style="display: flex; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--color-bg-border); background: var(--color-bg-soft);">
                <div style="font-family: var(--font-heading); font-size: 0.8rem; font-weight: 700; color: var(--color-gold-dark); width: 40px;">02</div>
                <div style="flex: 1; font-weight: 700; color: var(--color-navy);">90-Day AI Implementation Sprint <span class="intensive-tag" style="margin-left: 0.5rem; margin-bottom: 0;">Primary</span></div>
                <div style="font-weight: 700; color: var(--color-navy);">$4,997/mo &times; 3</div>
              </div>
              <div class="ls" style="display: flex; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--color-bg-border);">
                <div style="font-family: var(--font-heading); font-size: 0.8rem; font-weight: 700; color: var(--color-text-muted); width: 40px;">03</div>
                <div style="flex: 1; font-weight: 600; color: var(--color-navy);">AI Systems Retainer</div>
                <div style="font-weight: 700; color: var(--color-navy);">$3,497/mo</div>
              </div>
              <div class="ls" style="display: flex; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--color-bg-border);">
                <div style="font-family: var(--font-heading); font-size: 0.8rem; font-weight: 700; color: var(--color-text-muted); width: 40px;">04</div>
                <div style="flex: 1; font-weight: 600; color: var(--color-navy);">Full AI Transformation Project</div>
                <div style="font-weight: 700; color: var(--color-navy);">$28K&ndash;$65K</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU OWN ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">The Result</span>
              <h2>What You Own After 90 Days</h2>
              <div class="gold-line"></div>
              <p class="lead">We don't sell retainers that stretch for years. We deliver implementation and hand you the keys.</p>
              <ul class="feature-list mt-4">
                <li><strong>Operating systems</strong> that run without us in the loop.</li>
                <li><strong>Team trained and confident</strong> on new AI-enabled workflows.</li>
                <li><strong>Full documentation</strong> for every process we install.</li>
                <li><strong>Measurable baseline improvement</strong> in margin or capacity.</li>
                <li><strong>The knowledge</strong> to evolve the system yourself.</li>
              </ul>
            </div>
            <div class="card card-navy" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
               <div style="padding: 3rem; flex-grow: 1;">
                 <h3 style="color: #fff; margin-bottom: 1.5rem;">Implementation, not advice.</h3>
                 <p style="color: rgba(255,255,255,0.8); margin-bottom: 2rem;">Most consultants sell theories. We build systems. By day 90, your business is operationally competitive and ahead of the competition.</p>
                 <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-block text-center" style="width:100%;">Book a Free 20-Min Fit Call</a>
               </div>
               <img src="/static/images/intensive-ai-operations.png" alt="AI Operations Visualization" style="width: 100%; height: 300px; object-fit: cover; display: block;" />
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT ── */}
      <section class="section bg-soft">
        <div class="container text-center">
          <span class="eyebrow">Investment</span>
          <h2>Clear Pricing. High ROI.</h2>
          <div class="gold-line gold-line-center"></div>
          <p class="lead" style="max-width: 700px; margin: 0 auto 2rem;">
            Investment is determined by the scope of the solution recommended after the Strategy Call. 
          </p>
          <div class="mt-4 mb-5">
             <p style="color: var(--color-text-muted); font-size: 0.95rem;">
                Looking for the ROI breakdown? <a href="/why-4997" style="color: var(--color-gold-dark); font-weight: 600; text-decoration: underline;">See the ROI math behind our standard $4,997/mo pricing &rarr;</a>
             </p>
          </div>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free 20-Min Fit Call for Custom Scope</a>
        </div>
      </section>

      {/* ── FINAL CTA BAND ── */}
      <section class="cta-band bg-navy">
        <div class="container">
          <h2>Ready to identify the real blocker?</h2>
          <p class="lead">Book a free 20-minute fit call. We will look at your operations and tell you honestly where your biggest leaks are.</p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free 20-Min Fit Call</a>
        </div>
      </section>
    </div>,
    { 
      title: "The 90-Day AI Implementation Sprint — SMB Strategy Consultants", 
      description: "One integrated offer. Three phases. Complete hand-off. Build the foundations for Growth-Leveraged AI in 90 days.",
      activeNav: 'services' 
    }
  )
})

export default services
