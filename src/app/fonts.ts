import { Inter, Lexend_Deca } from "next/font/google";
import localFont from "next/font/local";

export const utopiaCaption = localFont({
  src: [
    {
      path: "./fonts/Utopia Std Semibold Caption.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-utopia-caption",
});

export const utopiaSubhead = localFont({
  src: [
    {
      path: "./fonts/Utopia Std Semibold Subhead.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-utopia-subhead",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
});
