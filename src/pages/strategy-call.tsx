import { Hono } from 'hono'

const strategyCall = new Hono()

strategyCall.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark" style="padding-bottom: 5rem;">
        <div class="container">
          <span class="eyebrow" style="color:var(--color-gold);">Strategic Entry Point</span>
          <h1 class="mb-5">Schedule Your AI Implementation Strategy Call.</h1>
          <p class="lead mb-5">Stop wondering where to start with AI. In 20 minutes, we will identify your business's primary growth constraint and determine if a System of Record is the right next move for your scale.</p>
        </div>
      </section>

      <section class="section-xl">
        <div class="container">
          <div class="grid-2" style="gap:5rem; align-items: start;">
            <div>
              <h2 class="mb-6">The high-value diagnostic.</h2>
              <p class="mb-6" style="font-size: 1.15rem; line-height: 1.6; opacity: 0.9;">This isn't a sales pitch. It is a surgical evaluation of your current operating model. We don't accept clients unless we have identified a clear, measurable bottleneck that our AI systems can resolve.</p>
              
              <ul class="feature-list mt-5">
                <li><strong>Constraint Identification:</strong> We isolate the one thing holding your growth back (Team, Data, or Process).</li>
                <li><strong>AI Readiness Assessment:</strong> A technical sanity check on your current data cleanliness and tech stack.</li>
                <li><strong>Implementation Roadmap:</strong> If there's a fit, we'll outline the exact sequential path to business maturity.</li>
                <li><strong>Zero-Risk Exit:</strong> If we aren't a fit, we'll point you toward the exact resource or provider you need next.</li>
              </ul>
              
              <div class="highlight-box mt-6" style="border-left: 4px solid var(--color-gold);">
                <h4 class="mb-3">Selection Criteria for this Call:</h4>
                <p style="font-size: 0.9rem; margin-bottom: 1.5rem; opacity: 0.8;">We specialize in service-based businesses moving from owner-dependency to a professional system of record.</p>
                <ul class="intensive-includes" style="font-size: 0.85rem;">
                  <li>Revenue: $1M – $5M</li>
                  <li>Team: 8–30+ employees</li>
                  <li>Operations: Established (not a startup)</li>
                  <li>Founder: Ready to step out of the daily "weeds"</li>
                </ul>
              </div>
            </div>
            
            <div id="booking-container" class="card card-accent" style="padding:3.5rem; position: sticky; top: 120px; box-shadow: var(--shadow-lg);">
              <h3 class="mb-3 text-center">Secure Your Time</h3>
              <p class="text-center mb-5" style="font-size:1rem; color:var(--color-text-muted);">Select a 20-minute window for your initial diagnostic.</p>
              
              {/* Motion Booking Widget */}
              <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(193, 155, 118, 0.2); border-radius:12px; min-height: 600px; overflow: hidden; position: relative; box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);">
                <iframe 
                  src="https://app.usemotion.com/meet/corbin/SMB?d=20&embed=true" 
                  style="width: 100%; height: 650px; border: none;"
                  title="Book AI Strategy Call"
                ></iframe>
              </div>
              
              <p class="text-center mt-5" style="font-size: 0.8rem; opacity: 0.6; line-height: 1.5;">
                By scheduling, you agree to show up on time with access to your high-level operational metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Authority Bar */}
      <section class="section-sm bg-soft">
        <div class="container">
          <div class="section-header center mb-5">
            <span class="eyebrow">Industry Experience</span>
            <h3>Deep experience in specialized service sectors.</h3>
          </div>
          <div class="cert-logo-bar" style="opacity:0.4; filter:grayscale(1);">
             <span style="font-weight:700; font-size:1.1rem; margin:0 2rem;">ADVANCED RADIOLOGY</span>
             <span style="font-weight:700; font-size:1.1rem; margin:0 2rem;">BELTLINE HEALTH</span>
             <span style="font-weight:700; font-size:1.1rem; margin:0 2rem;">KORNERSTONE</span>
             <span style="font-weight:700; font-size:1.1rem; margin:0 2rem;">PREMIER LAW GROUP</span>
          </div>
        </div>
      </section>
    </div>,
    { 
      title: 'AI Implementation Strategy Call', 
      description: 'Book your 20-minute diagnostic to identify your business growth constraint and evaluate AI readiness.',
      activeNav: 'contact' 
    }
  )
})

export default strategyCall
