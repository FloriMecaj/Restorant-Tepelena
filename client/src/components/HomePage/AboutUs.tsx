"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutUsProps {
  title?: string;
  text1?: string;
  text2?: string;
  founderRole?: string; // Add this
}

export const AboutUs = ({ title, text1, text2, founderRole }: AboutUsProps) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-woodBrown">
              {title || "Our Story"}
            </h2>
            <div className="w-16 h-1 bg-terracotta mb-8"></div>
            <p className="font-opensans text-woodBrown text-lg mb-6">
              {text1 || "Located in the heart of Myslym Shyri..."}
            </p>
            <p className="font-opensans text-woodBrown text-lg mb-8">
              {text2 ||
                "Every dish is prepared with locally sourced ingredients..."}
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
                  {founderRole || "Founder & Head Chef"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
