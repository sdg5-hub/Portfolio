/**
 * Single source of truth for site content. Keeping copy in one place makes
 * iteration fast and keeps the voice consistent: precise, signal-rich, and
 * easy to update as new work ships.
 */

export const identity = {
  name: "Saiyid Gilani",
  initials: "SG",
  role: "Builder · CS + EE · Trustworthy AI",
  institution: "Computer Science & Electrical Engineering — Drexel University",
  location: "Philadelphia, PA",
  email: "sg3949@drexel.edu",
  resumeEmail: "sg3949@drexel.edu",
  phone: "+1 (856) 472-5001",
  tagline:
    "I build systems that earn their trust at the intersection of AI, engineering, and consequence.",
};

export const profileLinks = {
  github: "https://github.com/sdg5-hub",
  linkedin: "https://www.linkedin.com/in/saiyid-o-gilani-6764751b5/",
  instagram: "https://www.instagram.com/saiyidogilani",
  x: "https://x.com/saiyidogilani",
  resume: "/resume.pdf",
};

export const technicalSkillGroups = [
  {
    title: "Languages",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "SQL",
      "Java",
      "Go",
      "C",
      "C#",
      "Rust",
      "Bash",
      "R",
      "LaTeX",
    ],
  },
  {
    title: "Frontend / Product",
    skills: [
      "React",
      "Next.js",
      "Tailwind",
      "Vercel",
      "HTML5",
      "CSS3",
      "Vue.js",
      "Svelte",
      "Redux",
      "Bootstrap",
      "Framer",
      "Figma",
    ],
  },
  {
    title: "Backend / Infrastructure",
    skills: [
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Git",
      "Express.js",
      "Django",
      "Flask",
      "MongoDB",
      "MongoDB Atlas",
      "Redis",
      "Supabase",
      "Firebase",
      "Nginx",
      "Linux",
      "AWS",
    ],
  },
  {
    title: "AI / Data",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
      "OpenAI",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Hugging Face",
      "Transformers",
      "spaCy",
      "XGBoost",
      "LangChain",
      "Weights & Biases",
      "Jupyter Notebook",
      "RStudio",
    ],
  },
  {
    title: "Currently Exploring",
    skills: [
      "LLMs",
      "Privacy Engineering",
      "Data Analytics",
      "Product Engineering",
      "RAG",
      "Agentic Systems",
      "Federated Learning",
      "Vector Databases",
      "MLOps",
      "Edge AI",
      "Distributed Systems",
      "Computer Vision",
    ],
  },
] as const;

export const achievements = [
  {
    label: "Overall Best Hack Award",
    context: "Princeton Hackathon · NGSP",
    kind: "flagship",
  },
  {
    label: "Best UI/UX",
    context: "MedTrack",
    kind: "product",
  },
  {
    label: "Drexel CS + EE",
    context: "Engineering the full stack",
    kind: "edu",
  },
] as const;

