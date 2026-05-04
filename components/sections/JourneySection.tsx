"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "@/lib/gsap-config";

const educationStages = [
  {
    level: "SD",
    logoSrc: "/images/journey/logos/logo-sd.svg",
    title: "Sekolah Dasar",
    period: "Awal Perjalanan",
    description:
      "Di masa ini aku mulai mengenal kebiasaan belajar, keberanian tampil, dan rasa percaya diri untuk mengikuti berbagai kegiatan sekolah.",
    awards: [
      "Juara kelas dan aktif mengikuti kegiatan akademik sekolah.",
      "Penghargaan lomba membaca puisi tingkat sekolah.",
      "Apresiasi sebagai siswi disiplin dan rajin dalam kegiatan kelas.",
    ],
    media: {
      podium: "/images/journey/awards/sd-podium.svg",
      certificate: "/images/journey/awards/sd-certificate.svg",
    },
  },
  {
    level: "SMP",
    logoSrc: "/images/journey/logos/logo-smp.svg",
    title: "Sekolah Menengah Pertama",
    period: "Masa Eksplorasi",
    description:
      "Periode SMP menjadi ruang untuk mencoba lebih banyak hal, mulai dari organisasi, lomba kreatif, sampai belajar bekerja sama dalam tim.",
    awards: [
      "Finalis lomba karya tulis sederhana tingkat sekolah.",
      "Penghargaan kegiatan seni dan kreativitas antarkelas.",
      "Sertifikat partisipasi aktif dalam organisasi siswa.",
    ],
    media: {
      podium: "/images/journey/awards/smp-podium.svg",
      certificate: "/images/journey/awards/smp-certificate.svg",
    },
  },
  {
    level: "SMA",
    logoSrc: "/images/journey/logos/logo-sma.svg",
    title: "Sekolah Menengah Atas",
    period: "Masa Pembentukan Arah",
    description:
      "Saat SMA, proses belajar terasa lebih terarah. Aku mulai memahami minat, mengasah kemampuan komunikasi, dan membangun portofolio pengalaman.",
    awards: [
      "Juara lomba desain poster tingkat sekolah.",
      "Sertifikat kepanitiaan acara kreatif dan literasi.",
      "Penghargaan presentasi terbaik dalam tugas proyek kelompok.",
    ],
    media: {
      podium: "/images/journey/awards/sma-podium.svg",
      certificate: "/images/journey/awards/sma-certificate.svg",
    },
  },
  {
    level: "Kuliah",
    logoSrc: "/images/journey/logos/logo-kuliah.svg",
    title: "Perguruan Tinggi",
    period: "Perjalanan Saat Ini",
    description:
      "Di bangku kuliah, aku memperdalam cara berpikir, memperluas wawasan, dan menyusun karya yang lebih matang melalui proses belajar yang konsisten.",
    awards: [
      "Sertifikat seminar, workshop, dan pelatihan pengembangan diri.",
      "Apresiasi proyek kreatif dalam kegiatan kampus.",
      "Pengalaman mengikuti kompetisi atau program akademik kampus.",
    ],
    media: {
      podium: "/images/journey/awards/kuliah-podium.svg",
      certificate: "/images/journey/awards/kuliah-certificate.svg",
    },
  },
];

function SchoolLogoSlot({ level, logoSrc }: { level: string; logoSrc?: string }) {
  return (
    <div
      className="group/logo relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden border-[3px] border-dark p-2 shadow-[6px_6px_0_var(--color-dark)] transition duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_var(--color-dark)]"
      style={{
        background: "var(--color-warm-white)",
        borderRadius: 6,
      }}
      aria-label={`Logo ${level}`}
    >
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt={`Logo ${level}`}
          width={56}
          height={56}
          className="h-full w-full rounded-full object-contain"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center border-2 border-dashed border-dark bg-lime text-center">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: level.length > 3 ? 11 : 13,
              color: "var(--color-gold)",
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            {level}
          </span>
          <span
            className="mt-1 uppercase tracking-[0.12em]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 7,
              color: "var(--color-muted-brown)",
            }}
          >
            Logo
          </span>
        </div>
      )}
    </div>
  );
}

