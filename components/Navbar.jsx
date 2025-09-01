"use client";

import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { assets } from "@/assets/assets";
import { FaArrowUp } from "react-icons/fa";

import Image from "next/image";
import { useTheme } from "@/context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="uppercase relative z-50">
      <nav
        className={`w-full fixed px-5 py-4 lg:px-8 xl:px-32 flex items-center justify-between z-50 duration-400 ${
          isScroll ? "bg-green/50 backdrop-blur-lg" : ""
        }`}
      >
        <a href="#top">
          <h1
            className={`cursor-pointer text-2xl font-extrabold select-none ${
              isScroll ? "text-white" : "text-green"
            }`}
          >
            Ham.
          </h1>
        </a>

        <ul
          className={`hidden font-poppins md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 duration-400 text-white ${
            isScroll ? "" : "bg-green shadow-sm"
          }`}
        >
          <li>
            <a href="#top" className={`${isScroll ? "a" : ""}`}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={`${isScroll ? "a" : ""}`}>
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className={`${isScroll ? "a" : ""}`}>
              My Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={`${isScroll ? "a" : ""}`}>
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex font-poppins items-center gap-4 ml-auto md:ml-0">
          <button className="p-2.5" onClick={toggleTheme}>
            <Image
              src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
              alt="theme toggle"
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className={`hidden text-white lg:flex items-center gap-3 px-10 py-2.5 rounded-full ml-4 transition-all duration-400 cursor-pointer ${
              isScroll ? "" : "bg-green"
            }`}
          >
            Contact <FaArrowUp size={18} className="transform rotate-30" />
          </a>

          <button onClick={() => setMenuOpen(true)} className="block md:hidden">
            <Image
              src={theme === "dark" ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6"
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed top-0 left-0 w-full h-full backdrop-blur-md bg-[var(--color-bg)]/20 z-40"
        />
      )}

      <ul
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 h-screen transition-all duration-400 z-50 bg-green/70 backdrop-blur-md text-[var(--text-gray)] ${
          menuOpen ? "right-0" : "-right-64"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5"
        >
          <IoMdClose size={35} className="cursor-pointer" />
        </button>

        <li>
          <a href="#top" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            My Work
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
