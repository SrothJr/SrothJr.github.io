import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">//</span> built with React · TanStack Router · Tailwind
        </p>
        <div className="flex items-center gap-3">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail className="h-4 w-4" />
          </a>
          <span className="ml-2 font-mono text-xs text-muted-foreground">© {year} {site.shortName}</span>
        </div>
      </div>
    </footer>
  );
}
