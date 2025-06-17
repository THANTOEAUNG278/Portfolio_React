
import { NavLink } from "react-router-dom"
import Logo from "./Logo";
const NavBar = () =>{
  return(
    <div className="flex justify-between items-center px-24 bg-slate-500-400 h-14 fixed w-full">
      <div>
        <Logo/>
      </div>
      <div className="flex gap-4">
        <NavLink to={"/"} >Home</NavLink>
        <NavLink to={"about"} >About</NavLink>
        <NavLink to={"services"} >Services</NavLink>
        <NavLink to={"skills"} >Skills</NavLink>
        <NavLink to={"project"} >Project</NavLink>
        <NavLink to={"contact"} >Contact</NavLink>
      </div>
    </div>
  )
}
export default NavBar;