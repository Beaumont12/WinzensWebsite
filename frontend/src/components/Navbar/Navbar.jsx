import React, { useState } from "react";
import Logo from "../../assets/website/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import the FaBars component from react-icons/fa

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-teal-950 text-white">
      <div className="container bg-teal-950">
        <div className="flex justify-between items-center gap-4 mr-16">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex justify-center item-center gap-3 tracking-wider sans">
              <img src={Logo} alt="Logo" className="w-20 py-3 ml-14" />
            </Link>
          </div>
          <div className="hidden sm:flex justify-between gap-4">
            <ul className="flex items-center gap-4">
              <li className="inline-block text-xl px-4 text-white relative">
                <Link to={"/"} className="nav-link">Home</Link>
              </li>
              <li className="inline-block text-xl px-4 text-white relative">
                <Link to={"/location"} className="nav-link">Location</Link>
              </li>
              <li className="inline-block text-xl px-4 text-white relative">
                <Link to={"/Faqs"} className="nav-link">FAQs</Link>
              </li>
              <li className="inline-block text-xl px-4 text-white relative">
                <Link to={"/contact"} className="nav-link">Contact</Link>
              </li>
              <li className="inline-block text-xl px-4 text-white relative">
                <Link to={"/products"} className="nav-link">Menu</Link>
              </li>
            </ul>
          </div>
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu} className="text-xl text-white focus:outline-none">
              <FaBars /> {/* Use the FaBars icon for the menu */}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-teal-950 sm:hidden">
          <ul className="flex flex-col items-center gap-4">
            <li className="text-xl text-white py-2">
              <Link to={"/"} className="nav-link">Home</Link>
            </li>
            <li className="text-xl text-white py-2">
              <Link to={"/location"} className="nav-link">Location</Link>
            </li>
            <li className="text-xl text-white py-2">
              <Link to={"/Faqs"} className="nav-link">FAQs</Link>
            </li>
            <li className="text-xl text-white py-2">
              <Link to={"/contact"} className="nav-link">Contact</Link>
            </li>
            <li className="text-xl text-white py-2">
              <Link to={"/products"} className="nav-link">Menu</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
