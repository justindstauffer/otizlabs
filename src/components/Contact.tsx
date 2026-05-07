export default function Contact() {
  return (
    <section id="contact" className="border-t border-navy-800/60 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let's talk about your project
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-navy-200">
          Tell us what you're working on. Initial consultations are free and
          we'll respond within one business day.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:hello@otizlabs.com"
            className="group rounded-xl border border-navy-800/80 bg-navy-900/40 p-6 text-left transition hover:border-teal-500/50 hover:bg-navy-900/70"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="text-sm text-navy-300">Email us</div>
            {/* TODO: replace with real business email */}
            <div className="mt-1 font-medium text-white">
              info@otizlabs.com
            </div>
          </a>

          <a
            href="tel:+10000000000"
            className="group rounded-xl border border-navy-800/80 bg-navy-900/40 p-6 text-left transition hover:border-teal-500/50 hover:bg-navy-900/70"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <div className="text-sm text-navy-300">Call us</div>
            {/* TODO: replace with real phone number */}
            <div className="mt-1 font-medium text-white">
              904-418-9975
            </div>
          </a>
        </div>

        <div className="mt-10">
          <a
            href="mailto:hello@otizlabs.com"
            className="inline-block rounded-md bg-teal-500 px-6 py-3 text-sm font-medium text-navy-950 transition hover:bg-teal-400"
          >
            Send us a message
          </a>
        </div>
      </div>
    </section>
  );
}
