import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Github, Linkedin, Globe, MapPin, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Md Nazim Hossain" },
      {
        name: "description",
        content: "Get in touch with Md Nazim Hossain — email, phone, LinkedIn, and GitHub.",
      },
      { property: "og:title", content: "Contact — Md Nazim Hossain" },
      {
        property: "og:description",
        content: "Reach out for collaborations, freelance work, or a friendly conversation.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", value: site.socials.linkedin, href: site.socials.linkedin },
    { icon: Github, label: "GitHub", value: site.socials.github, href: site.socials.github },
    { icon: Globe, label: "Website", value: site.socials.website, href: site.socials.website },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SectionLabel>contact</SectionLabel>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Let's build something.
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Open to internship and collaboration opportunities, especially around full-stack web,
        React Native, or AI-flavored products. The fastest way to reach me is email.
      </p>

      <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
        <MapPin className="h-3 w-3" /> {site.location}
      </div>

      <ul className="mt-10 divide-y divide-border rounded-lg border border-border bg-card">
        {items.map(({ icon: Icon, label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:bg-accent/40"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground group-hover:text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>
                  <p className="text-sm font-medium break-all">{value}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 font-mono text-xs text-muted-foreground">
        <span className="text-primary">//</span> contact details are placeholders — update them in{" "}
        <code>src/lib/site.ts</code>.
      </p>
    </div>
  );
}
