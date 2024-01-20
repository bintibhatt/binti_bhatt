import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const url = window.location.href;
  const params = url.split("/").slice(3).join("/");
  const pathname = "/" + params;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href) => pathname === href;

  return (
    <nav className="flex flex-col md:flex-row justify-between bg-gray-800 text-white py-4 px-6 md:flex md:items-center rounded-t-3xl">
      <div className="md:hidden">
        <button
          className="text-gray-300 hover:text-gray-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          &#9776;
        </button>
      </div>

      <div
        className={`md:flex space-x-8 items-center ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex md:space-x-8 md:items-center flex-col md:flex-row p-3">
          <li className={`hover:text-gray-300`}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className={
              isActive("/about")
                ? `text-blue-400 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <NavLink to="/about">About</NavLink>
          </li>
          <li
            className={
              isActive("/about/projects")
                ? `text-blue-400 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <NavLink to="/about/projects">Projects</NavLink>
          </li>
          <li
            className={
              isActive("/about/achievements")
                ? `text-blue-400 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <NavLink to="/about/achievements">Achievements</NavLink>
          </li>
          <li
            className={
              isActive("/about/experience")
                ? `text-blue-400 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <NavLink to="/about/experience">Learning</NavLink>
          </li>
          <li
            className={
              isActive("/about/contact")
                ? `text-blue-400 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <NavLink to="/about/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
