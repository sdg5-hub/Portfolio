import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

// Sans — neutral, dense, modern. The workhorse.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Mono — used for HUD labels, system metadata, timestamps.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Serif — reserved for philosophy moments and the Tesla quote.
// Intentionally only invoked when the tone calls for weight and stillness.
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saiyid Gilani — Builder. Systems Thinker.",
  description:
    "Saiyid Gilani — CS & EE at Drexel. Builder of NGSP, MedTrack, and WeaveWise. Trustworthy AI, local-first health tools, and sustainability systems.",
  metadataBase: new URL("https://sdg5-hub.github.io"),
  openGraph: {
    title: "Saiyid Gilani",
    description:
      "Builder. Systems thinker. NGSP, MedTrack, WeaveWise, and trustworthy AI systems.",
    type: "website",
  },
};

// In Next 14+, themeColor and viewport settings live in a separate export
// rather than on the metadata object.
export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${serif.variable}`}
    >
      <body className="bg-ink-950 text-bone-100 antialiased">{children}</body>
    </html>
  );
}
