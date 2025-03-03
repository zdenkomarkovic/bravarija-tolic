import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tolić Inženjering – Čelične konstrukcije, ograde i stepeništa",
  description:
    "Tolić Inženjering izrađuje čelične konstrukcije, ograde, kapije, stepeništa i nadstrešnice po meri. Kvalitet, preciznost i dugotrajnost. Kontaktirajte nas!",

  keywords: [
    "celicne konstrukcije",
    "metalne ograde",
    "kapije po meri",
    "metalna stepenista",
    "nadstresnice",
    "kovane ograde",
    "industrijska bravarija",
    "pergole, rukohvati",
    "metalni nameštaj",
    "bravarske usluge",
  ],
  alternates: {
    canonical: "https://www.celicne-konstrukcije.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted bg-foreground`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
