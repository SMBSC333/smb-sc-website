import { Hono } from 'hono'

const bookingConfirmed = new Hono()

bookingConfirmed.get('/', (c) => {
  return c.render(
    <div>
      {/* Meta Pixel Lead event — fires when visitor lands on booking confirmation */}
      <script dangerouslySetInnerHTML={{ __html: `
        if (typeof fbq === 'function') {
          fbq('track', 'Lead');
        }
      `}} />

      <section class="page-hero bg-dark" style="padding-bottom: 5rem;">
        <div class="container text-center">
          <span class="eyebrow" style="color:var(--color-gold);">You're Confirmed</span>
          <h1 class="mb-5">Your Strategy Call Is Booked.</h1>
          <p class="lead mb-5" style="max-width: 700px; margin: 0 auto;">
            Check your email for a calendar invite. We'll see you on the call — come ready to talk through where your business is today.
          </p>
        </div>
      </section>

      <section class="section-xl">
        <div class="container" style="max-width: 720px;">
          <div class="card card-accent" style="padding: 3rem; text-align: center;">
            <h2 class="mb-5">What to Expect</h2>
            <ul class="feature-list" style="text-align: left;">
              <li><strong>30 minutes, no fluff.</strong> We'll identify your primary constraint and where AI can create real leverage — not generic advice.</li>
              <li><strong>Come with your numbers.</strong> High-level revenue, headcount, and the biggest operational friction point you're dealing with right now.</li>
              <li><strong>Zero pressure.</strong> If we aren't the right fit, we'll tell you exactly what to do next.</li>
            </ul>
            <div class="mt-6">
              <a href="/" class="btn btn-primary">Back to Home &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </div>,
    {
      title: 'Strategy Call Confirmed',
      description: 'Your free 30-minute strategy call with SMB Strategy Consultants is booked. Here is what to expect.',
      activeNav: 'contact'
    }
  )
})

export default bookingConfirmed
