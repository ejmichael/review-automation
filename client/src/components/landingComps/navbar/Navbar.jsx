import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill, RiInstagramFill, RiLinkedinBoxFill, RiMenuLine } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <p className="text-indigo-600 text-2xl font-semibold flex items-center">
              <span className="text-xl">E</span>asy <span className="text-2xl">O</span>utreach
            </p>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center gap-3">
              <li className="font-medium hover:text-indigo-600 hover:underline decoration-double decoration-indigo-400">
                <Link to="/about-us">About</Link>
              </li>
              <li className="font-medium hover:text-indigo-600 hover:underline decoration-double decoration-indigo-400">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="font-medium hover:text-indigo-600 hover:underline decoration-double decoration-indigo-400">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
            <Link to="/contact-us">
              <button className=" w-full py-2 px-5 border border-indigo-800 rounded-3xl hover:text-white text-indigo-800 hover:bg-indigo-600">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoMdCloseCircle className="w-6 h-6 text-gray-800" /> : <RiMenuLine className="w-6 h-6 text-gray-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-2xl shadow-slate-300 bg-white">
          <ul className="flex flex-col items-center py-4 space-y-4 w-full px-2">
            <li className="w-[70%] font-medium hover:text-indigo-600 border-b border-indigo-400">
              <Link to="/about-us" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="w-[70%]  font-medium hover:text-indigo-600 border-b border-indigo-400">
              <Link to="/how-does-review-automation-work" onClick={() => setIsOpen(false)}>How it works</Link>
            </li>
            
            <li className="w-[70%] font-medium hover:text-indigo-600 border-b border-indigo-400">
              <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
            <li className="flex justify-between items-center align-center w-full px-2">
                <div className=" flex space-x-6 items-center align-center">
                    <a href="#" className="text-indigo-600 hover:text-indigo-800"><RiFacebookCircleFill className="w-[20px] h-[20px]" /></a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800"><RiInstagramFill className="w-[20px] h-[20px]" /></a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800"><RiLinkedinBoxFill className="w-[20px] h-[20px]" /></a>
                </div>
              <Link to="/contact-us" onClick={() => setIsOpen(false)}>
                <button className=" py-2 px-5 border border-indigo-800 rounded-3xl hover:text-white text-indigo-800 hover:bg-indigo-600">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
