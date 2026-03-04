import profileImage from './assets/hack1.jpg';

const HERO = {
  name: 'Wiktoria Szitenhelm',
  title: 'Blockchain Engineer (Solidity + Rust / Cross-Chain Systems)',
  subtitle:
    'I build secure smart contracts and cross-chain infrastructure across Ethereum and Solana, focusing on deterministic execution, cryptographic security mechanisms, and reliable on-chain state transitions.',
};

const SNAPSHOT = [
  {
    title: 'Cross-chain messaging prototype',
    body: 'EVM <-> Solana (Chainlink CCIP)',
  },
  {
    title: 'Languages',
    body: 'Solidity · Rust (Anchor) · TypeScript',
  },
  {
    title: 'Focus areas',
    bullets: [
      'Smart contract security mindset',
      'Cross-chain infrastructure',
      'Cryptographic validation',
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
    role: 'Freelance Developer',
    meta: 'Remote | 2025 – Present',
    stack: [
      'Solidity',
      'Rust (Anchor)',
      'Ethereum',
      'Solana',
      'Cross-chain messaging',
      'Web integrations',
    ],
    summary:
      'Working independently on web development projects while continuing to deepen expertise in blockchain systems, smart contracts, and distributed architectures.',
    focusAreas:
      'Focus areas: blockchain infrastructure, decentralized applications, and product development.',
    bullets: [
      'Delivered a production website for a wellness professional, including payment processing, newsletter subscriptions, and booking functionality (implemented using WordPress with custom integrations).',
      'Participated in blockchain hackathons, building decentralized application prototypes and exploring privacy-preserving interactions.',
      'Conducted research and technical exploration related to smart contracts, distributed systems, and cross-chain infrastructure.',
      'Worked on product strategy and MVP definition for a personal wellbeing startup exploring technology for mental health and self-reflection.',
      'Continued developing skills in Solidity, Rust, and decentralized application architecture.',
    ],
    closing:
      'Key activities include client work, participation in blockchain hackathons, and research and product design for a personal startup focused on digital wellbeing.',
  },
  {
    role: 'Smart Contract Engineer — XSwap',
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
    role: 'Software Engineer — J.P. Morgan',
    meta: 'Glasgow | 2023–2024',
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
    stack: 'dApp prototyping | Privacy | Blockchain hackathons',
    description:
      'Built decentralized hackathon prototypes with two separate tracks focused on practical web3 UX and privacy-preserving interactions.',
    bullets: [
      'Base Bounty (2025): built a decentralized tutor-student matchmaking dApp.',
      'ZKPassport Bounty (2025): designed anonymous zero-knowledge form submission for privacy-preserving data interaction.',
    ],
    links: [],
  },
  {
    title: 'Cryptography Project — Hash Cracking Experiments',
    stack: 'Python | Security analysis | Cryptography',
    description:
      'Implemented multiple password-cracking strategies including brute-force, dictionary attacks, salted hashes, and rainbow tables in Python.',
    bullets: [
      'Benchmarked performance across attack methods.',
      'Analyzed the impact of hashing strategies and salting on security outcomes.',
    ],
    links: [],
  },
  {
    title: 'Virtual Disk Filesystem',
    stack: 'C | Systems programming | Memory management',
    description:
      'Implemented an in-memory filesystem in C supporting file creation, directory management, read/write operations, and metadata handling.',
    bullets: [
      'Focused on filesystem structures and memory allocation.',
      'Designed efficient data access patterns for core filesystem operations.',
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
  'Protocol design',
  'Cryptography in smart contracts',
  'Cross-chain interoperability',
  'Secure smart contract architecture',
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

const sectionClass = 'mx-auto w-full max-w-[1200px] px-6 py-[100px]';
const cardClass =
  'rounded-xl border border-[#374151] bg-[#1F2937] p-6 transition-colors duration-200 hover:border-[#6366F1]';

export default function Home() {
  return (
    <>
      <section className={`${sectionClass} pb-16`}>
        <div className="rounded-2xl border border-[#374151] bg-[#111827] p-10">
          <h1 className="text-4xl font-bold leading-tight text-[#F9FAFB] md:text-6xl">{HERO.name}</h1>
          <p className="mt-4 text-xl font-semibold text-[#818CF8] md:text-2xl">{HERO.title}</p>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#9CA3AF]">{HERO.subtitle}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-[#6366F1] px-6 py-3 font-medium text-white transition-colors hover:bg-[#818CF8]">
              View Projects
            </a>
            <a
              href="https://github.com/wszitenhelm"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#374151] bg-transparent px-6 py-3 font-medium text-[#F9FAFB] transition-colors hover:border-[#818CF8] hover:text-[#818CF8]"
            >
              GitHub
            </a>
            <a
              href="/cv-wiktoria-szitenhelm.pdf"
              download
              className="rounded-lg border border-[#374151] bg-transparent px-6 py-3 font-medium text-[#F9FAFB] transition-colors hover:border-[#818CF8] hover:text-[#818CF8]"
            >
              Download CV
            </a>
            <a href="#contact" className="rounded-lg border border-[#374151] bg-transparent px-6 py-3 font-medium text-[#F9FAFB] transition-colors hover:border-[#818CF8] hover:text-[#818CF8]">
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} pt-0`}>
        <h2 className="text-3xl font-bold text-[#F9FAFB]">Engineering Snapshot</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {SNAPSHOT.map((item) => (
            <article key={item.title} className={cardClass}>
              <h3 className="text-lg font-semibold text-[#F9FAFB]">{item.title}</h3>
              {item.bullets ? (
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#9CA3AF]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[#9CA3AF]">{item.body}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass} id="about">
        <h2 className="text-3xl font-bold text-[#F9FAFB]">About</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-[30%_70%] md:items-start">
          <div className="flex justify-center md:justify-start">
            <img
              src={profileImage}
              alt="Wiktoria Szitenhelm"
              className="h-[280px] w-[280px] rounded-full border border-[#374151] object-cover"
            />
          </div>
          <div className="rounded-xl border border-[#374151] bg-[#1F2937] p-4 text-[#9CA3AF]">
            <p className="text-sm leading-relaxed">
              I’m a blockchain engineer specialising in smart contracts, cross-chain communication, and distributed systems.
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              My work focuses on building secure on-chain logic, designing reliable execution flows, and implementing cryptographic security mechanisms within decentralized applications.
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              I have experience developing smart contracts on Ethereum and Solana, building cross-chain messaging prototypes, and implementing backend services and APIs in production environments.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#F9FAFB]">Engineering Interests</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#9CA3AF]">
                {INTERESTS.map((interest) => (
                  <li key={interest}>• {interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionClass} id="vision">
        <h2 className="text-3xl font-bold text-[#F9FAFB]">Engineering Approach</h2>
        <p className="mt-4 text-[#9CA3AF]">Focus on deterministic, secure systems.</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {APPROACH.map((principle) => (
            <article key={principle.title} className={cardClass}>
              <h3 className="font-semibold text-[#F9FAFB]">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass} id="experience">
        <h2 className="text-3xl font-bold text-[#F9FAFB]">Work Experience</h2>
        <div className="mt-8 space-y-8">
          {EXPERIENCE.map((job) => (
            <article key={job.role} className={cardClass}>
              <h3 className="text-2xl font-semibold text-[#F9FAFB]">{job.role}</h3>
              <p className="mt-2 text-sm text-[#9CA3AF]">{job.meta}</p>
              <p className="mt-5 leading-relaxed text-[#9CA3AF]">{job.summary}</p>
              {job.focusAreas && (
                <p className="mt-4 text-sm font-medium text-[#818CF8]">{job.focusAreas}</p>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-[#374151] bg-[#111827] px-3 py-1 text-xs text-[#9CA3AF]">
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#F9FAFB]">Key contributions</h4>
              <ul className="mt-4 space-y-3 text-[#9CA3AF]">
                {job.bullets.map((item) => (
                  <li key={item} className="leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-[#9CA3AF]">{job.closing}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass} id="projects">
        <h2 className="text-3xl font-bold text-[#F9FAFB]">Projects</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className={`${cardClass} border-l-4 border-l-[#6366F1] bg-gradient-to-b from-[#1F2937] to-[#111827]`}
            >
              <h3 className="text-xl font-semibold text-[#F9FAFB]">{project.title}</h3>
              <p className="mt-3 inline-block rounded-full border border-[#374151] bg-[#111827] px-3 py-1 font-mono text-xs text-[#818CF8]">
                {project.stack}
              </p>
              <p className="mt-4 leading-relaxed text-[#9CA3AF]">{project.description}</p>
              {project.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#9CA3AF]">
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

      <section className={sectionClass} id="skills">
        <h2 className="text-3xl font-bold text-[#F9FAFB]">Skills</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {Object.entries(SKILLS).map(([group, items]) => (
            <article key={group} className={cardClass}>
              <h3 className="text-lg font-semibold text-[#F9FAFB]">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full border border-[#374151] bg-[#111827] px-3 py-1 text-xs text-[#9CA3AF]">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass} id="writing">
        <h2 className="text-3xl font-bold text-[#F9FAFB]">Technical Writing</h2>
        <article className={`${cardClass} mt-8`}>
          <h3 className="text-xl font-semibold text-[#F9FAFB]">{WRITING.title}</h3>
          <p className="mt-3 text-[#9CA3AF]">{WRITING.summary}</p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-[#F9FAFB]">
            Topics covered include
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[#9CA3AF]">
            {WRITING.topics.map((topic) => (
              <li key={topic}>• {topic}</li>
            ))}
          </ul>
          <p className="mt-5 text-[#9CA3AF]">{WRITING.closing}</p>
          <a
            className="mt-6 inline-flex rounded-lg border border-[#374151] px-4 py-2 text-sm text-[#F9FAFB] transition-colors hover:border-[#818CF8] hover:text-[#818CF8]"
            href={WRITING.paperHref}
            target="_blank"
            rel="noreferrer"
          >
            Read the full paper
          </a>
        </article>
      </section>

      <section className={sectionClass} id="contact">
        <h2 className="text-3xl font-bold text-[#F9FAFB]">Contact</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#9CA3AF]">
          If you are working on blockchain protocols, smart contract systems, or cross-chain infrastructure and looking for engineers, feel free to reach out.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <a className={cardClass} href="mailto:wiktoria.szitenhelm@gmail.com">
            <h3 className="text-lg font-semibold text-[#F9FAFB]">Email</h3>
            <p className="mt-2 text-sm text-[#9CA3AF]">wiktoria.szitenhelm@gmail.com</p>
          </a>
          <a
            className={cardClass}
            href="https://www.linkedin.com/in/wszitenhelm/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="text-lg font-semibold text-[#F9FAFB]">LinkedIn</h3>
            <p className="mt-2 text-sm text-[#9CA3AF]">linkedin.com/in/wszitenhelm</p>
          </a>
          <a className={cardClass} href="https://github.com/wszitenhelm" target="_blank" rel="noreferrer">
            <h3 className="text-lg font-semibold text-[#F9FAFB]">GitHub</h3>
            <p className="mt-2 text-sm text-[#9CA3AF]">github.com/wszitenhelm</p>
          </a>
        </div>
      </section>

      <footer className="border-t border-[#374151] bg-[#111827]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-6 py-8 text-sm text-[#9CA3AF] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Wiktoria Szitenhelm</p>
          <p>Blockchain Engineer · Solidity · Rust · Cross-chain Systems</p>
        </div>
      </footer>
    </>
  );
}
