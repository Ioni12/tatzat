import { brand, contact } from "../data";

export default function Footer() {
  return (
    <footer className="bg-bark-dark text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl">{brand.name}</p>
          <p className="mt-1 text-sm opacity-80">
            {brand.operator} · {brand.location}
          </p>
        </div>
        <a href={contact.tel} className="font-bold hover:text-water">
          {contact.phone}
        </a>
      </div>
      <p className="border-t border-cream/15 px-5 py-4 text-center text-xs opacity-70">
        Design mockup for demonstration. Prices and times are examples.
      </p>
    </footer>
  );
}
