import React from "react";
import Button from "../Button/Button";
import girl from "./../../assets/images/Girl.png";
// Beautify component
const Beautify = () => {
  return (
    <div className="bg-secondary w-full flex justify-between items-center px-44 py-16 gap-14 max-xl:flex-col">
      {/* Text content section */}
      <div className="content max-w-[514px] max-md:text-center">
        <h1 className="text-black text-4xl font-bold max-md:text-2xl">
          Beautify Your Space
        </h1>
        <p className="text-2xl text-gray mt-5 mb-7 max-md:text-base">
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        {/* Reusable Button component */}
        <Button buttonContent={"learn more"} />
      </div>
      {/* Image section */}
      <div className="relative">
        <img
          src={girl}
          alt=""
          className="z-40 relative rounded-tl-[60px]  rounded-br-[60px] max-md:min-w-80"
        />
        <div className="w-96 h-96 rounded-full bg-green-900 absolute top-1/2 -translate-y-1/2 -right-20 z-0 max-md:w-72 max-md:h-72 max-md:-right-12 max-sm:-right-5"></div>
      </div>
    </div>
  );
};

export default Beautify;
