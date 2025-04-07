import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portafolio",
  description: "This was made so fast, sorry for that!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="m-8 md:mx-16 md:mb-16 xl:mx-32 xl:mb-32 rounded-xl border border-black/10 shadow-xl min-h-screen p-4 md:p-8 xl:p-16">
          {children}
        </div>
      </body>
    </html>
  );
}
