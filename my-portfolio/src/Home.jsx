import { useEffect } from 'react';
import profileImage from './assets/hack1.jpg';

const HERO = {
  name: 'Wiktoria Szitenhelm',
  title: 'Software Engineer',
  subtitle:
    'I build reliable backend and full-stack software, with experience in Java, Python, TypeScript, distributed systems, and blockchain applications.',
};

const SNAPSHOT = [
  {
    title: 'Cross-chain messaging prototype',
    body: 'EVM <-> Solana (Chainlink CCIP)',
  },
  {
    title: 'Languages',
    body: 'Python · Java · TypeScript · Rust · Solidity',
  },
  {
    title: 'Focus areas',
    bullets: [
      'Backend and API engineering',
      'Algorithms and systems programming',
      'Applied AI, NLP, and product development',
    ],
  },
  {
    title: 'Background',
    body: 'Software Engineer - J.P. Morgan\nFull-stack development (React + Spring Boot) · APIs · cloud infrastructure',
  },
];

const APPROACH = [
  {
    title: 'Validation before execution',
    body: 'Ensure instructions are verified before state changes occur.',
  },
  {
    title: 'Deterministic state transitions',
    body: 'Design contract logic so outcomes are predictable and reproducible.',
  },
  {
    title: 'Modular architecture',
    body: 'Separate decoding, validation, and execution layers.',
  },
  {
    title: 'Extensive testing',
    body: 'Integration and simulation tests for complex transaction flows.',
  },
  {
    title: 'Developer-friendly systems',
    body: 'Clear documentation and reproducible tooling for builders.',
  },
];

const EXPERIENCE = [
  {
    role: 'Mental Wellbeing Initiative - Founder',
    meta: 'Remote | 02/2026 - Present',
    stack: ['AI workflows', 'Product direction', 'User research', 'Technical architecture'],
    summary:
      'Building an AI-assisted wellbeing platform focused on adolescent mental health and emotional support.',
    bullets: [
      'Currently participating in a startup incubation program focused on early-stage product development.',
      'Leading MVP planning, product direction, user research, and technical architecture.',
      'Exploring AI-assisted workflows and conversational systems designed to support emotional wellbeing, healthy habits, and mental resilience.',
    ],
    closing:
      'This work combines product thinking, technical planning, and user-centered software design in an early-stage startup environment.',
  },
  {
    role: 'Freelance Developer',
    meta: 'Remote | 2025 - Present',
    stack: [
      'Web integrations',
      'Payments',
      'Booking systems',
      'Product delivery',
      'Python',
      'Software architecture',
    ],
    summary:
      'Working independently on web development projects while continuing to deepen expertise across software systems, integrations, product delivery, and selected distributed-system topics.',
    focusAreas:
      'Focus areas: client delivery, product development, integrations, and technical exploration.',
    bullets: [
      'Delivered a production website for a wellness professional, including payment processing, newsletter subscriptions, and booking functionality (implemented using WordPress with custom integrations).',
      'Participated in blockchain hackathons, building decentralized application prototypes and exploring privacy-preserving interactions.',
      'Conducted research and technical exploration related to distributed systems, software architecture, smart contracts, and product workflows.',
      'Worked on product strategy and MVP definition for a personal wellbeing startup exploring technology for mental health and self-reflection.',
      'Continued developing skills in Python, Solidity, Rust, and software architecture across different stacks.',
    ],
    closing:
      'Key activities include client work, startup product definition, and hands-on engineering across both conventional software and emerging technical domains.',
  },
  {
    role: 'Smart Contract Engineer - XSwap',
    meta: 'Remote | 2025',
    stack: ['Rust (Anchor)', 'Solidity', 'Chainlink CCIP', 'TypeScript'],
    summary:
      'Worked on a cross-chain messaging and token swap prototype connecting Ethereum-compatible networks and Solana via Chainlink CCIP. The system explored how cross-chain instructions can be validated and executed safely across heterogeneous blockchain environments.',
    bullets: [
      'Implemented Solana On-Ramp and Off-Ramp programs in Rust using Anchor responsible for receiving cross-chain messages and executing instructions.',
      'Developed Solidity smart contracts handling cross-chain message routing and token transfer flows on the EVM side.',
      'Designed architecture separating payload decoding, validation, and execution layers to improve security and maintainability.',
      'Implemented structured payload decoding and validation logic ensuring deterministic execution of cross-chain instructions.',
      'Managed SPL token accounts and token transfer operations within Solana programs.',
      'Built TypeScript integration scripts and automated tests simulating cross-chain transaction flows.',
      'Contributed to modular code organisation and documentation improving developer experience.',
    ],
    closing:
      'This work required understanding cross-chain messaging protocols, distributed system execution models, and secure smart contract architecture.',
  },
  {
    role: 'Software Engineer - J.P. Morgan',
    meta: 'Glasgow | 2023-2024',
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'AWS', 'Terraform'],
    summary:
      'Worked on modernising a legacy enterprise system into a modern full-stack architecture used for financial workflows.',
    bullets: [
      'Migrated a legacy Sybase / PowerBuilder system into a React + Spring Boot architecture.',
      'Designed and implemented REST APIs connecting frontend and backend services.',
      'Implemented backend logic handling structured business workflows and data processing.',
      'Developed automated testing using JUnit and Cucumber.',
      'Designed PostgreSQL schemas and supported large-scale data migration.',
      'Managed infrastructure using AWS and Terraform.',
      'Worked within an Agile Scrum engineering team, participating in sprint planning and code reviews.',
    ],
    closing:
      'This experience provided strong foundations in backend architecture, distributed systems thinking, and production engineering practices.',
  },
];

