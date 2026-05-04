"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "@/lib/gsap-config";
import CurvedText from "@/components/ui/CurvedText";

export default function MyStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const parasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const headingLines = headingRef.current?.querySelectorAll(".line-inner");
      if (headingLines) {
        gsap.from(headingLines, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.08,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        });
      }

      const paras = parasRef.current?.querySelectorAll("p");
      if (paras) {
        gsap.from(paras, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: parasRef.current, start: "top 80%" },
        });
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scale: 0.92,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: imageRef.current, start: "top 80%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative px-6 md:px-16 lg:px-24"
      style={{
        paddingTop: 120,
        paddingBottom: 120,
        background:
          "linear-gradient(180deg, var(--color-warm-white) 0%, var(--color-cream) 100%)",
      }}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div
            className="brutal-label mb-5 uppercase tracking-[0.16em]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
            }}
          >
            Cerita Personal
          </div>
          <h2
            ref={headingRef}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 6vw, 80px)",
              color: "var(--color-dark)",
              fontWeight: 950,
              lineHeight: 1.1,
              marginBottom: 40,
              textTransform: "uppercase",
            }}
          >
            <span className="line-wrapper">
              <span className="line-inner">CERITA</span>
            </span>
            <br />
            <span className="line-wrapper">
              <span className="line-inner" style={{ fontWeight: 950 }}>
                SAYA
              </span>
            </span>
          </h2>

          <div
            ref={parasRef}
            className="neo-card space-y-6 p-6 md:p-8"
            style={{
              background: "var(--color-warm-white)",
            }}
          >
            {[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            ].map((text) => (
              <p
                key={text}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "var(--color-dark)",
                  fontWeight: 700,
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:col-span-2">
          <div
            ref={imageRef}
            className="neo-card relative p-6"
            style={{
              background: "var(--color-gold-light)",
            }}
          >
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <CurvedText
                text="PASSION · CREATIVITY · VISION · PASSION · CREATIVITY · VISION · "
                radius={165}
                fontSize={11}
                spinning
              />
            </div>

            <div
              className="relative overflow-hidden rounded-full"
              style={{
                width: 280,
                height: 280,
                border: "3px solid var(--color-dark)",
              }}
            >
              <Image
                src="/images/about/story-portrait.svg"
                alt="Portrait placeholder"
                width={280}
                height={280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
