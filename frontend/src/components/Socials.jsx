import { Music2 } from "lucide-react";
import { socials } from "../data";

// Newer lucide-react versions removed brand icons, so these two are inline SVGs.
const svgProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const Instagram = () => (
  <svg {...svgProps}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Facebook = () => (
  <svg {...svgProps}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTok = () => <Music2 size={20} aria-hidden="true" />;

const icons = { Instagram, Facebook, TikTok };

export default function Socials() {
  return (
    <section id="socials" className="mx-auto max-w-6xl px-5 py-14 text-center">
      <h2 className="font-display text-2xl sm:text-3xl">Follow us</h2>
      <ul className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
        {socials.map((s) => {
          const Icon = icons[s.name];
          return (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border-2 border-forest px-5 py-3 font-semibold hover:bg-forest hover:text-cream"
              >
                <Icon />
                <span>
                  {s.name}: {s.handle}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
