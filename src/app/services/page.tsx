import type { Metadata } from 'next'

import { ServicesContent } from './services-content'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Explore NP Tech Solutions services in software development, automation, cloud systems, analytics, and ongoing technical support.'

const services = [
  {
    title: 'Business websites',
    desc: 'High-performance websites that present your business clearly and support lead generation.',
  },
  {
    title: 'Web application',
    desc: 'Operational tools, customer portals, and business platforms designed to simplify daily work.',
  },
  {
    title: 'SEO & performance',
    desc: 'Technical optimization, content structure, and speed improvements that strengthen visibility and usability.',
  },
  {
    title: 'UI/UX systems',
    desc: 'Product interface systems and design patterns that improve usability and consistency.',
  },
  {
    title: 'Digital transformation',
    desc: 'Technology planning and implementation support that helps teams modernize workflows and systems.',
  },
  {
    title: 'Custom development',
    desc: 'Integrations, automations, APIs, and custom functionality tailored to your business needs.',
  },
  {
    title: 'Maintenance & security',
    desc: 'Monitoring, backups, patching, and support that keep systems secure and dependable.',
  },
  {
    title: 'Analytics & reporting',
    desc: 'Dashboards and reporting tools that help teams measure performance and make better decisions.',
  },
]

export const metadata: Metadata = {
  title: 'Services',
  description,
  alternates: { canonical: '/services' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Services', description, '/services'),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    ...services.map((s) => serviceJsonLd(s.title, s.desc, '/services')),
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  )
}
