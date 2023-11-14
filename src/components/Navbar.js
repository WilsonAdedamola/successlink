import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#992288] py-2 px-4 sm:py-3 lg:py-5 md:px-9 lg:px-20">
      <div>
        <img src={logo} alt="Success Link" className="w-24 sm:w-32 md:w-40" />
      </div>
      <div className="flex justify-between items-center gap-3 sm:gap-5 md:gap-16">
        <NavLink to="/" className="text-xs sm:text-sm md:text-base">Home</NavLink>
        <NavLink to="about" className="text-xs sm:text-sm md:text-base">About</NavLink>
        <NavLink to="contact" className="text-xs sm:text-sm md:text-base">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
