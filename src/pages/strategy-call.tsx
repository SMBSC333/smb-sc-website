import { Hono } from 'hono'

const strategyCall = new Hono()

strategyCall.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark" style="padding-bottom: 5rem;">
        <div class="container text-center">
          <span class="eyebrow" style="color:var(--color-gold);">Strategic Entry Point</span>
          <h1 class="mb-5">Book Your Free 30-Minute Strategy Call.</h1>
          <p class="lead mb-5" style="max-width: 800px; margin: 0 auto;">In 30 minutes, we will identify your primary constraint, walk through where AI can create the most leverage in your business, and determine if the AI Sequencing Blueprint is the right next move.</p>
        </div>
      </section>

      <section class="section-xl">
        <div class="container">
          <div class="grid-2" style="gap:5rem; align-items: start;">
            <div>
              <h2 class="mb-6">The high-value fit assessment.</h2>
              <p class="mb-6" style="font-size: 1.15rem; line-height: 1.6; opacity: 0.9;">This isn't a sales pitch. It is a surgical evaluation of where your business is today. We don't build on messy foundations—because without foundations, AI just amplifies the noise. We identify the constraints first.</p>
              
              <ul class="feature-list mt-5">
                <li><strong>Friction Identification:</strong> We isolate where your business may be losing money (Leads, Reporting, or Workflow).</li>
                <li><strong>Foundation Audit:</strong> A sanity check on whether your current data and process are ready for Growth-Leveraged AI.</li>
                <li><strong>Sprint Fit:</strong> We'll determine if our sprint-based implementation model — 90-day sprints for larger builds, faster for smaller ones — will create measurable ROI for your scale.</li>
                <li><strong>Zero-Risk Exit:</strong> If we aren't a fit, we'll point you toward the exact resource or provider you need next to stay ahead of the competition.</li>
              </ul>
              
              <div class="highlight-box mt-6" style="border-left: 4px solid var(--color-gold);">
                <h4 class="mb-3">Ideal Fit Criteria:</h4>
                <p style="font-size: 0.9rem; margin-bottom: 1.5rem; opacity: 0.8;">We specialize in owner-led B2B service firms ready to move from reactive growth to structured leverage.</p>
                <ul class="intensive-includes" style="font-size: 0.85rem;">
                  <li>You run an owner-led B2B service firm</li>
                  <li>Problem: AI attempted but stalled, or you know AI is coming and want to move first</li>
                  <li>Goal: Capacity, margin protection, or reduced owner dependency</li>
                  <li>Also fits: CPAs and bookkeepers exploring a white-label financial clarity tool for clients</li>
                </ul>
              </div>
            </div>
            
            <div id="booking-container" class="card card-accent" style="padding:3.5rem; position: sticky; top: 120px; box-shadow: var(--shadow-lg);">
              <h3 class="mb-3 text-center">Secure Your Time</h3>
              <p class="text-center mb-5" style="font-size:1rem; color:var(--color-text-muted);">Select a 30-minute window for your strategy call.</p>
              
              {/* Motion Booking Widget */}
              <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(193, 155, 118, 0.2); border-radius:12px; min-height: 600px; overflow: hidden; position: relative; box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);">
                <iframe 
                  src="https://app.usemotion.com/meet/corbin/AIPlanFitCall?embed=true" 
                  style="width: 100%; height: 650px; border: none;"
                  title="Book 30-Min Strategy Call"
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
      title: 'Free AI Strategy Call for SMB Owners', 
      description: 'Free 30-min call for service business owners. We identify your top operational constraint and show exactly where AI creates the most leverage.',
      activeNav: 'contact' 
    }
  )
})

export default strategyCall
