import { NavLink } from "react-router-dom";
import AnimatedBox from "./AnimatedBox";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-24 bg-slate-400 h-14 fixed w-full"
      
    >
      <div>
        <Logo />
      </div>
      <div className="flex gap-4 font-bold text-xl text-gray-100">
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