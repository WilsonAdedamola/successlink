import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { toTrue } from "../redux/contactSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
 const dispatch = useDispatch()
 const {value} = useSelector((state)=> state.contact)

  return (
    <nav className={ value ? "hidden justify-between items-center bg-[#992288] py-2 px-4 sm:py-3 lg:py-3 md:px-9 lg:px-20]" : "flex justify-between items-center bg-[#992288] py-2 px-4 sm:py-3 lg:py-3 md:px-9 lg:px-20]"}>
      <div>
        <img src={logo} alt="Success Link" className="w-24 sm:w-32 md:w-36" />
      </div>
      <div className="flex justify-between items-center gap-3 sm:gap-5 md:gap-16">
        <NavLink to="/" className="text-xs sm:text-sm md:text-base">Home</NavLink>
        <NavLink to="about" className="text-xs sm:text-sm md:text-base">About</NavLink>
        <Link onClick={()=>dispatch(toTrue())} className="inactive text-xs sm:text-sm md:text-base">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
