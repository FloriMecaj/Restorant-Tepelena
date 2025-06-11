"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/lokali5.jpeg"
              alt="Restaurant Tepelena"
              width={800}
              height={600}
              className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-woodBrown">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-terracotta mb-8"></div>
            <p className="font-opensans text-woodBrown text-lg mb-6">
              Located in the heart of Myslym Shyri, Tirana, Restaurant Tepelena
              has been serving authentic Albanian cuisine to locals and visitors
              since 1995. Our recipes have been passed down through generations,
              preserving the rich culinary heritage of Albania.
            </p>
            <p className="font-opensans text-woodBrown text-lg mb-8">
              Every dish is prepared with locally sourced ingredients and
              traditional cooking methods, offering you a genuine taste of
              Albania&apos;s diverse culinary traditions. Our restaurant&apos;s
              warm, rustic atmosphere invites you to experience the legendary
              Albanian hospitality.
            </p>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-terracotta flex items-center justify-center text-white mr-4">
                <span className="font-dancing text-xl">FM</span>
              </div>
              <div>
                <p className="font-playfair font-semibold text-woodBrown">
                  Fejzo Meçaj
                </p>
                <p className="font-opensans text-sm text-woodBrown opacity-75">
                  Founder & Head Chef
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
