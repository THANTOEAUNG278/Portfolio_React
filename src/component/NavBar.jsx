import { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedBox from "./AnimatedBox";
import Logo from "./Logo";
import { HiMenu, HiX } from "react-icons/hi";
import { FaReact,FaCloudShowersHeavy,FaCloudversify,FaRegSnowflake } from "react-icons/fa";
import { TiWeatherPartlySunny,TiWeatherWindyCloudy,TiWeatherSunny, TiWeatherNight  } from "react-icons/ti";
import { BsCloudRain,BsCloudSun,BsCloudSnowFill } from "react-icons/bs";
import { WiDayCloudyGusts,WiDayCloudyWindy,WiNightAltCloudyWindy, WiNightAltCloudyGusts } from "react-icons/wi";
import { LuCloudMoonRain } from "react-icons/lu";
import { FaCloudBolt } from "react-icons/fa6";
import { MdSunnySnowing } from "react-icons/md";
import { BsCloudSleet } from "react-icons/bs";
import { GiSunflower, GiUbisoftSun } from "react-icons/gi";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", direction: "slide-top" },
    { to: "about", label: "About", direction: "slide-left" },
    { to: "services", label: "Services", direction: "slide-right" },
    { to: "skills", label: "Skills", direction: "slide-left" },
    { to: "project", label: "Project", direction: "slide-right" },
    { to: "contact", label: "Contact", direction: "slide-top" },
  ];

  return (
    <div className="relative">
      <div className="fixed w-full z-10 bg-slate-400 h-14 px-6 md:px-28 flex items-center justify-between overflow-hidden">

        <div className="absolute right-4 top-1/2 text-indigo-700 -translate-y-1/2 opacity-20 text-6xl pointer-events-none select-none z-0">
        <div className="flex gap-2 wrap-anywhere">
           <FaCloudShowersHeavy /> 
          <TiWeatherPartlySunny/>
          <TiWeatherWindyCloudy /> 
          <BsCloudRain /> 
          <BsCloudSun /> 
          < FaCloudBolt /> 
          <FaCloudversify />
          <WiDayCloudyGusts />
          <FaRegSnowflake />
          <MdSunnySnowing />
          <WiDayCloudyWindy />
          <TiWeatherSunny />
          < TiWeatherNight  />
          <BsCloudSnowFill />
          <WiNightAltCloudyWindy />
          <LuCloudMoonRain />
          < WiNightAltCloudyGusts />
          <BsCloudSleet />
          < GiUbisoftSun />
          <GiSunflower />
        </div>
        </div>

        <div className="relative z-10 flex items-center justify-between w-full">
          <Logo />


          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

 
          <div className="hidden md:flex gap-4 font-bold text-xl text-gray-100 font-edu">
            {navItems.map((item, index) => (
              <AnimatedBox
                key={index}
                direction={item.direction}
                className="hover:scale-90 transition-transform duration-200"
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
        </div>
      </div>

  
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-slate-500 flex flex-col items-center gap-4 py-4 md:hidden font-bold text-lg text-white font-edu z-20">
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
    </div>
  );
};

export default NavBar;