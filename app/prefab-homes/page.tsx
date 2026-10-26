import type { Metadata } from "next";
import SitePage from "@/components/site-page";
import { HomeCollection } from "@/components/home-catalog";

export const metadata: Metadata = { title: "Prefab Homes — Studio, 1 BHK & 2 BHK | Smart Cubes", description: "Explore the SC 200 S, SC 300 One, and SC 600 Two prefab homes. Enquire for model pricing." };

export default function Page() { return <SitePage section="prefab"><HomeCollection /></SitePage>; }
