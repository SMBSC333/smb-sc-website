import { Hono } from 'hono'

const landingPages = new Hono()

// Growth Diagnostic Landing Page
landingPages.get('/growth-diagnostic', (c) => {
  return c.render(
    <div>
      <section class="hero section-lg bg-dark">
        <div class="container">
          <span class="eyebrow hero-eyebrow">Free. Live. One clear next step.</span>
          <h1>Book the Free Growth Diagnostic.</h1>
          <p class="lead">In one guided working session, we identify the constraint that is creating bottlenecks, slowing decisions, and limiting momentum — and show you the next best move for your business.</p>
          <div class="hero-actions">
            <a href="https://link.pipelinedash.com/widget/form/5OCNv2Z4BjJKEjGTIrHq" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Book the Growth Diagnostic Now</a>
          </div>
          <p class="hero-microcopy">Free. No obligation. You leave with a written 30–90 day focus plan.</p>
        </div>
      </section>

      <section class="section bg-surface">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">What the Diagnostic Is</span>
              <h2>Not a pitch. A working session.</h2>
              <div class="gold-line"></div>
              <p>The Growth Diagnostic is a structured 60-minute conversation where we look at your business across all four growth pillars — Financial Foundations, Brand and Strategy, Growth Acceleration, and Capacity — and identify the primary constraint holding the most growth hostage.</p>
              <p>By the end of the session, you will know exactly what your number-one problem is, why it exists, and what the first move is to resolve it. Whether you continue working with us or not.</p>
            </div>
            <div>
              <h4 class="mb-3">What you walk away with:</h4>
              <ul class="pain-list">
                <li>Your primary growth constraint — identified and named</li>
                <li>Root cause analysis of why it exists</li>
                <li>A 30–90 day written priority plan</li>
                <li>A clear recommendation for which engagement path fits your stage</li>
                <li>An AI readiness score for your current operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section bg-dark">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">The Four Pillars We Review</span>
            <h2>We look at the whole business — not just one area.</h2>
          </div>
          <div class="grid-4">
            <div class="card card-accent text-center">
              <div class="card-number">01</div>
              <h4>Financial Foundations</h4>
              <p style="font-size:0.82rem;">Cash flow, profit visibility, reporting reliability</p>
            </div>
            <div class="card card-accent text-center">
              <div class="card-number">02</div>
              <h4>Brand and Strategy</h4>
              <p style="font-size:0.82rem;">Positioning, messaging, pipeline architecture</p>
            </div>
            <div class="card card-accent text-center">
              <div class="card-number">03</div>
              <h4>Growth Acceleration</h4>
              <p style="font-size:0.82rem;">Lead flow, conversion systems, follow-through</p>
            </div>
            <div class="card card-accent text-center">
              <div class="card-number">04</div>
              <h4>Capacity</h4>
              <p style="font-size:0.82rem;">Team structure, delegation, AI integration</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section bg-surface">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <div class="testimonial">
                <p class="testimonial-text">Corbin has the ability to keep us at the 10,000 foot level and brings insights and discernment that we need to keep our business growing with a long-range plan. The service is exceptional.</p>
                <p class="testimonial-author">Client, Multi-Year Engagement</p>
              </div>
            </div>
            <div>
              <span class="eyebrow">Who This Is For</span>
              <h3 class="mb-3">Service-based businesses in the $500K–$10M range.</h3>
              <p>You have revenue and a team. Something is working. But growth has stalled, complexity has outpaced structure, or the owner is working too hard for the results the business is producing. The Growth Diagnostic is the fastest way to identify what to fix first.</p>
              <a href="https://link.pipelinedash.com/widget/form/5OCNv2Z4BjJKEjGTIrHq" class="btn btn-primary btn-lg mt-3" target="_blank" rel="noopener">Book the Free Growth Diagnostic</a>
            </div>
          </div>
        </div>
      </section>
    </div>,
    { title: 'Book the Free Growth Diagnostic', activeNav: '' }
  )
})

