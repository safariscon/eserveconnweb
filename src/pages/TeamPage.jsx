import PageHero from '../components/common/PageHero'
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

  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The people behind Eserveconn"
        description="A focused team of builders shaping reliable software for Rwanda and beyond."
      />
      <Team headingAs="h2" showHeader={false} />
    </>
  )
}
