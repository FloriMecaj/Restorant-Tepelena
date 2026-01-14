import { createClient } from "next-sanity";

// This ensures that even if the Environment Variable is missing during build,
// the code doesn't crash.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "kpb8npx7";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
});
