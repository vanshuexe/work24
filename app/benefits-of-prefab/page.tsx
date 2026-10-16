import type { Metadata } from "next";
import SitePage from "@/components/site-page";

export const metadata: Metadata = {
  "title": "Benefits of Prefab | Smart Cubes",
  "description": "Explore the practical benefits of factory-built steel modular construction with Smart Cubes."
};

export default function Page() { return <SitePage section="benefits" />; }
