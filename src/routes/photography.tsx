import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { SectionLabel } from "@/components/section-label";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Photography — Md Nazim Hossain" },
      {
        name: "description",
        content:
          "A growing visual diary by Md Nazim Hossain — frames from Dhaka and beyond. Swap placeholders with your own photos.",
      },
      { property: "og:title", content: "Photography — Md Nazim Hossain" },
      {
        property: "og:description",
        content: "Frames, light, and stories — a visual side project.",
      },
    ],
  }),
  component: PhotographyPage,
});

// Placeholder photos — replace these URLs with your own images later.
const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80", alt: "Forest light" },
  { id: 2, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80", alt: "Mountain sunrise" },
  { id: 3, src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80", alt: "Ocean waves" },
  { id: 4, src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&q=80", alt: "Mountain valley" },
  { id: 5, src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80", alt: "Forest path" },
  { id: 6, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80", alt: "Tree silhouette" },
  { id: 7, src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80", alt: "Field at dusk" },
  { id: 8, src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&q=80", alt: "Cabin in snow" },
  { id: 9, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", alt: "Forest canopy" },
];

function PhotographyPage() {
  const [active, setActive] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const activePhoto = active !== null ? photos.find((p) => p.id === active) : null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionLabel>photography</SectionLabel>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Frames between commits.
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        A visual side project. Click any frame to view it larger. These are placeholder images — swap them in
        <code className="ml-1 font-mono text-xs">src/routes/photography.tsx</code>.
      </p>

      <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {photos.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => setActive(p.id)}
              className="group block w-full overflow-hidden rounded-md border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`View ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent"
          >
            <X className="h-4 w-4" />
          </button>
          <img
            src={activePhoto.src.replace("w=1200", "w=1920")}
            alt={activePhoto.alt}
            className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