const PROJECTS = [
  {
    title: 'NLP Project (2024)',
    stack: 'Python | spaCy | pandas | numpy | nltk | machine learning',
    description:
      'Used NLP techniques to analyze a dataset and solve language-processing tasks across classical and evaluation-focused workflows.',
    bullets: [
      'Extracted frequent words, verbs, POS tags, cosine similarity, perplexity, and correlation coefficient.',
      'Trained a binary logistic regression classifier to predict accuracy.',
      'Computed BLEU and BERTScore for model evaluation.',
    ],
    links: [],
  },
  {
    title: 'Bubble Sort and Quicksort Time Performance Comparison (2024)',
    stack: 'Algorithms | Performance analysis',
    description:
      'Compared the time performance of Bubble Sort and Quicksort to analyze algorithmic efficiency in practice.',
    bullets: [
      'Measured and compared runtime behavior across sorting strategies.',
      'Used the project to reason about algorithm complexity and performance tradeoffs.',
    ],
    links: [],
  },
  {
    title: 'Hash-cracking (2024)',
    stack: 'Python | Security | Performance analysis',
    description:
      'Implemented password-hash search algorithms using brute force, dictionary attacks, salted-hash search, and rainbow tables.',
    bullets: [
      'Compared the performance of different cracking strategies.',
      'Analyzed the impact of hashing strategies and salting on security.',
    ],
    links: [],
  },
  {
    title: 'Virtual Disk (2022)',
    stack: 'C | Systems programming | In-memory filesystem',
    description:
      'Implemented a simple virtual in-memory file system that manages files and directories and supports core file operations.',
    bullets: [
      'Added reading, writing, deleting, and metadata handling.',
      'Focused on memory allocation, filesystem structure, and efficient data access patterns.',
    ],
    links: [],
  },
  {
    title: 'Automated Planner (2022)',
    stack: 'A* | Heuristics | Planning systems',
    description:
      'Implemented core planning-system functions including heuristic evaluation, plan validation, and A* search.',
    bullets: [
      'Built a heuristic function and a validator capable of checking a plan against a domain and a problem.',
      'Implemented heuristic search with A*.',
    ],
    links: [],
  },
  {
    title: 'Algorithmic Problem Solving - Moving Home (2022)',
    stack: 'Optimization | 2D/3D packing | Algorithms',
    description:
      'Developed a program for 2D/3D truck packing with boxes of different sizes and positions for optimized unpacking through different human-chain strategies.',
    bullets: [
      'Modeled packing constraints and unloading logic algorithmically.',
      'Focused on optimization and practical decision making.',
    ],
    links: [],
  },
  {
    title: 'Solidity vs Rust in Smart Contract Development (2025)',
    stack: 'Solidity | Rust (Anchor) | JavaScript',
    description:
      'Comparative smart contract engineering work across Ethereum and Solana focused on security, execution behavior, and developer workflow.',
    bullets: [
      'Designed and implemented a secure e-voting smart contract with financial staking using commit-reveal, hashing, and digital signature verification to ensure on-chain security and privacy.',
      'Built the same system in Solidity (Ethereum) and Rust + Anchor (Solana) to compare execution models, security considerations, and performance.',
      'Wrote JavaScript scripts for deployment and testing across both ecosystems.',
      'Gained hands-on experience with Solana account model, instruction handling, and state serialization.',
    ],
    links: [],
  },
  {
    title: 'Dividend Distribution dApp (2026)',
    stack: 'ERC20 Token Pool System',
    description:
      'Smart contract application enabling token deposits and proportional dividend distributions.',
    bullets: [
      'Dual-token system: USD Token (ERC20) and Pool Token.',
      '1:1 deposit and withdrawal mechanism.',
      'Proportional dividend distribution based on pool share.',
      'Automated proceeds withdrawal system.',
      'Clear code documentation covering contract structure, token flow, and operational assumptions.',
    ],
    links: [],
  },
  {
    title: 'Hackathons (2025)',
    stack: 'dApp prototyping | Privacy | Product engineering',
    description:
      'Built decentralized hackathon prototypes with separate tracks focused on practical web3 UX and privacy-preserving interactions.',
    bullets: [
      'Base Bounty (2025): built a decentralized tutor-student matchmaking dApp.',
      'ZKPassport Bounty (2025): designed anonymous zero-knowledge form submission for privacy-preserving data interaction.',
    ],
    links: [],
  },
];

