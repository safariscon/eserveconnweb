import Contact from '../components/sections/Contact'
import { pagesSeo } from '../content/seo'
import { breadcrumbSchema, organizationSchema, setPageMeta, webPageSchema } from '../utils/seo'

export default function ContactPage() {
  const { title, description, path, keywords } = pagesSeo.contact

  setPageMeta({
    title,
    description,
    path,
    keywords,
    structuredData: [
      organizationSchema(description),
      webPageSchema({ title, description, path }),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact eServeConn', path: '/contact' },
      ]),
    ],
  })

  return <Contact headingAs="h1" />
}
