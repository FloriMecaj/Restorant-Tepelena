"use client";
import "./sticky-header.css";
import clsx from "clsx";
import Link from "next/link";
import { Nav } from "./Nav";
import Image from "next/image";

interface StickyHeaderProps {
  isOpen: boolean;
  isVisible: boolean;
  isScrollingUp: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const StickyHeader = ({
  isOpen,
  setIsOpen,
  isVisible,
  isScrollingUp,
  handleScroll,
}: StickyHeaderProps) => {
  return (
    <header
      className={clsx(
        "header w-full px-4 z-20 py-2 sm:py-3 shadow-md flex items-center justify-between",
        "bg-black text-primary hover:text-primaryLight",
        isVisible ? (isScrollingUp ? "header-show" : "header-up") : "header-up"
      )}
    >
      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
        <Image
          src="/logo-no-bg.png"
          alt="Logo"
          className="rounded-full"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <Nav underlineClassName="border-black" handleScroll={handleScroll} />
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={clsx(
          "md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 group"
        )}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`w-8 h-1 bg-primary rounded transform transition-all duration-700 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-8 h-1 bg-primary rounded transition-all duration-700 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-8 h-1 bg-primary rounded transform transition-all duration-700 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      <div className="hidden md:flex flex-shrink-0">
        <Link
          href="https://wa.me/+355682048648"
          className="max-md:hidden border border-primary text-primary font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-primary hover:text-black"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};
