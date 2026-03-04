import { Hono } from 'hono'

const virtualCfo = new Hono()

virtualCfo.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <span class="eyebrow">Strategic Financial Partnership</span>
          <h1>A strategic ally in the room where it happens.</h1>
          <p class="lead">This is not a reporting role. This is not back-office accounting. It is a high-trust, high-involvement leadership seat designed for founders ready to graduate from entrepreneur-led chaos to professionally managed growth.</p>
          <a href="/growth-diagnostic" class="btn btn-primary mt-4">Book the Growth Diagnostic</a>
        </div>
      </section>

      {/* What Makes It Different */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">Not a Controller Role</span>
              <h2>Strategy-first. Leadership-oriented. Scalability-focused.</h2>
              <div class="gold-line"></div>
              <p>Most virtual CFO services focus on spreadsheets and reports. This is different. As your Strategic Financial Partner, Corbin joins your executive team — not as a vendor, but as an embedded guide who gives your financials a voice inside every leadership decision.</p>
              <p>The financial conversation does not happen after the business decisions. It happens alongside them — aligning marketing, staffing, operations, and systems with profitability goals before commitments are made.</p>
              <p>All Strategic Financial Partner engagements include AI-assisted financial reporting, forecasting, and anomaly detection as standard. The same tools that are compressing delivery costs across the industry are built into your reporting rhythm from day one.</p>
            </div>
            <div>
              <div class="card card-accent mb-3">
                <h4 class="mb-1">Strategy-First</h4>
                <p style="font-size:0.88rem;">Driven by insight, not inputs. We are not generating reports — we are telling you what the reports mean for your next decision.</p>
              </div>
              <div class="card card-accent mb-3">
                <h4 class="mb-1">Leadership-Oriented</h4>
                <p style="font-size:0.88rem;">A voice in key decisions, not just a monthly review. Corbin sits in the leadership cadence and weighs in on every significant commitment before it is made.</p>
              </div>
              <div class="card card-accent">
                <h4 class="mb-1">Scalability-Focused</h4>
                <p style="font-size:0.88rem;">Built to prepare the business for its next level — whether that is scale, exit, or freedom from operational dependency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section class="section bg-surface">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">What the Engagement Includes</span>
            <h2>Financial strategy and growth acceleration working as one.</h2>
          </div>
          <div class="grid-2">
            <div class="highlight-box">
              <h4 class="mb-3">Growth Acceleration System — Financial Sprint</h4>
              <ul class="intensive-includes">
                <li>Identify hidden profit and margin leaks</li>
                <li>Create clear 12–18 month financial roadmaps</li>
                <li>Align business goals with practical financial planning</li>
                <li>AI-assisted anomaly detection built in</li>
              </ul>
            </div>
            <div class="highlight-box">
              <h4 class="mb-3">Strategy Intensive Leadership</h4>
              <ul class="intensive-includes">
                <li>Quarterly Strategy Intensives included</li>
                <li>Facilitate targeted working sessions with your team</li>
                <li>Remove bottlenecks across marketing, staffing, and operations</li>
                <li>Define key initiatives and priorities for execution</li>
              </ul>
            </div>
            <div class="highlight-box">
              <h4 class="mb-3">Value Builder System and CEPA Guidance</h4>
              <ul class="intensive-includes">
                <li>Increase business valuation whether exiting or not</li>
                <li>Build around the 8 core drivers of the Value Builder System</li>
                <li>Capitaliz 21-Step process integrated where applicable</li>
                <li>Succession and strategic exit planning on the horizon</li>
              </ul>
            </div>
            <div class="highlight-box">
              <h4 class="mb-3">Leadership Integration</h4>
              <ul class="intensive-includes">
                <li>Align every team conversation with financial and operational goals</li>
                <li>Financial KPIs speak into marketing, hiring, and performance</li>
                <li>Trusted thought partner to both the CEO and the leadership team</li>
                <li>Real-time strategic support via Slack and email</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Rhythm */}
      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <div>
              <span class="eyebrow">Operational Intelligence</span>
              <h2>When you give your financials a voice, decision-making stress drops.</h2>
              <div class="gold-line"></div>
              <p>The reporting rhythm is the backbone. When the numbers tell a clear, consistent story — customized to your business, not your industry template — you stop making decisions from fear and start making them from knowledge.</p>
              <p>This engagement empowers you to make decisions based on perspective and control, not reaction and hope.</p>
            </div>
            <div>
              <h4 class="mb-3">What we work on together in the financial cadence:</h4>
              <ul class="pain-list">
                <li>Cash flow optimization and forward forecasting</li>
                <li>Reviewing operational and marketing efficiency</li>
                <li>Variance analysis — actual vs. forecast</li>
                <li>Industry benchmark comparison and positioning</li>
                <li>Decision modeling — quantify choices before you pull the trigger</li>
                <li>Payroll and staffing cost optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section class="section bg-surface">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">Who This Is For</span>
              <h2>Founder-led companies in the $1M–$10M revenue range.</h2>
              <div class="gold-line"></div>
              <ul class="pain-list">
                <li>Businesses transitioning to professional leadership models</li>
                <li>Teams that want strategic alignment, not just compliance</li>
                <li>Owners who want the business to run with them, not around them</li>
                <li>Companies where the financial conversation needs a louder voice in the room</li>
              </ul>
            </div>
            <div>
              <span class="eyebrow">Availability</span>
              <h3 class="mb-3">Limited to a small number of clients at any given time.</h3>
              <p>Because of the hands-on nature of this engagement, only a limited number of Strategic Financial Partner relationships are active at any time. This is by design — the value comes from depth of involvement, not breadth of client count.</p>
              <a href="/growth-diagnostic" class="btn btn-primary mt-3">Book the Growth Diagnostic to Discuss Fit</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section class="section bg-dark">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">What Clients Say</span>
            <h2>Results from the financial partnership.</h2>
          </div>
          <div class="grid-2">
            <div class="testimonial">
              <p class="testimonial-text">Corbin and the SMB team are on it. They have been a great addition to standardize financial reporting and sophisticate our forecasting to make informed decisions for our company. I would highly recommend them for your accounting needs.</p>
              <p class="testimonial-author">Mia Pitino</p>
            </div>
            <div class="testimonial">
              <p class="testimonial-text">Corbin and the SMB strategy jumped in during a very tough period for our company. The onboarding was seamless. What I thought would be a short-term engagement turned into a successful two-year partnership managing all bookkeeping, reporting, and strategic guidance.</p>
              <p class="testimonial-author">Gerrie van Niekerk</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-band">
        <div class="container">
          <span class="eyebrow" style="display:block; text-align:center; margin-bottom:1rem;">Ready to add a strategic financial mind to your team?</span>
          <h2>Let us see what you are capable of.</h2>
          <p class="lead">One conversation to confirm the fit and discuss availability.</p>
          <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Book the Growth Diagnostic</a>
        </div>
      </section>
    </div>,
    { title: 'Virtual CFO — Strategic Financial Partnership', activeNav: 'cfo' }
  )
})

export default virtualCfo
