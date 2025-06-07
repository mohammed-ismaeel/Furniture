// Import images used in the Instagram gallery section of the footer
import footerImage1 from "./../../assets/images/footer-1.jpg";
import footerImage2 from "./../../assets/images/footer-2.jpg";
import footerImage3 from "./../../assets/images/footer-3.jpg";
import footerImage4 from "./../../assets/images/footer-4.jpg";

const Footer = () => {
  return (
    // Main footer container
    <div className=" bg-primary flex justify-between items-center min-h-96 pt-16 px-32 pb-16 gap-10 max-lg:px-12 max-md:flex-wrap max-md:justify-start">
      {/* Left section */}
      <div className="w-1/3 max-md:w-full">
        <h1 className="text-2xl text-white font-bold max-md:text-xl">
          Beauty Care
        </h1>
        <p className="text-base text-white mb-5 mt-8">
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{" "}
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
      {/* Right section: */}
      <div className="w-2/3 max-md:w-full">
        <h1 className="text-2xl text-white font-bold mb-5 max-md:text-xl">
          Instagram Shop
        </h1>
        <ul className="flex gap-5 flex-wrap">
          {/* Instagram gallery images */}
          <li>
            <img src={footerImage1} alt="" />
          </li>
          <li>
            <img src={footerImage2} alt="" />
          </li>
          <li>
            <img src={footerImage3} alt="" />
          </li>
          <li>
            <img src={footerImage4} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
