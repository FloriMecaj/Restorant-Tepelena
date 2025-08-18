"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { menuCategories, menuItems } from "@/lib/data";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(menuItems);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(
        menuItems.filter((item) => item.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <section className="pt-32 pb-16 bg-cream">
      <div className="absolute top-6 left-4 md:top-10 md:left-8 z-10">
        <Link href="/">
          <motion.button
            className="flex items-center gap-2 bg-terracotta hover:bg-terracottaHover text-white font-opensans font-medium px-4 py-2 md:px-6 md:py-3 rounded-full transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Back</span>
          </motion.button>
        </Link>
      </div>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-woodBrown">
            Our Menu
          </h1>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-6" />
          <p className="font-opensans text-woodBrown text-lg max-w-3xl mx-auto">
            Discover the authentic flavors of Albania through our traditional
            dishes, prepared with love and respect for our culinary heritage.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-full font-opensans font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-terracotta text-white"
                : "bg-cream border border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
            }`}
          >
            All
          </button>

          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-opensans font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-terracotta text-white"
                  : "bg-cream border border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Sections */}
        {(activeCategory === "all"
          ? menuCategories
          : menuCategories.filter((cat) => cat.id === activeCategory)
        ).map((category) => (
          <motion.div
            key={category.id}
            className="bg-lightStone rounded-2xl shadow-lg p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-2xl font-bold mb-8 text-woodBrown">
              {category.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredItems
                .filter((item) =>
                  activeCategory === "all"
                    ? item.category === category.id
                    : true
                )
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="flex justify-between pb-4 border-b border-cream"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div>
                      <h3 className="font-playfair font-bold text-lg text-woodBrown">
                        {item.name}
                      </h3>
                      <p className="font-opensans text-woodBrown opacity-80">
                        {item.description}
                      </p>
                    </div>
                    <p className="font-playfair font-semibold text-terracotta whitespace-nowrap ml-4">
                      {item.price} € {item.priceUnit && `/ ${item.priceUnit}`}
                    </p>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
