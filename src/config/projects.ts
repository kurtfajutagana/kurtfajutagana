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
    "PG-WasmLab": {
      title: "PG-WasmLab — In-Browser PostgreSQL & Performance Lab",
      type: "Zero-Server Utility • WebAssembly & DB",
      status: "Production Ready",
      description: "A zero-infrastructure database testing tool running an entire PostgreSQL engine inside the browser. Enables instant query profiling, indexing performance experiments, and plan analysis with zero server hosting costs.",
      tags: ["TypeScript", "PostgreSQL", "WebAssembly", "PGlite", "Next.js", "Tailwind CSS"],
      homepageUrl: "https://pg-wasm-lab.vercel.app/",
      highlights: [
        "Runs client-side Postgres 16 entirely in WebAssembly with $0 backend hosting overhead.",
        "Visual EXPLAIN ANALYZE execution cost breakdown helping diagnose slow database queries.",
        "Interactive indexing and schema benchmark lab with persistent browser storage."
      ],
      order: 1,
      featured: true
    },
    "DAMS": {
      title: "DAMS — Dental Clinic & Patient Management Portal",
      type: "Client Platform • Full-Stack & AI Triage",
      status: "Production Ready",
      description: "A secure web portal engineered for dental clinics and healthcare practices. Replaces manual paper workflows with automated AI patient inquiry triage, role-based staff access, and audit-ready digital medical records.",
      tags: ["JavaScript", "Node.js", "AI Assistant", "PostgreSQL", "Full-Stack", "RBAC"],
      homepageUrl: "https://teethtalk.vercel.app",
      highlights: [
        "Conversational AI assistant automating 24/7 patient intake triage and consultation FAQs.",
        "Role-based access control (RBAC) securing patient records across reception, doctors, and clients.",
        "Structured digital prescriptions and appointment monitoring that saves administrative staff hours."
      ],
      order: 2,
      featured: true
    },
    "Faculty-Profiling-System": {
      title: "Institutional Faculty & Department Record System",
      type: "Admin Dashboard • Relational Database",
      status: "Academic Platform",
      description: "A centralized administrative web dashboard designed to eliminate messy spreadsheets. Manages institutional staff credentials, teaching loads, and departmental records with instant relational lookups and secure permission controls.",
      tags: ["PHP", "MySQL", "JavaScript", "CRUD Architecture", "Bootstrap", "Relational DB"],
      homepageUrl: "https://faculty-profiling-system.onrender.com",
      highlights: [
        "Replaces disorganized Excel sheets with an end-to-end administrative record platform.",
        "Streamlined teaching load allocations and departmental assignment management.",
        "Optimized relational MySQL database schema providing instant administrative lookups."
      ],
      order: 3,
      featured: true
    },
    "kurtfajutagana": {
      title: "Kurt Fajutagana — Technical Portfolio & Live Sync Hub",
      type: "Production Platform • Next.js & Tailwind",
      status: "Live Website",
      description: "A high-performance personal web platform engineered with Next.js and Tailwind CSS. Features automated GitHub API synchronization, glassmorphic UI, and direct contact workflows for remote technical support.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub API", "ISR", "Vercel"],
      homepageUrl: "https://kurtfajutagana.vercel.app",
      highlights: [
        "Real-time GitHub API integration with ISR for zero-maintenance live updates.",
        "Modern glassmorphic UI engineered with Next.js Turbopack and mobile-responsive layout.",
        "Instant contact channels with one-click clipboard and direct email/phone routing."
      ],
      order: 4,
      featured: true
    }
  },

  fallbackProjects: [
    {
      name: "PG-WasmLab",
      title: "PG-WasmLab — In-Browser PostgreSQL & Performance Lab",
      type: "Zero-Server Utility • WebAssembly & DB",
      status: "Production Ready",
      description: "A zero-infrastructure database testing tool running an entire PostgreSQL engine inside the browser. Enables instant query profiling, indexing performance experiments, and plan analysis with zero server hosting costs.",
      tags: ["TypeScript", "PostgreSQL", "WebAssembly", "PGlite", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/kurtfajutagana/PG-WasmLab",
      homepageUrl: "https://pg-wasm-lab.vercel.app/",
      highlights: [
        "Runs client-side Postgres 16 entirely in WebAssembly with $0 backend hosting overhead.",
        "Visual EXPLAIN ANALYZE execution cost breakdown helping diagnose slow database queries.",
        "Interactive indexing and schema benchmark lab with persistent browser storage."
      ],
      stars: 0,
      forks: 0,
      language: "TypeScript",
      updatedAt: "2026-09-24"
    },
    {
      name: "DAMS",
      title: "DAMS — Dental Clinic & Patient Management Portal",
      type: "Client Platform • Full-Stack & AI Triage",
      status: "Production Ready",
      description: "A secure web portal engineered for dental clinics and healthcare practices. Replaces manual paper workflows with automated AI patient inquiry triage, role-based staff access, and audit-ready digital medical records.",
      tags: ["JavaScript", "Node.js", "AI Assistant", "PostgreSQL", "Full-Stack", "RBAC"],
      githubUrl: "https://github.com/kurtfajutagana/DAMS",
      homepageUrl: "https://teethtalk.vercel.app",
      highlights: [
        "Conversational AI assistant automating 24/7 patient intake triage and consultation FAQs.",
        "Role-based access control (RBAC) securing patient records across reception, doctors, and clients.",
        "Structured digital prescriptions and appointment monitoring that saves administrative staff hours."
      ],
      stars: 0,
      forks: 0,
      language: "JavaScript",
      updatedAt: "2026-09-24"
    },
    {
      name: "Faculty-Profiling-System",
      title: "Institutional Faculty & Department Record System",
      type: "Admin Dashboard • Relational Database",
      status: "Academic Platform",
      description: "A centralized administrative web dashboard designed to eliminate messy spreadsheets. Manages institutional staff credentials, teaching loads, and departmental records with instant relational lookups and secure permission controls.",
      tags: ["PHP", "MySQL", "JavaScript", "CRUD Architecture", "Bootstrap", "Relational DB"],
      githubUrl: "https://github.com/kurtfajutagana/Faculty-Profiling-System",
      homepageUrl: "https://faculty-profiling-system.onrender.com",
      highlights: [
        "Replaces disorganized Excel sheets with an end-to-end administrative record platform.",
        "Streamlined teaching load allocations and departmental assignment management.",
        "Optimized relational MySQL database schema providing instant administrative lookups."
      ],
      stars: 0,
      forks: 0,
      language: "PHP",
      updatedAt: "2026-09-24"
    },
    {
      name: "kurtfajutagana",
      title: "Kurt Fajutagana — Technical Portfolio & Live Sync Hub",
      type: "Production Platform • Next.js & Tailwind",
      status: "Live Website",
      description: "A high-performance personal web platform engineered with Next.js and Tailwind CSS. Features automated GitHub API synchronization, glassmorphic UI, and direct contact workflows for remote technical support.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub API", "ISR", "Vercel"],
      githubUrl: "https://github.com/kurtfajutagana/kurtfajutagana",
      homepageUrl: "https://kurtfajutagana.vercel.app",
      highlights: [
        "Real-time GitHub API integration with ISR for zero-maintenance live updates.",
        "Modern glassmorphic UI engineered with Next.js Turbopack and mobile-responsive layout.",
        "Instant contact channels with one-click clipboard and direct email/phone routing."
      ],
      stars: 0,
      forks: 0,
      language: "TypeScript",
      updatedAt: "2026-09-24"
    }
  ]
};
