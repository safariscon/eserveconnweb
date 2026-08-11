import About from '../components/sections/About'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { setPageMeta } from '../utils/seo'

export default function AboutPage() {
  setPageMeta({
    title: 'About Eserveconn | Technology & Software Solutions in Rwanda',
    description: 'Learn about Eserveconn Ltd, a Rwanda-based technology company building software, digital platforms, and practical business solutions.',
    path: '/about',
  })

  return (
    <>
      <About />
      <WhyChooseUs />
    </>
  )
}
