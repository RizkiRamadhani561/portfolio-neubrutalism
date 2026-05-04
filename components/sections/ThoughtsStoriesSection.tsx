"use client";

const notes = [
  {
    title: "Rasa Ingin Tahu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    title: "Konsistensi",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    title: "Arah Karya",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
];

export default function ThoughtsStoriesSection() {
  return (
    <section
      id="thoughts"
      className="relative overflow-hidden px-6 md:px-16 lg:px-24"
      style={{
        paddingTop: 110,
        paddingBottom: 110,
        background:
          "linear-gradient(180deg, var(--color-cream) 0%, var(--color-warm-white) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-dark), transparent)" }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative z-10">
          <div
            className="brutal-label mb-5 uppercase tracking-[0.16em]"
            style={{ fontFamily: "var(--font-body)", fontSize: 12 }}
          >
            Di Balik Visi
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 5vw, 76px)",
              color: "var(--color-dark)",
              fontWeight: 950,
              lineHeight: 1.05,
              textTransform: "uppercase",
            }}
          >
            Sedikit
            <br />
            <span style={{ fontWeight: 950 }}>
              Tentang Saya
            </span>
          </h2>
          <p
            className="mt-8 max-w-lg"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-dark)",
              fontSize: "clamp(15px, 1.4vw, 17px)",
              lineHeight: 1.85,
              fontWeight: 700,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid gap-4">
          {notes.map((note, index) => (
            <article
              key={note.title}
              className="blog-card p-5 transition duration-300 md:p-6"
              style={{
                background: "var(--color-card)",
              }}
            >
              <div className="mb-5 flex items-center justify-between">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: "var(--color-dark)" }}
                />
                <span
                  className="uppercase tracking-[0.18em]"
                  style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--color-dark)", fontWeight: 900 }}
                >
                  Catatan {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3vw, 40px)",
                  color: "var(--color-dark)",
                  fontWeight: 950,
                  lineHeight: 1,
                }}
              >
                {note.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "var(--color-dark)",
                  fontWeight: 700,
                }}
              >
                {note.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
