import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cards from "./Cards";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", percent: 90, years: "3 years experience" },
  { name: "CSS", percent: 85, years: "3 years experience" },
  { name: "JavaScript", percent: 80, years: "2.5 years experience" },
  { name: "React", percent: 75, years: "2 years experience" },
  { name: "GSAP", percent: 70, years: "1 year experience" },
  // { name: "PHP", percent: 65, years: "1 year experience" },
];

const CircleSkill = ({ name, percent, years }) => {
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState(false);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      { strokeDashoffset: circumference },
      {
        strokeDashoffset:
          circumference - (percent / 100) * circumference,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { innerText: 0 },
      {
        innerText: percent,
        duration: 1.5,
        ease: "power3.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [circumference, percent]);

  const handleEnter = () => {
    gsap.to(wrapperRef.current, {
      scale: 1.08,
      boxShadow: "0 0 30px rgba(34,211,238,0.7)",
      duration: 0.3,
    });

    gsap.to(textRef.current, {
      scale: 1.3,
      duration: 0.3,
    });
  };

  const handleLeave = () => {
    gsap.to(wrapperRef.current, {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.3,
    });

    gsap.to(textRef.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => setOpen(!open)}
      className="cursor-pointer flex flex-col items-center p-4 rounded-2xl transition"
    >
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="#374151"
            strokeWidth="8"
            fill="none"
          />
          <circle
            ref={circleRef}
            cx="56"
            cy="56"
            r={radius}
            stroke="url(#grad)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
          <span ref={textRef}>0</span>%
        </div>
      </div>

      <p className="mt-4 font-semibold">{name}</p>

      {open && (
        <p className="mt-2 text-sm text-cyan-400">
          {years}
        </p>
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <CircleSkill
            key={index}
            name={skill.name}
            percent={skill.percent}
            years={skill.years}
          />
        ))}
      </div>

      <p className="text-center mt-10 text-gray-400 text-sm">
        Hover to glow • Click for experience
      </p>
      <div className="px-25">
        <Cards/>
      </div>
    </section>
  );
};

export default Skills;
