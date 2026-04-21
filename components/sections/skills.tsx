"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers3, LineChart, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { technicalSkillGroups } from "@/lib/content";

const icons = [Code2, Layers3, Database, LineChart, Sparkles] as const;

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-48">
      <div className="absolute left-10 right-10 top-20 h-px bg-white/10" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="03"
          kicker="Tech Stack"
          title="Tools I can actually build with."
          subtitle="Languages, product frameworks, infrastructure, AI/data tooling, and the research areas I am actively pushing into."
        />

        <div className="space-y-8">
          {technicalSkillGroups.map((group, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-ink-900/55 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-signal">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-bone-50">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: skillIndex * 0.015 }}
                      className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-200 transition hover:border-signal/35 hover:text-signal"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
