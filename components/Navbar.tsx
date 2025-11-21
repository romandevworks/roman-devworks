"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Bots", href: "/bots" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },          // <-- Added About
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-neutral-900 bg-black/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <img src="/logo.png" alt="Logo" className="w-6 h-6" />
          <span>Roman<span className="text-blue-500">DevWorks</span></span>
        </Link>

        {/* Links */}
        <ul className="flex gap-7 text-sm font-medium">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition ${
                    active
                      ? "text-white font-semibold border-b-2 border-white pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
