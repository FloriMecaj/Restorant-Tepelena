"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Utensils, Leaf, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SpecialityProps {
  title?: string;
  content?: string;
  lang?: string;
}

export const Speciality = ({ title, content, lang }: SpecialityProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const t = {
    en: {
      btn: "Order Our Specialty",
      recipe: "Traditional Recipe",
      ingredients: "Local Ingredients",
      slow: "Slow-roasted",
      badge: "Our secret recipe!",
    },
    al: {
      btn: "Porosit Specialitetin",
      recipe: "Recetë Tradicionale",
      ingredients: "Produkte të freskëta",
      slow: "Pjekje e ngadaltë",
      badge: "Receta jonë sekrete!",
    },
  }[lang as "en" | "al"];

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="speciality" className="pt-16 md:pt-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-woodBrown">
              {title || "Our Specialty"}
            </h2>
            <div className="w-16 h-1 bg-terracotta mb-8"></div>
            <p className="font-opensans text-woodBrown text-lg mb-6 leading-relaxed">
              {content}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center">
                <Utensils className="text-terracotta mr-3 h-5 w-5" />
                <span className="font-opensans text-woodBrown">{t.recipe}</span>
              </div>
              <div className="flex items-center">
                <Leaf className="text-terracotta mr-3 h-5 w-5" />
                <span className="font-opensans text-woodBrown">
                  {t.ingredients}
                </span>
              </div>
              <div className="flex items-center">
                <Flame className="text-terracotta mr-3 h-5 w-5" />
                <span className="font-opensans text-woodBrown">{t.slow}</span>
              </div>
            </div>
            <a
              href="https://wa.me/355697514181"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-terracotta hover:bg-terracottaHover text-white font-opensans font-medium px-6 py-3 rounded-2xl transition-colors shadow-lg">
                {t.btn}
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-xl relative aspect-video cursor-pointer"
              onClick={toggleVideo}
            >
              <div
                className={`relative aspect-video rounded-2xl ${isPlaying ? "opacity-0" : "opacity-100"} transition-opacity`}
              >
                <Image
                  src="/images/mish.jpeg"
                  alt="Lamb on spit"
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center shadow-lg">
                    <Play className="text-white ml-1 h-6 w-6" />
                  </div>
                </div>
              </div>
              <video
                src="/videos/hell.mp4"
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover ${isPlaying ? "opacity-100" : "opacity-0"}`}
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-cream px-4 py-2 rounded-xl shadow-md border-2 border-lightStone hidden md:block">
              <p className="font-dancing text-terracotta text-xl">{t.badge}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
