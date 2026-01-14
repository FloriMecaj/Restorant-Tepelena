"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function StudioPage() {
  return (
    <div
      style={{ height: "100vh", width: "100vw", position: "fixed", inset: 0 }}
    >
      <NextStudio config={config} />
    </div>
  );
}
