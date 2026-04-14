import { Hono } from 'hono'

const resources = new Hono()

resources.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO SECTION ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Resource Library</span>
            <h1 style="color: #fff;">Resources for owners who want clearer decisions.</h1>
            <p class="hero-lead">
              Use these tools and insights to think more clearly about growth, capacity, AI adoption, and operational leverage.
            </p>
            <div class="hero-cta-group">
              <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED RESOURCE ── */}
      <section class="section bg-white pb-0">
        <div class="container">
          <div class="featured-start-card">
            <span class="start-badge">Start Here</span>
            <h3>AI Implementation Strategy Call</h3>
            <p>If you already tried AI and still do not have real adoption, capacity, or ROI, this is the best place to start. We'll identify the root constraint and building the right logic-path for implementation.</p>
            <div class="mt-4">
              <a href="/strategy-call" class="btn btn-primary">Schedule the Strategy Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECONDARY RESOURCES ── */}
      <section class="section bg-white pt-0">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">Support Materials</span>
            <h2>Deepen Your Thinking</h2>
          </div>

          <div class="support-resources-grid">
            {/* Quiz */}
            <div class="support-resource-item">
              <h4>Growth Constraint Quiz</h4>
              <p>Identify which of the four core pillars is holding your scalability hostage.</p>
              <a href="/growth-constraint-quiz" class="btn btn-outline btn-sm">Take the Quiz</a>
            </div>

            {/* Articles */}
            <div class="support-resource-item">
              <h4>Articles & Case Studies</h4>
              <p>Deep dives into operational logic, financial clarity, and AI implementation.</p>
              <a href="https://smbstrategyconsultants.com/blog" class="btn btn-outline btn-sm" target="_blank">Browse Library</a>
            </div>

            {/* Podcast */}
            <div class="support-resource-item">
              <h4>The PMB Podcast</h4>
              <p>Conversations with operators about the intersection of systems and growth.</p>
              <a href="https://smbstrategyconsultants.com/podcast" class="btn btn-outline btn-sm" target="_blank">Listen Now</a>
            </div>

            {/* Guides */}
            <div class="support-resource-item">
              <h4>Operating Guides</h4>
              <p>Downloadable frameworks for building a business that depends less on the owner.</p>
              <a href="#guides" class="btn btn-outline btn-sm">View Guides</a>
            </div>

            {/* Checklists */}
            <div class="support-resource-item">
              <h4>Implementation Checklists</h4>
              <p>Step-by-step checklists for auditing your finance and AI readiness.</p>
              <a href="#checklists" class="btn btn-outline btn-sm">View Checklists</a>
            </div>
          </div>

          {/* IMPORTANT LINE CALLOUT */}
          <div class="logic-callout mt-5">
            <div class="p-4 text-center">
              <p style="font-size: 1.15rem; margin-bottom: 0;">
                <strong>Start with the Strategy Call.</strong> Use the rest to deepen your thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ── */}
      <section class="cta-band">
        <div class="container">
          <h2>Ready for a guided conversation?</h2>
          <p class="lead">One constraint identified. One clear next move.</p>
          <a href="/strategy-call" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call</a>
        </div>
      </section>
    </div>,
    { 
      title: 'Resources — SMB Strategy Consultants', 
      activeNav: 'resources',
      description: 'Practical tools, insights, and diagnostic resources for small business owners building for leverage and AI adoption.'
    }
  )
})

export default resources
