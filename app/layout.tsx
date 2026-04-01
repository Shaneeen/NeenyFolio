import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: {
    default: "Neenyfolio",
    template: "%s | Neenyfolio"
  },
  description:
    "A portfolio for Shaneen featuring projects, experience, and playful side quests.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans`}>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
