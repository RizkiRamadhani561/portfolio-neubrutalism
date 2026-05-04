import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register free GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Global GSAP defaults
gsap.defaults({
  ease: "power3.out",
  duration: 1,
});

// ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
});

export { ScrollTrigger };
export default gsap;
