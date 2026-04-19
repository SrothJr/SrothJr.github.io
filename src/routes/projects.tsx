import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { projects, site } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Md Nazim Hossain" },
      {
        name: "description",
        content:
          "A selection of projects by Md Nazim Hossain — from AR-enriched gardening apps to subscription meal platforms and developer tools.",
      },
      { property: "og:title", content: "Projects — Md Nazim Hossain" },
      {
        property: "og:description",
        content:
          "MERN-stack apps, React Native + AR experiments, automation tools, and learning projects.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <SectionLabel>projects</SectionLabel>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Things I've built.
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        A mix of full-stack apps, side experiments, and learning projects.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <li
              key={p.name}
              className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-primary">{num}</p>
                  <h2 className="mt-1 text-lg font-semibold tracking-tight">{p.name}</h2>
                </div>
                <a
                  href={p.link ?? site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.name}`}
                  className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
