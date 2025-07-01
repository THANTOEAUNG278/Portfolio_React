import CurrentWeather from "../component/CurrentWeather";
import TypedTitle from "../component/TypedTitle";

const Home =()=>{
  return(
    <div className="py-20 flex justify-between items-center px-32 font-edu">
      <div className="py-5 space-y-4">
        <p className="font-bold text-xl">Hello, It's me</p>
        <h3 className="font-bold text-2xl ">THAN TOE AUNG</h3>
        <p className="font-bold text-xl ">And I'm a <TypedTitle/> </p>
        <p className="font-bold text-xl">I'm a web Designer with extensive experience for over 1years,
          <br />expertise is to create and website design, frontend, backend design,<br />
           And many more....
        </p>
      </div>
      <div className="text-xl font-bold mx-14">
        <CurrentWeather/>
      </div>
    </div>
  )
}
export default Home;