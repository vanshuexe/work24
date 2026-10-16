import type { Metadata } from "next";
import SitePage from "@/components/site-page";

export const metadata: Metadata = {
  "title": "Who We Serve | Smart Cubes",
  "description": "Modular spaces for homebuyers, landowners, resorts, developers, and businesses."
};

export default function Page() { return <SitePage section="who-we-serve" />; }
