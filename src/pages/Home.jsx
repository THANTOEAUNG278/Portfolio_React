import AnimatedBox from "../component/AnimatedBox";
import CurrentWeather from "../component/CurrentWeather";
import CustomButton from "../component/CustomButton";
import TypedTitle from "../component/TypedTitle";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "../component/Footer";

const Home = () => {
  const socialIcons = [
    { icon: FaTiktok, delay: 0 },
    { icon: FaTelegramPlane, delay: 200 },
    { icon: FaInstagram, delay: 400 },
    { icon: FaFacebookF, delay: 600 },
  ];

  return (
    <>
      <div className="pt-25 px-6 md:px-20 lg:px-32 flex flex-col lg:flex-row items-center justify-between gap-10 font-edu">
        <div className="space-y-4 text-center lg:text-left">
          <AnimatedBox direction="slide-left">
            <p className="font-bold text-xl md:text-2xl">Hello, It's me</p>
          </AnimatedBox>
          <AnimatedBox direction="slide-top">
            <h3 className="font-bold text-2xl md:text-3xl">THAN TOE AUNG</h3>
          </AnimatedBox>
          <AnimatedBox direction="slide-right">
            <p className="font-bold text-lg md:text-xl">
              And I'm a <TypedTitle />
            </p>
          </AnimatedBox>
          <AnimatedBox direction="slide-bottom">
            <p className="font-bold text-base md:text-lg">
              I'm a web Designer with extensive experience for over 1 year,
              <br />
              expertise is to create and website design, frontend, backend design,
              <br />
              And many more....
            </p>
          </AnimatedBox>

          
          <div className="flex justify-center lg:justify-start gap-3 text-xl">
            {socialIcons.map(({ icon: Icon, delay }, i) => (
              <div
                key={i}
                className="border-2 p-2 text-cyan-300 rounded-xl hover:text-blue-300 transition transform opacity-0 animate-slide-in-left"
                style={{ animationDelay: `${delay}ms` }}
              >
                <Icon />
              </div>
            ))}
          </div>

          <AnimatedBox direction="slide-bottom">
            <div className="flex justify-center lg:justify-start">
              <CustomButton
                text="more about me"
                bgColor="bg-cyan-400"
                hover="hover:bg-blue-300"
              />
            </div>
          </AnimatedBox>
        </div>

        <div className="text-xl  font-bold w-full lg:w-auto mr-25">
          <CurrentWeather />
        </div>
      </div>

      <div>
        <About />
      </div>
      <div>
        <Services/>
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <Project/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <Footer/>
      </div>

    </>
  );
};

export default Home;