"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { timeline } from "@/lib/content";

/**
 * Timeline — framed as a "mission log," not a résumé.
 *
 * Center rail with pulsing nodes. Entries alternate sides on desktop, stack
 * on mobile. Each node draws in with a light trail so the eye follows the
 * progression naturally.
 */
export function Timeline() {
  return (
    <section id="timeline" className="relative py-32 md:py-48">
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeader
          index="06"
          kicker="Mission Log · Progression"
          title="Not a résumé. A trajectory."
          subtitle="Each entry is a decision point — the moments where a path I chose shaped the next thing I built."
        />

        <div className="relative pt-8">
          {/* Vertical rail */}
          <div
            aria-hidden
            className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-16">
            {timeline.map((entry, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={entry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid grid-cols-[48px_1fr] items-start gap-4 md:grid-cols-2 md:gap-16"
                >
                  {/* Node */}
                  <div className="absolute left-5 top-3 z-10 md:left-1/2 md:-translate-x-1/2">
                    <div className="relative flex h-3 w-3 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal/60 opacity-75" />
                      <span className="relative h-3 w-3 rounded-full bg-signal shadow-[0_0_12px_rgba(125,249,255,0.8)]" />
                    </div>
                  </div>

                  {/* Content — left or right */}
                  <div
                    className={`col-start-2 md:col-start-auto ${
                      left ? "md:text-right" : "md:col-start-2"
                    }`}
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-signal">
                      {entry.mark}
                    </div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-bone-400">
                      {entry.when}
                    </div>
                    <h4 className="mt-3 text-xl font-medium tracking-tight text-bone-50 md:text-2xl">
                      {entry.title}
                    </h4>
                    <p className="mt-3 max-w-lg text-pretty text-[15px] leading-relaxed text-bone-300 md:ml-auto">
                      {entry.body}
                    </p>
                  </div>

                  {/* Empty side on desktop */}
                  <div
                    className={`hidden md:block ${left ? "md:order-last" : ""}`}
                    aria-hidden
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
