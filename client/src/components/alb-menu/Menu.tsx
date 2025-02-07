"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  menuSection1,
  menuSection2,
  menuSection3,
  menuSection4,
} from "./MenuItems";
import { MenuItem } from "../Menu/MenuItems";

const MenuSection: React.FC<{ title: string; items: MenuItem[] }> = ({
  title,
  items,
}) => (
  <div className="mt-6 p-8">
    <h2 className="text-2xl text-secondary font-semibold text-center mb-12 relative animate-slide-in">
      {title}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full animate-scale-x"></span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-secondary pb-4 hover:bg-[#2a2a2a] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg p-4 cursor-pointer relative overflow-hidden animate-fade-in-up"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
            <span className="text-lg text-secondary">ALL {item.price}</span>
          </div>
          <p className="text-sm text-secondary mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex flex-col items-center relative">
      {/* Sticky Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-[#1e1e1e] transition-all duration-300 ${
          isScrolled ? "shadow-lg py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-primary animate-fade-in">
            Our Menu
          </h1>
          <Link
            className="border border-primary text-primary font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-lg animate-bounce-in"
            href="/"
          >
            Go Back
          </Link>
        </div>
      </div>

      {/* Parallax Background */}
      <div className="w-full h-[400px] bg-[url('/images/menu.jpeg')] bg-cover bg-fixed bg-center relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-6xl font-bold text-primary text-center relative z-10 animate-fade-in-up">
          Discover Our Flavors
        </h1>
      </div>

      {/* Menu Sections */}
      <div className="w-full max-w-5xl mt-6 mb-10">
        <MenuSection title="Per Fillim" items={menuSection3} />
        <MenuSection title="Sallata" items={menuSection2} />
        <MenuSection title="Kryesore" items={menuSection1} />
        <MenuSection title="Pije" items={menuSection4} />
      </div>
    </div>
  );
};
