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
  title: "WHB Plumbing | Plumbing Repair, Installation & Supply in Anniston, AL",
  description:
    "WHB Plumbing is Anniston, AL's plumbing shop: licensed repairs, installations and service calls, plus a full supply counter — pipe, fittings, valves, faucets, fixtures, water heaters and tools. Call (256) 235-9000.",
  keywords: [
    "plumber Anniston AL",
    "plumbing repair Anniston AL",
    "water heater installation Anniston",
    "emergency plumber Calhoun County",
    "plumbing supply Anniston AL",
    "plumbing supply store Anniston",
    "pipe and fittings Anniston",
    "contractor plumbing supply Alabama",
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
