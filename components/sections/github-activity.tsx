"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, GitBranch, Star } from "lucide-react";
import { profileLinks } from "@/lib/content";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

type GitHubEvent = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
};

type GitHubState = {
  repos: Repo[];
  events: GitHubEvent[];
};

export function GitHubActivity() {
  const [state, setState] = useState<GitHubState | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const [reposResponse, eventsResponse] = await Promise.all([
          fetch("https://api.github.com/users/sdg5-hub/repos?per_page=100&sort=updated"),
          fetch("https://api.github.com/users/sdg5-hub/events/public?per_page=8"),
        ]);

        if (!reposResponse.ok || !eventsResponse.ok) {
          throw new Error("GitHub request failed");
        }

        const [repos, events] = (await Promise.all([
          reposResponse.json(),
          eventsResponse.json(),
        ])) as [Repo[], GitHubEvent[]];

        if (!active) return;
        setState({
          repos: repos
            .filter((repo) => !repo.archived)
            .slice(0, 4),
          events: events.slice(0, 5),
        });
      } catch {
        if (active) setError(true);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  const repoCount = useMemo(() => state?.repos.length ?? 0, [state]);

  if (error) {
    return (
      <div className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
        <p className="text-sm leading-relaxed text-bone-300">
          Live GitHub activity is rate-limited right now.
        </p>
        <a
          href={profileLinks.github}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-signal"
        >
          Open @sdg5-hub <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  if (!state) {
    return (
      <div className="space-y-3">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-16 animate-pulse rounded-lg border border-white/5 bg-white/[0.03]"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-bone-500">
          <span>Recently updated</span>
          <span>{repoCount} shown</span>
        </div>
        <div className="space-y-2.5">
          {state.repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-lg border border-white/10 bg-white/[0.02] p-4 transition hover:border-signal/35 hover:bg-signal/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-bone-50">
                    <GitBranch className="h-4 w-4 text-signal" />
                    {repo.name}
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-bone-400">
                    {repo.description ?? "Public repository on sdg5-hub."}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 flex-none text-bone-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                {repo.language && <span>{repo.language}</span>}
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {repo.stargazers_count}
                </span>
                <span>{formatDate(repo.updated_at)}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-500">
          Public activity
        </div>
        <div className="space-y-2.5">
          {state.events.map((event) => (
            <div
              key={event.id}
              className="rounded-lg border border-white/10 bg-ink-900/70 p-4"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                {eventLabel(event.type)}
              </div>
              <div className="mt-2 text-sm text-bone-200">{event.repo.name}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                {formatDate(event.created_at)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function eventLabel(type: string) {
  switch (type) {
    case "PushEvent":
      return "Push";
    case "CreateEvent":
      return "Created";
    case "PullRequestEvent":
      return "Pull request";
    case "IssuesEvent":
      return "Issue";
    case "WatchEvent":
      return "Starred";
    default:
      return type.replace(/Event$/, "");
  }
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}
