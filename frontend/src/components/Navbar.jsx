import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { brand, contact, nav } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-forest-dark text-cream shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-xl tracking-wide">
          {brand.short}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="font-semibold hover:text-water">
              {item.label}
            </a>
          ))}
          <a
            href={contact.tel}
            className="flex items-center gap-2 rounded-full bg-water px-4 py-2 font-bold text-forest-dark hover:bg-cream"
          >
            <Phone size={16} /> Call now
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-forest-light/40 px-5 pb-4 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-semibold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={contact.tel}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-water py-3 font-bold text-forest-dark"
          >
            <Phone size={18} /> Call {contact.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
