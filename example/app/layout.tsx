import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "scroll-hint — Scroll edge indicators for React",
  description: "Scroll edge indicators for React. Shows shadows and/or solid lines on scrollable container edges using IntersectionObserver — no scroll events, no polling.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
