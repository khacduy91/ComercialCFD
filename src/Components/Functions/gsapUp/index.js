import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function gsapUp(
  classNameAnimate,
  classNameTrigger,
  posItem,
  posView,
  togAction1,
  togAction2,
  togAction3,
  togAction4
) {
  //Gsap
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(`.${classNameAnimate}`, {
    scrollTrigger: {
      trigger: `.${classNameTrigger}`,
      start: `${posItem} ${posView}`,
      toggleActions: `${togAction1} ${togAction2} ${togAction3} ${togAction4}`,
    },
    y: 30,
    opacity: 1,
    duration: 0.8,
  });
}

export default gsapUp;
