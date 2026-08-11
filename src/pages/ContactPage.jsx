import Contact from '../components/sections/Contact'
import { setPageMeta } from '../utils/seo'

export default function ContactPage() {
  setPageMeta({
    title: 'Contact Eserveconn | Digital Solutions & Software Development',
    description: 'Contact Eserveconn Ltd in Gisenyi, Rubavu District, Rwanda for software development, web applications, and digital solution projects.',
    path: '/contact',
  })

  return <Contact />
}
