import workImage1 from "./../../assets/images/works-section-1.png";
import workImage2 from "./../../assets/images/works-section-2.png";
import workImage3 from "./../../assets/images/works-section-3.png";
const Works = () => {
  return (
    <div className="w-4/5 mx-auto my-16 text-center">
      <div className="heading mb-20">
        <h1 className="text-black font-bold text-3xl mb-5">How It Works</h1>
        <p className="text-gray text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="min-w-80 max-w-96">
          <div className="relative">
            <img src={workImage1} alt="" className="w-full" />
            <div className="absolute text-2xl font-bold bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 rounded-full bg-black text-white w-14 h-14 flex items-center justify-center outline outline-[15px] outline-white ">
              1.
            </div>
          </div>
          <div className="mt-14">
            <h2 className="text-2xl text-black font-bold">Purchase Securely</h2>
            <p className="text-lg text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div  className="min-w-80 max-w-96">
          <div className="relative">
            <img src={workImage2} alt="" className="w-full" />
            <div className="absolute text-2xl font-bold bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 rounded-full bg-black text-white w-14 h-14 flex items-center justify-center outline outline-[15px] outline-white ">
              2.
            </div>
          </div>
          <div className="mt-14">
            <h2 className="text-2xl text-black font-bold">
              Ships From Warehouse
            </h2>
            <p className="text-lg text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="min-w-80 max-w-96">
          <div className="relative">
            <img src={workImage3} alt="" className="w-full" />
            <div className="absolute text-2xl font-bold bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 rounded-full bg-black text-white w-14 h-14 flex items-center justify-center outline outline-[15px] outline-white ">
              3.
            </div>
          </div>
          <div className="mt-14">
            <h2 className="text-2xl text-black font-bold">Style Your Room</h2>
            <p className="text-lg text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
