import type { Metadata, Viewport } from "next";
import { Birthstone_Bounce, Patrick_Hand, Tinos } from "next/font/google";
import { BEBE } from "@/lib/invitacion";
import "./globals.css";

const birthstone = Birthstone_Bounce({
  variable: "--font-birthstone",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const patrick = Patrick_Hand({
  variable: "--font-patrick",
  subsets: ["latin"],
  weight: "400",
});

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `Baby Shower de ${BEBE}`,
  description: "Tienes una invitación especial",
  // Las invitaciones son personales: que no aparezcan en buscadores.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#d0e8f4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${birthstone.variable} ${patrick.variable} ${tinos.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
