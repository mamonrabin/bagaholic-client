import { Bodoni_Moda, Manrope } from "next/font/google";

export const cormorantGaramond = Bodoni_Moda({
  subsets: ["latin"],
  weight: [ "500", "400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "500", "400", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});
