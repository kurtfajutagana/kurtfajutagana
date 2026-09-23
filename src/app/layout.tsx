import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kurt Fajutagana | Full-Stack Developer & AI-Augmented Software Builder",
  description: "Portfolio of Kurt Fajutagana, 4th-year BSIT student & full-stack developer specializing in production-ready web platforms, clinical management systems, and LLM-integrated workflows.",
  keywords: ["Kurt Fajutagana", "Full-Stack Developer", "Software Engineer", "OJT", "Next.js", "React", "PostgreSQL", "Tailwind CSS"],
  authors: [{ name: "Kurt Fajutagana" }],
  openGraph: {
    title: "Kurt Fajutagana | Full-Stack Developer & AI-Augmented Software Builder",
    description: "4th-year BSIT student shipping production-ready web platforms and AI-augmented applications.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-neutral-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
