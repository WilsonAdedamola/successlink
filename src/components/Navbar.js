import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-[#992288] py-6'>
      <div>
        <img src={logo} alt="Success Link" />
      </div>
      <div className="flex justify-between">
        <NavLink className="">
            Home
        </NavLink>
        <NavLink className="">
            About
        </NavLink>
        <NavLink className="">
            Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
