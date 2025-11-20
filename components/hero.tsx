"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center mt-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold mb-6"
      >
        Developer Studio for <span className="text-brand">
          Communities, Creators,
        </span>{" "}
        and <span className="text-brand">Businesses</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
      >
        Crafting Discord bots, web applications, and digital tools with a focus on
        automation, innovation, and execution.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="flex justify-center gap-6"
      >
        <Link
          href="/bots"
          className="px-6 py-3 font-semibold rounded-lg bg-brand hover:bg-brand/80 transition"
        >
          View Bots
        </Link>

        <Link
          href="/projects"
          className="px-6 py-3 font-semibold rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          View Projects
        </Link>
      </motion.div>
    </section>
  );
}
