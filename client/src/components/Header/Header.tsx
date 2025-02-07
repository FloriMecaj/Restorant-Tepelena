"use client";
import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Nav } from "./Nav";
import { StickyHeader } from "./StickyHeader";
import Image from "next/image";

export const navItems = [
  { title: "Home", href: "#hero-banner" },
  { title: "About us", href: "#about-us" },
  { title: "Menu", href: "#menu" },
  { title: "Speciality", href: "#speciality" },
  { title: "Maps", href: "#maps" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isActive] = useState<number | null>(null);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let hideBuffer = 0;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        hideBuffer = 0;
        setIsScrollingUp(true);
      }

      if (currentScrollY > lastScrollY) {
        hideBuffer += currentScrollY - lastScrollY;
        if (hideBuffer >= 100) {
          setIsScrollingUp(false);
          hideBuffer = 0;
        }
      }

      setIsVisible(currentScrollY > window.innerHeight * 0.2 + 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <StickyHeader
        isVisible={isVisible}
        isScrollingUp={isScrollingUp}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleScroll={handleScroll}
      />
      <div className="w-full px-4 mx-auto flex flex-col gap-4 bg-gradient-to-b from-black to-transparent">
        <header
          className={clsx(
            "w-full flex items-center py-1 sm:py-3 text-primary hover:text-primary px-4 sm:px-6 lg:px-8",
            "justify-between",
            "transition-all duration-300"
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

          <Nav
            underlineClassName="border-primary"
            handleScroll={handleScroll}
          />

          <div className="md:hidden flex items-center justify-end flex-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col items-center justify-center w-10 h-10 space-y-1.5 group"
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
          </div>

          <div className="hidden md:flex flex-shrink-0">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+355682048648"
              className="border border-primary text-primary font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-primary hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </header>
      </div>

      <div
        ref={mobileMenuRef}
        className={clsx(
          "w-full bg-[#1e1e1e] h-auto fixed top-0 left-0 transition-all duration-500 z-20 ease-out md:hidden p-4",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex w-full md:justify-end justify-between items-center">
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
          <div className="w-14 h-14 md:hidden">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className=" rounded-sm"
              src="/logo-no-bg.png"
              alt="logo"
            />
          </div>
        </div>
        <nav
          className={clsx(
            "flex flex-col gap-y-3 transition-transform duration-700 transform",
            isOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          {navItems.map((item, idx) => (
            <div
              key={`nav-item-${idx}`}
              className="flex group items-center flex-col w-full"
            >
              <Link
                onClick={(e) => {
                  handleScroll(e, item.href);
                  setIsOpen(false);
                }}
                className="text-primary text-lg py-1 border-b border-secondary transition-all w-full duration-200"
                href={item.href}
              >
                {item.title}
              </Link>
              <hr
                className={clsx(
                  "transition-all w-0 duration-200 border-b-2 border-primary",
                  isActive === idx && "w-full"
                )}
              />
            </div>
          ))}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+355682048648"
            className="border border-primary flex justify-center items-center text-primary font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-primary hover:text-black mt-4"
          >
            Contact Us
          </Link>
        </nav>
      </div>
      <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none"></div>
    </>
  );
};