const SKILLS = {
  Blockchain: [
    'Solidity',
    'Rust (Anchor)',
    'Ethereum',
    'Solana',
    'Chainlink CCIP',
    'cross-chain messaging',
    'smart contract security patterns',
    'cryptography',
  ],
  Programming: ['Rust', 'Solidity', 'JavaScript', 'TypeScript', 'Python', 'Java'],
  Backend: ['Spring Boot', 'Node.js', 'REST APIs', 'Jest', 'Cucumber'],
  Infrastructure: ['AWS', 'Terraform', 'CI/CD', 'Git'],
};

const INTERESTS = [
  'Backend and distributed systems',
  'Applied AI and NLP',
  'Algorithms and optimization',
  'Developer tooling and product engineering',
];

const WRITING = {
  title: 'Solidity vs Rust in Smart Contract Development',
  summary:
    'Research dissertation exploring differences between EVM and Solana smart contract execution models.',
  topics: [
    'commit-reveal schemes preventing front-running',
    'digital signature verification for authenticated contract interaction',
    'hashing mechanisms for state verification',
    'security trade-offs between EVM and Solana execution environments',
  ],
  closing:
    'Includes implementation of a secure voting protocol with financial staking and commit-reveal mechanism.',
  paperHref: '/Szitenhelm_Wiktoria.pdf',
};

const sectionClass = 'reveal mx-auto w-full max-w-[1200px] px-6 pt-[64px] pb-[100px]';
const cardClass =
  'rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[#111827] p-6 [transition:all_0.25s_ease] hover:-translate-y-1 hover:border-[rgba(99,102,241,0.4)] hover:bg-[#1F2937] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]';
const primaryButtonClass =
  'rounded-lg bg-[linear-gradient(135deg,#6366F1,#8B5CF6)] px-6 py-3 font-medium text-white [transition:all_0.25s_ease] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(99,102,241,0.35)]';
