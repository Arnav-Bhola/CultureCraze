import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CultureCraze",
  description:
    "A company addressing the cultural education gap intensified by rapid globalization.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

