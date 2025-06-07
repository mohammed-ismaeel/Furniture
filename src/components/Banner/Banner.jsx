import React from "react";
import truckimage from "./../../assets/images/truckfast.svg";
import image24 from "./../../assets/images/24hours.svg";
import authimage from "./../../assets/images/auth.png";
const Banner = () => {
  return (
    <ul className="w-full bg-secondary flex justify-center px-28 py-12 flex-wrap gap-10 max-lg:px-12">
      <li className="flex gap-8 items-center">
        <img src={truckimage} alt="" className="w-20" />
        <div>
          <h1 className="text-2xl font-semibold text-black max-sm:text-xl">Free Delivery</h1>
          <p className="text-gray max-sm:text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <li className="flex gap-8 items-center">
        <img src={image24} alt="" className="w-20 " />
        <div>
          <h1 className="text-2xl font-semibold text-black  max-sm:text-xl">Support 24/7</h1>
          <p className="text-gray max-sm:text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <li className="flex gap-8 items-center">
        <img src={authimage} alt="" className="w-16 " />
        <div>
          <h1 className="text-2xl font-semibold text-black max-sm:text-xl">100% Authentic</h1>
          <p className="text-gray max-sm:text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
    </ul>
  );
};

export default Banner;
