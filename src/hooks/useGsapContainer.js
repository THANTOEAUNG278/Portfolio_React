import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useGsapContainer = (animation) => {
  const container = useRef(null);

  useGSAP(() => {
    animation(gsap, container.current);
  }, { scope: container });

  return container;
};
