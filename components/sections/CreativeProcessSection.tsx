"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap-config";
import ProcessStep from "@/components/ui/ProcessStep";
import { BookOpen, Droplets, Dumbbell, Coffee } from "lucide-react";

const steps = [
  { title: "Membaca Buku", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: <BookOpen size={24} /> },
  { title: "Diving", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: <Droplets size={24} /> },
  { title: "Olahraga", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.", icon: <Dumbbell size={24} /> },
  { title: "Kopi", description: "Duis aute irure dolor in reprehenderit in voluptate velit.", icon: <Coffee size={24} /> },
];

export default function CreativeProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Heading
      gsap.from(headingRef.current, {
        y: 60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      });
      // SVG path draw
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        pathRef.current.style.setProperty("--path-length", `${length}`);
        gsap.fromTo(pathRef.current, { strokeDashoffset: length }, {
          strokeDashoffset: 0, duration: 2.5, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
        });
      }
      // Nodes pop
      gsap.from(".process-node", {
        scale: 0, opacity: 0, stagger: 0.4, duration: 0.8, ease: "back.out(1.7)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 50%" },
      });
      // Step cards
      gsap.from(".process-step", {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".process-steps-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const nodePositions = [
    { cx: "12.5%", cy: "50%" },
    { cx: "37.5%", cy: "50%" },
    { cx: "62.5%", cy: "50%" },
    { cx: "87.5%", cy: "50%" },
  ];

  return (
    <section id="hobbies" ref={sectionRef} className="relative px-6 md:px-16" style={{ paddingTop: 100, paddingBottom: 100, background: "var(--color-cream)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 text-center">
          <div className="brutal-label mx-auto mb-5 uppercase tracking-[0.16em]" style={{ fontFamily: "var(--font-body)", fontSize: 12 }}>
            Aktivitas Favorit
          </div>
          <h2 ref={headingRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(42px, 5vw, 64px)", color: "var(--color-dark)", fontWeight: 950 }}>
            HOBI SAYA
          </h2>
        </div>
        {/* SVG Path */}
        <div className="relative mb-16 hidden md:block">
          <svg viewBox="0 0 1000 120" className="w-full" style={{ height: 120 }} preserveAspectRatio="none">
            <path ref={pathRef} d="M 0,60 Q 125,10 250,60 Q 375,110 500,60 Q 625,10 750,60 Q 875,110 1000,60" fill="none" stroke="var(--color-dark)" strokeWidth="5" className="process-path" />
            {nodePositions.map((pos, i) => (
              <circle key={i} className="process-node" cx={pos.cx} cy={pos.cy} r="13" fill="var(--color-gold)" stroke="var(--color-dark)" strokeWidth="4" />
            ))}
          </svg>
        </div>
        {/* Steps Grid */}
        <div className="process-steps-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <ProcessStep key={step.title} icon={step.icon} title={step.title} description={step.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
