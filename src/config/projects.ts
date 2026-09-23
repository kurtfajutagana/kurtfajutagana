export interface CustomProjectMetadata {
  title?: string;
  type?: string;
  status?: string;
  description?: string;
  tags?: string[];
  highlights?: string[];
  order?: number;
  featured?: boolean;
}

export interface PortfolioConfig {
  githubUsername: string;
  // Strategy: 'topic' (auto-fetch repos tagged with topicTag from your account)
  // or 'curated' (only repos listed in curatedRepoNames)
  // or 'all' (all public repos from your account)
  filterStrategy: "topic" | "curated" | "all";
  topicTag: string;
  // Specific repos to feature or override with rich case-study details
  customMetadata: Record<string, CustomProjectMetadata>;
  // Fallback projects shown if GitHub API is offline or rate-limited
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
  // STRICTLY BOUND TO YOUR GITHUB ACCOUNT
  githubUsername: "kurtfajutagana",
  
  // Repositories under @kurtfajutagana with the topic 'portfolio' or 'featured' are auto-included
  filterStrategy: "topic",
  topicTag: "portfolio",

  // Custom highlights & rich descriptions for specific repositories in your account
  customMetadata: {
    "DAMS": {
      title: "DAMS — Dental Appointment & Management System",
      type: "Capstone Project • Full-Stack & AI",
      status: "Production Ready",
      description: "A web-based clinical monitoring system engineered for dental practices. Integrates an AI conversational assistant for patient triage and streamlines electronic prescriptions, treatment histories, and clinic workflows.",
      tags: ["JavaScript", "Node.js", "AI Assistant", "PostgreSQL", "Full-Stack", "RBAC"],
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
      highlights: [
        "End-to-end CRUD platform for academic faculty profiles and research portfolios.",
        "Centralized teaching load allocation and departmental categorization.",
        "Relational MySQL database schema optimized for fast administrative lookups."
      ],
      order: 2,
      featured: true
    }
  },

  // Fallback cache if GitHub API is unavailable
  fallbackProjects: [
    {
      name: "DAMS",
      title: "DAMS — Dental Appointment & Management System",
      type: "Capstone Project • Full-Stack & AI",
      status: "Production Ready",
      description: "A web-based clinical monitoring system engineered for dental practices. Integrates an AI conversational assistant for patient triage and streamlines electronic prescriptions, treatment histories, and clinic workflows.",
      tags: ["JavaScript", "Node.js", "AI Assistant", "PostgreSQL", "Full-Stack", "RBAC"],
      githubUrl: "https://github.com/kurtfajutagana/DAMS",
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
      highlights: [
        "End-to-end CRUD platform for academic faculty profiles and research portfolios.",
        "Centralized teaching load allocation and departmental categorization.",
        "Relational MySQL database schema optimized for fast administrative lookups."
      ],
      stars: 0,
      forks: 0,
      language: "PHP",
      updatedAt: "2026-09-24"
    }
  ]
};
