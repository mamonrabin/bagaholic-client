import type { Metadata } from "next";

import "./globals.css";

import { cormorantGaramond, manrope } from "./font";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Home - bagtitasweb",
  description: "Your store description",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorantGaramond.variable}`}
    >
      <body className="font-sans">
        {children}
        <Toaster position="top-right" richColors closeButton duration={3000} />
      </body>
    </html>
  );
}
