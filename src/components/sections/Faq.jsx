import { ChevronDown } from 'lucide-react'
import { faqs } from '../../content/faq'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'

export default function Faq({ headingAs = 'h2' }) {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          as={headingAs}
          headingId="faq-heading"
          eyebrow="FAQ"
          title="eServeConn questions, answered"
          description="Learn how eServeConn, eServe Connect, and ServiceConn help people find service providers and connect customers with services in Kigali and Rwanda."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((item) => (
            <Reveal key={item.question}>
              <details className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm open:border-blue-200 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-slate-950 [&::-webkit-details-marker]:hidden">
                  <h3 className="pr-2">{item.question}</h3>
                  <ChevronDown className="h-5 w-5 shrink-0 text-blue-600 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
