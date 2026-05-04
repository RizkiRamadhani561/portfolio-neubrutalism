"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "@/lib/gsap-config";

interface MagneticOptions {
  strength?: number;
  ease?: string;
  duration?: number;
}

export function useMagneticEffect<T extends HTMLElement>(
  options: MagneticOptions = {}
) {
  const ref = useRef<T>(null);
  const { strength = 0.35, ease = "power2.out", duration = 0.3 } = options;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(ref.current, {
        x: x * strength,
        y: y * strength,
        duration,
        ease,
      });
    },
    [strength, ease, duration]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return ref;
}
