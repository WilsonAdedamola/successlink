import avatar from "../assets/avatar.png";

const About = () => {
  return (
    <section className="relative">
      <div className="about-bg text-center w-full max-w-[2000px] h-[13rem] flex items-center flex-col justify-center px-5 md:h-[15rem]  lg:h-[25rem]">
        <h1 className="font-semibold text-4xl mb-2 md:text-7xl lg:mb-4">
          About us
        </h1>
        <p className="text-xs max-w-[90%] sm:text-base xl:max-w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="hide-scrollbar flex flex-col items-center overflow-y-scroll h-screen max-h-[500px]">
        <div className="bg-[#F6F6F6] flex items-center justify-center px-5 py-10 lg:py-16">
          <div className="bg-[#F6F6F6] text-center flex items-center justify center flex-col max-w-[90%] xl:max-w-[50%]">
            <p className="after text-lg text-black mb-4 lg:text-3xl lg:font-semibold">Company</p>
            <p className="text-sm text-black lg:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>

        <div className="bg-white flex items-center justify-center px-5 py-10 lg:py-16">
          <div className="text-black flex flex-col sm:flex-row items-center justify center text-center sm:text-start gap-4 max-w-[90%] xl:max-w-[50%]">
            <img src={avatar} alt="CEO image" className="lg:w-[100%]"/>
            <div className="flex flex-col items-center sm:items-start gap-3">
            <p className="after text-xl md:text-2xl lg:font-semibold">Our C.E.O</p>
            <p className="wrap text-sm text-black lg:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incidi dunt ut labore et dolore ma gna aliqua, Ut
              enim ad minim
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
// mt-[13rem] md:mt-[15rem] lg:mt-[25rem]