export const projects = [
  {
    slug: "ngsp",
    index: "01",
    name: "NGSP",
    tag: "Princeton Hackathon · Overall Best Hack Award",
    signal: "OVERALL BEST HACK",
    headline:
      "A privacy-preserving mediation layer for clinical trial workflows using local models, Safe Harbor stripping, routing, and differential privacy.",
    problem:
      "Clinical trial teams need LLM assistance without leaking protocol language, site details, investigator information, or patient-adjacent context into consumer AI systems.",
    approach:
      "NGSP sits between the user and the model. It strips Safe Harbor identifiers locally, routes sensitive requests to local models, transforms what can safely leave the device, and measures the privacy-utility tradeoff.",
    goal: "Make LLM use safer in high-stakes clinical workflows.",
    focus: "Privacy, utility, and product usability.",
    features: [
      "Safe Harbor stripping before requests leave the device",
      "Local model routing for high-sensitivity clinical text",
      "Privacy-aware prompt transformation for cloud-eligible requests",
      "Differential privacy and utility experiments",
      "Demo and paper workflow for publication",
    ],
    why: "NGSP treats privacy as a product and systems problem, not a checkbox. The point is to preserve useful work while reducing what a model or vendor ever gets to see.",
    stack: ["Python", "local model routing", "experiments", "paper", "demo"],
    links: [
      { label: "GitHub", href: "https://github.com/sdg5-hub/PrincetonSite26" },
      { label: "Paper PDF", href: "/papers/ngsp.pdf" },
    ],
  },
  {
    slug: "medtrack",
    index: "02",
    name: "MedTrack",
    tag: "Best UI/UX · Local-first health app",
    signal: "BEST UI/UX",
    headline:
      "A local-first medication adherence app for reminders, dose outcomes, adherence review, and safety-focused guidance.",
    problem:
      "Medication workflows fail when reminders, dose history, guidance, and emergency information are scattered or fragile. A demo-ready health app still has to feel dependable.",
    approach:
      "MedTrack keeps the core workflow local, clear, and fast: medication CRUD, flexible scheduling, local notifications, dose actions, adherence history, safety checks, and live walkthrough demo mode.",
    goal: "Build a polished, safety-conscious medication tracking experience.",
    focus: "Strong UI/UX, local-first reliability, and clear patient workflow design.",
    features: [
      "Medication management with add, edit, delete, and deactivate flows",
      "Fixed time, interval, day-of-week, and PRN schedules",
      "Local reminder notifications with snooze support",
      "Taken, Snooze, and Skip dose action flow",
      "Adherence history, filters, and status tracking",
      "Safety Check, Missed Dose Guidance, Emergency Card, and demo mode",
    ],
    why: "Medication tools need to reduce cognitive load at the exact moment users are most likely to be tired, busy, or unsure. UI/UX is not polish here. It is part of the safety surface.",
    stack: [
      "TypeScript",
      "React Native",
      "Expo",
      "Expo Router",
      "SQLite",
      "Expo Notifications",
      "Expo Camera",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/sdg5-hub/HopperHackathon2026" },
    ],
  },
  {
    slug: "weavewise",
    index: "03",
    name: "WeaveWise",
    tag: "Sustainability · OCR + LLM extraction",
    signal: "WARDROBE INTELLIGENCE",
    headline:
      "A clothing sustainability tracker that reads garment tags, extracts structured clothing data, and estimates environmental impact for an item or wardrobe.",
    problem:
      "Clothing sustainability data is hard to access. Useful signals are hidden in garment tags, messy label text, research sources, and lifecycle assumptions.",
    approach:
      "WeaveWise turns a tag photo into structured material, origin, and care data, then enriches it with sustainability context and wardrobe-level impact summaries.",
    goal: "Make clothing sustainability information easier to access and understand.",
    focus: "OCR, structured extraction, sustainability analysis, and wardrobe-level insight.",
    features: [
      "Extracts material composition, country of origin, and care details from garment tags",
      "Uses OCR and LLM parsing to structure messy label text",
      "Enriches results with sustainability context and impact factors",
      "Generates garment-level and wardrobe-level impact summaries",
      "Helps users understand the environmental footprint of clothing choices",
    ],
    why: "A garment tag is already a compact data source. WeaveWise makes that data legible enough for people to compare, reflect, and make better choices without needing a research background.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Python",
      "FastAPI",
      "MongoDB Atlas",
      "Groq API",
      "LangGraph",
      "Bright Data",
    ],
    links: [{ label: "GitHub", href: "https://github.com/sdg5-hub/YaleHacks" }],
  },
] as const;

export const sitePages = [
  {
    title: "Photo Gallery",
    href: "/gallery",
    eyebrow: "Archive",
    body: "A visual log for hackathons, campus, builds, people, and moments worth keeping.",
  },
  {
    title: "Blog",
    href: "/blog",
    eyebrow: "Updates",
    body: "Notes on projects, launches, lessons, experiments, and what I am thinking through next.",
  },
  {
    title: "Certifications & Experience",
    href: "/credentials",
    eyebrow: "Credentials",
    body: "A focused record of certifications, experience, roles, awards, and formal milestones.",
  },
] as const;

export type GalleryItem = {
  title: string;
  src: string;
  alt: string;
  date?: string;
  location?: string;
};

export const galleryItems: GalleryItem[] = [];

export type BlogPost = {
  title: string;
  date: string;
  summary: string;
  href?: string;
  tags?: string[];
};

export const blogPosts: BlogPost[] = [];

