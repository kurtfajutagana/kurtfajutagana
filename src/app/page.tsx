import { getPortfolioProjects } from "@/lib/github";
import PortfolioView from "@/components/PortfolioView";

// Revalidate every hour on Vercel
export const revalidate = 3600;

export default async function Home() {
  const projects = await getPortfolioProjects();

  return <PortfolioView projects={projects} />;
}