import React from "react";
// Import images used in the browse section
import img1 from "./../../assets/images/browse-section-1.png";
import img2 from "./../../assets/images/browse-section-2.png";
import img3 from "./../../assets/images/browse-section-3.png";
const Browse = () => {
  return (
    // Browse component
    <div className="w-4/5 mx-auto my-16 text-center">
      {/* Section heading with title and subtitle */}
      <div className="heading mb-20">
        <h1 className="text-black font-bold text-3xl mb-5 max-md:text-2xl">
          Browse The Range
        </h1>
        <p className="text-gray text-xl max-md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex max-xl:flex-wrap gap-10 justify-center">
        {/* Individual category: Dining */}
        <div>
          <img src={img1} alt="" />
          <h3 className="text-2xl font-semibold text-black pt-5">Dining</h3>
        </div>
        {/* Individual category: Living */}
        <div>
          <img src={img2} alt="" />
          <h3 className="text-2xl font-semibold text-black pt-5">Living</h3>
        </div>
        {/* Individual category: Bedroom */}
        <div>
          <img src={img3} alt="" />
          <h3 className="text-2xl font-semibold text-black pt-5">Bedroom</h3>
        </div>
      </div>
    </div>
  );
};

export default Browse;
