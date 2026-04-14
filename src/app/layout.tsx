import type { Metadata } from "next";
import { DM_Sans, Rajdhani } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

// DM Sans — body text
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Rajdhani — wordmark y service titles
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

// Nota: Bebas Neue no está disponible en next/font/google — se mantiene como @import en globals.css SOLO para Bebas Neue

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://enece.cl"),
  title: {
    default: "ENECE — Gestión · IA · Desarrollo",
    template: "%s | ENECE",
  },
  description: "Soluciones que piensan y ejecutan. Gestión de procesos, inteligencia artificial y desarrollo de aplicaciones para tu negocio.",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "ENECE",
    description: "Soluciones que piensan y ejecutan. Gestión de procesos, inteligencia artificial y desarrollo de aplicaciones para tu negocio.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "ENECE — Gestión · IA · Desarrollo" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${rajdhani.variable}`}>
      <body>
        <div className="mesh" />
        <Header />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
