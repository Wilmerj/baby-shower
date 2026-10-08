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
  // URL pública del sitio: WhatsApp necesita la URL absoluta de la imagen de
  // vista previa. SITIO_URL permite cambiarla (p. ej. con un dominio propio).
  metadataBase: new URL(process.env.SITIO_URL ?? "https://baby-shower.wilmerj1996.workers.dev"),
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
