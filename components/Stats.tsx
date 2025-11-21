"use client";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "Bots Built", value: "0" },
    { label: "Users Served", value: "0" },
    { label: "Projects Completed", value: "0" },
    { label: "Countries Reached", value: "0" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
          >
            <span className="text-4xl font-extrabold text-white">{stat.value}</span>
            <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
