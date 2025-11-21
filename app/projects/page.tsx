import Reveal from "../../components/Reveal";

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-24 select-none">

      {/* Header */}
      <section className="text-center mb-20 relative">
        <div className="spotlight"></div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 fade">
          Projects
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg fade">
          Everything here started as an experiment — then turned into something worth building.
        </p>
      </section>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* Dashboard */}
        <Reveal>
          <div className="glass p-8 text-center">
            <div className="text-7xl md:text-8xl mb-6 icon-float icon-hover-glow icon-tilt">🖥️</div>
            <h2 className="text-2xl font-semibold mb-3">Bot Dashboard (coming soon)</h2>
            <p className="text-white/60 mb-6">
              Web panel for controlling bots — logs, settings, roles, permissions and live metrics.
              Still in the lab… but already looking 🔥.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <button className="button-secondary">Preview</button>
              <button className="button-secondary">Source Code</button>
            </div>
          </div>
        </Reveal>

        {/* API Wrapper */}
        <Reveal>
          <div className="glass p-8 text-center">
            <div className="text-7xl md:text-8xl mb-6 icon-float icon-hover-glow icon-tilt">🔗</div>
            <h2 className="text-2xl font-semibold mb-3">Discord Utilities Library</h2>
            <p className="text-white/60 mb-6">
              A TypeScript library that handles slash commands, cooldowns,
              event routing & permissions — because boilerplate kills creativity.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <button className="button-secondary">NPM Page</button>
              <button className="button-secondary">Docs</button>
            </div>
          </div>
        </Reveal>

        {/* Automation Toolkit */}
        <Reveal>
          <div className="glass p-8 text-center">
            <div className="text-7xl md:text-8xl mb-6 icon-float icon-hover-glow icon-tilt">⚙️</div>
            <h2 className="text-2xl font-semibold mb-3">Auto-Deploy Toolkit</h2>
            <p className="text-white/60 mb-6">
              Push code → updates slash commands → redeploy container —
              *all automated.* Saves time. Prevents headaches.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <button className="button-secondary">Download</button>
              <button className="button-secondary">Docs</button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Closing Message */}
      <Reveal>
        <section className="text-center mt-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            More on the Way
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            I build whatever sounds fun — and every project teaches me something
            that shows up in the next one.
          </p>

          <a href="/" className="button-primary">
            Back to Home
          </a>
        </section>
      </Reveal>
    </main>
  );
}
