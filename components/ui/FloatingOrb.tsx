"use client";

interface FloatingOrbProps {
  color: "blush" | "gold" | "white" | "rose";
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  blur?: number;
  opacity?: number;
}

const colorMap: Record<string, string> = {
  blush: "var(--color-blush)",
  gold: "var(--color-gold-light)",
  white: "#FFFFFF",
  rose: "var(--color-rose)",
};

export default function FloatingOrb({
  color,
  size,
  top,
  left,
  right,
  bottom,
  delay = 0,
  blur = 60,
  opacity = 0.6,
}: FloatingOrbProps) {
  const bgColor = colorMap[color] || colorMap.blush;

  return (
    <div
      className="absolute rounded-full pointer-events-none animate-float"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at center, ${bgColor} 0%, transparent 60%)`,
        opacity,
        top,
        left,
        right,
        bottom,
        filter: `blur(${blur}px)`,
        animationDelay: `${delay}s`,
        animationDuration: `${8 + delay * 2}s`,
      }}
      aria-hidden="true"
    />
  );
}
