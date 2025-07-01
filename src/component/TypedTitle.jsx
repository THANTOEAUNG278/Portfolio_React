import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedTitle = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Student", "Frontend Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return <span ref={typedRef} className="text-cyan-400 font-bold text-xl"></span>;
};

export default TypedTitle;