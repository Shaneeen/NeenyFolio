import type {
  AboutPanel,
  ClubItem,
  EventItem,
  ExperienceItem,
  HighlightCard,
  NavItem,
  PlaygroundFact,
  PlaygroundFavorite,
  Project,
  SkillItem
} from "@/lib/types";

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/playground", label: "Playground" }
];

export const heroHighlights: HighlightCard[] = [
  {
    label: "Who I am",
    title: "Shaneen",
    description:
      "IT student building portfolio-ready projects with thoughtful UX and clean code.",
    tags: ["software", "AI"]
  },
  {
    label: "Currently building",
    title: "This portfolio",
    description:
      "Practicing component architecture and turning rough ideas into structured digital products.",
    tags: ["Next.js", "TypeScript"]
  },
  {
    label: "What I love",
    title: "Clean interfaces",
    description:
      "Readable systems, polished details, and purposeful visuals that feel considered.",
    tags: ["UI/UX", "design systems"]
  }
];

export const heroMarquee = [
  "Building with Next.js",
  "Tiny details matter",
  "Shaneen · IT Student",
  "Software + Systems",
  "Clean interfaces",
  "Blush + Sage + Bone"
];

export const projectsFallback: Project[] = [
  {
    slug: "ai-simulation-engine",
    category: "AI & Systems",
    title: "AI Simulation Engine",
    icon: "🌿",
    description:
      "Agent-based system modeling complex interactions and emergent behavior in shared environments.",
    year: "2024",
    stack: ["Python", "ML", "Simulation"],
    overview:
      "An intelligent simulation platform for exploring agent behavior in constrained systems."
  },
  {
    slug: "dashboard-ui-system",
    category: "Frontend",
    title: "Dashboard UI System",
    icon: "🌸",
    description:
      "Modular, accessible dashboard with real-time visualisation and a clean component system.",
    year: "2024",
    stack: ["Next.js", "TypeScript", "D3.js"]
  },
  {
    slug: "interactive-learning-app",
    category: "UX Build",
    title: "Interactive Learning App",
    icon: "🍂",
    description:
      "Gamified educational tool with adaptive content, progress tracking, and engaging micro-interactions.",
    year: "2023",
    stack: ["React", "Tailwind", "Firebase"]
  },
  {
    slug: "smart-resume-parser",
    category: "AI & Systems",
    title: "Smart Resume Parser",
    icon: "🤖",
    description:
      "NLP-powered tool that extracts, structures, and scores resume content against job descriptions.",
    year: "2024",
    stack: ["Python", "NLP", "FastAPI"]
  },
  {
    slug: "neenyfolio",
    category: "Creative",
    title: "Neenyfolio",
    icon: "✦",
    description:
      "A multi-page personal site with soft glassmorphism, editorial typography, and room to grow.",
    year: "2025",
    stack: ["Next.js", "Tailwind", "Design"]
  },
  {
    slug: "component-library",
    category: "Frontend",
    title: "Component Library",
    icon: "📦",
    description:
      "A personal design system of reusable themed components for rapid project scaffolding.",
    year: "2024",
    stack: ["React", "Storybook", "CSS Vars"]
  }
];

export const experienceTimelineFallback: ExperienceItem[] = [
  {
    period: "Mar 2026 - Jul 2026",
    title: "Software Engineer Intern",
    organization: "RAiD by AETHER",
    description:
      "Worked on AI and simulation-focused development, exploring intelligent systems, agent workflows, and Unreal Engine-based experimentation.",
    tags: ["Internship", "AI", "Simulation"]
  },
  {
    period: "Apr 2022 - May 2026",
    title: "Diploma in Information Technology with Merit",
    organization: "Nanyang Polytechnic",
    description:
      "Graduated with Merit while building a strong foundation in software development, systems thinking, and collaborative project work.",
    tags: ["Education", "Leadership", "Merit"],
    highlights: [
      {
        label: "NYPSU",
        role: "Subcommittee Leader",
        kind: "Leadership",
        description: "Served as Subcommittee Leader and contributed to student union initiatives and coordination work."
      },
      {
        label: "NYPPSC",
        role: "Vice President",
        kind: "Leadership",
        description: "Held the role of Vice President, supporting leadership, planning, and student-facing activities."
      },
      {
        label: "Mentoring Club",
        role: "Training Executive",
        kind: "Leadership",
        description: "Worked as Training Executive, helping shape mentoring preparation and member development."
      },
      {
        label: "Service Pillar",
        role: "Council Chief",
        kind: "Leadership",
        description: "Served as Council Chief for the Community Service Pillar and supported community-oriented initiatives."
      },
      {
        label: "Director's List",
        role: "Y1S1 - Y3S2",
        kind: "Recognition",
        description: "Achieved Director's List recognition consistently from Y1S1 to Y3S2."
      },
      {
        label: "Harmony Champion",
        role: "Nanyang Polytechnic Representative",
        kind: "Recognition",
        description: "Represented Nanyang Polytechnic as a Harmony Champion."
      }
    ]
  },
  {
    period: "Dec 2025 - Feb 2026",
    title: "Junior Software Developer Intern",
    organization: "Chang Cheng Holdings Pte Ltd",
    description:
      "Contributed to enterprise software systems and internal web applications that supported operational workflows and business processes.",
    tags: ["Internship", "Software Development", "Enterprise"]
  },
  {
    period: "Jan 2018 - Dec 2021",
    title: "Woodgrove Secondary School",
    organization: "Woodgrove Secondary School",
    description:
      "Completed secondary school with an EMB3 score of 7 while actively contributing to co-curricular leadership.",
    tags: ["Education", "Leadership"],
    highlights: [
      {
        label: "Woodgrove Choral",
        role: "Soprano Section Leader",
        kind: "Leadership",
        description: "Served as Soprano Section Leader and took on leadership responsibilities within the choir."
      },
      {
        label: "Good Character Award",
        role: "School Recognition",
        kind: "Recognition",
        description: "Received the Good Character Award in recognition of conduct and contribution."
      },
      {
        label: "EMB3 Score",
        role: "Score of 7",
        kind: "Academic",
        description: "Graduated with an EMB3 score of 7."
      }
    ]
  }
];

