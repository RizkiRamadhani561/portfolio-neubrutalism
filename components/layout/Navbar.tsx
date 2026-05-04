"use client";

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, GraduationCap, Star, Heart, Camera, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
};

type TabItem = Tab | { type: "separator" };

const tabs: TabItem[] = [
  { title: "Beranda", icon: Home, href: "#hero" },
  { title: "Cerita", icon: User, href: "#story" },
  { title: "Journey", icon: GraduationCap, href: "#journey" },
  { title: "Keahlian", icon: Star, href: "#skills" },
  { type: "separator" },
  { title: "Hobi", icon: Heart, href: "#hobbies" },
  { title: "Galeri", icon: Camera, href: "#works" },
  { title: "Tentang", icon: Briefcase, href: "#thoughts" },
];

function ExpandedTabs({ scrolled }: { scrolled: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /* ================= SCROLL DETECT ================= */
  useEffect(() => {
    const sectionInfos = tabs
      .map((tab, index) => {
        if (!("href" in tab)) return null;
        const el = document.querySelector<HTMLElement>(tab.href);
        return el ? { index, el } : null;
      })
      .filter((v): v is { index: number; el: HTMLElement } => Boolean(v));

    const ratioByIndex = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const info = sectionInfos.find((s) => s.el === entry.target);
          if (!info) return;

          if (entry.isIntersecting) {
            ratioByIndex.set(info.index, entry.intersectionRatio);
          } else {
            ratioByIndex.delete(info.index);
          }
        });

        // Pick the most visible intersecting section (prevents being "stuck" on a tall section).
        let bestIndex: number | null = null;
        let bestRatio = -1;

        ratioByIndex.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });

        if (bestIndex !== null) setActiveIndex(bestIndex);
      },
      {
        // Bias the "active" detection around the top/middle area of the viewport.
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 1],
      }
    );

    sectionInfos.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ================= INDICATOR SMOOTH ================= */
  useEffect(() => {
    const btn = buttonRefs.current[activeIndex];
    const container = containerRef.current;

    if (!btn || !container) return;

    const updateIndicator = () => {
      setIndicator({
        left: btn.offsetLeft,
        width: btn.offsetWidth,
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(container);
    resizeObserver.observe(btn);

    return () => resizeObserver.disconnect();
  }, [activeIndex, scrolled]);

  /* ================= CLICK ================= */
  const handleClick = (index: number, href?: string) => {
    setActiveIndex(index);
    buttonRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    if (href) {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex max-w-[calc(100vw-1.5rem)] items-center gap-1 overflow-x-auto rounded-md border-[3px] border-dark p-1.5 shadow-[8px_8px_0_var(--color-dark)] transition-all duration-300 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        scrolled
          ? "bg-lime shadow-[6px_6px_0_var(--color-dark)]"
          : "bg-warm-white"
      )}
      aria-label="Navigasi utama"
    >
      <div
        className="pointer-events-none absolute inset-x-3 top-1 h-1 bg-dark/10"
        aria-hidden="true"
      />

      {/* INDICATOR */}
      <motion.div
        className="absolute inset-y-1.5 rounded-sm border-2 border-dark bg-gold shadow-[4px_4px_0_var(--color-dark)]"
        animate={{
          left: indicator.left,
          width: indicator.width,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
      />

      {tabs.map((tab, index) => {
        if ("type" in tab)
          return <div key={index} className="h-6 w-[3px] shrink-0 bg-dark" />;

        const Icon = tab.icon;
        const active = activeIndex === index;

        return (
          <motion.button
            key={tab.title}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            onClick={() => handleClick(index, tab.href)}
            className={cn(
              "relative z-10 flex h-10 shrink-0 items-center justify-center gap-2 rounded-sm px-3 text-[13px] font-black uppercase tracking-[0.04em] text-dark/70 outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white sm:px-4 sm:text-sm",
              active && "text-dark",
              !active && "hover:bg-gold-light hover:text-dark"
            )}
            aria-label={`Pindah ke ${tab.title}`}
            aria-current={active ? "page" : undefined}
            whileTap={{ scale: 0.96 }}
          >
            <Icon className={cn("size-4 transition-transform duration-200", active && "scale-110")} aria-hidden="true" />
            <span className="hidden whitespace-nowrap md:inline">{tab.title}</span>
            <AnimatePresence initial={false}>
              {active && (
                <motion.span
                  className="overflow-hidden whitespace-nowrap md:hidden"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center px-3 py-3 transition-all duration-300 sm:px-6",
        scrolled ? "sm:py-4" : "sm:py-6"
      )}
      aria-label="Navigasi utama"
    >
      <div className="pointer-events-auto">
        <ExpandedTabs scrolled={scrolled} />
      </div>
    </nav>
  );
}
