import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About ",
      hasDropdown: true,
      dropdown: [
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
      ],
    },
    {
      name: "Events",
      hasDropdown: true,
      dropdown: [
        { label: "Cultural Events", path: "/cultural" },
        { label: "Corporate Events", path: "/tech-corporate" },
        { label: "Wedding", path: "/weddings" },
      ],
    },
    ...(isLoggedIn ? [{ name: "Dashboard", path: "/dashboard" }] : []),
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="fixed md:top-4 sm:w-[20%]  md:left-10 lg:left-1/2 lg:transform lg:-translate-x-1/2  z-50 w-[100%] md:w-[85%] bg-white/80 backdrop-blur-xl border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.1)] md:rounded-full px-6 py-3 flex items-center lg:justify-between mx-0 gap-50 md:gap-10">
      
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="/images/logo.png" className="h-9 w-auto  max-w-dvh" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) =>
          link.hasDropdown ? (
            <div key={link.name} className="relative group">
              <button className="flex items-center text-gray-800 font-semibold">
                {link.name}
                <ChevronDown
                  size={16}
                  className="ml-1 group-hover:rotate-180 duration-300"
                />
              </button>

              <div className="absolute left-0 top-full mt-3 w-56 bg-white/90 border rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all py-3">
                {link.dropdown.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm block transition-all
                       ${
                         isActive
                           ? "text-indigo-600 bg-indigo-50"
                           : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-100"
                       }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-semibold relative transition-all
                 ${
                   isActive
                     ? "text-indigo-600"
                     : "text-gray-800 hover:text-indigo-600"
                 }
                 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px]
                 ${
                   isActive
                     ? "after:bg-indigo-600"
                     : "after:bg-transparent hover:after:bg-indigo-600"
                 }`
              }
            >
              {link.name}
            </NavLink>
          )
        )}

        {/* Book Now */}
        {/* <Link
          to="/booking"
          className="px-5 py-2 rounded-full shadow 
                     bg-white/30 backdrop-blur-lg border border-gray-300 
                     text-gray-700 font-semibold hover:scale-105 transition"
        >
          Book Now
        </Link> */}

        {/* Login Button */}
        {!isLoggedIn && (
          <Link
            to="/login"
            className="px-5 py-2 rounded-full shadow 
                       bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold hover:scale-105 transition"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
  <div className="absolute top-[70px] left-0 w-[90%] bg-white/90 backdrop-blur-xl shadow-lg rounded-2xl py-6 flex flex-col items-center space-y-4 text-center overflow-hidden mx-4">
    {navLinks.map((link) =>
      link.hasDropdown ? (
        <details key={link.name} className="w-full text-center items-center">
          <summary className="cursor-pointer font-semibold text-gray-700 text-center">
            {link.name}
          </summary>

          <div className="mt-2 flex flex-col space-y-2 items-center text-center">
            {link.dropdown.map((item) => (
              <NavLink
                to={item.path}
                key={item.label}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-indigo-600 ${
                    isActive ? "text-indigo-600 underline" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </details>
      ) : (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `font-semibold transition-all ${
              isActive
                ? "text-indigo-600 underline"
                : "text-gray-700 hover:text-indigo-600"
            }`
          }
        >
          {link.name}
        </NavLink>
      )
    )}

    {!isLoggedIn && (
      <button
        onClick={() => {
          setIsOpen(false);
          navigate("/login");
        }}
        className="bg-indigo-600 text-white px-6 py-2 rounded-full"
      >
        Login
      </button>
    )}
  </div>
)}

      
    </nav>
  );
};

export default Navbar;
