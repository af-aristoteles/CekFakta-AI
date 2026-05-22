import type { Metadata } from "next";
import { Inter, Geist, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "CekFakta AI - Beranda",
  description: "AI pendeteksi hoaks berbasis Gemini untuk membantu masyarakat Indonesia memahami informasi digital dengan lebih aman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark h-full antialiased">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="GwlJm4e3-HxCEL_6m6vfHtwM4_2lech-ufez2g1FYd8" />
      </head>
      <body className={`${inter.variable} ${geist.variable} ${jetbrainsMono.variable} min-h-full flex flex-col bg-background selection:bg-primary-container selection:text-on-primary-container font-body-md text-body-md text-on-background`}>
        {/* TopNavBar */}
        <Navbar />

        {children}

        {/* Footer */}
        <footer className="bg-surface-container-lowest/60 border-t border-white/5 w-full px-margin-mobile md:px-margin-desktop py-12 mt-auto">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter items-start">
            <div className="flex flex-col gap-4">
              <div className="text-label-md font-label-md font-bold text-on-surface">CekFakta AI</div>
              <div className="font-body-md text-body-md text-on-surface-variant text-sm max-w-[250px]">
                © 2026 CekFakta AI. Powered by Abraham Fatbinan.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="/privacy">Kebijakan Privasi</Link>
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="/terms">Syarat Layanan</Link>
              <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="/tentang">Tentang Kami</Link>
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-2" href="mailto:alonmarlon089@gmail.com">
                <span className="material-symbols-outlined text-[16px]">mail</span>
                alonmarlon089@gmail.com
              </a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-2" href="https://wa.me/6282335756519" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[16px]">call</span>
                WhatsApp Kami
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
