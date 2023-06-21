import { Italiana, Poppins } from "next/font/google";

export const fontContent = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-content"
});

export const fontHeading = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading"
});