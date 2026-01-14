import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";
import { schemaTypes } from "./src/sanity/schemaTypes/index";
import { structure } from "@/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Restorant Tepelena",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: "/studio",

  plugins: [
    structureTool({
      structure: structure, // Add this line here
    }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "sq", title: "Albanian" },
      ],
      schemaTypes: ["homepage", "menuItem"],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
