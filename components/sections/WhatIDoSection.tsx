"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "@/lib/gsap-config";
import CurvedText from "@/components/ui/CurvedText";

const skills = [
  "UI/UX Design",
  "Brand Identity",
  "Web Design",
  "Product Design",
];

export default function WhatIDoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const lines = headingRef.current?.querySelectorAll(".line-inner");
      if (lines) {
        gsap.from(lines, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.08,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        });
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          clipPath: "inset(100% 0 0 0)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: { trigger: imageRef.current, start: "top 80%" },
        });
      }

      gsap.from(".skill-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skills-list", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative px-6 md:px-16 lg:px-24"
      style={{
        paddingTop: 120,
        paddingBottom: 120,
        background: "var(--color-cream)",
      }}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex justify-center">
          <div
            className="neo-card relative p-6"
            style={{ background: "var(--color-blush)" }}
          >
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <CurvedText
                text="PASSION · CREATIVITY · VISION · PASSION · CREATIVITY · VISION · "
                radius={170}
                fontSize={11}
                spinning
              />
            </div>
            <div
              ref={imageRef}
              className="relative overflow-hidden rounded-full"
              style={{
                width: 300,
                height: 300,
                clipPath: "inset(0% 0 0 0)",
                border: "3px solid var(--color-dark)",
              }}
            >
              <Image
                src="/images/skills/creative-work.svg"
                alt="Creative work placeholder"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div
            className="brutal-label mb-5 uppercase tracking-[0.16em]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
            }}
          >
            Skill & Arah Karya
          </div>
          <h2
            ref={headingRef}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 5vw, 72px)",
              color: "var(--color-dark)",
              fontWeight: 950,
              lineHeight: 1.1,
              marginBottom: 32,
              textTransform: "uppercase",
            }}
          >
            <span className="line-wrapper">
              <span className="line-inner">KEAHLIAN</span>
            </span>
            <br />
            <span className="line-wrapper">
              <span className="line-inner">SAYA</span>
            </span>
          </h2>

          <p
            className="mb-10 max-w-lg"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              lineHeight: 1.8,
              color: "var(--color-dark)",
              fontWeight: 700,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="skills-list grid gap-3 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <li
                key={skill}
                className="skill-item group p-4 transition duration-300"
                data-index={i}
                style={{
                  background: "var(--color-card)",
                }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="h-3 w-3 rounded-full border-2 border-dark"
                    style={{ background: "var(--color-warm-white)" }}
                  />
                  <span
                    className="uppercase tracking-[0.18em]"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 10,
                      color: "var(--color-dark)",
                      fontWeight: 900,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "var(--color-dark)",
                    fontWeight: 600,
                  }}
                >
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
