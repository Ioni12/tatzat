import { useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { contact } from '../data'

const empty = { name: '', phone: '', date: '', people: '2' }

const field =
  'mt-1 w-full rounded-md border-2 border-forest/30 bg-white px-3 py-2 focus:border-forest focus:outline-none'

export default function Booking() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Enter your name.'
    if (!/^\+?[\d\s-]{7,}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number.'
    if (!form.date) e.date = 'Choose a date.'
    if (Number(form.people) < 1) e.people = 'At least 1 person.'
    return e
  }

  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      setSent(true) // demo only: nothing is sent anywhere
      setForm(empty)
    }
  }

  return (
    <section id="booking" className="bg-forest-light/20">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center">
        <h2 className="font-display text-3xl sm:text-4xl">Book your tour</h2>
        <p className="mt-3">Call or message us, or send a request below.</p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={contact.tel} className="flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 font-bold text-cream hover:bg-forest-dark">
            <Phone size={18} /> {contact.phone}
          </a>
          <a href={contact.whatsapp} className="flex items-center justify-center gap-2 rounded-full border-2 border-forest px-7 py-3 font-bold text-forest hover:bg-forest hover:text-cream">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>

        {sent ? (
          <p role="status" className="mt-10 rounded-lg bg-forest p-6 font-semibold text-cream">
            Request received. This is a demo, so nothing was actually sent.
          </p>
        ) : (
          <form onSubmit={submit} noValidate className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            <label className="font-semibold">
              Name
              <input className={field} value={form.name} onChange={set('name')} autoComplete="name" />
              {errors.name && <span className="text-sm font-normal text-red-700">{errors.name}</span>}
            </label>
            <label className="font-semibold">
              Phone
              <input className={field} value={form.phone} onChange={set('phone')} autoComplete="tel" inputMode="tel" />
              {errors.phone && <span className="text-sm font-normal text-red-700">{errors.phone}</span>}
            </label>
            <label className="font-semibold">
              Date
              <input type="date" className={field} value={form.date} onChange={set('date')} />
              {errors.date && <span className="text-sm font-normal text-red-700">{errors.date}</span>}
            </label>
            <label className="font-semibold">
              People
              <input type="number" min="1" className={field} value={form.people} onChange={set('people')} />
              {errors.people && <span className="text-sm font-normal text-red-700">{errors.people}</span>}
            </label>
            <button type="submit" className="rounded-full bg-bark px-7 py-3 font-bold text-cream hover:bg-bark-dark sm:col-span-2">
              Send request
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
