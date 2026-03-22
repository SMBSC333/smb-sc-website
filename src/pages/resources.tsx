import { Hono } from 'hono'

const resources = new Hono()

// CMS Data structure (Placeholders - these would eventually be dynamic)
const blogPosts = [
  { 
    title: 'Mastering Management Succession: A Guide to Effective Succession Planning', 
    date: 'May 28, 2025', 
    slug: 'mastering-management-succession-a-guide-to-effective-succession-planning', 
    category: 'Exit Planning' 
  }
]

const ebooks = [
  { 
    title: "The Owner's Metric", 
    desc: 'The numbers that matter most to the owner — not the accountant.', 
    slug: 'the-owners-metric' 
  }
]

resources.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <span class="eyebrow">Resources</span>
          <h1>Practical tools and insights for business owners building with intention.</h1>
          <p class="lead">Free diagnostic tools, downloadable guides, the PMB Podcast, and a library of articles on financial management, exit planning, AI adoption, and growth strategy.</p>
        </div>
      </section>

      {/* Free Tools */}
      <section class="section bg-dark">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Free Diagnostic Tools</span>
            <h2>Start with clarity. All tools are free.</h2>
          </div>
          <div class="grid-3">
            <div class="card card-accent">
              <span class="intensive-tag">Free</span>
              <h4 class="mb-2">Growth Constraint Quiz</h4>
              <p style="font-size:0.88rem;">Answer 8 questions about your business and identify which of the four pillars is most likely holding your growth hostage. Three minutes. Clear output.</p>
              <a href="/growth-constraint-quiz" class="btn btn-outline btn-sm mt-3">Take the Quiz</a>
            </div>
            <div class="card card-accent">
              <span class="intensive-tag">Free</span>
              <h4 class="mb-2">AI Readiness Assessment</h4>
              <p style="font-size:0.88rem;">Score your current operations against AI opportunity areas. Identify your highest-leverage AI workflow before investing time or money in implementation.</p>
              <a href="/ai-assessment" class="btn btn-outline btn-sm mt-3">Take the Assessment</a>
            </div>
            <div class="card card-accent">
              <span class="intensive-tag">Free Session</span>
              <h4 class="mb-2">Growth Diagnostic</h4>
              <p style="font-size:0.88rem;">A guided working session — not a pitch call — to identify the constraint holding the most growth hostage. You leave with a 30–90 day focus plan.</p>
              <a href="/growth-diagnostic" class="btn btn-primary btn-sm mt-3">Book the Diagnostic</a>
            </div>
          </div>
        </div>
      </section>

      {/* eBook Library */}
      <section class="section bg-surface">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">Free Downloads</span>
            <h2>The resource library.</h2>
            <p>Practical guides written for business owners, not academics.</p>
          </div>
          <div class="grid-3">
            {ebooks.map(book => (
              <div class="card" key={book.slug}>
                <h4 class="mb-2">{book.title}</h4>
                <p style="font-size:0.85rem; color:var(--color-text-muted);">{book.desc}</p>
                <a href={`https://smbstrategyconsultants.com/${book.slug}-ebook-download`} class="btn btn-ghost btn-sm mt-3" target="_blank" rel="noopener">Download Free</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section class="section bg-dark">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">From the Blog</span>
            <h2>Recent articles.</h2>
          </div>
          <div class="grid-3">
            {blogPosts.map(post => (
              <a href={`https://smbstrategyconsultants.com/${post.slug}`} key={post.slug} target="_blank" rel="noopener" style="text-decoration:none;">
                <div class="card" style="height:100%;">
                  <span class="tag mb-2" style="display:inline-block;">{post.category}</span>
                  <h4 style="font-size:0.95rem; margin-bottom:0.5rem; line-height:1.4;">{post.title}</h4>
                  <p style="font-size:0.8rem; color:var(--color-text-muted); margin:0;">{post.date}</p>
                </div>
              </a>
            ))}
          </div>
          <div class="text-center mt-4">
            <a href="https://smbstrategyconsultants.com/blog" class="btn btn-ghost" target="_blank" rel="noopener">View All Articles</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-band">
        <div class="container">
          <span class="eyebrow" style="display:block; text-align:center; margin-bottom:1rem;">Ready for a guided conversation?</span>
          <h2>The Growth Diagnostic is the best next step.</h2>
          <p class="lead">Free. Live. One constraint identified. One clear next move.</p>
          <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Book the Free Growth Diagnostic</a>
        </div>
      </section>
    </div>,
    { title: 'Resources — Tools, Guides, and Insights', activeNav: 'resources' }
  )
})

export default resources
