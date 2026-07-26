import { Hono } from 'hono'

const getYourReport = new Hono()

getYourReport.get('/', (c) => {
  return c.render(
    <div>
      <section class="section bg-white">
        <div class="container">
          <div class="split-section">
            <div class="split-content">
              <span class="eyebrow">AI Leverage Report — By Industry</span>
              <h1 style="font-size:2.2rem; line-height:1.25;">The businesses pulling ahead in your industry aren't working harder. They're using AI as leverage.</h1>
              <div class="gold-line mb-4"></div>
              <p class="lead" style="margin-bottom:1.25rem;">
                AI adoption isn't happening evenly. In every industry we've studied, a small group of early movers has already locked in lower overhead, faster response times, and systems that run without the owner standing over them. Everyone else is still deciding where to start.
              </p>
              <p style="color:var(--color-text); line-height:1.75; margin-bottom:1.5rem;">
                Your free AI Leverage Report shows exactly what those early movers are doing differently in your industry — the specific use cases, the real ROI numbers, and where the next window of leverage closes if you wait.
              </p>
              <div style="margin:1.5rem 0;">
                <p style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-text-muted); margin-bottom:0.75rem;">Available for 15 industries</p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.4rem 1.5rem;">
                  {['Accounting', 'Architecture', 'Electrical', 'Engineering', 'HVAC', 'IT / MSPs', 'Landscaping', 'Law Firms', 'Marketing Agencies', 'Pest Control', 'Plumbing', 'Property Management', 'Vascular Surgery', 'Bariatric & Surgical', 'B2B Professional Services'].map(ind => (
                    <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; color:var(--color-text);">
                      <span style="width:6px; height:6px; background:var(--color-gold); border-radius:50%; flex-shrink:0;"></span>
                      {ind}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div class="split-form-container">
              <div class="report-form-card">
                <h3 style="font-size:1.35rem; font-weight:800; color:var(--color-navy); margin-bottom:0.5rem;">Get Your Free AI Leverage Report</h3>
                <p style="font-size:0.9rem; color:var(--color-text-muted); margin-bottom:1.5rem; line-height:1.6;">
                  See exactly where AI is already creating ROI in your industry — and where you're exposed if you wait. Select your sector below; the report lands instantly.
                </p>
                <form action="/.netlify/functions/capture-report-lead" method="POST" class="report-form">
                  <div class="form-group">
                    <label for="firstName-standalone">First Name <span style="color:#c0392b;">*</span></label>
                    <input type="text" id="firstName-standalone" name="firstName" required placeholder="Your first name" />
                  </div>
                  <div class="form-group">
                    <label for="lastName-standalone">Last Name <span style="color:#c0392b;">*</span></label>
                    <input type="text" id="lastName-standalone" name="lastName" required placeholder="Your last name" />
                  </div>
                  <div class="form-group">
                    <label for="email-standalone">Email <span style="color:#c0392b;">*</span></label>
                    <input type="email" id="email-standalone" name="email" required placeholder="your@email.com" />
                  </div>
                  <div class="form-group">
                    <label for="companyName-standalone">Business Name <span style="color:#c0392b;">*</span></label>
                    <input type="text" id="companyName-standalone" name="companyName" required placeholder="Your business name" />
                  </div>
                  <div class="form-group">
                    <label for="phone-standalone">Phone Number <span style="color:var(--color-text-muted); font-weight:400;">(optional)</span></label>
                    <input type="tel" id="phone-standalone" name="phone" placeholder="(555) 555-5555" />
                  </div>
                  <div class="form-group">
                    <label for="industry-standalone">Your Industry <span style="color:#c0392b;">*</span></label>
                    <select id="industry-standalone" name="industry" required>
                      <option value="">Select your industry</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Architecture">Architecture</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Engineering">Engineering</option>
                      <option value="HVAC">HVAC</option>
                      <option value="IT / MSPs">IT / MSPs</option>
                      <option value="Landscaping">Landscaping</option>
                      <option value="Law Firms">Law Firms</option>
                      <option value="Marketing Agencies">Marketing Agencies</option>
                      <option value="Pest Control">Pest Control</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Property Management">Property Management</option>
                      <option value="Vascular Surgery Practices">Vascular Surgery Practices</option>
                      <option value="Bariatric & Surgical Practices">Bariatric &amp; Surgical Practices</option>
                      <option value="B2B Professional Services">B2B Professional Services</option>
                    </select>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Send Me My AI Leverage Report &rarr;</button>
                  <p style="font-size:0.75rem; color:var(--color-text-muted); text-align:center; margin-top:0.75rem;">No spam. Unsubscribe anytime.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>,
    {
      title: 'Get Your Free AI Leverage Report — SMB Strategy Consultants',
      description: 'See how AI is being used in your industry right now. Free report for 15 service-based industries. Download instantly.'
    }
  )
})

export default getYourReport
