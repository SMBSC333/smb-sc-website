import { jsxRenderer } from 'hono/jsx-renderer'

interface LayoutProps {
  title?: string
  description?: string
  activeNav?: string
}

export const renderer = jsxRenderer(({ children, title, description, activeNav }, c) => {
  const pageTitle = title ? `${title} — SMB Strategy Consultants` : 'AI-Enabled Business Growth for SMBs — SMB Strategy Consultants'
  const pageDesc = description || 'We help ambitious business owners win in an AI-transformed world. Decision clarity, system installation, and practical AI integration for service-based businesses.'

  // Environment variables for tracking (Support both Vite dev and Runtime context)
  const gaId = import.meta.env?.VITE_GA_ID || c.env?.VITE_GA_ID
  const phKey = import.meta.env?.VITE_POSTHOG_KEY || c.env?.VITE_POSTHOG_KEY
  const phHost = import.meta.env?.VITE_POSTHOG_HOST || c.env?.VITE_POSTHOG_HOST || 'https://us.i.posthog.com'

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={pageDesc} />
        <title>{pageTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Google Analytics */}
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}} />
          </>
        )}

        {/* PostHog */}
        {phKey && (
          <script dangerouslySetInnerHTML={{ __html: `
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}var c=window;try{r=c.localStorage.getItem("_pg") catch(t){}var s=t;for(s.init=function(i,s,a){var g=new t;return g.init(i,s,a),g},s.capture=function(){},s.identify=function(){},s.set_config=function(){},s.register=function(){},s.register_once=function(){},s.unregister=function(){},s.opt_out_capturing=function(){},s.opt_in_capturing=function(){},s.set_config=function(){},s.onFeatureFlags=function(){},s.identify=function(){},s.alias=function(){},s.getFeatureFlag=function(){},s.getFeatureFlagPayload=function(){},s.isFeatureEnabled=function(){},s.reloadFeatureFlags=function(){},s.updateEarlyAccessFeatureEnrollment=function(){},s.getEarlyAccessFeatures=function(){},s.onSessionId=function(){},s.get_session_id=function(){},s.get_session_replay_url=function(){},s.reset=function(){},s.setPersonProperties=function(){},s.setPersonPropertiesForFlags=function(){},s.setGroupPropertiesForFlags=function(){},s.group=function(){},s.resetGroups=function(){},s.setPersonProperties=function(){},s.setPersonPropertiesForFlags=function(){},s.setGroupPropertiesForFlags=function(){},s.group=function(){},s.resetGroups=function(){},n=t.createElement("script"),n.type="text/javascript",n.async=!0,n.src=s,p=t.getElementsByTagName("script")[0],p.parentNode.insertBefore(n,p)}if(!window.posthog){var e=window.posthog=[];e.methods=["capture","identify","alias","people.set","people.set_once","set_config","register","register_once","unregister","opt_out_capturing","opt_in_capturing","add_opt_in_check","add_opt_out_check","has_opt_in_capturing","has_opt_out_capturing","clear_opt_in_out_capturing","debug","get_property","set_config","onFeatureFlags","identify","alias","getFeatureFlag","getFeatureFlagPayload","isFeatureEnabled","reloadFeatureFlags","updateEarlyAccessFeatureEnrollment","getEarlyAccessFeatures","onSessionId","get_session_id","get_session_replay_url","reset","setPersonProperties","setPersonPropertiesForFlags","setGroupPropertiesForFlags","group","resetGroups"],e.factory=function(t){return function(){var o=Array.prototype.slice.call(arguments);return o.unshift(t),e.push(o),e}},e.init=function(t,o,n){var p=e;for(void 0!==n?p=e[n]=[]:n="posthog",p.people=p.people||[],p.toString=function(t){var o="posthog";return"posthog"!==n&&(o+="."+n),t&&(o+=" (stub)"),o},p.people.toString=function(){return p.toString(1)+".people (stub)"},o=0;o<e.methods.length;o++)p[e.methods[o]]=e.factory(e.methods[o]);var r=t.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://us.i.posthog.com/static/array.js",a=t.getElementsByTagName("script")[0],a.parentNode.insertBefore(r,a)},e.init("${phKey}",{api_host:"${phHost}"})}}(document,window.posthog||[]);
          `}} />
        )}

        {/* Netlify Identity Widget — required for Decap CMS login */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body>
        <nav class="nav" id="main-nav">
          <div class="nav-inner">
            {/* Logo — transparent PNG, no white box */}
            <a href="/" class="nav-logo" aria-label="SMB Strategy Consultants — Home">
              <img
                src="/static/images/logo-horizontal-transparent.png"
                alt="SMB Strategy Consultants"
                class="nav-logo-img"
                width="220"
                height="44"
              />
            </a>
            <ul class="nav-links">
              <li><a href="/" class={activeNav === 'home' ? 'active' : ''}>Home</a></li>
              <li><a href="/how-it-works" class={activeNav === 'how' ? 'active' : ''}>How It Works</a></li>
              <li><a href="/who-its-for" class={activeNav === 'who' ? 'active' : ''}>Who It's For</a></li>
              <li><a href="/services" class={activeNav === 'services' ? 'active' : ''}>Our Solutions</a></li>
              <li><a href="/about" class={activeNav === 'about' ? 'active' : ''}>About</a></li>
              <li><a href="/contact" class={activeNav === 'contact' ? 'active' : ''}>Contact</a></li>
            </ul>
            <a href="/strategy-call" class="btn btn-primary btn-sm nav-cta">Book the AI Implementation Strategy Call</a>
            <button class="nav-hamburger" id="hamburger" aria-label="Open navigation">
              <span></span><span></span><span></span>
            </button>
          </div>
          <div class="nav-mobile" id="nav-mobile">
            <a href="/">Home</a>
            <a href="/who-its-for">Who It's For</a>
            <a href="/how-it-works">How It Works</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/strategy-call" style="color:var(--color-gold-dark); font-weight:600; margin-top:0.5rem;">Book the AI Implementation Strategy Call</a>
          </div>
        </nav>

        <main>
          {children}
        </main>

        <footer class="footer">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-brand">
                <img
                  src="/static/images/logo-horizontal-transparent.png"
                  alt="SMB Strategy Consultants"
                  class="footer-logo-img"
                  width="180"
                  height="38"
                />
                <p>We help ambitious business owners win in an AI-transformed world. Decision clarity, system installation, and practical AI integration.</p>
                <p style="font-style: italic; opacity: 0.8; font-size: 0.9rem;">Strategic. Practical. Built to identify the right next move.</p>
                <div class="cred-bar">
                  <div class="cert-logo-bar">
                    <img src="/static/images/badge-cepa.png"          alt="CEPA Certified"           loading="lazy" />
                    <img src="/static/images/badge-aasbc.png"         alt="AASBC Member"             loading="lazy" />
                    <img src="/static/images/badge-value-builder.png" alt="Value Builder Certified"  loading="lazy" />
                    <img src="/static/images/badge-fathom.png"        alt="Fathom Certified Advisor" loading="lazy" />
                  </div>
                </div>
              </div>
              <div class="footer-col">
                <h5>Information</h5>
                <ul>
                  <li><a href="/who-its-for">Who It's For</a></li>
                  <li><a href="/how-it-works">How It Works</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/resources">Resources</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h5>Next Step</h5>
                <ul>
                  <li><a href="/strategy-call">AI Strategy Call</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/terms-conditions">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-bottom">
              <p>303 Perimeter Center N. Ste. 300, Dunwoody, GA 30346 &nbsp;|&nbsp; Mon–Fri 9am–4pm</p>
              <p>&copy; 2026 SMB Strategy Consultants. All rights reserved.</p>
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
              document.querySelectorAll('.nav-dropdown').forEach(function(d) {
                d.classList.remove('open');
                var b = d.querySelector('.nav-drop-btn');
                if (b) b.setAttribute('aria-expanded', 'false');
              });
              if (!isOpen) {
                dropdown.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
              }
            });
          });
          document.addEventListener('click', function() {
            document.querySelectorAll('.nav-dropdown').forEach(function(d) {
              d.classList.remove('open');
              var b = d.querySelector('.nav-drop-btn');
              if (b) b.setAttribute('aria-expanded', 'false');
            });
          });
          // Persona tabs on My Profit Life page
          (function() {
            var tabs = document.querySelectorAll('.mpl-ptab');
            var panels = document.querySelectorAll('.mpl-ppanel');
            if (!tabs.length) return;
            tabs.forEach(function(tab) {
              tab.addEventListener('click', function() {
                var idx = tab.getAttribute('data-tab');
                tabs.forEach(function(t) { t.classList.remove('active'); });
                panels.forEach(function(p) { p.classList.remove('active'); });
                tab.classList.add('active');
                var target = document.querySelector('.mpl-ppanel[data-panel="' + idx + '"]');
                if (target) target.classList.add('active');
              });
            });
          })();
          // Subtle nav shadow on scroll
          var nav = document.getElementById('main-nav');
          if (nav) {
            window.addEventListener('scroll', function() {
              nav.classList.toggle('scrolled', window.scrollY > 10);
            }, { passive: true });
          }
        `}} />

        {/* Netlify Identity redirect */}
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
