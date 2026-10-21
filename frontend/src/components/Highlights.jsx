import { highlights } from '../data'
import { icons } from './icons'

export default function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-center font-display text-3xl sm:text-4xl">What you get</h2>
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {highlights.map((h) => {
          const Icon = icons[h.icon]
          return (
            <li key={h.title} className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-water">
                <Icon size={26} />
              </span>
              <h3 className="mt-3 font-bold">{h.title}</h3>
              <p className="mt-1 text-sm text-forest-dark/80">{h.text}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
