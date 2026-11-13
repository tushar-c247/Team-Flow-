export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-16">
      <section className="w-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          TeamFlow
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Team task management, built one phase at a time.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          The frontend foundation is ready. The Express server is available at
          {" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
            http://localhost:4000
          </code>
          .
        </p>
      </section>
    </main>
  );
}
