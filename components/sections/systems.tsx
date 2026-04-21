"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { systemsThoughts } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Systems I Think About.
 *
 * Interactive card grid. Hovering a card focuses it (brighter, larger), and
 * dims its neighbors. Clicking (or tapping) pins the card open with a fuller
 * reading pane. Reads as a "console of principles" — a mental OS.
 */
export function Systems() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="systems" className="relative py-32 md:py-48">
      {/* Subtle top divider lines — HUD framing */}
      <div className="absolute left-10 right-10 top-20 h-px bg-white/10" />
      <div className="absolute left-10 right-10 top-24 h-px bg-white/5" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="04"
          kicker="Operating System · Principles"
          title="Systems I think about before I write the first line."
          subtitle="Before I commit to a design, I commit to what it refuses to do. These are the operating principles that shape every project I take seriously."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {systemsThoughts.map((t, i) => {
            const isActive = active === i;
            const isDimmed = active !== null && !isActive;
            return (
              <motion.button
                key={t.tag}
                onClick={() => setActive(isActive ? null : i)}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "group relative flex min-h-[260px] flex-col justify-between bg-ink-900/80 p-7 text-left transition-all duration-500",
                  isActive && "bg-ink-800/90",
                  isDimmed && "opacity-40"
                )}
              >
                {/* Top: tag + index */}
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.26em] text-bone-400">
                  <span
                    className={cn(
                      "transition-colors",
                      isActive ? "text-signal" : "text-bone-400"
                    )}
                  >
                    {t.tag}
                  </span>
                  <span>
                    {String(i + 1).padStart(2, "0")} / {systemsThoughts.length}
                  </span>
                </div>

                {/* Title */}
                <div className="mt-6">
                  <h3
                    className={cn(
                      "text-balance text-xl font-medium leading-tight tracking-tight text-bone-50 transition-all duration-500",
                      isActive ? "md:text-2xl" : ""
                    )}
                  >
                    {t.title}
                  </h3>
                </div>

                {/* Body — appears on focus */}
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      key="body"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 text-pretty text-[14px] leading-relaxed text-bone-300"
                    >
                      {t.body}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Bottom cue */}
                <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-bone-500">
                  <span className="flex items-center gap-2">
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-all",
                        isActive
                          ? "bg-signal shadow-[0_0_8px_rgba(125,249,255,0.8)]"
                          : "bg-bone-500"
                      )}
                    />
                    <span>{isActive ? "open" : "hover · tap"}</span>
                  </span>
                  <span
                    className={cn(
                      "transition-transform duration-500",
                      isActive && "translate-x-1 text-signal"
                    )}
                  >
                    →
                  </span>
                </div>

                {/* Corner marks — control-room feel */}
                <Corners />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Corners() {
  return (
    <>
      {[
        "left-2 top-2 border-l border-t",
        "right-2 top-2 border-r border-t",
        "bottom-2 left-2 border-b border-l",
        "bottom-2 right-2 border-b border-r",
      ].map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={cn(
            "pointer-events-none absolute h-2 w-2 border-signal/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            pos
          )}
        />
      ))}
    </>
  );
}
