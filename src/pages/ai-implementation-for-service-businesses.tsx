import { Hono } from 'hono'

const aiForServiceBusinesses = new Hono()

aiForServiceBusinesses.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Service Businesses</span>
            <h1 style="color: #fff;">AI implementation built specifically for B2B service businesses.</h1>
            <p class="hero-lead">
              AI implementation for service businesses is not the same as AI implementation for product companies or enterprise. The constraints are different. The workflows are people-driven. The owner is usually the bottleneck. Here is how we handle that.
            </p>
            <div class="hero-cta-group">
              <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free AI Leverage Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SERVICE BUSINESSES ARE DIFFERENT ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">The Difference</span>
            <h2>Why AI implementation is different for service businesses</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-2" style="gap: 2rem; max-width: 960px; margin: 0 auto;">
            <div class="card card-white p-5" style="border: 1px solid var(--color-bg-border);">
              <h4 style="color: var(--color-text-muted); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em;">Product / E-commerce</h4>
              <ul style="list-style: none; padding: 0; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
                <li style="color: var(--color-text-muted); font-size: 0.95rem; padding-left: 1rem; border-left: 3px solid var(--color-bg-border);">Workflows are largely transactional and repeatable</li>
                <li style="color: var(--color-text-muted); font-size: 0.95rem; padding-left: 1rem; border-left: 3px solid var(--color-bg-border);">AI targets SKU management, fulfillment, and ad spend</li>
                <li style="color: var(--color-text-muted); font-size: 0.95rem; padding-left: 1rem; border-left: 3px solid var(--color-bg-border);">Owner is removed from most delivery workflows</li>
                <li style="color: var(--color-text-muted); font-size: 0.95rem; padding-left: 1rem; border-left: 3px solid var(--color-bg-border);">Metrics are clean: conversion rate, AOV, LTV</li>
              </ul>
            </div>
            <div class="card card-navy p-5">
              <h4 style="color: var(--color-gold-light); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em;">Owner-Led Service Business</h4>
              <ul style="list-style: none; padding: 0; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
                <li style="color: rgba(255,255,255,0.85); font-size: 0.95rem; padding-left: 1rem; border-left: 3px solid var(--color-gold);">Workflows are judgment-heavy and often undocumented</li>
                <li style="color: rgba(255,255,255,0.85); font-size: 0.95rem; padding-left: 1rem; border-left: 3px solid var(--color-gold);">AI targets delivery, reporting, proposals, and client communication</li>
                <li style="color: rgba(255,255,255,0.85); font-size: 0.95rem; padding-left: 1rem; border-left: 3px solid var(--color-gold);">Owner is usually the single point of failure in 3&ndash;5 workflows</li>
                <li style="color: rgba(255,255,255,0.85); font-size: 0.95rem; padding-left: 1rem; border-left: 3px solid var(--color-gold);">Success metrics require definition before deployment</li>
              </ul>
            </div>
          </div>
          <div style="max-width: 720px; margin: 3rem auto 0; text-align: center;">
            <p style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
              This distinction matters because most AI playbooks are written for product companies or enterprise. When service business owners apply those frameworks, they hit walls that weren&rsquo;t anticipated &mdash; because the underlying operational model is fundamentally different.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHERE AI CREATES LEVERAGE IN SERVICE BUSINESSES ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Where It Works</span>
            <h2>The highest-leverage AI use cases for service businesses</h2>
            <div class="gold-line gold-line-center"></div>
          </div>
          <div class="grid-3" style="gap: 1.5rem;">
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Use Case 01</span>
              <h3>Client Reporting</h3>
              <p style="color: var(--color-text-muted);">Automated data pulls, formatted report drafts, and consistent delivery windows. Eliminates 3&ndash;5 hours of manual owner time per week in most firms that do regular client reporting.</p>
            </div>
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Use Case 02</span>
              <h3>Proposal Generation</h3>
              <p style="color: var(--color-text-muted);">AI-assisted proposal drafting from a structured intake. Reduces proposal cycle time from 3&ndash;5 days to under a day. Enables the team to produce without owner involvement in the draft.</p>
            </div>
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Use Case 03</span>
              <h3>Client Communication</h3>
              <p style="color: var(--color-text-muted);">Response templates, escalation triage, and first-draft communication for common client scenarios. Removes the owner from first-line responses while maintaining quality.</p>
            </div>
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Use Case 04</span>
              <h3>Onboarding Workflows</h3>
              <p style="color: var(--color-text-muted);">Automated intake, document collection, kickoff preparation, and welcome sequences. Eliminates the manual coordination that delays project starts and strains owner time.</p>
            </div>
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Use Case 05</span>
              <h3>Internal Knowledge Management</h3>
              <p style="color: var(--color-text-muted);">SOPs, process documentation, and internal Q&amp;A systems that allow the team to get answers without pulling the owner out of other work.</p>
            </div>
            <div class="card card-white p-5">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Use Case 06</span>
              <h3>Lead Follow-Up &amp; Nurture</h3>
              <p style="color: var(--color-text-muted);">AI-assisted follow-up sequences, meeting prep, and CRM update workflows. Ensures no lead falls through the gap during a busy delivery period.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE IMPLEMENT ── */}
      <section class="section bg-white">
        <div class="container">
          <div class="grid-2" style="align-items: center; gap: 4rem;">
            <div>
              <span class="eyebrow">Our Approach</span>
              <h2>We diagnose before we build.</h2>
              <p class="mt-4" style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                The most common AI implementation mistake is picking the tool before identifying the constraint. We do it the other way. Month 1 is diagnostic work. We identify the specific operational friction blocking leverage in your firm &mdash; then design the right implementation path around that finding.
              </p>
              <p style="color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.7;">
                The result is an implementation that your team can run, that you own entirely, and that delivers measurable capacity, margin, and competitive advantage.
              </p>
              <div class="mt-5">
                <a href="/services" class="btn btn-outline btn-lg" style="margin-right: 1rem;">See the Full Engagement</a>
                <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free AI Leverage Call</a>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="display: flex; gap: 1.25rem; align-items: flex-start; padding: 1.5rem; background: var(--color-bg-soft); border-radius: var(--radius-md);">
                <div style="font-family: var(--font-heading); font-weight: 700; font-size: 1.2rem; color: var(--color-gold-dark); flex-shrink: 0; width: 2rem;">1</div>
                <div>
                  <strong style="color: var(--color-navy);">Month 1 &mdash; Diagnose</strong>
                  <p style="color: var(--color-text-muted); margin: 0.25rem 0 0; font-size: 0.95rem;">Workflow audit, constraint identification, quick-win implementation</p>
                </div>
              </div>
              <div style="display: flex; gap: 1.25rem; align-items: flex-start; padding: 1.5rem; background: var(--color-bg-soft); border-radius: var(--radius-md);">
                <div style="font-family: var(--font-heading); font-weight: 700; font-size: 1.2rem; color: var(--color-gold-dark); flex-shrink: 0; width: 2rem;">2</div>
                <div>
                  <strong style="color: var(--color-navy);">Month 2 &mdash; Build</strong>
                  <p style="color: var(--color-text-muted); margin: 0.25rem 0 0; font-size: 0.95rem;">Custom AI workflows, integrations, SOPs, and testing with your team</p>
                </div>
              </div>
              <div style="display: flex; gap: 1.25rem; align-items: flex-start; padding: 1.5rem; background: var(--color-bg-soft); border-radius: var(--radius-md);">
                <div style="font-family: var(--font-heading); font-weight: 700; font-size: 1.2rem; color: var(--color-gold-dark); flex-shrink: 0; width: 2rem;">3</div>
                <div>
                  <strong style="color: var(--color-navy);">Month 3 &mdash; Hand Off</strong>
                  <p style="color: var(--color-text-muted); margin: 0.25rem 0 0; font-size: 0.95rem;">Team training, documentation package, 30-day post-launch support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="section bg-navy-deep">
        <div class="container text-center">
          <h2 style="color: #fff; max-width: 680px; margin: 0 auto;">Find out if your service business is ready for a structured AI implementation.</h2>
          <p style="color: rgba(255,255,255,0.75); max-width: 580px; margin: 1.5rem auto; font-size: 1.1rem;">
            20-minute fit call. We review your current state and tell you plainly whether the engagement is a fit.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free AI Leverage Call &rarr;</a>
            <a href="/growth-constraint-quiz" class="btn btn-ghost-light btn-lg">Take the Assessment First</a>
          </div>
        </div>
      </section>
    </div>,
    {
      title: 'AI Implementation for Service Businesses',
      description: 'AI implementation designed for owner-led B2B service firms. We diagnose workflow constraints, reduce owner dependency, and build systems your team runs.',
      activeNav: 'services'
    }
  )
})

export default aiForServiceBusinesses
