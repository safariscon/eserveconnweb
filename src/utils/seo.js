import { company } from '../content/company'
import {
  brandNames,
  defaultOgImage,
  defaultOgImageAlt,
  keywordsToString,
  siteName,
  siteUrl,
} from '../content/seo'

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

export function setPageMeta({
  title,
  description,
  path = '/',
  image,
  imageAlt,
  type = 'website',
  structuredData,
  keywords,
  robots = 'index, follow',
}) {
  const url = canonicalUrl(path)
  const shareImage = image || defaultOgImage
  const shareImageAlt = imageAlt || defaultOgImageAlt

  document.title = title
  document.documentElement.lang = 'en'

  setMetaAttribute('meta[name="description"]', 'content', description)
  setMetaAttribute('meta[name="robots"]', 'content', robots)
  setMetaAttribute('meta[name="googlebot"]', 'content', robots)
  setMetaAttribute('meta[name="author"]', 'content', 'Eserveconn Ltd')
  setMetaAttribute('meta[name="language"]', 'content', 'English')
  setMetaAttribute('meta[name="geo.region"]', 'content', 'RW')
  setMetaAttribute('meta[name="geo.placename"]', 'content', 'Gisenyi, Rubavu District, Kigali, Rwanda')
  setMetaAttribute('meta[name="ICBM"]', 'content', '-1.7036, 29.2564')
  if (keywords?.length) {
    setMetaAttribute('meta[name="keywords"]', 'content', keywordsToString(keywords))
  }
  setLink('link[rel="canonical"]', 'canonical', url)

  setMetaAttribute('meta[property="og:title"]', 'content', title)
  setMetaAttribute('meta[property="og:description"]', 'content', description)
  setMetaAttribute('meta[property="og:url"]', 'content', url)
  setMetaAttribute('meta[property="og:type"]', 'content', type)
  setMetaAttribute('meta[property="og:site_name"]', 'content', siteName)
  setMetaAttribute('meta[property="og:locale"]', 'content', 'en_US')
  setMetaAttribute('meta[property="og:image"]', 'content', shareImage)
  setMetaAttribute('meta[property="og:image:alt"]', 'content', shareImageAlt)
  setMetaAttribute('meta[property="og:image:type"]', 'content', 'image/png')
  setMetaAttribute('meta[property="og:image:width"]', 'content', '1200')
  setMetaAttribute('meta[property="og:image:height"]', 'content', '630')

  setMetaAttribute('meta[name="twitter:card"]', 'content', 'summary_large_image')
  setMetaAttribute('meta[name="twitter:title"]', 'content', title)
  setMetaAttribute('meta[name="twitter:description"]', 'content', description)
  setMetaAttribute('meta[name="twitter:image"]', 'content', shareImage)
  setMetaAttribute('meta[name="twitter:image:alt"]', 'content', shareImageAlt)

  setJsonLd('page-structured-data', structuredData)
}

export function organizationSchema(description) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
    name: siteName,
    legalName: company.name,
    alternateName: brandNames.filter((name) => name !== siteName),
    url: canonicalUrl('/'),
    logo: `${siteUrl}/favicon-192.png`,
    image: defaultOgImage,
    description,
    email: company.email,
    telephone: '+250788836180',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gisenyi',
      addressRegion: 'Rubavu District',
      addressCountry: 'RW',
    },
    areaServed: [
      { '@type': 'City', name: 'Kigali' },
      { '@type': 'City', name: 'Gisenyi' },
      { '@type': 'AdministrativeArea', name: 'Rubavu District' },
      { '@type': 'Country', name: 'Rwanda' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: company.email,
      telephone: '+250788836180',
      contactType: 'customer support',
      areaServed: ['RW', 'Kigali'],
      availableLanguage: ['English', 'Kinyarwanda'],
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    alternateName: ['eServeConn', 'eServe Connect', 'eServe Connection', 'ServiceConn', 'Service Connect', 'Eserve Conn', 'Eserve', 'eservecon', 'eserve con', 'Eservecon'],
    url: canonicalUrl('/'),
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: canonicalUrl('/'),
    },
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  }
}

export function webPageSchema({ title, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl(path),
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: canonicalUrl('/'),
    },
    about: {
      '@type': 'Organization',
      name: siteName,
    },
  }
}

export const seoDefaults = {
  siteName,
  siteUrl,
}
