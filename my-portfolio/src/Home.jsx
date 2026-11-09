import { useEffect } from 'react';
import profileImage from './assets/hack1.jpg';
import heroPortrait from './assets/hero-portrait.webp';

const EMAIL_HREF = 'mailto:wiktoria.szitenhelm@gmail.com?subject=Role%20at%20your%20company';
const LINKEDIN_URL = 'https://www.linkedin.com/in/wszitenhelm/';
const WELLKEY_URL = 'https://wellkey.eu';

const NAV_ITEMS = [
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['About', '#about'],
];

const HIGHLIGHTS = [
  { value: '50 hrs', label: 'saved monthly for a family e-commerce business' },
  { value: '$22K', label: 'grant funding secured to build WellKey' },
  { value: '3×', label: 'international hackathons, including 2 bounty wins' },
];

const PROJECTS = [
  {
    index: '01',
    eyebrow: 'Product engineering · Responsible AI',
    title: 'WellKey',
    lead: 'A B2B early-warning platform for workforce wellbeing, inspired by my own experience of burnout-like symptoms and shaped through direct discovery with HR leaders.',
    details: [
      'Designed anonymous employee check-ins and an aggregated employer dashboard with role-based access.',
      'Built AI-assisted chat with crisis-language safety guardrails and clear failure handling.',
      'Owned product, engineering, fundraising, and go-to-market; secured a $22K grant.',
    ],
    stack: ['TypeScript', 'Vercel', 'Supabase', 'PostgreSQL', 'Realtime', 'LLMs'],
    tone: 'lilac',
    url: WELLKEY_URL,
  },
  {
    index: '02',
    eyebrow: 'AI search · Data engineering',
    title: 'home4u',
    lead: 'More useful, trustworthy real-estate search from messy marketplace data. home4u turns natural-language requests into validated results.',
    details: [
      'Built a complete ingestion pipeline with crawling, normalization, quality checks, and scored deduplication.',
      'Added Gemini-powered semantic search with validated structured filters and a non-AI fallback.',
      'Instrumented AI calls and pipeline health with structured logs, Grafana dashboards, and freshness checks.',
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Gemini', 'Grafana'],
    tone: 'mint',
  },
  {
    index: '03',
    eyebrow: 'E-commerce · Finance automation',
    title: 'Accounting Automation',
    lead: 'Around 50 hours saved every month for a family-run e-commerce business. The automation matches Allegro sales with bank transactions.',
    details: [
      'Brings bank transaction and Allegro marketplace data into one repeatable reconciliation flow.',
      'Matches payments against sales and clearly flags records that need human review.',
      'Replaced hours of repetitive manual checking with a faster, more reliable process.',
    ],
    stack: ['E-commerce', 'Allegro', 'Bank data', 'Reconciliation', 'Validation'],
    tone: 'acid',
  },
  {
    index: '04',
    eyebrow: 'Automation · Local-first AI',
    title: 'Gift Suggestion Agent',
    lead: 'Private gift ideas grounded in relevant personal context, without sending data off-device. This webhook-triggered workflow keeps the data local.',
    details: [
      'Built a RAG pipeline using embeddings and vector search to retrieve only relevant context.',
      'Orchestrated the workflow in n8n and generated grounded suggestions through a locally hosted LLM.',
    ],
    stack: ['n8n', 'Ollama', 'RAG', 'Webhooks', 'Vector search'],
    tone: 'peach',
  },
];

const EXPERIENCE = [
  {
    period: '2026 - now',
    role: 'Independent Software & AI Engineer',
    company: 'Independent',
    summary:
      'Shipping customer-facing software, AI workflows, and third-party integrations from discovery through production.',
    bullets: [
      'Built an accounting automation tool that reconciles bank transactions with marketplace sales, saving a family-run e-commerce business around 50 hours each month.',
      'Delivered a WordPress commerce site with newsletter, events, and PayU payment integrations.',
      'Built WellKey solo: 12+ structured interviews with HR leaders turned into a deployed MVP with role-based access and a safety-checked AI chat.',
    ],
  },
  {
    period: 'May 2025 - Jan 2026',
    role: 'Smart Contract Engineer',
    company: 'XSwap',
    summary:
      'Built and validated a complex cross-chain token and messaging flow between EVM networks and Solana.',
    bullets: [
      'Implemented instruction handling, account management, and message decoding in Rust and Solidity.',
      'Applied security-first validation, state control, and failure handling across the flow.',
    ],
  },
  {
    period: 'Jun 2023 - Jun 2024',
    role: 'Software Engineer',
    company: 'J.P. Morgan · Glasgow',
    summary:
      'Developed a production financial application used daily by internal teams during a major legacy-system migration.',
    bullets: [
      'Owned React/Redux and Java/Spring functionality for reference data, CRUD workflows, and schema migrations.',
      'Handled dual-write transactions across legacy and modern databases with different ID-generation strategies.',
      'Monitored production through CloudWatch and supported resilience testing and deployment before go-live.',
    ],
  },
];

const SKILL_GROUPS = [
  {
    label: 'Build',
    items: 'TypeScript, JavaScript, Python, Java, SQL, Rust, Solidity',
  },
  {
    label: 'AI & automation',
    items: 'LLMs, prompting, tool use, guardrails, RAG, embeddings, semantic search, n8n',
  },
  {
    label: 'Backend & data',
    items: 'REST APIs, webhooks, Next.js, Spring Boot, Prisma, PostgreSQL, MySQL, Supabase',
  },
  {
    label: 'Ship & observe',
    items: 'AWS, CloudWatch, Vercel, Docker, Terraform, CI/CD, GitHub Actions, Grafana',
  },
];

const AWARDS = [
  ['ZKHack Berlin 2025', 'ZKPassport bounty winner · solo build'],
  ['ETHWarsaw 2025', 'Base bounty winner · team project'],
  ['ETHGlobal Cannes 2026', 'ZenAgent · solo build'],
];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Wiktoria Szitenhelm, home">
          WS<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          {NAV_ITEMS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="header-contact" href={EMAIL_HREF}>Email me <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span className="status-dot" /> Available now · remote</p>
            <h1 id="hero-title">I ship production systems, <em>from first idea to live.</em></h1>
            <p className="hero-intro">
              Open to full-time remote roles: <strong>Software Engineer, AI Engineer, Forward Deployed Engineer.</strong> Ex-J.P. Morgan. I build AI workflows and integrations, and I stay close to the people who use them after launch.
            </p>
            <div className="hero-actions">
              <a className="button button-primary hero-primary-cta" href={EMAIL_HREF}>Email me <span>↗</span></a>
              <a className="button button-secondary" href="/CV.pdf" target="_blank" rel="noreferrer">View CV <span>↗</span></a>
              <a className="hero-tertiary" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            </div>
            <a className="hero-work-link" href="#work">See selected work <span>↓</span></a>
          </div>

          <div className="hero-side">
            <div className="hero-sticker" role="img" aria-label="Portrait of Wiktoria Szitenhelm">
              <span className="sticker-orbit" aria-hidden="true" />
              <span className="sticker-dot sticker-dot-lime" aria-hidden="true" />
              <span className="sticker-dot sticker-dot-purple" aria-hidden="true" />
              <span className="sticker-spark" aria-hidden="true">✦</span>
              <div className="sticker-art">
                <img src={heroPortrait} alt="" />
              </div>
            </div>

            <aside className="hero-note" data-reveal aria-label="Current focus">
              <span className="note-number">01</span>
              <div>
                <p>Recently shipped</p>
                <strong>Reconciliation automation (50 hrs a month saved), AI real-estate search, and WellKey, a privacy-first B2B product I built solo.</strong>
              </div>
            </aside>
          </div>
        </section>

        <section className="highlights" aria-label="Career highlights">
          <div className="shell highlights-grid">
            {HIGHLIGHTS.map((item) => (
              <div className="highlight" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section shell" id="work">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Selected work</p>
            <h2>Software built<br />to solve <em>real business problems.</em></h2>
          </div>

          <div className="project-list">
            {PROJECTS.map((project) => (
              <article className={`project-card ${project.tone}`} key={project.title} data-reveal>
                <div className="project-index">{project.index}</div>
                <div className="project-main">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-lead">{project.lead}</p>
                  <ul>
                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                  {project.url && (
                    <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                      Visit WellKey <span>↗</span>
                    </a>
                  )}
                </div>
                <div className="project-stack" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="shell experience-layout">
            <div className="section-heading sticky-heading" data-reveal>
              <p className="eyebrow">Experience</p>
              <h2>Production-minded,<br /><em>people-focused.</em></h2>
              <p className="section-copy">I like owning the whole problem: understanding what people need, making sensible technical tradeoffs, and staying close after launch.</p>
            </div>

            <div className="timeline">
              {EXPERIENCE.map((job) => (
                <article className="timeline-item" key={`${job.company}-${job.role}`} data-reveal>
                  <p className="timeline-period">{job.period}</p>
                  <h3>{job.role}</h3>
                  <p className="timeline-company">{job.company}</p>
                  <p className="timeline-summary">{job.summary}</p>
                  <ul>
                    {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" id="about">
          <div className="about-grid">
            <div className="about-image-wrap" data-reveal>
              <img src={profileImage} alt="Wiktoria Szitenhelm at ZKHack Berlin" />
              <span>Berlin, 2025</span>
            </div>
            <div className="about-copy" data-reveal>
              <p className="eyebrow">A little more about me</p>
              <h2>I care about the system <em>and</em> the person using it.</h2>
              <p>
                My background spans production financial systems, early-stage product building, applied AI, and cross-chain infrastructure. The common thread is making complicated technology understandable and dependable.
              </p>
              <p>
                Experiencing burnout-like symptoms in a demanding work environment led me to found WellKey. I&apos;ve since gathered requirements from HR leaders, mentored students in Python, explained prototypes to hackathon judges, and shipped independently for clients. I&apos;m most useful where engineering judgment and clear communication matter equally. I am looking for a full-time remote role where I can ship, own problems end to end and work closely with users.
              </p>
              <div className="education">
                <span>Education</span>
                <strong>University of Aberdeen</strong>
                <p>MSci Computing Science with Spanish · First Class Honours · 2025</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section">
          <div className="shell">
            <div className="section-heading compact" data-reveal>
              <p className="eyebrow">Toolkit</p>
              <h2>Technology in service of <em>outcomes.</em></h2>
            </div>
            <div className="skills-grid">
              {SKILL_GROUPS.map((group) => (
                <div className="skill-group" key={group.label} data-reveal>
                  <span>{group.label}</span>
                  <p>{group.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell awards-section">
          <div className="section-heading compact" data-reveal>
            <p className="eyebrow">Hackathons &amp; awards</p>
            <h2>Fast builds, clear stories, <em>real recognition.</em></h2>
          </div>
          <div className="awards-list">
            {AWARDS.map(([name, result], index) => (
              <div className="award" key={name} data-reveal>
                <span>0{index + 1}</span>
                <strong>{name}</strong>
                <p>{result}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-inner" data-reveal>
            <p className="eyebrow">Let&apos;s talk</p>
            <h2>Hiring for a software, AI or <em>forward deployed engineer?</em></h2>
            <p className="contact-copy">I can start immediately. Email is the fastest way to reach me.</p>
            <a className="button button-primary contact-button" href={EMAIL_HREF}>Email me <span>↗</span></a>
            <div className="social-links">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/wszitenhelm" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="/Szitenhelm_Wiktoria.pdf" target="_blank" rel="noreferrer">Dissertation ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <p>© {new Date().getFullYear()} Wiktoria Szitenhelm</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
