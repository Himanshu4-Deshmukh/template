'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  Code,
  Globe,
  Megaphone,
  Palette,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
} from 'lucide-react'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { SectionTitle } from '@/components/ui/section-title'

const ease = [0.22, 1, 0.36, 1] as const

const services = [
  {
    icon: Globe,
    title: 'Business websites',
    accent: '#3B82F6',
    desc: 'High-performance marketing and corporate websites that communicate your value clearly and convert attention into leads.',
  },
  {
    icon: Smartphone,
    title: 'Web applications',
    accent: '#14B8A6',
    desc: 'Dashboards, portals, booking platforms, and internal tools built to simplify complex operations.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce solutions',
    accent: '#7C3AED',
    desc: 'Online stores, checkout experiences, and commerce integrations designed to elevate sales and empower growth.',
  },
  {
    icon: PanelsTopLeft,
    title: 'WordPress solutions',
    accent: '#2563EB',
    desc: 'Custom WordPress websites and content systems that strengthen your online presence and make publishing easier.',
  },
  {
    icon: Search,
    title: 'SEO & performance',
    accent: '#8B5CF6',
    desc: 'Technical optimization, content structure, and speed improvements that increase discoverability and usability.',
  },
  {
    icon: Palette,
    title: 'UI/UX systems',
    accent: '#F59E0B',
    desc: 'Interfaces and design systems that make your products easier to use and your brand more consistent.',
  },
  {
    icon: Megaphone,
    title: 'Digital transformation',
    accent: '#EF4444',
    desc: 'Technology planning and implementation support that helps teams modernize systems and workflows.',
  },
  {
    icon: Code,
    title: 'Custom development',
    accent: '#10B981',
    desc: 'APIs, integrations, automations, and bespoke features tailored to the needs of your business.',
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance & security',
    accent: '#6366F1',
    desc: 'Monitoring, patching, backups, and technical support that protect uptime and reduce risk.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & reporting',
    accent: '#EC4899',
    desc: 'Operational and customer reporting that gives teams clearer data for faster, smarter decisions.',
  },
] as const

export function ServicesContent() {
  return (
    <>
      <style>{`
        @media (max-width: 1023px) {
          .services-content-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 767px) {
          .services-content-shell {
            padding: 64px 20px !important;
          }

          .services-content-grid {
            margin-top: 40px !important;
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .services-content-card {
            padding: 20px 18px 22px !important;
          }
        }
      `}</style>
      <PageHero
        eyebrow="Services"
        title="Technology services built around business outcomes"
        description="We combine engineering, automation, digital platforms, and support services to help organizations work smarter and grow faster."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
        breadcrumb="Services"
      />

      <section
        style={{
          borderBottom: '1px solid #E2E8F0',
          background: '#F8FAFC',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* decorative blobs */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '-140px',
            right: '-100px',
            width: 420,
            height: 420,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '-80px',
            width: 360,
            height: 360,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className="services-content-shell"
          style={{
            position: 'relative',
            maxWidth: '90rem',
            margin: '0 auto',
            padding: '80px 40px',
          }}
        >
          <SectionTitle
            eyebrow="What we do"
            title="Services built around your outcomes"
          />

          <div
            className="services-content-grid"
            style={{
              marginTop: 52,
              display: 'grid',
              gap: 20,
              gridTemplateColumns: 'repeat(4, 1fr)',
            }}
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.03 }}
              >
                <div
                  className="services-content-card"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: 16,
                    padding: '24px 22px 26px',
                    boxShadow:
                      '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(-3px)'
                    el.style.boxShadow =
                      '0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.06)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow =
                      '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)'
                  }}
                >
                  {/* per-card accent line */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: s.accent,
                      borderRadius: '0 0 16px 16px',
                    }}
                  />

                  {/* icon badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: `${s.accent}18`,
                      border: `1px solid ${s.accent}30`,
                      marginBottom: 16,
                    }}
                  >
                    <s.icon size={20} style={{ color: s.accent }} aria-hidden />
                  </div>

                  <h3
                    style={{
                      fontFamily:
                        'var(--font-display, "Playfair Display", Georgia, serif)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      margin: '0 0 8px',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#64748B',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
