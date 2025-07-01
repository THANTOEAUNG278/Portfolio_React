import { NavLink } from "react-router-dom";
import AnimatedBox from "./AnimatedBox";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-28 bg-slate-400 h-14 fixed w-full z-10 "
      
    >
      <div>
        <Logo />
      </div>
      <div className="flex gap-2 font-bold text-xl text-gray-100 font-edu">
        <AnimatedBox direction="slide-top" className="hover:scale-90 transition-transform duration-200">
          <NavLink to="/">Home</NavLink>
        </AnimatedBox>
        <AnimatedBox direction="slide-left" className="hover:scale-90 transition-transform duration-200">
          <NavLink  to="about">About</NavLink>
        </AnimatedBox>
        <AnimatedBox direction="slide-right" className="hover:scale-90 transition-transform duration-200">
          <NavLink  to="services">Services</NavLink>
        </AnimatedBox>
        <AnimatedBox direction="slide-left" className="hover:scale-90 transition-transform duration-200">
          <NavLink  to="skills">Skills</NavLink>
        </AnimatedBox>
        <AnimatedBox direction="slide-right" className="hover:scale-90 transition-transform duration-200">
          <NavLink  to="project">Project</NavLink>
        </AnimatedBox>
        <AnimatedBox direction="slide-top" className="hover:scale-90 transition-transform duration-200">
          <NavLink  to="contact">Contact</NavLink>
        </AnimatedBox>
      </div>
    </div>
  );
};

export default NavBar;