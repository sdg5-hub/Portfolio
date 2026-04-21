import type { Metadata } from "next";
import { Award, BriefcaseBusiness, ExternalLink } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { certifications, experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "Certifications & Experience — Saiyid Gilani",
  description: "Certifications, experience, roles, awards, and credentials for Saiyid Gilani.",
};

export default function CredentialsPage() {
  return (
    <PageShell
      eyebrow="Certifications & Experience"
      title="A clear record of credentials, roles, and proof of work."
      description="Certifications, experience, awards, and formal milestones live here as the record grows."
    >
      <div className="grid gap-8 pb-24 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-ink-900/55 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-signal">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                Certifications
              </div>
              <h2 className="text-xl font-medium text-bone-50">Verified learning</h2>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {certifications.length > 0 ? (
              certifications.map((item) => <CredentialCard key={item.title} item={item} />)
            ) : (
              <EmptyCopy text="Certification entries will appear here." />
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-ink-900/55 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-signal">
              <BriefcaseBusiness className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                Experience
              </div>
              <h2 className="text-xl font-medium text-bone-50">Roles and work</h2>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {experience.length > 0 ? (
              experience.map((item) => (
                <article
                  key={`${item.organization}-${item.role}`}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-500">
                    {item.date}
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-bone-50">{item.role}</h3>
                  <div className="mt-1 text-sm text-signal">{item.organization}</div>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-bone-300">
                    {item.detail}
                  </p>
                </article>
              ))
            ) : (
              <EmptyCopy text="Experience entries will appear here." />
            )}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function CredentialCard({ item }: { item: (typeof certifications)[number] }) {
  const content = (
    <>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-500">
        {item.date ?? "Credential"}
      </div>
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium text-bone-50">{item.title}</h3>
          <div className="mt-1 text-sm text-signal">{item.issuer}</div>
        </div>
        {item.href && <ExternalLink className="h-4 w-4 flex-none text-bone-500" />}
      </div>
      {item.detail && (
        <p className="mt-3 text-pretty text-sm leading-relaxed text-bone-300">
          {item.detail}
        </p>
      )}
    </>
  );

  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-signal/35"
    >
      {content}
    </a>
  ) : (
    <article className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
      {content}
    </article>
  );
}

function EmptyCopy({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-5 text-sm text-bone-400">
      {text}
    </div>
  );
}
