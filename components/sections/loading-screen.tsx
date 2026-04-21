"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Cinematic boot sequence.
 *
 * Not a "please wait" spinner. A short, deliberate introduction — enough time
 * to establish tone (dark, technical, premium) and hand off to the hero with
 * momentum. Target ~2.4s total; keep the user's attention, never waste it.
 *
 * The sequence:
 *  [0.0s]  grid wakes in
 *  [0.4s]  "SG" initials pulse
 *  [0.9s]  system log lines stream
 *  [1.8s]  "SIGNAL ACQUIRED" — accent flash
 *  [2.3s]  curtain sweeps up into hero
 */

const BOOT_LINES = [
  "initializing runtime…",
  "linking subsystems · [ok]",
  "loading identity · saiyid.gilani",
  "acquiring signal · hackprinceton/2026 · 1st",
  "handshake complete",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 350 + i * 260));
    });
    timers.push(setTimeout(() => setDone(true), 2400));
    timers.push(setTimeout(() => onDone(), 2900));
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="boot"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
        >
          {/* Grid wake-in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-crosshair"
            style={{
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            }}
          />
          {/* Scanline — a hint of CRT, never more. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-signal/10 to-transparent animate-scan"
          />

          {/* Central stack */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Initials mark */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-full bg-signal/10 blur-2xl animate-pulse-soft" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-ink-900/60 backdrop-blur">
                <span className="font-serif text-5xl italic text-bone-50">
                  SG
                </span>
                {/* Ring */}
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-dashed border-signal/40"
                />
              </div>
            </motion.div>

            {/* Boot log */}
            <div className="w-[320px] font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400 md:w-[420px]">
              {BOOT_LINES.map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{
                    opacity: i < step ? 1 : 0,
                    x: i < step ? 0 : -6,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between border-b border-white/5 py-1.5"
                >
                  <span>
                    <span className="text-signal">›</span> {line}
                  </span>
                  {i < step && (
                    <span className="text-signal/70">
                      {(0.14 + i * 0.07).toFixed(2)}s
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Final signal */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{
                opacity: step >= BOOT_LINES.length ? 1 : 0,
                y: step >= BOOT_LINES.length ? 0 : 6,
              }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-signal"
            >
              ◈ signal acquired
            </motion.div>
          </div>

          {/* Curtain sweep out */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: done ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-x-0 bottom-0 top-0 origin-bottom bg-ink-950"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
