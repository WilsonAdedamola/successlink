import { useState } from "react";
import Packages from "../components/Packages";

const Home = () => {
  const [showPackages, setShowPackages] = useState(false);

  return (
    <>
      {showPackages && <Packages setShowPackages={setShowPackages}/>}
      <div
        className={
          showPackages
            ? "blur-lg pointer-events-none select-none bg min-h-screen absolute w-full top-0 -z-10 px-4"
            : "bg min-h-screen px-4"
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
        <div className="flex flex-col items-center gap-4 justify-between rounded mt-7 bg-white px-5 py-3 md:px-2 md:mt-32 md:flex-row lg:max-w-[80%] mx-auto 2xl:mt-60">
          <div className="flex flex-col items-start w-full">
            <p className="text-[#898989] mb-1 text-xs xl:text-base">
              International visa administration
            </p>
            <select className="shadow rounded w-full py-2 text-black text-sm">
              <option value="">Select Countries</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          <div className="flex flex-col items-start w-full">
            <p className="text-[#898989] mb-1 text-xs xl:text-base">
              International student admission
            </p>
            <select className="shadow rounded w-full py-2 text-black text-sm">
              <option value="">Select Countries</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          <div className="flex flex-col items-start w-full">
            <p className="text-[#898989] mb-1 text-xs xl:text-base">
              Visiting visa application support
            </p>
            <select className="shadow rounded w-full py-2 text-black text-sm">
              <option value="">Select Countries</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          <button onClick={()=>setShowPackages(true)} className="bg-[#992288] text-xs p-2 rounded-3xl w-full max-w-[6rem] md:w-72">
            See more
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
