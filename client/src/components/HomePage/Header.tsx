"use client";

import { useState, useEffect, useRef } from "react";
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
  const [scrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const sheetRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        sheetRef.current &&
        !sheetRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

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
    // Close mobile menu when a link is clicked
    setMenuOpen(false);

    if (pathname === "/" && hash) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
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
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden text-woodBrown focus:outline-none"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            ref={sheetRef}
            side="right"
            className="md:hidden bg-lightStone shadow-lg w-full max-w-xs"
            onInteractOutside={(e) => e.preventDefault()} // Disable default outside click
          >
            <SheetHeader className="mb-6">
              <div className="flex justify-between items-center">
                <SheetTitle className="text-terracotta font-dancing text-3xl font-bold">
                  Menu
                </SheetTitle>
              </div>
            </SheetHeader>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className={`font-opensans font-medium px-4 py-3 rounded-lg transition-colors ${
                    pathname === link.path
                      ? "bg-terracotta text-white"
                      : "text-woodBrown hover:bg-terracotta/10 hover:text-terracotta"
                  }`}
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
              className={`font-opensans font-medium hover:text-terracotta transition-colors ${
                pathname === link.path ? "text-terracotta font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