export type Credential = {
  title: string;
  issuer: string;
  date?: string;
  detail?: string;
  href?: string;
};

export const certifications: Credential[] = [
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "March 25, 2026",
    detail:
      "HackerRank role certification test for software engineering internship readiness. Certificate ID: 07FDF83FD884.",
    href: "https://www.hackerrank.com/certificates/07fdf83fd884",
  },
  {
    title:
      "Implement a Real-Time Intelligence Solution with Microsoft Fabric",
    issuer: "Microsoft",
    date: "March 25, 2026",
    detail:
      "Microsoft Applied Skills credential. Online verifiable. Credential ID: FBC3811D7AB93207.",
    href: "https://learn.microsoft.com/en-us/users/saiyidgilani-8990/",
  },
];

export type ExperienceItem = {
  role: string;
  organization: string;
  date: string;
  detail: string;
  location?: string;
  bullets?: string[];
};

export const education = [
  {
    school: "Drexel University",
    location: "Philadelphia, PA, USA",
    degree: "BSc Computer Science & Electrical Engineering",
    date: "Expected September 2026 - May 2029",
    detail: "Transfer pathway focused on software systems, electrical engineering, and trustworthy AI.",
  },
  {
    school: "Queens College CUNY",
    location: "Queens, NY, USA",
    degree: "BSc Computer Science",
    date: "August 2024 - May 2026",
    detail: "GPA: 3.6; computer science coursework before transfer to Drexel.",
  },
] as const;

export const experience: ExperienceItem[] = [
  {
    role: "Technical Intern",
    organization: "QC Makerspace",
    location: "Queens College, NY, USA",
    date: "September 2025 - Present",
    detail:
      "Technical prototyping, fabrication support, embedded systems troubleshooting, and makerspace operations.",
    bullets: [
      "Built and tested functional prototypes using 3D printing and microcontrollers, reducing iteration time for student engineering projects by 30 percent.",
      "Diagnosed and resolved hardware and embedded systems issues across Arduino, Raspberry Pi, and related electronics platforms.",
      "Operated and maintained advanced fabrication equipment including laser cutters and CNC machines for rapid prototyping.",
    ],
  },
  {
    role: "Research Analyst Intern",
    organization: "Nixxe Solutions",
    location: "NJ, USA · Remote",
    date: "September 2024 - August 2025",
    detail:
      "Research and technical evaluation across automation, data systems, backend infrastructure, and implementation-oriented workflows.",
    bullets: [
      "Analyzed emerging technologies in automation, data systems, and backend infrastructure.",
      "Produced technical evaluations of software tools, computational workflows, and system architectures.",
      "Collaborated with development teams to assess automation concepts and backend designs.",
    ],
  },
  {
    role: "Independent Quantitative Research",
    organization: "Algorithmic Trading Strategy Development",
    date: "April 2024 - Present",
    detail:
      "Rule-based market strategy research with Pine Script, backtesting, drawdown analysis, and robustness evaluation.",
    bullets: [
      "Designed and implemented rule-based trading strategies in Pine Script for momentum, trend-following, and signal-confirmation logic.",
      "Built backtesting workflows to evaluate entry and exit conditions, drawdown behavior, and risk-adjusted performance.",
      "Analyzed performance outcomes to compare strategy robustness under changing market conditions and identify failure points.",
    ],
  },
];

export type ResumeProject = {
  title: string;
  detail: string;
  href?: string;
};

export const resumeProjects: ResumeProject[] = [
  {
    title: "Cornell Digital Agriculture Hackathon 2026 — FarmLink",
    detail:
      "Designed FarmLink, a platform concept for reconnecting nutrient cycles by linking agricultural waste, nutrient recovery, and byproduct reuse between farms.",
  },
  {
    title: "HopperHacks 2026 Stony Brook University — MedTrack",
    detail:
      "Built MedTrack, a medication management prototype supporting scheduling, adherence tracking, and medication history visualization; awarded Best UI/UX.",
    href: "https://github.com/sdg5-hub/HopperHackathon2026",
  },
  {
    title: "YHack 2026 — WeaveWise",
    detail:
      "Engineered a pipeline using OCR and LLM-based parsing to convert garment-tag images into structured textile data, then built a React + MongoDB Atlas system for item and wardrobe sustainability insights.",
    href: "https://github.com/sdg5-hub/YaleHacks",
  },
];

