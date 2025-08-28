import cn from "@/core/utils/class-names";
import { Toaster } from "react-hot-toast";
import NextProgress from "@/core/components/next-progress";
import { inter, utopiaCaption, utopiaSubhead, lexendDeca } from "./fonts";
import { generateMetadata } from "@/config/metadata";
import type { Metadata, Viewport } from "next";

// styles
import "@/app/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Export metadata
export const metadata: Metadata = generateMetadata("Home");

// Viewport export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#32830A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          utopiaCaption.variable,
          utopiaSubhead.variable,
          lexendDeca.variable,
          "font-inter"
        )}
      >
        <NextProgress />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
