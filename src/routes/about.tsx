import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Trophy } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { site, education, priorEducation, experience, technologies, awards } from "@/lib/site";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Md Nazim Hossain" },
      {
        name: "description",
        content:
          "About Md Nazim Hossain — CSE Graduate at Brac University (CGPA 3.78), software engineer, and youth-development advocate.",
      },
      { property: "og:title", content: "About — Md Nazim Hossain" },
      {
        property: "og:description",
        content:
          "Education, experience, and the story behind a Dhaka-based engineer and photographer.",
      },
      { property: "og:image", content: `${site.url}/og-portrait.jpg` },
      { name: "twitter:image", content: `${site.url}/og-portrait.jpg` },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <SectionLabel>about</SectionLabel>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        AI Enthusiast, Full-Stack Developer, Software Engineer.
      </h1>

      <div className="mt-10 grid gap-10 md:grid-cols-[200px_1fr] md:items-start">
        <img
          src={portrait}
          alt={`Portrait of ${site.name}`}
          width={400}
          height={400}
          loading="lazy"
          className="aspect-square w-full max-w-[200px] rounded-lg border border-border object-cover grayscale transition-all hover:grayscale-0"
        />
        <div className="space-y-4 text-muted-foreground">
          <p>
            Passionate Computer Science student with hands-on experience in full-stack MERN
            development, Artificial Intelligence, and Natural Language Processing. Adaptive to
            applying machine learning algorithms, transformer models, and software engineering
            principles to solve complex real-world problems. Looking for opportunities to work at
            the architectural level and build useful tools.
          </p>
        </div>
      </div>

      {/* Education */}
      <section className="mt-16">
        <SectionLabel>education</SectionLabel>
        <div className="mt-4 space-y-4">
          {/* University */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold">{education.school}</h2>
              <p className="font-mono text-xs text-muted-foreground">{education.period}</p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{education.degree}</p>
            <div className="mt-2.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-sm">
              <p>
                <span className="text-primary font-mono text-xs">CGPA</span>{" "}
                <span className="font-medium text-foreground">{education.cgpa}</span>
              </p>
              {education.majorCgpa && (
                <span className="inline-flex items-center rounded border border-dashed border-border px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                  Major: {education.majorCgpa}
                </span>
              )}
              {education.status && (
                <span className="font-mono text-xs text-muted-foreground">
                  · {education.status}
                </span>
              )}
            </div>
            <div className="mt-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                coursework
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {education.coursework.map((c) => (
                  <li
                    key={c}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* HSC & SSC */}
          {priorEducation.map((e) => (
            <div key={e.school} className="rounded-lg border border-border bg-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold">{e.school}</h2>
                <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{e.location}</p>
              <p className="mt-2 text-sm">
                <span className="text-primary font-mono text-xs">GPA</span>{" "}
                <span className="font-medium">{e.gpa}</span>
                <span className="ml-3 font-mono text-xs text-muted-foreground">Group: {e.group}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-16">
        <SectionLabel>experience</SectionLabel>
        <ol className="mt-6 space-y-6">
          {experience.map((e) => (
            <li
              key={`${e.org}-${e.role}`}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold">{e.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {e.org} · {e.location}
                  </p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              </div>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Awards & Honors */}
      <section className="mt-16">
        <SectionLabel>honors_and_awards</SectionLabel>
        <div className="mt-4 space-y-4">
          {awards.map((a) => (
            <div key={a.title} className="rounded-lg border border-border bg-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-amber-500" />
                  <h3 className="text-base font-semibold">{a.title}</h3>
                </div>
                <p className="font-mono text-xs text-muted-foreground">{a.date}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{a.organization}</p>
              <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
                >
                  Official Announcement <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="mt-16">
        <SectionLabel>tech_stack</SectionLabel>
        <ul className="mt-4 flex flex-wrap gap-2">
          {technologies.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
