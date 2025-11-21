"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Bots", href: "/bots" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full border-b border-neutral-900/70 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo / brand text */}
        <Link href="/" className="text-xl font-bold tracking-wide hover:opacity-80 transition">
          Roman<span className="text-white/60">DevWorks</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group transition"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-200 group-hover:w-full"/>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-5 border-t border-neutral-900/70 bg-black/90">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium py-1 transition hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
