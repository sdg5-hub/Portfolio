"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { dashboardMetrics, interests } from "@/lib/content";
import { GitHubActivity } from "@/components/sections/github-activity";

/**
 * Dashboard / Live Signal.
 *
 * A small, deliberate control-center moment. Four cells:
 *   - Metric quad (large numbers, counting up on reveal)
 *   - Radial "focus" dial
 *   - Live GitHub activity from @sdg5-hub
 *   - Interests list (quiet, typographic)
 *
 * GitHub activity is pulled from the public @sdg5-hub API so the signal panel
 * points at the real account instead of a hand-drawn activity pattern.
 */
export function Dashboard() {
  return (
    <section id="dashboard" className="relative py-32 md:py-48">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="06"
          kicker="Telemetry · Signal"
          title="A personal control center."
          subtitle="A snapshot of the inputs, outputs, and shape of how I spend my time. No vanity metrics — just the ones I actually care about."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Metric quad */}
          <Panel className="md:col-span-8" title="Metrics · Live">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/5 bg-white/5 md:grid-cols-4">
              {dashboardMetrics.map((m, i) => (
                <MetricCell key={m.label} metric={m} index={i} />
              ))}
            </div>
          </Panel>

          {/* Focus dial */}
          <Panel className="md:col-span-4" title="Focus · Q2">
            <FocusDial />
          </Panel>

          {/* GitHub activity */}
          <Panel className="md:col-span-7" title="GitHub · @sdg5-hub">
            <GitHubActivity />
          </Panel>

          {/* Interests */}
          <Panel className="md:col-span-5" title="Top Interests">
            <div className="space-y-2.5">
              {interests.map((int, i) => (
                <motion.div
                  key={int}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  className="group flex items-center justify-between border-b border-white/5 pb-2.5 text-[15px] text-bone-200 last:border-0"
                >
                  <span>{int}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-500 transition-colors group-hover:text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}

function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/50 p-6 backdrop-blur ${className}`}
    >
      <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.26em] text-bone-400">
        <span>{title}</span>
        <span className="flex items-center gap-2 text-signal">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal shadow-[0_0_8px_rgba(125,249,255,0.8)]" />
          live
        </span>
      </div>
      {children}
    </motion.div>
  );
}

function MetricCell({
  metric,
  index,
}: {
  metric: (typeof dashboardMetrics)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState("00");

  useEffect(() => {
    if (!inView) return;
    const target = metric.value;
    // If value contains non-digits (∞, etc.), just reveal it.
    if (!/^\d+$/.test(target)) {
      const t = setTimeout(() => setValue(target), 200);
      return () => clearTimeout(t);
    }
    const end = parseInt(target, 10);
    const duration = 1100 + index * 120;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      const n = Math.round(eased * end);
      setValue(String(n).padStart(target.length, "0"));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, metric.value, index]);

  return (
    <div
      ref={ref}
      className="relative bg-ink-900/70 p-5 transition hover:bg-ink-800/80"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-400">
        {metric.label}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-sans text-4xl font-medium tracking-tight text-bone-50 md:text-5xl">
          {value}
        </span>
        <span className="font-mono text-sm text-signal">{metric.unit}</span>
      </div>
    </div>
  );
}

function FocusDial() {
  // Static but intentionally chosen: 72% focus on "build"
  const pct = 72;
  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <motion.svg
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        viewBox="0 0 140 140"
        className="h-40 w-40"
      >
        <circle
          cx="70"
          cy="70"
          r="52"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          cx="70"
          cy="70"
          r="52"
          fill="none"
          stroke="#7DF9FF"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeLinecap="round"
          transform="rotate(-90 70 70)"
          style={{ filter: "drop-shadow(0 0 6px rgba(125,249,255,0.6))" }}
        />
        <text
          x="70"
          y="68"
          textAnchor="middle"
          fontSize="28"
          fontFamily="Inter, sans-serif"
          fontWeight="500"
          fill="#FAFAF7"
          letterSpacing="-1"
        >
          {pct}%
        </text>
        <text
          x="70"
          y="88"
          textAnchor="middle"
          fontSize="8"
          fontFamily="monospace"
          fill="#7DF9FF"
          letterSpacing="3"
        >
          BUILD MODE
        </text>
      </motion.svg>
      <div className="mt-2 space-y-1 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-bone-400">
        <div>read · study · 18%</div>
        <div>write · publish · 10%</div>
      </div>
    </div>
  );
}
