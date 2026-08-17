import { products } from '../content/products'
import { services } from '../content/services'
import { slugify } from './helpers'
import { canonicalUrl } from './seo'

export function servicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'eServeConn Services',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'Eserveconn',
          url: canonicalUrl('/'),
        },
        areaServed: ['Kigali', 'Rwanda'],
        url: `${canonicalUrl('/services')}#${slugify(service.title)}`,
      },
    })),
  }
}

export function productsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: products[0].name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
    description: products[0].description,
    url: canonicalUrl('/products'),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      price: '0',
      priceCurrency: 'RWF',
    },
    provider: {
      '@type': 'Organization',
      name: 'Eserveconn',
      url: canonicalUrl('/'),
    },
    featureList: products[0].features,
    audience: {
      '@type': 'Audience',
      geographicArea: [
        { '@type': 'City', name: 'Kigali' },
        { '@type': 'Country', name: 'Rwanda' },
      ],
    },
  }
}
