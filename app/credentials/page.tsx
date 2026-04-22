import type { Metadata } from "next";
import {
  Award,
  BriefcaseBusiness,
  ExternalLink,
  FileDown,
  GraduationCap,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import {
  certifications,
  education,
  experience,
  extracurriculars,
  identity,
  profileLinks,
  resumeProjects,
  technicalSkillGroups,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Certifications & Experience — Saiyid Gilani",
  description: "Resume, certifications, experience, roles, awards, and credentials for Saiyid Gilani.",
};

export default function CredentialsPage() {
  return (
    <PageShell
      eyebrow="Resume · Credentials"
      title="Experience, education, certifications, and technical range."
      description="A structured version of my resume, with links out to proof of work and a downloadable PDF copy."
    >
      <div className="mb-8 grid gap-4 rounded-2xl border border-white/10 bg-ink-900/60 p-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
            Resume contact
          </div>
          <div className="mt-4 grid gap-3 text-sm text-bone-300 md:grid-cols-2">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-signal" />
              {identity.email}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-signal" />
              {identity.phone}
            </span>
          </div>
          {identity.resumeEmail !== identity.email && (
            <div className="mt-3 text-xs text-bone-500">
              Resume source email: {identity.resumeEmail}
            </div>
          )}
        </div>
        <a
          href={profileLinks.resume}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-signal transition hover:bg-signal/15"
        >
          <FileDown className="h-4 w-4" />
          Download resume
        </a>
      </div>

      <div className="grid gap-8 pb-24 lg:grid-cols-2">
        <CredentialSection
          icon={<BriefcaseBusiness className="h-5 w-5" />}
          eyebrow="Experience"
          title="Roles and work"
        >
          <div className="space-y-4">
            {experience.map((item) => (
              <article
                key={`${item.organization}-${item.role}`}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-500">
                  {item.date}
                </div>
                <h3 className="mt-3 text-lg font-medium text-bone-50">{item.role}</h3>
                <div className="mt-1 text-sm text-signal">{item.organization}</div>
                {item.location && (
                  <div className="mt-1 text-xs text-bone-500">{item.location}</div>
                )}
                <p className="mt-3 text-pretty text-sm leading-relaxed text-bone-300">
                  {item.detail}
                </p>
                {item.bullets && (
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm leading-relaxed text-bone-300"
                      >
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-signal" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </CredentialSection>

        <div className="space-y-8">
          <CredentialSection
            icon={<GraduationCap className="h-5 w-5" />}
            eyebrow="Education"
            title="Academic path"
          >
            <div className="space-y-4">
              {education.map((item) => (
                <article
                  key={item.school}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-500">
                    {item.date}
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-bone-50">{item.school}</h3>
                  <div className="mt-1 text-sm text-signal">{item.degree}</div>
                  <div className="mt-1 text-xs text-bone-500">{item.location}</div>
                  <p className="mt-3 text-sm text-bone-300">{item.detail}</p>
                </article>
              ))}
            </div>
          </CredentialSection>

          <CredentialSection
            icon={<Award className="h-5 w-5" />}
            eyebrow="Certifications"
            title="Verified learning"
          >
            <div className="space-y-4">
              {certifications.map((item) => (
                <CredentialCard key={item.title} item={item} />
              ))}
            </div>
          </CredentialSection>
        </div>

        <CredentialSection
          icon={<ExternalLink className="h-5 w-5" />}
          eyebrow="Resume Projects"
          title="Additional project record"
        >
          <div className="space-y-4">
            {resumeProjects.map((project) => {
              const body = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-medium text-bone-50">{project.title}</h3>
                    {project.href && (
                      <ExternalLink className="h-4 w-4 flex-none text-bone-500" />
                    )}
                  </div>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-bone-300">
                    {project.detail}
                  </p>
                </>
              );

              return project.href ? (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-signal/35"
                >
                  {body}
                </a>
              ) : (
                <article
                  key={project.title}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
                >
                  {body}
                </article>
              );
            })}
          </div>
        </CredentialSection>

        <div className="space-y-8">
          <CredentialSection
            icon={<Users className="h-5 w-5" />}
            eyebrow="Extracurricular"
            title="Campus and research activity"
          >
            <div className="space-y-4">
              {extracurriculars.map((item) => (
                <article
                  key={`${item.title}-${item.organization}`}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-500">
                    {item.date}
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-bone-50">{item.title}</h3>
                  <div className="mt-1 text-sm text-signal">{item.organization}</div>
                </article>
              ))}
            </div>
          </CredentialSection>

          <CredentialSection
            icon={<Award className="h-5 w-5" />}
            eyebrow="Skills"
            title="Technical stack"
          >
            <div className="space-y-5">
              {technicalSkillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                    {group.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-bone-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CredentialSection>
        </div>
      </div>
    </PageShell>
  );
}

function CredentialSection({
  icon,
  eyebrow,
  title,
  children,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-ink-900/55 p-6">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-signal">
          {icon}
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
            {eyebrow}
          </div>
          <h2 className="text-xl font-medium text-bone-50">{title}</h2>
        </div>
      </div>
      {children}
    </section>
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
