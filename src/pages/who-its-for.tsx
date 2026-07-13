import { Hono } from 'hono'

const whoItsFor = new Hono()

whoItsFor.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Is This You?</span>
            <h1 style="color: #fff;">We work with a specific kind of owner.<br/>Here's how to know if that's you.</h1>
            <p class="hero-lead">
              This isn't for every business. It's for owner-led service firms where AI has already been tried and stalled — or where the owner is still the bottleneck and knows it. If that's you, this page will feel like it was written directly about your situation.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE OWNER PROFILE ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: start; gap: 4rem;">
            <div>
              <span class="eyebrow">Profile 1</span>
              <h2>The Owner Who Already Tried</h2>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1.5rem; color:var(--color-text);">
                You've already bought something. ChatGPT, Zapier, an AI CRM, a scheduling tool, a content automation platform. You probably had a moment where it looked like it was going to work.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                Then adoption stalled. The team went back to the old way. You absorbed the failure privately — wondering if you did something wrong, or if AI is just overhyped at your scale.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                <strong>You didn't do anything wrong.</strong> The failure wasn't the tool. It was a constraint one level upstream — a workflow that was never documented, a judgment call only you make, a handoff that required your presence every time. AI can't cross that gap. It has to be fixed first.
              </p>
              <ul class="feature-list mt-4">
                <li>Owner-led B2B service firm</li>
                <li>Owner still central to delivery, sales, or approvals</li>
                <li>Already spent money on AI tools or implementation</li>
                <li>Adoption stalled or results were temporary</li>
                <li>Ready to understand what actually went wrong and fix it</li>
              </ul>
            </div>
            <div class="card card-navy" style="padding: 0; overflow: hidden;">
              <img src="/static/images/section-overwhelmed-owner.jpg" alt="Owner who has tried AI" style="width: 100%; height: 240px; object-fit: cover; display: block;" />
              <div style="padding: 2.5rem;">
                <h4 style="color: var(--color-gold-light);">What this owner is feeling</h4>
                <p style="color: rgba(255,255,255,0.8); margin-top:1rem; font-size:0.95rem; line-height:1.75;">Frustrated. Skeptical of new tools. Tired of being told AI will change everything. Privately wondering if they're just not sophisticated enough to make it work. And still working 55+ hours a week on things that should be running without them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CPA / BOOKKEEPER PROFILE ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="grid-2" style="align-items: start; gap: 4rem;">
            <div class="card card-white p-5">
              <h4 class="mb-3" style="color:var(--color-gold-dark);">The tool CPAs and bookkeepers have been waiting for</h4>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted);">Your SMB clients ask about AI. They ask about financial clarity. They want to know why they're always making decisions on numbers that are 3 weeks old.</p>
              <p style="font-size:0.95rem; line-height:1.75; color:var(--color-text-muted); margin-top:1rem;">The CFO Clarity Layer is a white-label financial tool you can put in front of them — without building it yourself. Real-time QBO data. Automated reporting. The thing that positions you as the advisory firm, not just the compliance firm.</p>
            </div>
            <div>
              <span class="eyebrow">Profile 2</span>
              <h2>The CPA or Bookkeeper</h2>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1.5rem; color:var(--color-text);">
                Your SMB clients are running their businesses on monthly P&amp;L reports that are always 3–4 weeks behind. They're making decisions blind. They know it. You know it. But building a real-time financial clarity tool isn't your job.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; margin-top:1rem; color:var(--color-text);">
                The CFO Clarity Layer is built for exactly this situation. You put it in front of your clients under your brand. They get real-time financial signal. You become the firm that gave them something no one else did.
              </p>
              <div class="mt-4">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Talk About the CPA License</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIT / NOT A FIT ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Honest Assessment</span>
            <h2>Are we a fit?</h2>
          </div>
          <div class="fit-container">
            <div class="fit-box best">
              <h3>We're a match if:</h3>
              <ul class="check-list-v2">
                <li>You want implementation — something built — not advice and a playbook</li>
                <li>You're willing to invest focused work, not just money — larger builds run in 90-day sprints</li>
                <li>You're open to rethinking how workflows are structured, not just layering tools on top</li>
                <li>You want to own the system when we're done — not be dependent on a consultant to run it</li>
                <li>You're a CPA or bookkeeper who wants a white-label financial clarity tool for SMB clients</li>
              </ul>
            </div>
            <div class="fit-box not-fit">
              <h3>We're not a match if:</h3>
              <ul class="fail-list">
                <li>You want a guaranteed outcome without committing to the diagnostic process</li>
                <li>You're not willing to let us look at how the business actually runs — not just the surface level</li>
                <li>You want ongoing consulting dependency rather than ownership of the result</li>
                <li>You believe the problem is just the tools — and you're not open to looking at the workflow underneath</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-soft">
        <div class="container text-center">
          <span class="eyebrow">If You Saw Yourself Above</span>
          <h2>One call confirms the fit and finds the constraint.</h2>
          <p class="lead" style="max-width:680px; margin:1.5rem auto;">30 minutes. We review your current state, identify the specific constraint, and give you one clear next move. You leave with clarity regardless of whether we work together.</p>
          <div class="mt-5">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
          </div>
        </div>
      </section>

    </div>,
    {
      title: "Who It's For",
      description: "We work with owner-led service firms where AI has already stalled and the owner is still the bottleneck. Also CPAs and bookkeepers looking for a white-label financial clarity tool.",
      activeNav: 'who'
    }
  )
})

export default whoItsFor
