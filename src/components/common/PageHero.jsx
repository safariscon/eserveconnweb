import { motion } from 'motion/react'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_72%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute -right-24 -top-16 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-sky-100/90 blur-3xl" />
      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      </motion.div>
    </section>
  )
}
