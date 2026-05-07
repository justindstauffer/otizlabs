export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(20,184,166,0.15) 0%, rgba(6,10,20,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #2dd4bf 1px, transparent 1px), linear-gradient(to bottom, #2dd4bf 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          Built for small businesses
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Software, IT, and AI —
          <br className="hidden sm:block" />
          <span className="text-teal-400"> built around your business.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">
          Otiz Labs partners with small businesses to deliver custom software,
          modern IT, and practical AI consulting — without the enterprise
          overhead.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-md bg-teal-500 px-6 py-3 text-sm font-medium text-navy-950 transition hover:bg-teal-400"
          >
            Start a conversation
          </a>
          <a
            href="#services"
            className="rounded-md border border-navy-700 px-6 py-3 text-sm font-medium text-navy-100 transition hover:border-teal-500 hover:text-teal-400"
          >
            See our services
          </a>
        </div>
      </div>
    </section>
  );
}
