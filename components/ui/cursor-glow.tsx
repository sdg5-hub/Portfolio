"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A soft, slow, *very* subtle cursor glow.
 * Intentionally desaturated and low-opacity so it reads as ambient light,
 * not a gimmick. Springs damp the motion so it feels weighty, not twitchy.
 */
export function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 18, mass: 1.1 });
  const sy = useSpring(y, { stiffness: 60, damping: 18, mass: 1.1 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });
    };
    window.addEventListener("pointermove", handle, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handle);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, rgba(125,249,255,0.09) 0%, rgba(125,249,255,0.03) 35%, transparent 65%)",
        filter: "blur(28px)",
      }}
    />
  );
}
