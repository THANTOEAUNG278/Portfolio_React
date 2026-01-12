import { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedBox from "./AnimatedBox";
import Logo from "./Logo";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", direction: "slide-top" },
    { to: "/about", label: "About", direction: "slide-left" },
    { to: "/services", label: "Services", direction: "slide-right" },
    { to: "/skills", label: "Skills", direction: "slide-left" },
    { to: "/project", label: "Project", direction: "slide-right" },
    { to: "/contact", label: "Contact", direction: "slide-top" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="flex items-center justify-between h-14 px-6 md:px-28">
        <Logo />

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 font-bold text-lg font-edu">
          {navItems.map((item, index) => (
            <AnimatedBox
              key={index}
              direction={item.direction}
              className="hover:scale-95 transition-transform duration-200"
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "underline underline-offset-4 decoration-2 decoration-white"
                      : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </AnimatedBox>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

{isOpen && (
  <div className="md:hidden fixed top-0 right-0 h-90 w-40 bg-slate-800 flex flex-col items-start gap-6 px-6 py-10 font-bold text-lg text-white font-edu animate-slideIn rounded-3xl">
    {navItems.map((item, index) => (
      <NavLink
        key={index}
        to={item.to}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `hover:scale-95 transition-transform duration-200 ${
            isActive
              ? "underline underline-offset-4 decoration-2 decoration-white"
              : ""
          }`
        }
      >
        {item.label}
      </NavLink>
    ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
