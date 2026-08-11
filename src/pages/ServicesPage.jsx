import Services from '../components/sections/Services'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { setPageMeta } from '../utils/seo'

export default function ServicesPage() {
  setPageMeta({
    title: 'Eserveconn Services | Software, Web & Digital Solutions',
    description: 'Explore Eserveconn software development, mobile app, web application, cloud, API, UI/UX, and support services for organizations in Rwanda.',
    path: '/services',
  })

  return (
    <>
      <Services />
      <WhyChooseUs />
    </>
  )
}
