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
            <h1 style="color: #fff;">Operators who diagnose before they prescribe.</h1>
            <p class="hero-lead">
              SMB Strategy Consultants helps owner-led service firms identify the real constraint limiting growth, capacity, and margin — then prescribe and install the right solution to fix it.
            </p>
            <div class="hero-cta-group">
              <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER SECTION ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div class="founder-image-wrap">
              <img src="/static/images/corbin-headshot-outdoor.jpg" alt="Corbin Cook" class="img-responsive rounded shadow" />
            </div>
            <div>
              <span class="eyebrow">The Strategist</span>
              <h2>Meet Corbin Cook</h2>
              <p class="lead" style="color: var(--color-gold); font-weight: 600;">Corbin Cook helps owners move from reactive growth to structured leverage.</p>
              <div class="mt-4 mb-4" style="font-size: 1.1rem; line-height: 1.7; color: var(--color-text);">
                <p>His work sits at the intersection of financial clarity, operational diagnosis, implementation discipline, and practical AI adoption.</p>
                <p>The goal is not more advice. The goal is a better decision, the right sequence, and a business that depends less on the owner.</p>
              </div>
              <div class="cert-logos-small mt-5">
                <img src="/static/images/badge-cepa.png" alt="CEPA" style="height:48px; margin-right: 1.5rem;" />
                <img src="/static/images/badge-value-builder.png" alt="Value Builder" style="height:48px; margin-right: 1.5rem;" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Our Philosophy</span>
            <h2>Decision-First, Not Tool-First</h2>
            <p class="max-w-m">We operate based on these six principles to ensure our work creates durable leverage, not just novelty.</p>
          </div>

          <div class="values-matrix">
            <div class="value-point">
              <h4>Decision-First, Not Tool-First</h4>
            </div>
            <div class="value-point">
              <h4>Simple Over Complex</h4>
            </div>
            <div class="value-point">
              <h4>Practical AI, Not Hype</h4>
            </div>
            <div class="value-point">
              <h4>Adoption Beats Installation</h4>
            </div>
            <div class="value-point">
              <h4>Financial Logic Matters</h4>
            </div>
            <div class="value-point">
              <h4>The Right Sequence Changes Everything</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ── */}
      <section class="cta-band">
        <div class="container">
          <h2>Does your business need a systems upgrade?</h2>
          <p class="lead">Book a Strategy Call with Corbin to identify your top growth lever.</p>
          <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
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
