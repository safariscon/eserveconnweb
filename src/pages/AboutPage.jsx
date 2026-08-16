import About from '../components/sections/About'
import Faq from '../components/sections/Faq'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { pagesSeo } from '../content/seo'
import { breadcrumbSchema, organizationSchema, setPageMeta, webPageSchema } from '../utils/seo'

export default function AboutPage() {
  const { title, description, path, keywords } = pagesSeo.about

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
        { name: 'About eServeConn', path: '/about' },
      ]),
    ],
  })

  return (
    <>
      <About headingAs="h1" />
      <WhyChooseUs />
      <Faq />
    </>
  )
}
