import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script-raw",
  weight: ["400"],
});

const SITE_URL = "https://undangannikah-aini-musyafa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Undangan Pernikahan | Aini & Musyafa'",
  description:
    "Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami.",
  openGraph: {
    title: "Undangan Pernikahan | Aini & Musyafa'",
    description:
      "Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami.",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Undangan Pernikahan Aini & Musyafa'",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Pernikahan | Aini & Musyafa'",
    description:
      "Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${playfair.variable} ${plusJakarta.variable} ${greatVibes.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}