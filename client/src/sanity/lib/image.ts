import createImageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

// This tells TypeScript: "Use whatever type the builder.image function usually accepts"
type SanityImageSource = Parameters<typeof builder.image>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
