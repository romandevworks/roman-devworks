export default function Footer() {
  return (
    <footer className="mt-40 pt-20 pb-14 px-6 md:px-20 text-center text-white/60 select-none border-t border-white/10 fade">
      <div className="max-w-6xl mx-auto">

        {/* Brand */}
        <h2 className="text-3xl font-semibold text-white mb-6 tracking-wide">
          Roman DevWorks
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 text-white/60 mb-12 text-lg">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/bots" className="hover:text-white transition">Bots</a>
          <a href="/projects" className="hover:text-white transition">Projects</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Contact */}
        <div className="space-y-1 mb-12">
          <p>
            Email —{" "}
            <a href="mailto:romandevworks@proton.me" className="text-white hover:underline">
              romandevworks@proton.me
            </a>
          </p>
          <p>
            Discord —{" "}
            <a
              href="https://discord.com/users/1388535675921502349"
              className="text-white hover:underline"
            >
              @RomanDevWorks
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Copyright */}
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Roman DevWorks — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
