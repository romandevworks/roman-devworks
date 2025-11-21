import Reveal from "../../components/Reveal";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 select-none">

      {/* Header */}
      <section className="text-center mb-20 relative">
        <div className="spotlight"></div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 fade">
          Contact
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg fade">
          If you want to discuss a bot, a project, or just ask something — I'm always open.
        </p>
      </section>

      {/* Contact Options */}
      <Reveal>
        <section className="max-w-3xl mx-auto text-center space-y-10">

          {/* Email */}
          <div className="glass p-8">
            <h2 className="text-2xl font-semibold mb-3">Email</h2>
            <p className="text-white/60 mb-6">
              I usually reply within 24 hours — faster if it's about a build request.
            </p>
            <a
              href="mailto:romandevworks@proton.me"
              className="button-primary inline-block"
            >
              romandevworks@proton.me
            </a>
          </div>

          {/* Discord */}
          <div className="glass p-8">
            <h2 className="text-2xl font-semibold mb-3">Discord</h2>
            <p className="text-white/60 mb-6">
              Best for fast questions or direct conversation.
            </p>
            <a
              href="https://discord.com/users/1388535675921502349"
              className="button-secondary inline-block"
            >
              @RomanDevWorks
            </a>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section className="text-center mt-32 max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Whether you’re a server owner, a community manager, or another dev —
            if you have an idea, I’m interested.
          </p>

          <a href="/projects" className="button-primary">
            View My Work
          </a>
        </section>
      </Reveal>
    </main>
  );
}
