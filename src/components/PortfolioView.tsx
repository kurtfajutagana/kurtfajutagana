"use client";

import React, { useState, useEffect, useCallback } from "react";
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Check, 
  GraduationCap, 
  Briefcase, 
  Database, 
  Globe, 
  Cpu, 
  Menu, 
  X, 
  ArrowRight, 
  ArrowUp,
  Star,
  GitFork,
  Calendar,
  Sparkle,
  RefreshCw,
  Phone
} from "lucide-react";
import { PortfolioProject } from "@/lib/github";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
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

interface PortfolioViewProps {
  projects: PortfolioProject[];
}

export default function PortfolioView({ projects: initialProjects }: PortfolioViewProps) {
  const [projects, setProjects] = useState<PortfolioProject[]>(initialProjects);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>("just now");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const email = "kurtfajutagana17@gmail.com";
  const primaryPhone = "09271707436";
  const secondaryPhone = "09932492435";

  // Real-time background synchronization with GitHub
  const fetchLiveProjects = useCallback(async () => {
    setIsSyncing(true);
    try {
      const res = await fetch("/api/projects", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.projects)) {
          setProjects(data.projects);
          setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }
      }
    } catch (err) {
      console.error("Real-time sync failed:", err);
    } finally {
      setIsSyncing(false);
    }
  }, []);

  // Auto-sync on window focus and on interval
  useEffect(() => {
    const handleFocus = () => {
      fetchLiveProjects();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchLiveProjects();
      }
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const interval = setInterval(fetchLiveProjects, 15000);

    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(interval);
    };
  }, [fetchLiveProjects]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (phoneNumber: string) => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(phoneNumber);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skillGroups = [
    {
      category: "Frontend & UI",
      icon: Globe,
      color: "from-blue-500/20 to-cyan-500/10",
      border: "border-blue-500/20",
      skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3"]
    },
    {
      category: "Backend & Databases",
      icon: Database,
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/20",
      skills: ["Node.js", "PHP", "PostgreSQL", "MySQL", "Supabase", "RESTful APIs"]
    },
    {
      category: "AI & Development Workflows",
      icon: Cpu,
      color: "from-purple-500/20 to-indigo-500/10",
      border: "border-purple-500/20",
      skills: ["Prompt Engineering", "LLM Integration", "Agentic Coding Workflows", "Git / GitHub", "Vercel"]
    }
  ];

  const stats = [
    { label: "Academic Standing", value: "4th-Year BSIT" },
    { label: "Core Stack", value: "Full-Stack & SQL" },
    { label: "Methodology", value: "AI-Augmented Dev" },
    { label: "Availability", value: "Ready for OJT" },
  ];

  // Derive unique tags for filtering
  const allTags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))].slice(0, 8);

  const filteredProjects = selectedTag === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedTag));

  return (
    <div className="min-h-screen bg-[#09090b] text-neutral-100 selection:bg-blue-500/30 selection:text-blue-200 relative overflow-x-hidden font-sans">
      
      {/* Ambient background light grid */}
      <div className="fixed inset-0 pointer-events-none z-0 glow-mesh opacity-80" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.12),rgba(255,255,255,0))]" />
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} 
      />

      {/* STICKY FROSTED NAVBAR */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#09090b]/80 border-b border-white/5 transition-all">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              KF
            </span>
            <span className="font-semibold text-sm tracking-tight text-neutral-200 group-hover:text-white transition-colors hidden sm:inline-block">
              Kurt Fajutagana
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm text-neutral-400">
            <a href="#about" className="px-3 py-1.5 rounded-md hover:text-white hover:bg-neutral-800/50 transition-colors">
              About
            </a>
            <a href="#projects" className="px-3 py-1.5 rounded-md hover:text-white hover:bg-neutral-800/50 transition-colors">
              Projects
            </a>
            <a href="#skills" className="px-3 py-1.5 rounded-md hover:text-white hover:bg-neutral-800/50 transition-colors">
              Skills
            </a>
            <a href="#journey" className="px-3 py-1.5 rounded-md hover:text-white hover:bg-neutral-800/50 transition-colors">
              Journey
            </a>
            <a href="#philosophy" className="px-3 py-1.5 rounded-md hover:text-white hover:bg-neutral-800/50 transition-colors">
              Philosophy
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/kurtfajutagana"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-500/20 transition-all hover:scale-[1.02]"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/60"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-800 bg-[#0c0c10]/95 backdrop-blur-xl px-6 py-4 space-y-3">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              Skills
            </a>
            <a 
              href="#journey" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              Journey
            </a>
            <a 
              href="#philosophy" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              Philosophy
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-blue-400 hover:text-blue-300 py-1"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-28">

        {/* HERO SECTION */}
        <section id="about" className="space-y-8 pt-4">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-medium tracking-wide shadow-sm shadow-emerald-950/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Software Engineering / Web Dev OJT (Remote / Hybrid)
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Kurt Fajutagana
            </h1>
            <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-neutral-200 font-semibold">
              Full-Stack Developer & AI-Augmented Software Builder
            </p>
          </div>

          <p className="text-neutral-300 leading-relaxed max-w-2xl text-base sm:text-lg">
            4th-year BS Information Technology candidate focused on engineering production-ready web platforms, clinical management systems, and LLM-integrated workflows. Committed to clean database schemas, fast iteration cycles, and practical engineering solutions.
          </p>

          {/* Quick CTAs & Contact Actions */}
          <div className="flex flex-wrap gap-3 pt-2 items-center">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Projects <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800 text-neutral-300 text-sm font-medium transition-all hover:border-neutral-700 active:scale-95"
              title="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied Email!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a 
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800 text-neutral-300 text-sm font-medium transition-all hover:border-neutral-700 hover:text-white"
            >
              <Mail className="w-4 h-4" /> Send Mail
            </a>

            <a 
              href={`tel:${primaryPhone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800 text-neutral-300 text-sm font-medium transition-all hover:border-neutral-700 hover:text-white"
              title="Call primary phone"
            >
              <Phone className="w-4 h-4 text-blue-400" /> {primaryPhone}
            </a>

            <a 
              href="https://github.com/kurtfajutagana" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800 text-neutral-300 text-sm font-medium transition-all hover:border-neutral-700 hover:text-white"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
          </div>

          {/* Quick Metrics / Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-neutral-800/80">
            {stats.map((s, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-sm">
                <span className="block text-xs font-mono uppercase text-neutral-500 tracking-wider">
                  {s.label}
                </span>
                <span className="block text-sm font-semibold text-neutral-200 mt-0.5">
                  {s.value}
                </span>
              </div>
            ))}
          </div>

        </section>

        {/* FEATURED PROJECTS (DYNAMIC REALTIME GITHUB INTEGRATION) */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider">
                <Layers className="w-4 h-4" /> Live GitHub Projects
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Featured Systems & Repositories</h2>
            </div>
            
            {/* Realtime Auto-Sync Status Badge & Manual Trigger */}
            <div className="flex items-center gap-2">
              <button
                onClick={fetchLiveProjects}
                disabled={isSyncing}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300 transition-colors disabled:opacity-50"
                title={`Last synced: ${lastSyncTime}. Click to force sync immediately.`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Live Sync</span>
                <RefreshCw className={`w-3 h-3 text-neutral-400 ${isSyncing ? "animate-spin text-blue-400" : ""}`} />
              </button>
            </div>
          </div>

          {/* Topic / Tag Filter Pills */}
          {allTags.length > 1 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    selectedTag === tag
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                      : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Project Cards List */}
          {filteredProjects.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-900/30 p-10 text-center space-y-3 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">No tagged projects found</h3>
              <p className="text-sm text-neutral-400 max-w-md mx-auto">
                Add the topic tag <code className="text-blue-400 font-mono px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">portfolio</code> to any of your repositories on GitHub to have them appear here in real-time.
              </p>
            </div>
          ) : (
            <div className="grid gap-8">
              {filteredProjects.map((proj) => (
                <div 
                  key={proj.id} 
                  className="group relative rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-6 sm:p-8 space-y-6 hover:border-neutral-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/20 backdrop-blur-sm"
                >
                  {/* Subtle card glow on hover */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono">
                        {proj.type}
                      </span>

                      <div className="flex items-center gap-2">
                        {proj.stars > 0 && (
                          <span className="inline-flex items-center gap-1 text-xs text-neutral-400 font-mono bg-neutral-900/80 px-2 py-0.5 rounded border border-neutral-800">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400/20" /> {proj.stars}
                          </span>
                        )}
                        {proj.forks > 0 && (
                          <span className="inline-flex items-center gap-1 text-xs text-neutral-400 font-mono bg-neutral-900/80 px-2 py-0.5 rounded border border-neutral-800">
                            <GitFork className="w-3 h-3" /> {proj.forks}
                          </span>
                        )}
                        <span className="text-xs font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                          {proj.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                      {proj.description}
                    </p>
                  </div>

                  <div className="relative space-y-3 rounded-xl bg-neutral-950/50 p-4 border border-neutral-800/60">
                    <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider font-mono">
                      Key Architectural Highlights
                    </h4>
                    <ul className="space-y-2">
                      {proj.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-neutral-300 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech & Topic Tags */}
                  <div className="relative flex flex-wrap gap-2 pt-1">
                    {proj.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-800/60 text-neutral-300 border border-neutral-700/40 group-hover:border-neutral-600/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links & Metadata */}
                  <div className="relative pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800/60 pt-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm font-medium text-white transition-all hover:scale-[1.02]"
                      >
                        <GithubIcon className="w-4 h-4" /> View Repository <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                      </a>

                      {proj.homepageUrl && (
                        <a 
                          href={proj.homepageUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-sm font-medium text-blue-300 transition-all"
                        >
                          <Globe className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                      <Calendar className="w-3.5 h-3.5" /> Updated {proj.updatedAt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Helper hint for how the user adds projects */}
          <div className="p-4 rounded-xl border border-dashed border-neutral-800 bg-neutral-900/20 text-xs text-neutral-400 font-mono flex items-center gap-2">
            <Sparkle className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              <strong>Smart Auto-Discovery:</strong> Any repo in your GitHub account (<code className="text-neutral-300">@kurtfajutagana</code>) tagged with topic <code className="text-blue-400 font-bold">portfolio</code> will automatically sync and appear here!
            </span>
          </div>
        </section>

        {/* TECHNICAL ARSENAL */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider">
                <Code2 className="w-4 h-4" /> Skills & Tooling
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Technical Arsenal</h2>
            </div>
            <span className="text-xs text-neutral-500 uppercase tracking-widest font-mono hidden sm:inline-block">Stack Overview</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div 
                  key={idx} 
                  className={`rounded-2xl border ${group.border} bg-gradient-to-b ${group.color} p-6 space-y-4 hover:border-neutral-600 transition-all hover:-translate-y-1 duration-200 backdrop-blur-sm shadow-lg shadow-black/20`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-neutral-900/80 border border-white/5 text-neutral-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs bg-neutral-900/80 text-neutral-200 border border-neutral-800/80 font-mono hover:border-neutral-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ACADEMIC JOURNEY & OJT OBJECTIVE */}
        <section id="journey" className="space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" /> Background & Goals
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Academic Journey & OJT</h2>
            </div>
            <span className="text-xs text-neutral-500 font-mono hidden sm:inline-block">BSIT • 4th Year</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Degree Card */}
            <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 font-medium text-sm">
                <GraduationCap className="w-5 h-5" /> Bachelor of Science in Information Technology
              </div>
              <div className="text-xs font-mono text-neutral-400">
                4th-Year Candidate • Specializing in Software & Web Systems
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed pt-1">
                Rigorous training in database administration, systems architecture, secure role-based permissions, and end-to-end full-stack development. Built capstone clinical and profiling systems solving real organizational workflow bottlenecks.
              </p>
            </div>

            {/* OJT Readiness */}
            <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm">
                <Briefcase className="w-5 h-5" /> OJT & Industry Readiness
              </div>
              <div className="text-xs font-mono text-neutral-400">
                Available for Remote / Hybrid Opportunities
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed pt-1">
                Eager to integrate into an agile engineering squad. Brings a strong foundation in modern JavaScript/TypeScript frameworks, SQL query design, API development, and proactive problem-solving augmented with AI developer tools.
              </p>
            </div>
          </div>
        </section>

        {/* AI & ENGINEERING PHILOSOPHY */}
        <section id="philosophy" className="scroll-mt-24">
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/30 via-indigo-950/20 to-neutral-900/40 p-6 sm:p-8 space-y-4 shadow-xl shadow-blue-950/10 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Engineering Philosophy & AI Acceleration</h3>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              I leverage modern AI-assisted engineering tools and agentic coding workflows to compress development cycles—moving from ideation to production-ready platforms with speed while upholding clean architecture, comprehensive database integrity, and structured code standards.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                ⚡ Rapid Prototyping
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                🛡️ Robust Schemas & RBAC
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                🤖 LLM & Tool Integrations
              </span>
            </div>
          </div>
        </section>

        {/* CONTACT / CALL TO ACTION */}
        <section id="contact" className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 sm:p-10 space-y-8 scroll-mt-24 backdrop-blur-md shadow-2xl shadow-black/40">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <div className="inline-flex p-3 rounded-2xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              I am actively looking for an OJT / software engineering internship opportunity. Reach out directly via email or call/message me on my contact numbers!
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            
            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-blue-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> Email
                </span>
                <p className="text-xs text-neutral-200 font-mono break-all font-medium">
                  {email}
                </p>
              </div>
              <div className="flex gap-2 pt-2">
                <a 
                  href={`mailto:${email}`}
                  className="flex-1 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium text-center transition-colors"
                >
                  Send Mail
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-neutral-300 text-xs transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Primary Phone Card */}
            <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-emerald-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> Contact 1
                </span>
                <p className="text-xs text-neutral-200 font-mono font-medium">
                  {primaryPhone}
                </p>
              </div>
              <div className="flex gap-2 pt-2">
                <a 
                  href={`tel:${primaryPhone}`}
                  className="flex-1 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium text-center transition-colors"
                >
                  Call
                </a>
                <button
                  onClick={() => handleCopyPhone(primaryPhone)}
                  className="px-2.5 py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-neutral-300 text-xs transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone === primaryPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Secondary Phone Card */}
            <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-indigo-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> Contact 2
                </span>
                <p className="text-xs text-neutral-200 font-mono font-medium">
                  {secondaryPhone}
                </p>
              </div>
              <div className="flex gap-2 pt-2">
                <a 
                  href={`tel:${secondaryPhone}`}
                  className="flex-1 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium text-center transition-colors"
                >
                  Call
                </a>
                <button
                  onClick={() => handleCopyPhone(secondaryPhone)}
                  className="px-2.5 py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-neutral-300 text-xs transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone === secondaryPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-neutral-800/80 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Kurt Fajutagana.</span>
            <span>•</span>
            <span>Built with Next.js & Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/kurtfajutagana" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-neutral-300 transition-colors inline-flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
            <a 
              href={`mailto:${email}`}
              className="hover:text-neutral-300 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
            <a 
              href={`tel:${primaryPhone}`}
              className="hover:text-neutral-300 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" /> Call
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </footer>

      </main>
    </div>
  );
}
