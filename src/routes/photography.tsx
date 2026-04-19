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
          "A visual diary by Md Nazim Hossain — frames from Dhaka and beyond.",
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

const photos = [
  { id: 1, src: "https://i.imgur.com/KWy1F5T.jpeg", alt: "Art Gallary Bamboo art" },
  { id: 2, src: "https://i.imgur.com/pq1lRVr.jpeg", alt: "Elephent raoming market and collecting tax" },
  { id: 3, src: "https://i.imgur.com/ZMij41L.jpeg", alt: "Boy crossing bamboo bridge Black and white" },
  { id: 4, src: "https://i.imgur.com/7pORa6T.jpeg", alt: "Water lily" },
  { id: 5, src: "https://i.imgur.com/BrYGRod.jpeg", alt: "Cityscape Dhaka" },
  { id: 6, src: "https://i.imgur.com/kztC7a3.jpeg", alt: "Sylhet River" },
  { id: 7, src: "https://i.imgur.com/jCfl2la.jpeg", alt: "A flowering Tree" },
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
        A visual side project. Click any frame to view it larger.
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
