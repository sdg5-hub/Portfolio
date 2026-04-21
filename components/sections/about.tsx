"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

/**
 * About — not a biography. A mindset surface.
 *
 * The left column is voice (prose, measured, first-person).
 * The right column is a small schematic — a diagram of how I actually think
 * about building things. It reads as "here is the shape of my mind," not
 * "here is my hobby list."
 */
export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="01"
          kicker="Identity · Operator"
          title="I build at the places where software starts to matter."
          subtitle="Privacy, safety, usability, and trust are not afterthoughts in the projects I care about. They are the product surface."
        />

        <div className="grid gap-16 md:grid-cols-12">
          {/* Prose */}
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-bone-200 md:text-xl">
                I study Computer Science and Electrical Engineering because I
                wanted to understand the whole stack — from the silicon up to
                the product. The best decisions I have made as an engineer
                came from refusing to treat the layers below me as magic.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-pretty text-base leading-relaxed text-bone-300 md:text-lg">
                I am drawn to systems where the cost of failure is not
                hypothetical: medicine, finance, safety, anything where the
                wrong answer reaches a person. In those domains, I do not
                believe AI earns authority on its own. It earns{" "}
                <span className="text-bone-50">provenance</span>. It earns{" "}
                <span className="text-bone-50">legibility</span>. It earns the
                right to explain, while something deterministic owns the
                decision and a human governs the whole loop.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 text-pretty text-base leading-relaxed text-bone-300 md:text-lg">
                I compete because it forces honest answers: under pressure,
                either your system works or it doesn&rsquo;t. NGSP won the
                Overall Best Hack Award at the Princeton Hackathon because the
                privacy layer was not just a demo trick. It made a risky
                workflow feel more governable.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <blockquote className="mt-10 border-l border-signal/60 pl-6">
                <p className="font-serif text-2xl italic text-bone-100 md:text-3xl">
                  Correctness is not the target. It is the floor.
                </p>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.26em] text-bone-400">
                  — operating principle · 001
                </div>
              </blockquote>
            </Reveal>
          </div>

          {/* Schematic */}
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-6 backdrop-blur">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-bone-400">
                  <span>schematic · how i think</span>
                  <span className="text-signal">◈</span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      k: "LLM",
                      v: "Explain. Narrate. Never decide.",
                      tone: "ember",
                    },
                    {
                      k: "Deterministic core",
                      v: "Own the verdict. Be audit-ready.",
                      tone: "signal",
                    },
                    {
                      k: "Human-in-the-loop",
                      v: "Govern the system. Approve · reject · escalate.",
                      tone: "bone",
                    },
                    {
                      k: "Telemetry",
                      v: "Make failure modes legible before they matter.",
                      tone: "bone",
                    },
                  ].map((row, i) => (
                    <motion.div
                      key={row.k}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                      className="group relative overflow-hidden rounded-lg border border-white/5 bg-ink-900/60 p-4 transition hover:border-signal/30"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-[10px] uppercase tracking-[0.24em] ${
                            row.tone === "signal"
                              ? "text-signal"
                              : row.tone === "ember"
                                ? "text-ember"
                                : "text-bone-300"
                          }`}
                        >
                          {row.k}
                        </span>
                      </div>
                      <div className="mt-1.5 text-sm text-bone-200">
                        {row.v}
                      </div>
                      {/* Connecting line */}
                      {i < 3 && (
                        <div className="absolute -bottom-4 left-6 h-4 w-px bg-white/10" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