export const extracurriculars = [
  {
    title: "Event Coordinator",
    organization: "QC Computer Science Club",
    date: "September 2024 - Current",
  },
  {
    title: "Research Assistant",
    organization: "Distributed Systems",
    date: "October 2025 - February 2026",
  },
] as const;

export const systemsThoughts = [
  {
    title: "Trust is a system property.",
    body: "You cannot bolt trust onto a model after shipping it. It has to be designed in: provenance, falsifiability, reversibility, and clear ownership of each decision.",
    tag: "TRUST",
  },
  {
    title: "Correctness over hype.",
    body: "The interesting question is never what a model can do in a demo. It is what it is willing to refuse, and whether it is honest about the edges of what it knows.",
    tag: "CORRECTNESS",
  },
  {
    title: "Humans-in-the-loop are not a fallback.",
    body: "They are the loop. The model narrates, the deterministic layer decides, the human governs. Each component stays in the domain where it is actually trustworthy.",
    tag: "HITL",
  },
  {
    title: "Failure modes before features.",
    body: "If I cannot tell you what breaks first and how we would know, I am not ready to ship. Legible failure is the quiet prerequisite of every serious system.",
    tag: "FAILURE",
  },
  {
    title: "Build for consequence.",
    body: "Software that affects decisions about health, money, rights, or identity is not the same as software that sorts photos. Designing for consequence is a craft of its own.",
    tag: "STAKES",
  },
  {
    title: "The low level teaches you the high level.",
    body: "I study electrical engineering because I want to know what the abstractions are hiding. Better product decisions often come from understanding the floor the stack rests on.",
    tag: "DEPTH",
  },
] as const;

export const timeline = [
  {
    when: "2026",
    title: "NGSP — Princeton Hackathon Overall Best Hack Award",
    body: "Built a privacy-preserving mediation layer for clinical trial LLM workflows: local filtering, Safe Harbor stripping, model routing, experiments, demo, and publication path.",
    mark: "FLAGSHIP",
  },
  {
    when: "2026",
    title: "MedTrack — Best UI/UX",
    body: "Shipped a local-first medication adherence app with reminders, dose actions, adherence review, safety guidance, emergency card support, and demo mode.",
    mark: "PRODUCT",
  },
  {
    when: "2026",
    title: "WeaveWise",
    body: "Built a sustainability tracker that turns garment tags into structured data and wardrobe-level environmental impact summaries.",
    mark: "BUILD",
  },
  {
    when: "Ongoing",
    title: "Drexel — CS + EE",
    body: "Studying the full stack from software systems to the hardware underneath, with a focus on trustworthy AI and product reliability.",
    mark: "STUDY",
  },
] as const;

export const dashboardMetrics = [
  { label: "Featured projects", value: "03", unit: "builds" },
  { label: "Hackathon awards", value: "02", unit: "wins" },
  { label: "Public GitHub repos", value: "17", unit: "repos" },
  { label: "GitHub stars", value: "36", unit: "stars" },
];

export const interests = [
  "Trustworthy AI",
  "Human-in-the-loop systems",
  "Clinical workflow privacy",
  "Local-first product design",
  "Sustainability tooling",
  "Low-level + high-level engineering",
];

export const teslaQuote = {
  text: "The present is theirs; the future, for which I really worked, is mine.",
  author: "Nikola Tesla",
};

export const contact = {
  email: identity.email,
  channels: [
    { label: "Email", href: `mailto:${identity.email}`, handle: identity.email },
    { label: "Phone", href: `tel:${identity.phone.replace(/[^\d+]/g, "")}`, handle: identity.phone },
    { label: "Resume", href: profileLinks.resume, handle: "PDF" },
    { label: "GitHub", href: profileLinks.github, handle: "@sdg5-hub" },
    { label: "LinkedIn", href: profileLinks.linkedin, handle: "/in/saiyid-o-gilani" },
    { label: "Instagram", href: profileLinks.instagram, handle: "@saiyidogilani" },
    { label: "X", href: profileLinks.x, handle: "@saiyidogilani" },
  ],
};
