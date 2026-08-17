import { motion } from 'motion/react'
import { stats } from '../../content/stats'

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-blue-600 px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16">
      <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="font-display text-4xl font-extrabold tracking-tight">{stat.value}</div>
            <div className="mt-2 text-sm font-medium text-blue-100">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
