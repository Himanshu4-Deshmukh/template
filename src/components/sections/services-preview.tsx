'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Cloud,
  Cpu,
  Database,
  PanelsTopLeft,
  ShieldCheck,
  ShoppingCart,
} from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'Custom software',
    desc: 'Internal tools, portals, and workflow systems built around how your team actually works.',
    accent: '#3B6FE8',
    bg: '#EEF3FD',
    ring: '#C7D8FA',
  },
  {
    icon: Cloud,
    title: 'Cloud solutions',
    desc: 'Scalable cloud setups, deployments, and infrastructure guidance to keep your systems reliable.',
    accent: '#0E9B7A',
    bg: '#E6F7F3',
    ring: '#B3E8DA',
  },
  {
    icon: Database,
    title: 'Automation & data',
    desc: 'Integrations, reporting, and process automation that reduce manual work and improve visibility.',
    accent: '#7C3AED',
    bg: '#F3EEFF',
    ring: '#D9C7F9',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce solutions',
    desc: 'Elevate commerce with online stores, checkout flows, and integrations built to support growth.',
    accent: '#4F46E5',
    bg: '#EEF2FF',
    ring: '#C7D2FE',
  },
  {
    icon: PanelsTopLeft,
    title: 'WordPress solutions',
    desc: 'Empower your online presence with flexible WordPress websites and easy content management.',
    accent: '#2563EB',
    bg: '#EFF6FF',
    ring: '#BFDBFE',
  },
  {
    icon: ShieldCheck,
    title: 'Security & support',
    desc: 'Ongoing maintenance, monitoring, and technical support to keep business-critical systems secure.',
    accent: '#D97706',
    bg: '#FEF5E7',
    ring: '#FAD9A0',
  },
] as const

const ease = [0.22, 1, 0.36, 1] as const

export function ServicesPreview() {
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #F8F9FC 0%, #FFFFFF 50%, #F4F6FB 100%)',
        borderBottom: '1px solid #E4E8F0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .services-preview-heading {
            gap: 1.25rem !important;
          }

          .services-preview-grid {
            grid-template-columns: 1fr !important;
          }

          .services-preview-card {
            padding: 1.6rem 1.35rem !important;
          }
        }
      `}</style>
      {/* Decorative blobs */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-180px',
          right: '-120px',
          width: '680px',
          height: '680px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(59,111,232,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-160px',
          left: '-100px',
          width: '580px',
          height: '580px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '96rem',
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 4rem) clamp(4.5rem, 8vw, 8rem)',
          position: 'relative',
        }}
      >
        {/* Eyebrow + heading row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease }}
          style={{ marginBottom: '4.5rem' }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.17em',
              textTransform: 'uppercase',
              color: '#3B6FE8',
              background: '#EEF3FD',
              border: '1px solid #C7D8FA',
              borderRadius: '999px',
              padding: '6px 18px',
              marginBottom: '1.5rem',
            }}
          >
            Tech solutions
          </span>

          {/* Heading + description: side-by-side */}
          <div
            className="services-preview-heading"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '4rem',
              flexWrap: 'wrap',
            }}
          >
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2.8rem, 5vw, 4.25rem)',
                fontWeight: 700,
                color: '#0F172A',
                lineHeight: 1.08,
                maxWidth: '52rem',
                margin: 0,
                letterSpacing: '-0.03em',
              }}
            >
              Built for operations,{' '}
              <em style={{ fontStyle: 'italic', color: '#3B6FE8' }}>scale</em>
              , and speed
            </h2>

            <p
              style={{
                fontSize: '1.2rem',
                color: '#4B5C76',
                maxWidth: '30rem',
                lineHeight: 1.76,
                margin: 0,
                paddingBottom: '0.4rem',
              }}
            >
              From customer-facing platforms to internal systems, we deliver
              practical technology that solves real business problems.
            </p>
          </div>
        </motion.div>

        {/* Cards grid — enforces 4 cols at wide widths */}
        <div
          className="services-preview-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '1.75rem',
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.07 }}
              style={{ height: '100%' }}
            >
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease, delay: 0.35 }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <a
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0.9rem 2.2rem',
              fontSize: '1.0625rem',
              fontWeight: 600,
              color: '#0F172A',
              background: '#FFFFFF',
              border: '1.5px solid #D1D9E8',
              borderRadius: '999px',
              textDecoration: 'none',
              boxShadow: '0 1px 4px rgba(15,23,42,0.07)',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.borderColor = '#3B6FE8'
              el.style.color = '#3B6FE8'
              el.style.boxShadow = '0 2px 10px rgba(59,111,232,0.14)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.borderColor = '#D1D9E8'
              el.style.color = '#0F172A'
              el.style.boxShadow = '0 1px 4px rgba(15,23,42,0.07)'
            }}
          >
            Explore all solutions
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
}: {
  service: {
    icon: React.ElementType
    title: string
    desc: string
    accent: string
    bg: string
    ring: string
  }
}) {
  const Icon = service.icon

  return (
    <div
      className="services-preview-card"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E4E8F0',
        borderRadius: '1.5rem',
        padding: '2.5rem 2.25rem',
        height: '100%',
        boxShadow:
          '0 1px 3px rgba(15,23,42,0.06), 0 4px 16px rgba(15,23,42,0.04)',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-5px)'
        el.style.boxShadow =
          '0 8px 20px rgba(15,23,42,0.09), 0 20px 48px rgba(15,23,42,0.07)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0)'
        el.style.boxShadow =
          '0 1px 3px rgba(15,23,42,0.06), 0 4px 16px rgba(15,23,42,0.04)'
      }}
    >
      {/* Icon badge */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '3.75rem',
          height: '3.75rem',
          borderRadius: '1rem',
          background: service.bg,
          border: `1.5px solid ${service.ring}`,
          marginBottom: '1.75rem',
          color: service.accent,
          flexShrink: 0,
        }}
      >
        <Icon size={24} aria-hidden />
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#0F172A',
          margin: '0 0 0.75rem',
          letterSpacing: '-0.018em',
          lineHeight: 1.22,
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '1.05rem',
          color: '#4B5C76',
          lineHeight: 1.76,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {service.desc}
      </p>

      {/* Bottom accent line */}
      <div
        style={{
          marginTop: '2rem',
          height: '3px',
          borderRadius: '999px',
          background: `linear-gradient(90deg, ${service.accent}45 0%, ${service.accent}08 100%)`,
          width: '48%',
        }}
      />
    </div>
  )
}
