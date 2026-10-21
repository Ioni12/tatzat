import { useState, useEffect } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "../data";

// Placeholder tile colors, used when an item has no photo yet
const tints = [
  "from-forest to-water",
  "from-forest-light to-moss",
  "from-bark to-forest",
  "from-water to-forest-light",
  "from-forest-dark to-forest-light",
  "from-moss to-water",
];

function Tile({ item, index, className = "" }) {
  if (item.src) {
    return (
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        onError={(e) => {
          if (item.fallback && !e.currentTarget.src.endsWith(item.fallback))
            e.currentTarget.src = item.fallback;
        }}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={item.alt}
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-linear-to-br p-4 text-center text-cream ${tints[index % tints.length]} ${className}`}
    >
      <Camera size={28} />
      <span className="text-sm font-semibold">{item.alt}</span>
    </div>
  );
}

export default function Gallery() {
  const [current, setCurrent] = useState(null);
  const open = current !== null;
  const prev = () =>
    setCurrent((c) => (c + gallery.length - 1) % gallery.length);
  const next = () => setCurrent((c) => (c + 1) % gallery.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setCurrent(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-center font-display text-3xl sm:text-4xl">
        Photo spots
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
        {gallery.map((item, i) => (
          <button
            key={item.alt}
            onClick={() => setCurrent(i)}
            aria-label={`Enlarge: ${item.alt}`}
            className="aspect-4/3 overflow-hidden rounded-lg"
          >
            <Tile
              item={item}
              index={i}
              className="transition-transform hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setCurrent(null)}
        >
          <button
            className="absolute right-4 top-4 text-cream"
            onClick={() => setCurrent(null)}
            aria-label="Close"
          >
            <X size={30} />
          </button>
          <button
            className="absolute left-3 text-cream sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={40} />
          </button>
          <div
            className="aspect-4/3 w-full max-w-3xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Tile item={gallery[current]} index={current} />
          </div>
          <button
            className="absolute right-3 text-cream sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
