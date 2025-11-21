import AnimatedSection from "../../components/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "Projects • Roman DevWorks",
  description: "Showcase of bots, software & digital builds by Roman DevWorks.",
};

const projects = [
  {
    name: "Automated Server Security",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    description:
      "Advanced Discord automation for raid prevention and server safety using AI pattern detection.",
    tech: ["Node.js", "Discord API", "Redis", "Cloud Hosting"],
    github: "#",
    demo: "#",
  },
  {
    name: "Music Streaming System",
    image: "https://cdn-icons-png.flaticon.com/512/727/727240.png",
    description:
      "Low-latency audio playback from YouTube, Spotify & SoundCloud with queue, autoplay & lyrics.",
    tech: ["JavaScript", "Lavalink", "YouTube API", "Spotify API"],
    github: "#",
    demo: "#",
  },
  {
    name: "Digital Economy Engine",
    image: "https://cdn-icons-png.flaticon.com/512/2171/2171990.png",
    description:
      "Virtual rewards system with currency, jobs, trading, XP, leaderboards & full persistent data.",
    tech: ["TypeScript", "MongoDB", "REST API", "WebSockets"],
    github: "#",
    demo: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-28 pb-28 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-extrabold text-center mb-4">Projects</h1>
      <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
        A collection of software and automation built with precision, scalability, and clean design.
      </p>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-xl p-6 transition"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-20 h-20 object-contain opacity-90"
                />
              </div>

              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-neutral-800 text-gray-300 text-xs px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Link
                  href={project.github}
                  className="px-5 py-2 bg-white text-black font-semibold rounded-md hover:bg-neutral-200 transition"
                >
                  GitHub
                </Link>
                <Link
                  href={project.demo}
                  className="px-5 py-2 border border-neutral-500 rounded-md font-semibold hover:border-neutral-300 transition"
                >
                  Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
