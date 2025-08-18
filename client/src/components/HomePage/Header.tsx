// /components/Header.tsx (Updated with new Sheet Design)
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Import X for the close button
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // Import SheetClose for the close button
} from "@/components/ui/sheet";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/", hash: "#" },
    { label: "About", path: "/#about", hash: "about" },
    { label: "Menu", path: "/#menu", hash: "menu" },
    { label: "Speciality", path: "/#speciality", hash: "speciality" },
    { label: "Location", path: "/#location", hash: "location" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    // We only need to do this on the client
    if (typeof window !== "undefined") {
      setMenuOpen(false);
      if (pathname === "/") {
        e.preventDefault();
        if (hash && hash !== "#") {
          const element = document.getElementById(hash);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: "smooth",
            });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed w-full bg-cream bg-opacity-95 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" onClick={(e) => handleNavClick(e, "#")}>
            <span className="text-terracotta font-dancing text-3xl md:text-4xl font-bold cursor-pointer">
              Tepelena
            </span>
          </Link>
        </div>

        {/* --- REFACTORED MOBILE MENU --- */}
        <div className="md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button className="text-woodBrown p-2" aria-label="Open menu">
                <Menu className="h-7 w-7" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-lightStone w-full max-w-sm p-0 border-l-2 border-terracotta"
            >
              <SheetHeader className="p-6 text-left border-b border-cream">
                <SheetTitle className="text-terracotta font-dancing text-3xl font-bold">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.hash)}
                    className={`font-opensans font-semibold text-lg px-4 py-3 rounded-lg transition-colors text-woodBrown hover:bg-terracotta/10 hover:text-terracotta`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Decorative Footer */}
              <div className="mt-auto p-6">
                <div className="albanian-pattern w-full h-5 opacity-50" />
                <p className="font-dancing text-oliveGreen text-center mt-4">
                  Authentic Albanian Cuisine Since 1998
                </p>
              </div>

              {/* Custom Close Button */}
              <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100">
                <X className="h-6 w-6 text-woodBrown" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>

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
