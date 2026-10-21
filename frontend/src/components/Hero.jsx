import { Phone, MessageCircle } from "lucide-react";
import { brand, contact, photos } from "../data";

// Vertical white streaks that fade out, like the falls on the flyer
const streaks = {
  backgroundImage:
    "repeating-linear-gradient(90deg, rgba(255,255,255,.55) 0 2px, transparent 2px 9px)",
  maskImage: "linear-gradient(to bottom, black, transparent)",
  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-b from-forest-dark via-forest to-forest-light"
    >
      <img
        src={photos.hero}
        alt=""
        aria-hidden="true"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 opacity-60 sm:w-28"
        style={streaks}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 opacity-60 sm:w-28"
        style={streaks}
      />

      <img
        src="/images/treeline.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full sm:h-28"
      />

      <div className="relative mx-auto max-w-3xl px-6 pb-32 pt-20 text-center sm:pb-40 sm:pt-28">
        <h1 className="font-display text-6xl tracking-wide text-cream drop-shadow-lg sm:text-8xl">
          {brand.short.toUpperCase()}
        </h1>

        <div className="mx-auto mt-4 w-fit -rotate-1 rounded-md border-y-4 border-bark-dark bg-bark px-6 py-2 shadow-xl">
          <p className="font-display text-2xl text-cream sm:text-4xl">
            Waterfalls Tour
          </p>
        </div>

        <p className="mt-6 text-lg font-semibold text-cream/90">
          {brand.tagline}
        </p>
        <p className="mx-auto mt-3 max-w-md text-cream/80">
          A guided walk to a hidden waterfall near Saranda. Small groups, easy
          pace.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={contact.tel}
            className="flex items-center justify-center gap-2 rounded-full bg-water px-7 py-3 font-bold text-forest-dark hover:bg-cream"
          >
            <Phone size={18} /> Book now
          </a>
          <a
            href={contact.whatsapp}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-cream px-7 py-3 font-bold text-cream hover:bg-cream hover:text-forest-dark"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
