import { Taviraj, Poppins, DM_Serif_Display } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
});

export const fontHeading = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading"
});
