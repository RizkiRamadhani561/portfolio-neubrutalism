import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diniyatun Islamia — Creative Visionary & Designer",
  description:
    "Portfolio of Diniyatun Islamia, a creative visionary and designer specializing in UI/UX, brand identity, web design, and product design. Crafting premium digital experiences.",
  keywords: [
    "Diniyatun Islamia",
    "Creative Designer",
    "UI/UX Design",
    "Brand Identity",
    "Portfolio",
    "Web Design",
  ],
  openGraph: {
    title: "Diniyatun Islamia — Creative Visionary & Designer",
    description: "Crafting premium digital experiences through design excellence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
