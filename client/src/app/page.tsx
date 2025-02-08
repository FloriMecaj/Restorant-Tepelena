import React from "react";
import { HeroBanner } from "../components/HeroBanner/HeroBanner";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { MiniMenu } from "@/components/MiniMenu/MiniMenu";
import { Maps } from "@/components/Maps/Maps";
import { Footer } from "@/components/Footer/Footer";
import { Speciality } from "@/components/Speciality/Speciality";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restorant Tepelena",
  description:
    "Taste the finest traditional Albanian dishes at Restaurant Tepelena in Tirana, operating since 1998.",
};

const Home: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <MiniMenu />
      <Speciality />
      <Maps />
      <Footer />
    </>
  );
};

export default Home;
