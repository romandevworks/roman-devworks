import Reveal from "../../components/Reveal";

export default function BotsPage() {
  return (
    <main className="pt-32 pb-24 select-none">

      {/* Header */}
      <section className="text-center mb-20 relative">
        <div className="spotlight"></div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 fade">
          Discord Bots — Reinvented
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg fade">
          Automation built for communities that want more power, more control,
          and fewer headaches.
        </p>
      </section>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* Moderation Bot */}
        <Reveal>
          <div className="glass p-8 text-center">
            <div className="text-7xl md:text-8xl mb-6 icon-float icon-hover-glow icon-tilt">⚡</div>
            <h3 className="text-2xl font-semibold mb-2">Moderation Bot</h3>
            <p className="text-white/60 mb-6">
              Auto-moderation, logs, anti-raid & staff tools —
              stability without micromanaging.
            </p>

            <div className="text-sm text-white/50 mb-6 space-y-1">
              <p className="mb-1">Example Commands</p>
              <code className="block text-white/80">/ban @user</code>
              <code className="block text-white/80">/mute @user 10m</code>
              <code className="block text-white/80">/warnings @user</code>
            </div>

            <div className="flex gap-3 justify-center flex-wrap">
              <button className="button-primary">Invite</button>
              <button className="button-secondary">View Docs</button>
            </div>
          </div>
        </Reveal>

        {/* Music Bot */}
        <Reveal>
          <div className="glass p-8 text-center">
            <div className="text-7xl md:text-8xl mb-6 icon-float icon-hover-glow icon-tilt">🎧</div>
            <h3 className="text-2xl font-semibold mb-2">Music Bot</h3>
            <p className="text-white/60 mb-6">
              Lag-free playback from YouTube, Spotify & SoundCloud —
              your queue will finally sound clean.
            </p>

            <div className="text-sm text-white/50 mb-6 space-y-1">
              <p className="mb-1">Example Commands</p>
              <code className="block text-white/80">/play song name</code>
              <code className="block text-white/80">/queue</code>
              <code className="block text-white/80">/skip</code>
            </div>

            <div className="flex gap-3 justify-center flex-wrap">
              <button className="button-primary">Invite</button>
              <button className="button-secondary">View Docs</button>
            </div>
          </div>
        </Reveal>

        {/* Economy Bot */}
        <Reveal>
          <div className="glass p-8 text-center">
            <div className="text-7xl md:text-8xl mb-6 icon-float icon-hover-glow icon-tilt">💰</div>
            <h3 className="text-2xl font-semibold mb-2">Economy Bot</h3>
            <p className="text-white/60 mb-6">
              Currency system, jobs, items, shops & leaderboards —
              flex responsibly.
            </p>

            <div className="text-sm text-white/50 mb-6 space-y-1">
              <p className="mb-1">Example Commands</p>
              <code className="block text-white/80">/work</code>
              <code className="block text-white/80">/inventory</code>
              <code className="block text-white/80">/daily</code>
            </div>

            <div className="flex gap-3 justify-center flex-wrap">
              <button className="button-primary">Invite</button>
              <button className="button-secondary">View Docs</button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Custom Bot CTA */}
      <Reveal>
        <section className="text-center mt-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Need Something Custom?</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Want a bot that does something totally unique?
            Dashboards, automation, games — if it’s interesting,
            I’ll build it.
          </p>

          <a href="/contact" className="button-primary">Request a Custom Bot</a>
        </section>
      </Reveal>
    </main>
  );
}
