import { CheckCircle2, CircleDollarSign, Clock3, Plus, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../common/Card'
import Reveal from '../common/Reveal'
import SectionTitle from '../common/SectionTitle'
import { products } from '../../content/products'

export default function Products({ headingAs = 'h2', showHeader = true }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {showHeader ? (
          <SectionTitle
            as={headingAs}
            eyebrow="Products"
            title="Our Products"
            description="Platforms we build and operate to solve practical, high-value problems."
          />
        ) : null}
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Reveal key={product.name}>
              <Card className="group flex h-full flex-col overflow-hidden rounded-2xl p-0 shadow-[0_18px_50px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(15,23,42,0.09)]">
                <div className="flex h-full flex-col p-6 sm:p-7">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                      <Sparkles className="h-3.5 w-3.5" />
                      {product.label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                      <Clock3 className="h-3.5 w-3.5" />
                      Pending
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Product</p>
                    <h3 className="font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{product.description}</p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Key specifications</p>
                    <ul className="mt-4 space-y-3">
                      {product.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-700">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {product.features.length > 4 && (
                      <p className="mt-3 text-xs font-semibold text-slate-500">
                        +{product.features.length - 4} more capabilities available
                      </p>
                    )}
                  </div>

                  <div className="mt-auto pt-7">
                    <div className="flex flex-col gap-4 rounded-2xl border border-blue-50 bg-blue-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                          <CircleDollarSign className="h-3.5 w-3.5" />
                          Pricing
                        </p>
                        <p className="mt-1 font-display text-xl font-extrabold tracking-[-0.025em] text-slate-950">Custom pricing</p>
                      </div>
                      <Link
                        to="/contact"
                        aria-label={`View details for ${product.name}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                      >
                        View Details
                        <Plus className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
          <Reveal delay={0.08}>
            <article className="flex min-h-[420px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <div>
                <p className="font-display text-xl font-extrabold text-slate-950">More products coming soon</p>
                <p className="mt-3 text-sm leading-6 text-slate-500">This grid is ready for the next eServeconn product card.</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