export const currentClubsFallback: ClubItem[] = [
  {
    name: "Computing Club",
    role: "Tech Director",
    icon: "💻",
    description: "Helped shape technical initiatives, club web presence, and workshop experiences for members."
  },
  {
    name: "Design Society",
    role: "Active Member",
    icon: "🎨",
    description: "Joined design-focused activities, critiques, and creative collaborations that sharpened my visual thinking."
  },
  {
    name: "GreenTech SIG",
    role: "Co-founder",
    icon: "🌱",
    description: "Supported early planning and direction for a student space focused on sustainability and technology."
  },
  {
    name: "Women in Tech",
    role: "Mentee",
    icon: "📚",
    description: "Took part in mentoring conversations and growth opportunities within a supportive women-in-tech community."
  }
];

export const eventsFallback: EventItem[] = [
  {
    year: "2024",
    category: "Hackathon",
    title: "Hack & Roll 2024",
    organization: "NUS",
    description:
      "Built a health-tech concept in 24 hours, pitched it live, and finished as a Top 10 finalist.",
    tags: ["Team Lead", "Health Tech", "Top 10"],
    icon: "🏆"
  },
  {
    year: "2024",
    category: "Workshop Series",
    title: "Frontend Fundamentals Sessions",
    organization: "Computing Club",
    description:
      "Designed and delivered beginner-friendly workshops covering HTML, CSS, JavaScript, and portfolio basics.",
    tags: ["Speaker", "Web Dev", "Community"],
    icon: "🎤"
  },
  {
    year: "2023",
    category: "Showcase",
    title: "Internal Project Showcase",
    organization: "NUS Computing Club",
    description:
      "Presented an interactive learning project and received Best UI/UX recognition for the overall experience design.",
    tags: ["UI/UX", "Presentation", "Award"],
    icon: "🎖"
  }
];

export const aboutPanelsFallback: AboutPanel[] = [
  {
    eyebrow: "Who I am",
    title: "A creative builder in tech",
    body:
      "I'm Shaneen, an IT student who cares deeply about the intersection of software and design. Good interfaces should feel considered, not just functional."
  },
  {
    eyebrow: "What I build",
    title: "Thoughtful digital things",
    body:
      "From AI systems and interactive simulations to polished frontend builds and dashboards, I enjoy the point where clean architecture meets expressive UI."
  },
  {
    eyebrow: "How I think",
    title: "Detail-first, always",
    body:
      "I care about readable code, purposeful visuals, and the tiny interactions that make something feel alive. If something feels slightly off, I'll keep refining."
  }
];

export const skillsFallback: SkillItem[] = [
  { name: "React / Next.js", description: "Component architecture and routing", icon: "⚛" },
  { name: "TypeScript", description: "Type-safe frontend code", icon: "🟦" },
  { name: "Python", description: "AI, scripting, backend logic", icon: "🐍" },
  { name: "UI/UX Design", description: "Figma, prototyping, systems", icon: "🎨" },
  { name: "Databases", description: "SQL, Postgres, Firebase", icon: "🗄" },
  { name: "AI & ML", description: "LLMs, agents, simulation systems", icon: "🤖" },
  { name: "Tailwind CSS", description: "Responsive utility-first styling", icon: "🌿" },
  { name: "Cloud & APIs", description: "REST, deployment, integrations", icon: "☁" }
];

export const playgroundFactsFallback: PlaygroundFact[] = [
  { id: "01", text: "I can solve a Rubik's cube in under 3 minutes." },
  { id: "02", text: "I've redesigned my bedroom layout 6 times in 2 years." },
  { id: "03", text: "My first project was a handwritten HTML site about my cat." },
  { id: "04", text: "I keep a physical notebook of UI ideas from train rides." }
];

export const playgroundFavoritesFallback: PlaygroundFavorite[] = [
  { name: "Beabadoobee", type: "Music · Indie / Dream Pop", tag: "on repeat", icon: "🎵" },
  { name: "Thinking, Fast and Slow", type: "Book · Kahneman", tag: "reading", icon: "📖" },
  { name: "Oat milk cortado", type: "Drink · daily ritual", tag: "obsessed", icon: "☕" },
  { name: "Stardew Valley", type: "Game · cozy farming", tag: "comfort", icon: "🎮" },
  { name: "Matcha latte aesthetics", type: "Vibe · lifestyle", tag: "always", icon: "🌿" }
];
