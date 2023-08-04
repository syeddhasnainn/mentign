"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-50%" },
  }
  return (
    <nav className="px-[2rem] pt-8 sm:px-[4rem]">
      <div className="flex justify-between items-center border-b pb-4">
        <div className="logo">
          <a className="font-spartan text-4xl text-with-spacing" href="/">
            mentign.
          </a>
        </div>
        <div className="hidden nav sm:flex sm:gap-8 sm:items-center sm:justify-center">
          <div>
            <a href="/">Work</a>
          </div>
          <div>
            <a href="/">Services</a>
          </div>
          <div>
            <a href="/">About</a>
          </div>
          <div>
            <a
              className="text-gray-700 text-center border border-gray-500 rounded-full justify-center m-0 py-3 px-5 font-manrope inline-block"
              href="/"
            >
            Get in Touch
              
            </a>
          </div>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            <svg
              className={`h-8 w-8 transition-transform transform ${isOpen ? 'rotate-90 -translate-y-1 translate-x-1' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}

        className="mobile-menu block absolute text-white z-10 text-[16px] w-full left-0 right-0">
          <div className="page-padding px-[1.75rem]">
            <div className="wrapper p-[1.5rem] bg-black">
              <div className="flex flex-col gap-8">
                <a className="" href="">
                  Work
                </a>
                <a href="">Services</a>
                <a href="">About</a>
                <a
                  className="rounded-full bg-white text-black text-center px-[1.25rem] py-[0.75rem]"
                  href=""
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
