"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string; // e.g. "02"
  kicker: string;
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * Shared section header. Uses index numbers (like a system log) to reinforce
 * the control-center aesthetic, and a mono kicker for signal-vs-noise.
 */
export function SectionHeader({
  index,
  kicker,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("relative mb-16 md:mb-24", className)}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-bone-400"
      >
        <span className="text-signal">§ {index}</span>
        <span className="h-px flex-1 bg-white/10" />
        <span>{kicker}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-display-md font-medium tracking-tighter text-bone-50 text-balance"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-bone-300 md:text-lg text-balance"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
