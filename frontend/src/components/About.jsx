import { about, photos } from "../data";

export default function About() {
  return (
    <section id="about" className="bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{about.title}</h2>
          {about.text.map((p) => (
            <p key={p} className="mt-4 max-w-prose text-cream/90">
              {p}
            </p>
          ))}
        </div>
        <div className="md:col-span-2 grid gap-6 md:grid-cols-2 md:items-center">
          <img
            src={photos.about}
            onError={(e) => {
              e.currentTarget.src = "/images/waterfall.svg";
            }}
            alt="Waterfall in the forest"
            className="aspect-4/3 w-full rounded-lg border-4 border-bark object-cover shadow-xl"
          />
          <dl className="grid grid-cols-3 gap-4 text-center">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg bg-forest-dark px-2 py-6"
              >
                <dt className="font-display text-xl text-water sm:text-2xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-cream/80">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
