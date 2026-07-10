import type { Metadata } from "next";
import { Rajdhani, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import ChatBot from "@/components/ChatBot";

const rajdhani = Rajdhani({
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WHB Plumbing | Plumbing Store & Supply in Anniston, AL — Pipe, Fittings, Fixtures & Parts",
  description:
    "WHB Plumbing is Anniston, AL's plumbing store & supply house: pipe, fittings, valves, faucets, fixtures, water heaters, tools and repair parts for contractors and homeowners. Call (256) 235-9000.",
  keywords: [
    "plumbing supply Anniston AL",
    "plumbing supply store Anniston",
    "pipe and fittings Anniston",
    "plumbing parts Calhoun County",
    "water heater supply Anniston",
    "contractor plumbing supply Alabama",
    "faucets fixtures Anniston AL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCall />
        <ChatBot />
      </body>
    </html>
  );
}
