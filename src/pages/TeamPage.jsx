import Team from '../components/sections/Team'
import { pagesSeo } from '../content/seo'
import { breadcrumbSchema, organizationSchema, setPageMeta, webPageSchema } from '../utils/seo'

export default function TeamPage() {
  const { title, description, path, keywords } = pagesSeo.team

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
        { name: 'Team', path: '/team' },
      ]),
    ],
  })

  return <Team headingAs="h1" />
}
