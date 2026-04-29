import type { Metadata } from 'next'

import { CtaSection } from '@/components/sections/cta-section'
import { ExpertiseSection } from '@/components/sections/expertise-section'
import { GalleryCarousel } from '@/components/sections/gallery-carousel'
import { HeroSection } from '@/components/sections/hero-section'
import { IndustriesSection } from '@/components/sections/industries-section'
import { ServicesPreview } from '@/components/sections/services-preview'
import { StorySection } from '@/components/sections/story-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ValuesMarquee } from '@/components/sections/values-marquee'
import {
  localBusinessJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  webSiteJsonLd,
} from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'RockChain Technologies | Software, Web & Mobile App Development',
  description:
    'RockChain Technologies builds custom software, websites, mobile apps, cloud systems, automation, e-commerce, WordPress, and MVP solutions for growing businesses.',
  keywords: [...siteConfig.keywords],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'RockChain Technologies | Software, Web & Mobile App Development',
    description:
      'Custom software, web, mobile app, cloud, automation, e-commerce, WordPress, and MVP development services by RockChain Technologies.',
    url: '/',
    siteName: siteConfig.name,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webSiteJsonLd(),
    organizationJsonLd(),
    localBusinessJsonLd(),
    webPageJsonLd(siteConfig.name, siteConfig.description, '/'),
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ServicesPreview />
      <ExpertiseSection />
      <IndustriesSection />
      <StorySection />
      <TestimonialsSection />
      <GalleryCarousel />
      <CtaSection />
      <ValuesMarquee />
    </>
  )
}
