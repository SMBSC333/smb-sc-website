import { Hono } from 'hono'

const virtualStaffing = new Hono()

virtualStaffing.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <div class="breadcrumb">
            <a href="/">Home</a><span class="breadcrumb-sep">/</span><span>Virtual Staffing</span>
          </div>
          <span class="eyebrow">Managed Remote Workforce Solutions</span>
          <h1>Scale your team without scaling your payroll.</h1>
          <p class="lead">SMB Strategy Consultants helps small business owners design smart delegation frameworks, then delivers qualified remote team members — managed and trained to your standard — through our Philippine-based delivery partner.</p>
          <a href="/growth-diagnostic" class="btn btn-primary mt-4">Start the Conversation</a>
        </div>
      </section>

      {/* What It Is / What It Is Not */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">What This Actually Is</span>
              <h2>This is not a staffing agency. It is a workforce strategy.</h2>
              <div class="gold-line"></div>
              <p>Most virtual staffing companies sell you a warm body and a monthly invoice. We take a different approach. Before any remote team member is placed, we work with you to design the role, document the process, and build the delegation framework that makes the hire actually work.</p>
              <p>The remote staff are delivered and managed through our vetted Philippine-based delivery partner. We serve as the consulting advisor and customer success owner — responsible for onboarding, training oversight, and ongoing accountability. You get the leverage without the overhead of managing another employment relationship.</p>
              <p>Clients are not buying cheap labor. They are buying relief, leverage, and a leadership system that scales.</p>
            </div>
            <div>
              <div class="card card-accent mb-3">
                <h4 class="mb-1">What We Sell</h4>
                <ul class="intensive-includes" style="margin-top:0.75rem;">
                  <li>Workforce strategy and delegation design</li>
                  <li>Role clarity and accountability framework</li>
                  <li>Remote team leadership training</li>
                  <li>Process documentation and SOP development</li>
                  <li>Ongoing customer success and performance oversight</li>
                </ul>
              </div>
              <div class="card card-accent">
                <h4 class="mb-1">What We Do Not Sell</h4>
                <ul class="intensive-includes" style="margin-top:0.75rem;">
                  <li>Labor placement or employment services</li>
                  <li>Payroll administration or HR compliance</li>
                  <li>Unmanaged freelancers or contractor marketplaces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section class="section bg-surface">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Common Use Cases</span>
            <h2>Where remote team members create the most leverage.</h2>
            <p>The highest-value applications are the repetitive, time-consuming tasks that pull your domestic team away from relationship-critical work.</p>
          </div>
          <div class="grid-3">
            <div class="card card-accent">
              <h4 class="mb-2">Back-Office Operations</h4>
              <p style="font-size:0.88rem;">Data entry, scheduling, reporting, inbox management, and administrative tasks that keep your domestic team buried in the weeds. These are the roles where remote leverage is cleanest and fastest to implement.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Follow-Up and Outreach</h4>
              <p style="font-size:0.88rem;">Outbound calls to form submissions, lead follow-up sequences, appointment setting, and referral tracking. Marketing becomes an investment when follow-up is handled reliably — not when it depends on who has time that day.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Revenue Cycle Support</h4>
              <p style="font-size:0.88rem;">Insurance verification, pre-certification calls, billing support, and collections follow-up — particularly for healthcare-adjacent service businesses. Reduce payroll cost per collection without short-staffing your billing department.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Customer Care Workflows</h4>
              <p style="font-size:0.88rem;">Patient care calls, post-service follow-up, satisfaction check-ins, and appointment reminders. Free your in-house team to focus on the relationship moments that actually require their presence.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Process Execution</h4>
              <p style="font-size:0.88rem;">Once a workflow is documented, remote team members execute it consistently — every time. SOPs become living systems rather than shelf documents. Quality does not depend on which team member shows up today.</p>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Executive Assistance</h4>
              <p style="font-size:0.88rem;">Research, presentation prep, project tracking, meeting preparation, and communication support for the owner and leadership team. The tasks that eat strategic hours without requiring domestic-level cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <div>
              <span class="eyebrow">How It Works</span>
              <h2>Strategy first. Placement second. Oversight ongoing.</h2>
              <div class="gold-line"></div>
              <p>Remote team members only succeed when the role is designed correctly and the workflow is documented clearly. We do that work before any placement is made — which is why our engagements work when others fail.</p>
              <p>After placement, our team stays involved. We are not a marketplace that connects you and disappears. We train, monitor, and adjust — so the hire continues to perform as the business changes.</p>
            </div>
            <div class="highlight-box">
              <h4 class="mb-3" style="color:var(--color-gold);">The Process</h4>
              <div class="steps" style="margin-top:1rem;">
                <div class="step">
                  <div class="step-num" style="width:2.25rem;height:2.25rem;font-size:0.8rem;">1</div>
                  <div class="step-content">
                    <h4>Workflow Audit</h4>
                    <p style="font-size:0.82rem;">We identify which tasks in your business are best suited for remote execution and where delegation breakdowns currently live.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num" style="width:2.25rem;height:2.25rem;font-size:0.8rem;">2</div>
                  <div class="step-content">
                    <h4>Role and SOP Design</h4>
                    <p style="font-size:0.82rem;">We document the role clearly — responsibilities, workflows, performance standards, and communication expectations — before any placement is made.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num" style="width:2.25rem;height:2.25rem;font-size:0.8rem;">3</div>
                  <div class="step-content">
                    <h4>Placement and Onboarding</h4>
                    <p style="font-size:0.82rem;">Our delivery partner sources and places the right team member. We oversee onboarding and training to your documented standard.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num" style="width:2.25rem;height:2.25rem;font-size:0.8rem;">4</div>
                  <div class="step-content">
                    <h4>Ongoing Oversight</h4>
                    <p style="font-size:0.82rem;">We monitor performance, refine workflows as your business evolves, and provide accountability reporting so you always know how the team is performing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section class="section bg-surface">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">Why It Works</span>
              <h2>Leverage without the risk of doing it alone.</h2>
              <div class="gold-line"></div>
              <p>Most business owners who have tried virtual staffing before did it without a system — and it failed. They hired without a documented role, skipped the training architecture, and ended up managing the chaos themselves.</p>
              <p>The difference here is the advisory layer. We have already built the delegation frameworks, the onboarding structures, and the performance systems. You get the benefit of our experience before your remote team member ever logs in for the first time.</p>
              <ul class="pain-list mt-3">
                <li>Grow your operational capacity without adding domestic payroll</li>
                <li>Free your in-house team to focus on high-relationship, high-value work</li>
                <li>Reduce burnout by eliminating the repetitive workload that drains your best people</li>
                <li>Build a documented, scalable operation — not a dependency on one person's memory</li>
                <li>Operate with the confidence that someone is managing performance, not just filling a seat</li>
              </ul>
            </div>
            <div>
              <div class="highlight-box">
                <span class="eyebrow">Who This Is For</span>
                <h3 class="mb-3" style="font-size:1.2rem;">Service-based businesses with repeatable workflows and a team that is at capacity.</h3>
                <ul class="intensive-includes">
                  <li>Owner-led businesses in the $500K–$10M range</li>
                  <li>Teams where domestic staff are handling tasks below their pay grade</li>
                  <li>Businesses with consistent workflows that can be documented</li>
                  <li>Owners who have tried virtual staffing before and need a smarter structure</li>
                  <li>Companies preparing to scale without proportionally scaling headcount cost</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection to Broader Strategy */}
      <section class="section bg-dark">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">Part of a Bigger Picture</span>
            <h2>Virtual staffing works best when the systems are already in place.</h2>
            <p>Remote execution is most powerful when it sits inside a documented, delegated operating model. That is why this capability connects directly to our Strategy Intensives — particularly the Capacity Intensive — and often follows a Growth Acceleration Sprint or My Profit Life engagement.</p>
          </div>
          <div class="grid-3">
            <div class="card card-accent">
              <h4 class="mb-2">Capacity Intensive</h4>
              <p style="font-size:0.85rem;">Builds the delegation framework and team structure before remote staff are introduced. The foundation that makes virtual staffing actually hold.</p>
              <a href="/strategy-intensives#capacity" class="btn btn-ghost btn-sm mt-3">Learn About the Capacity Intensive</a>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">Managed Execution</h4>
              <p style="font-size:0.85rem;">For businesses that need more than remote staff — they need implementation support across strategy, operations, and AI workflow deployment. Included in the Growth Acceleration Sprint.</p>
              <a href="/how-it-works" class="btn btn-ghost btn-sm mt-3">See How It Works</a>
            </div>
            <div class="card card-accent">
              <h4 class="mb-2">AI Enablement</h4>
              <p style="font-size:0.85rem;">Remote team members and AI workflows are not competing — they are complementary. We design both to work together so your team handles human-critical work and AI handles the rest.</p>
              <a href="/ai-enablement" class="btn btn-ghost btn-sm mt-3">Learn About AI Enablement</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-band">
        <div class="container">
          <span class="eyebrow" style="display:block; text-align:center; margin-bottom:1rem;">Ready to build a team that scales without burning out the one you have?</span>
          <h2>Start with the Growth Diagnostic.</h2>
          <p class="lead">We identify whether virtual staffing is the right next move — and design the role before we ever discuss placement.</p>
          <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Book the Growth Diagnostic</a>
        </div>
      </section>
    </div>,
    { title: 'Virtual Staffing — Managed Remote Workforce Solutions', activeNav: 'staffing' }
  )
})

export default virtualStaffing
