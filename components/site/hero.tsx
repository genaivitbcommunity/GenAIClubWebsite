export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 relative border-b border-[color:var(--border)] bg-background py-24 sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_2%_0%,rgba(245,182,66,0.28),transparent_28%)]" />
      <div className="container-wrap relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold leading-tight text-foreground sm:text-7xl">
            Welcome to the
            <br />
            <span className="text-brand">Generative AI</span> Club
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl text-muted">
            A community of passionate students exploring artificial intelligence,
            machine learning and future of generative technology.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#members"
              className="rounded-xl bg-brand px-6 py-2 text-1.5xl font-medium text-brand-foreground transition hover:bg-brand-strong"
            >
              Meet our members -&gt;
            </a>
            <a
              href="/projects"
              className="rounded-xl border border-brand/70 px-7 py-2 text-1.5xl font-medium text-foreground transition hover:border-brand hover:text-brand"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