// AI Readiness Assessment Landing Page
landingPages.get('/ai-assessment', (c) => {
  return c.render(
    <div>
      <section class="hero section-lg bg-dark">
        <div class="container">
          <span class="eyebrow hero-eyebrow">Free Assessment — Know Where to Start</span>
          <h1>Find out where AI creates margin in your business.</h1>
          <p class="lead">The free AI Readiness Assessment scores your current operations against AI opportunity areas and identifies your highest-leverage workflow — the one that moves the needle fastest with the least disruption.</p>
          <div class="hero-actions">
            <a href="https://link.pipelinedash.com/widget/form/5OCNv2Z4BjJKEjGTIrHq" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Book the Free AI Assessment</a>
          </div>
          <p class="hero-microcopy">Free. Live. You leave with a scored readiness report and a recommended first step.</p>
        </div>
      </section>

      <section class="section bg-surface">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">The Assessment</span>
              <h2>A scored evaluation of your AI opportunity — not a generic tool audit.</h2>
              <div class="gold-line"></div>
              <p>The AI Readiness Assessment reviews your current operations across five dimensions: workflow complexity, team adoption capacity, tool environment, delivery cost structure, and owner leverage leverage leverage leverage leverage leverage leverage leverage leverage.</p>
              <p>The output is a scored readiness report that tells you where AI is appropriate in your business today — and where it would create more problems than it solves.</p>
            </div>
            <div>
              <h4 class="mb-3">What you leave with:</h4>
              <ul class="pain-list">
                <li>AI readiness score across five operational dimensions</li>
                <li>Top 1–2 workflow candidates for AI installation</li>
                <li>Guardrail requirements for each workflow identified</li>
                <li>Recommended first implementation step and timeline</li>
                <li>Clear picture of where AI is not appropriate yet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section bg-dark">
        <div class="container">
          <div class="grid-2" style="align-items:center; gap:4rem;">
            <div>
              <span class="eyebrow">The Economic Case</span>
              <h2>The margin window is open now. It will not stay open.</h2>
              <div class="gold-line"></div>
              <p>AI is compressing the cost to deliver professional services faster than most owners realize. The businesses that install AI into their delivery model today will widen their margins significantly over the next 24 months.</p>
              <p>The businesses that wait will find their margins squeezed from both sides — costs staying high, prices falling as the market normalizes. The assessment tells you exactly what to do first.</p>
              <a href="https://link.pipelinedash.com/widget/form/5OCNv2Z4BjJKEjGTIrHq" class="btn btn-primary mt-3" target="_blank" rel="noopener">Book the Free AI Readiness Assessment</a>
            </div>
            <div>
              <div class="grid-2" style="gap:1rem;">
                <div class="stat-block" style="background:var(--color-bg-card); border:1px solid var(--color-bg-border); border-radius:var(--radius-lg);">
                  <div class="stat-number">60%</div>
                  <div class="stat-label">reduction in owner time on repetitive outreach workflows</div>
                </div>
                <div class="stat-block" style="background:var(--color-bg-card); border:1px solid var(--color-bg-border); border-radius:var(--radius-lg);">
                  <div class="stat-number">90</div>
                  <div class="stat-label">days to measurable results from bounded AI installations</div>
                </div>
                <div class="stat-block" style="background:var(--color-bg-card); border:1px solid var(--color-bg-border); border-radius:var(--radius-lg);">
                  <div class="stat-number">24mo</div>
                  <div class="stat-label">window to capture maximum margin advantage</div>
                </div>
                <div class="stat-block" style="background:var(--color-bg-card); border:1px solid var(--color-bg-border); border-radius:var(--radius-lg);">
                  <div class="stat-number">1–3</div>
                  <div class="stat-label">focused workflows — not an overwhelming overhaul</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>,
    { title: 'Free AI Readiness Assessment', activeNav: '' }
  )
})

