import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { galleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photo Gallery — Saiyid Gilani",
  description: "Photo archive for Saiyid Gilani: hackathons, builds, campus, and moments.",
};

export default function GalleryPage() {
  return (
    <PageShell
      eyebrow="Photo Gallery"
      title="A visual archive for the moments around the work."
      description="Hackathons, campus, build sessions, demos, people, and the quiet proof that projects are made by actual days."
    >
      {galleryItems.length > 0 ? (
        <div className="grid gap-4 pb-24 md:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="group overflow-hidden rounded-xl border border-white/10 bg-ink-900/60"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="p-4">
                <div className="text-sm font-medium text-bone-50">{item.title}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                  {[item.date, item.location].filter(Boolean).join(" · ")}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<Camera className="h-6 w-6" />}
          label="Gallery slots ready"
          body="Photos will appear here as the archive grows."
        />
      )}
    </PageShell>
  );
}

function EmptyState({
  icon,
  label,
  body,
}: {
  icon: React.ReactNode;
  label: string;
  body: string;
}) {
  return (
    <div className="mb-24 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-signal">
        {icon}
      </div>
      <h2 className="mt-8 text-2xl font-medium tracking-tight text-bone-50">
        {label}
      </h2>
      <p className="mt-3 max-w-xl text-pretty text-bone-300">{body}</p>
    </div>
  );
}
