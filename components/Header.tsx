"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Projects",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="p-4 md:p-8 flex sticky top-0 gap-x-10 items-center justify-center bg-white/80 border-b border-black/10 w-full">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx("", {
            "border-pink-200 border-b": pathname === link.href,
          })}
        >
          <p className={clsx("text-xl text-black")}>{link.name}</p>
        </Link>
      ))}
    </header>
  );
}
