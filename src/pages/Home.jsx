import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Faq from '../components/sections/Faq'
import Hero from '../components/sections/Hero'
import Products from '../components/sections/Products'
import Services from '../components/sections/Services'
import Stats from '../components/sections/Stats'
import Team from '../components/sections/Team'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { pagesSeo } from '../content/seo'
import { breadcrumbSchema, organizationSchema, setPageMeta, websiteSchema, webPageSchema } from '../utils/seo'
import { faqSchema, productsSchema, servicesSchema } from '../utils/structuredData'

export default function Home() {
  const { title, description, path, keywords } = pagesSeo.home

  setPageMeta({
    title,
    description,
    path,
    keywords,
    structuredData: [
      websiteSchema(),
      organizationSchema(description),
      webPageSchema({ title, description, path }),
      breadcrumbSchema([{ name: 'Home', path: '/' }]),
      servicesSchema(),
      productsSchema(),
      faqSchema(),
    ],
  })

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <Stats />
      <Team />
      <Faq />
      <Contact />
    </>
  )
}
