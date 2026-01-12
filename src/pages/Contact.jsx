import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapContainer } from "../hooks/useGsapContainer";

import EarthCanvas from "../component/Earth";
import StarsBackGround from "./StarBackGround";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);

  const container = useGsapContainer((gsap, el) => {
    gsap.fromTo(
      el.querySelectorAll(".fade-item"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  return (
    <>
    <section
      ref={container}
      className=" relative px-6 md:px-16 lg:px-32 py-24 text-white font-edu"
    >
     <div className="absolute inset-0 -z-10">
        <StarsBackGround/>
      </div>
     
      <h2 className="text-3xl font-bold text-center mb-16 fade-item">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="fade-item">
          <form
            ref={formRef}
            className="bg-gray-900 rounded-2xl p-8 space-y-6 shadow-xl"
          >
            <div>
              <label className="block text-sm mb-2">Your Name</label>
              <input
                type="text"
                placeholder=" Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800
                outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Your Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-800
                outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-800
                outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-cyan-400 text-black
              font-semibold hover:bg-cyan-300 transition"
            >
              Send Message 🚀
            </button>
          </form>
        </div>

        <div className="fade-item h-[350px] md:h-[450px]">
          <EarthCanvas />
        </div>
      </div>
    </section>

    </>
  );
  
};


export default Contact;
