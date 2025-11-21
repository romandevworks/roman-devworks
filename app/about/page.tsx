import AnimatedSection from "../../components/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "About • Roman DevWorks",
  description: "Learn more about the developer behind Roman DevWorks.",
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-28 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold text-center mb-4">About Me</h1>
      <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
        The person behind Roman DevWorks — building Discord bots and digital automation with passion and consistency.
      </p>

      <AnimatedSection>
        <section className="text-gray-300 space-y-6 text-lg leading-relaxed">
          <p>
            Hey, I’m Roman. I’m a 15-year-old developer and the person behind Roman
            DevWorks. I got into coding because I wanted to make Discord bots for my
            own servers — nothing fancy, just something that actually worked and made
            things easier. Once I wrote my first command and saw it respond in chat,
            I was hooked.
          </p>

          <p>
            I didn’t learn from a school program or a teacher. I learned by messing up,
            breaking things, searching solutions, and fixing them until everything worked.
            Every new project teaches me something I didn’t know before, and that’s what I
            love about programming.
          </p>

          <p>
            Today I build bots that do way more than I expected when I started — music,
            moderation, tickets, economy systems, automation, and more. I’m not trying to
            act like a huge company. It’s literally just me, learning and improving nonstop,
            and putting real effort into everything I build.
          </p>

          <p>
            I don’t want people to use my bots because the branding looks cool. I want them
            to use them because the bots actually help, run smoothly, and make servers
            better. That’s the whole goal behind Roman DevWorks.
          </p>
        </section>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection>
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Skills & Tech</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Discord.js",
              "Next.js",
              "MongoDB",
              "REST APIs",
              "WebSockets",
              "UI/UX",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-neutral-900 border border-neutral-800 text-gray-300 text-sm px-3 py-1 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection>
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Timeline</h2>
          <div className="space-y-6 border-l border-neutral-800 pl-6">
            <div>
              <h3 className="text-xl font-semibold">2023 — Started Learning</h3>
              <p className="text-gray-400 text-sm">
                Began coding Discord bots and automation as a hobby.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2024 — First Real Projects</h3>
              <p className="text-gray-400 text-sm">
                Created music, moderation, and economy systems used by real servers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2025 — Roman DevWorks</h3>
              <p className="text-gray-400 text-sm">
                Started building bots and automation under my own developer brand.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Button */}
      <AnimatedSection>
        <section className="mt-24 text-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition"
          >
            Get in Touch
          </Link>
        </section>
      </AnimatedSection>
    </main>
  );
}
