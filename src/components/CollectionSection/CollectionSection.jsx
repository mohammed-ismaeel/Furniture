// Import React and image assets used in the collection display
import React from "react";
import collectionImage1 from "./../../assets/images/collection-section-1.png";
import collectionImage2 from "./../../assets/images/collection-section-2.png";
import collectionImage3 from "./../../assets/images/collection-section-3.png";
import light from "./../../assets/images/light-lamp-white-wall.png";
// CollectionSection component:
const CollectionSection = () => {
  return (
    <div className="w-4/5 mx-auto my-16 text-center">
      {/* Section heading with title and subtitle */}
      <div className="heading mb-20">
        <h1 className="text-black font-bold text-3xl mb-5 max-sm:text-2xl">
          Inspiration Collection
        </h1>
        <p className="text-gray text-xl max-sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/* Collection image grid */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="min-w-80">
          <img className="rounded-tl-[60px]" src={collectionImage1} alt="" />
        </div>
        <div className="-translate-y-10 min-w-80 max-lg:-translate-y-0">
          <img src={collectionImage2} alt="" />
        </div>
        {/* Third image with layered light image on top */}
        <div className="relative min-w-80">
          <img className="rounded-br-[60px]" src={collectionImage3} alt="" />
          <img
            src={light}
            alt="light"
            className=" absolute top-0 left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
