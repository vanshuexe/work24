import type { Metadata } from "next";
import "./globals.css";
import SiteExperience from "@/components/site-experience";

export const metadata: Metadata = {
  title: "Smart Cubes | Thoughtful spaces. Smarter living.",
  description: "Discover purpose-built steel prefab homes, farm cottages, studios and modular workspaces from Smart Cubes. Explore designs and start planning your space.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="stylesheet" href="/audience-illustrations.css" /><link rel="stylesheet" href="/ui-polish.css" /><link rel="stylesheet" href="/site-details.css" /></head><body>{children}<SiteExperience /></body></html>;
}
