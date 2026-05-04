"use client";

interface CurvedTextProps {
  text: string;
  radius?: number;
  className?: string;
  fontSize?: number;
  spinning?: boolean;
}

export default function CurvedText({
  text,
  radius = 120,
  className = "",
  fontSize = 12,
  spinning = true,
}: CurvedTextProps) {
  const size = radius * 2 + 40;
  const centerOffset = size / 2;

  return (
    <div
      className={`${spinning ? "animate-rotate-slow" : ""} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        aria-hidden="true"
      >
        <defs>
          <path
            id={`curved-path-${radius}`}
            d={`M ${centerOffset},${centerOffset} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="none"
          />
        </defs>
        <text
          fill="var(--color-muted-brown)"
          fontSize={fontSize}
          fontFamily="var(--font-body)"
          letterSpacing="0.3em"
          style={{ textTransform: "uppercase" }}
        >
          <textPath
            href={`#curved-path-${radius}`}
            startOffset="0%"
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
