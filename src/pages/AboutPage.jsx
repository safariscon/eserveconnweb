import About from '../components/sections/About'
import PageHero from '../components/common/PageHero'
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
      <PageHero
        eyebrow="About"
        title="A software company built in Rwanda"
        description="eServeConn is a software company in Rwanda, also known as eServe Connect and ServiceConn. We design digital products and a service connection platform for teams across Rwanda."
      />
      <About headingAs="h2" showHeader={false} />
      <WhyChooseUs />
    </>
  )
}
