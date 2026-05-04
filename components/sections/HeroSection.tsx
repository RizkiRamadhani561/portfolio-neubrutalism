"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "@/lib/gsap-config";
import CurvedText from "@/components/ui/CurvedText";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const polaroidRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.8 });

      // Badge fade in
      tl.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Name reveal — split by lines manually
      const nameLines = nameRef.current?.querySelectorAll(".name-line");
      if (nameLines) {
        tl.from(
          nameLines,
          {
            yPercent: 120,
            opacity: 0,
            stagger: 0.08,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.4"
        );
      }

      // Subtitle
      tl.from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Polaroid slide in
      tl.from(
        polaroidRef.current,
        {
          x: -120,
          opacity: 0,
          rotation: -15,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Scroll indicator
      tl.from(
        scrollRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Parallax on orbs
      gsap.utils.toArray<HTMLElement>(".hero-orb").forEach((orb, i) => {
        gsap.to(orb, {
          yPercent: -20 - i * 10,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
      style={{
        background:
          "linear-gradient(135deg, var(--color-cream) 0%, var(--color-gold-light) 45%, var(--color-blush) 100%)",
      }}
    >
      {/* Decorative brutal shapes */}
      <div
        className="hero-orb absolute right-[-28px] top-24 hidden h-36 w-36 rotate-12 border-[3px] border-dark bg-lime shadow-[12px_12px_0_var(--color-dark)] lg:block"
        aria-hidden="true"
      />
      <div
        className="hero-orb absolute left-[8%] top-[18%] hidden h-24 w-24 -rotate-12 border-[3px] border-dark bg-rose shadow-[10px_10px_0_var(--color-dark)] md:block"
        aria-hidden="true"
      />
      <div
        className="hero-orb absolute bottom-24 right-[18%] hidden h-28 w-44 rotate-6 border-[3px] border-dark bg-blue shadow-[10px_10px_0_var(--color-dark)] lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute left-6 top-28 h-12 w-40 -rotate-6 border-[3px] border-dark bg-white shadow-[8px_8px_0_var(--color-dark)] md:left-16"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-dark) 0 8px, transparent 8px 16px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-6 h-24 w-24 border-[3px] border-dark bg-purple shadow-[8px_8px_0_var(--color-dark)] md:right-20"
        style={{
          borderRadius: "999px",
        }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="brutal-label mx-auto mb-8 uppercase tracking-[0.18em]"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
          }}
        >
          Desainer Kreatif &amp; Visioner
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(64px, 12vw, 156px)",
            lineHeight: 0.86,
            color: "var(--color-dark)",
            fontWeight: 950,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            textShadow: "8px 8px 0 var(--color-warm-white)",
          }}
        >
          <span className="name-line block overflow-hidden">
            <span className="name-line inline-block">Diniyatun</span>
          </span>
          <span className="name-line block overflow-hidden">
            <span className="name-line inline-block" style={{ fontWeight: 950 }}>
              Islamia
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-6 uppercase tracking-[0.2em]"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "var(--color-dark)",
            fontWeight: 900,
          }}
        >
          Lorem ipsum dolor sit amet
        </p>
      </div>

      {/* Polaroid Photo — absolute left */}
      <div
        ref={polaroidRef}
        className="absolute bottom-[5%] left-[5%] md:bottom-[10%] md:left-[5%] z-10"
        style={{
          transform: "rotate(-3deg)",
        }}
      >
        <div
          className="h-[180px] w-[140px] overflow-hidden border-[3px] border-dark shadow-[12px_12px_0_var(--color-dark)] md:h-[240px] md:w-[180px]"
          style={{
            background: "white",
            padding: 8,
            borderRadius: 6,
          }}
        >
          <div className="relative h-full w-full overflow-hidden border-2 border-dark bg-gray-200" style={{ borderRadius: 4 }}>
            <Image
              src="/images/hero/hero-portrait.svg"
              alt="Portrait placeholder"
              width={180}
              height={240}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Curved Text Circle — absolute right */}
      <div className="absolute bottom-[15%] right-[8%] z-10 hidden lg:block">
        <CurvedText
          text="PASSION · CREATIVITY · VISION · PASSION · CREATIVITY · VISION · "
          radius={80}
          fontSize={10}
          spinning
        />
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="uppercase tracking-[0.2em]"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "var(--color-dark)",
            fontWeight: 900,
          }}
        >
          Scroll ke Bawah
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          className="animate-bounce-arrow"
          aria-hidden="true"
        >
          <path
            d="M8 0v20M1 14l7 7 7-7"
            stroke="var(--color-dark)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
