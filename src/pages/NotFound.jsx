import Button from '../components/common/Button'
import { pagesSeo } from '../content/seo'
import { setPageMeta } from '../utils/seo'

export default function NotFound() {
  const { title, description, keywords, robots } = pagesSeo.notFound
  const path = typeof window !== 'undefined' ? window.location.pathname : '/404'

  setPageMeta({
    title,
    description,
    path,
    keywords,
    robots,
  })

  return (
    <section className="grid min-h-[70vh] place-items-center bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_70%)] px-4 py-20 text-center">
      <div>
        <p className="font-display text-7xl font-extrabold text-blue-600">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-slate-950">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600">This page has moved or does not exist. Let’s get you back to the main site.</p>
        <div className="mt-7">
          <Button to="/">Back Home</Button>
        </div>
      </div>
    </section>
  )
}
