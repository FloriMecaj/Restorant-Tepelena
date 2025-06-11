"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Maps = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-lightStone">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-woodBrown">
            Find Us
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="font-opensans text-woodBrown text-lg max-w-3xl mx-auto">
            Located in the heart of Myslym Shyri, one of Tirana&apos;s most
            charming neighborhoods, Restaurant Tepelena welcomes you to
            experience authentic Albanian cuisine.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-96">
              {/* Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3099694164944!2d19.8097592!3d41.3233753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503100df59f7ed%3A0x53db6dce7b26542a!2sRestorant%20Tepelena!5e0!3m2!1sen!2sus!4v1718112345678!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-5/12 bg-cream rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair font-bold text-2xl mb-6 text-woodBrown">
              Our Address
            </h3>

            <div className="flex items-start mb-10">
              <MapPin className="text-terracotta mt-1 mr-4 h-5 w-5" />
              <div>
                <p className="font-opensans text-woodBrown">
                  Rruga Nikolla Jorga
                </p>
                <p className="font-opensans text-woodBrown">Tirana, Albania</p>
              </div>
            </div>

            <div className="flex items-start mb-10">
              <Phone className="text-terracotta mt-1 mr-4 h-5 w-5" />
              <div>
                <p className="font-opensans text-woodBrown">
                  +355 69 751 4181 /0
                </p>
                <p className="font-opensans text-woodBrown text-sm opacity-75">
                  Call us for reservations
                </p>
              </div>
            </div>

            <h3 className="font-playfair font-bold text-xl mb-4 text-woodBrown">
              Opening Hours
            </h3>

            <div className="grid grid-cols-2 gap-2 mb-6">
              <p className="font-opensans text-woodBrown">Monday - Friday:</p>
              <p className="font-opensans text-woodBrown">11:00 - 23:00</p>

              <p className="font-opensans text-woodBrown">Saturday - Sunday:</p>
              <p className="font-opensans text-woodBrown">10:00 - 00:00</p>
            </div>

            <a
              href="https://wa.me/355682048648"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-terracotta hover:bg-terracottaHover text-white font-opensans font-medium px-6 py-3 rounded-2xl transition-colors shadow-lg">
                Make a Reservation
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
