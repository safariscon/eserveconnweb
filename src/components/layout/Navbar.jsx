import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../common/Button'
import { company, navigation } from '../../content/company'
import { useScroll } from '../../hooks/useScroll'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScroll()

  return (
    <header className={`sticky top-0 z-50 border-b transition duration-300 ${scrolled ? 'border-slate-200/80 bg-white/90 shadow-sm shadow-slate-200/70 backdrop-blur-xl' : 'border-transparent bg-white'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" aria-label="eServeConn home" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-600 font-display text-sm font-extrabold text-white">
            E
          </span>
          <span>
            <span className="block font-display text-sm font-extrabold leading-4 text-slate-950">{company.shortName}</span>
            <span className="block text-[11px] font-medium text-slate-500">Ltd · Rwanda</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button to="/contact" showIcon={false}>Get in touch</Button>
        </div>

        <button type="button" className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-blue-200 hover:text-blue-700 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4">
              {navigation.map((item) => (
                <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">
                  {item.label}
                </NavLink>
              ))}
              <Button to="/contact" showIcon={false}>Get in touch</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
