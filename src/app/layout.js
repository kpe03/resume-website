import { Geist, Geist_Mono, Playfair, Lato } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Navbar from "@/components/navbar"
import Home from './home/page';

const playfair = Playfair({
  variable: "--font-playfair-sans",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

const lato = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ['100', '300', '400', '700']
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resume",
  description: "Kaitlyn Peter's resume",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <Head>
        {/* favicon */}
        <link rel="icon" href="./favicon.ico" />
      </Head>
        
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <>
      {children}
      </>
        
      </body>
    </html>
  );
}
