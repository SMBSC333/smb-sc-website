import { Hono } from 'hono'

const prebuiltAiTools = new Hono()

prebuiltAiTools.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Prebuilt AI-Infused Tools</span>
            <h1 style="color: #fff;">We don't just consult on AI leverage.<br/>We build it — and use it ourselves.</h1>
            <p class="hero-lead">
              These are our most developed tools — built in-house, live, and running today. Not client projects, not mockups. A look at the kind of system you get when the constraint gets diagnosed and the build actually ships.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free AI Leverage Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOL 1: PROFIT ENGINE SCORECARD ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="split-section">
            <div class="split-content">
              <span class="eyebrow">Economic Intelligence</span>
              <h2>The Profit Engine Scorecard</h2>
              <p class="lead" style="color:var(--color-gold-dark); margin:1rem 0;">Your business has an economic check engine light. Most owners never look at it.</p>
              <p style="font-size:1.05rem; line-height:1.8; color:var(--color-text);">
                Every business operates in economic and operational conditions that are either working for it or against it. The Scorecard reads 35 macro indicators — NFIB, FRED, ISM, NY Fed — and outputs one clear signal: Green, Yellow, or Red. Yellow or red isn't a stop sign. It's a signal that tells you exactly where to focus so effort produces leverage instead of friction.
              </p>
              <ul class="feature-list mt-4">
                <li><strong>Real-time conditions:</strong> 35 macro indicators updated every quarter — not last year's data.</li>
                <li><strong>One signal, no guessing:</strong> Green, yellow, or red per dimension of your business environment.</li>
                <li><strong>Know the next move:</strong> Tells you where to focus so effort produces leverage, not friction.</li>
              </ul>
              <a href="https://smb-engine-light-ab7bf77b.viktor.space" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg mt-4">Check My Engine Light &rarr;</a>
            </div>
            <div class="split-img-container">
              <img src="/static/images/check-engine-icon-transparent.png" alt="Profit Engine Scorecard" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOL 2: REX SECURITY ADVISOR ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="split-section reversed">
            <div class="split-img-container">
              <div class="card card-navy p-5" style="text-align:center;">
                <div class="card-icon" style="color:var(--color-gold-light); margin:0 auto 1.5rem;"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                <h4 style="color:#fff;">Rex Security Advisor</h4>
                <p style="color:rgba(255,255,255,0.7); margin-top:0.75rem;">Free adversarial security scan for AI-built codebases</p>
              </div>
            </div>
            <div class="split-content">
              <span class="eyebrow">AI Code Security</span>
              <h2>Rex Security Advisor</h2>
              <p class="lead" style="color:var(--color-gold-dark); margin:1rem 0;">If a tool built your app, something should be checking its work.</p>
              <p style="font-size:1.05rem; line-height:1.8; color:var(--color-text);">
                A lot of businesses are shipping apps built with Cursor, Claude, or other AI coding tools — fast, but often with security gaps nobody checked for. Rex runs static analysis (Semgrep, Bandit, dependency audits) plus an adversarial review pass, then hands back a report formatted so you can paste it straight into your AI coding tool and have it execute the fixes.
              </p>
              <ul class="feature-list mt-4">
                <li><strong>Free scan:</strong> Upload a zip or point it at a GitHub URL.</li>
                <li><strong>Built for AI builders:</strong> Findings formatted to paste directly into Cursor, Claude, or Devin.</li>
                <li><strong>Real static analysis:</strong> Semgrep, Bandit, and dependency audits, not a surface-level checklist.</li>
              </ul>
              <a href="https://rexappsecurity.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg mt-4">Scan Your Codebase &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOL 3: AI INDUSTRY REPORT ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="split-section">
            <div class="split-content">
              <span class="eyebrow">AI Leverage by Industry</span>
              <h2>The AI Leverage Report</h2>
              <p class="lead" style="color:var(--color-gold-dark); margin:1rem 0;">A personalized leverage report, built in a two-minute conversation.</p>
              <p style="font-size:1.05rem; line-height:1.8; color:var(--color-text);">
                Talk to Shelby, our AI Strategy Advisor, about what your business does. She'll ask real questions, look at what you actually do, and put together a free report on where AI is creating leverage in your specific industry — competitors deploying it, where the efficiency gains are, and where it's worth your attention.
              </p>
              <ul class="feature-list mt-4">
                <li><strong>Built for your industry:</strong> Not a generic AI overview — specific to what you do.</li>
                <li><strong>No form to fill out:</strong> A real conversation, not an intake questionnaire.</li>
                <li><strong>Delivered in minutes:</strong> Straight to your inbox.</li>
              </ul>
              <a href="https://smbaibuilder.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg mt-4">Get Your Free AI Leverage Report &rarr;</a>
            </div>
            <div class="split-img-container">
              <img src="/static/images/leverage-gears.jpg" alt="AI Leverage Report" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <span class="eyebrow" style="color:var(--color-gold);">Like What You See</span>
          <h2 style="color:#fff; max-width:780px; margin:0 auto 1.5rem;">These are the tools. The real leverage is in what we build specifically for you.</h2>
          <p class="lead" style="color:rgba(255,255,255,0.85); max-width:720px; margin:0 auto 2.5rem;">
            Every one of these started with a straightforward conversation about the business first. 30 minutes and we'll do the same for yours.
          </p>
          <div class="hero-actions" style="justify-content:center; margin-top:1.5rem;">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free AI Leverage Call &rarr;</a>
          </div>
        </div>
      </section>

    </div>,
    {
      title: 'Prebuilt AI-Infused Tools',
      description: 'Live, in-house AI tools built by SMB Strategy Consultants — the Profit Engine Scorecard, Rex Security Advisor, and the AI Leverage Report. Not client projects. See the kind of system you get when the build actually ships.',
      activeNav: 'tools'
    }
  )
})

export default prebuiltAiTools
