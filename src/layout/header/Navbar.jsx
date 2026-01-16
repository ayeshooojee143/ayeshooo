import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* INITIAL NAVBAR */}
      <nav
        className={`w-full z-40 transition-opacity duration-300
        ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100 relative"}
        bg-transparent`}
      >
        <NavbarContent
          open={open}
          setOpen={setOpen}
          textColor="text-white"
          borderColor="border-white"
          logo="/assets/header-logo.png"
        />
      </nav>

      {/* STICKY NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out
        ${scrolled ? "top-0 opacity-100 bg-white shadow-md" : "-top-24 opacity-0"}`}
      >
        <NavbarContent
          open={open}
          setOpen={setOpen}
          textColor="text-blue-950"
          borderColor="border-blue-950"
          logo="/assets/logo.png"
        />
      </nav>
    </>
  );
};

const NavbarContent = ({ open, setOpen, textColor, borderColor, logo }) => (
  <div className="relative max-w-7xl mx-auto px-4 lg:px-12 py-4 flex justify-between items-center">

    {/* Logo */}
    <img src={logo} alt="Logo" className="w-30 h-30 object-contain" />

    {/* Desktop Menu */}
    <ul className={`hidden lg:flex gap-8 font-medium ${textColor}`}>
      <li className="hover:text-orange-500 cursor-pointer">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-orange-500 cursor-pointer">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="hover:text-orange-500 cursor-pointer">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="hover:text-orange-500 cursor-pointer">
        <NavLink to="/gallary">Gallery</NavLink>
      </li>
      <li className="hover:text-orange-500 cursor-pointer">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>

    {/* Right Icons */}
    <div className="flex items-center gap-4 relative z-50">
      {[FaSearch, FaUser].map((Icon, i) => (
        <button
          key={i}
          className={`border p-2 rounded transition ${textColor} ${borderColor}
          hover:bg-orange-600 hover:text-white`}
        >
          <Icon />
        </button>
      ))}

      <button
        className={`border p-2 rounded relative transition ${textColor} ${borderColor}
        hover:bg-orange-600 hover:text-white`}
      >
        <FaShoppingCart />
        <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full px-1">
          2
        </span>
      </button>

      {/* Mobile Menu Button */}
      <button
        className={`lg:hidden text-2xl border p-2 rounded transition ${textColor} ${borderColor} z-50`}
        onClick={() => setOpen(!open)}
      >
        {open ? <ImCross /> : <RiMenuLine />}
      </button>
    </div>

    {/* Mobile Menu */}
    <div
      className={`lg:hidden mx-auto absolute top-full right-10 bg-white w-11/12
      rounded-3xl px-4 py-4 font-medium shadow
      transition-all duration-300 ease-in-out z-40
      ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
    >
      <ul className="space-y-4 text-blue-950">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Services", path: "/services" },
          { name: "Gallery", path: "/gallary" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <li
            key={item.name}
            className="cursor-pointer hover:text-orange-600 transition"
            onClick={() => setOpen(false)}
          >
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default Navbar;
