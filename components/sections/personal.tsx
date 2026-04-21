"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

/**
 * Personal dimension — restrained.
 *
 * No "fun facts." Three short notes that reveal something beyond the résumé
 * without tipping into cliché. Typographic layout — it should feel like
 * margin notes in a serious notebook.
 */

const notes = [
  {
    tag: "COMPETITION",
    title: "Pressure is a feature.",
    body: "I do my best work when there is a scoreboard. Hackathons, interviews, deadlines — the clarity of a real constraint makes me think harder, not less.",
  },
  {
    tag: "PHILOSOPHY",
    title: "I read slowly, on purpose.",
    body: "Most of my decision-making quietly comes from philosophy of mind and philosophy of technology. The questions are older than the tools. The answers age better too.",
  },
  {
    tag: "CURIOSITY",
    title: "I like the layer underneath.",
    body: "If I understand a system, I want to understand what it is pretending not to be made of. That habit pays back the effort every single time.",
  },
];

export function Personal() {
  return (
    <section id="personal" className="relative py-32 md:py-48">
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeader
          index="08"
          kicker="Dimension · Margin Notes"
          title="Beyond the résumé."
          subtitle="A few things about how I actually spend the quiet hours."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {notes.map((n, i) => (
            <motion.div
              key={n.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-ink-900/50 p-7 backdrop-blur transition hover:border-signal/30"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-signal">
                {n.tag}
              </div>
              <h4 className="mt-5 font-serif text-2xl italic leading-tight text-bone-50">
                {n.title}
              </h4>
              <p className="mt-3 text-pretty text-[15px] leading-relaxed text-bone-300">
                {n.body}
              </p>
              {/* hairline animated underline */}
              <motion.span
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-signal/60 to-transparent transition-transform duration-700 group-hover:scale-x-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
