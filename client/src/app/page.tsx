import React from "react";
import { HeroBanner } from "@/components/HeroBanner/HeroBanner";
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { MiniMenu } from "@/components/MiniMenu/MiniMenu";
import { Maps } from "@/components/Maps/Maps";
import { Footer } from "@/components/Footer/Footer";
import { Speciality } from "@/components/Speciality/Speciality";
import { metadata } from "@/components/Metadata/metadata"; // Import main metadata

export { metadata };

const Page = () => {
  return (
    <div className="w-full h-full">
      <HeroBanner />
      <AboutUs />
      <MiniMenu />
      <Speciality />
      <Maps />
      <Footer />
    </div>
  );
};

export default Page;
