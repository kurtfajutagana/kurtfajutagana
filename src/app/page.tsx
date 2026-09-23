import React from 'react';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';

function Github({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Home() {
  const projects = [
    {
      title: "DAMS — Dental Appointment & Management System",
      type: "Capstone Project • Full-Stack & AI",
      description: "A web-based clinical monitoring system engineered for dental practices. Integrates an AI conversational assistant for patient triage and streamlines electronic prescriptions, treatment histories, and clinic workflows.",
      tags: ["JavaScript", "Node.js", "AI Assistant", "PostgreSQL", "Full-Stack"],
      githubUrl: "https://github.com/kurtfajutagana/DAMS",
      highlights: [
        "Conversational AI assistant for automated patient inquiries & pre-consultation workflow.",
        "Role-based access control (RBAC) supporting clinic staff, dentists, and patients.",
        "Structured electronic prescription and treatment record monitoring."
      ]
    },
    {
      title: "Academic Faculty Profiling System",
      type: "Institutional Platform • Backend Architecture",
      description: "A centralized web platform replacing manual administrative record-keeping. Manages institutional faculty credentials, educational backgrounds, teaching loads, and departmental assignments with secure role-based controls.",
      tags: ["PHP", "MySQL", "JavaScript", "CRUD Architecture", "Bootstrap"],
      githubUrl: "https://github.com/kurtfajutagana/Faculty-Profiling-System",
      highlights: [
        "End-to-end CRUD platform for academic faculty profiles and research portfolios.",
        "Centralized teaching load allocation and departmental categorization.",
        "Relational MySQL database schema optimized for fast administrative lookups."
      ]
    }
  ];

  const skillGroups = [
    {
      category: "Frontend & UI",
      skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3"]
    },
    {
      category: "Backend & Databases",
      skills: ["Node.js", "PHP", "PostgreSQL", "MySQL", "Supabase", "RESTful APIs"]
    },
    {
      category: "AI & Development Workflows",
      skills: ["Prompt Engineering", "LLM Integration", "Agentic Coding Workflows", "Git / GitHub", "Vercel"]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500 selection:text-white font-sans antialiased">
      {/* Background Radial Glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.12),rgba(255,255,255,0))]" />

      <main className="relative max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-24">
        
        {/* HERO SECTION */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open for Software Engineering / Web Dev OJT (Remote / Hybrid)
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Kurt Fajutagana
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 font-medium">
              Full-Stack Developer & AI-Augmented Software Builder
            </p>
          </div>

          <p className="text-neutral-300 leading-relaxed max-w-2xl text-base md:text-lg">
            4th-year BS Information Technology student specializing in shipping production-ready web platforms, clinical management systems, and LLM-integrated workflows. Focused on fast iteration, clean architecture, and practical engineering solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 items-center">
            <a 
              href="#projects" 
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-lg shadow-blue-500/20"
            >
              Explore Projects
            </a>
            <a 
              href="https://github.com/kurtfajutagana" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-8">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
            </div>
            <span className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Systems & Architecture</span>
          </div>

          <div className="grid gap-8">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-6 md:p-8 space-y-6 hover:border-neutral-700 transition-all hover:shadow-xl hover:shadow-black/40"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    {proj.type}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {proj.title}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Key Highlights</h4>
                  <ul className="space-y-1.5">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-neutral-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-800/80 text-neutral-300 border border-neutral-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <a 
                    href={proj.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" /> Source Code <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL ARSENAL */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 border-b border-neutral-800 pb-4">
            <Code2 className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Technical Arsenal</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="rounded-xl border border-neutral-800/80 bg-neutral-900/30 p-5 space-y-3">
                <h3 className="text-sm font-semibold text-neutral-200 tracking-wide">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2 py-1 rounded text-xs bg-neutral-800/60 text-neutral-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI & VIBECODER SECTION */}
        <section className="rounded-xl border border-blue-500/20 bg-gradient-to-b from-blue-950/20 to-transparent p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Engineering Philosophy</h3>
          </div>
          <p className="text-neutral-300 text-sm leading-relaxed">
            I leverage modern AI-assisted engineering tools and agentic coding workflows to compress development cycles from weeks to days—without sacrificing code quality, testability, or database integrity.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-neutral-800 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} Kurt Fajutagana. Built with Next.js & Tailwind CSS.</p>
          <div className="flex gap-4">
            <a href="https://github.com/kurtfajutagana" target="_blank" rel="noreferrer" className="hover:text-neutral-300 transition-colors">GitHub</a>
            <a href="mailto:contact@example.com" className="hover:text-neutral-300 transition-colors">Email</a>
          </div>
        </footer>

      </main>
    </div>
  );
}