function MediaPlaceholder({
  label,
  src,
  variant,
}: {
  label: string;
  src: string;
  variant: "podium" | "certificate";
}) {
  return (
    <div
      className="neo-card group/media relative min-h-[132px] overflow-hidden p-3 transition duration-300 sm:min-h-[150px]"
      data-media={variant}
      style={{
        background: variant === "podium" ? "var(--color-gold-light)" : "var(--color-lime)",
      }}
    >
      <div
        className="absolute inset-x-3 top-3 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-light), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="relative h-full min-h-[108px] overflow-hidden border sm:min-h-[126px]"
        style={{
          borderColor: "var(--color-dark)",
          borderWidth: 2,
          borderRadius: 4,
          background: "var(--color-warm-white)",
        }}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover/media:scale-105"
        />
        <div className="absolute inset-x-3 bottom-3 border-2 border-dark bg-warm-white px-3 py-2" style={{ borderRadius: 4 }}>
          <div
            className="uppercase tracking-[0.18em]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              color: "var(--color-dark)",
              fontWeight: 900,
            }}
          >
            Placeholder Gambar
          </div>
          <p
            className="mt-1"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "var(--color-dark)",
              lineHeight: 1.5,
              fontWeight: 700,
            }}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      });

      gsap.from(introRef.current, {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: introRef.current, start: "top 85%" },
      });

      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.4,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: lineRef.current, start: "top 75%" },
      });

      gsap.from(".education-stage", {
        y: 44,
        opacity: 0,
        stagger: 0.16,
        duration: 0.85,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: ".education-list", start: "top 78%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative overflow-hidden px-6 md:px-16 lg:px-24"
      style={{
        paddingTop: 120,
        paddingBottom: 120,
        background:
          "linear-gradient(180deg, var(--color-warm-white) 0%, var(--color-cream) 52%, var(--color-warm-white) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-10 top-10 hidden text-[140px] font-light italic leading-none opacity-[0.05] lg:block"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
        aria-hidden="true"
      >
        Journey
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-dark), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div
              className="brutal-label mb-5 uppercase tracking-[0.16em]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
              }}
            >
              Journey Pendidikan
            </div>
            <h2
              ref={headingRef}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 6vw, 88px)",
                color: "var(--color-dark)",
                fontWeight: 950,
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              Proses
              <br />
              <span style={{ fontWeight: 950 }}>
                Belajarku
              </span>
            </h2>
          </div>
          <p
            ref={introRef}
            className="max-w-xl lg:justify-self-end"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.4vw, 17px)",
              lineHeight: 1.9,
              color: "var(--color-dark)",
              fontWeight: 700,
            }}
          >
            Dari SD, SMP, SMA, hingga kuliah, setiap jenjang menyimpan proses belajar,
            pengalaman, dan penghargaan kecil yang ikut membentuk langkahku hari ini.
          </p>
        </div>

        <div className="education-list relative">
          <div
            ref={lineRef}
            className="absolute bottom-10 left-5 top-10 hidden w-px md:block"
            style={{ background: "linear-gradient(var(--color-dark), var(--color-dark), var(--color-dark))" }}
            aria-hidden="true"
          />

          <div className="grid gap-8">
            {educationStages.map((stage, index) => (
              <article
                key={stage.level}
                className="education-stage relative grid gap-6 p-5 transition duration-300 md:grid-cols-[104px_1fr] md:p-6 lg:grid-cols-[112px_1fr_390px]"
                style={{
                  background: "var(--color-card)",
                }}
              >
                <div className="flex items-center gap-4 md:block">
                  <SchoolLogoSlot level={stage.level} logoSrc={stage.logoSrc} />
                  <div
                    className="uppercase tracking-[0.22em] md:mt-4"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      color: "var(--color-dark)",
                      fontWeight: 900,
                    }}
                  >
                    Step {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div>
                  <div
                    className="mb-3 w-fit border px-3 py-1 text-[11px] uppercase tracking-[0.18em]"
                    style={{
                      borderColor: "var(--color-dark)",
                      borderWidth: 2,
                      borderRadius: 999,
                      color: "var(--color-dark)",
                      background: "var(--color-warm-white)",
                      fontFamily: "var(--font-body)",
                      fontWeight: 900,
                    }}
                  >
                    {stage.period}
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(30px, 3.4vw, 48px)",
                      lineHeight: 1,
                      color: "var(--color-dark)",
                      fontWeight: 950,
                      textTransform: "uppercase",
                    }}
                  >
                    {stage.title}
                  </h3>
                  <p
                    className="max-w-2xl"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      lineHeight: 1.85,
                      color: "var(--color-dark)",
                      fontWeight: 700,
                    }}
                  >
                    {stage.description}
                  </p>

                  <div className="mt-6">
                    <h4
                      className="mb-3 uppercase tracking-[0.22em]"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 11,
                        color: "var(--color-dark)",
                        fontWeight: 700,
                      }}
                    >
                      Penghargaan & Sertifikat
                    </h4>
                    <ul className="grid gap-2">
                      {stage.awards.map((award) => (
                        <li key={award} className="flex gap-3">
                          <span
                            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: "var(--color-dark)" }}
                          />
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: 13,
                              lineHeight: 1.75,
                              color: "var(--color-dark)",
                              fontWeight: 700,
                            }}
                          >
                            {award}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <MediaPlaceholder
                    label="Foto naik podium menerima piala"
                    src={stage.media.podium}
                    variant="podium"
                  />
                  <MediaPlaceholder
                    label="Foto sertifikat atau piagam penghargaan"
                    src={stage.media.certificate}
                    variant="certificate"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
