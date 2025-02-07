import React from "react";
import { AboutUsCarousel } from "./AboutUsCarousel";

export const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="w-full flex flex-col bg-black py-16 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left md:flex">
        <div className="flex flex-col md:w-1/2 mb-6 md:mb-0">
          <AboutUsCarousel />
        </div>

        <div className="md:w-1/2">
          <p className="text-2xl text-primary mb-6 text-left md:text-2xl">
            About Us
          </p>
          <p className="text-4xl text-primary font-bold mb-6 text-left md:text-4xl">
            We serve our customers carefully since 1998.
          </p>
          <p className="text-lg text-secondary text-left leading-relaxed md:text-xl">
            Welcome to Restaurant Tepelena, where tradition meets flavor! Since
            1998, we've been proud to serve authentic Albanian cuisine, offering
            a unique taste of our rich heritage. Our menu features time-honored
            recipes made with the finest local ingredients, bringing the flavors
            of Albania straight to your table. Whether you're here to enjoy a
            cozy meal with family or celebrate a special occasion, we promise a
            warm, welcoming atmosphere and dishes that will make you feel at
            home. Join us and experience the true taste of Albania, served with
            passion and love.
          </p>
        </div>
      </div>
    </div>
  );
};
