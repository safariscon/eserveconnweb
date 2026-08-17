import PageHero from '../components/common/PageHero'
import Products from '../components/sections/Products'
import { pagesSeo } from '../content/seo'
import { breadcrumbSchema, organizationSchema, setPageMeta, webPageSchema } from '../utils/seo'
import { productsSchema } from '../utils/structuredData'

export default function ProductsPage() {
  const { title, description, path, keywords } = pagesSeo.products

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
        { name: 'eServeConn Platform', path: '/products' },
      ]),
      productsSchema(),
    ],
  })

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Platforms we build and operate"
        description="Practical digital products designed to help people discover, book, and manage services with confidence."
      />
      <Products headingAs="h2" showHeader={false} />
    </>
  )
}
