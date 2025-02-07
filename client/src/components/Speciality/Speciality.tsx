import React from "react";

export const Speciality = () => {
  return (
    <div
      id="speciality"
      className="w-full flex flex-col justify-center items-center bg-black py-6 px-6 md:px-12"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 px-6">
        Our speciality
      </h2>
      <p className="text-lg mb-6 text-center md:max-w-5xl text-secondary px-6 md:text-2xl">
        For years we have been serving our customers the same lamb/goat dish.{" "}
        <span className="block text-primary text-2xl font-semibold">
          Lamb/Goat on a spit
        </span>
      </p>
      <div className="w-full max-w-4xl mb-10 relative">
        <video
          src="/videos/hell2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover h-96 rounded-lg opacity-55 md:hidden"
        />

        <video
          src="/videos/hell.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover h-96 rounded-lg hidden opacity-55 md:block"
        />
      </div>
    </div>
  );
};
