import { Hono } from 'hono'

const contact = new Hono()

contact.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <span class="eyebrow">Get in Touch</span>
          <h1>Start the conversation.</h1>
          <p class="lead">Whether you have a specific question, want to discuss the Growth Diagnostic, or need to know which engagement path fits your situation — reach out directly.</p>
        </div>
      </section>

      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">Send a Message</span>
              <h2 class="mb-4">We respond within one business day.</h2>
              <form action="https://link.pipelinedash.com/widget/form/5OCNv2Z4BjJKEjGTIrHq" method="POST" style="width:100%;">
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">First Name</label>
                    <input type="text" name="firstName" class="form-input" placeholder="Your first name" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Last Name</label>
                    <input type="text" name="lastName" class="form-input" placeholder="Your last name" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">Business Email</label>
                  <input type="email" name="email" class="form-input" placeholder="your@company.com" />
                </div>
                <div class="form-group">
                  <label class="form-label">Phone</label>
                  <input type="tel" name="phone" class="form-input" placeholder="(555) 000-0000" />
                </div>
                <div class="form-group">
                  <label class="form-label">Company Name</label>
                  <input type="text" name="company" class="form-input" placeholder="Your business name" />
                </div>
                <div class="form-group">
                  <label class="form-label">What brings you here?</label>
                  <select name="interest" class="form-select">
                    <option value="">Select the primary topic</option>
                    <option value="diagnostic">Growth Diagnostic</option>
                    <option value="ai">AI Enablement Intensive</option>
                    <option value="intensives">Strategy Intensives</option>
                    <option value="mpl">My Profit Life</option>
                    <option value="cfo">Virtual CFO / Strategic Financial Partner</option>
                    <option value="exit">Exit Planning</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Brief message</label>
                  <textarea name="message" class="form-textarea" placeholder="Tell us a bit about your business and what you're working on..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%; text-align:center;">Send Message</button>
              </form>
            </div>
            <div>
              <span class="eyebrow">Office Information</span>
              <h3 class="mb-4">Atlanta, Georgia — Serving SMBs Nationwide</h3>
              <ul class="pain-list mb-4">
                <li><strong>Address:</strong> 303 Perimeter Center N. Ste. 300, Dunwoody, GA 30346</li>
                <li><strong>Hours:</strong> Monday through Friday, 9am – 6pm Eastern</li>
                <li><strong>Markets Served:</strong> Atlanta, Marietta, Roswell, Sandy Springs, Smyrna, and nationwide</li>
              </ul>
              <div class="highlight-box mb-4">
                <h4 class="mb-3">The fastest path to a conversation</h4>
                <p style="font-size:0.88rem;">Book the Growth Diagnostic directly — it is a scheduled working session, not a sales call. You leave with something useful regardless of whether we work together.</p>
                <a href="/growth-diagnostic" class="btn btn-primary btn-sm mt-3">Book the Free Growth Diagnostic</a>
              </div>
              <div class="highlight-box">
                <h4 class="mb-2">Not sure which service fits?</h4>
                <p style="font-size:0.88rem;">Take the 3-minute Growth Constraint Quiz and identify your primary constraint before reaching out. It makes the first conversation more productive.</p>
                <a href="/growth-constraint-quiz" class="btn btn-ghost btn-sm mt-3">Take the Growth Constraint Quiz</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>,
    { title: 'Contact — SMB Strategy Consultants', activeNav: 'contact' }
  )
})

export default contact
