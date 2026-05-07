const values = [
  {
    title: "Right-sized for small business",
    body: "No enterprise bloat. Practical solutions scoped to what your business actually needs today and tomorrow.",
  },
  {
    title: "Senior expertise, hands-on",
    body: "You work directly with experienced engineers and consultants — not handed off to a junior team.",
  },
  {
    title: "Outcome-focused",
    body: "We measure success by your business results: time saved, risk reduced, revenue unlocked.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-navy-800/60 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            About Otiz Labs
          </h2>
          <p className="mt-6 text-navy-200">
            {/* TODO: replace with finalized company description */}
            Otiz Labs helps small businesses build and modernize the
            technology that powers them. We combine engineering, IT, and AI
            expertise under one roof so you have a single trusted partner
            instead of a stack of disconnected vendors.
          </p>
          <p className="mt-4 text-navy-200">
            Whether you need a custom application, reliable IT operations, or
            a clear AI strategy, we deliver work that's well-engineered,
            well-documented, and built to last.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Software Development",
              "Cloud & IT",
              "AI Strategy",
              "Small Business",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-navy-700 px-3 py-1 text-xs text-navy-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-navy-800/80 bg-navy-900/40 p-6"
            >
              <h3 className="font-semibold text-white">{v.title}</h3>
              <p className="mt-2 text-sm text-navy-200">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
