import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

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
    description: "Soluciones que piensan y ejecutan.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "ENECE — Gestión · IA · Desarrollo" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
