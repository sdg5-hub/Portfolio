import Link from "next/link";
import { ArrowLeft, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { contact, identity, profileLinks } from "@/lib/content";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink-950 text-bone-100">
      <div className="absolute inset-0 bg-crosshair opacity-35" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[460px] w-[80vw] max-w-5xl -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(125,249,255,0.16), transparent 68%)",
        }}
      />
      <div className="noise" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300 transition hover:text-signal"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>

          <nav className="flex flex-wrap items-center gap-3 text-bone-400">
            <SocialLink href={profileLinks.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={profileLinks.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={profileLinks.instagram} label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={`mailto:${contact.email}`} label="Email">
              <Mail className="h-4 w-4" />
            </SocialLink>
            <a
              href={profileLinks.x}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] transition hover:border-signal/40 hover:text-signal"
            >
              X
            </a>
          </nav>
        </header>

        <section className="py-20 md:py-28">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-signal">
            {eyebrow}
          </div>
          <h1 className="mt-5 max-w-4xl text-display-lg font-medium tracking-tightest text-bone-50">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-bone-300">
            {description}
          </p>
          <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-500">
            {identity.name} · {identity.email}
          </div>
        </section>

        {children}
      </div>
    </main>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition hover:border-signal/40 hover:text-signal"
    >
      {children}
    </a>
  );
}
