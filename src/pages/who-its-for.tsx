import { Hono } from 'hono'

const whoItsFor = new Hono()

whoItsFor.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO SECTION ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Target Profile</span>
            <h1 style="color: #fff;">Built for owner-led B2B service firms where AI has already been tried — but leverage never showed up.</h1>
            <p class="hero-lead">
              We work best with businesses that already have a team, already use software, and already attempted AI in some form, but still feel too much running through the owner.
            </p>
            <div class="hero-cta-group">
              <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FIT COMPARISON ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">The Filter</span>
            <h2>Is your business the right fit for this engagement?</h2>
          </div>

          <div class="fit-container">
            {/* BEST FIT */}
            <div class="fit-box best">
              <h3>Best Fit</h3>
              <ul class="check-list-v2">
                <li>$1M–$5M in annual revenue</li>
                <li>Usually 8–30+ employees</li>
                <li>Founder still central to sales, delivery, approvals, or decisions</li>
                <li>Team-based service delivery</li>
                <li>AI already attempted</li>
                <li>Capacity, margin, or execution still feel strained</li>
                <li>Too many tools, too little adoption</li>
                <li>Need leverage, not more clutter</li>
              </ul>
            </div>

            {/* NOT A FIT */}
            <div class="fit-box not-fit">
              <h3>Not the right fit if</h3>
              <ul class="fail-list">
                <li>You are only AI-curious</li>
                <li>You want generic AI education</li>
                <li>You want software recommendations without diagnosis</li>
                <li>You are too early-stage for structured implementation</li>
                <li>You want inspiration instead of operational clarity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY MATRIX ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Industries</span>
            <h2>Established Expertise in Specialized Service Firms</h2>
          </div>

          <div class="industry-grid">
            <div class="industry-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><path d="M7 2v20"></path><path d="M17 2v20"></path><path d="M2 12h20"></path><path d="M2 7h5"></path><path d="M2 17h5"></path><path d="M17 17h5"></path><path d="M17 7h5"></path></svg>
              <span>Agencies</span>
            </div>
            <div class="industry-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              <span>Consultancies</span>
            </div>
            <div class="industry-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="16" y1="11" x2="22" y2="11"></line></svg>
              <span>Recruiting / Staffing</span>
            </div>
            <div class="industry-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>Accounting / Bookkeeping</span>
            </div>
            <div class="industry-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
              <span>MSPs / IT Services</span>
            </div>
            <div class="industry-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span>Outsourced Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section class="cta-band">
        <div class="container">
          <h2>Does this sound like your business?</h2>
          <p class="lead">If you meet these criteria, we should talk. Total clarity in 45 minutes.</p>
          <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
        </div>
      </section>
    </div>,
    { title: "Who It's For", activeNav: 'who' }
  )
})

export default whoItsFor
