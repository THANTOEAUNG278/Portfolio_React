import AnimatedBox from "../component/AnimatedBox";
import CustomButton from "../component/CustomButton";

const About = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32">
      <div className="pt-20">
        <AnimatedBox direction="slide-right">
          <div className="flex items-center justify-center underline">
            <p className="text-3xl font-bold font-edu">
              About <span className="text-cyan-400">Me</span>
            </p>
          </div>
        </AnimatedBox>
      </div>

      {/* ---- Profile ---- */}
      <div className="pt-16 flex flex-col lg:flex-row items-center justify-between gap-10 font-edu">
        <AnimatedBox direction="slide-left">
          <div className="w-48 h-48 bg-gray-300 rounded-xl flex items-center justify-center">
            <p>photo</p>
          </div>
        </AnimatedBox>

        <div className="max-w-xl">
          <AnimatedBox direction="slide-right">
            <h2 className="text-3xl font-semibold">Full Stack Developer</h2>
          </AnimatedBox>

          <AnimatedBox direction="slide-bottom">
            <p className="pt-4 leading-relaxed">
              Hello! I'm THAN TOE AUNG, a dedicated student at Shobi University
              with a strong interest in system engineering, web application
              engineering, and fullstack engineering.
            </p>

            <div className="flex justify-center lg:justify-start pt-6">
              <CustomButton
                text="more about me"
                bgColor="bg-cyan-400"
                hover="hover:bg-blue-300"
              />
            </div>
          </AnimatedBox>
        </div>
      </div>
    </div>
  );
};

export default About;

