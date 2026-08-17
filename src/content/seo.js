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
  'eServeConn Rwanda',
  'eServeConn Kigali',
  'eServeConn software',
  'eServeConn software company',
  'eServeConn technology',
  'eServeConn developers',
  'eServeConn development company',
  'eServeConn software development',
  'eServeConn web development',
  'eServeConn application development',
  'eServeConn platform',
  'eServeConn solutions',
  'eServeConn Rwanda software',
  'eServeConn Kigali software',
  'eServeConn Services',
  'eServeConn App',
  'eServeConn Website',
  'ServiceConn',
  'Service Connect',
  'Service Connection',
  'service connection',
  'ServiceConn Rwanda',
  'Service Connect Rwanda',
  'service connection company',
  'service connection platform',
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
  'Eserve Conn',
  'Eserve',
  'ServeConn',
]

export const defaultKeywords = [
  'eServeConn',
  'eServe Connect',
  'eServe Connection',
  'eServeConn Rwanda',
  'eServeConn Kigali',
  'eServeConn software',
  'eServeConn software company',
  'eServeConn technology',
  'eServeConn developers',
  'eServeConn development company',
  'eServeConn software development',
  'eServeConn web development',
  'eServeConn application development',
  'eServeConn platform',
  'eServeConn solutions',
  'eServeConn Rwanda software',
  'eServeConn Kigali software',
  'ServiceConn',
  'Service Connect',
  'Service Connection',
  'service connection',
  'ServiceConn Rwanda',
  'Service Connect Rwanda',
  'service connection company',
  'service connection platform',
  'software company Rwanda',
  'software developers Rwanda',
  'software development company Rwanda',
  'web development company Rwanda',
  'technology company Rwanda',
  'IT company Rwanda',
  'software solutions Rwanda',
  'technology solutions Rwanda',
  'digital solutions Rwanda',
  'eservecon',
  'eserve con',
  'Eservecon',
]

export const pagesSeo = {
  home: {
    path: '/',
    title: 'eServeConn | Software Company Rwanda | Service Connection',
    description:
      'eServeConn is a software company in Rwanda and a service connection platform. Also known as eServe Connect, ServiceConn, and Service Connection. If you searched eservecon, this is the official eServeConn website for software development, web development, and digital solutions in Kigali and Rwanda.',
    keywords: defaultKeywords,
  },
  about: {
    path: '/about',
    title: 'About Eserveconn | Technology & Software Solutions in Rwanda',
    description:
      'About eServeConn, a software development company in Rwanda also known as eServe Connect, ServiceConn, and Service Connection. eServeConn Rwanda and eServeConn Kigali build software, web applications, and a service connection platform. Searches for eservecon still refer to this company.',
    keywords: [
      ...defaultKeywords,
      'About eServeConn',
      'eServeConn developers',
      'technology company Rwanda',
    ],
  },
  services: {
    path: '/services',
    title: 'Eserveconn Services | Software, Web & Digital Solutions',
    description:
      'eServeConn software development, web development, application development, and technology solutions in Rwanda. eServeConn is a software company and service connection company in Kigali offering digital solutions, IT services, and a service connection platform.',
    keywords: [
      ...defaultKeywords,
      'eServeConn Services',
      'software development Rwanda',
      'web development Rwanda',
    ],
  },
  products: {
    path: '/products',
    title: 'Products | SafariScon Platform by Eserveconn Ltd',
    description:
      'The eServeConn platform and SafariScon service connection platform by eServeConn, a software company in Rwanda. Service Connection and ServiceConn products help people find and book services in Kigali and nationwide.',
    keywords: [
      ...defaultKeywords,
      'SafariScon',
      'eServeConn platform',
      'service marketplace',
    ],
  },
  team: {
    path: '/team',
    title: 'Team | Eserveconn Ltd',
    description:
      'Meet the eServeConn developers and software team in Rwanda. eServeConn, also known as eServe Connect and ServiceConn, is a software development company in Kigali building digital solutions and a service connection platform.',
    keywords: [
      ...defaultKeywords,
      'eServeConn developers',
      'eServeConn team',
    ],
  },
  contact: {
    path: '/contact',
    title: 'Contact Eserveconn | Digital Solutions & Software Development',
    description:
      'Contact eServeConn, the software company Rwanda and service connection company behind eServe Connect and ServiceConn. Reach eServeConn Kigali and eServeConn Rwanda for software development, web development, and digital solutions. If you searched eservecon, this is the official contact page.',
    keywords: [
      ...defaultKeywords,
      'Contact eServeConn',
      'eServeConn Kigali',
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
