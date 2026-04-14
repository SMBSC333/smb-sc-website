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
import privacy from './pages/privacy-policy'
import terms from './pages/terms-conditions'
import capacityClarity from './pages/capacity-clarity'
import businessBaseline from './pages/business-baseline'
import aiReadinessDeepDive from './pages/ai-readiness-deep-dive'
import whoItsFor from './pages/who-its-for'
import strategyCall from './pages/strategy-call'
import services from './pages/services'
import financialClarity from './pages/financial-clarity-intensive.tsx'
import growthSystems from './pages/growth-systems-intensive.tsx'
import ownerDependency from './pages/owner-dependency-intensive.tsx'
import aiOperations from './pages/ai-operations-intensive.tsx'

import execSummaryHtml from '../public/executive-summary.html?raw'

const app = new Hono()

app.use(renderer)

// Main pages
app.route('/', home)
app.route('/how-it-works', howItWorks)
app.route('/who-its-for', whoItsFor)
app.route('/services', services)
app.route('/strategy-intensives', intensives)
app.route('/ai-enablement', aiEnablement)
app.route('/my-profit-life', mpl)
app.route('/virtual-cfo', virtualCfo)
app.route('/exit-planning', exitPlanning)
app.route('/about', about)
app.route('/resources', resources)
app.route('/contact', contact)
app.route('/strategy-call', strategyCall)
app.route('/virtual-staffing', virtualStaffing)

// Strategy Intensive Tracks
app.route('/financial-clarity-intensive', financialClarity)
app.route('/growth-systems-intensive', growthSystems)
app.route('/owner-dependency-intensive', ownerDependency)
app.route('/ai-operations-intensive', aiOperations)

// Landing pages
app.route('/', landingPages)

// Legal pages
app.route('/privacy-policy', privacy)
app.route('/terms-conditions', terms)

// Capacity Clarity landing page
app.route('/capacity-clarity', capacityClarity)

// Business Baseline landing page
app.route('/business-baseline', businessBaseline)

// AI Readiness Deep Dive landing page
app.route('/ai-readiness-deep-dive', aiReadinessDeepDive)

// Admin CMS redirect — /admin → /admin/ (Decap CMS needs trailing slash)
app.get('/admin', (c) => c.redirect('/admin/', 301))

// 2026 Strategy Call redirects
app.get('/growth-diagnostic', (c) => c.redirect('/', 301))
app.get('/ai-assessment', (c) => c.redirect('/', 301))

// Legacy redirects — catch common old URLs
app.get('/executive-summary', (c) => c.html(execSummaryHtml))
app.get('/bookkeeping', (c) => c.redirect('/services#finance'))
app.get('/team-development', (c) => c.redirect('/services#capacity'))
app.get('/3-level-business-growth-strategy', (c) => c.redirect('/how-it-works'))
app.get('/profitability-brainstorming-session', (c) => c.redirect('/'))
app.get('/value-builder-score-questionnaire', (c) => c.redirect('https://smbstrategyconsultants.com/value-builder-score-questionnaire', 302))
app.get('/pre-score-questionnaire', (c) => c.redirect('https://smbstrategyconsultants.com/pre-score-questionnaire', 302))

export default app
