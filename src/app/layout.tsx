import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liam Ringstad | Portfolio",
  description: "Engineering Builder | Ontology-Driven Platforms & Agentic Systems",
  metadataBase: new URL("https://liamringstad.com"),
  openGraph: {
    title: "Liam Ringstad | Engineering Builder",
    description: "Currently shipping sovereign offline-first AI command systems and planetary-scale multi-agent simulation platforms.",
    url: "https://liamringstad.com",
    siteName: "Liam Ringstad Portfolio",
    images: [
      {
        url: "https://liamringstad.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liam Ringstad Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-1 overflow-visible">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
