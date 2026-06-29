import { Hono } from 'hono'

const resources = new Hono()

resources.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO SECTION ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container text-center">
          <div class="hero-content-v2" style="max-width: 800px; margin: 0 auto;">
            <span class="eyebrow" style="color: var(--color-gold);">Authority & Tools</span>
            <h1 style="color: #fff;">Foundations for Growth-Leveraged AI.</h1>
            <p class="hero-lead" style="color: rgba(255,255,255,0.85);">
              Use these tools to identify your friction points and start building the systems that keep you ahead of the competition.
            </p>
            <div class="hero-cta-group mt-5">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIMARY GUIDE ── */}
      <section class="section bg-white pb-0">
        <div class="container">
          <div class="featured-start-card" style="background: var(--color-bg-soft); padding: 4rem; border-radius: var(--radius-xl); border: 1px solid var(--color-bg-border);">
            <div class="grid-2" style="align-items: center; gap: 4rem;">
               <div>
                  <span class="eyebrow">Featured Guide</span>
                  <h3>The Hidden Cost of Manual Workflows</h3>
                  <p class="lead">Most owner-led service firms are losing an average of $37,000 per year to operational friction they can&rsquo;t see. This guide breaks down the seven most common leaks and how to plug them with AI foundations.</p>
                  <div class="mt-4">
                     <a href="/ai-implementation-checklist" class="btn btn-navy">Read the Implementation Checklist</a>
                  </div>
               </div>
               <div style="background: var(--color-navy-deep); height: 300px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center;">
                  <span style="color: var(--color-gold-light); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">Guide Preview</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL TOOLS ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Self-Assessment</span>
            <h2>Identify Your Constraint</h2>
          </div>

          <div class="grid-3 mt-5">
            {/* Quiz */}
            <div class="card card-white">
              <h4 style="color: var(--color-navy);">Growth Constraint Quiz</h4>
              <p class="text-sm">Identify which of the four core pillars (Team, Data, Process, or Owner) is holding your scalability hostage.</p>
              <a href="/growth-constraint-quiz" class="btn btn-outline btn-sm mt-3">Take the Quiz</a>
            </div>

            {/* Checklist */}
            <div class="card card-white">
              <h4 style="color: var(--color-navy);">AI Readiness Checklist</h4>
              <p class="text-sm">A step-by-step technical audit of your current data cleanliness and tech stack before you deploy AI.</p>
              <a href="/ai-readiness-assessment" class="btn btn-outline btn-sm mt-3">Take the Assessment</a>
            </div>

            {/* Case Studies */}
            <div class="card card-white">
              <h4 style="color: var(--color-navy);">Implementation Stories</h4>
              <p class="text-sm">How other B2B service firms reclaimed 40% capacity through the 90-Day Implementation Sprint.</p>
              <a href="/implementation-stories" class="btn btn-outline btn-sm mt-3">Read Stories</a>
            </div>
          </div>

          {/* IMPORTANT LINE CALLOUT */}
          <div class="logic-callout mt-6 bg-navy-deep text-white p-5 text-center" style="border-radius: var(--radius-lg);">
             <p style="font-size: 1.25rem; margin-bottom: 0;">
                <strong>Do not build on messy foundations.</strong> Start with the Free 30-Min Strategy Call to find the right sequence for your business.
             </p>
             <div class="mt-4">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Schedule the Free 30-Min Strategy Call</a>
             </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ── */}
      <section class="cta-band">
        <div class="container">
          <h2>Ready to move from theory to implementation?</h2>
          <p class="lead">One constraint identified. One clear next move.</p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call</a>
        </div>
      </section>
    </div>,
    { 
      title: 'Resources', 
      activeNav: 'resources',
      description: 'Practical tools, insights, and diagnostic resources for small business owners building for leverage and AI adoption.'
    }
  )
})

export default resources
