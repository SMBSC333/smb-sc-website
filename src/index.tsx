import { Hono } from 'hono'
import { renderer } from './renderer'
import home from './pages/home'
import howItWorks from './pages/how-it-works'
import intensives from './pages/strategy-intensives'
import aiEnablement from './pages/ai-enablement'
import mpl from './pages/my-profit-life'
import virtualCfo from './pages/virtual-cfo'
import exitPlanning from './pages/exit-planning'
import about from './pages/about'
import resources from './pages/resources'
import contact from './pages/contact'
import virtualStaffing from './pages/virtual-staffing'
import landingPages from './pages/landing-pages'

import execSummaryHtml from '../public/executive-summary.html?raw'

const app = new Hono()

app.use(renderer)

// Main pages
app.route('/', home)
app.route('/how-it-works', howItWorks)
app.route('/strategy-intensives', intensives)
app.route('/ai-enablement', aiEnablement)
app.route('/my-profit-life', mpl)
app.route('/virtual-cfo', virtualCfo)
app.route('/exit-planning', exitPlanning)
app.route('/about', about)
app.route('/resources', resources)
app.route('/contact', contact)
app.route('/virtual-staffing', virtualStaffing)

// Landing pages
app.route('/', landingPages)

// Privacy / Terms stubs
app.get('/privacy-policy', (c) => c.render(
  <div>
    <section class="page-hero bg-dark">
      <div class="container">
        <h1>Privacy Policy</h1>
        <p class="lead">SMB Strategy Consultants is committed to protecting your privacy. Contact us at the address below with any questions.</p>
        <p style="color:var(--color-text-muted);">5555 Glenridge Connector, Suite 200, Atlanta, GA 30342</p>
      </div>
    </section>
  </div>,
  { title: 'Privacy Policy' }
))

app.get('/terms-conditions', (c) => c.render(
  <div>
    <section class="page-hero bg-dark">
      <div class="container">
        <h1>Terms of Service</h1>
        <p class="lead">Please contact us with any questions about our terms of service.</p>
        <p style="color:var(--color-text-muted);">5555 Glenridge Connector, Suite 200, Atlanta, GA 30342</p>
      </div>
    </section>
  </div>,
  { title: 'Terms of Service' }
))

// Admin CMS redirect — /admin → /admin/ (Decap CMS needs trailing slash)
app.get('/admin', (c) => c.redirect('/admin/', 301))

// Legacy redirects — catch common old URLs
app.get('/executive-summary', (c) => c.html(execSummaryHtml))
app.get('/bookkeeping', (c) => c.redirect('/strategy-intensives#finance'))
app.get('/team-development', (c) => c.redirect('/strategy-intensives#capacity'))
app.get('/3-level-business-growth-strategy', (c) => c.redirect('/how-it-works'))
app.get('/profitability-brainstorming-session', (c) => c.redirect('/growth-diagnostic'))
app.get('/value-builder-score-questionnaire', (c) => c.redirect('https://smbstrategyconsultants.com/value-builder-score-questionnaire', 302))
app.get('/pre-score-questionnaire', (c) => c.redirect('https://smbstrategyconsultants.com/pre-score-questionnaire', 302))

export default app
