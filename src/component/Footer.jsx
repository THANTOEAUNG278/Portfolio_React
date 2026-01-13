import { useRef, useEffect } from "react";
import { FaGithub, FaFacebook, FaTelegram } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "./CustomButton";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Footer entrance animation
    gsap.from(footerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
      },
    });

    // Glowing pulse for button
    gsap.to(buttonRef.current, {
      boxShadow: "0 0 20px rgba(0,255,255,0.7)",
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    // Floating up and down animation
    gsap.to(buttonRef.current, {
      rotation: 10, // move up 8px
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);
//

  return (
    <footer
      ref={footerRef}
      className="flex flex-col items-center gap-6 relative overflow-hidden font-edu"
    >
     
      <p className="text-2xl font-bold text-white text-center">
        Ready to Collaborate?
      </p>

    
      <div ref={buttonRef}>
        <CustomButton
          text="CONTACT ME"
          bgColor="bg-cyan-400"
          hover="hover:bg-blue-300"
        />
      </div>

   
      <p className="text-gray-300 text-sm text-center">
        coded with by Than Toe Aung
      </p>


      <div className="flex gap-12">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 border-2 border-cyan-400 p-3 rounded-full hover:scale-110 transition-transform duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 border-2 border-cyan-400 p-3 rounded-full hover:scale-110 transition-transform duration-300"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 border-2 border-cyan-400 p-3 rounded-full hover:scale-110 transition-transform duration-300"
        >
          <FaTelegram size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
