"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatusPillProps {
  children: React.ReactNode;
  tone?: "signal" | "ember" | "bone";
  pulse?: boolean;
  className?: string;
}

const toneMap = {
  signal: {
    dot: "bg-signal shadow-[0_0_12px_rgba(125,249,255,0.8)]",
    border: "border-signal/25",
    text: "text-signal-100",
  },
  ember: {
    dot: "bg-ember shadow-[0_0_12px_rgba(233,184,114,0.7)]",
    border: "border-ember/25",
    text: "text-ember-100",
  },
  bone: {
    dot: "bg-bone-200",
    border: "border-white/10",
    text: "text-bone-200",
  },
};

/**
 * Small live-status label. "1ST OVERALL", "SIGNAL: LIVE", etc.
 * Dot pulses when `pulse` is on to read as "telemetry."
 */
export function StatusPill({
  children,
  tone = "signal",
  pulse = true,
  className,
}: StatusPillProps) {
  const t = toneMap[tone];
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] backdrop-blur",
        t.border,
        t.text,
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5 items-center justify-center">
        {pulse && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full rounded-full opacity-60",
              t.dot,
              "animate-ping"
            )}
          />
        )}
        <span className={cn("relative h-1.5 w-1.5 rounded-full", t.dot)} />
      </span>
      {children}
    </motion.div>
  );
}
