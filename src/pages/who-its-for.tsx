import { Hono } from 'hono'

const whoItsFor = new Hono()

whoItsFor.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Target Profile</span>
            <h1 style="color: #fff;">Built for owner-led service firms and the advisors who serve them.</h1>
            <p class="hero-lead">
              If you're an owner who has tried AI and stalled, or a CPA or bookkeeper looking to give clients a financial clarity edge, you're in the right place.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: YOUR PROFILE ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">The Match</span>
              <h2>Your Profile</h2>
              <ul class="feature-list mt-4">
                <li><strong>Owner-Led B2B Service Firm:</strong> Ready to modernize and scale operations.</li>
                <li><strong>Team Size:</strong> Usually 8&ndash;30 employees.</li>
                <li><strong>Owner Dependency:</strong> You are still central to sales, delivery, or approvals.</li>
                <li><strong>AI Attempted:</strong> You&rsquo;ve already bought tools or tested them, but adoption stalled.</li>
              </ul>
            </div>
            <div class="card card-navy" style="padding: 0; overflow: hidden;">
               <img src="/static/images/section-overwhelmed-owner.jpg" alt="Overwhelmed business owner" style="width: 100%; height: 240px; object-fit: cover; display: block;" />
               <div style="padding: 3rem;">
                 <h4 style="color: var(--color-gold-light);">The Stalled Reality</h4>
                 <p style="color: rgba(255,255,255,0.85);">You bought the tools. You tested prompts. Maybe you even tried a course. But real ROI hasn't materialized and the promised leverage never showed up.</p>
               </div>
            </div>
          </div>

          <div class="grid-2" style="align-items: center; gap: 4rem; margin-top: 4rem;">
            <div>
              <span class="eyebrow">The Match</span>
              <h2>CPA / Bookkeeper Profile</h2>
              <p class="mt-4">You serve SMB clients who ask about AI and financial clarity. You want a white-label tool you can put in front of clients without building it yourself. CFO Clarity Layer is your entry point.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE REAL PROBLEM ── */}
      <section class="section bg-soft">
        <div class="container text-center">
          <span class="eyebrow">The Diagnosis</span>
          <h2>Your Real Problem</h2>
          <div class="gold-line gold-line-center"></div>
          <div class="grid-2 mt-5 text-left" style="gap:4rem;">
             <div>
                <h4 class="mb-3">It&rsquo;s Not:</h4>
                <ul class="pain-list">
                   <li>That AI can't help you (it can).</li>
                   <li>That you need more tool recommendations.</li>
                   <li>That you need another "consultant" who sells theories.</li>
                </ul>
             </div>
             <div>
                <h4 class="mb-3">It Is:</h4>
                <ul class="pain-list">
                   <li>A business foundations issue (workflows, owner dependency).</li>
                   <li>Without the right foundations, <strong>AI just amplifies the noise.</strong></li>
                   <li>You need a diagnostic to find the real constraint.</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE RIGHT FIT ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">The Filter</span>
            <h2>Is it a Match?</h2>
          </div>

          <div class="fit-container">
            {/* MATCH */}
            <div class="fit-box best">
              <h3>We&rsquo;re a match if:</h3>
              <ul class="check-list-v2">
                <li>You're ready to invest time (not just money) in the solution.</li>
                <li>You want implementation, not advice.</li>
                <li>You're open to rethinking workflows, not just bolting on tools.</li>
                <li>You want to own the solution after 90 days.</li>
                <li>You're a CPA or bookkeeper interested in the CFO Clarity Layer firm license.</li>
              </ul>
            </div>

            {/* NOT A MATCH */}
            <div class="fit-box not-fit">
              <h3>We&rsquo;re not a match if:</h3>
              <ul class="fail-list">
                <li>You want a silver bullet (no such thing).</li>
                <li>You want ongoing dependency on a consultant.</li>
                <li>You're not ready to commit to 90 days of focus.</li>
                <li>You want free advice before deciding.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE NEXT STEP ── */}
      <section class="section bg-soft">
        <div class="container text-center">
          <span class="eyebrow">Clarity First</span>
          <h2>One call. One conversation. One clear answer.</h2>
          <p class="lead" style="max-width: 700px; margin: 1.5rem auto;">Book a free 30-minute strategy call. We&rsquo;ll spend 30 minutes understanding your situation, identifying if there&rsquo;s a clear constraint we can solve, and confirming this is the right fit.</p>
          <div class="mt-4">
             <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
          </div>
        </div>
      </section>
    </div>,
    { title: "Who It's For", description: "We work with owner-led B2B service firms ($1M–$5M) where AI has stalled or the owner is still the bottleneck. See if you're a fit.", activeNav: 'who' }
  )
})

export default whoItsFor
