import { useState } from "react";
import logo from "./assets/logo-text.png";

const Nave = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer rounded-lg p-2 mr-20 text-2xl text-gray-700 transition hover:bg-gray-100 md:hidden"
          >
            ☰
          </button>

          {/* Logo */}
          <img src={logo} alt="logo" className="w-28  sm:w-32" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-gray-700 md:flex">
          <li className="cursor-pointer font-semibold text-pink-600 transition hover:text-pink-500">
            Home
          </li>

          <li className="cursor-pointer transition hover:text-pink-500">
            Technologies
          </li>

          <li className="cursor-pointer transition hover:text-pink-500">
            Projects
          </li>

          <li className="cursor-pointer transition hover:text-pink-500">
            About
          </li>

          <li className="cursor-pointer transition hover:text-pink-500">
            Contact
          </li>
        </ul>

        {/* Sign In + Sign Up */}
        <div className="flex items-center gap-3">
          <button className="cursor-pointer font-medium transition hover:text-pink-500">
            Sign In
          </button>

          <button className="cursor-pointer rounded-full bg-pink-600 px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:scale-105 hover:bg-pink-700 hover:shadow-lg sm:px-5">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="container mx-auto mt-4 border-t border-gray-200 pt-4 md:hidden">
          <ul className="flex flex-col gap-4 text-gray-700">
            <li className="cursor-pointer font-semibold text-pink-600">Home</li>

            <li className="cursor-pointer hover:text-pink-500">Technologies</li>

            <li className="cursor-pointer hover:text-pink-500">Projects</li>

            <li className="cursor-pointer hover:text-pink-500">About</li>

            <li className="cursor-pointer hover:text-pink-500">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nave;
