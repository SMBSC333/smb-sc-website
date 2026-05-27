import { Hono } from 'hono'

const privacy = new Hono()

privacy.get('/', (c) => {
  return c.render(
    <div>
      <section class="page-hero bg-dark">
        <div class="container">
          <span class="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p class="lead">Last Updated: May 2026</p>
        </div>
      </section>

      <section class="section bg-white">
        <div class="container" style="max-width: 800px;">
          <div class="body-v2">
            <p>At SMB Strategy Consultants, LLC ("we," "us," or "our"), we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (the "Site") or engage with our services.</p>

            <h3 class="mt-5">1. Information We Collect</h3>
            <p>We collect information that identifies, relates to, or could reasonably be linked to you ("personal data"). This includes:</p>
            <ul class="feature-list mt-3">
                <li><strong>Contact and inquiry data</strong> — name, email address, phone number, company name, and any message you submit via our contact forms or fit call booking tools.</li>
                <li><strong>Assessment responses</strong> — answers you provide through third-party assessment tools we link to (e.g., Value Builder Score, PREScore, PC Score). Please review the privacy policies of those platforms independently.</li>
                <li><strong>Usage data</strong> — IP address, browser type and version, pages visited, time and date of visit, time spent on pages, referring URLs, and other technical data.</li>
            </ul>

            <h3 class="mt-5">2. How We Use Your Information</h3>
            <p>We use your personal data to:</p>
            <ul class="feature-list mt-3">
                <li>Provide and maintain our Site;</li>
                <li>Process your requests for fit calls or services;</li>
                <li>Deliver assessment results and consulting deliverables;</li>
                <li>Communicate with you regarding your inquiries;</li>
                <li>Send you marketing communications, if you have opted in to receive them;</li>
                <li>Improve our Site's functionality and user experience.</li>
            </ul>

            <h3 class="mt-5">3. Data Sharing and Disclosure</h3>
            <p>We do not sell your personal data. We may share your information with trusted third-party service providers who assist us in operating our Site and conducting our business (e.g., scheduling software, CRM platforms, email service providers), provided those parties agree to keep this information confidential.</p>

            <h3 class="mt-5">4. Third-Party Links</h3>
            <p>Our Site may contain links to third-party websites, tools, or services (e.g., scheduling platforms, assessment tools, payment processors). We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

            <h3 class="mt-5">5. Your Rights</h3>
            <p>Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete the information we hold about you. To exercise these rights, please contact us at the email provided below.</p>

            <h3 class="mt-5">6. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p><strong>SMB Strategy Consultants, LLC</strong><br/>
            303 Perimeter Center N. Ste. 300<br/>
            Dunwoody, GA 30346<br/>
            Email: info@smbstrategyconsultants.com</p>
          </div>
        </div>
      </section>
    </div>,
    { title: 'Privacy Policy — SMB Strategy Consultants', activeNav: '' }
  )
})

export default privacy
