import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-darkBrown text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap gap-y-12">
          <div className="w-full md:w-1/3 pr-0 md:pr-8">
            <div className="mb-6">
              <span className="font-dancing text-3xl text-terracotta">
                Tepelena
              </span>
            </div>
            <p className="font-opensans text-gray-300 mb-6">
              Experience the authentic taste of Albanian cuisine in a warm,
              welcoming atmosphere that celebrates our rich cultural heritage.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/bar.restaurant.tepelena"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-terracotta transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/restorant_tepelena/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 md:px-4">
            <h3 className="font-playfair font-bold text-xl mb-6">Contact Us</h3>
            <ul className="font-opensans space-y-4">
              <li className="flex items-start">
                <HiOutlineLocationMarker className="mt-1 mr-3 text-terracotta h-5 w-5" />
                <span>
                  Rruga Nikolla Jorga
                  <br />
                  Tirana, Albania
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-terracotta h-5 w-5" />
                <span>+355 69 751 4181 /0</span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 md:pl-4">
            <h3 className="font-playfair font-bold text-xl mb-6">
              Opening Hours
            </h3>
            <ul className="font-opensans space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday:</span>
                <span>10:00 - 00:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="font-opensans text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Restaurant Tepelena. All rights
            reserved. | Developed and designed by EEFinityTech
          </p>
        </div>
      </div>
    </footer>
  );
};
