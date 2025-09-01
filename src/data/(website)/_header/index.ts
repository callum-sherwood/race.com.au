import { PiMapPinFill } from "react-icons/pi";
import type { IconType } from "react-icons";

interface Social {
  name: string;
  icon: string;
  url: string;
}

interface Location {
  icon: IconType;
  text: string;
  url: string;
}

interface header_logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export const tagline: string = "The Home of Speed, Strategy & Victory.";

export const socials: Social[] = [
  {
    name: "Facebook",
    icon: "/icons/facebook.svg",
    url: "https://facebook.com",
  },
  { name: "X", icon: "/icons/X.svg", url: "https://x.com" },
  {
    name: "Instagram",
    icon: "/icons/instagram.svg",
    url: "https://instagram.com",
  },
];

export const location: Location = {
  icon: PiMapPinFill,
  text: "Location",
  url: "https://www.google.com",
};

export const header_logo: header_logo = {
  src: "/logos/header_logo.svg",
  alt: "logo",
  width: 255,
  height: 77,
};

export const menu_items: { name: string; url: string }[] = [
  { name: "Home", url: "/" },
  { name: "News Listing", url: "/news-listing" },
  { name: "Article Detail", url: "/article" },
  { name: "Race Calendar", url: "/race-calender" },
  { name: "Race Results", url: "/race-results" },
  { name: "Individual Race", url: "#" },
  { name: "Horse Profile", url: "/profile/horse" },   // ✅ semantic
  { name: "Trainer Profile", url: "/profile/trainer" }, // ✅ semantic
  { name: "Track", url: "/tracks" },
  { name: "About", url: "#" },
  { name: "Contact Us", url: "/contact-us" },
];
