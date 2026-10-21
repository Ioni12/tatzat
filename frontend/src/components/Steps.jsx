import { steps } from '../data'

export default function Steps() {
  return (
    <section id="steps" className="bg-bark-dark text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center font-display text-3xl sm:text-4xl">How it works</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-water font-display text-xl text-forest-dark">
                {i + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mx-auto mt-1 max-w-xs text-cream/80">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
