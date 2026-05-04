"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap-config";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Heading reveal
      const lines = headingRef.current?.querySelectorAll(".line-inner");
      if (lines) {
        gsap.from(lines, {
          yPercent: 100, opacity: 0, stagger: 0.08, duration: 1.1, ease: "power4.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        });
      }
      // Form fields stagger
      gsap.from(".form-field", {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-form", start: "top 80%" },
      });
      // Social links
      gsap.from(".social-link", {
        y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".social-links", start: "top 90%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-6 md:px-16 lg:px-24"
      style={{ paddingTop: 120, paddingBottom: 120, background: "var(--color-warm-white)" }}
    >
      <div className="max-w-150 mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-center mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "var(--color-dark)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          <span className="line-wrapper">
            <span className="line-inner">LET&rsquo;S CREATE</span>
          </span>
          <br />
          <span className="line-wrapper">
            <span className="line-inner italic" style={{ fontWeight: 300 }}>TOGETHER</span>
          </span>
        </h2>

        {/* Form */}
        <form className="contact-form space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="form-field">
            <input
              type="text"
              placeholder="Name"
              aria-label="Your name"
              className="w-full bg-transparent border-0 border-b py-3 outline-none transition-colors duration-300 focus:border-(--color-gold)"
              style={{
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "var(--color-gold-light)",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--color-dark)",
              }}
            />
          </div>
          <div className="form-field">
            <input
              type="email"
              placeholder="Email"
              aria-label="Your email"
              className="w-full bg-transparent border-0 border-b py-3 outline-none transition-colors duration-300 focus:border-(--color-gold)"
              style={{
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "var(--color-gold-light)",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--color-dark)",
              }}
            />
          </div>
          <div className="form-field">
            <textarea
              placeholder="Message"
              rows={4}
              aria-label="Your message"
              className="w-full bg-transparent border-0 border-b py-3 outline-none resize-none transition-colors duration-300 focus:border-(--color-gold)"
              style={{
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "var(--color-gold-light)",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--color-dark)",
              }}
            />
          </div>
          <div className="form-field flex justify-center pt-4">
            <MagneticButton
              type="submit"
              ariaLabel="Send message"
              strength={0.3}
              className="relative px-10 py-4 rounded-full uppercase tracking-[0.3em] overflow-hidden transition-transform duration-300 hover:scale-105"
              style={{
                background: "var(--color-gold)",
                color: "white",
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 500,
                border: "none",
              }}
            >
              <span className="relative z-10">SEND MESSAGE</span>
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s ease-in-out infinite",
                }}
                aria-hidden="true"
              />
            </MagneticButton>
          </div>
        </form>

        {/* Social Links */}
        <div className="social-links flex justify-center gap-6 mt-16">
          {[
            { label: "Instagram", icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            )},
            { label: "Behance", icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 1.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
            )},
            { label: "LinkedIn", icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            )},
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              className="social-link p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{ color: "var(--color-muted-brown)", border: "1px solid var(--color-gold-light)" }}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
