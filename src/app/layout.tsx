import type { Metadata } from "next";

import "./globals.css";

import { cormorantGaramond, manrope } from "./font";

export const metadata: Metadata = {
  title: "Your Store",
  description: "Your store description",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorantGaramond.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}