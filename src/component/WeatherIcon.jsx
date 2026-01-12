import { useEffect, useRef } from "react";
import gsap from "gsap";

const WeatherIcon = ({ icon, isNight }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.to(ref.current, {
      rotation: 360,
      repeat: -1,
      duration: 25,
      ease: "none",
    });

    if (isNight) {
      gsap.to(ref.current, {
        scale: 1.15,
        repeat: -1,
        yoyo: true,
        duration: 3,
      });
    }
  }, [isNight]);

  return (
    <img
      ref={ref}
      src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
      className="w-32 h-32 mx-auto drop-shadow-xl"
    />
  );
};

export default WeatherIcon;
