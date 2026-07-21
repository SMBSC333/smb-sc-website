import { Hono } from 'hono'

const financialClarityIntensive = new Hono()

financialClarityIntensive.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Focused Sprint</span>
            <h1 style="color: #fff;">You're making decisions on numbers that are already 3 weeks old.</h1>
            <p class="hero-lead">
              The Financial Clarity Intensive is AI Leverage applied to your numbers — a real-time financial layer deployed in weeks, not months. You stop running your business on monthly P&amp;L reports and start making decisions on current data.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free AI Leverage Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CONSTRAINT ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">The Constraint</span>
              <h2>Revenue is growing. Margin isn't keeping up.</h2>
              <div class="gold-line mb-4"></div>
              <p style="font-size:1.05rem; line-height:1.8; color:var(--color-text);">
                Most scaling service businesses have a visibility problem — not a sales problem. You're generating revenue. You're delivering. But you can't tell with confidence which service lines are profitable, which clients are worth keeping, or where the margin is leaking.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                The Financial Clarity Intensive fixes the data layer first — before anything else gets optimized. You can't fix what you can't see. And you can't make confident decisions on numbers that are always three weeks behind.
              </p>
            </div>
            <div class="card card-navy p-5">
              <h4 style="color: var(--color-gold-light); margin-bottom: 1.5rem;">Symptom check — if any of these are true, this is for you</h4>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color: rgba(255,255,255,0.85);">You hit revenue targets but bank balances stay flat.</li>
                <li style="color: rgba(255,255,255,0.85);">You're afraid to raise prices because you don't know your true margins.</li>
                <li style="color: rgba(255,255,255,0.85);">Cash flow feels like a roller coaster despite consistent sales.</li>
                <li style="color: rgba(255,255,255,0.85);">Decisions are based on monthly reports that are always 3–4 weeks behind.</li>
                <li style="color: rgba(255,255,255,0.85);">You don't know which service line or client is actually carrying the business.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT GETS BUILT ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">What Gets Built</span>
            <h2>The financial layer that runs automatically</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3" style="gap: 2rem;">
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">01</span>
              <h4>Unit Economics Audit</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">We break down the cost-to-deliver for every service line and client type. You see exactly where margin is being made and where it's being lost — with specifics, not ranges.</p>
            </div>
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">02</span>
              <h4>Cash Flow Architecture</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">We map your cash conversion cycle — billing timing, collection delays, vendor payment patterns — and identify the specific structural issues creating cash flow volatility.</p>
            </div>
            <div class="card card-white p-5">
              <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--color-gold-dark); display:block; margin-bottom:1rem;">03</span>
              <h4>Real-Time Financial Dashboard</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:0.75rem;">Connected directly to your QuickBooks. The numbers your business actually needs — revenue, margin, cash position, leading indicators — updated automatically, not monthly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOME ── */}
      <section class="section bg-navy-deep">
        <div class="container">
          <div class="grid-2" style="gap: 4rem; align-items: center;">
            <div>
              <span class="eyebrow" style="color:var(--color-gold);">The Outcome</span>
              <h2 style="color:#fff; margin-top:0.75rem;">You leave with a running financial clarity system — not a report.</h2>
              <p style="color:rgba(255,255,255,0.8); font-size:1.05rem; line-height:1.8; margin-top:1.5rem;">
                This is not a one-time analysis. By the end of the intensive, you have a deployed, automated financial layer that pulls from your books in real time and surfaces the specific numbers that drive your decisions.
              </p>
              <p style="color:rgba(255,255,255,0.8); font-size:1.05rem; line-height:1.8; margin-top:1rem;">
                You own it. Your team can use it. You stop building monthly reports by hand and start reviewing a live dashboard every morning.
              </p>
              <div class="mt-5">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Book Your Free AI Leverage Call</a>
              </div>
            </div>
            <div>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color:rgba(255,255,255,0.85);">Margin analysis by service line and client type</li>
                <li style="color:rgba(255,255,255,0.85);">Cash flow cycle mapped and restructured</li>
                <li style="color:rgba(255,255,255,0.85);">Real-time QBO-connected dashboard deployed</li>
                <li style="color:rgba(255,255,255,0.85);">5 key financial indicators tracked automatically</li>
                <li style="color:rgba(255,255,255,0.85);">Documentation and team onboarding included</li>
                <li style="color:rgba(255,255,255,0.85);">30-day live support after deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-soft">
        <div class="container text-center">
          <h2>One diagnostic call confirms the constraint and the fit.</h2>
          <p class="lead" style="max-width:640px; margin:1.5rem auto;">30 minutes. We look at your current financial infrastructure and tell you honestly whether this intensive is the right first move.</p>
          <div class="mt-4">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free AI Leverage Call</a>
          </div>
        </div>
      </section>

    </div>,
    {
      title: 'Financial Clarity Intensive',
      description: 'Stop making business decisions on 3-week-old data. Deploy a real-time financial clarity layer in weeks. Unit economics, cash flow, and live QBO dashboard.',
      activeNav: 'services'
    }
  )
})

export default financialClarityIntensive
