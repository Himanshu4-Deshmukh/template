import type { Metadata } from 'next'
import Link from 'next/link'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { siteConfig } from '@/lib/seo'

const description =
  'Legal notice for the website - information about the publisher, hosting, intellectual property, and conditions of use.'

export const metadata: Metadata = {
  title: 'Legal notice',
  description,
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false, follow: false },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Legal notice', description, '/mentions-legales'),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Legal notice', path: '/mentions-legales' },
    ]),
  ],
}

export default function LegalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={[{ label: 'Legal notice' }]} />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Legal notice
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: [DD/MM/YYYY]
          </p>

          <article className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground">
            <section className="space-y-3">
              <h2>1. Website publisher</h2>
              <p>
                The website <strong>{siteConfig.url}</strong> is published by:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>Company name: {siteConfig.name}</li>
                <li>Legal form: [LLC / Corporation / Sole proprietorship / etc.]</li>
                <li>Share capital: [To be completed] EUR</li>
                <li>Business registration number: [To be completed]</li>
                <li>Trade register: [City] [Number]</li>
                <li>VAT number: [To be completed]</li>
                <li>
                  Registered office: {siteConfig.address.street},{' '}
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </li>
                <li>Phone: {siteConfig.phone}</li>
                <li>Email: {siteConfig.email}</li>
              </ul>
              <p>Publishing director: [Name of responsible person]</p>
            </section>

            <section className="space-y-3">
              <h2>2. Hosting</h2>
              <p>The website is hosted by:</p>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>Company name: [Hosting provider name - e.g. Netlify, OVH, Vercel]</li>
                <li>Address: [Hosting provider address]</li>
                <li>Phone: [Hosting provider phone]</li>
                <li>Website: [Hosting provider URL]</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2>3. Intellectual property</h2>
              <p>
                All content available on the website (texts, photographs,
                illustrations, logos, icons, graphic elements, videos,
                databases, source code) is protected by French and
                international intellectual property laws.
              </p>
              <p>
                Any reproduction, representation, modification, publication, or
                adaptation of these elements, in whole or in part, by any means
                whatsoever, is prohibited without prior written authorization
                from {siteConfig.name}.
              </p>
              <p>
                Any unauthorized use of the website or its content will be
                considered infringement and may be prosecuted under applicable
                intellectual property laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2>4. Limitation of liability</h2>
              <p>
                {siteConfig.name} strives to provide information on the website
                that is as accurate as possible. However, it cannot be held
                liable for omissions, inaccuracies, or failures to update,
                whether caused by itself or by third-party partners supplying
                such information.
              </p>
              <p>
                {siteConfig.name} cannot be held liable for direct or indirect
                damage caused to a user&apos;s equipment when accessing the website,
                whether resulting from hardware that does not meet required
                technical specifications or from bugs or incompatibilities.
              </p>
            </section>

            <section className="space-y-3">
              <h2>5. Hyperlinks</h2>
              <p>
                The website may contain hyperlinks to other websites. However,
                {siteConfig.name} is not able to verify the content of those
                external websites and therefore accepts no liability for them.
              </p>
              <p>
                Creating hyperlinks to this website requires prior written
                authorization from {siteConfig.name}.
              </p>
            </section>

            <section className="space-y-3">
              <h2>6. Governing law and jurisdiction</h2>
              <p>
                These legal notices are governed by French law. In the event of
                a dispute, and after any attempt to reach an amicable solution
                has failed, French courts shall have exclusive jurisdiction.
              </p>
            </section>

            <section className="space-y-3">
              <h2>7. Credits</h2>
              <p>Design and development: [To be completed]</p>
              <p>Photo credits: [To be completed]</p>
            </section>

            <section className="space-y-3 rounded-xl border border-border/60 bg-muted/20 p-5">
              <p className="text-foreground">
                To learn more about how we collect and process personal data,
                please see our{' '}
                <Link
                  href="/politique-de-confidentialite"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Privacy policy
                </Link>
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  )
}
