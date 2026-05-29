import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Update to the real domain once known (used for absolute OG image URLs).
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanfrancisco.thedawoodibohras.com",
  ),
  title: "Ashara Mubaraka 1448H — Relay Center, SF Bay Area",
  description:
    "Travel and accommodation information for mehmano attending Ashara Mubaraka 1448H at Al Masjid Al Mohammedi, Fremont, hosted by Anjuman-e-Najmi (San Francisco).",
  openGraph: {
    title: "Ashara Mubaraka 1448H — SF Bay Area Relay Center",
    description:
      "Everything mehmano need for Ashara Mubaraka 1448H at Al Masjid Al Mohammedi, Fremont.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
