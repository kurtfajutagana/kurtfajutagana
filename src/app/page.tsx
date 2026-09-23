import { getPortfolioProjects } from "@/lib/github";
import PortfolioView from "@/components/PortfolioView";

// Revalidate every 60 seconds so GitHub edits (website link, topics, stars) reflect almost immediately
export const revalidate = 60;

export default async function Home() {
  const projects = await getPortfolioProjects();

  return <PortfolioView projects={projects} />;
}