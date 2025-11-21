import Reveal from "../../components/Reveal";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 select-none">

      {/* Header */}
      <section className="text-center mb-20 relative">
        <div className="spotlight"></div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 fade">
          About Me
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg fade">
          A little insight into who’s behind Roman DevWorks.
        </p>
      </section>

      {/* Bio */}
      <Reveal>
        <section className="max-w-3xl mx-auto text-center mb-24 px-2">
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            I'm Roman — a 16-year-old developer who builds Discord bots and web applications.  
            I’m not from a company, bootcamp, or tech school — I started learning because I
            wanted to make something real, something that actually worked.
          </p>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            What began as small hobby projects grew into a passion for automation,
            community tools and clean, reliable software. Every new bot or project becomes
            a lesson, a challenge, and a way to get better than I was last month.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            I’m still learning, still improving, and still having fun — and the goal is
            simple: build things that feel good to use.
          </p>
        </section>
      </Reveal>

      {/* Skills */}
      <Reveal>
        <section className="max-w-5xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
            What I Work With
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              "TypeScript",
              "Next.js",
              "Node.js",
              "Discord.js",
              "Tailwind",
              "MongoDB",
              "REST APIs",
              "UI/UX Design",
            ].map((item) => (
              <div
                key={item}
                className="glass py-4 text-white/80 font-semibold text-lg hover:text-white transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Last section */}
      <Reveal>
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What’s Next?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Bigger projects, cleaner systems, more collaboration, and more things I never
            thought I could build. This is only the beginning — and there’s a lot more coming.
          </p>
          <a href="/projects" className="button-primary">
            View My Work
          </a>
        </section>
      </Reveal>
    </main>
  );
}
