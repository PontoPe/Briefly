import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
