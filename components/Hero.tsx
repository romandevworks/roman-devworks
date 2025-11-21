"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-24 px-6">
      {/* Background radial gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/5 via-white/2 to-transparent blur-3xl opacity-30" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-5xl"
      >
        Developer Studio for Communities, Creators, and Businesses
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-300 text-lg mt-6 max-w-2xl"
      >
        Crafting Discord bots, automations, and digital tools that actually work — built with precision, reliability, and performance.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="flex gap-4 mt-10 flex-wrap justify-center"
      >
        <Link
          href="/bots"
          className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition"
        >
          Invite Bots
        </Link>

        <Link
          href="/projects"
          className="px-6 py-3 border border-gray-500 hover:border-gray-300 rounded-lg font-semibold transition"
        >
          View Projects
        </Link>
      </motion.div>
    </section>
  );
}
