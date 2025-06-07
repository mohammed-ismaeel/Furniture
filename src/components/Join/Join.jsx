import React from "react";
// Join component
const Join = () => {
  return (
    <div className="w-full text-center py-16 px-10 max-sm:px-5">
      {/* Section heading and description */}
      <div className="heading mb-20">
        <h1 className="text-black font-bold text-3xl mb-5 max-md:text-xl">
          Join Our Mailing List
        </h1>
        <p className="text-gray text-xl max-md:text-base">
          Sign up to receive inspiration, product updates, and special offers
          from our team.
        </p>
      </div>
      {/* Email subscription form container */}
      <div className="flex max-w-[500px] h-16 bg-white mx-auto border border-primary border-solid rounded-md">
        <input
          type="email"
          className=" w-full pl-5 max-sm:px-2"
          placeholder="example@gmail.com"
        />
        <button className="w-36 text-white font-bold text-base  bg-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Join;
