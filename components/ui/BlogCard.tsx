"use client";

interface BlogCardProps {
  category: string;
  title: string;
  date: string;
  index: number;
}

export default function BlogCard({
  category,
  title,
  date,
  index,
}: BlogCardProps) {
  return (
    <article
      className="blog-card group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2"
      style={{
        background: "var(--color-warm-white)",
      }}
      data-index={index}
    >
      <span
        className="uppercase tracking-[0.25em] mb-3 block"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 10,
          color: "var(--color-dark)",
          fontWeight: 900,
        }}
      >
        {category}
      </span>
      <h3
        className="mb-4 transition-colors duration-300"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 20,
          color: "var(--color-dark)",
          lineHeight: 1.4,
          fontWeight: 950,
        }}
      >
        {title}
      </h3>
      <time
        className="block"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          color: "var(--color-dark)",
          fontWeight: 700,
        }}
      >
        {date}
      </time>
      <div
        className="mt-4 h-[1px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: "var(--color-dark)" }}
      />
    </article>
  );
}
