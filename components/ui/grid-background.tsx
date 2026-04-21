"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Two-layer crosshair grid with a soft vignette.
 * This is the floor of every section — deliberately barely-there.
 */
export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Large grid — additional depth */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "280px 280px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 80%)",
        }}
      />
      {/* Soft ambient signal glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[30%] h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(125,249,255,0.06) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      {/* Grain */}
      <div className="noise" />
    </div>
  );
}
