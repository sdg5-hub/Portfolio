"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Floating side nav / HUD section indicator.
 *
 * Fixed on the right edge (desktop only). Tracks the nearest section in view
 * and becomes the persistent "you are here" marker. Hovering any entry
 * reveals its label with a smooth spring.
 */

const NAV = [
  { id: "hero", label: "00 · entry" },
  { id: "about", label: "01 · identity" },
  { id: "projects", label: "02 · flagship" },
  { id: "skills", label: "03 · stack" },
  { id: "pages", label: "04 · pages" },
  { id: "systems", label: "05 · systems" },
  { id: "timeline", label: "06 · log" },
  { id: "dashboard", label: "07 · telemetry" },
  { id: "philosophy", label: "08 · philosophy" },
  { id: "personal", label: "09 · dimension" },
  { id: "contact", label: "10 · signal" },
];

export function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigator"
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    >
      <ul className="flex flex-col items-end gap-3">
        {NAV.map((n) => {
          const isActive = active === n.id;
          return (
            <li key={n.id} className="pointer-events-auto">
              <a
                href={`#${n.id}`}
                className="group flex items-center gap-3"
                aria-current={isActive ? "true" : undefined}
              >
                <AnimatePresence>
                  <motion.span
                    key={isActive ? "active" : "idle"}
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                      "rounded-full border border-white/10 bg-ink-900/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.26em] text-bone-200 backdrop-blur opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      isActive && "opacity-100 text-signal border-signal/30"
                    )}
                  >
                    {n.label}
                  </motion.span>
                </AnimatePresence>
                <span
                  className={cn(
                    "block h-[1px] transition-all duration-500",
                    isActive
                      ? "w-7 bg-signal shadow-[0_0_6px_rgba(125,249,255,0.8)]"
                      : "w-3 bg-white/30 group-hover:w-5 group-hover:bg-white/60"
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
