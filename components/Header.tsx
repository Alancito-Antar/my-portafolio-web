"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Projects",
    href: "/",
    icon: "🚀",
  },
  {
    name: "About",
    href: "/about",
    icon: "👨‍💻",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">
                Alan Antar
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 group",
                    {
                      "bg-white/10 text-white shadow-lg":
                        pathname === link.href,
                      "text-gray-300 hover:text-white hover:bg-white/5":
                        pathname !== link.href,
                    }
                  )}
                >
                  <span className="text-base">{link.icon}</span>
                  <span>{link.name}</span>
                  {pathname === link.href && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <a
                href="mailto:alan.antarlerner@gmail.com"
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
