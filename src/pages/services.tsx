import { Hono } from 'hono'

const services = new Hono()

services.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">What We Do — Specifically</span>
            <h1 style="color: #fff;">Not advice. Not a playbook.<br/>A working system in 90 days.</h1>
            <p class="hero-lead">
              We diagnose the specific constraint blocking AI from working in your business. Then we build the implementation around it — workflows, tools, documentation, team training. At the end of 90 days, you own it and we step back.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
              <a href="/how-it-works" class="btn btn-ghost-light btn-lg">See How It Works</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 1: AI IMPLEMENTATION ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="split-section">
            <div class="split-content">
              <span class="eyebrow">Core Engagement</span>
              <h2>AI Implementation Sprint</h2>
              <p class="lead" style="color:var(--color-gold-dark); margin:1rem 0;">For owner-led service firms where AI has stalled — or hasn't been tried the right way yet.</p>
              <p style="font-size:1.05rem; line-height:1.8; color:var(--color-text);">
                This is a full 90-day implementation engagement. Three phases: diagnose the constraint, build the solution, hand off ownership. We don't leave you with a strategy deck. We leave you with a running system.
              </p>
              <ul class="feature-list mt-4">
                <li><strong>Month 1 — Diagnostic:</strong> Live constraint assessment. We identify the specific workflow, dependency, or sequencing issue that caused past failures.</li>
                <li><strong>Month 2 — Build:</strong> Custom workflows, automations, integrations, and SOPs built to your actual business — not a generic template.</li>
                <li><strong>Month 3 — Hand-Off:</strong> Team training, documentation, and 30-day live support. You own the system. We step back.</li>
              </ul>
              <div class="mt-5">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Start With a Free Diagnostic Call</a>
              </div>
            </div>
            <div style="display:flex; flex-direction:column; gap:1.5rem;">
              <div class="card card-navy p-5">
                <h4 style="color:var(--color-gold-light); margin-bottom:1rem;">What you get at the end</h4>
                <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                  <li style="color:rgba(255,255,255,0.85);">Owner working hours reduced — specific number, not a promise.</li>
                  <li style="color:rgba(255,255,255,0.85);">Documented workflows your team runs without you.</li>
                  <li style="color:rgba(255,255,255,0.85);">AI integrations that are actually adopted — not just set up.</li>
                  <li style="color:rgba(255,255,255,0.85);">SOPs your team can train new hires from without you in the room.</li>
                  <li style="color:rgba(255,255,255,0.85);">2.5x year-one ROI as the baseline target.</li>
                </ul>
              </div>
              <div class="card card-accent p-4">
                <p style="font-size:0.85rem; line-height:1.7; color:var(--color-text-muted); margin:0;">
                  <strong>Who this is for:</strong> Owner-led B2B service firms, $500K–$3M revenue, 5–30 employees, where you are still the primary bottleneck in delivery, sales, or approvals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 2: CFO CLARITY ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="split-section reversed">
            <div style="display:flex; flex-direction:column; gap:1.5rem;">
              <div class="card card-navy p-5">
                <h4 style="color:var(--color-gold-light); margin-bottom:1rem;">What CPAs and bookkeepers get</h4>
                <ul class="intensive-includes" style="--icon-color: var(--color-gold-light);">
                  <li style="color:rgba(255,255,255,0.85);">White-label financial clarity tool to put in front of SMB clients.</li>
                  <li style="color:rgba(255,255,255,0.85);">Automated financial dashboards — no manual report building.</li>
                  <li style="color:rgba(255,255,255,0.85);">Real-time data from QBO, no monthly reconciliation lag.</li>
                  <li style="color:rgba(255,255,255,0.85);">Differentiator that positions you as the advisory firm — not just the compliance firm.</li>
                </ul>
              </div>
            </div>
            <div class="split-content">
              <span class="eyebrow">Financial Clarity</span>
              <h2>CFO Clarity Layer</h2>
              <p class="lead" style="color:var(--color-gold-dark); margin:1rem 0;">For SMB owners who are always running on stale numbers — and for the CPAs and bookkeepers who want to give clients a better tool.</p>
              <p style="font-size:1.05rem; line-height:1.8; color:var(--color-text);">
                Most owner-led service firms make decisions on P&amp;L data that's 2–4 weeks behind. By the time you see it, the situation has already moved. The CFO Clarity Layer connects directly to your books and gives you real-time financial signal — not a monthly report you have to interpret.
              </p>
              <p style="font-size:1.05rem; line-height:1.8; color:var(--color-text); margin-top:1rem;">
                For CPAs and bookkeepers: this is a white-label tool you can put in front of your SMB clients without building it yourself. It becomes the thing that makes you the advisory firm — not just the compliance firm.
              </p>
              <div class="mt-5">
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary">Talk About the CFO Clarity Layer</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTENSIVES ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-6">
            <span class="eyebrow">Focused Sprints</span>
            <h2>Intensive engagements for one specific problem</h2>
            <div class="gold-line gold-line-center"></div>
            <p class="lead mt-4" style="max-width:700px; margin:0 auto;">Not every business needs a full 90-day implementation. If you have a single high-cost constraint that needs to move now, an intensive gets you there in weeks, not months.</p>
          </div>
          <div class="grid-4" style="gap:2rem;">
            <div class="card card-white p-5" style="border-top:3px solid var(--color-gold);">
              <h4 class="mb-2">Financial Clarity Intensive</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); line-height:1.7;">Real-time financial dashboard deployed in weeks. Stop making decisions on stale data.</p>
              <a href="/financial-clarity-intensive" style="display:block; margin-top:1.5rem; color:var(--color-gold-dark); font-weight:600; font-size:0.9rem;">See details &rarr;</a>
            </div>
            <div class="card card-white p-5" style="border-top:3px solid var(--color-gold);">
              <h4 class="mb-2">Growth Systems Intensive</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); line-height:1.7;">Build a repeatable, AI-assisted lead-to-close workflow. Stop losing deals to slower follow-up.</p>
              <a href="/growth-systems-intensive" style="display:block; margin-top:1.5rem; color:var(--color-gold-dark); font-weight:600; font-size:0.9rem;">See details &rarr;</a>
            </div>
            <div class="card card-white p-5" style="border-top:3px solid var(--color-gold);">
              <h4 class="mb-2">Owner Dependency Intensive</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); line-height:1.7;">Remove yourself as the bottleneck. Document the judgment calls only you currently make.</p>
              <a href="/owner-dependency-intensive" style="display:block; margin-top:1.5rem; color:var(--color-gold-dark); font-weight:600; font-size:0.9rem;">See details &rarr;</a>
            </div>
            <div class="card card-white p-5" style="border-top:3px solid var(--color-gold);">
              <h4 class="mb-2">AI Operations Intensive</h4>
              <p style="font-size:0.9rem; color:var(--color-text-muted); line-height:1.7;">Three AI workflows deployed and adopted in 30 days. Specific to your business — not a template.</p>
              <a href="/ai-operations-intensive" style="display:block; margin-top:1.5rem; color:var(--color-gold-dark); font-weight:600; font-size:0.9rem;">See details &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAILURE STAKES ── */}
      <section class="section bg-navy-deep">
        <div class="container text-center">
          <span class="eyebrow" style="color:var(--color-gold);">The Cost of Waiting</span>
          <h2 style="color:#fff; max-width:700px; margin:0 auto 1.5rem;">Every month the constraint stays unfixed is a month you're paying for it.</h2>
          <p style="color:rgba(255,255,255,0.75); max-width:660px; margin:0 auto 2rem; font-size:1.05rem; line-height:1.75;">
            Unworked leads, manual reporting hours, scheduling friction, stale financial decisions — it adds up to $32K–$61K a year in recoverable friction. The diagnostic call is free. The math usually makes the decision obvious.
          </p>
          <div style="display:flex; gap:3rem; justify-content:center; flex-wrap:wrap; margin-bottom:2.5rem;">
            <div style="text-align:center;">
              <div style="font-size:2rem; font-weight:700; color:var(--color-gold);">$37K</div>
              <div style="font-size:0.8rem; color:rgba(255,255,255,0.5); margin-top:0.3rem;">average annual friction cost<br/>in owner-led service firms</div>
            </div>
            <div style="width:1px; background:rgba(255,255,255,0.15);"></div>
            <div style="text-align:center;">
              <div style="font-size:2rem; font-weight:700; color:var(--color-gold);">2.5x</div>
              <div style="font-size:0.8rem; color:rgba(255,255,255,0.5); margin-top:0.3rem;">year-one ROI target<br/>on implementation investment</div>
            </div>
            <div style="width:1px; background:rgba(255,255,255,0.15);"></div>
            <div style="text-align:center;">
              <div style="font-size:2rem; font-weight:700; color:var(--color-gold);">90 days</div>
              <div style="font-size:0.8rem; color:rgba(255,255,255,0.5); margin-top:0.3rem;">to a working system<br/>your team owns</div>
            </div>
          </div>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Strategy Call &rarr;</a>
        </div>
      </section>

    </div>,
    {
      title: 'Services',
      description: 'AI implementation, financial clarity, and focused intensives for owner-led service firms. Diagnosis first. Working system in 90 days. You own it when we leave.',
      activeNav: 'services'
    }
  )
})

export default services
