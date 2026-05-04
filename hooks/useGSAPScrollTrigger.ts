"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap-config";
import { ScrollTrigger } from "@/lib/gsap-config";

interface ScrollTriggerOptions {
  trigger?: string | HTMLElement | null;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  toggleActions?: string;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

interface AnimationOptions {
  targets: string | HTMLElement | HTMLElement[];
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  scrollTrigger?: ScrollTriggerOptions;
}

export function useGSAPScrollTrigger(
  containerRef: React.RefObject<HTMLElement | null>,
  animations: AnimationOptions[],
  deps: unknown[] = []
) {
  const ctx = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    ctx.current = gsap.context(() => {
      animations.forEach((anim) => {
        const stConfig: ScrollTrigger.Vars = {
          trigger: anim.scrollTrigger?.trigger || containerRef.current,
          start: anim.scrollTrigger?.start || "top 80%",
          end: anim.scrollTrigger?.end || "bottom 20%",
          scrub: anim.scrollTrigger?.scrub || false,
          pin: anim.scrollTrigger?.pin || false,
          toggleActions: anim.scrollTrigger?.toggleActions || "play none none reverse",
        };

        if (anim.from) {
          gsap.from(anim.targets, {
            ...anim.from,
            scrollTrigger: stConfig,
          });
        } else if (anim.to) {
          gsap.to(anim.targets, {
            ...anim.to,
            scrollTrigger: stConfig,
          });
        }
      });
    }, containerRef);

    return () => {
      ctx.current?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, ...deps]);
}

export function useScrollTriggerRefresh() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
}
