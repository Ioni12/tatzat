import { Check } from 'lucide-react'
import { details, included, bring } from '../data'
import { icons } from './icons'

const List = ({ title, items }) => (
  <div>
    <h3 className="font-display text-xl">{title}</h3>
    <ul className="mt-3 space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2">
          <Check size={18} className="mt-0.5 shrink-0 text-forest-light" />
          {i}
        </li>
      ))}
    </ul>
  </div>
)

export default function TourDetails() {
  return (
    <section id="details" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-center font-display text-3xl sm:text-4xl">Tour details</h2>
      <dl className="mx-auto mt-10 max-w-2xl divide-y divide-forest/15 rounded-lg border-2 border-bark bg-white/50">
        {details.map((d) => {
          const Icon = icons[d.icon]
          return (
            <div key={d.label} className="flex items-center gap-4 px-5 py-4">
              <Icon size={22} className="shrink-0 text-bark" />
              <dt className="w-28 shrink-0 font-bold">{d.label}</dt>
              <dd>{d.value}</dd>
            </div>
          )
        })}
      </dl>
      <div className="mx-auto mt-10 grid max-w-2xl gap-8 sm:grid-cols-2">
        <List title="Included" items={included} />
        <List title="What to bring" items={bring} />
      </div>
    </section>
  )
}
