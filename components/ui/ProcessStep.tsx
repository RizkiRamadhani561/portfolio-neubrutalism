"use client";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ProcessStep({
  icon,
  title,
  description,
  index,
}: ProcessStepProps) {
  return (
    <div
      className="process-step px-4 py-6 text-center transition duration-300"
      data-index={index}
      style={{
        background: "var(--color-card)",
      }}
    >
      <div
        className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border-[3px] border-dark bg-warm-white shadow-[5px_5px_0_var(--color-dark)]"
        style={{
          borderRadius: 6,
        }}
      >
        <div style={{ color: "var(--color-dark)" }}>{icon}</div>
      </div>
      <h4
        className="uppercase tracking-[0.15em] mb-2"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          fontWeight: 900,
          color: "var(--color-dark)",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "var(--color-dark)",
          lineHeight: 1.7,
          maxWidth: 200,
          margin: "0 auto",
          fontWeight: 700,
        }}
      >
        {description}
      </p>
    </div>
  );
}
