import React from "react";

export const Maps = () => {
  return (
    <div
      id="maps"
      className="w-full flex flex-col justify-center items-center bg-black py-6 px-6 md:px-12"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 px-6">
        Where to Find Us
      </h2>

      <p className="text-lg mb-6 text-center md:max-w-5xl text-secondary px-6 md:text-2xl">
        Located in the heart of Tirana, our place is easy to find and offers a
        welcoming atmosphere for all. Whether you&apos;re visiting us for a
        quick bite or a long stay, we&apos;re here to serve you in the
        city&apos;s most vibrant area.
      </p>

      <div className="text-center mb-6 px-6">
        <p className="text-3xl md:text-5xl font-bold text-primary">Address:</p>
        <p className="text-secondary text-xl">Nikolla Jorga, Tirana, Albania</p>
      </div>

      <div className="w-full max-w-4xl mb-10 relative">
        <iframe
          className="w-full rounded-lg h-96 border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0043458881233!2d19.8071843!3d41.3233793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503100df59f7ed%3A0x53db6dce7b26542a!2sRestorant%20Tepelena!5e0!3m2!1sen!2s!4v1695581724387!5m2!1sen!2s"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
