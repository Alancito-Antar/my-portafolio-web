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
  title: "Alan Antar Lerner - Senior Mobile & Web Developer",
  description:
    "Senior mobile and web developer with +4 years of experience. Specializing in React Native, Android Studio (Kotlin, Java), and modern web development with React/Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-black via-gray-900 to-black`}
      >
        <Header />
        <main className="min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl min-h-[80vh] p-6 md:p-8 lg:p-12">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
