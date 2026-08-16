import Products from '../components/sections/Products'
import Stats from '../components/sections/Stats'
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
      <Products headingAs="h1" />
      <Stats />
    </>
  )
}
