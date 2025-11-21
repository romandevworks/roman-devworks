import AnimatedSection from "../../components/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "Bots • Roman DevWorks",
  description: "Custom Discord bots built with performance and performance.",
};

const bots = [
  {
    name: "Moderation Bot",
    description:
      "Auto-moderation, raid protection, logs, AI moderation & staff tools.",
    tags: ["Moderation", "Logging", "Anti-Raid", "AI"],
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    commands: ["/ban", "/kick", "/timeout", "/warn", "/lockdown"],
    invite: "#",
  },
  {
    name: "Music Bot",
    description:
      "Lag-free playback from YouTube, Spotify & SoundCloud with queue system.",
    tags: ["Music", "Audio", "Playback"],
    image: "https://cdn-icons-png.flaticon.com/512/727/727240.png",
    commands: ["/play", "/pause", "/skip", "/queue", "/lyrics"],
    invite: "#",
  },
  {
    name: "Economy Bot",
    description:
      "Currency system, jobs, items, trading, leaderboards & full data saving.",
    tags: ["Economy", "Database", "Trading"],
    image: "https://cdn-icons-png.flaticon.com/512/2171/2171990.png",
    commands: ["/daily", "/work", "/balance", "/shop", "/inventory"],
    invite: "#",
  },
  {
    name: "Ticket Bot (Coming Soon)",
    description:
      "Ticketing system with transcripts, staff controls and automatic setup.",
    tags: ["Support", "Tickets"],
    image: "https://cdn-icons-png.flaticon.com/512/545/545705.png",
    commands: ["/new", "/close", "/panel", "/add", "/transcript"],
    invite: null,
  },
];

export default function BotsPage() {
  return (
    <main className="pt-28 pb-28 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-extrabold text-center mb-4">Discord Bots</h1>
      <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
        Discord bots engineered for performance, uptime and reliability.
      </p>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bots.map((bot, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-xl p-6 transition"
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={bot.image}
                  alt={bot.name}
                  className="w-20 h-20 object-contain opacity-90"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-2">{bot.name}</h2>
              <p className="text-gray-400 text-sm mb-4">{bot.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {bot.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-neutral-800 text-gray-300 text-xs px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Commands Preview */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                  Commands
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {bot.commands.slice(0, 5).map((cmd, i) => (
                    <li key={i}>• {cmd}</li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              {bot.invite ? (
                <Link href={bot.invite}>
                  <span className="px-5 py-2 bg-white text-black rounded-md font-semibold hover:bg-neutral-200 transition cursor-pointer block text-center">
                    Invite Bot
                  </span>
                </Link>
              ) : (
                <span className="px-5 py-2 border border-neutral-700 text-neutral-500 rounded-md font-semibold block text-center cursor-not-allowed">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
