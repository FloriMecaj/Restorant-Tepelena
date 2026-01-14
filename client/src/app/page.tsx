import { client } from "@/sanity/lib/client";
import { Header } from "@/components/HomePage/Header";
import { HeroBanner } from "@/components/HomePage/HeroBanner";
import { AboutUs } from "@/components/HomePage/AboutUs";
import { Speciality } from "@/components/HomePage/Speciality";
import { Maps } from "@/components/HomePage/Maps";
import { Footer } from "@/components/HomePage/Footer";
import { AlbanianPattern } from "@/components/HomePage/AlbanianPattern";
import MenuPreviewSection from "@/components/HomePage/MenuPreviewSection";

async function getPageData(lang: string) {
  const query = `{
    "page": *[_type == "homepage" && language == $lang][0],
    "featured": *[_type == "menuItem" && language == $lang && isFeatured == true][0...6]
  }`;
  return await client.fetch(query, { lang });
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = "en" } = await searchParams;
  const { page, featured } = await getPageData(lang);

  return (
    <div className="w-full min-h-screen bg-cream">
      <Header />
      <HeroBanner
        title={page?.heroTitle}
        subtitle={page?.heroSubtitle}
        description={page?.heroDescription}
        lang={lang}
      />
      <AlbanianPattern />
      <AboutUs
        title={page?.aboutTitle}
        text1={page?.aboutText1}
        text2={page?.aboutText2}
        founderRole={page?.founderRole}
      />
      <MenuPreviewSection
        items={featured}
        lang={lang}
        title={page?.featuredTitle}
        description={page?.featuredDescription}
      />
      <AlbanianPattern />
      <Speciality
        title={page?.specialityTitle}
        content={page?.specialityContent}
        lang={lang}
      />
      <Maps
        lang={lang}
        title={page?.mapsTitle}
        description={page?.mapsDescription}
      />
      <AlbanianPattern />
      <Footer lang={lang} description={page?.footerDescription} />
    </div>
  );
}
