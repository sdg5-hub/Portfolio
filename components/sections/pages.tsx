"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Camera, Newspaper } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { sitePages } from "@/lib/content";

const iconMap = {
  "/gallery": Camera,
  "/blog": Newspaper,
  "/credentials": BadgeCheck,
} as const;

export function Pages() {
  return (
    <section id="pages" className="relative py-32 md:py-48">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="03"
          kicker="Pages · Archive"
          title="Room for the work around the work."
          subtitle="A gallery for moments, a blog for updates, and a credentials page for certifications and experience as they grow."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {sitePages.map((page, index) => {
            const Icon = iconMap[page.href as keyof typeof iconMap];
            return (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                <Link
                  href={page.href}
                  className="group relative block min-h-[280px] overflow-hidden rounded-xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur transition hover:border-signal/35 hover:bg-ink-800/70"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-signal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-bone-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" />
                  </div>

                  <div className="mt-16 font-mono text-[10px] uppercase tracking-[0.24em] text-signal">
                    {page.eyebrow}
                  </div>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-bone-50">
                    {page.title}
                  </h3>
                  <p className="mt-4 text-pretty text-[15px] leading-relaxed text-bone-300">
                    {page.body}
                  </p>

                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-signal/70 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
