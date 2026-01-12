import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
const Layout = () =>{
  return(
    <div>
      <div className="fixed relative">
        <NavBar/>
      </div>
      <div >
        <Outlet/>
      </div>
    </div>
  )
}
export default Layout;