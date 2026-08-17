import PageHero from '../components/common/PageHero'
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

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something together"
        description="Tell us about your project. We will reply with clear next steps."
      />
      <Contact headingAs="h2" showHeader={false} />
    </>
  )
}
