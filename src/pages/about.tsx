import { Hono } from 'hono'

const about = new Hono()

about.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">The Firm</span>
            <h1 style="color: #fff;">We don't start with software.<br/>We start with the constraint.</h1>
            <p class="hero-lead">
              SMB Strategy Consultants exists for one specific kind of business — owner-led service firms where AI has already been tried and still hasn't produced traction. We find what's actually blocking it. Then we fix it.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE STRATEGIST ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div class="founder-image-wrap">
              <img src="/static/images/corbin-headshot-outdoor.jpg" alt="Corbin Cook, SMB Strategy Consultants" class="img-responsive rounded shadow" />
            </div>
            <div>
              <span class="eyebrow">The Strategist</span>
              <h2>Meet Corbin Cook</h2>
              <p class="lead" style="color: var(--color-gold); font-weight: 600; margin-top:1rem;">CFO clarity. Operations depth. AI implementation that actually sticks.</p>
              <div class="mt-4 mb-4" style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text);">
                <p>Corbin spent years as a Fractional CFO for owner-led service firms — the kind where the owner is still in every decision, margins are tighter than they should be, and every new tool gets tried once and abandoned.</p>
                <p class="mt-3">He didn't just see the financial side. He saw the workflow side, the team-readiness side, and the broken handoff between strategy and execution that makes every AI implementation eventually fail.</p>
                <p class="mt-3">That's why the work here starts with a diagnostic, not a tool recommendation. <strong>A prescription without a diagnosis is malpractice.</strong> Every engagement starts by finding the specific constraint that's blocking leverage in your specific business.</p>
              </div>
              <div class="cert-logos-small mt-5" style="display: flex; align-items: center; gap: 1.5rem;">
                <img src="/static/images/badge-cepa.png" alt="CEPA" style="height:48px;" />
                <img src="/static/images/badge-aasbc.png" alt="AASBC" style="height:48px;" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="grid-2" style="align-items: start; gap: 4rem;">
            <div>
              <span class="eyebrow">The Philosophy</span>
              <h2>Why the diagnosis comes first</h2>
              <div class="mt-4" style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text);">
                <p><strong>The pattern:</strong> Owner tries AI. Adoption stalls. Owner assumes the problem is their team or the tool. They try again. The same thing happens.</p>
                <p class="mt-3">The actual failure is almost always upstream — a workflow with an undocumented judgment call, an owner approval that AI can't pass through, a handoff that depends on institutional knowledge no one wrote down. The tool hits the constraint and stops working.</p>
                <p class="mt-3"><strong>Our method:</strong> Find the specific constraint. Build the right solution in the right sequence. Hand you ownership in 90 days. You leave with a working system — not a strategy deck and a recurring consulting bill.</p>
                <p class="mt-3"><strong>Our commitment:</strong> We build it, document it, and train your team on it. After 90 days, the system runs without us. That's the only outcome we call a success.</p>
              </div>
            </div>
            <div class="card card-navy p-5">
              <h3 style="color: #fff; margin-bottom: 1.5rem;">What we measure success by</h3>
              <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                <li style="color: rgba(255,255,255,0.85);">Owner hours reduced — specifically and measurably.</li>
                <li style="color: rgba(255,255,255,0.85);">Workflows that run without an owner approval at every step.</li>
                <li style="color: rgba(255,255,255,0.85);">A team that knows exactly what to do without asking.</li>
                <li style="color: rgba(255,255,255,0.85);">Documentation your business can evolve from — not dependent on us.</li>
                <li style="color: rgba(255,255,255,0.85);">A financial clarity layer that runs automatically, not manually.</li>
                <li style="color: rgba(255,255,255,0.85);">2.5x year-one ROI as the baseline — not the ceiling.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section class="section bg-white">
        <div class="container text-center">
          <span class="eyebrow">Right Fit</span>
          <h2>We work with a specific kind of owner</h2>
          <div class="gold-line gold-line-center"></div>
          <p class="lead mt-4" style="max-width:680px; margin:0 auto 3rem;">Not every service business is a fit. The ones who get the most from this work share a few things in common.</p>
          <div class="grid-4 mt-5">
            <div class="card card-white">
              <h4 style="color:var(--color-gold-dark);">Already tried AI</h4>
              <p class="text-sm">You've bought tools or hired help. The result was partial, temporary, or zero. You want to understand why before spending more.</p>
            </div>
            <div class="card card-white">
              <h4 style="color:var(--color-gold-dark);">Still the bottleneck</h4>
              <p class="text-sm">Approvals, judgment calls, and exceptions still run through you. The business doesn't run well without you in the room.</p>
            </div>
            <div class="card card-white">
              <h4 style="color:var(--color-gold-dark);">Owner-led service firm</h4>
              <p class="text-sm">Professional services, consulting, trades, healthcare — businesses where your knowledge is the product.</p>
            </div>
            <div class="card card-white">
              <h4 style="color:var(--color-gold-dark);">Ready to build</h4>
              <p class="text-sm">You're not looking for a strategy session. You want an implementation that ends with your team running the system — not a slide deck.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section class="cta-band">
        <div class="container">
          <h2>The diagnostic call is free. The clarity is real.</h2>
          <p class="lead">30 minutes. We identify the specific constraint. You leave with a clear next move — whether or not we work together.</p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call</a>
        </div>
      </section>

    </div>,
    {
      title: 'About',
      description: 'Meet Corbin Cook. We start with the constraint — not the tool. Owner-led service firms that have tried AI and stalled find the real blocker and a working 90-day implementation.',
      activeNav: 'about'
    }
  )
})

export default about
