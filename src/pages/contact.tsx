import { Hono } from 'hono'

const contact = new Hono()

contact.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container text-center">
          <span class="eyebrow">Get in Touch</span>
          <h1>All roads lead to clarity.</h1>
          <p class="lead" style="max-width: 700px; margin: 0 auto;">We do not offer generic consultations. Every engagement begins with the AI Implementation Strategy Call to identify your real constraints.</p>
          <div class="mt-5">
             <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-primary btn-lg">Book the AI Implementation Strategy Call &rarr;</a>
          </div>
        </div>
      </section>

      <section class="section bg-soft">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">General Inquiries</span>
              <h2 class="mb-4">Need to reach us for something else?</h2>
              <p class="mb-5">If you have a partnership inquiry, support request, or a specific question that isn't covered by the Strategy Call, use the form below.</p>
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
                  <label class="form-label">Brief message</label>
                  <textarea name="message" class="form-textarea" placeholder="How can we help?"></textarea>
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
              </ul>
              <div class="highlight-box">
                 <h4 class="mb-3">The Fastest Path</h4>
                 <p style="font-size:0.88rem;">Skip the form and book the Strategy Call directly. It is a scheduled working session, not a sales call. You leave with clarity regardless of whether we work together.</p>
                 <a href="https://app.usemotion.com/meet/corbin/AIPlanFitCall" class="btn btn-navy btn-sm mt-3">Schedule Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>,
    { title: 'Contact Us', description: 'Get in touch with SMB Strategy Consultants. We help owner-led service firms implement AI and build operational leverage.', activeNav: 'contact' }
  )
})

export default contact
