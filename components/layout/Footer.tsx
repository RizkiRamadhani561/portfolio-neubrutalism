"use client";

import { Music2 } from "lucide-react";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      className="px-6 py-10 md:px-16"
      style={{
        borderTop: "3px solid var(--color-dark)",
        background: "var(--color-gold-light)",
      }}
    >
      <div
        className="neo-card mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-6 p-6 text-center md:flex-row md:text-left"
        style={{
          background: "var(--color-warm-white)",
        }}
      >
        <div>
          <div
            className="brutal-label mb-2 uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-body)", fontSize: 11 }}
          >
            Portfolio
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "var(--color-dark)",
              letterSpacing: "0.15em",
              fontWeight: 900,
            }}
          >
            lorem &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-3 text-dark/65">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center border-[3px] border-dark bg-blush shadow-[4px_4px_0_var(--color-dark)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--color-dark)]"
            style={{ borderRadius: 6 }}
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex h-10 w-10 items-center justify-center border-[3px] border-dark bg-lime shadow-[4px_4px_0_var(--color-dark)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--color-dark)]"
            style={{ borderRadius: 6 }}
          >
            <Music2 size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
