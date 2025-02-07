"use client";
import React from "react";
import { Header } from "../Header/Header";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const HeroBanner = () => {
  return (
    <div
      id="hero-banner"
      className="w-full h-screen flex flex-col relative overflow-hidden"
    >
      <Header />
      <div className="fixed left-0 top-0 right-0 bottom-0 -z-10 bg-gradient-to-b from-black/70 to-black/20" />
      <div className="w-full h-full bg-cover fixed bg-center top-0 left-0 -z-20 bg-[url('/images/header.jpg')]" />
      <div className="px-4 h-full w-full m-auto flex flex-col justify-center items-center text-center text-primary animate-fade-in-up">
        <h1 className="text-5xl sm:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Discover Albanian Cuisine
        </h1>
        <div className="w-24 h-1 bg-primary mb-6" />
        <p className="text-lg sm:text-xl max-w-2xl text-secondary mb-8">
          Explore the rich and diverse flavors of Albanian cuisine, featuring
          traditional recipes that have been lovingly passed down through
          generations, preserving the essence of a vibrant culinary heritage.
        </p>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border-2 border-primary text-primary font-bold mt-10 py-3 px-6 rounded-full transition-all duration-300 hover:bg-primary hover:text-black hover:translate-y-1"
          href="https://wa.me/+355682048648"
        >
          <span>Reserve a Table</span>
          <FaArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};
