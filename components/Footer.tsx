"use client";

import Link from "next/link";
import { FaDiscord, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900/70 mt-24 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Logo / tagline */}
          <div>
            <h2 className="text-2xl font-bold">
              Roman<span className="text-white/60">DevWorks</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-xs">
              Discord bots and digital automation built with performance and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2 text-sm font-medium">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/bots" className="hover:text-white transition">Bots</Link>
            <Link href="/projects" className="hover:text-white transition">Projects</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-2xl">
            <Link href="https://discord.com" target="_blank" className="hover:text-white/70 transition">
              <FaDiscord />
            </Link>
            <Link href="https://github.com/romandevworks" target="_blank" className="hover:text-white/70 transition">
              <FaGithub />
            </Link>
            <Link href="mailto:romandevworks@proton.me" className="hover:text-white/70 transition">
              <FaEnvelope />
            </Link>
          </div>
        </div>

        {/* Line */}
        <div className="border-t border-neutral-900/70 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Roman DevWorks — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
