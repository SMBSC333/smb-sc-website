import { Hono } from 'hono'

const implementationStories = new Hono()

implementationStories.get('/', (c) => {
  return c.render(
    <div>
      {/* ── HERO ── */}
      <section class="page-hero-v2 bg-navy-deep">
        <div class="container">
          <div class="hero-content-v2">
            <span class="eyebrow" style="color: var(--color-gold);">Implementation Stories</span>
            <h1 style="color: #fff;">What AI implementation actually looks like inside owner-led service firms.</h1>
            <p class="hero-lead">
              Not case studies from enterprise companies. Real outcomes from B2B service firms doing $1M&ndash;$5M who went through a structured implementation engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY 1 ── */}
      <section class="section bg-white">
        <div class="container">
          <div style="max-width: 820px; margin: 0 auto;">
            <div style="background: var(--color-bg-soft); border-left: 4px solid var(--color-gold); border-radius: 0 var(--radius-lg) var(--radius-lg) 0; padding: 2.5rem; margin-bottom: 3rem;">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Story 01 &mdash; Marketing Agency, 12 Employees</span>
              <h2 style="margin-top: 0.75rem;">From 14-hour turnaround to same-day client reports.</h2>
              <p style="color: var(--color-text-muted); font-size: 1.05rem; line-height: 1.75; margin-top: 1.5rem;">
                This agency had a reporting problem. Every Monday, the owner spent 3&ndash;4 hours manually pulling data from four platforms, formatting it, and sending client performance reports. It was an owner-dependent, undocumented workflow that only the owner knew how to run.
              </p>
              <p style="color: var(--color-text-muted); font-size: 1.05rem; line-height: 1.75;">
                The constraint was not a missing tool &mdash; they already had a reporting software subscription they weren&rsquo;t using. The constraint was that no one had designed the workflow around it. After a constraint diagnosis and a six-week build, the reporting workflow ran automatically every Sunday night. Monday morning, the owner reviewed a draft instead of building one. Total time: 20 minutes instead of 4 hours.
              </p>
              <div style="display: flex; gap: 2rem; margin-top: 2rem; flex-wrap: wrap;">
                <div style="background: #fff; border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">3.5 hrs</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">saved per week</div>
                </div>
                <div style="background: #fff; border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">Same-day</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">report delivery</div>
                </div>
                <div style="background: #fff; border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">6 weeks</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">to full deployment</div>
                </div>
              </div>
            </div>

            {/* STORY 2 */}
            <div style="background: var(--color-bg-soft); border-left: 4px solid var(--color-gold); border-radius: 0 var(--radius-lg) var(--radius-lg) 0; padding: 2.5rem; margin-bottom: 3rem;">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Story 02 &mdash; MSP, 18 Employees</span>
              <h2 style="margin-top: 0.75rem;">Owner removed from first-line client support in 90 days.</h2>
              <p style="color: var(--color-text-muted); font-size: 1.05rem; line-height: 1.75; margin-top: 1.5rem;">
                The owner of this managed services firm was receiving client escalations directly &mdash; bypassing the team entirely. It was not a technology problem. It was an owner dependency problem with no documented escalation path for the team to follow.
              </p>
              <p style="color: var(--color-text-muted); font-size: 1.05rem; line-height: 1.75;">
                Month 1 identified three workflows where the owner was the single point of failure. Month 2 built an AI-assisted triage system and documented response templates for the top 12 escalation categories. Month 3 trained the team and ran a parallel period. By day 90, first-line escalations were handled by the team 87% of the time without owner involvement.
              </p>
              <div style="display: flex; gap: 2rem; margin-top: 2rem; flex-wrap: wrap;">
                <div style="background: #fff; border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">87%</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">escalations handled without owner</div>
                </div>
                <div style="background: #fff; border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">12</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">escalation SOPs built</div>
                </div>
                <div style="background: #fff; border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">90 days</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">full implementation</div>
                </div>
              </div>
            </div>

            {/* STORY 3 */}
            <div style="background: var(--color-bg-soft); border-left: 4px solid var(--color-gold); border-radius: 0 var(--radius-lg) var(--radius-lg) 0; padding: 2.5rem;">
              <span class="eyebrow" style="color: var(--color-gold-dark);">Story 03 &mdash; Consulting Firm, 9 Employees</span>
              <h2 style="margin-top: 0.75rem;">Proposal process cut from 4 days to 6 hours.</h2>
              <p style="color: var(--color-text-muted); font-size: 1.05rem; line-height: 1.75; margin-top: 1.5rem;">
                A consulting firm&rsquo;s owner wrote every proposal personally. The process took 3&ndash;4 business days per proposal, which meant late submissions, missed opportunities, and an owner permanently in reactive mode on new business.
              </p>
              <p style="color: var(--color-text-muted); font-size: 1.05rem; line-height: 1.75;">
                The constraint was role clarity combined with missing documentation: there was no defined proposal structure, no reusable content library, and no clear ownership of the process after the owner&rsquo;s notes. After mapping the current workflow, building a structured proposal framework, and integrating AI-assisted drafting, the team could produce a complete proposal draft in under a day. The owner reviewed and approved. Time dropped from 4 days to 6 hours total.
              </p>
              <div style="display: flex; gap: 2rem; margin-top: 2rem; flex-wrap: wrap;">
                <div style="background: #fff; border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">83%</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">reduction in proposal time</div>
                </div>
                <div style="background: #fff; border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">4 days &rarr; 6 hrs</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">per proposal</div>
                </div>
                <div style="background: #fff; border-radius: var(--radius-md); padding: 1.25rem 1.5rem; flex: 1; min-width: 140px; text-align: center; border: 1px solid var(--color-bg-border);">
                  <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-navy); font-family: var(--font-heading);">Team-owned</div>
                  <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">no longer owner-dependent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUR SITUATION ── */}
      <section class="section bg-soft">
        <div class="container text-center">
          <span class="eyebrow">Your Situation</span>
          <h2 style="max-width: 680px; margin: 1rem auto;">Every constraint is diagnosable. Every implementation has a starting point.</h2>
          <div class="gold-line gold-line-center"></div>
          <p style="max-width: 620px; margin: 1.5rem auto; font-size: 1.1rem; color: var(--color-text-muted);">
            The firms in these stories started in the same place you may be in now &mdash; tools purchased, adoption stalled, owner still in the middle of everything. The difference was a structured diagnosis before the build.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
            <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book a Free Fit Call &rarr;</a>
            <a href="/growth-constraint-quiz" class="btn btn-outline btn-lg">Take the Assessment First</a>
          </div>
        </div>
      </section>
    </div>,
    {
      title: 'AI Implementation Stories',
      description: 'Real outcomes from B2B service firms that completed structured AI implementation. Agencies, MSPs, and consulting firms that cut owner dependency.',
      activeNav: 'resources'
    }
  )
})

export default implementationStories
