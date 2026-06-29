import { Hono } from 'hono'

const landingPages = new Hono()

// Growth Constraint Quiz
landingPages.get('/growth-constraint-quiz', (c) => {
  return c.render(
    <div>
      <section class="hero section-lg bg-dark">
        <div class="container" style="max-width:720px;">
          <span class="eyebrow hero-eyebrow">3-Minute Diagnostic</span>
          <h1>Find your growth constraint.</h1>
          <p class="lead">Answer 8 questions about your business and identify which of the four foundational pillars is most likely holding your ceiling in place — and what to do about it.</p>
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
              <a href="/strategy-call" class="btn btn-primary btn-lg">Book Your Free Strategy Call</a>
              <p style="font-size:0.8rem; color:var(--color-text-muted); margin-top:0.75rem;">Identify your full constraint analysis and a clear implementation roadmap. Free.</p>
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
            title: "Financial Clarity",
            desc: "Your primary constraint is financial visibility. The business is making decisions without reliable data. The Financial Clarity track is your foundational next step.",
            cta: "/financial-clarity-intensive"
          },
          growth: {
            title: "Growth Systems",
            desc: "Your primary constraint is a pipeline or positioning problem. Lead flow is inconsistent or depends too heavily on the founder. The Growth Systems track addresses this directly.",
            cta: "/growth-systems-intensive"
          },
          capacity: {
            title: "Owner Dependency",
            desc: "Your primary constraint is owner dependency. The business cannot scale because too much runs through you. The Owner Dependency track installs the team-led rhythm needed for adoption.",
            cta: "/owner-dependency-intensive"
          },
          ai: {
            title: "AI Operations",
            desc: "Your primary constraint is an AI adoption gap. You know the tools exist but have no framework for installation. The AI Operations track gives you exactly that.",
            cta: "/ai-operations-intensive"
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
          if (!area) return;
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

        window.selectOption = function(idx) {
          document.querySelectorAll('.quiz-option').forEach((el, i) => {
            el.classList.toggle('selected', i === idx);
          });
          selectedOption = idx;
          document.getElementById('next-btn').removeAttribute('disabled');
        }

        window.nextQ = function() {
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

        window.prevQ = function() {
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
            '<a href="' + r.cta + '" class="btn btn-outline-gold btn-sm mt-3">Learn About the ' + r.title + ' Track</a>' +
            '</div>';
        }

        renderQuestion();
      `}} />
    </div>,
    { title: 'Growth Constraint Quiz', description: 'Take the free growth constraint quiz and discover what is really blocking leverage in your service business.', activeNav: '' }
  )
})

export default landingPages
