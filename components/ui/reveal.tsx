"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

/**
 * Reveal wrapper — the canonical in-view entrance used across sections.
 * Centralized so the feel is consistent: slow, confident, expensive.
 *
 * `delay` is passed through Framer's `custom` prop so each instance can be
 * staggered without redeclaring variants.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: (c: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: c, ease: [0.22, 1, 0.36, 1] },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      custom={delay}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container for list children. Each child uses `staggerChild` variants.
 */
export function StaggerGroup({
  children,
  className,
  delayChildren = 0.1,
  staggerChildren = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren, staggerChildren } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
