import ThreeDLaptopOneFile from "../3D/ThreeDLaptopOneFile";
import AnimatedBox from "../component/AnimatedBox";

const Project = () => {
  return (
    <div className="py-20">
      <AnimatedBox direction="slide-right">
        <div className="flex items-center justify-center underline">
          <p className="text-3xl font-bold font-edu">
            My <span className="text-cyan-400">Project</span>
          </p>
        </div>
      </AnimatedBox>

      <div className="mt-12">
        <ThreeDLaptopOneFile />
      </div>
    </div>
  );
};

export default Project;
