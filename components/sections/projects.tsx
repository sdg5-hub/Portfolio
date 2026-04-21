"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, FileText } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { StatusPill } from "@/components/ui/status-pill";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-48">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(233,184,114,0.08), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(125,249,255,0.08), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="02"
          kicker="Featured Projects"
          title="Work built under real constraints."
          subtitle="NGSP, MedTrack, and WeaveWise each take a different high-consequence problem and turn it into a product-shaped system."
        />

        <div className="space-y-28 md:space-y-40">
          {projects.map((project, order) => (
            <ProjectShowcase key={project.slug} project={project} order={order} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectShowcase({
  project,
  order,
}: {
  project: Project;
  order: number;
}) {
  const [open, setOpen] = useState(order === 0);
  const accent = order === 0 ? "ember" : "signal";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:order-2 md:col-span-5">
          <ProjectSchematic project={project} accent={accent} />
        </div>

        <div className="md:order-1 md:col-span-7">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-bone-400">
            <span className="text-bone-300">Project {project.index}</span>
            <span className="h-px w-8 bg-white/20" />
            <span>{project.tag}</span>
          </div>

          <h3 className="mt-5 text-display-md font-medium tracking-tighter text-bone-50">
            {project.name}
          </h3>

          <div className="mt-4">
            <StatusPill tone={accent}>{project.signal}</StatusPill>
          </div>

          <p className="mt-6 text-pretty text-xl leading-snug text-bone-100 md:text-2xl">
            {project.headline}
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-400">
                Goal
              </div>
              <p className="mt-2 text-pretty text-[15px] leading-relaxed text-bone-300">
                {project.goal}
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-400">
                Focus
              </div>
              <p className="mt-2 text-pretty text-[15px] leading-relaxed text-bone-300">
                {project.focus}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => {
              const external = link.href.startsWith("http");
              const isPaper = link.href.endsWith(".pdf");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-bone-200 transition hover:border-signal/40 hover:bg-signal/10 hover:text-bone-50"
                >
                  {isPaper ? (
                    <FileText className="h-4 w-4 text-signal" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-signal transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  )}
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setOpen((value) => !value)}
            className="group/btn mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-bone-200 transition hover:border-signal/40 hover:bg-signal/10 hover:text-bone-50"
            aria-expanded={open}
          >
            <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronRight className="h-4 w-4" />
            </motion.span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
              {open ? "collapse details" : "open details"}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-8 space-y-6 rounded-xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-400">
                      What it does
                    </div>
                    <ul className="mt-3 grid gap-2 md:grid-cols-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-[15px] text-bone-200"
                        >
                          <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-signal" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-400">
                      System shape
                    </div>
                    <div className="mt-3 grid gap-4 md:grid-cols-2">
                      <p className="text-pretty text-[15px] leading-relaxed text-bone-300">
                        {project.problem}
                      </p>
                      <p className="text-pretty text-[15px] leading-relaxed text-bone-200">
                        {project.approach}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-400">
                      Why it matters
                    </div>
                    <p className="mt-3 text-pretty text-[15px] leading-relaxed text-bone-200">
                      {project.why}
                    </p>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-400">
                      Stack
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectSchematic({
  project,
  accent,
}: {
  project: Project;
  accent: "ember" | "signal";
}) {
  const accentColor = accent === "ember" ? "#E9B872" : "#7DF9FF";
  const labels = schematicLabels[project.slug];

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-6">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: `${accentColor}26` }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-bone-400">
          <span>schematic</span>
          <span style={{ color: accentColor }}>{project.slug}</span>
        </div>

        <svg viewBox="0 0 400 300" className="min-h-0 flex-1">
          <defs>
            <filter id={`glow-${project.slug}`}>
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {labels.inputs.map((label, index) => {
            const y = 64 + index * 78;
            return (
              <g key={label}>
                <motion.rect
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.16 + index * 0.08 }}
                  x="18"
                  y={y - 17}
                  width="118"
                  height="34"
                  rx="7"
                  fill="rgba(255,255,255,0.035)"
                  stroke="rgba(255,255,255,0.15)"
                />
                <text
                  x="77"
                  y={y + 4}
                  textAnchor="middle"
                  fontSize="9"
                  fontFamily="monospace"
                  fill="#A6A6A0"
                >
                  {label}
                </text>
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.08, duration: 0.8 }}
                  d={`M 136 ${y} C 170 ${y} 176 150 204 150`}
                  fill="none"
                  stroke={accentColor}
                  strokeOpacity="0.6"
                  strokeWidth="1.2"
                />
              </g>
            );
          })}

          <motion.circle
            initial={{ opacity: 0, scale: 0.82 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.85, duration: 0.6 }}
            cx="214"
            cy="150"
            r="42"
            fill="rgba(0,0,0,0.82)"
            stroke={accentColor}
            strokeWidth="1.4"
            filter={`url(#glow-${project.slug})`}
          />
          <text
            x="214"
            y="147"
            textAnchor="middle"
            fontSize="10"
            fontFamily="monospace"
            fill="#FAFAF7"
          >
            {labels.core}
          </text>
          <text
            x="214"
            y="163"
            textAnchor="middle"
            fontSize="8"
            fontFamily="monospace"
            fill={accentColor}
          >
            system core
          </text>

          {labels.outputs.map((label, index) => {
            const y = index === 0 ? 92 : 210;
            const dashed = index === 0;
            return (
              <g key={label}>
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.05 + index * 0.16, duration: 0.8 }}
                  d={`M 254 ${dashed ? 132 : 168} C 288 ${dashed ? 118 : 184} 296 ${y} 322 ${y}`}
                  fill="none"
                  stroke={accentColor}
                  strokeDasharray={dashed ? "4 3" : undefined}
                  strokeOpacity={dashed ? "0.75" : "0.9"}
                  strokeWidth={dashed ? "1.2" : "1.4"}
                />
                <rect
                  x="292"
                  y={y - 17}
                  width="90"
                  height="34"
                  rx="7"
                  fill={dashed ? "rgba(255,255,255,0.035)" : accentColor}
                  fillOpacity={dashed ? undefined : "0.12"}
                  stroke={dashed ? "rgba(255,255,255,0.15)" : accentColor}
                  strokeOpacity={dashed ? undefined : "0.6"}
                />
                <text
                  x="337"
                  y={y + 4}
                  textAnchor="middle"
                  fontSize="9"
                  fontFamily="monospace"
                  fill={dashed ? "#A6A6A0" : "#FAFAF7"}
                >
                  {label}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-bone-500">
          <span>{labels.caption}</span>
          <span>rev · 2026</span>
        </div>
      </div>
    </div>
  );
}

const schematicLabels = {
  ngsp: {
    inputs: ["TRIAL TEXT", "SAFE HARBOR", "UTILITY TEST"],
    core: "PRIVACY GATE",
    outputs: ["LOCAL LLM", "CLOUD SAFE"],
    caption: "strip · route · transform",
  },
  medtrack: {
    inputs: ["MEDS", "SCHEDULES", "DOSE LOGS"],
    core: "LOCAL DB",
    outputs: ["REMINDERS", "ADHERENCE"],
    caption: "local-first · reminders",
  },
  weavewise: {
    inputs: ["TAG PHOTO", "OCR TEXT", "WARDROBE"],
    core: "EXTRACT",
    outputs: ["IMPACT", "SUMMARY"],
    caption: "read · enrich · compare",
  },
} as const;
