export interface CustomProjectMetadata {
  title?: string;
  type?: string;
  status?: string;
  description?: string;
  tags?: string[];
  homepageUrl?: string;
  highlights?: string[];
  order?: number;
  featured?: boolean;
}

export interface PortfolioConfig {
  githubUsername: string;
  filterStrategy: "topic" | "curated" | "all";
  topicTag: string;
  customMetadata: Record<string, CustomProjectMetadata>;
  fallbackProjects: Array<{
    name: string;
    title: string;
    type: string;
    status: string;
    description: string;
    tags: string[];
    githubUrl: string;
    homepageUrl?: string;
    highlights: string[];
    stars: number;
    forks: number;
    language: string;
    updatedAt: string;
  }>;
}

export const portfolioConfig: PortfolioConfig = {
  githubUsername: "kurtfajutagana",
  
  // Any repo under @kurtfajutagana tagged with 'portfolio' or 'featured' or listed below
  filterStrategy: "topic",
  topicTag: "portfolio",

  customMetadata: {
    "DAMS": {
      title: "DAMS — Dental Appointment & Management System",
      type: "Capstone Project • Full-Stack & AI",
      status: "Production Ready",
      description: "A web-based clinical monitoring system engineered for dental practices. Integrates an AI conversational assistant for patient triage and streamlines electronic prescriptions, treatment histories, and clinic workflows.",
      tags: ["JavaScript", "Node.js", "AI Assistant", "PostgreSQL", "Full-Stack", "RBAC"],
      homepageUrl: "https://teethtalk.vercel.app",
      highlights: [
        "Conversational AI assistant for automated patient inquiries & pre-consultation workflow.",
        "Role-based access control (RBAC) supporting clinic staff, dentists, and patients.",
        "Structured electronic prescription and treatment record monitoring with auditability."
      ],
      order: 1,
      featured: true
    },
    "Faculty-Profiling-System": {
      title: "Academic Faculty Profiling System",
      type: "Institutional Platform • Backend Architecture",
      status: "Academic Platform",
      description: "A centralized web platform replacing manual administrative record-keeping. Manages institutional faculty credentials, educational backgrounds, teaching loads, and departmental assignments with secure role-based controls.",
      tags: ["PHP", "MySQL", "JavaScript", "CRUD Architecture", "Bootstrap", "Relational DB"],
      homepageUrl: "https://faculty-profiling-system.onrender.com",
      highlights: [
        "End-to-end CRUD platform for academic faculty profiles and research portfolios.",
        "Centralized teaching load allocation and departmental categorization.",
        "Relational MySQL database schema optimized for fast administrative lookups."
      ],
      order: 2,
      featured: true
    },
    "kurtfajutagana": {
      title: "Kurt Fajutagana — Personal Developer Portfolio",
      type: "Production Platform • Next.js & Tailwind",
      status: "Live Website",
      description: "A high-performance, future-proof developer portfolio engineered with Next.js 16, Tailwind CSS v4, and automated GitHub API repository synchronization.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub API", "ISR", "Vercel"],
      homepageUrl: "https://kurtfajutagana.vercel.app",
      highlights: [
        "Dynamic GitHub API integration with ISR for zero-maintenance project auto-discovery.",
        "Engineered with Next.js 16 Turbopack and Tailwind CSS v4 glassmorphic theme.",
        "Interactive UX with one-click clipboard actions and responsive navigation."
      ],
      order: 3,
      featured: true
    }
  },

  fallbackProjects: [
    {
      name: "DAMS",
      title: "DAMS — Dental Appointment & Management System",
      type: "Capstone Project • Full-Stack & AI",
      status: "Production Ready",
      description: "A web-based clinical monitoring system engineered for dental practices. Integrates an AI conversational assistant for patient triage and streamlines electronic prescriptions, treatment histories, and clinic workflows.",
      tags: ["JavaScript", "Node.js", "AI Assistant", "PostgreSQL", "Full-Stack", "RBAC"],
      githubUrl: "https://github.com/kurtfajutagana/DAMS",
      homepageUrl: "https://teethtalk.vercel.app",
      highlights: [
        "Conversational AI assistant for automated patient inquiries & pre-consultation workflow.",
        "Role-based access control (RBAC) supporting clinic staff, dentists, and patients.",
        "Structured electronic prescription and treatment record monitoring with auditability."
      ],
      stars: 0,
      forks: 0,
      language: "JavaScript",
      updatedAt: "2026-09-24"
    },
    {
      name: "Faculty-Profiling-System",
      title: "Academic Faculty Profiling System",
      type: "Institutional Platform • Backend Architecture",
      status: "Academic Platform",
      description: "A centralized web platform replacing manual administrative record-keeping. Manages institutional faculty credentials, educational backgrounds, teaching loads, and departmental assignments with secure role-based controls.",
      tags: ["PHP", "MySQL", "JavaScript", "CRUD Architecture", "Bootstrap", "Relational DB"],
      githubUrl: "https://github.com/kurtfajutagana/Faculty-Profiling-System",
      homepageUrl: "https://faculty-profiling-system.onrender.com",
      highlights: [
        "End-to-end CRUD platform for academic faculty profiles and research portfolios.",
        "Centralized teaching load allocation and departmental categorization.",
        "Relational MySQL database schema optimized for fast administrative lookups."
      ],
      stars: 0,
      forks: 0,
      language: "PHP",
      updatedAt: "2026-09-24"
    },
    {
      name: "kurtfajutagana",
      title: "Kurt Fajutagana — Personal Developer Portfolio",
      type: "Production Platform • Next.js & Tailwind",
      status: "Live Website",
      description: "A high-performance, future-proof developer portfolio engineered with Next.js 16, Tailwind CSS v4, and automated GitHub API repository synchronization.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub API", "ISR", "Vercel"],
      githubUrl: "https://github.com/kurtfajutagana/kurtfajutagana",
      homepageUrl: "https://kurtfajutagana.vercel.app",
      highlights: [
        "Dynamic GitHub API integration with ISR for zero-maintenance project auto-discovery.",
        "Engineered with Next.js 16 Turbopack and Tailwind CSS v4 glassmorphic theme.",
        "Interactive UX with one-click clipboard actions and responsive navigation."
      ],
      stars: 0,
      forks: 0,
      language: "TypeScript",
      updatedAt: "2026-09-24"
    }
  ]
};
