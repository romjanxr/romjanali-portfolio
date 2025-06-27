import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Romjan Ali - Full Stack Developer",
  description:
    "Full Stack Developer passionate about building scalable and secure web applications. Experienced in Django, DRF, PostgreSQL, and React.js, with a strong background in designing RESTful APIs and optimizing database performance. Formerly a Senior CS Instructor, I'm now seeking a full-time Software Developer role.",
  keywords:
    "Full Stack Developer, Django, DRF, PostgreSQL, React.js, RESTful APIs, Software Developer",
  authors: [{ name: "Romjan Ali" }],
  creator: "Romjan Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://localhost:3000",
    title: "Romjan Ali - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in Django, DRF, PostgreSQL, and React.js, building modern and scalable web applications.",
    siteName: "Romjan Ali Portfolio",
    images: [
      {
        url: "http://localhost:3000/og-image.png", // will replace with my actual image URL
        width: 1200,
        height: 630,
        alt: "Romjan Ali Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romjan Ali - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in Django, DRF, PostgreSQL, and React.js.",
    // images: ["http://localhost:3000/og-image.png"], // will replace with my actual image URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
