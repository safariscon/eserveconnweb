export const siteUrl = 'https://eserveconn.com'
export const siteName = 'Eserveconn'
export const defaultOgImage = `${siteUrl}/og-image.png`
export const defaultOgImageAlt = 'eServeConn digital solutions and service connection platform in Rwanda'

export const brandNames = [
  'Eserveconn',
  'Eserveconn Ltd',
  'eServeConn',
  'eServe Connect',
  'eServe Connection',
  'eServe Service',
  'eServe Services',
  'eServeConn Rwanda',
  'eServeConn Services',
  'eServeConn Platform',
  'eServeConn App',
  'eServeConn Website',
  'ServiceConn',
  'Service Connect',
  'Service Connection',
  'Service Connections',
  'Service Conn',
  'ServiceConn Rwanda',
  'Service Connect Rwanda',
  'Service Connection Rwanda',
  'Service Conn Kigali',
  'Service Connect Kigali',
  'e Serve Conn',
  'e Serve Connect',
  'e Serve Connection',
  'eService Connect',
  'eServices Connect',
  'e Service',
  'e Services',
  'Eserve Conn',
  'Eserve',
  'eservecon',
  'Eservecon',
  'eServeCon',
  'eserve con',
  'Eserve Con',
  'e serve con',
  'eservconn',
  'eservcon',
  'eservecon rwanda',
  'eserve con rwanda',
  'e-serve-conn',
  'eserve-conn',
  'ServeConn',
]

export const defaultKeywords = [
  'eServeConn',
  'eServe Connect',
  'eServe Connection',
  'eServeConn Rwanda',
  'eServeConn Platform',
  'ServiceConn',
  'Service Connect',
  'service connection platform',
  'find service providers',
  'service marketplace',
  'connect customers with services',
  'local service providers',
  'Kigali',
  'Rwanda',
  'eservecon',
  'eserve con',
  'Eservecon',
]

export const pagesSeo = {
  home: {
    path: '/',
    title: 'Eserveconn | Digital Solutions & Software Development in Rwanda',
    description:
      'Eserveconn is a Rwanda-based technology company delivering modern software development, web applications, digital platforms, and innovative technology solutions for businesses and organizations. eServeConn, also known as eServe Connect, ServiceConn, eservecon, and eserve con, is a service connection platform that helps people find service providers, find local professionals, and connect customers with services across Kigali and Rwanda.',
    keywords: [
      ...defaultKeywords,
      'eServeConn App',
      'eServeConn Website',
      'eServe Services',
      'connect service providers',
      'online service connection',
      'services marketplace',
      'service provider marketplace',
      'eservecon',
      'eserve con',
      'eservconn',
    ],
  },
  about: {
    path: '/about',
    title: 'About Eserveconn | Technology & Software Solutions in Rwanda',
    description:
      'Learn about Eserveconn Ltd, a Rwanda-based technology company building software, digital platforms, and practical business solutions. eServeConn Rwanda and ServiceConn Rwanda connect customers to service providers and support local service connection in Kigali and across the country.',
    keywords: [
      'About eServeConn',
      'eServeConn Rwanda',
      'ServiceConn Rwanda',
      'Service Connect Rwanda',
      'Service Connection Rwanda',
      'e Serve Conn',
      'e Serve Connect',
      'local service connection',
      'Kigali',
      'Rwanda',
    ],
  },
  services: {
    path: '/services',
    title: 'Eserveconn Services | Software, Web & Digital Solutions',
    description:
      'Explore Eserveconn software development, mobile app, web application, cloud, API, UI/UX, and support services for organizations in Rwanda. eServeConn Services, eServe Services, and e Service solutions help connect services, connect service providers, and deliver an online service connection for Kigali and Rwanda.',
    keywords: [
      'eServeConn Services',
      'eServe Service',
      'eServe Services',
      'e Service',
      'e Services',
      'connect services',
      'connect service providers',
      'eService Connect',
      'eServices Connect',
      'software development Rwanda',
      'Kigali',
    ],
  },
  products: {
    path: '/products',
    title: 'Products | SafariScon Platform by Eserveconn Ltd',
    description:
      'Discover SafariScon Platform, a smart digital product developed by Eserveconn Ltd. The eServeConn Platform and eServeConn App power a Rwanda service marketplace where people find services, find professionals, and book local service providers in Kigali and nationwide.',
    keywords: [
      'eServeConn Platform',
      'eServeConn App',
      'eServeConn Website',
      'service marketplace',
      'services marketplace',
      'service provider marketplace',
      'find services',
      'find professionals',
      'find local professionals',
      'SafariScon',
      'Kigali',
      'Rwanda',
    ],
  },
  team: {
    path: '/team',
    title: 'Team | Eserveconn Ltd',
    description:
      'Meet the Eserveconn Ltd team building software solutions from Rwanda. The eServeConn Rwanda team designs service connection platforms that help customers find local professionals and connect with trusted service providers in Kigali and across Rwanda.',
    keywords: [
      'eServeConn Rwanda',
      'eServeConn team',
      'ServiceConn',
      'find local professionals',
      'Kigali',
      'Rwanda',
    ],
  },
  contact: {
    path: '/contact',
    title: 'Contact Eserveconn | Digital Solutions & Software Development',
    description:
      'Contact Eserveconn Ltd in Gisenyi, Rubavu District, Rwanda for software development, web applications, and digital solution projects. Reach Service Connect Kigali, Service Conn Kigali, and eServeConn Rwanda for service connection, software, and marketplace support.',
    keywords: [
      'Contact eServeConn',
      'Service Conn Kigali',
      'Service Connect Kigali',
      'eServeConn Rwanda',
      'Service Conn',
      'Gisenyi',
      'Kigali',
      'Rwanda',
    ],
  },
  notFound: {
    path: '/404',
    title: 'Page Not Found | Eserveconn Ltd',
    description: 'The requested Eserveconn Ltd page could not be found.',
    keywords: ['eServeConn', 'Eserveconn'],
    robots: 'noindex, follow',
  },
}

