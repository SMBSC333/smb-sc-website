import { Hono } from 'hono'
import { marked } from 'marked'
import { raw } from 'hono/html'

const blog = new Hono()

// Import all blog posts at build time
const postFiles = import.meta.glob('../../content/posts/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>

interface PostMeta {
  title: string
  date: string
  slug: string
  description: string
  author: string
  category: string
}

function parseFrontmatter(content: string): { meta: PostMeta; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {} as PostMeta, body: content }

  const frontmatter = match[1]
  const body = match[2]
  const meta: Record<string, string> = {}

  for (const line of frontmatter.split('\n')) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    let value = line.slice(colonIdx + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    meta[key] = value
  }

  return { meta: meta as unknown as PostMeta, body }
}

function getAllPosts(): Array<{ meta: PostMeta; body: string }> {
  const posts: Array<{ meta: PostMeta; body: string }> = []

  for (const [, content] of Object.entries(postFiles)) {
    const parsed = parseFrontmatter(content)
    if (parsed.meta.title && parsed.meta.slug) {
      posts.push(parsed)
    }
  }

  // Sort by date descending
  posts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
  return posts
}

// Blog index — list all posts
blog.get('/', (c) => {
  const posts = getAllPosts()

  return c.render(
    <div>
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Insights</span>
            <h1 style="color: #fff;">Insights</h1>
            <p class="hero-lead">
              Practical strategies for owner-led service firms navigating AI, operations, and growth.
            </p>
          </div>
        </div>
      </section>

      <section class="section bg-white">
        <div class="container">
          <div class="blog-list" style="max-width: 800px; margin: 0 auto;">
            {posts.map((post) => (
              <article class="blog-card" style="margin-bottom: 3rem; padding-bottom: 3rem; border-bottom: 1px solid var(--color-bg-border);">
                <div style="margin-bottom: 0.75rem;">
                  <span style="font-size: 0.85rem; color: var(--color-text-muted);">{post.meta.date}</span>
                  {post.meta.category && (
                    <span style="font-size: 0.85rem; color: var(--color-gold-dark); margin-left: 1rem; font-weight: 600;">{post.meta.category}</span>
                  )}
                </div>
                <h2 style="margin-bottom: 0.75rem;">
                  <a href={`/blog/${post.meta.slug}`} style="color: var(--color-navy); text-decoration: none;">{post.meta.title}</a>
                </h2>
                <p style="color: var(--color-text); line-height: 1.6; margin-bottom: 1rem;">{post.meta.description}</p>
                <a href={`/blog/${post.meta.slug}`} style="color: var(--color-gold-dark); font-weight: 600; text-decoration: none;">Read more &rarr;</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>,
    { title: 'Insights', description: 'Articles on AI implementation, owner dependency, and operational leverage for service business owners.', activeNav: 'blog' }
  )
})

// Individual post page
blog.get('/:slug', (c) => {
  const slug = c.req.param('slug')
  const posts = getAllPosts()
  const post = posts.find((p) => p.meta.slug === slug)

  if (!post) {
    return c.notFound()
  }

  const htmlContent = marked.parse(post.body) as string

  return c.render(
    <div>
      <section class="page-hero bg-dark" style="padding-bottom: 3rem;">
        <div class="container" style="max-width: 800px;">
          <div style="margin-bottom: 1rem;">
            <a href="/blog" style="color: var(--color-gold); text-decoration: none; font-size: 0.9rem;">&larr; Back to Insights</a>
          </div>
          <h1 class="mb-3" style="font-size: 2.4rem; line-height: 1.2;">{post.meta.title}</h1>
          <div style="display: flex; gap: 1.5rem; align-items: center; color: rgba(255,255,255,0.7); font-size: 0.9rem;">
            <span>{post.meta.author}</span>
            <span>{post.meta.date}</span>
            {post.meta.category && <span style="color: var(--color-gold);">{post.meta.category}</span>}
          </div>
        </div>
      </section>

      <section class="section bg-white">
        <div class="container" style="max-width: 800px;">
          <div class="blog-content" style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text);">
            {raw(htmlContent)}
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section class="section bg-white" style="padding-top: 0; padding-bottom: 0;">
        <div class="container" style="max-width: 800px;">
          <div style="display: flex; align-items: center; gap: 1rem; padding: 2rem 0; border-top: 1px solid var(--color-bg-border);">            <img              src="/static/images/corbin-headshot-new.webp"              alt="Corbin Cook"              style="width: 52px; height: 52px; border-radius: 50%; object-fit: cover; object-position: top; flex-shrink: 0;"            />            <div>              <div style="font-weight: 700; color: var(--color-navy); font-size: 0.95rem; margin-bottom: 0.2rem;">Corbin Cook</div>              <div style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; max-width: 560px;">Founder of SMB Strategy Consultants. Helps owner-led service firms build AI systems that deliver measurable margin and capacity leverage in 90 days.</div>            </div>          </div>        </div>      </section>

      {/* Bottom CTA */}
      <section class="cta-band bg-navy">
        <div class="container">
          <h2>Ready to identify your primary constraint?</h2>
          <p class="lead">Book a free 30-minute strategy call. We'll walk through your operations and tell you honestly where the biggest leverage lives.</p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free 30-Minute Strategy Call</a>
        </div>
      </section>
    </div>,
    { 
      title: post.meta.title, 
      description: post.meta.description,
      activeNav: 'blog' 
    }
  )
})

export default blog
