import { useGsapContainer } from "../hooks/useGsapContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SiJsonwebtokens, SiHomeadvisor } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { ImStarFull } from "react-icons/im";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const container = useGsapContainer((gsap, el) => {
    const cards = el.querySelectorAll(".card");
    const icon1 = el.querySelector(".icon1");
    const icon2 = el.querySelector(".icon2");
    const icon3 = el.querySelector(".icon3");
    const icon4 = el.querySelector(".icon4");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const rotate = gsap.to(icon1, {
      rotation: 360,
      color: "cyan",
      repeat: -1,
      duration: 4,
      ease: "none",
    });
    icon1.addEventListener("mouseenter", () => rotate.pause());
    icon1.addEventListener("mouseleave", () => rotate.resume());


    const bounce = gsap.to(icon2, {
      y: -15,
      color: "#ff70a6",
      repeat: -1,
      duration: 0.8,
      yoyo: true,
    });
    icon2.addEventListener("mouseenter", () => bounce.pause());
    icon2.addEventListener("mouseleave", () => bounce.resume());

    const sparkle = gsap.to(icon3, {
      rotation: 360,
      scale: 1.5,
      color: "#00ff66",
      repeat: -1,
      duration: 1.2,
      yoyo: true,
      ease: "power1.inOut",
    });
    icon3.addEventListener("mouseenter", () => sparkle.pause());
    icon3.addEventListener("mouseleave", () => sparkle.resume());

    const wiggle = gsap.to(icon4, {
      rotation: 10,
      color: "#c084fc",
      repeat: -1,
      duration: 0.6,
      yoyo: true,
    });
    icon4.addEventListener("mouseenter", () => wiggle.pause());
    icon4.addEventListener("mouseleave", () => wiggle.resume());
  });

  return (
    <div
      ref={container}
      className="pt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 font-edu"
    >
      <Card
        icon={<SiJsonwebtokens />}
        title="Web Developer"
        iconClass="icon1"
        gradient="from-cyan-400 to-blue-500"
      />

      <Card
        icon={<TbBrandReact />}
        title="React Developer"
        iconClass="icon2"
        gradient="from-pink-400 to-red-500"
      />

      <Card
        icon={<ImStarFull />}
        title="FullStack Developer"
        iconClass="icon3"
        gradient="from-green-400 to-emerald-500"
      />

      <Card
        icon={<SiHomeadvisor />}
        title="Content Creator"
        iconClass="icon4"
        gradient="from-purple-400 to-indigo-500"
      />
    </div>
  );
};

export default Cards;

const Card = ({ icon, title, iconClass, gradient }) => {
  return (
    <div
      className={`card group h-44 rounded-2xl bg-gradient-to-br ${gradient}
      p-[2px] shadow-xl transition duration-300
      hover:-translate-y-2 hover:shadow-2xl hover:scale-105`}
    >
      <div className="h-full bg-gray-900 rounded-2xl flex flex-col items-center justify-center text-white gap-3">
        <div className={`${iconClass} w-10 h-10 flex items-center justify-center text-4xl`}>
          {icon}
        </div>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
};
