import { jsxRenderer } from 'hono/jsx-renderer'

interface LayoutProps {
  title?: string
  description?: string
  activeNav?: string
}

export const renderer = jsxRenderer(({ children, title, description, activeNav }: LayoutProps & { children?: any }) => {
  const pageTitle = title ? `${title} — SMB Strategy Consultants` : 'SMB Strategy Consultants | AI-Enabled Business Growth for SMBs'
  const pageDesc = description || 'We help ambitious business owners win in an AI-transformed world. Decision clarity, system installation, and practical AI integration for service-based businesses.'

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={pageDesc} />
        <title>{pageTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; }
        `}</style>
        <link href="/static/style.css" rel="stylesheet" />
        {/* Netlify Identity Widget — required for Decap CMS login */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body>
        <nav class="nav" id="main-nav">
          <div class="nav-inner">
            <a href="/" class="nav-logo">SMB <span>Strategy</span> Consultants</a>
            <ul class="nav-links">
              <li><a href="/how-it-works" class={activeNav === 'how' ? 'active' : ''}>How It Works</a></li>
              <li><a href="/strategy-intensives" class={activeNav === 'intensives' ? 'active' : ''}>Strategy Intensives</a></li>
              <li><a href="/ai-enablement" class={activeNav === 'ai' ? 'active' : ''}>AI Enablement</a></li>
              <li><a href="/my-profit-life" class={activeNav === 'mpl' ? 'active' : ''}>My Profit Life</a></li>
              <li class="nav-dropdown">
                <button class={`nav-drop-btn${['cfo','exit','staffing'].includes(activeNav||'') ? ' active' : ''}`} aria-expanded="false" aria-haspopup="true">
                  Other Services <svg class="drop-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <div class="nav-drop-menu" role="menu">
                  <a href="/virtual-cfo" class={activeNav === 'cfo' ? 'active' : ''} role="menuitem">
                    <span class="drop-label">Virtual CFO</span>
                    <span class="drop-sub">Strategic financial partnership</span>
                  </a>
                  <a href="/exit-planning" class={activeNav === 'exit' ? 'active' : ''} role="menuitem">
                    <span class="drop-label">Exit Planning</span>
                    <span class="drop-sub">21-step sell-ready process</span>
                  </a>
                  <a href="/virtual-staffing" class={activeNav === 'staffing' ? 'active' : ''} role="menuitem">
                    <span class="drop-label">Virtual Staffing</span>
                    <span class="drop-sub">Managed remote workforce solutions</span>
                  </a>
                </div>
              </li>
              <li class="nav-dropdown">
                <button class={`nav-drop-btn${['about','resources'].includes(activeNav||'') ? ' active' : ''}`} aria-expanded="false" aria-haspopup="true">
                  More <svg class="drop-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <div class="nav-drop-menu" role="menu">
                  <a href="/about" class={activeNav === 'about' ? 'active' : ''} role="menuitem">
                    <span class="drop-label">About</span>
                    <span class="drop-sub">Who we are and how we work</span>
                  </a>
                  <a href="/resources" class={activeNav === 'resources' ? 'active' : ''} role="menuitem">
                    <span class="drop-label">Resources</span>
                    <span class="drop-sub">Guides, tools, and insights</span>
                  </a>
                  <a href="/contact" role="menuitem">
                    <span class="drop-label">Contact</span>
                    <span class="drop-sub">Get in touch with our team</span>
                  </a>
                </div>
              </li>
            </ul>
            <a href="/growth-diagnostic" class="btn btn-primary btn-sm nav-cta">Book a Diagnostic</a>
            <button class="nav-hamburger" id="hamburger" aria-label="Open navigation">
              <span></span><span></span><span></span>
            </button>
          </div>
          <div class="nav-mobile" id="nav-mobile">
            <a href="/">Home</a>
            <a href="/how-it-works">How It Works</a>
            <a href="/strategy-intensives">Strategy Intensives</a>
            <a href="/ai-enablement">AI Enablement</a>
            <a href="/my-profit-life">My Profit Life</a>
            <div class="mobile-section-label">Other Services</div>
            <a href="/virtual-cfo" style="padding-left:1.5rem;">Virtual CFO</a>
            <a href="/exit-planning" style="padding-left:1.5rem;">Exit Planning</a>
            <a href="/virtual-staffing" style="padding-left:1.5rem;">Virtual Staffing</a>
            <div class="mobile-section-label">More</div>
            <a href="/about" style="padding-left:1.5rem;">About</a>
            <a href="/resources" style="padding-left:1.5rem;">Resources</a>
            <a href="/contact" style="padding-left:1.5rem;">Contact</a>
            <a href="/growth-diagnostic" style="color: #c9a84c; font-weight: 600; margin-top: 0.5rem;">Book a Growth Diagnostic</a>
          </div>
        </nav>

        <main>
          {children}
        </main>

        <footer class="footer">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-brand">
                <div class="nav-logo" style="font-size:1rem; font-family: Georgia, serif; color: #f5f5f5;">SMB <span style="color:#c9a84c;">Strategy</span> Consultants</div>
                <p>We help ambitious business owners win in an AI-transformed world. Decision clarity, system installation, and practical AI integration.</p>
                <div class="cred-bar" style="margin-top:1.25rem;">
                  <span class="cred-badge">CEPA</span>
                  <span class="cred-badge">AASBC</span>
                  <span class="cred-badge">Value Builder</span>
                  <span class="cred-badge">Fathom Certified</span>
                </div>
              </div>
              <div class="footer-col">
                <h5>Services</h5>
                <ul>
                  <li><a href="/strategy-intensives">Strategy Intensives</a></li>
                  <li><a href="/ai-enablement">AI Enablement</a></li>
                  <li><a href="/my-profit-life">My Profit Life</a></li>
                  <li><a href="/virtual-cfo">Virtual CFO</a></li>
                  <li><a href="/exit-planning">Exit Planning</a></li>
                  <li><a href="/virtual-staffing">Virtual Staffing</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h5>Company</h5>
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="/how-it-works">How It Works</a></li>
                  <li><a href="/resources">Resources</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h5>Get Started</h5>
                <ul>
                  <li><a href="/growth-diagnostic">Free Growth Diagnostic</a></li>
                  <li><a href="/ai-assessment">AI Readiness Assessment</a></li>
                  <li><a href="/growth-constraint-quiz">Growth Constraint Quiz</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/terms-conditions">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-bottom">
              <p>5555 Glenridge Connector, Suite 200, Atlanta, GA 30342 &nbsp;|&nbsp; Mon–Fri 9am–6pm</p>
              <p>2026 SMB Strategy Consultants. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{ __html: `
          // Mobile hamburger
          const hamburger = document.getElementById('hamburger');
          const mobileNav = document.getElementById('nav-mobile');
          if (hamburger && mobileNav) {
            hamburger.addEventListener('click', () => {
              mobileNav.classList.toggle('open');
            });
          }

          // Desktop dropdowns
          document.querySelectorAll('.nav-dropdown').forEach(function(dropdown) {
            const btn = dropdown.querySelector('.nav-drop-btn');
            const menu = dropdown.querySelector('.nav-drop-menu');
            if (!btn || !menu) return;

            btn.addEventListener('click', function(e) {
              e.stopPropagation();
              const isOpen = dropdown.classList.contains('open');
              // close all
              document.querySelectorAll('.nav-dropdown').forEach(function(d) {
                d.classList.remove('open');
                d.querySelector('.nav-drop-btn') && d.querySelector('.nav-drop-btn').setAttribute('aria-expanded', 'false');
              });
              if (!isOpen) {
                dropdown.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
              }
            });
          });

          // Close dropdowns when clicking outside
          document.addEventListener('click', function() {
            document.querySelectorAll('.nav-dropdown').forEach(function(d) {
              d.classList.remove('open');
              d.querySelector('.nav-drop-btn') && d.querySelector('.nav-drop-btn').setAttribute('aria-expanded', 'false');
            });
          });
        `}} />

        {/* Netlify Identity redirect — sends logged-in users back to /admin/ */}
        <script dangerouslySetInnerHTML={{ __html: `
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on('init', function(user) {
              if (!user) {
                window.netlifyIdentity.on('login', function() {
                  document.location.href = '/admin/';
                });
              }
            });
          }
        `}} />
      </body>
    </html>
  )
})
