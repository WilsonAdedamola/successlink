import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <section className="lg:absolue top-0 w-full">
      <p className="text-black">Contact</p>
      {/* <div className="w-full flex flex-col items-center justify-between h-auto lg:flex-row">
        <div className="relative bg-[#992288] flex flex-col 3xl:justify-center w-full pt-7 pb-20 px-4 h-auto">
          <div className="hidden lg:block">
          <Navbar navigate={navigate} />
          </div>
          <div className="lg:max-w-[80%] lg:ml-32 lg:mt-10">
            <p className="text-3xl md:text-5xl lg:text-7xl">Contact Us</p>
            <p className="text-sm mt-3 max-w-[18rem] sm:mt-5 md:text-xl md:max-w-[30rem]">
              Feel free to contact us any time. We will get back to you as soon
              as we can!
            </p>
            <form
              action=""
              className="flex flex-col items-start mt-10 gap-7 lg:gap-16 lg:mt-20 lg:max-w-md"
            >
              <input
                type="text"
                placeholder="Name"
                className="input-border w-full border-none bg-inherit outline-none px-2 pb-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="input-border w-full border-none bg-inherit outline-none px-2 pb-3"
              />
              <textarea
                type="text"
                placeholder="Message"
                className="input-border w-full border-none bg-inherit outline-none px-2"
              />
              <button className="bg-white outline-none text-[#992288] w-full py-3 mt-5" >
                SEND
              </button>
            </form>
          </div>
        </div>
        <div className="contact-bg flex items-center justify-center w-full h-[8rem] top-0 right-0 lg:h-screen lg:w-[25rem]">
          dwef
        </div>
      </div> */}
    </section>
  );
};

export default Contact;
