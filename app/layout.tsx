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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="m-8 md:m-16 xl:m-32 rounded-xl bg-gradient-to-b from-black via-zinc-900 to-zinc-800 min-h-screen p-4 md:p-8 xl:p-16">
          {children}
        </div>
      </body>
    </html>
  );
}
