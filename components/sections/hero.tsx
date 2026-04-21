"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type Variants,
} from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { StatusPill } from "@/components/ui/status-pill";
import { identity, profileLinks } from "@/lib/content";

/**
 * Hero.
 *
 * The first thing anyone sees. It has to do three things at once:
 *  1) Establish identity (name, role) without sounding like a résumé.
 *  2) Plant the flag (NGSP · Overall Best Hack) as signal, not boasting.
 *  3) Communicate taste — weight, space, restraint.
 *
 * Motion design:
 *   - Words enter with a staggered rise — cinematic, not bouncy.
 *   - The whole hero follows the cursor with a tiny, damped parallax offset.
 *   - Scroll moves the hero up slightly as you leave — it earns the space.
 *   - A thin system rail at the bottom reinforces "control room."
 */
export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Cursor parallax — tiny, expensive-feeling offsets.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 80, damping: 22 });
  const smy = useSpring(my, { stiffness: 80, damping: 22 });
  const tx = useTransform(smx, [-1, 1], [-10, 10]);
  const ty = useTransform(smy, [-1, 1], [-8, 8]);
  const tx2 = useTransform(smx, [-1, 1], [14, -14]);
  const ty2 = useTransform(smy, [-1, 1], [10, -10]);

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set((e.clientX / w) * 2 - 1);
      my.set((e.clientY / h) * 2 - 1);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, [mx, my]);

  // Scroll-out lift
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Stagger curve for the headline words.
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };
  const word: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      {/* Ambient background — soft signal glow and parallax crosshair. */}
      <motion.div
        aria-hidden
        style={{ x: tx2, y: ty2 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-crosshair opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse at 50% 45%, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 45%, black 20%, transparent 75%)",
            background: "rgba(0,0,0,0.7)",
          }}
        />
      </motion.div>

      {/* Soft cyan aurora behind name. */}
      <motion.div
        aria-hidden
        style={{ x: tx, y: ty }}
        className="pointer-events-none absolute left-1/2 top-[52%] -z-10 h-[75vh] w-[110vw] max-w-[1400px] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(125,249,255,0.18) 0%, rgba(125,249,255,0.04) 35%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      <div className="noise" />

      {/* Top rail — HUD framing. */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-bone-300">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm border border-white/15 text-signal">
            ◈
          </span>
          <span>S · GILANI</span>
          <span className="text-bone-500">/</span>
          <span className="text-bone-400">v2026.04</span>
        </div>
        <nav className="hidden items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-400 md:flex">
          <a href={profileLinks.github} target="_blank" rel="noreferrer" className="transition hover:text-signal">
            GitHub
          </a>
          <a href="/gallery" className="transition hover:text-signal">
            Gallery
          </a>
          <a href="/blog" className="transition hover:text-signal">
            Blog
          </a>
          <a href="/credentials" className="transition hover:text-signal">
            Credentials
          </a>
        </nav>
      </motion.header>

      {/* Main content */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-24 pt-16 md:px-10 md:pt-20"
      >
        {/* Kicker row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <StatusPill tone="ember">
            Overall Best Hack · NGSP
          </StatusPill>
          <StatusPill tone="signal" pulse>
            Best UI/UX · MedTrack
          </StatusPill>
          <StatusPill tone="bone" pulse={false}>
            GitHub · @sdg5-hub
          </StatusPill>
        </motion.div>

        {/* Display headline — staggered word rise */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={container}
          aria-label={`${identity.name} — builder and systems thinker`}
          className="text-display-xl font-medium tracking-tightest text-bone-50"
        >
          <span className="block overflow-hidden">
            <motion.span variants={word} className="block">
              Saiyid
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={word} className="block">
              Gilani<span className="text-signal">.</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={word}
              className="block font-serif italic text-bone-300"
              style={{ fontSize: "0.5em", lineHeight: 1, marginTop: "0.4em" }}
            >
              — builds systems that earn their trust.
            </motion.span>
          </span>
        </motion.h1>

        {/* Supporting paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-10 grid gap-8 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <p className="max-w-xl text-pretty text-base leading-relaxed text-bone-300 md:text-lg">
              CS &amp; EE at Drexel. I build end-to-end systems where the
              stakes are real: privacy-preserving clinical AI, local-first
              health apps, sustainability tooling, and software that makes its
              failures legible before they matter.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm text-bone-50 backdrop-blur transition hover:border-signal/40 hover:bg-signal/10"
              >
                <span>See the flagship</span>
                <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120px 60px at center, rgba(125,249,255,0.18), transparent 60%)",
                  }}
                />
              </a>
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-bone-300 transition hover:text-bone-50"
              >
                <Sparkles className="h-3.5 w-3.5 text-signal" />
                Build with me
              </a>
            </div>
          </div>

          {/* Right rail — quick stats, reads as HUD. */}
          <div className="md:col-span-5 md:pl-8">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] md:grid-cols-2">
              {[
                { k: "AWARD", v: "Overall Best Hack" },
                { k: "PROJECT", v: "NGSP" },
                { k: "UI/UX", v: "MedTrack" },
                { k: "PROFILE", v: "@sdg5-hub" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="bg-ink-900/60 p-5 backdrop-blur transition hover:bg-ink-800/70"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-400">
                    {s.k}
                  </div>
                  <div className="mt-2 text-base text-bone-50">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-bone-500">
              <span className="h-px flex-1 bg-white/10" />
              <span>telemetry · active</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom HUD rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative z-10 mx-6 mb-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.26em] text-bone-400 md:mx-10"
      >
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal shadow-[0_0_8px_rgba(125,249,255,0.8)]" />
          <span>scroll · engage</span>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <span>lat · 39.9526°N</span>
          <span className="h-3 w-px bg-white/15" />
          <span>lon · 75.1652°W</span>
          <span className="h-3 w-px bg-white/15" />
          <span className="text-bone-300">philadelphia</span>
        </div>
        <div className="flex items-center gap-2 text-signal">
          <span>◈</span>
          <span>ready</span>
        </div>
      </motion.div>
    </section>
  );
}
