"use client";

import { useMagneticEffect } from "@/hooks/useMagneticEffect";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
  onClick?: () => void;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  className = "",
  style,
  strength = 0.35,
  onClick,
  ariaLabel,
  type = "button",
}: MagneticButtonProps) {
  const ref = useMagneticEffect<HTMLButtonElement>({ strength });

  return (
    <button
      ref={ref}
      type={type}
      className={`magnetic-wrap ${className}`}
      style={style}
      onClick={onClick}
      aria-label={ariaLabel}
      data-magnetic
    >
      {children}
    </button>
  );
}
