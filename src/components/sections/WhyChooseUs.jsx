import { Cpu, Headphones, HeartHandshake, ShieldCheck, Users, Zap } from 'lucide-react'
import Card from '../common/Card'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'
import { reasons } from '../../utils/constants'

const icons = { Cpu, Headphones, HeartHandshake, ShieldCheck, Users, Zap }

export default function WhyChooseUs({ headingAs = 'h2' }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          as={headingAs}
          eyebrow="Why Us"
          title="Why choose Eserveconn"
          description="We pair modern engineering with practical partnership and clear accountability."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = icons[reason.icon]
            return (
              <Reveal key={reason.title} delay={index * 0.06}>
                <Card className="h-full">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-950">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{reason.description}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
