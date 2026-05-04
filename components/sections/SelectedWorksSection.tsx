"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function SelectedWorksSection() {
  const baseImages = [
    "/images/gallery/gallery-1.svg",
    "/images/gallery/gallery-2.svg",
    "/images/gallery/gallery-3.svg",
    "/images/gallery/gallery-4.svg",
    "/images/gallery/gallery-5.svg",
    "/images/gallery/gallery-6.svg",
    "/images/gallery/gallery-7.svg",
    "/images/gallery/gallery-8.svg",
  ];

  const images = [...baseImages, ...baseImages, ...baseImages, ...baseImages];

  return (
    <section
      id="works"
      className="relative overflow-hidden px-6 md:px-16"
      style={{
        paddingTop: 110,
        paddingBottom: 110,
        background: "var(--color-warm-white)",
      }}
    >
      <div className="mx-auto mb-12 grid max-w-[1280px] gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <div
            className="brutal-label mb-5 uppercase tracking-[0.16em]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
            }}
          >
            Galeri Karya
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(42px, 5vw, 64px)",
              color: "var(--color-dark)",
              fontWeight: 950,
              lineHeight: 1.05,
            }}
          >
            GALERI SAYA
          </h2>
        </div>
        <p
          className="max-w-xl lg:justify-self-end"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            lineHeight: 1.8,
            color: "var(--color-dark)",
            fontWeight: 700,
          }}
        >
          Kumpulan visual yang disiapkan sebagai ruang dokumentasi karya, proses,
          dan momen kreatif yang bisa kamu ganti dengan foto asli.
        </p>
      </div>

      <div
        className="neo-card mx-auto max-w-7xl p-2"
        style={{
          background: "var(--color-warm-white)",
        }}
      >
        <ThreeDMarquee images={images} className="rounded-[4px] border-2 border-dark" />
      </div>
    </section>
  );
}