const secondaryButtonClass =
  'rounded-lg border border-[rgba(255,255,255,0.15)] bg-transparent px-6 py-3 font-medium text-[#E5E7EB] [transition:all_0.25s_ease] hover:-translate-y-0.5 hover:border-[#6366F1] hover:bg-[rgba(99,102,241,0.1)]';

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className={`${sectionClass} section-tone-a relative overflow-hidden pb-16`}>
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_60%)] blur-2xl" />
        <div className="relative rounded-2xl border border-[rgba(99,102,241,0.25)] bg-[#111827] p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <h1 className="text-5xl font-bold leading-tight text-[#E5E7EB] md:text-[56px]">{HERO.name}</h1>
          <p className="mt-4 text-xl font-semibold md:text-2xl bg-[linear-gradient(90deg,#6366F1,#22D3EE)] bg-clip-text text-transparent">
            {HERO.title}
          </p>
          <p className="mt-6 max-w-4xl text-base leading-[1.6] text-[#9CA3AF]">{HERO.subtitle}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className={primaryButtonClass}>
              View Projects
            </a>
            <a
              href="https://github.com/wszitenhelm"
              target="_blank"
              rel="noreferrer"
              className={secondaryButtonClass}
            >
              GitHub
            </a>
            <a
              href="/CV.pdf"
              download
              className={secondaryButtonClass}
            >
              Download CV
            </a>
            <a href="#contact" className={secondaryButtonClass}>
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} section-tone-b`}>
        <h2 className="text-[32px] font-bold text-[#E5E7EB]">Engineering Snapshot</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {SNAPSHOT.map((item) => (
            <article key={item.title} className={cardClass}>
              <h3 className="text-xl font-semibold text-[#E5E7EB]">{item.title}</h3>
              {item.bullets ? (
                <ul className="mt-3 space-y-2 text-base leading-[1.6] text-[#9CA3AF]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 whitespace-pre-line text-base leading-[1.6] text-[#9CA3AF]">{item.body}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} section-tone-a`} id="about">
        <h2 className="text-[32px] font-bold text-[#E5E7EB]">About</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-[30%_70%] md:items-start">
          <div className="flex justify-center md:justify-start">
            <img
              src={profileImage}
              alt="Wiktoria Szitenhelm"
              className="h-[280px] w-[280px] rounded-full border-[3px] border-[rgba(99,102,241,0.4)] object-cover shadow-[0_0_40px_rgba(99,102,241,0.35)]"
            />
          </div>
          <div className="rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[#111827] p-4 text-[#9CA3AF] [transition:all_0.25s_ease] hover:border-[rgba(99,102,241,0.4)] hover:bg-[#1F2937]">
            <p className="text-base leading-[1.6]">
              I’m a software engineer with experience across backend systems, full-stack development, algorithms, systems programming, and applied AI, with blockchain engineering as one part of that broader profile.
            </p>
            <p className="mt-4 text-base leading-[1.6]">
              My work focuses on building reliable software, designing clear system logic, and solving technical problems across different stacks, from Java and Spring Boot to Python, NLP, and lower-level systems work in C.
            </p>
            <p className="mt-4 text-base leading-[1.6]">
              In 2024, I also moved into the web3 space and started contributing there through research, hackathons, and hands-on blockchain engineering work.
            </p>
            <p className="mt-4 text-base leading-[1.6]">
              I have experience implementing backend services and APIs in production environments, building technical academic projects across algorithms and systems, and developing specialized work in blockchain, security, and distributed applications.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#E5E7EB]">Engineering Interests</h3>
              <ul className="mt-3 space-y-2 text-base leading-[1.6] text-[#9CA3AF]">
                {INTERESTS.map((interest) => (
                  <li key={interest}>• {interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} section-tone-b`} id="vision">
        <h2 className="text-[32px] font-bold text-[#E5E7EB]">Engineering Approach</h2>
        <p className="mt-4 text-[#9CA3AF]">Focus on deterministic, secure systems.</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {APPROACH.map((principle) => (
            <article key={principle.title} className={cardClass}>
              <h3 className="text-xl font-semibold text-[#E5E7EB]">{principle.title}</h3>
              <p className="mt-3 text-base leading-[1.6] text-[#9CA3AF]">{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} section-tone-a`} id="experience">
        <h2 className="text-[32px] font-bold text-[#E5E7EB]">Work Experience</h2>
        <div className="mt-8 space-y-8">
          {EXPERIENCE.map((job) => (
            <article key={job.role} className={cardClass}>
              <h3 className="text-xl font-semibold text-[#E5E7EB]">{job.role}</h3>
              <p className="mt-2 text-sm text-[#9CA3AF]">{job.meta}</p>
              <p className="mt-5 text-base leading-[1.6] text-[#9CA3AF]">{job.summary}</p>
              {job.focusAreas && (
                <p className="mt-4 text-sm font-medium text-[#818CF8]">{job.focusAreas}</p>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.12)] px-[10px] py-[6px] text-[13px] text-[#C7D2FE] [transition:all_0.25s_ease] hover:bg-[rgba(99,102,241,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#F9FAFB]">Key contributions</h4>
              <ul className="mt-4 space-y-3 text-[#9CA3AF]">
                {job.bullets.map((item) => (
                  <li key={item} className="text-base leading-[1.6]">
                    • {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-base leading-[1.6] text-[#9CA3AF]">{job.closing}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} section-tone-b`} id="projects">
        <h2 className="text-[32px] font-bold text-[#E5E7EB]">Projects</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.title} className={cardClass}>
              <div className="mb-4 h-[3px] w-full rounded-[3px] bg-[linear-gradient(90deg,#6366F1,#22D3EE)]" />
              <h3 className="text-xl font-semibold text-[#E5E7EB]">{project.title}</h3>
              <p className="mt-3 inline-block rounded-full border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.12)] px-[10px] py-[6px] font-mono text-[13px] text-[#C7D2FE] [transition:all_0.25s_ease] hover:bg-[rgba(99,102,241,0.2)]">
                {project.stack}
              </p>
              <p className="mt-4 text-base leading-[1.6] text-[#9CA3AF]">{project.description}</p>
              {project.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 text-base leading-[1.6] text-[#9CA3AF]">
                  {project.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              )}
              {project.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <button
                      key={link}
                      type="button"
                      className="rounded-lg border border-[#374151] px-4 py-2 text-sm text-[#F9FAFB] transition-colors hover:border-[#818CF8] hover:text-[#818CF8]"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} section-tone-a`} id="skills">
        <h2 className="text-[32px] font-bold text-[#E5E7EB]">Skills</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {Object.entries(SKILLS).map(([group, items]) => (
            <article key={group} className={cardClass}>
              <h3 className="text-xl font-semibold text-[#E5E7EB]">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.12)] px-[10px] py-[6px] text-[13px] text-[#C7D2FE] [transition:all_0.25s_ease] hover:bg-[rgba(99,102,241,0.2)]">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} section-tone-b`} id="writing">
        <h2 className="text-[32px] font-bold text-[#E5E7EB]">Technical Writing</h2>
        <article className={`${cardClass} mt-8`}>
          <h3 className="text-xl font-semibold text-[#E5E7EB]">{WRITING.title}</h3>
          <p className="mt-3 text-base leading-[1.6] text-[#9CA3AF]">{WRITING.summary}</p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-[#E5E7EB]">
            Topics covered include
          </p>
          <ul className="mt-3 space-y-2 text-base leading-[1.6] text-[#9CA3AF]">
            {WRITING.topics.map((topic) => (
              <li key={topic}>• {topic}</li>
            ))}
          </ul>
          <p className="mt-5 text-base leading-[1.6] text-[#9CA3AF]">{WRITING.closing}</p>
          <a
            className="mt-6 inline-flex rounded-lg border border-[rgba(255,255,255,0.15)] px-4 py-2 text-sm text-[#E5E7EB] [transition:all_0.25s_ease] hover:-translate-y-0.5 hover:border-[#6366F1] hover:bg-[rgba(99,102,241,0.1)]"
            href={WRITING.paperHref}
            target="_blank"
            rel="noreferrer"
          >
            Read the full paper
          </a>
        </article>
      </section>

      <section className={`${sectionClass} section-tone-a`} id="contact">
        <h2 className="text-[32px] font-bold text-[#E5E7EB]">Contact</h2>
        <p className="mt-4 max-w-3xl text-base leading-[1.6] text-[#9CA3AF]">
          If you are hiring for software engineering roles across backend, full-stack, Python, product engineering, or distributed systems, feel free to reach out.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <a className={cardClass} href="mailto:wiktoria.szitenhelm@gmail.com">
            <h3 className="text-xl font-semibold text-[#E5E7EB]">Email</h3>
            <p className="mt-2 text-sm text-[#9CA3AF]">wiktoria.szitenhelm@gmail.com</p>
          </a>
          <a
            className={cardClass}
            href="https://www.linkedin.com/in/wszitenhelm/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="text-xl font-semibold text-[#E5E7EB]">LinkedIn</h3>
            <p className="mt-2 text-sm text-[#9CA3AF]">linkedin.com/in/wszitenhelm</p>
          </a>
          <a className={cardClass} href="https://github.com/wszitenhelm" target="_blank" rel="noreferrer">
            <h3 className="text-xl font-semibold text-[#E5E7EB]">GitHub</h3>
            <p className="mt-2 text-sm text-[#9CA3AF]">github.com/wszitenhelm</p>
          </a>
        </div>
      </section>

      <footer className="border-t border-[#374151] bg-[#111827]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-6 py-8 text-sm text-[#9CA3AF] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Wiktoria Szitenhelm</p>
          <p>Software Engineer · Backend · Full-stack · Distributed Systems</p>
        </div>
      </footer>
    </>
  );
}
