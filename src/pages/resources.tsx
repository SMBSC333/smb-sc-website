import { Hono } from 'hono'

const resources = new Hono()

const blogPosts = [
  { title: 'Mastering Management Succession: A Guide to Effective Succession Planning', date: 'May 28, 2025', slug: 'mastering-management-succession-a-guide-to-effective-succession-planning', category: 'Exit Planning' },
  { title: "Mastering Excel's Profit Percentage Formula: A Comprehensive Guide", date: 'May 7, 2025', slug: 'mastering-excels-profit-percentage-formula-a-comprehensive-guide', category: 'Financial' },
  { title: 'Maximizing Bank Efficiency: Pro Strategies for Lowering Ratios', date: 'Apr 30, 2025', slug: 'maximizing-bank-efficiency-pro-strategies-for-lowering-ratios', category: 'Financial' },
  { title: 'Mastering Efficiency Ratios: A Comprehensive Guide to Maximize Business Performance', date: 'Apr 23, 2025', slug: 'mastering-efficiency-ratios-a-comprehensive-guide-to-maximize-business-performance', category: 'Financial' },
  { title: 'Ultimate Guide to Profitability Ratios: Definitions, Types and Insights', date: 'Apr 16, 2025', slug: 'ultimate-guide-to-profitability-ratios-definitions-types-insights', category: 'Financial' },
  { title: 'Mastering Profitability Analysis: A Step-by-Step Guide', date: 'Apr 9, 2025', slug: 'mastering-profitability-analysis-a-step-by-step-guide', category: 'Financial' },
  { title: 'Mastering Operating Cash Flow: From Basics to Financial Modeling', date: 'Apr 2, 2025', slug: 'mastering-operating-cash-flow-from-basics-to-financial-modeling', category: 'Cash Flow' },
  { title: 'Mastering Cash Flow Statements: An Essential Guide for Financial Success', date: 'Mar 26, 2025', slug: 'mastering-cash-flow-statements-an-essential-guide-for-financial-success', category: 'Cash Flow' },
  { title: 'The Ultimate Guide to Mastering Cash Flow Projection', date: 'Mar 12, 2025', slug: 'the-ultimate-guide-to-mastering-cash-flow-projection', category: 'Cash Flow' },
  { title: 'Demystifying the Operating Cash Flow Ratio: A Comprehensive Guide', date: 'Mar 5, 2025', slug: 'demystifying-the-operating-cash-flow-ratio-a-comprehensive-guide', category: 'Cash Flow' },
  { title: '11 Essential Google Sheets Templates to Transform Your Budgeting in 2025', date: 'Feb 26, 2025', slug: '11-essential-google-sheets-templates-to-transform-your-budgeting-in-2025', category: 'Tools' },
  { title: 'Everything You Need to Know About Business Exit Strategies', date: 'Feb 2025', slug: 'everything-you-need-to-know-about-business-exit-strategies', category: 'Exit Planning' },
]

const ebooks = [
  { title: "The Owner's Metric", desc: 'The numbers that matter most to the owner — not the accountant.', slug: 'the-owners-metric-ebook-download' },
  { title: 'The Freedom Point', desc: 'Calculate the business value needed to fund your ideal exit lifestyle.', slug: 'the-freedom-point-ebook-download' },
  { title: 'The Exit Checklist', desc: '21 things to do before you sell your business.', slug: 'the-exit-checklist-ebook-download' },
  { title: 'The Definitive Guide to SOPs', desc: 'Build the systems that let the business run without you.', slug: 'the-definitive-guide-to-sops-ebook-download' },
  { title: 'The 4 Degrees of Delegation', desc: 'A framework for getting out of the weeds and into the work that matters.', slug: 'the-4-degrees-of-delegation' },
  { title: 'The Overlooked Owner', desc: "Why the owner is usually the last person the business serves — and how to fix it.", slug: 'the-overlooked-owner' },
  { title: "The Rainmaker's Dilemma", desc: 'What to do when the business cannot grow because you are too good at selling.', slug: 'the-rainmakers-dilemma-ebook-download' },
  { title: 'Productize Your Service', desc: 'Turn what you do into something scalable, saleable, and systematized.', slug: 'productize-your-service-ebook-download' },
  { title: '8 Ways to Re-Invent Yourself in a Crisis', desc: 'Practical pivots for when the business model needs to change fast.', slug: '8-ways-to-re-invent-yourself-in-crisis-ebook-download' },
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
                <a href={`https://smbstrategyconsultants.com/${book.slug}`} class="btn btn-ghost btn-sm mt-3" target="_blank" rel="noopener">Download Free</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PMB Podcast */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <div>
              <span class="eyebrow">The PMB Podcast</span>
              <h2>Profit. Marketing. Business.</h2>
              <div class="gold-line"></div>
              <p>Conversations with business owners and advisors on the topics that actually move the needle — cash flow, exit planning, AI integration, team capacity, and the psychology of building a business worth owning.</p>
              <a href="https://smbstrategyconsultants.com/pmb-podcast" class="btn btn-outline mt-3" target="_blank" rel="noopener">Listen to the PMB Podcast</a>
            </div>
            <div class="highlight-box">
              <h4 class="mb-3">Topics We Cover</h4>
              <ul class="intensive-includes">
                <li>Cash flow management and financial clarity</li>
                <li>Exit planning and business valuation</li>
                <li>Practical AI integration for service businesses</li>
                <li>Team capacity and delegation frameworks</li>
                <li>Owner psychology and leadership development</li>
                <li>Growth strategy and market positioning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Builder Resources */}
      <section class="section bg-surface">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">Value Builder Resources</span>
              <h2>Tools specifically for exit readiness and business valuation.</h2>
              <div class="gold-line"></div>
              <p>The Value Builder System is the data-driven foundation for every exit planning and long-term value conversation. These tools give you the baseline — and the gap to close.</p>
              <a href="/value-builder-score-questionnaire" class="btn btn-outline mt-3">Take the Value Builder Assessment</a>
            </div>
            <div>
              <ul class="pain-list">
                <li><strong>Value Builder Score</strong> — Score your business across 8 key drivers. Know where you stand and what to improve.</li>
                <li><strong>Freedom Score</strong> — Calculate the exit value needed to fund your ideal post-exit lifestyle.</li>
                <li><strong>PREScore</strong> — Assess your personal readiness for exit. Are you emotionally and structurally prepared?</li>
                <li><strong>Value Builder Resources Hub</strong> — Tools, templates, and frameworks for building a more valuable business.</li>
              </ul>
            </div>
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
            {blogPosts.slice(0, 9).map(post => (
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
