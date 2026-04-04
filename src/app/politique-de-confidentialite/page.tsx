import type { Metadata } from 'next'
import Link from 'next/link'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { siteConfig } from '@/lib/seo'

const description =
  'Privacy policy - learn how we collect, use, and protect your personal data in compliance with GDPR.'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description,
  alternates: { canonical: '/politique-de-confidentialite' },
  robots: { index: false, follow: false },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Privacy policy',
      description,
      '/politique-de-confidentialite'
    ),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      {
        name: 'Privacy policy',
        path: '/politique-de-confidentialite',
      },
    ]),
  ],
}

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={[{ label: 'Privacy policy' }]} />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Privacy policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: [DD/MM/YYYY]
          </p>

          <article className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground">
            <section className="space-y-3">
              <p>
                {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
                places great importance on protecting your personal data. This
                privacy policy explains what data we collect, why we collect it,
                and how we use it, in compliance with the General Data
                Protection Regulation (GDPR - EU Regulation 2016/679) and
                applicable privacy laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2>1. Data controller</h2>
              <p>The data controller is:</p>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>{siteConfig.name}</li>
                <li>
                  {siteConfig.address.street}, {siteConfig.address.postalCode}{' '}
                  {siteConfig.address.city}
                </li>
                <li>Email: {siteConfig.email}</li>
                <li>Phone: {siteConfig.phone}</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2>2. Personal data collected</h2>
              <p>
                We collect only the data strictly necessary for the purposes
                described below:
              </p>
              <h3 className="pt-2">a) Data collected through the contact form</h3>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>First and last name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Message content</li>
              </ul>
              <h3 className="pt-2">b) Data collected automatically</h3>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>IP address (anonymized if analytics tools are used)</li>
                <li>Browser type and operating system</li>
                <li>Visited pages and visit duration</li>
                <li>Traffic source (referrer)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2>3. Purposes and legal basis for processing</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Purpose
                      </th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Legal basis
                      </th>
                      <th className="py-2 text-left font-semibold text-foreground">
                        Retention period
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    <tr>
                      <td className="py-2.5 pr-4">
                        Respond to your contact requests
                      </td>
                      <td className="py-2.5 pr-4">
                        Consent (Art. 6.1.a GDPR)
                      </td>
                      <td className="py-2.5">3 years after the last contact</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4">Prepare a quote or proposal</td>
                      <td className="py-2.5 pr-4">
                        Pre-contractual measures (Art. 6.1.b)
                      </td>
                      <td className="py-2.5">3 years after the last contact</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4">Analyze website traffic</td>
                      <td className="py-2.5 pr-4">
                        Legitimate interest (Art. 6.1.f)
                      </td>
                      <td className="py-2.5">25 months maximum</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4">Ensure website security</td>
                      <td className="py-2.5 pr-4">
                        Legitimate interest (Art. 6.1.f)
                      </td>
                      <td className="py-2.5">12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h2>4. Recipients of data</h2>
              <p>
                Your personal data is never sold, rented, or transferred to
                third parties for commercial purposes.
              </p>
              <p>It may be shared only with:</p>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>
                  Our technical processors (hosting provider, email provider),
                  strictly within the scope of their duties and under
                  confidentiality agreements
                </li>
                <li>Competent authorities if required by law</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2>5. Transfers of data outside the European Union</h2>
              <p>
                Some of our processors may be located outside the European
                Union. In such cases, transfers are governed by appropriate
                safeguards such as an adequacy decision by the European
                Commission, standard contractual clauses, or any other mechanism
                recognized by the GDPR.
              </p>
            </section>

            <section className="space-y-3">
              <h2>6. Cookies</h2>
              <h3 className="pt-2">a) Strictly necessary cookies</h3>
              <p>
                These cookies are essential for the proper operation of the
                website (theme preferences, session). They do not require your
                consent.
              </p>
              <h3 className="pt-2">b) Analytics cookies (optional)</h3>
              <p>
                [If applicable] We use [Google Analytics / Plausible / Matomo /
                ...] to analyze website traffic. These cookies are placed only
                after your explicit consent.
              </p>
              <p>
                You can change your cookie preferences at any time through the
                [consent banner / cookie settings link] or in your browser
                settings.
              </p>
              <h3 className="pt-2">c) Third-party cookies</h3>
              <p>No advertising or profiling cookies are used on this website.</p>
            </section>

            <section className="space-y-3">
              <h2>7. Your rights</h2>
              <p>
                Under the GDPR and applicable privacy laws, you have the
                following rights regarding your personal data:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>
                  <strong>Right of access</strong> - obtain confirmation that
                  your data is being processed and receive a copy
                </li>
                <li>
                  <strong>Right to rectification</strong> - correct inaccurate
                  or incomplete data
                </li>
                <li>
                  <strong>Right to erasure</strong> - request deletion of your
                  data, within legal limits
                </li>
                <li>
                  <strong>Right to restriction</strong> - temporarily limit the
                  processing of your data
                </li>
                <li>
                  <strong>Right to data portability</strong> - receive your data
                  in a structured, readable format
                </li>
                <li>
                  <strong>Right to object</strong> - object to the processing of
                  your data for legitimate reasons
                </li>
                <li>
                  <strong>Right to withdraw consent</strong> - at any time,
                  without affecting the lawfulness of prior processing
                </li>
              </ul>
              <p>
                To exercise your rights, contact us by email at{' '}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  {siteConfig.email}
                </a>{' '}
                or by post at the address listed above. We respond within a
                maximum of 30 days.
              </p>
              <p>
                If you believe the processing of your data violates your rights,
                you may lodge a complaint with{' '}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  CNIL
                </a>{' '}
                or your local data protection authority.
              </p>
            </section>

            <section className="space-y-3">
              <h2>8. Data security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your data against unauthorized access, loss,
                alteration, or disclosure, including SSL/TLS encryption,
                restricted access, regular backups, and security updates.
              </p>
            </section>

            <section className="space-y-3">
              <h2>9. Minors&apos; data</h2>
              <p>
                This website is not intended for minors under 16. We do not
                knowingly collect personal data relating to minors. If we
                discover that a minor has sent us personal data, we will delete
                it as quickly as possible.
              </p>
            </section>

            <section className="space-y-3">
              <h2>10. Changes to this policy</h2>
              <p>
                We reserve the right to modify this privacy policy at any time.
                The version in force is the one available on this page,
                identified by its last updated date. We encourage you to review
                it regularly.
              </p>
            </section>

            <section className="space-y-3 rounded-xl border border-border/60 bg-muted/20 p-5">
              <p className="text-foreground">
                You can also review our{' '}
                <Link
                  href="/mentions-legales"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Legal notice
                </Link>{' '}
                for information about the website publisher and hosting.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  )
}