// Growth Constraint Quiz
landingPages.get('/growth-constraint-quiz', (c) => {
  return c.render(
    <div>
      <section class="hero section-lg bg-dark">
        <div class="container" style="max-width:720px;">
          <span class="eyebrow hero-eyebrow">3-Minute Diagnostic</span>
          <h1>Find your growth constraint.</h1>
          <p class="lead">Answer 8 questions about your business and identify which of the four growth pillars is most likely holding your ceiling in place — and what to do about it.</p>
        </div>
      </section>

      <section class="section bg-surface">
        <div class="container" style="max-width:680px;">
          <div id="quiz-container">
            <div class="quiz-progress">
              <div class="quiz-progress-bar" id="progress-bar" style="width:12.5%;"></div>
            </div>
            <p id="quiz-step-label" style="font-size:0.78rem; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:1.5rem;">Question 1 of 8</p>
            <div id="quiz-question-area"></div>
          </div>
          <div id="quiz-result" style="display:none;">
            <span class="eyebrow mb-3" style="display:block;">Your Primary Growth Constraint</span>
            <div id="result-content"></div>
            <div style="margin-top:2rem;">
              <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Book the Free Growth Diagnostic</a>
              <p style="font-size:0.8rem; color:var(--color-text-muted); margin-top:0.75rem;">The Growth Diagnostic gives you a full constraint analysis and a 30–90 day written plan. Free.</p>
            </div>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        const questions = [
          {
            q: "When a significant business decision needs to be made, who makes it?",
            options: [
              { text: "Almost always me — I'm involved in every major decision", score: { capacity: 2 } },
              { text: "Me and a few key team members, but it takes longer than it should", score: { capacity: 1, finance: 1 } },
              { text: "The team handles most decisions with defined escalation paths", score: {} },
              { text: "I'm not sure who owns what — it depends on the situation", score: { capacity: 2, growth: 1 } }
            ]
          },
          {
            q: "How would you describe your current cash flow visibility?",
            options: [
              { text: "I know our balance today but I'm not sure what it looks like in 30 days", score: { finance: 2 } },
              { text: "We have a forecast but I don't fully trust the numbers", score: { finance: 2 } },
              { text: "We have reliable monthly reporting and a 13-week forecast", score: {} },
              { text: "I review the bank balance and that's about it", score: { finance: 3 } }
            ]
          },
          {
            q: "Where do most of your new clients come from?",
            options: [
              { text: "Almost entirely referrals — we have no consistent lead generation system", score: { growth: 2 } },
              { text: "A mix of referrals and some marketing, but it's unpredictable", score: { growth: 1 } },
              { text: "A defined process with multiple consistent sources", score: {} },
              { text: "Primarily me going out and selling personally", score: { growth: 2, capacity: 1 } }
            ]
          },
          {
            q: "How would you describe your team's execution without you in the room?",
            options: [
              { text: "Things slip or stall when I'm not directly involved", score: { capacity: 2 } },
              { text: "Most things run okay but the important stuff needs me", score: { capacity: 1 } },
              { text: "The team runs well on most things independently", score: {} },
              { text: "I'm not sure — I haven't tested it recently", score: { capacity: 2 } }
            ]
          },
          {
            q: "How often do you review your financial statements with the intent to make decisions from them?",
            options: [
              { text: "Monthly — they drive my planning conversations", score: {} },
              { text: "Occasionally, but I don't always know what to do with them", score: { finance: 2 } },
              { text: "Mainly at tax time with my accountant", score: { finance: 3 } },
              { text: "I focus on revenue — the financials are handled by someone else", score: { finance: 2 } }
            ]
          },
          {
            q: "How would you describe your current positioning in the market?",
            options: [
              { text: "We're clear — clients understand exactly what makes us different", score: {} },
              { text: "We're somewhat differentiated but our message could be sharper", score: { growth: 1 } },
              { text: "We sound a lot like our competitors — I'm not sure what sets us apart", score: { growth: 2 } },
              { text: "We haven't really defined a positioning — we take what comes", score: { growth: 2 } }
            ]
          },
          {
            q: "Where are you on AI integration in your business?",
            options: [
              { text: "We have a plan and workflows running", score: {} },
              { text: "I've experimented but nothing has stuck or scaled", score: { ai: 2 } },
              { text: "I know I need to do something but I don't know where to start", score: { ai: 2 } },
              { text: "We haven't started — it feels risky or overwhelming", score: { ai: 3 } }
            ]
          },
          {
            q: "If you could only fix one thing in the next 90 days, what would it be?",
            options: [
              { text: "Get a clear, reliable picture of our cash and profit", score: { finance: 2 } },
              { text: "Build a consistent, predictable pipeline", score: { growth: 2 } },
              { text: "Get the team operating without me at every decision", score: { capacity: 2 } },
              { text: "Figure out where and how to use AI without breaking things", score: { ai: 2 } }
            ]
          }
        ];

        const results = {
          finance: {
            title: "Financial Foundations",
            desc: "Your primary constraint is financial clarity. The business is making decisions without reliable data — or the data exists but is not being used to drive strategy. The Finance Intensive is your next step.",
            cta: "/strategy-intensives#finance"
          },
          growth: {
            title: "Brand and Growth Strategy",
            desc: "Your primary constraint is a pipeline or positioning problem. Lead flow is inconsistent, the message is not converting at the rate it should, or the sales process depends too heavily on the founder. The Growth Intensive addresses this directly.",
            cta: "/strategy-intensives#growth"
          },
          capacity: {
            title: "Capacity and Team Structure",
            desc: "Your primary constraint is owner dependency. The business cannot scale because too much runs through you. The Capacity Intensive installs the structure, delegation framework, and operating rhythm that changes this.",
            cta: "/strategy-intensives#capacity"
          },
          ai: {
            title: "AI Enablement",
            desc: "Your primary constraint is an AI adoption gap. You know the tools exist but you have no framework for deciding where to start and how to install them safely. The AI Enablement Intensive gives you exactly that.",
            cta: "/ai-enablement"
          }
        };

        let scores = { finance: 0, growth: 0, capacity: 0, ai: 0 };
        let currentQ = 0;
        let selectedOption = null;

        function renderQuestion() {
          const q = questions[currentQ];
          const area = document.getElementById('quiz-question-area');
          const progress = document.getElementById('progress-bar');
          const label = document.getElementById('quiz-step-label');
          progress.style.width = ((currentQ + 1) / questions.length * 100) + '%';
          label.textContent = 'Question ' + (currentQ + 1) + ' of ' + questions.length;
          area.innerHTML = '<h3 style="margin-bottom:1.5rem; font-size:1.25rem;">' + q.q + '</h3>' +
            q.options.map((opt, i) =>
              '<button class="quiz-option" onclick="selectOption(' + i + ')">' + opt.text + '</button>'
            ).join('') +
            (currentQ > 0 ? '<div style="display:flex;gap:1rem;margin-top:1rem;">' : '<div style="margin-top:1rem;">') +
            (currentQ > 0 ? '<button onclick="prevQ()" class="btn btn-ghost btn-sm">Back</button>' : '') +
            '<button id="next-btn" onclick="nextQ()" class="btn btn-primary btn-sm" disabled>Next</button></div>';
          selectedOption = null;
        }

        function selectOption(idx) {
          document.querySelectorAll('.quiz-option').forEach((el, i) => {
            el.classList.toggle('selected', i === idx);
          });
          selectedOption = idx;
          document.getElementById('next-btn').removeAttribute('disabled');
        }

        function nextQ() {
          if (selectedOption === null) return;
          const scoreObj = questions[currentQ].options[selectedOption].score;
          Object.keys(scoreObj).forEach(k => { scores[k] += scoreObj[k]; });
          currentQ++;
          if (currentQ >= questions.length) {
            showResult();
          } else {
            renderQuestion();
          }
        }

        function prevQ() {
          if (currentQ > 0) { currentQ--; renderQuestion(); }
        }

        function showResult() {
          document.getElementById('quiz-container').style.display = 'none';
          const result = document.getElementById('quiz-result');
          result.style.display = 'block';
          const topConstraint = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
          const r = results[topConstraint];
          document.getElementById('result-content').innerHTML =
            '<div class="highlight-box">' +
            '<h3 style="color:var(--color-gold);margin-bottom:1rem;">' + r.title + '</h3>' +
            '<p>' + r.desc + '</p>' +
            '<a href="' + r.cta + '" class="btn btn-outline btn-sm mt-3">Learn About the ' + r.title.split(' ')[0] + ' Intensive</a>' +
            '</div>';
        }

        renderQuestion();
      `}} />
    </div>,
    { title: 'Growth Constraint Quiz — Find Your Growth Ceiling', activeNav: '' }
  )
})

// Partner Referral Landing Page
landingPages.get('/partner-referral', (c) => {
  return c.render(
    <div>
      <section class="hero section-lg bg-dark">
        <div class="container">
          <span class="eyebrow hero-eyebrow">Referred by a Partner</span>
          <h1>The 90-Day Business Growth Intensive.</h1>
          <p class="lead">A focused, results-specific engagement for service-based businesses in the $1M–$5M range that are ready to install real systems and see measurable movement within a single quarter.</p>
          <div class="hero-actions">
            <a href="/growth-diagnostic" class="btn btn-primary btn-lg">Apply for the 90-Day Sprint</a>
          </div>
          <p class="hero-microcopy">Start with the free Growth Diagnostic. The sprint begins after we confirm the fit.</p>
        </div>
      </section>

      <section class="section bg-surface">
        <div class="container">
          <div class="grid-2" style="align-items:start; gap:4rem;">
            <div>
              <span class="eyebrow">The Growth Acceleration Sprint</span>
              <h2>90 days. Two constraints addressed. Measurable results.</h2>
              <div class="gold-line"></div>
              <p>The Growth Acceleration System Sprint is our most structured engagement for businesses that need to move fast. In 90 days, we address your top two growth constraints — whether that is financial clarity, pipeline systems, team capacity, or AI integration — and install the operating rhythm that holds the improvements in place after the sprint ends.</p>
              <p>It is not a consulting report. It is a working engagement with deliverables, accountability, and measurable benchmarks at every stage.</p>
            </div>
            <div>
              <h4 class="mb-3">What the 90-Day Sprint includes:</h4>
              <ul class="pain-list">
                <li>Growth Diagnostic and constraint prioritization</li>
                <li>Two Strategy Intensives — one for each top constraint</li>
                <li>90-day roadmap and implementation support</li>
                <li>Weekly operating cadence and check-ins</li>
                <li>AI integration assessment and 1 workflow installation</li>
                <li>End-of-sprint review and next-phase planning</li>
              </ul>
              <a href="/growth-diagnostic" class="btn btn-primary mt-4">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section bg-dark">
        <div class="container">
          <div class="section-header center">
            <span class="eyebrow">About SMB Strategy Consultants</span>
            <h2>Trusted by service-based business owners across the Southeast and beyond.</h2>
          </div>
          <div class="grid-3">
            <div class="testimonial">
              <p class="testimonial-text">SMB Strategy Consultants has been a great resource for our company. Corbin keeps us at the 10,000 foot level and brings insights we need to keep growing with a long-range plan.</p>
              <p class="testimonial-author">Client, Multi-Year Engagement</p>
            </div>
            <div class="testimonial">
              <p class="testimonial-text">Corbin is able to quickly understand the nuances of your business and has been invaluable in introducing me to key people to help me transform and grow.</p>
              <p class="testimonial-author">Steve Thompson</p>
            </div>
            <div class="testimonial">
              <p class="testimonial-text">What I thought would be short-term turned into a successful two-year partnership. The team managed all bookkeeping and reporting and gave guidance on many aspects of our business and strategy.</p>
              <p class="testimonial-author">Gerrie van Niekerk</p>
            </div>
          </div>
        </div>
      </section>
    </div>,
    { title: '90-Day Business Growth Intensive — Apply Now', activeNav: '' }
  )
})

export default landingPages
