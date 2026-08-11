import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Products from '../components/sections/Products'
import Services from '../components/sections/Services'
import Stats from '../components/sections/Stats'
import Team from '../components/sections/Team'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { company } from '../content/company'
import { canonicalUrl, seoDefaults, setPageMeta } from '../utils/seo'

export default function Home() {
  const title = 'Eserveconn | Digital Solutions & Software Development in Rwanda'
  const description = 'Eserveconn is a Rwanda-based technology company delivering modern software development, web applications, digital platforms, and innovative technology solutions for businesses and organizations.'

  setPageMeta({
    title,
    description,
    path: '/',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: company.shortName,
        alternateName: ['Eserve Conn', company.name, 'Eserve'],
        url: canonicalUrl('/'),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.shortName,
        legalName: company.name,
        url: canonicalUrl('/'),
        logo: `${seoDefaults.siteUrl}/favicon.svg`,
        description,
        email: company.email,
        telephone: company.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gisenyi',
          addressRegion: 'Rubavu District',
          addressCountry: 'RW',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: company.email,
          telephone: company.phone,
          contactType: 'customer support',
          areaServed: 'RW',
        },
      },
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
      <Contact />
    </>
  )
}
