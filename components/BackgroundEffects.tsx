"use client";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* floating ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.12, scale: 1.1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-[15%] left-[20%] w-[650px] h-[650px] rounded-full border border-neutral-700/40 blur-[2px]"
      />

      {/* neon glow streak */}
      <motion.div
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: "120%", opacity: 0.25 }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute top-1/3 w-[900px] h-[220px] bg-white/5 blur-[90px] rotate-[18deg]"
      />

      {/* soft radial center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
    </div>
  );
}