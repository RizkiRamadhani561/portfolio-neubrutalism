"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "@/lib/gsap-config";
import MagneticButton from "./MagneticButton";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  href?: string;
  index: number;
}

export default function ProjectCard({
  title,
  category,
  image,
  href = "#",
  index,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      // Image clip reveal
      gsap.from(imageRef.current, {
        clipPath: "inset(100% 0 0 0)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
        duration: 1.2,
        ease: "power4.out",
        delay: index * 0.15,
      });

      // Card 3D hover
      const card = cardRef.current!;
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
          rotateY: x * 8,
          rotateX: -y * 8,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="project-card flex-shrink-0"
      style={{
        width: 380,
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="neo-card overflow-hidden"
        style={{ background: index % 2 === 0 ? "var(--color-lime)" : "var(--color-gold-light)" }}
      >
        {/* Image */}
        <div
          ref={imageRef}
          className="relative overflow-hidden"
          style={{
            height: 290,
            clipPath: "inset(0% 0 0 0)",
            borderBottom: "3px solid var(--color-dark)",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="380px"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <span
            className="uppercase tracking-[0.2em] block mb-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "var(--color-dark)",
              fontWeight: 900,
            }}
          >
            {category}
          </span>
          <h3
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              color: "var(--color-dark)",
              fontWeight: 950,
            }}
          >
            {title}
          </h3>
          <MagneticButton
            className="inline-block rounded-md border-[3px] px-5 py-2.5 shadow-[4px_4px_0_var(--color-dark)] transition duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--color-dark)]"
            style={{
              borderColor: "var(--color-dark)",
              background: "var(--color-blush)",
              color: "var(--color-dark)",
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 900,
            }}
            ariaLabel={`View case study for ${title}`}
            strength={0.25}
            onClick={() => {
              window.location.href = href;
            }}
          >
            View Case Study
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
