import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog — Saiyid Gilani",
  description: "Project updates, notes, essays, and build logs from Saiyid Gilani.",
};

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Notes, updates, and build logs."
      description="A place for project announcements, technical writeups, lessons from hackathons, research notes, and the thoughts that are still becoming systems."
    >
      {blogPosts.length > 0 ? (
        <div className="grid gap-4 pb-24">
          {blogPosts.map((post) => {
            const body = (
              <>
                <div className="flex items-center justify-between gap-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                    {post.date}
                  </div>
                  {post.href && <ArrowUpRight className="h-5 w-5 text-bone-500" />}
                </div>
                <h2 className="mt-4 text-2xl font-medium tracking-tight text-bone-50">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-3xl text-pretty text-bone-300">
                  {post.summary}
                </p>
                {post.tags && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </>
            );

            return post.href ? (
              <Link
                key={post.title}
                href={post.href}
                className="rounded-xl border border-white/10 bg-ink-900/60 p-6 transition hover:border-signal/35 hover:bg-ink-800/70"
              >
                {body}
              </Link>
            ) : (
              <article
                key={post.title}
                className="rounded-xl border border-white/10 bg-ink-900/60 p-6"
              >
                {body}
              </article>
            );
          })}
        </div>
      ) : (
        <EmptyState />
      )}
    </PageShell>
  );
}

function EmptyState() {
  return (
    <div className="mb-24 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-signal">
        <Newspaper className="h-6 w-6" />
      </div>
      <h2 className="mt-8 text-2xl font-medium tracking-tight text-bone-50">
        First entries coming soon.
      </h2>
      <p className="mt-3 max-w-xl text-pretty text-bone-300">
        This page is ready for project updates, technical notes, and publication progress.
      </p>
    </div>
  );
}
