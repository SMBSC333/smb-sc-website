import { Hono } from 'hono'
import { renderer } from './renderer'
import home from './pages/home'
import howItWorks from './pages/how-it-works'
import about from './pages/about'
import resources from './pages/resources'
import contact from './pages/contact'
import landingPages from './pages/landing-pages'
import privacy from './pages/privacy-policy'
import terms from './pages/terms-conditions'
import whoItsFor from './pages/who-its-for'
import strategyCall from './pages/strategy-call'
import services from './pages/services'
import why4997 from './pages/why-4997'
import financialClarity from './pages/financial-clarity-intensive.tsx'
import growthSystems from './pages/growth-systems-intensive.tsx'
import ownerDependency from './pages/owner-dependency-intensive.tsx'
import aiOperations from './pages/ai-operations-intensive.tsx'
import blog from './pages/blog'
import aiImplementationConsultant from './pages/ai-implementation-consultant'
import whyAiFails from './pages/why-ai-fails'
import aiReadinessAssessment from './pages/ai-readiness-assessment'
import implementationStories from './pages/implementation-stories'
import aiImplementationChecklist from './pages/ai-implementation-checklist'
import aiConsultantAtlanta from './pages/ai-consultant-atlanta'
import aiForServiceBusinesses from './pages/ai-implementation-for-service-businesses'
import bookingConfirmed from './pages/booking-confirmed'

const app = new Hono()

app.use(renderer)

// Main pages
app.route('/', home)
app.route('/how-it-works', howItWorks)
app.route('/who-its-for', whoItsFor)
app.route('/services', services)
app.route('/why-4997', why4997)
app.route('/about', about)
app.route('/resources', resources)
app.route('/contact', contact)
app.route('/strategy-call', strategyCall)
app.route('/booking-confirmed', bookingConfirmed)

// Blog
app.route('/blog', blog)

// SEO content pages
app.route('/ai-implementation-consultant', aiImplementationConsultant)
app.route('/why-ai-fails', whyAiFails)
app.route('/ai-readiness-assessment', aiReadinessAssessment)
app.route('/implementation-stories', implementationStories)
app.route('/ai-implementation-checklist', aiImplementationChecklist)
app.route('/ai-consultant-atlanta', aiConsultantAtlanta)
app.route('/ai-implementation-for-service-businesses', aiForServiceBusinesses)

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

// Admin CMS redirect — /admin → /admin/ (Decap CMS needs trailing slash)
app.get('/admin', (c) => c.redirect('/admin/', 301))

// 2026 Strategy Call redirects
app.get('/growth-diagnostic', (c) => c.redirect('/strategy-call', 301))
app.get('/ai-assessment', (c) => c.redirect('/strategy-call', 301))

// Legacy redirects — catch common old URLs
app.get('/bookkeeping', (c) => c.redirect('/financial-clarity-intensive'))
app.get('/team-development', (c) => c.redirect('/owner-dependency-intensive'))
app.get('/3-level-business-growth-strategy', (c) => c.redirect('/how-it-works'))
app.get('/profitability-brainstorming-session', (c) => c.redirect('/strategy-call'))
app.get('/value-builder-score-questionnaire', (c) => c.redirect('https://smbstrategyconsultants.com/value-builder-score-questionnaire', 302))
app.get('/pre-score-questionnaire', (c) => c.redirect('https://smbstrategyconsultants.com/pre-score-questionnaire', 302))

// Removed pages redirects
app.get('/strategy-intensives', (c) => c.redirect('/services', 301))
app.get('/ai-enablement', (c) => c.redirect('/ai-operations-intensive', 301))
app.get('/my-profit-life', (c) => c.redirect('/strategy-call', 301))
app.get('/virtual-staffing', (c) => c.redirect('/strategy-call', 301))
app.get('/virtual-cfo', (c) => c.redirect('/financial-clarity-intensive', 301))
app.get('/exit-planning', (c) => c.redirect('/strategy-call', 301))
app.get('/capacity-clarity', (c) => c.redirect('/owner-dependency-intensive', 301))
app.get('/business-baseline', (c) => c.redirect('/financial-clarity-intensive', 301))
app.get('/ai-readiness-deep-dive', (c) => c.redirect('/ai-operations-intensive', 301))
app.get('/executive-summary', (c) => c.redirect('/strategy-call', 301))

export default app
