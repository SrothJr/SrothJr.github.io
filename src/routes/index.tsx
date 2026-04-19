import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { site, projects, skills } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Md Nazim Hossain — Software Development Engineer" },
      {
        name: "description",
        content:
          "MERN-stack engineer & CSE student at Brac University. Currently building at uSavior. Photographer on the side.",
      },
      { property: "og:title", content: "Md Nazim Hossain — Software Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio, projects, and photography from Md Nazim Hossain — Dhaka-based software engineer.",
      },
      { property: "og:image", content: `${site.url}/og-portrait.jpg` },
      { name: "twitter:image", content: `${site.url}/og-portrait.jpg` },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-36">
          <div className="reveal max-w-3xl">
            <SectionLabel>hello_world.tsx</SectionLabel>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {site.name}
              <span className="block text-primary">{site.role}.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.pitch}
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {site.location} · {site.tagline}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View projects <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href={site.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download className="h-3.5 w-3.5" /> Download CV
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Currently */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <SectionLabel>currently</SectionLabel>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Building at uSavior</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-muted-foreground">
              Software Development Engineer Intern — exploring frameworks for advanced web apps,
              identifying problems solvable through known and modified algorithms, and shipping
              scratch-built solutions.
            </p>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              uSavior · Dhaka, BD · Jun 2024 — Now
            </p>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionLabel>featured_projects</SectionLabel>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Selected work</h2>
          </div>
          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <li
              key={p.name}
              className="group relative rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <p className="font-mono text-xs text-muted-foreground">project</p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tools.slice(0, 4).map((t) => (
                  <li
                    key={t}
                    className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionLabel>skills</SectionLabel>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">What I work with</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <li key={s.title} className="rounded-lg border border-border bg-card p-5">
              <p className="font-mono text-xs text-primary">{`0${skills.indexOf(s) + 1}`}</p>
              <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
