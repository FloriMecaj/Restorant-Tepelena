"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get current language from URL, default to 'en'
  const currentLang = searchParams.get("lang") || "en";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Labels for both languages
  const labels = {
    en: {
      home: "Home",
      about: "About",
      menu: "Menu",
      speciality: "Speciality",
      location: "Location",
      navTitle: "Navigation",
      subtitle: "Authentic Albanian Cuisine Since 1998",
    },
    al: {
      home: "Kreu",
      about: "Rreth Nesh",
      menu: "Menuja",
      speciality: "Specialiteti",
      location: "Vendndodhja",
      navTitle: "Navigimi",
      subtitle: "Kuzhinë Autentike Shqiptare që nga viti 1998",
    },
  };

  const t = labels[currentLang as keyof typeof labels];

  const navLinks = [
    { label: t.home, path: "/", hash: "#" },
    { label: t.about, path: "/#about", hash: "about" },
    { label: t.menu, path: "/#menu", hash: "menu" },
    { label: t.speciality, path: "/#speciality", hash: "speciality" },
    { label: t.location, path: "/#location", hash: "location" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
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

  const toggleLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-cream bg-opacity-95 z-[50] transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href={`/?lang=${currentLang}`}
            onClick={(e) => handleNavClick(e, "#")}
          >
            <span className="text-terracotta font-dancing text-3xl md:text-4xl font-bold cursor-pointer">
              Tepelena
            </span>
          </Link>
        </div>

        {/* Right Section: Desktop Nav + Language */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-woodBrown">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={`${link.path}?lang=${currentLang}`}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="font-opensans font-medium hover:text-terracotta transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center gap-2 border-l pl-6 border-terracotta/20">
            <button
              onClick={() => toggleLanguage("en")}
              className={`text-sm font-bold transition-colors ${currentLang === "en" ? "text-terracotta" : "text-woodBrown/50 hover:text-woodBrown"}`}
            >
              EN
            </button>
            <span className="text-woodBrown/20">|</span>
            <button
              onClick={() => toggleLanguage("al")}
              className={`text-sm font-bold transition-colors ${currentLang === "al" ? "text-terracotta" : "text-woodBrown/50 hover:text-woodBrown"}`}
            >
              AL
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-4">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-woodBrown p-2" aria-label="Open menu">
                  <Menu className="h-7 w-7" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-lightStone w-full max-w-sm p-0 border-l-2 border-terracotta flex flex-col"
              >
                <SheetHeader className="p-6 text-left border-b border-cream">
                  <SheetTitle className="text-terracotta font-dancing text-3xl font-bold">
                    {t.navTitle}
                  </SheetTitle>
                </SheetHeader>

                {/* Language Switcher (Mobile) */}
                <div className="flex justify-center gap-8 py-6 bg-cream/50 border-b border-terracotta/10">
                  <button
                    onClick={() => toggleLanguage("en")}
                    className={`flex flex-col items-center gap-1 ${currentLang === "en" ? "text-terracotta" : "text-woodBrown"}`}
                  >
                    <span className="text-xs font-bold">ENGLISH</span>
                    <div
                      className={`h-1 w-8 rounded-full ${currentLang === "en" ? "bg-terracotta" : "bg-transparent"}`}
                    />
                  </button>
                  <button
                    onClick={() => toggleLanguage("al")}
                    className={`flex flex-col items-center gap-1 ${currentLang === "al" ? "text-terracotta" : "text-woodBrown"}`}
                  >
                    <span className="text-xs font-bold">SHQIP</span>
                    <div
                      className={`h-1 w-8 rounded-full ${currentLang === "al" ? "bg-terracotta" : "bg-transparent"}`}
                    />
                  </button>
                </div>

                <nav className="flex flex-col p-6 space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={`${link.path}?lang=${currentLang}`}
                      onClick={(e) => handleNavClick(e, link.hash)}
                      className={`font-opensans font-semibold text-lg px-4 py-3 rounded-lg transition-colors text-woodBrown hover:bg-terracotta/10 hover:text-terracotta`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto p-6">
                  <div className="albanian-pattern w-full h-5 opacity-50" />
                  <p className="font-dancing text-oliveGreen text-center mt-4 text-sm">
                    {t.subtitle}
                  </p>
                </div>

                <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100">
                  <X className="h-6 w-6 text-woodBrown" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
