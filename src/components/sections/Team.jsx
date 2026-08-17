import Card from '../common/Card'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'
import { team } from '../../content/team'

export default function Team({ headingAs = 'h2', showHeader = true }) {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {showHeader ? (
          <SectionTitle
            as={headingAs}
            eyebrow="Our Team"
            title="Meet the team"
            description="A focused team of builders shaping Rwanda's digital future."
          />
        ) : null}
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <Card className="h-full p-8 text-center">
                {member.image ? (
                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg shadow-blue-600/15 ring-2 ring-blue-100">
                    <img className={`h-full w-full object-cover ${member.imageClassName || ''}`} src={member.image} alt={`${member.name}, ${member.role} at Eserveconn`} />
                  </div>
                ) : (
                  <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-sky-400 font-display text-3xl font-extrabold text-white shadow-lg shadow-blue-600/20">
                    {member.initials}
                  </div>
                )}
                <h3 className="mt-5 font-display text-xl font-bold text-slate-950">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-600">{member.role}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{member.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
