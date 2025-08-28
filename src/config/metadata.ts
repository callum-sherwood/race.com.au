import { Metadata } from "next";

const defaultTitle = "HorseRacing - The Home of Speed, Strategy & Victory";
const defaultDescription =
  "HorseRacing is your ultimate destination for live race results, expert analysis, race calendars, trainer profiles, and the latest horse racing news.";
const siteURL = "https://race.com.au";
const siteName = "HorseRacing";
const siteLocale = "en_US";
const ogImageURL = `${siteURL}/og-default.jpg`;
const faviconPath = "/icons/favicon_1.ico";

export const generateMetadata = (
  title?: string,
  description: string = defaultDescription
): Metadata => {
  const fullTitle = title ? `${title} - ${siteName}` : defaultTitle;

  return {
    title: fullTitle,
    description,
    keywords: [
      "horse racing",
      "race results",
      "race calendar",
      "jockey stats",
      "trainer profiles",
      "betting odds",
      "live racing updates",
    ],
    robots: "index, follow",
    applicationName: siteName,
    generator: "Next.js",
    metadataBase: new URL(siteURL),
    icons: {
      icon: faviconPath,
      shortcut: faviconPath,
      apple: faviconPath,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: siteURL,
      siteName,
      locale: siteLocale,
      type: "website",
      images: [
        {
          url: ogImageURL,
          width: 1200,
          height: 630,
          alt: "HorseRacing - The Home of Speed, Strategy & Victory",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageURL],
      site: "@YourTwitterHandle",
      creator: "@YourTwitterHandle",
    },
  };
};
