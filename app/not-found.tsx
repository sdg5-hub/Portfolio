import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-lg">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-signal">
          signal lost · 404
        </div>
        <h1 className="mt-4 text-5xl font-medium tracking-tighter text-bone-50">
          No route here.
        </h1>
        <p className="mt-4 text-bone-300">
          The transmission you were looking for is not available. Return to the
          hub and keep moving.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm text-bone-50 transition hover:border-signal/40 hover:bg-signal/10"
        >
          ← return to home
        </Link>
      </div>
    </main>
  );
}
