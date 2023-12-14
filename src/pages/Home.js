import { useState } from "react";
import Packages from "../components/Packages";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const Home = () => {
  const [showPackages, setShowPackages] = useState(false);

  const { value } = useSelector((state) => state.contact);

  return (
    <>
      {showPackages && <Packages setShowPackages={setShowPackages} />}
      {value && <Contact />}
      <div
        className={
          showPackages || value
            ? "blur-lg pointer-events-none select-none bg min-h-screen w-full px-4"
            : "bg min-h-screen pb-10 md:pb-3 px-4"
        }
      >
        <div className="2xl:max-w-[70%] 2xl:gap-9 flex flex-col justify-center pt-10 gap-4 mx-auto sm:px-7 md:flex-row md:items-center md:justify-between lg:pt-20">
          <p className="flex flex-col gap-2 items-start font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            GO Explore, <span>It's a big world</span> <span>Out there</span>
          </p>
          <p className="flex flex-col items-start self-end sm:text-xl md:self-">
            "Man cannot discover new oceans <span>unless he has </span>
            <span>the courage to lose sight of</span> the shore"
            <span className="mt-4">___Andre Gide</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-10 justify-between rounded-3xl mt-7 bg-white py-6 lg:py-8 px-4 md:mt-32 md:rounded-full md:flex-row lg:max-w-[60%] mx-auto 2xl:mt-60">
          <div className="flex flex-col items-center font-bold w-full md:ml-10">
            <select className="shadow w-full py-3 md:py-4 px-2 md:px-10 text-black text-sm rounded-full">
              <option value="">View Packages</option>
              <option value="">International visa administration</option>
              <option value="">
                Family/individual tourist visa for holiday
              </option>
              <option value="">International student admission</option>
              <option value="">International religious holidays</option>
            </select>
          </div>

          <div className="flex flex-col items-center justify-center font-bold gap-4 md:gap-0 w-full md:flex-row md:mr-10">
            <select className="shadow md:rounded-tl-full md:rounded-bl-full w-full md:w-[50%] py-3 md:py-4 px-2 md:px-10 text-black text-sm rounded-full">
              <option value="">View Countries</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
            </select>
            <div className="bg-[#992288] rounded-full py-2 md:py-3 w-full md:-ml-10 md:w-[50%]">
              <button
                onClick={() => setShowPackages(true)}
                className="text-sm rounded-full w-full"
              >
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
