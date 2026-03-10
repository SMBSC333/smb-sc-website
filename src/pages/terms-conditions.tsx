import { Hono } from 'hono'

const terms = new Hono()

terms.get('/', (c) => {
  return c.render(
    <div>

      {/* ── HERO ── */}
      <section class="page-hero bg-dark">
        <div class="container">
          <span class="eyebrow">Legal</span>
          <h1>Terms &amp; Conditions</h1>
          <p class="lead">Last updated: March 10, 2026</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section class="section bg-soft">
        <div class="container">
          <div class="legal-wrap">

            <div class="legal-intro">
              <p>These Terms and Conditions ("Terms") govern your use of the website <strong>smbstrategyconsultants.com</strong> (the "Site") and any consulting, advisory, or related services (collectively, the "Services") provided by <strong>SMB Strategy Consultants, LLC</strong> ("Company," "we," "us," or "our"), a Georgia limited liability company located at 5555 Glenridge Connector, Suite 200, Atlanta, GA 30342.</p>
              <p>By accessing the Site or engaging our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <a href="/privacy-policy">Privacy Policy</a>, which is incorporated herein by reference. If you do not agree, do not use the Site or Services.</p>
            </div>

            <div class="legal-toc">
              <h4>Contents</h4>
              <ol>
                <li><a href="#use-of-site">Use of the Site</a></li>
                <li><a href="#services">Services and Engagement</a></li>
                <li><a href="#intellectual-property">Intellectual Property</a></li>
                <li><a href="#confidentiality">Confidentiality</a></li>
                <li><a href="#payment">Payment Terms</a></li>
                <li><a href="#disclaimers">Disclaimers</a></li>
                <li><a href="#limitation">Limitation of Liability</a></li>
                <li><a href="#indemnification">Indemnification</a></li>
                <li><a href="#third-party">Third-Party Tools and Links</a></li>
                <li><a href="#termination">Termination</a></li>
                <li><a href="#governing-law">Governing Law and Dispute Resolution</a></li>
                <li><a href="#changes">Changes to These Terms</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ol>
            </div>

            {/* 1 */}
            <div class="legal-section" id="use-of-site">
              <h2>1. Use of the Site</h2>
              <h3>A. Eligibility</h3>
              <p>By using this Site you represent that you are at least 18 years old and have the legal capacity to enter into a binding agreement. If you are accessing the Site on behalf of a business entity, you represent that you have the authority to bind that entity to these Terms.</p>
              <h3>B. Permitted Use</h3>
              <p>You may use the Site solely for lawful purposes and in a manner consistent with these Terms. You agree not to:</p>
              <ul>
                <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Site without our express written permission;</li>
                <li>Use any automated means (bots, scrapers, crawlers) to access, collect, or index the Site or its content;</li>
                <li>Transmit any unsolicited commercial communications, malware, or harmful code;</li>
                <li>Attempt to gain unauthorized access to any part of the Site or its related systems or networks;</li>
                <li>Use the Site in any way that could damage, disable, overburden, or impair the Site or interfere with any other party's use of it;</li>
                <li>Upload, post, or transmit content that is defamatory, obscene, fraudulent, infringing, or otherwise unlawful.</li>
              </ul>
              <h3>C. Account Security</h3>
              <p>If you are given access to any account-based area of the Site or related portals, you are responsible for maintaining the confidentiality of your credentials. Notify us immediately at <a href="mailto:hello@smbstrategyconsultants.com">hello@smbstrategyconsultants.com</a> if you suspect unauthorized use.</p>
            </div>

            {/* 2 */}
            <div class="legal-section" id="services">
              <h2>2. Services and Engagement</h2>
              <h3>A. Nature of Services</h3>
              <p>SMB Strategy Consultants provides business advisory, strategic consulting, AI enablement, financial analysis, exit planning support, and related services to small and mid-sized businesses. Our Services are advisory in nature. We are not attorneys, licensed accountants (unless expressly stated in a specific engagement), financial advisors, or registered investment advisors. Nothing in our Services constitutes legal, tax, accounting, or investment advice. You should consult appropriately licensed professionals for such matters.</p>
              <h3>B. Engagement Agreements</h3>
              <p>Formal client engagements are governed by a separate written agreement (e.g., a Statement of Work, Letter of Engagement, or Consulting Agreement) executed between the parties. In the event of a conflict between these Terms and a signed engagement agreement, the signed engagement agreement controls.</p>
              <h3>C. No Guarantee of Results</h3>
              <p>We provide our Services with professional care and expertise; however, we cannot and do not guarantee specific financial, operational, or business outcomes. Results depend on factors outside our control, including client execution, market conditions, and third-party factors. Past results from other engagements are not indicative of future results.</p>
              <h3>D. Client Responsibilities</h3>
              <p>Clients are responsible for providing accurate, complete, and timely information necessary for us to deliver the Services. We are not liable for deficiencies in our work caused by inaccurate or incomplete information provided by the client.</p>
            </div>

            {/* 3 */}
            <div class="legal-section" id="intellectual-property">
              <h2>3. Intellectual Property</h2>
              <h3>A. Our Content</h3>
              <p>All content on this Site — including text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software — is the property of SMB Strategy Consultants, LLC or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws. The compilation of all content on this Site is the exclusive property of SMB Strategy Consultants, LLC.</p>
              <h3>B. Trademarks</h3>
              <p>"SMB Strategy Consultants," "My Profit Life," "The Principle-Centered AI Framework," and related names, logos, and taglines are trademarks or service marks of SMB Strategy Consultants, LLC. You may not use these marks without prior written consent.</p>
              <h3>C. Deliverables</h3>
              <p>Unless otherwise specified in a written engagement agreement, all work product, reports, frameworks, templates, and other deliverables created by us in connection with an engagement are owned by SMB Strategy Consultants, LLC until payment is received in full, at which point ownership transfers to the client for their internal business use. You may not resell, sublicense, or distribute deliverables without our written permission.</p>
              <h3>D. Limited License</h3>
              <p>We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Site solely for your personal, non-commercial purposes in accordance with these Terms. This license does not include the right to collect and use any product listings, descriptions, or prices; to make any derivative use of the Site or its contents; or to download or copy account information for the benefit of another merchant.</p>
            </div>

            {/* 4 */}
            <div class="legal-section" id="confidentiality">
              <h2>4. Confidentiality</h2>
              <p>In the course of an engagement, both parties may share confidential business information. Each party agrees to:</p>
              <ul>
                <li>Keep confidential all non-public information received from the other party that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information;</li>
                <li>Use such confidential information only to fulfill obligations under the engagement;</li>
                <li>Not disclose confidential information to third parties without prior written consent, except as required by law or court order.</li>
              </ul>
              <p>Specific confidentiality terms for client engagements are addressed in individual engagement agreements. Our confidentiality obligations do not apply to information that is or becomes publicly available through no fault of ours, was independently developed without use of confidential information, or is disclosed with the disclosing party's prior written approval.</p>
            </div>

            {/* 5 */}
            <div class="legal-section" id="payment">
              <h2>5. Payment Terms</h2>
              <h3>A. Fees</h3>
              <p>Fees for Services are set forth in the applicable engagement agreement or proposal. All fees are in U.S. dollars unless otherwise specified.</p>
              <h3>B. Payment Schedule</h3>
              <p>Unless otherwise agreed in writing, invoices are due and payable within 15 days of the invoice date. Retainer fees are due at the beginning of each period as specified in the engagement agreement.</p>
              <h3>C. Late Payment</h3>
              <p>Invoices not paid within the agreed period may accrue interest at 1.5% per month (or the maximum rate permitted by applicable law, whichever is lower). We reserve the right to suspend Services for accounts more than 30 days past due and to pursue collection remedies.</p>
              <h3>D. Refunds</h3>
              <p>All fees are non-refundable except as expressly provided in a signed engagement agreement or as required by applicable law. If you are dissatisfied with our Services, please contact us to discuss a resolution.</p>
              <h3>E. Taxes</h3>
              <p>You are responsible for all applicable taxes, duties, or levies arising from your purchase of Services, excluding taxes based on our net income.</p>
            </div>

            {/* 6 */}
            <div class="legal-section" id="disclaimers">
              <h2>6. Disclaimers</h2>
              <p>THE SITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND COURSE OF DEALING OR PERFORMANCE.</p>
              <p>We do not warrant that:</p>
              <ul>
                <li>The Site will be uninterrupted, error-free, or free from viruses or other harmful components;</li>
                <li>Any information on the Site is accurate, complete, current, or reliable;</li>
                <li>The results obtained from using the Services will meet your specific business objectives or requirements.</li>
              </ul>
              <p>All information on the Site is provided for general informational purposes only and is not intended as professional advice. You should not act on such information without seeking independent professional advice appropriate to your specific circumstances.</p>
            </div>

            {/* 7 */}
            <div class="legal-section" id="limitation">
              <h2>7. Limitation of Liability</h2>
              <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SMB STRATEGY CONSULTANTS, LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, LICENSORS, OR SERVICE PROVIDERS BE LIABLE FOR ANY:</p>
              <ul>
                <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES;</li>
                <li>LOSS OF PROFITS, REVENUES, DATA, BUSINESS, OR GOODWILL;</li>
                <li>COST OF SUBSTITUTE SERVICES;</li>
              </ul>
              <p>ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
              <p>OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATING TO THE SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO US IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.</p>
              <p>Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.</p>
            </div>

            {/* 8 */}
            <div class="legal-section" id="indemnification">
              <h2>8. Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless SMB Strategy Consultants, LLC and its officers, directors, employees, agents, and successors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:</p>
              <ul>
                <li>Your violation of these Terms;</li>
                <li>Your use of the Site or Services in a manner not authorized by these Terms;</li>
                <li>Your provision of inaccurate or misleading information to us in connection with an engagement;</li>
                <li>Any third-party claim arising from your business operations, products, or services.</li>
              </ul>
            </div>

            {/* 9 */}
            <div class="legal-section" id="third-party">
              <h2>9. Third-Party Tools and Links</h2>
              <p>The Site may contain links to or integrations with third-party websites, platforms, and tools, including but not limited to scheduling software (Motion), assessment platforms (Lovable), payment processors, and analytics providers. These third-party services are governed by their own terms and privacy policies. We do not control and are not responsible for the content, accuracy, or practices of third-party services.</p>
              <p>Any transactions you engage in with third parties are solely between you and that third party. We shall have no liability for any loss or damage arising from your dealings with third parties accessed through or in connection with the Site.</p>
            </div>

            {/* 10 */}
            <div class="legal-section" id="termination">
              <h2>10. Termination</h2>
              <p>We reserve the right to suspend or terminate your access to the Site and/or Services, with or without notice, for any reason, including if we believe you have violated these Terms. Upon termination:</p>
              <ul>
                <li>All licenses granted to you under these Terms immediately terminate;</li>
                <li>You must cease all use of the Site and any Company materials;</li>
                <li>Any outstanding payment obligations remain in effect.</li>
              </ul>
              <p>Provisions of these Terms that by their nature should survive termination (including intellectual property rights, confidentiality, payment obligations, disclaimers, limitations of liability, and dispute resolution) shall survive.</p>
            </div>

            {/* 11 */}
            <div class="legal-section" id="governing-law">
              <h2>11. Governing Law and Dispute Resolution</h2>
              <h3>A. Governing Law</h3>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions.</p>
              <h3>B. Informal Resolution</h3>
              <p>Before initiating any formal dispute, you agree to contact us at <a href="mailto:hello@smbstrategyconsultants.com">hello@smbstrategyconsultants.com</a> to attempt to resolve the issue informally. We will make a good-faith effort to resolve the matter within 30 days.</p>
              <h3>C. Binding Arbitration</h3>
              <p>If a dispute cannot be resolved informally, it shall be finally settled by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The arbitration shall take place in Atlanta, Georgia. The arbitrator's decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.</p>
              <h3>D. Class Action Waiver</h3>
              <p>YOU AND SMB STRATEGY CONSULTANTS, LLC AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</p>
              <h3>E. Exceptions</h3>
              <p>Notwithstanding the above, either party may seek emergency injunctive or other equitable relief from any court of competent jurisdiction to prevent irreparable harm pending the resolution of a dispute.</p>
            </div>

            {/* 12 */}
            <div class="legal-section" id="changes">
              <h2>12. Changes to These Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will post the updated Terms on this page with a revised "Last updated" date. Material changes will be communicated by prominent notice on the Site or via email to active clients. Your continued use of the Site or Services after the effective date of any changes constitutes your acceptance of the revised Terms.</p>
              <p>We encourage you to review these Terms periodically. If you do not agree to the modified Terms, you must discontinue using the Site and Services.</p>
            </div>

            {/* 13 */}
            <div class="legal-section" id="contact">
              <h2>13. Contact Us</h2>
              <p>If you have questions or concerns about these Terms, please contact us:</p>
              <div class="legal-contact-block">
                <p><strong>SMB Strategy Consultants, LLC</strong><br/>
                5555 Glenridge Connector, Suite 200<br/>
                Atlanta, GA 30342<br/>
                Email: <a href="mailto:hello@smbstrategyconsultants.com">hello@smbstrategyconsultants.com</a><br/>
                Hours: Monday–Friday, 9am–6pm ET</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>,
    { title: 'Terms & Conditions — SMB Strategy Consultants' }
  )
})

export default terms
