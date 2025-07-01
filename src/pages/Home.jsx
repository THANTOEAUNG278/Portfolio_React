import AnimatedBox from "../component/AnimatedBox";
import CurrentWeather from "../component/CurrentWeather";
import CustomButton from "../component/CustomButton";
import TypedTitle from "../component/TypedTitle";
import { FaFacebookF,FaInstagram,FaTelegramPlane,FaTiktok} from "react-icons/fa";
const Home =()=>{
  return(
    <div className="py-20 flex justify-between items-center px-32 font-edu">
     
      <div className="py-5 space-y-4">
         <AnimatedBox direction="slide-left">
            <p className="font-bold text-2xl">Hello, It's me</p>
        </AnimatedBox>
        <AnimatedBox direction="slide-top">
          <h3 className="font-bold text-3xl ">THAN TOE AUNG</h3>
        </AnimatedBox>
        <AnimatedBox direction="slide-right">
          <p className="font-bold text-xl ">And I'm a <TypedTitle/> </p>
        </AnimatedBox>
        <AnimatedBox direction="slide-bottom">
          <p className="font-bold text-lg">I'm a web Designer with extensive experience for over 1years,
            <br />expertise is to create and website design, frontend, backend design,<br />
            And many more....
          </p>
        </AnimatedBox>
        <div className="flex bo gap-2 text-xl">
          <div className="border-2 text-cyan-300 rounded-xl hover:text-blue-300">
          <FaFacebookF/>
          </div>
          <div className="border-2 text-cyan-300 rounded-xl hover:text-blue-300">
            <FaInstagram/>
          </div>
          <div className="border-2 text-cyan-300 rounded-xl hover:text-blue-300">
            <FaTelegramPlane/>
          </div>
          <div className="border-2 text-cyan-300 rounded-xl hover:text-blue-300">
            <FaTiktok/>
          </div>
        </div >
        <CustomButton text="more about me" bgColor="bg-cyan-400" hover="hover:bg-blue-300"/>
      </div>
      <div className="text-xl font-bold mx-14">
        <CurrentWeather/>
      </div>
    </div>
  )
}
export default Home;

        // <AnimatedBox direction="slide-top" className="hover:scale-90 transition-transform duration-200">
        //   <NavLink to="/">Home</NavLink>
        // </AnimatedBox>

        // <AnimatedBox direction="slide-top"></AnimatedBox>