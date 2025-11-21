"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop / Tablet Navbar */}
      <nav className="hidden md:flex justify-between items-center px-16 py-8 text-white/80 font-medium select-none">
        <div className="text-2xl font-semibold tracking-wide hover:text-white transition">
          <Link href="/">Roman DevWorks</Link>
        </div>

        <div className="flex gap-10">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/bots" className="hover:text-white transition">Bots</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex justify-between items-center px-6 py-6 text-white/80 select-none">
        <div className="text-xl font-semibold tracking-wide">
          <Link href="/">Roman DevWorks</Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl hover:text-white transition active:scale-95"
          aria-label="Toggle navigation menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden glass mx-6 mt-2 p-6 flex flex-col gap-6 text-white/80 text-lg animate-fadeDown rounded-2xl">
          <Link href="/" className="hover:text-white transition" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/bots" className="hover:text-white transition" onClick={() => setOpen(false)}>Bots</Link>
          <Link href="/projects" className="hover:text-white transition" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/about" className="hover:text-white transition" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-white transition" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
}
