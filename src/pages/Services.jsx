import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapContainer } from "../hooks/useGsapContainer";

import ServiceIcon3D from "../component/ServiceIcon3D";
import ServiceModal from "../component/ServiceModal";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    text: "Modern and scalable web applications using React and Vite.",
  },
  {
    title: "Frontend Animation",
    text: "Smooth animations using GSAP and scroll-based interactions.",
  },
  {
    title: "3D / Interactive",
    text: "Interactive 3D web experiences powered by Three.js.",
  },
  {
    title: "UI / UX Design",
    text: "Clean, modern, and user-focused interface design.",
  },
];

const Services = () => {
  const [modal, setModal] = useState(null);

  const container = useGsapContainer((gsap, el) => {
    gsap.fromTo(
      el.querySelectorAll(".service-card"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
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
    <section
      ref={container}
      className="px-6 md:px-16 lg:px-32 py-24 text-white font-edu"
    >
      <h2 className="text-3xl font-bold text-center mb-16">
        My <span className="text-cyan-400">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="service-card bg-gray-500 rounded-2xl p-6
              text-center cursor-pointer
              hover:-translate-y-2 hover:scale-105 transition"
            onClick={() => setModal(service)}
          >
            <ServiceIcon3D />
            <h3 className="mt-4 font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>

      <ServiceModal
        open={!!modal}
        onClose={() => setModal(null)}
        title={modal?.title}
        text={modal?.text}
      />
    </section>
  );
};

export default Services;
