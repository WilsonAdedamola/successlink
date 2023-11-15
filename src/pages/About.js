import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import logo from "../assets/logo.png";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="relative">
      <div className="about-bg text-center w-full max-w-[2000px] h-[13rem] flex items-center flex-col justify-center px-5 md:h-[15rem]  lg:h-[25rem]">
        <h1 className="font-semibold text-4xl mb-2 md:text-7xl lg:mb-4">
          About us
        </h1>
        <p className="text-xs max-w-[90%] sm:text-base md:max-w-[70%] xl:max-w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="hide-scrollbar flex flex-col items-center overflow-y-scroll h-screen max-h-[500px]">
        <div className="bg-[#F6F6F6] flex items-center justify-center px-5 py-10 lg:py-16">
          <div className="bg-[#F6F6F6] text-center flex items-center justify center flex-col max-w-[90%] md:max-w-[70%] xl:max-w-[50%]">
            <p className="after text-lg text-black mb-4 lg:text-3xl lg:font-semibold">
              Company
            </p>
            <p className="text-sm text-black lg:text-2xl xl:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>

        <div className="bg-white flex items-center justify-center px-5 py-10 lg:py-16">
          <div className="text-black flex flex-col sm:flex-row items-center justify center text-center sm:text-start gap-4 max-w-[90%] md:max-w-[70%] xl:max-w-[50%]">
            <img src={avatar} alt="CEO image" className="lg:w-[100%]" />
            <div className="flex flex-col items-center sm:items-start gap-3">
              <p className="after text-xl md:text-2xl lg:font-semibold">
                Our C.E.O
              </p>
              <p className="wrap text-sm text-black lg:text-2xl xl:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incidi dunt ut labore et dolore ma gna aliqua,
                Ut5 enim ad minim
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#992288] w-full flex items-center justify-center px-5 py-10 lg:py-16">
          <div className="flex flex-col items-center justify center text-center gap-6 max-w-[90%] md:max-w-[70%] xl:max-w-[50%]">
            <p className="after text-xl md:text-4xl lg:font-semibold">
              Our Mission & Vision
            </p>
            <p className="text-sm lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut
              enim ad minim veniam.
            </p>
            <p className="md:text-3xl">Stay Connected with the World!</p>
          </div>
        </div>

        <div className="bg-white w-full flex items-center justify-center px-5 py-10 lg:py-16">
          <div className="flex flex-col items-center justify center text-center text-black gap-6 max-w-[90%] md:max-w-[70%] xl:max-w-[50%]">
            <p className="after text-xl md:text-4xl lg:font-semibold">
              Contact
            </p>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut
              enim ad minim veniam.
            </p>
            <button
              onClick={navigate("contact")}
              className="border outline-none py-3 px-10"
            >
              Reach Us
            </button>
          </div>
        </div>

        <div className="bg-black w-full flex items-center justify-center px-5 py-10 lg:py-16">
          <div className="flex flex-col items-center justify center text-center gap-2 max-w-[90%] md:max-w-[70%] xl:max-w-[50%]">
            <img src={logo} alt="Success Link" className="w-24 md:w-32" />
            <p className="mb-2">Company Name, Inc</p>
            <p className="text-sm">Company Address comes here, Canada, US</p>
            <p className="text-sm">+81 - 080- 123-1212</p>
            <p className="text-xs font-light mt-3 md:text-sm">
              All rights reserved 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
