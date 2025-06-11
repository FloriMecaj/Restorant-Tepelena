"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image"; // Import the Image component

export const HeroBanner = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      window.scrollTo({
        top: menuSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white px-4 md:px-8 overflow-hidden">
      <Image
        src="/images/lokali2.jpeg" // Update path to your image
        alt="Restaurant Interior"
        fill
        priority
        quality={100}
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-1" />

      <div className="absolute inset-0 texture-overlay z-2" />

      <motion.div
        className="text-center max-w-4xl mx-auto relative z-10" // Ensure content stays above
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
          Restaurant Tepelena
        </h1>
        <p className="font-dancing text-2xl md:text-4xl mb-8">
          Authentic Albanian Cuisine
        </p>
        <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
        <p className="font-opensans text-lg md:text-xl mb-10">
          Experience the rich flavors and traditions of Albania in the heart of
          Tirana
        </p>
        <Button
          onClick={scrollToMenu}
          className="bg-terracotta hover:bg-terracottaHover text-white font-opensans font-medium px-8 py-6 rounded-2xl transition-colors shadow-lg"
        >
          View Our Menu
        </Button>
      </motion.div>
    </section>
  );
};
