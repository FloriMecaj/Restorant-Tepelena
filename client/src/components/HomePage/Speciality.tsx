"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Utensils, Leaf, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Speciality = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
    <section id="speciality" className="pt-16 md:pt-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex  flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-woodBrown">
              Our Specialty
            </h2>
            <div className="w-16 h-1 bg-terracotta mb-8"></div>
            <p className="font-opensans text-woodBrown text-lg mb-6">
              At Restaurant Tepelena, we proudly present our signature{" "}
              <span className="font-semibold">Lamb Meat on a Spit</span>, a
              timeless Albanian delicacy that embodies tradition and rich
              flavors. Carefully seasoned with local herbs and slow-roasted over
              an open flame, this tender lamb is cooked to perfection, ensuring
              juicy, succulent meat with a crispy, aromatic exterior. Served
              fresh from the spit, it offers an authentic taste experience that
              captures the heart of Albanian culinary heritage.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center">
                <Utensils className="text-terracotta mr-3 h-5 w-5" />
                <span className="font-opensans text-woodBrown">
                  Traditional Recipe
                </span>
              </div>
              <div className="flex items-center">
                <Leaf className="text-terracotta mr-3 h-5 w-5" />
                <span className="font-opensans text-woodBrown">
                  Local Ingredients
                </span>
              </div>
              <div className="flex items-center">
                <Flame className="text-terracotta mr-3 h-5 w-5" />
                <span className="font-opensans text-woodBrown">
                  Slow-roasted
                </span>
              </div>
            </div>
            <Button
              onClick={scrollToMenu}
              className="bg-terracotta hover:bg-terracottaHover text-white font-opensans font-medium px-6 py-3 rounded-2xl transition-colors shadow-lg"
            >
              Order Our Specialty
            </Button>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-video">
              {/* For a static site, we'll use an image instead of a video */}
              <div className="relative aspect-video rounded-2xl">
                <Image
                  src="/images/mish.jpeg"
                  alt="Chef preparing Fërgesë Tirane"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-woodBrown bg-opacity-30">
                <button
                  onClick={toggleVideo}
                  className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center shadow-lg hover:bg-terracottaHover transition-colors"
                  aria-label="Play video"
                >
                  <Play className="text-white ml-1 h-6 w-6" />
                </button>
              </div>
              <video
                src="/videos/hell.mp4"
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isPlaying ? "opacity-100" : "opacity-0"
                }`}
                onClick={toggleVideo}
                onEnded={() => {
                  setIsPlaying(false);
                  if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                  }
                }}
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-cream px-4 py-2 rounded-xl shadow-md border-2 border-lightStone hidden md:block">
              <p className="font-dancing text-terracotta text-xl">
                Our secret recipe!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
