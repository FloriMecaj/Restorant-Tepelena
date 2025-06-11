"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredDishes } from "@/lib/data";
import { MenuCard } from "@/components/HomePage/MenuCard";
import Link from "next/link";

const MenuPreviewSection = () => {
  return (
    <section id="menu" className=" md:py-24 bg-lightStone">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-woodBrown">
            Our Featured Dishes
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="font-opensans text-woodBrown text-lg max-w-3xl mx-auto">
            Discover the authentic flavors of Albania through our carefully
            crafted menu. Each dish tells a story of our heritage and
            traditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MenuCard dish={dish} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/menu">
            <span className="inline-flex items-center bg-terracotta hover:bg-terracottaHover text-white font-opensans font-medium px-8 py-3 mb-4 rounded-2xl transition-colors shadow-lg">
              View Full Menu <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;
