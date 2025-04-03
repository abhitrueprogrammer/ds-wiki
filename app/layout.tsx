import type { Metadata } from "next";
import { Geist, Geist_Mono, Nova_Cut } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { Toaster } from "react-hot-toast";

const novaCut = Nova_Cut({
  variable: "--font-nova-cut",
  weight: "400", // Nova Cut only has one weight
  subsets: ["latin"],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dark Souls Lore API",
  description: "We make a get endpoint on /api/lore that allow free access to data about dark souls (title, description and type) so that people can use it to either analyse it, show it in their custom UI, get items, people etc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${novaCut.variable} dark antialiased`}
      >
        <Toaster/>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
