"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black py-6 px-6 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row w-full gap-14 text-secondary">
          <div className="lg:mr-8 md:max-w-52">
            <div className="flex items-center mx-auto mb-4 max-w-40 lg:max-w-60 w-full ">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                src="/logo.png"
                alt="Logo"
              />
            </div>
            <p className="text-center text-secondary max-w-50 lg:max-w-60 mx-auto">
              Bringing authentic Albanian flavors since 1998, with every meal
              crafted with passion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-evenly sm:items-center w-full max-sm:text-center max-sm:gap-y-12">
            <div className="flex flex-col justify-center max-md:max-w-52 max-md:mx-auto w-full">
              <h4 className="text-primary text-2xl pb-3 bg-clip-text font-semibold">
                Address
              </h4>
              <div className="space-y-1 text-lg mt-2">
                <p>Nikolla Jorga</p>
                <p>Tirana, Albania</p>
              </div>
            </div>

            <div className="flex flex-col justify-center max-md:max-w-64 max-md:mx-auto w-full">
              <h4 className="text-primary text-2xl pb-3 bg-clip-text font-semibold">
                Working Hours
              </h4>
              <div className="space-y-1 text-lg mt-3">
                <p>Monday - Sunday</p>
                <p>11:00 AM / 23:00 PM</p>
              </div>
            </div>

            <div className="flex flex-col items-center max-md:max-w-64 max-md:mx-auto w-full">
              <h4 className="text-primary text-2xl pb-10 bg-clip-text font-semibold">
                Follow Us
              </h4>
              <div className="flex justify-center space-x-2">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/@bar.restaurant.tepelena/"
                  className="p-2 text-secondary hover:text-primary transition-all duration-300"
                >
                  <FaFacebook size={30} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/restorant_tepelena/?hl=en"
                  className="p-2 text-secondary hover:text-primary transition-all duration-300"
                >
                  <FaInstagram size={30} />
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-center max-md:max-w-52 max-md:mx-auto w-full">
              <h4 className="text-primary text-center text-2xl pb-6 bg-clip-text font-semibold">
                Contact Us
              </h4>
              <p
                className={clsx(
                  "text-secondary  text-lg font-bold w-full  text-center py-2 px-4"
                )}
              >
                +355 697514180
                <br />
                +355 697514181
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary mt-8 pt-6">
          <p className="text-primary text-xl text-center">
            © 2025 Restaurant Tepelena. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
