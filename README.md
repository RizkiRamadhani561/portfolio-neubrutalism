# Portfolio Neubrutalism

<p align="center">
  <strong>Personal portfolio website for Diniyatun Islamia.</strong>
  <br />
  A bold, expressive, and animation-rich portfolio built with Next.js, React, Tailwind CSS, and GSAP.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=nextdotjs" />
  <img alt="React" src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=111111" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=ffffff" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff" />
</p>

## Overview

Portfolio ini menampilkan profil kreatif Diniyatun Islamia dengan visual neubrutalism yang tegas, playful, dan penuh karakter. Halaman utama dirancang sebagai storytelling single page: mulai dari hero, cerita personal, perjalanan, skill, proses kreatif, karya pilihan, sampai tulisan.

## Highlights

- Neubrutalism visual system with thick borders, punchy colors, and strong shadows.
- Smooth scroll-based animation using GSAP and ScrollTrigger.
- Responsive single page layout built for desktop and mobile.
- Modular section architecture for easier editing and expansion.
- Reusable UI components for cards, buttons, carousel, marquee, and decorative text.
- SEO metadata configured through the Next.js App Router.

## Tech Stack

| Category | Tools |
| --- | --- |
| Framework | Next.js 16, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, tw-animate-css |
| Animation | GSAP, @gsap/react, Framer Motion |
| UI Utilities | shadcn, Base UI, lucide-react |
| Tooling | ESLint, PostCSS |

## Project Structure

```txt
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── providers/
│   ├── sections/
│   └── ui/
├── hooks/
├── lib/
├── public/
│   └── images/
└── types/
```

## Main Sections

- `HeroSection` - opening portrait, name reveal, decorative brutal shapes, and scroll cue.
- `MyStorySection` - personal introduction and story block.
- `JourneySection` - education or milestone timeline.
- `WhatIDoSection` - skill overview and creative direction.
- `CreativeProcessSection` - process-oriented storytelling.
- `SelectedWorksSection` - featured work showcase.
- `ThoughtsStoriesSection` - writing or reflection area.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```txt
http://localhost:3000
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with webpack. |
| `npm run build` | Build the app for production. |
| `npm run start` | Start the production server. |
| `npm run lint` | Run ESLint checks. |

## Customization Notes

- Update page content from the section files in `components/sections`.
- Adjust global colors, typography, and reusable classes in `app/globals.css`.
- Configure GSAP behavior in `lib/gsap-config.ts` and animation hooks in `hooks`.
- Replace placeholder artwork inside `public/images` with final portfolio assets.
- Update site title, description, and Open Graph metadata in `app/layout.tsx`.

## Deployment

This repository is prepared for GitHub Pages with a static export workflow.

Every push to the `main` branch will run `.github/workflows/deploy.yml`, build the site, upload the `out` folder, and publish it through GitHub Pages.

Production URL:

```txt
https://rizkiramadhani561.github.io/RizkiRamadhani.github.io/
```

For a local production build:

```bash
npm run build
```

For GitHub Pages, the workflow builds with `GITHUB_PAGES=true` so Next.js uses the correct repository subpath.

## Repository

```txt
https://github.com/RizkiRamadhani561/RizkiRamadhani.github.io.git
```

---

Built with care for a creative, bold, and memorable digital portfolio.
