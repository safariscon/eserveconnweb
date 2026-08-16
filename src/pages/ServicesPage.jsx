import Faq from '../components/sections/Faq'
import Services from '../components/sections/Services'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { pagesSeo } from '../content/seo'
import { breadcrumbSchema, organizationSchema, setPageMeta, webPageSchema } from '../utils/seo'
import { servicesSchema } from '../utils/structuredData'

export default function ServicesPage() {
  const { title, description, path, keywords } = pagesSeo.services

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
        { name: 'eServeConn Services', path: '/services' },
      ]),
      servicesSchema(),
    ],
  })

  return (
    <>
      <Services headingAs="h1" />
      <WhyChooseUs />
      <Faq />
    </>
  )
}