export const knownPaths = Object.values(pagesSeo)
  .filter((page) => page.path !== '/404')
  .map((page) => page.path)

export function getPageSeo(pathname = '/') {
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname || '/'
  const match = Object.values(pagesSeo).find((page) => page.path === normalized)
  return match || pagesSeo.notFound
}

export function keywordsToString(keywords = defaultKeywords) {
  return [...new Set(keywords)].join(', ')
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function replaceMeta(html, attribute, key, content) {
  const pattern = new RegExp(`<meta[^>]*${attribute}="${key}"[^>]*>`, 'i')
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`)
}

function replaceCanonical(html, url) {
  const pattern = /<link[^>]*rel="canonical"[^>]*>/i
  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`)
}

export function applyPageSeoToHtml(html, pathname = '/') {
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname || '/'
  const page = getPageSeo(normalized)
  const isKnown = knownPaths.includes(normalized)
  const url = `${siteUrl}${isKnown ? (page.path === '/' ? '/' : page.path) : normalized}`
  const robots = page.robots || 'index, follow'
  const keywords = keywordsToString(page.keywords)
  const shareDescription = page.description

  let nextHtml = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
  nextHtml = replaceMeta(nextHtml, 'name', 'description', shareDescription)
  nextHtml = replaceMeta(nextHtml, 'name', 'keywords', keywords)
  nextHtml = replaceMeta(nextHtml, 'name', 'robots', robots)
  nextHtml = replaceMeta(nextHtml, 'name', 'googlebot', robots)
  nextHtml = replaceCanonical(nextHtml, url)
  nextHtml = replaceMeta(nextHtml, 'property', 'og:title', page.title)
  nextHtml = replaceMeta(nextHtml, 'property', 'og:description', shareDescription)
  nextHtml = replaceMeta(nextHtml, 'property', 'og:url', url)
  nextHtml = replaceMeta(nextHtml, 'name', 'twitter:title', page.title)
  nextHtml = replaceMeta(nextHtml, 'name', 'twitter:description', shareDescription)
  return nextHtml
}
