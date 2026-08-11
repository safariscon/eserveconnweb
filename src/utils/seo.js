const siteUrl = 'https://eserveconn.com'
const siteName = 'Eserveconn'

function setMetaAttribute(selector, attribute, value) {
  if (!value) return

  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    if (selector.includes('property=')) {
      element.setAttribute('property', selector.match(/"([^"]+)"/)[1])
    } else {
      element.setAttribute('name', selector.match(/"([^"]+)"/)[1])
    }
    document.head.appendChild(element)
  }

  element.setAttribute(attribute, value)
}

function setLink(selector, rel, href) {
  if (!href) return

  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

function setJsonLd(id, data) {
  const existing = document.getElementById(id)

  if (!data) {
    existing?.remove()
    return
  }

  const element = existing || document.createElement('script')
  element.id = id
  element.type = 'application/ld+json'
  element.textContent = JSON.stringify(data)

  if (!existing) {
    document.head.appendChild(element)
  }
}

export function canonicalUrl(path = '/') {
  return `${siteUrl}${path === '/' ? '/' : path}`
}

export function setPageMeta({ title, description, path = '/', image, type = 'website', structuredData }) {
  const url = canonicalUrl(path)

  document.title = title

  setMetaAttribute('meta[name="description"]', 'content', description)
  setMetaAttribute('meta[name="robots"]', 'content', 'index, follow')
  setLink('link[rel="canonical"]', 'canonical', url)

  setMetaAttribute('meta[property="og:title"]', 'content', title)
  setMetaAttribute('meta[property="og:description"]', 'content', description)
  setMetaAttribute('meta[property="og:url"]', 'content', url)
  setMetaAttribute('meta[property="og:type"]', 'content', type)
  setMetaAttribute('meta[property="og:site_name"]', 'content', siteName)

  setMetaAttribute('meta[name="twitter:card"]', 'content', image ? 'summary_large_image' : 'summary')
  setMetaAttribute('meta[name="twitter:title"]', 'content', title)
  setMetaAttribute('meta[name="twitter:description"]', 'content', description)

  if (image) {
    setMetaAttribute('meta[property="og:image"]', 'content', image)
    setMetaAttribute('meta[name="twitter:image"]', 'content', image)
  }

  setJsonLd('page-structured-data', structuredData)
}

export const seoDefaults = {
  siteName,
  siteUrl,
}
