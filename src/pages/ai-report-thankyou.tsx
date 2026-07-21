import { Hono } from 'hono'

const aiReportThankYou = new Hono()

const INDUSTRY_DISPLAY: Record<string, string> = {
  'accounting': 'Accounting',
  'architecture': 'Architecture',
  'electrical': 'Electrical',
  'engineering': 'Engineering',
  'hvac': 'HVAC',
  'it-msps': 'IT / MSPs',
  'landscapers': 'Landscaping',
  'law-firms': 'Law Firms',
  'marketing-agencies': 'Marketing Agencies',
  'pest-control': 'Pest Control',
  'plumbing': 'Plumbing',
  'property-management': 'Property Management',
  'healthcare-vascular': 'Vascular Surgery Practices',
  'surgical-bariatric': 'Bariatric & Surgical Practices',
  'b2b-professional-services': 'B2B Professional Services'
}

aiReportThankYou.get('/', (c) => {
  const industry = c.req.query('industry') || 'accounting'
  const name = c.req.query('name') || ''
  const displayName = INDUSTRY_DISPLAY[industry] || 'Your Industry'
  const pdfUrl = `/reports/${industry}.pdf`
  const firstName = name ? `, ${name}` : ''

  return c.render(
    <div>
      <section style="background:#fff; padding:4rem 1.5rem 3rem; text-align:center;">
        <div style="max-width:680px; margin:0 auto;">
          <div style="width:64px; height:64px; background:var(--color-gold); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h1 style="font-size:2rem; font-weight:800; color:var(--color-navy); margin-bottom:1rem;">
            Your {displayName} AI Report is Ready
          </h1>
          <p style="font-size:1.1rem; color:var(--color-text-muted); margin-bottom:2rem;">
            {name ? `${name}, your` : 'Your'} report is downloading now. If it doesn't start automatically,{' '}
            <a href={pdfUrl} download style="color:var(--color-gold-dark); font-weight:600;">click here to download it</a>.
          </p>
          <a
            href={pdfUrl}
            download
            class="btn btn-primary btn-lg"
            style="margin-bottom:2rem; display:inline-block;"
          >
            Download Your Report
          </a>
        </div>
      </section>

      <section style="background:var(--color-bg-soft); padding:3rem 1.5rem;">
        <div style="max-width:720px; margin:0 auto; text-align:center;">
          <span class="eyebrow">One More Thing</span>
          <h2 style="font-size:1.75rem; font-weight:800; color:var(--color-navy); margin:1rem 0;">
            See exactly where the leverage is in your business — live, in 30 minutes
          </h2>
          <div class="gold-line gold-line-center" style="margin-bottom:1.5rem;"></div>
          <p style="font-size:1.05rem; color:var(--color-text); max-width:600px; margin:0 auto 1rem; line-height:1.75;">
            The report shows you what's happening across your industry. The strategy call shows you
            where the specific leverage point is in <em>your</em> business — the constraint that,
            once diagnosed, changes what's possible.
          </p>
          <p style="font-size:1rem; color:var(--color-text-muted); max-width:560px; margin:0 auto 2rem;">
            30 minutes. No homework. One clear next move.
          </p>
          <a
            href="https://app.usemotion.com/meet/corbin/SMB-LinkedIn?d=30"
            class="btn btn-primary btn-lg"
            style="display:inline-block;"
          >
            Book Your Free AI Leverage Call &rarr;
          </a>
          <p style="font-size:0.8rem; color:var(--color-text-muted); margin-top:1rem;">
            Free. 30 minutes. Owner-led service firms only.
          </p>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var pdf = '${pdfUrl}';
          var link = document.createElement('a');
          link.href = pdf;
          link.download = '';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })();

        // Fire conversion events once per download, only after gtag.js has loaded
        (function() {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // GA4 key event — report download / lead capture
          gtag('event', 'generate_lead', {
            event_category: 'ai_report_funnel',
            event_label: '${industry}',
            industry: '${industry}'
          });

          // Google Ads conversion — AI Report Download - Lead
          gtag('event', 'conversion', {
            'send_to': 'AW-824793200/hu6MCKff4tMcEPCwpYkD',
            'value': 1.0,
            'currency': 'USD'
          });
        })();
      ` }} />
    </div>,
    {
      title: `Your ${displayName} AI Report — SMB Strategy Consultants`,
      description: `Download your free AI adoption report for the ${displayName} industry.`
    }
  )
})

export default aiReportThankYou
