import React from "react";
import { HeroBanner } from "@/components/HomePage/HeroBanner";
import { AboutUs } from "@/components/HomePage/AboutUs";
import { Maps } from "@/components/HomePage/Maps";
import { Footer } from "@/components/HomePage/Footer";
import { Speciality } from "@/components/HomePage/Speciality";
import { metadata } from "@/components/Metadata/metadata";
import { Header } from "@/components/HomePage/Header";
import { AlbanianPattern } from "@/components/HomePage/AlbanianPattern";
import MenuPreviewSection from "@/components/HomePage/MenuPreviewSection";

export { metadata };

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-cream">
      <Header />
      <HeroBanner />
      <AlbanianPattern />
      <AboutUs />
      <MenuPreviewSection />
      <AlbanianPattern />
      <Speciality />
      <Maps />
      <AlbanianPattern />
      <Footer />
    </div>
  );
};

export default Page;
