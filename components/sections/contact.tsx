"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contact, identity } from "@/lib/content";

/**
 * Contact — the final impression.
 *
 * Giant, confident type. No form. Just an invitation in the voice of someone
 * who knows what they want to build. The email is the only thing that
 * *should* feel clickable, so it gets the interactive treatment.
 */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-40 md:py-56">
      {/* Atmospheric base */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(125,249,255,0.1) 0%, transparent 55%)",
        }}
      />
      <div className="absolute inset-0 bg-crosshair opacity-40" />
      <div className="noise" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-bone-400"
        >
          <span className="text-signal">§ 10 · Open Channel</span>
          <span className="h-px flex-1 bg-white/10" />
          <span>end-of-page · ready to build</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-display-lg font-medium tracking-tightest text-balance text-bone-50"
        >
          If you are building something that has to be <span className="italic text-signal">true</span>,
          I want to hear about it.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-12 grid gap-12 md:grid-cols-12"
        >
          <div className="md:col-span-8">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex max-w-full items-baseline gap-3 text-balance text-4xl font-medium tracking-tighter text-bone-50 md:text-6xl"
            >
              <span className="relative">
                <span className="relative z-10 transition-colors group-hover:text-signal">
                  {contact.email}
                </span>
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-signal transition-transform duration-700 group-hover:scale-x-100" />
              </span>
              <ArrowUpRight className="h-8 w-8 text-bone-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal md:h-12 md:w-12" />
            </a>

            <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-bone-300 md:text-lg">
              I&rsquo;m looking for work where the stakes are real and the
              team cares about correctness more than speed of the demo. If
              that sounds like what you&rsquo;re doing, reach out.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {contact.channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-bone-200 transition hover:border-signal/40 hover:bg-signal/10 hover:text-bone-50"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
                    {c.label}
                  </span>
                  <span className="text-bone-400 group-hover:text-signal">
                    {c.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* HUD card — signoff */}
          <div className="md:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.26em] text-bone-400">
                <span>signoff · live</span>
                <span className="flex items-center gap-2 text-signal">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal shadow-[0_0_8px_rgba(125,249,255,0.8)]" />
                  ready
                </span>
              </div>
              <div className="mt-5 font-serif text-2xl italic text-bone-50">
                {identity.name}
              </div>
              <div className="mt-1 text-sm text-bone-300">{identity.role}</div>
              <div className="mt-1 text-sm text-bone-400">
                {identity.location}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-400">
                <div className="flex justify-between">
                  <span>build · </span>
                  <span className="text-bone-300">v2026.04</span>
                </div>
                <div className="mt-1 flex justify-between">
                  <span>uptime · </span>
                  <span className="text-bone-300">∞</span>
                </div>
                <div className="mt-1 flex justify-between">
                  <span>availability · </span>
                  <span className="text-signal">open</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer mark */}
        <div className="mt-24 flex flex-col items-center gap-3 border-t border-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.26em] text-bone-500 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-white/15 text-signal">
              ◈
            </span>
            <span>S · GILANI · 2026</span>
          </div>
          <div>authored, not assembled.</div>
          <div>end of transmission</div>
        </div>
      </div>
    </section>
  );
}
