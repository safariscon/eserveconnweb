import { Link } from 'react-router-dom'
import { company, navigation } from '../../content/company'
import { services } from '../../content/services'
import { slugify } from '../../utils/helpers'

export default function Footer() {
  return (
    <footer className="border-t border-blue-900 bg-blue-950 px-4 py-14 text-blue-100 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 font-display text-sm font-extrabold text-white">E</span>
            <span className="font-display font-extrabold text-white">{company.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-blue-200/80">{company.tagline}</p>
          <p className="mt-3 max-w-xs text-xs leading-5 text-blue-200/70">
            Also known as eServe Connect, ServiceConn, and Service Connection. If you searched eservecon, this is the official eServeConn website.
          </p>
        </div>
        <FooterLinks title="Quick Links" items={navigation.map((item) => ({ label: item.label, path: item.path }))} />
        <FooterLinks
          title="Services"
          items={services.slice(0, 5).map((service) => ({ label: service.title, path: `/services#${slugify(service.title)}` }))}
        />
        <div>
          <h3 className="font-display font-bold text-white">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-blue-200/80">
            <a className="block transition hover:text-white" href={`mailto:${company.email}`}>{company.email}</a>
            <a className="block transition hover:text-white" href="https://wa.me/250788836180" target="_blank" rel="noreferrer">{company.phone}</a>
            <p>{company.location}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-sm text-blue-200/60 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        <p>Built in Gisenyi, Rwanda.</p>
      </div>
    </footer>
  )
}

function FooterLinks({ title, items }) {
  return (
    <div>
      <h3 className="font-display font-bold text-white">{title}</h3>
      <div className="mt-4 grid gap-2 text-sm text-blue-200/80">
        {items.map((item) => (
          <Link key={item.label} to={item.path} className="transition hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
