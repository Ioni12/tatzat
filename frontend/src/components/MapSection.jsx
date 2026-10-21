import { MapPin, Navigation, ExternalLink } from 'lucide-react'
import { meeting } from '../data'

export default function MapSection() {
  const q = encodeURIComponent(meeting.query)
  const embed = `https://www.google.com/maps?q=${q}&z=14&output=embed`
  const open = `https://www.google.com/maps/search/?api=1&query=${q}`
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${q}`

  return (
    <section id="map" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-center font-display text-3xl sm:text-4xl">Where we meet</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="flex items-start gap-2 text-lg font-bold">
            <MapPin className="mt-1 shrink-0 text-bark" size={22} />
            {meeting.label}
          </p>
          <p className="mt-3 text-forest-dark/80">{meeting.note}</p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={directions}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 font-bold text-cream hover:bg-forest-dark"
            >
              <Navigation size={18} /> Get directions
            </a>
            <a
              href={open}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-forest px-6 py-3 font-bold text-forest hover:bg-forest hover:text-cream"
            >
              <ExternalLink size={18} /> Open in Google Maps
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border-4 border-bark shadow-xl md:col-span-3">
          <iframe
            title={`Map: ${meeting.label}`}
            src={embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-72 w-full sm:h-96"
          />
        </div>
      </div>
    </section>
  )
}
