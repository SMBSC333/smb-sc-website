import { Hono } from 'hono'

const implementationStories = new Hono()

implementationStories.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">What Actually Happened</span>
            <h1 style="color: #fff;">The constraint is always findable.<br/>Here's what changes when it's found.</h1>
            <p class="hero-lead">
              Not enterprise case studies. Real outcomes from owner-led service firms — the exact kind where AI usually stalls — after going through a structured constraint diagnosis and implementation.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTEXT STRIP ── */}
      <section class="section-sm bg-white">
        <div class="container" style="max-width:800px; margin:0 auto; text-align:center;">
          <p style="font-size:1.05rem; line-height:1.8; color:var(--color-text-muted);">
            Each story below started the same way: an owner who had already tried AI, spent money on tools or implementation, and gotten either temporary results or none. The constraint was upstream from where the tools were deployed. Once it was found, the tools started working.
          </p>
        </div>
      </section>

      {/* ── STORIES ── */}
      <section class="section bg-soft">
        <div class="container">
          <div style="max-width: 820px; margin: 0 auto; display:flex; flex-direction:column; gap:3rem;">

            <div style="background: #fff; border-left: 4px solid var(--color-gold); border-radius: 0 var(--radius-lg) var(--radius-lg) 0; padding: 2.5rem; box-shadow: var(--shadow-sm);">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Story 01 — Marketing Agency, 12 Employees</span>
              <h2 style="margin-top: 0.75rem; font-size:1.65rem;">From 14-hour turnaround to same-day client reports.</h2>
              <p style="color: var(--color-text); font-size: 1.05rem; line-height: 1.8; margin-top: 1.5rem;">
                This agency had a reporting problem. Every Monday, the owner spent 3–4 hours manually pulling data from four platforms, formatting it, and sending client performance reports. It was an owner-dependent, undocumented workflow that only the owner knew how to run.
              </p>
              <p style="color: var(--color-text); font-size: 1.05rem; line-height: 1.8; margin-top:1rem;">
                The constraint was not a missing tool — they already had a reporting software subscription they weren't using. The constraint was that no one had designed the workflow around it. After a constraint diagnosis and a six-week build, the reporting workflow ran automatically every Sunday night. Monday morning, the owner reviewed a draft instead of building one. Total time: 20 minutes instead of 4 hours.
              </p>
              <div style="display: flex; gap: 2rem; margin-top: 2rem; flex-wrap: wrap;">
                <div style="background: var(--color-bg-soft); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">3.5 hrs</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">saved per week</div>
                </div>
                <div style="background: var(--color-bg-soft); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">Same-day</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">report delivery</div>
                </div>
                <div style="background: var(--color-bg-soft); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">6 weeks</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">to full deployment</div>
                </div>
              </div>
            </div>

            <div style="background: #fff; border-left: 4px solid var(--color-gold); border-radius: 0 var(--radius-lg) var(--radius-lg) 0; padding: 2.5rem; box-shadow: var(--shadow-sm);">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Story 02 — MSP, 18 Employees</span>
              <h2 style="margin-top: 0.75rem; font-size:1.65rem;">Owner removed from first-line client support in 90 days.</h2>
              <p style="color: var(--color-text); font-size: 1.05rem; line-height: 1.8; margin-top: 1.5rem;">
                The owner of this managed services firm was receiving client escalations directly — bypassing the team entirely. It was not a technology problem. It was an owner dependency problem with no documented escalation path for the team to follow.
              </p>
              <p style="color: var(--color-text); font-size: 1.05rem; line-height: 1.8; margin-top:1rem;">
                Month 1 identified three workflows where the owner was the single point of failure. Month 2 built an AI-assisted triage system and documented response templates for the top 12 escalation categories. Month 3 trained the team and ran a parallel period. By day 90, first-line escalations were handled by the team 87% of the time without owner involvement.
              </p>
              <div style="display: flex; gap: 2rem; margin-top: 2rem; flex-wrap: wrap;">
                <div style="background: var(--color-bg-soft); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">87%</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">escalations handled without owner</div>
                </div>
                <div style="background: var(--color-bg-soft); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">12</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">escalation SOPs built</div>
                </div>
                <div style="background: var(--color-bg-soft); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">90 days</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">full implementation</div>
                </div>
              </div>
            </div>

            <div style="background: #fff; border-left: 4px solid var(--color-gold); border-radius: 0 var(--radius-lg) var(--radius-lg) 0; padding: 2.5rem; box-shadow: var(--shadow-sm);">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Story 03 — Consulting Firm, 7 Employees</span>
              <h2 style="margin-top: 0.75rem; font-size:1.65rem;">Three failed AI tools. One undocumented step. Everything started working.</h2>
              <p style="color: var(--color-text); font-size: 1.05rem; line-height: 1.8; margin-top: 1.5rem;">
                This seven-person consulting firm had tried three AI implementations over 18 months. $14,000 spent. Every tool was legitimate. Every setup was correct. Adoption stalled every time.
              </p>
              <p style="color: var(--color-text); font-size: 1.05rem; line-height: 1.8; margin-top:1rem;">
                The constraint was a single judgment call in their client intake — undocumented, owned entirely by the founder, invisible to any downstream system. Once that step was documented and built into a structured intake flow, all three tools started working. The owner went from 58 to 40 hours a week within 60 days. Nothing else changed.
              </p>
              <p style="font-size:0.9rem; color:var(--color-text-muted); font-style:italic; margin-top:1rem;">The constraint was never the tool. It was one undocumented step the founder had never written down.</p>
              <div style="display: flex; gap: 2rem; margin-top: 2rem; flex-wrap: wrap;">
                <div style="background: var(--color-bg-soft); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">58 to 40</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">owner hours per week</div>
                </div>
                <div style="background: var(--color-bg-soft); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">3 tools</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">started working after the fix</div>
                </div>
                <div style="background: var(--color-bg-soft); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">1 step</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">was the entire constraint</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="cta-band bg-navy section-lg">
        <div class="container text-center">
          <span class="eyebrow" style="color:var(--color-gold);">Your Story</span>
          <h2 style="color:#fff;">The pattern is consistent. The constraint is findable.</h2>
          <p class="lead" style="color:rgba(255,255,255,0.8); max-width:640px; margin:1.5rem auto 2.5rem;">
            Every story above started with a 30-minute diagnostic call. That's where the constraint gets found. Everything else follows from there.
          </p>
          <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book Your Free Diagnostic Call &rarr;</a>
        </div>
      </section>

    </div>,
    {
      title: 'Implementation Stories',
      description: 'Real AI implementation outcomes from owner-led service firms. The constraint is always findable. Here is what changed when it was found.',
      activeNav: ''
    }
  )
})

export default implementationStories
