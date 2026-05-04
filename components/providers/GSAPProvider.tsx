"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "@/lib/gsap-config";
import { ScrollTrigger } from "@/lib/gsap-config";

interface GSAPProviderProps {
  children: React.ReactNode;
}

function PortfolioIntro({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const duration = shouldReduceMotion ? 700 : 2300;
    const startedAt = performance.now();

    const frame = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const nextProgress = Math.min(Math.round((elapsed / duration) * 100), 100);

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        window.clearInterval(frame);
        window.setTimeout(onComplete, shouldReduceMotion ? 80 : 360);
      }
    }, 40);

    return () => window.clearInterval(frame);
  }, [onComplete, shouldReduceMotion]);

  const skeletonLines = ["w-9/12", "w-7/12", "w-10/12"];

  return (
    <motion.div
      key="portfolio-intro"
      className="fixed inset-0 z-[9997] flex items-center justify-center overflow-hidden px-6"
      style={{
        background:
          "linear-gradient(135deg, var(--color-cream) 0%, var(--color-gold-light) 48%, var(--color-blush) 100%)",
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-8%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      aria-live="polite"
      aria-label="Memuat portfolio"
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-dark), transparent)" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: "easeOut" }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid w-full max-w-[980px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <motion.div
            className="brutal-label mb-5 uppercase tracking-[0.16em]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            Portfolio Experience
          </motion.div>
          <motion.h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(54px, 9vw, 104px)",
              lineHeight: 0.92,
              color: "var(--color-dark)",
              fontWeight: 950,
              textTransform: "uppercase",
            }}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
          >
            Diniyatun
            <br />
            <span style={{ fontWeight: 950 }}>
              Islamia
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              lineHeight: 1.8,
              color: "var(--color-dark)",
              fontWeight: 700,
            }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
          >
            Menyusun halaman, cerita, journey, dan karya sebelum memasuki beranda.
          </motion.p>
        </div>

        <motion.div
          className="neo-card relative p-4"
          style={{
            background: "var(--color-warm-white)",
          }}
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          aria-hidden="true"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-dark bg-rose" />
              <span className="h-2.5 w-2.5 rounded-full border-2 border-dark bg-gold-light" />
              <span className="h-2.5 w-2.5 rounded-full border-2 border-dark bg-gold" />
            </div>
            <span
              className="uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                color: "var(--color-dark)",
                fontWeight: 900,
              }}
            >
              Preparing
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
            <div
              className="min-h-[220px] overflow-hidden"
              style={{
                borderRadius: 4,
                border: "3px solid var(--color-dark)",
                background:
                  "repeating-linear-gradient(135deg, var(--color-blush) 0 18px, var(--color-cream) 18px 36px, var(--color-gold-light) 36px 54px)",
              }}
            >
              <motion.div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.42) 45%, transparent 70%)",
                }}
                animate={shouldReduceMotion ? {} : { x: ["-100%", "100%"] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="flex flex-col justify-between gap-6 py-2">
              <div className="space-y-4">
                {skeletonLines.map((width, index) => (
                  <motion.div
                    key={width}
                    className={`h-3 ${width} overflow-hidden border-2 border-dark bg-gold-light`}
                    style={{ borderRadius: 4 }}
                    initial={{ opacity: 0.35 }}
                    animate={{ opacity: [0.35, 0.9, 0.35] }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 1.2,
                      repeat: Infinity,
                      delay: index * 0.14,
                    }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((item) => (
                  <motion.div
                    key={item}
                    className="aspect-square border-2 border-dark bg-lime"
                    style={{
                      borderRadius: 6,
                    }}
                    animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: item * 0.14 }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <span
                className="uppercase tracking-[0.18em]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  color: "var(--color-dark)",
                  fontWeight: 900,
                }}
              >
                Loading Portfolio
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "var(--color-dark)",
                  fontWeight: 700,
                }}
              >
                {progress}%
              </span>
            </div>
            <div className="h-3 overflow-hidden border-2 border-dark bg-warm-white" style={{ borderRadius: 999 }}>
              <motion.div
                className="h-full bg-gold"
                style={{ borderRadius: 999 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function GSAPProvider({ children }: GSAPProviderProps) {
  const [showIntro, setShowIntro] = useState(true);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const pendingHashRef = useRef<string>("");

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    pendingHashRef.current = typeof window !== "undefined" ? window.location.hash : "";
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (showIntro) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }

    document.body.style.overflow = originalOverflow;

    // When we land on a hash route (/#journey), the browser anchor may scroll
    // while the intro overlay is still exiting. That can cause the section
    // layout to settle incorrectly (content looks partially missing).
    // Delay the manual scroll until the exit animation finishes.
    const rawHash = pendingHashRef.current;
    const EXIT_WAIT_MS = shouldReduceMotion ? 140 : 950;

    if (rawHash && rawHash.startsWith("#")) {
      window.setTimeout(() => {
        const nav = document.querySelector('nav[aria-label="Navigasi utama"]') as HTMLElement | null;
        const navHeight = nav ? nav.getBoundingClientRect().height : 0;

        const id = rawHash.slice(1);
        const el = document.getElementById(id);

        if (el) {
          const targetTop = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
          window.scrollTo({ top: Math.max(0, targetTop), behavior: "auto" });
        }

        // Give layout/animations a chance to settle before refreshing ScrollTrigger.
        ScrollTrigger.refresh();
        window.requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          window.setTimeout(() => ScrollTrigger.refresh(), 300);
        });
      }, EXIT_WAIT_MS);
    } else {
      ScrollTrigger.refresh();
      window.requestAnimationFrame(() => ScrollTrigger.refresh());
    }

    return undefined;
  }, [showIntro]);

  // Cursor setup
  useEffect(() => {
    // Custom cursor
    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;
    if (!dot || !outline) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(outline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const addHover = () => {
      dot?.classList.add("hovering");
      outline?.classList.add("hovering");
    };

    const removeHover = () => {
      dot?.classList.remove("hovering");
      outline?.classList.remove("hovering");
    };

    window.addEventListener("mousemove", moveCursor);

    // Observe interactive elements for hover cursor scaling
    const interactiveSelector = "a, button, input, textarea, [data-magnetic], .nav-link";
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest && target.closest(interactiveSelector)) {
        addHover();
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest && target.closest(interactiveSelector)) {
        removeHover();
      }
    };

    document.body.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <PortfolioIntro
            onComplete={() => {
              setShowIntro(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* Custom Cursor */}
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorOutlineRef} className="cursor-outline" />

      {/* Main Content */}
      <div>
        {children}
      </div>
    </>
  );
}
