import fs from "fs";
import path from "path";

const GITHUB_USERNAME = "kurtfajutagana";
const TOPIC_TAG = "portfolio";

async function fetchUserRepos() {
  const headers = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "README-Sync-Script",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    { headers }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  return await res.json();
}

function generateProjectsMarkdown(repos) {
  // Filter repos tagged with 'portfolio' or 'featured'
  const featured = repos.filter(
    (r) =>
      !r.fork &&
      !r.archived &&
      (r.topics?.includes(TOPIC_TAG) || r.topics?.includes("featured"))
  );

  if (featured.length === 0) {
    return `> _No repositories currently tagged with \`${TOPIC_TAG}\`. Tag any repository with \`${TOPIC_TAG}\` on GitHub to display it here!_\n`;
  }

  return featured
    .map((repo) => {
      const title = repo.name.replace(/[-_]/g, " ");
      const desc = repo.description || "A project developed by John Kurt Fajutagana.";
      const starsBadge = repo.stargazers_count > 0 ? ` ⭐ **${repo.stargazers_count}**` : "";
      const langBadge = repo.language ? ` • 🏷️ \`${repo.language}\`` : "";
      
      const demoLink = repo.homepage && repo.homepage.trim() !== "" 
        ? `[🌐 **Live Demo**](${repo.homepage.trim()}) • ` 
        : "";

      return `#### 📌 [${repo.name}](${repo.html_url}) ${starsBadge}
> ${desc}${langBadge}
- 🔗 ${demoLink}[💻 **Source Code**](${repo.html_url})
`;
    })
    .join("\n");
}

function generateStatsMarkdown(repos) {
  const nonForks = repos.filter((r) => !r.fork);
  const totalStars = nonForks.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
  const totalForks = nonForks.reduce((acc, r) => acc + (r.forks_count || 0), 0);
  
  // Calculate language distribution
  const langCounts = {};
  nonForks.forEach((r) => {
    if (r.language) {
      langCounts[r.language] = (langCounts[r.language] || 0) + 1;
    }
  });

  const topLangs = Object.entries(langCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([lang, count]) => `\`${lang}\` (${count})`)
    .join(" • ");

  return `<div align="center">

| 📦 **Public Repos** | ⭐ **Total Stars** | 🍴 **Total Forks** | 🛠️ **Primary Stacks** |
| :---: | :---: | :---: | :---: |
| **${nonForks.length}** | **${totalStars}** | **${totalForks}** | ${topLangs || "TypeScript • PHP"} |

<br/>

<a href="https://github.com/${GITHUB_USERNAME}">
  <img src="https://streak-stats.demolab.com?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true&background=09090b&ring=3b82f6&fire=3b82f6&currStreakLabel=60a5fa" alt="GitHub Streak" />
</a>

</div>`;
}

async function main() {
  console.log(`Fetching repositories for @${GITHUB_USERNAME}...`);
  const repos = await fetchUserRepos();
  console.log(`Found ${repos.length} total repositories.`);

  const readmePath = path.resolve(process.cwd(), "README.md");
  let content = fs.readFileSync(readmePath, "utf-8");

  // 1. Replace Projects Section
  const projectsStartMarker = "<!-- PROJECTS:START -->";
  const projectsEndMarker = "<!-- PROJECTS:END -->";
  
  if (content.includes(projectsStartMarker) && content.includes(projectsEndMarker)) {
    const projectsMarkdown = generateProjectsMarkdown(repos);
    const regex = new RegExp(
      `${projectsStartMarker}[\\s\\S]*?${projectsEndMarker}`,
      "g"
    );
    content = content.replace(
      regex,
      `${projectsStartMarker}\n${projectsMarkdown}\n${projectsEndMarker}`
    );
    console.log("Updated projects section.");
  }

  // 2. Replace Stats Section
  const statsStartMarker = "<!-- STATS:START -->";
  const statsEndMarker = "<!-- STATS:END -->";

  if (content.includes(statsStartMarker) && content.includes(statsEndMarker)) {
    const statsMarkdown = generateStatsMarkdown(repos);
    const regex = new RegExp(
      `${statsStartMarker}[\\s\\S]*?${statsEndMarker}`,
      "g"
    );
    content = content.replace(
      regex,
      `${statsStartMarker}\n${statsMarkdown}\n${statsEndMarker}`
    );
    console.log("Updated stats section.");
  }

  fs.writeFileSync(readmePath, content, "utf-8");
  console.log("README.md synchronized successfully!");
}

main().catch((err) => {
  console.error("Failed to sync README:", err);
  process.exit(1);
});

