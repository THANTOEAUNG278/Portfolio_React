import AnimatedBox from "./AnimatedBox";

const Logo = () =>{
  return(
    <AnimatedBox direction="slide-left">
      <div className="text-xl font-bold">
        My Logo
      </div>
    </AnimatedBox>
  )
}
export default Logo;