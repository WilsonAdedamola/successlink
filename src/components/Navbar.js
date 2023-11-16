import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = (props) => {

  // const [showPackages, setShowPackages] = useState(false);


  const handleContactClick = () => {
    props.navigate("contact")
  }
  const handleHomeClick = () => {
    props.navigate("home")
  }
  const handleAboutClick = () => {
    props.navigate("about")
  }

  return (
    <nav className="flex justify-between items-center bg-[#992288] py-2 px-4 sm:py-3 lg:py-3 md:px-9 lg:px-20]">
      <div>
        <img src={logo} alt="Success Link" className="w-24 sm:w-32 md:w-36" />
      </div>
      <div className="flex justify-between items-center gap-3 sm:gap-5 md:gap-16">
        <NavLink to="/" onClick={handleHomeClick} className="text-xs sm:text-sm md:text-base">Home</NavLink>
        <NavLink to="about" onClick={handleAboutClick} className="text-xs sm:text-sm md:text-base">About</NavLink>
        <NavLink to="contact" onClick={handleContactClick} className="text-xs sm:text-sm md:text-base">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
