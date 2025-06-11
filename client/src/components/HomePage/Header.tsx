"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Home", path: "/", hash: "" },
    { label: "About", path: "/#about", hash: "about" },
    { label: "Menu", path: "/#menu", hash: "menu" },
    { label: "Speciality", path: "/#speciality", hash: "speciality" },
    { label: "Location", path: "/#location", hash: "location" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    // If we're already on the home page and clicking a hash link
    if (pathname === "/" && hash) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Account for header height
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={`fixed w-full bg-cream bg-opacity-95 z-50 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-terracotta font-dancing text-3xl md:text-4xl font-bold cursor-pointer">
              Tepelena
            </span>
          </Link>
        </div>

        {/* Mobile menu using Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="md:hidden text-woodBrown focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden bg-cream shadow-lg">
            <SheetHeader>
              <SheetTitle className="text-terracotta font-dancing text-3xl font-bold mb-4">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 text-woodBrown font-opensans font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className="hover:text-terracotta transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-woodBrown">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.hash)}
              className="font-opensans font-medium hover:text-terracotta transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
