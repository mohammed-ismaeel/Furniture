import React from "react";
import heroBackground from "./../../assets/images/hero-background.jpg"; // Background image for the hero section
import Button from "../Button/Button"; // Reusable Button component
const Hero = () => {
  return (
    <div className="w-full h-[calc(100%-128px)] relative max-lg:h-[calc(100%-96px)]">
      {/* Background image that covers entire hero area */}
      <img src={heroBackground} alt="" className="w-full h-full object-cover" />
      {/* Overlay content box */}
      <div className="w-2/5 p-10 bg-accent absolute right-24 top-1/2 -translate-y-1/2 rounded-xl max-md:w-full max-md:text-center max-md:right-1/2 max-md:translate-x-1/2 max-md:bg-transparent max-md:top-1/3">
        <p className="top text-black font-semibold text-base tracking-widest">
          New Arrival
        </p>
        {/* Main heading */}
        <h1 className="text-primary text-5xl font-bold my-5 max-lg:text-3xl">
          Discover Our <br /> New Collection
        </h1>
        {/* Description text */}
        <p className="text-gray font-medium text-lg mb-5 max-md:text-base max-md:font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        {/* Call-to-action button */}
        <Button buttonContent={"buy now"} />
      </div>
    </div>
  );
};

export default Hero;
