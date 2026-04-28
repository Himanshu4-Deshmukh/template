export const siteConfig = {
  name: 'RockChain Technologies',
  url: 'https://www.example.com',
  locale: 'en_US',
  description:
    'Smart software, cloud, and automation solutions that help businesses operate faster and scale with confidence.',
  ogImage: 'https://www.example.com/og.png',
  twitterHandle: '@rockchaintech',
  themeColor: '#3B6FE8',
  phone: '8055223358',
  email: 'rockchaintechnologies@gmail.com',
  address: {
    street: 'Nagpur',
    city: 'Nagpur',
    postalCode: '440010',
    country: 'India',
  },
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} — ${siteConfig.name}`
}

export const routes = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/privacy-policy',
  '/legal',
] as const

export type Route = (typeof routes)[number]