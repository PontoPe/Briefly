import type { Metadata } from "next";
import { Manrope, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Briefly — The Marketing Design Marketplace",
  description:
    "A curated marketplace connecting brands with elite marketing designers for branding, campaigns, assets, and social media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${manrope.variable} ${beVietnamPro.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
