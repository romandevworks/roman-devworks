"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Bots", href: "/bots" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="flex items-center justify-between px-6 md:px-16 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Roman DevWorks Logo"
            width={42}
            height={42}
            priority
          />
          <span className="font-extrabold text-xl">Roman DevWorks</span>
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-brand transition ${
                path === link.href ? "text-brand" : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
