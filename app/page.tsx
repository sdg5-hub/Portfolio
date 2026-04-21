"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "@/components/sections/loading-screen";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Pages } from "@/components/sections/pages";
import { Systems } from "@/components/sections/systems";
import { Timeline } from "@/components/sections/timeline";
import { Dashboard } from "@/components/sections/dashboard";
import { Philosophy } from "@/components/sections/philosophy";
import { Personal } from "@/components/sections/personal";
import { Contact } from "@/components/sections/contact";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { SideNav } from "@/components/ui/side-nav";

/**
 * Home.
 *
 * Orchestrates the first-visit arc:
 *   1. Loading screen (skipped on reload-thrash via session flag).
 *   2. Main app fades in as the curtain lifts.
 *
 * Section ids align with SideNav and in-page anchors.
 */
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    // Respect reduced motion; skip the boot screen entirely.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setAllowMotion(!prefersReduced);
    if (prefersReduced) {
      setLoaded(true);
      return;
    }
    // Session-scoped: show boot once per tab. Feels cinematic on first visit,
    // doesn't punish the user for coming back.
    const seen = sessionStorage.getItem("sg:booted");
    if (seen) setLoaded(true);
  }, []);

  const handleBooted = () => {
    sessionStorage.setItem("sg:booted", "1");
    setLoaded(true);
  };

  return (
    <>
      {!loaded && allowMotion && <LoadingScreen onDone={handleBooted} />}

      <AnimatePresence>
        {loaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <CursorGlow />
            <SideNav />

            <Hero />
            <About />
            <Projects />
            <Pages />
            <Systems />
            <Timeline />
            <Dashboard />
            <Philosophy />
            <Personal />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
