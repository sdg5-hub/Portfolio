"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { teslaQuote } from "@/lib/content";

/**
 * Philosophy section — the deliberate pause.
 *
 * Everything on this page up to now has been high-density signal. Here the
 * site exhales. Big serif type on a darker plate, a faint aurora behind it,
 * and the Tesla quote sitting alone — earned, not pasted.
 *
 * The quote lifts slightly as you scroll past it, which gives the moment a
 * sense of *weight*. Don't overdo the motion; the words should carry it.
 */
export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      id="philosophy"
      className="relative overflow-hidden py-40 md:py-56"
    >
      {/* Dark plate */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(233,184,114,0.07) 0%, transparent 55%), #030305",
        }}
      />

      {/* Aurora */}
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute left-1/2 top-1/2 h-[60vh] w-[90vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      >
        <div
          className="h-full w-full opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(233,184,114,0.12) 0%, transparent 55%)",
          }}
        />
      </motion.div>

      {/* Starfield — very sparse, very quiet */}
      <div aria-hidden className="absolute inset-0">
        {[...Array(24)].map((_, i) => {
          const left = (i * 37) % 100;
          const top = (i * 53) % 100;
          const size = (i % 3) * 0.5 + 1;
          const delay = (i % 7) * 0.4;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-bone-100"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
              }}
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay,
              }}
            />
          );
        })}
      </div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-5xl px-6 md:px-10"
      >
        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-bone-400">
          <span className="h-px w-10 bg-white/20" />
          <span className="text-ember">§ 08 · Philosophy</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          {/* Opening quote mark as a typographic moment */}
          <div
            aria-hidden
            className="font-serif text-[10rem] leading-none text-ember/30 md:text-[14rem]"
          >
            &ldquo;
          </div>
          <p className="-mt-10 text-balance font-serif text-4xl leading-[1.15] tracking-tight text-bone-50 md:-mt-16 md:text-6xl lg:text-7xl">
            <span className="italic">{teslaQuote.text}</span>
          </p>
          <footer className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-ember" />
            <cite className="not-italic">
              <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-ember">
                — {teslaQuote.author}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-500">
                carried forward, not quoted
              </div>
            </cite>
          </footer>
        </motion.blockquote>

        {/* Reflection — one breath after the quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 max-w-2xl text-pretty text-lg leading-relaxed text-bone-300"
        >
          I keep this close because it is not a promise about recognition. It
          is a statement about <span className="text-bone-50">where to put your attention</span>.
          Build for the thing that will matter in ten years, not the thing
          that will be applauded next week. Most of what I care about
          engineering — trust, correctness, consequence — follows from that.
        </motion.p>
      </motion.div>
    </section>
  );
}
