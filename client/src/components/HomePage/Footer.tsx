import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

interface FooterProps {
  lang: string;
  description?: string;
}

export const Footer = ({ lang, description }: FooterProps) => {
  const t = {
    en: {
      contact: "Contact Us",
      hours: "Opening Hours",
      monFri: "Monday - Friday:",
      satSun: "Saturday - Sunday:",
    },
    sq: {
      contact: "Na Kontaktoni",
      hours: "Orari i Hapjes",
      monFri: "Hënë - Premte:",
      satSun: "Shtunë - Diel:",
    },
  }[lang as "en" | "sq"];

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
            <p className="font-opensans text-gray-300 mb-6">{description}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/bar.restaurant.tepelena"
                target="_blank"
                className="text-gray-300 hover:text-terracotta transition-colors"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/restorant_tepelena/?hl=en"
                target="_blank"
                className="text-gray-300 hover:text-terracotta transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 md:px-4">
            <h3 className="font-playfair font-bold text-xl mb-6">
              {t.contact}
            </h3>
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
                <span>+355 69 751 4181</span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 md:pl-4">
            <h3 className="font-playfair font-bold text-xl mb-6">{t.hours}</h3>
            <ul className="font-opensans space-y-2">
              <li className="flex justify-between">
                <span>{t.monFri}</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t.satSun}</span>
                <span>10:00 - 00:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Restaurant Tepelena. | Developed by
          EEFinityTech
        </div>
      </div>
    </footer>
  );
};
