import { NextResponse } from "next/server";
import { getPortfolioProjects } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  const projects = await getPortfolioProjects(true);
  return NextResponse.json({ projects, timestamp: Date.now() });
}

