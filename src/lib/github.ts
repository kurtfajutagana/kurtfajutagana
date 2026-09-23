import { portfolioConfig } from "@/config/projects";

export interface GitHubRawRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

export interface PortfolioProject {
  id: string;
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
  order: number;
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const { githubUsername, filterStrategy, topicTag, customMetadata, fallbackProjects } = portfolioConfig;

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Kurt-Portfolio-App",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
      {
        headers,
        next: { revalidate: 60 }, // Fast ISR revalidation: refresh every 60 seconds
      }
    );

    if (!response.ok) {
      console.warn(`GitHub API returned status ${response.status}. Using fallback project data.`);
      return fallbackProjects.map((p, idx) => ({ ...p, id: p.name, order: idx }));
    }

    const rawRepos: GitHubRawRepo[] = await response.json();

    // Strictly filter based on topicTag ('portfolio' or 'featured')
    const filteredRepos = rawRepos.filter((repo) => {
      if (repo.fork || repo.archived) return false;

      const hasTopic = repo.topics?.includes(topicTag) || repo.topics?.includes("featured");

      if (filterStrategy === "topic") {
        return hasTopic;
      }
      if (filterStrategy === "curated") {
        return Boolean(customMetadata[repo.name]);
      }
      return true;
    });

    const projects: PortfolioProject[] = filteredRepos.map((repo, idx) => {
      const meta = customMetadata[repo.name] || {};
      
      const formattedTitle = meta.title || repo.name.replace(/[-_]/g, " ");
      const type = meta.type || (repo.language ? `${repo.language} Project` : "Full-Stack Project");
      const status = meta.status || "Active Repository";
      const description = meta.description || repo.description || `A project developed by ${githubUsername}.`;
      
      // Combine custom tags, primary language, and GitHub topics
      const rawTags = [
        ...(meta.tags || []),
        ...(repo.language ? [repo.language] : []),
        ...(repo.topics || []).filter(t => t !== topicTag && t !== "featured")
      ];
      const tags = Array.from(new Set(rawTags));

      const highlights = meta.highlights || [
        `Built using ${repo.language || "modern development stacks"} with clean architectural patterns.`,
        "Open source codebase maintained with structured version control."
      ];

      const rawHomepage = repo.homepage?.trim();
      const homepageUrl = rawHomepage && rawHomepage.length > 0 ? rawHomepage : meta.homepageUrl;

      return {
        id: repo.name,
        name: repo.name,
        title: formattedTitle,
        type,
        status,
        description,
        tags,
        githubUrl: repo.html_url,
        homepageUrl,
        highlights,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || "TypeScript",
        updatedAt: new Date(repo.updated_at).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric"
        }),
        order: meta.order ?? (100 + idx)
      };
    });

    return projects.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return fallbackProjects.map((p, idx) => ({ ...p, id: p.name, order: idx }));
  }
}
