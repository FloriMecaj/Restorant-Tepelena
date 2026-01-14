import { client } from "@/sanity/lib/client";
import { MenuPage } from "@/components/MenuPage/MenuPage";
import { Header } from "@/components/HomePage/Header";

export const dynamic = "force-dynamic";

// Metadata for SEO
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = "en" } = await searchParams;
  return {
    title:
      lang === "sq"
        ? "Menuja - Restorant Tepelena"
        : "Menu - Restaurant Tepelena",
  };
}

async function getMenuItems(lang: string) {
  return await client.fetch(
    `*[_type == "menuItem" && language == $lang] | order(category asc, menuOrder asc)`,
    { lang }
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = "en" } = await searchParams;
  const items = await getMenuItems(lang);

  return (
    <div className="w-full min-h-screen bg-cream">
      {/* 1. Add the Header so users can navigate */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <main className="w-full h-full">
        {/* 2. Pass the dynamic items AND the actual lang variable */}
        <MenuPage items={items} lang={lang} />
      </main>
    </div>
  );
}
