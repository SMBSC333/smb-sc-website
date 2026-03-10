import { Hono } from 'hono'

const privacy = new Hono()

privacy.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero bg-dark">
        <div class="container">
          <span class="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p class="lead">Last updated: March 10, 2026</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="legal-wrap">

            <div class="legal-intro">
              <p>SMB Strategy Consultants, LLC ("Company," "we," "us," or "our") operates the website <strong>smbstrategyconsultants.com</strong> (the "Site") and provides business consulting, advisory, and related services (collectively, the "Services"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our Site or engage our Services.</p>
              <p>By using the Site or Services, you agree to the collection and use of information in accordance with this Policy. If you do not agree, please discontinue use of the Site and Services.</p>
            </div>

            <div class="legal-toc">
              <h4>Contents</h4>
              <ol>
                <li><a href="#information-we-collect">Information We Collect</a></li>
                <li><a href="#how-we-use">How We Use Your Information</a></li>
                <li><a href="#legal-basis">Legal Basis for Processing (GDPR)</a></li>
                <li><a href="#sharing">Sharing of Information</a></li>
                <li><a href="#cookies">Cookies and Tracking Technologies</a></li>
                <li><a href="#retention">Data Retention</a></li>
                <li><a href="#your-rights">Your Privacy Rights</a></li>
                <li><a href="#ccpa">California Privacy Rights (CCPA/CPRA)</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#third-party">Third-Party Links</a></li>
                <li><a href="#children">Children's Privacy</a></li>
                <li><a href="#changes">Changes to This Policy</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ol>
            </div>

            {/* 1 */}
            <div class="legal-section" id="information-we-collect">
              <h2>1. Information We Collect</h2>
              <h3>A. Information You Provide Directly</h3>
              <ul>
                <li><strong>Contact and inquiry data</strong> — name, email address, phone number, company name, and any message you submit via our contact forms or diagnostic booking tools.</li>
                <li><strong>Client engagement data</strong> — financial information, business metrics, team structure, and operational details you share during a consulting engagement. This information is provided voluntarily and is used solely to deliver the Services.</li>
                <li><strong>Assessment responses</strong> — answers you provide through third-party assessment tools we link to (e.g., Value Builder Score, PREScore, PC Score). Please review the privacy policies of those platforms independently.</li>
                <li><strong>Communications</strong> — emails, messages, or other correspondence you send us.</li>
              </ul>
              <h3>B. Information Collected Automatically</h3>
              <ul>
                <li><strong>Usage data</strong> — IP address, browser type and version, pages visited, time and date of visit, time spent on pages, referring URLs, and other diagnostic data.</li>
                <li><strong>Device data</strong> — device type, operating system, and unique device identifiers.</li>
                <li><strong>Cookies and similar technologies</strong> — see Section 5 for details.</li>
              </ul>
              <h3>C. Information from Third Parties</h3>
              <p>We may receive information about you from third-party scheduling tools (e.g., Motion, Calendly), marketing platforms, or referral partners. We handle such information in accordance with this Policy.</p>
            </div>

            {/* 2 */}
            <div class="legal-section" id="how-we-use">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and improve our Services;</li>
                <li>Respond to inquiries, schedule calls, and communicate with you about engagements;</li>
                <li>Deliver diagnostic results and consulting deliverables;</li>
                <li>Send transactional communications (confirmations, invoices, follow-ups);</li>
                <li>Send marketing communications where you have consented or where permitted by law (you may opt out at any time);</li>
                <li>Analyze Site usage to improve functionality and user experience;</li>
                <li>Comply with legal obligations and protect our legal rights;</li>
                <li>Prevent fraud and enforce our Terms of Service.</li>
              </ul>
              <p>We do not sell your personal information to third parties for their own marketing purposes.</p>
            </div>

            {/* 3 */}
            <div class="legal-section" id="legal-basis">
              <h2>3. Legal Basis for Processing (GDPR)</h2>
              <p>If you are located in the European Economic Area (EEA) or United Kingdom, our legal basis for collecting and using personal information depends on the specific data and context. We process your data under one or more of the following bases:</p>
              <ul>
                <li><strong>Performance of a contract</strong> — processing necessary to deliver the Services you have engaged us for.</li>
                <li><strong>Legitimate interests</strong> — processing for our legitimate business interests (e.g., improving our Services, communicating with prospective clients), provided those interests are not overridden by your rights.</li>
                <li><strong>Consent</strong> — where you have given explicit consent (e.g., marketing emails). You may withdraw consent at any time.</li>
                <li><strong>Legal obligation</strong> — processing required to comply with applicable law.</li>
              </ul>
            </div>

            {/* 4 */}
            <div class="legal-section" id="sharing">
              <h2>4. Sharing of Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li><strong>Service providers</strong> — third-party vendors who assist us in operating our Site and delivering Services (e.g., scheduling software, CRM platforms, email service providers, payment processors, cloud storage). These parties are contractually bound to use your data only as directed by us.</li>
                <li><strong>Professional advisors</strong> — attorneys, accountants, or auditors where necessary, under confidentiality obligations.</li>
                <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of all or a portion of our assets. We will notify you before your information becomes subject to a different privacy policy.</li>
                <li><strong>Law enforcement / legal process</strong> — where required by law, court order, or governmental authority, or to protect the rights and safety of our company, clients, or the public.</li>
              </ul>
              <p>We do not sell, rent, or trade your personal information.</p>
            </div>

            {/* 5 */}
            <div class="legal-section" id="cookies">
              <h2>5. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies to operate and improve the Site. Cookies are small data files stored on your device.</p>
              <h3>Types of cookies we use:</h3>
              <ul>
                <li><strong>Strictly necessary</strong> — required for the Site to function (e.g., session management). These cannot be disabled.</li>
                <li><strong>Analytics</strong> — help us understand how visitors use the Site (e.g., page views, traffic sources). We may use tools such as Google Analytics or Fathom Analytics.</li>
                <li><strong>Functional</strong> — remember your preferences to improve your experience.</li>
                <li><strong>Marketing</strong> — used to deliver relevant advertisements or track campaign effectiveness. We will request your consent before placing marketing cookies.</li>
              </ul>
              <p>You can control cookies through your browser settings. Disabling certain cookies may affect Site functionality. For more information, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a>.</p>
            </div>

            {/* 6 */}
            <div class="legal-section" id="retention">
              <h2>6. Data Retention</h2>
              <p>We retain personal information for as long as necessary to fulfill the purposes described in this Policy, including to comply with legal obligations, resolve disputes, and enforce agreements. When data is no longer needed, we securely delete or anonymize it.</p>
              <p>Client engagement data is typically retained for a minimum of five (5) years following the conclusion of an engagement to satisfy professional and regulatory record-keeping requirements.</p>
            </div>

            {/* 7 */}
            <div class="legal-section" id="your-rights">
              <h2>7. Your Privacy Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul>
                <li><strong>Access</strong> — request a copy of the personal information we hold about you.</li>
                <li><strong>Correction</strong> — request correction of inaccurate or incomplete information.</li>
                <li><strong>Deletion</strong> — request deletion of your personal information, subject to certain legal exceptions.</li>
                <li><strong>Restriction</strong> — request that we restrict processing of your data in certain circumstances.</li>
                <li><strong>Portability</strong> — receive your data in a structured, machine-readable format.</li>
                <li><strong>Objection</strong> — object to processing based on legitimate interests or for direct marketing.</li>
                <li><strong>Withdraw consent</strong> — where processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing.</li>
              </ul>
              <p>To exercise any of these rights, contact us at <a href="mailto:hello@smbstrategyconsultants.com">hello@smbstrategyconsultants.com</a>. We will respond within the timeframe required by applicable law (generally 30 days). We may verify your identity before processing requests.</p>
            </div>

            {/* 8 */}
            <div class="legal-section" id="ccpa">
              <h2>8. California Privacy Rights (CCPA / CPRA)</h2>
              <p>If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):</p>
              <ul>
                <li><strong>Right to Know</strong> — the categories and specific pieces of personal information we have collected about you, the purposes for collection, and the categories of third parties with whom we share it.</li>
                <li><strong>Right to Delete</strong> — request deletion of personal information we have collected, subject to exceptions.</li>
                <li><strong>Right to Correct</strong> — request correction of inaccurate personal information.</li>
                <li><strong>Right to Opt-Out of Sale or Sharing</strong> — we do not sell or share personal information for cross-context behavioral advertising.</li>
                <li><strong>Right to Limit Use of Sensitive Personal Information</strong> — we do not use sensitive personal information for purposes beyond those permitted by the CPRA.</li>
                <li><strong>Right to Non-Discrimination</strong> — we will not discriminate against you for exercising your privacy rights.</li>
              </ul>
              <p>To submit a CCPA/CPRA request, contact us at <a href="mailto:hello@smbstrategyconsultants.com">hello@smbstrategyconsultants.com</a> or call us during business hours. We will verify your identity and respond within 45 days (extendable by an additional 45 days where necessary).</p>
            </div>

            {/* 9 */}
            <div class="legal-section" id="security">
              <h2>9. Security</h2>
              <p>We implement industry-standard administrative, technical, and physical safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include encrypted data transmission (TLS/HTTPS), access controls, and regular security reviews.</p>
              <p>No method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security. In the event of a data breach that affects your rights, we will notify you as required by applicable law.</p>
            </div>

            {/* 10 */}
            <div class="legal-section" id="third-party">
              <h2>10. Third-Party Links</h2>
              <p>Our Site may contain links to third-party websites, tools, or services (e.g., scheduling platforms, assessment tools, payment processors). We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
            </div>

            {/* 11 */}
            <div class="legal-section" id="children">
              <h2>11. Children's Privacy</h2>
              <p>Our Site and Services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will promptly delete it.</p>
            </div>

            {/* 12 */}
            <div class="legal-section" id="changes">
              <h2>12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. We will post the updated Policy on this page with a revised "Last updated" date. For material changes, we will provide more prominent notice (e.g., email notification to active clients). Your continued use of the Site after any changes constitutes acceptance of the updated Policy.</p>
            </div>

            {/* 13 */}
            <div class="legal-section" id="contact">
              <h2>13. Contact Us</h2>
              <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <div class="legal-contact-block">
                <p><strong>SMB Strategy Consultants, LLC</strong><br/>
                5555 Glenridge Connector, Suite 200<br/>
                Atlanta, GA 30342<br/>
                Email: <a href="mailto:hello@smbstrategyconsultants.com">hello@smbstrategyconsultants.com</a><br/>
                Hours: Monday–Friday, 9am–6pm ET</p>
              </div>
              <p>If you are in the EEA or UK and believe we have not addressed your concern adequately, you have the right to lodge a complaint with your local data protection authority.</p>
            </div>

          </div>
        </div>
      </section>

    </div>,
    { title: 'Privacy Policy — SMB Strategy Consultants' }
  )
})

export default privacy
