"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

// 1. Force the page to be dynamic and skip server-side processing
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 30; // Sets timeout to 30 seconds

export default function StudioPage() {
  return (
    <div style={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
      <NextStudio config={config} />
    </div>
  );
}
