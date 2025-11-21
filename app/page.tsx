import Hero from "../components/Hero";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">

      {/* HERO */}
      <Hero />

      {/* FEATURED BOTS */}
      <AnimatedSection>
        <section className="w-full py-24 px-6 max-w-6xl">
          <h2 className="text-4xl font-extrabold text-center mb-4">Featured Bots</h2>
          <p className="text-gray-400 text-center mb-12">
            Custom Discord bots built for speed, stability and performance.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Moderation Bot */}
            <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-neutral-600 transition">
              <h3 className="text-2xl font-bold mb-2">Moderation Bot</h3>
              <p className="text-gray-400 mb-6">
                Auto-moderation, logs, anti-raid & staff tools for any server.
              </p>
              <div className="flex gap-3">
                <Link href="/bots">
                  <span className="px-5 py-2 bg-white text-black rounded-md font-semibold cursor-pointer">
                    Invite
                  </span>
                </Link>
                <Link href="/bots">
                  <span className="px-5 py-2 border border-neutral-500 rounded-md font-semibold cursor-pointer hover:border-neutral-300 transition">
                    Learn more
                  </span>
                </Link>
              </div>
            </div>

            {/* Music Bot */}
            <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-neutral-600 transition">
              <h3 className="text-2xl font-bold mb-2">Music Bot</h3>
              <p className="text-gray-400 mb-6">
                Smooth & lag–free playback from YouTube, Spotify & SoundCloud.
              </p>
              <div className="flex gap-3">
                <Link href="/bots">
                  <span className="px-5 py-2 bg-white text-black rounded-md font-semibold cursor-pointer">
                    Invite
                  </span>
                </Link>
                <Link href="/bots">
                  <span className="px-5 py-2 border border-neutral-500 rounded-md font-semibold cursor-pointer hover:border-neutral-300 transition">
                    Learn more
                  </span>
                </Link>
              </div>
            </div>

            {/* Economy Bot */}
            <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-neutral-600 transition">
              <h3 className="text-2xl font-bold mb-2">Economy Bot</h3>
              <p className="text-gray-400 mb-6">
                Currency system, jobs, items, leaderboards & full data saving.
              </p>
              <div className="flex gap-3">
                <Link href="/bots">
                  <span className="px-5 py-2 bg-white text-black rounded-md font-semibold cursor-pointer">
                    Invite
                  </span>
                </Link>
                <Link href="/bots">
                  <span className="px-5 py-2 border border-neutral-500 rounded-md font-semibold cursor-pointer hover:border-neutral-300 transition">
                    Learn more
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* CTA SECTION */}
      <AnimatedSection>
        <section className="py-24 px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-extrabold mb-4">Need a Custom Bot?</h2>
          <p className="text-gray-400 mb-10">
            Anti-raid, crypto integration, leveling, marketplace systems — if you can imagine it, I can code it.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition"
          >
            Contact Me
          </Link>
        </section>
      </AnimatedSection>
    </main>
  );
}
