'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Shield,
  Cpu,
  Cloud,
  Code2,
  BarChart3,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const capabilities = [
  {
    icon: Cloud,
    tag: 'Infrastructure',
    title: 'Cloud & DevOps',
    description:
      'Scalable cloud architecture on AWS, Azure & GCP. CI/CD pipelines, Kubernetes orchestration, and infrastructure-as-code that cuts deployment time by 70%.',
    highlights: ['Multi-cloud strategy', 'Zero-downtime deployments', 'Cost optimisation'],
    accent: '#3B6FE8',
    bg: '#EEF3FD',
    border: '#C7D8FA',
  },
  {
    icon: Shield,
    tag: 'Security',
    title: 'Cybersecurity',
    description:
      'End-to-end security posture management — from penetration testing and SOC monitoring to compliance automation for ISO 27001, SOC 2 & GDPR.',
    highlights: ['24/7 threat detection', 'Compliance automation', 'Zero-trust architecture'],
    accent: '#0E9F74',
    bg: '#EDFAF5',
    border: '#B4EADA',
  },
  {
    icon: Code2,
    tag: 'Engineering',
    title: 'Custom Software',
    description:
      'Full-cycle product engineering — from architecture design to production launch. Web, mobile, and API platforms built for performance and longevity.',
    highlights: ['Agile delivery', 'API-first design', 'Legacy modernisation'],
    accent: '#7B4FE8',
    bg: '#F3EEFF',
    border: '#D5C5FA',
  },
  {
    icon: BarChart3,
    tag: 'Intelligence',
    title: 'Data & Analytics',
    description:
      'Transform raw data into strategic decisions. Real-time dashboards, ML pipelines, and AI integrations that surface insights your team can act on immediately.',
    highlights: ['Predictive analytics', 'Data warehousing', 'AI/ML integration'],
    accent: '#E87B3B',
    bg: '#FEF3EA',
    border: '#FAD5B4',
  },
  {
    icon: Cpu,
    tag: 'Automation',
    title: 'Process Automation',
    description:
      'RPA and intelligent workflow automation that eliminates repetitive tasks. Our clients report an average of 40 hours saved per team per month.',
    highlights: ['RPA implementation', 'Workflow orchestration', 'ERP integration'],
    accent: '#E83B6F',
    bg: '#FEEEF3',
    border: '#FAB4C8',
  },
  {
    icon: Headphones,
    tag: 'Support',
    title: 'Managed IT Services',
    description:
      'Proactive monitoring and L1–L3 support for your entire IT estate. SLA-backed response times and a dedicated account team that knows your stack.',
    highlights: ['99.9% uptime SLA', 'Dedicated account team', 'Proactive monitoring'],
    accent: '#3BB8E8',
    bg: '#EAFAFF',
    border: '#B4E4FA',
  },
]

const stats = [
  { value: '200+', label: 'Projects delivered' },
  { value: '98%', label: 'Client retention rate' },
  { value: '40h', label: 'Avg. hours saved / month' },
  { value: '15+', label: 'Years of expertise' },
]

export function GalleryCarousel() {
  const [hovered, setHovered] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(160deg, #F8F9FC 0%, #FFFFFF 50%, #F4F6FB 100%)',
        borderBottom: '1px solid #E4E8F0',
        fontFamily: '"DM Sans", system-ui, sans-serif',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .gallery-carousel-grid {
            grid-template-columns: 1fr !important;
          }

          .gallery-carousel-card {
            padding: 1.35rem !important;
          }

          .gallery-carousel-card-top {
            gap: 0.75rem;
            flex-wrap: wrap;
          }

          .gallery-carousel-cta {
            width: 100%;
            justify-content: center !important;
          }
        }
      `}</style>
      <div
        style={{
          maxWidth: '90rem',
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2.5rem)',
        }}
      >
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: '44rem', marginBottom: '3.5rem' }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#3B6FE8',
              background: '#EEF3FD',
              border: '1px solid #C7D8FA',
              borderRadius: '999px',
              padding: '4px 14px',
              marginBottom: '0.9rem',
            }}
          >
            What we do
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.75rem, 3vw, 2.4rem)',
              fontWeight: 700,
              color: '#0F172A',
              letterSpacing: '-0.022em',
              lineHeight: 1.18,
              margin: '0 0 1rem',
            }}
          >
            Full-spectrum IT solutions,{' '}
            <em style={{ fontStyle: 'italic', color: '#3B6FE8' }}>built to scale</em>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#4B5C76',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            From cloud migration to AI-powered automation — we cover every layer of your
            technology stack so you can focus on growing your business.
          </p>
        </motion.div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1px',
            background: '#E4E8F0',
            border: '1px solid #E4E8F0',
            borderRadius: '1rem',
            overflow: 'hidden',
            marginBottom: '3rem',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: '#FFFFFF',
                padding: '1.4rem 1.5rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  color: '#0F172A',
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: '#6B7A96',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Capability cards grid ── */}
        <div
          className="gallery-carousel-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '1.25rem',
          }}
        >
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            const isHovered = hovered === i

            return (
              <motion.div
                key={i}
                className="gallery-carousel-card"
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.08 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#FFFFFF',
                  border: `1.5px solid ${isHovered ? cap.border : '#E4E8F0'}`,
                  borderRadius: '1.1rem',
                  padding: '2rem',
                  cursor: 'default',
                  boxShadow: isHovered
                    ? `0 8px 32px rgba(15,23,42,0.1), 0 2px 8px rgba(15,23,42,0.06)`
                    : '0 1px 3px rgba(15,23,42,0.05)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all 0.28s cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                {/* Icon + tag */}
                <div
                  className="gallery-carousel-card-top"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '1.1rem',
                  }}
                >
                  <div
                    style={{
                      width: '2.6rem',
                      height: '2.6rem',
                      borderRadius: '0.65rem',
                      background: cap.bg,
                      border: `1px solid ${cap.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={17} color={cap.accent} strokeWidth={2} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.67rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: cap.accent,
                      background: cap.bg,
                      border: `1px solid ${cap.border}`,
                      borderRadius: '999px',
                      padding: '3px 10px',
                    }}
                  >
                    {cap.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    margin: '0 0 0.5rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {cap.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#4B5C76',
                    lineHeight: 1.65,
                    margin: '0 0 1.1rem',
                  }}
                >
                  {cap.description}
                </p>

                {/* Highlights */}
                <ul style={{ margin: '0 0 1.25rem', padding: 0, listStyle: 'none' }}>
                  {cap.highlights.map((h, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.8rem',
                        color: '#374151',
                        fontWeight: 500,
                        marginBottom: j < cap.highlights.length - 1 ? '0.35rem' : 0,
                      }}
                    >
                      <CheckCircle2 size={13} color={cap.accent} strokeWidth={2.5} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: cap.accent,
                    borderTop: '1px solid #F1F4F9',
                    paddingTop: '1rem',
                    transition: 'gap 0.2s ease',
                  }}
                >
                  Learn more
                  <ArrowRight
                    size={14}
                    strokeWidth={2.5}
                    style={{
                      transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: '3rem',
            background: 'linear-gradient(110deg, #1E3A8A 0%, #3B6FE8 60%, #5B8DF0 100%)',
            borderRadius: '1.25rem',
            padding: 'clamp(2rem, 4vw, 2.75rem) clamp(1.5rem, 4vw, 3rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: '0 0 0.35rem',
              }}
            >
              Not sure where to start?
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.75)',
                margin: 0,
              }}
            >
              Book a free 30-minute discovery call — no sales pitch, just clarity.
            </p>
          </div>
          <button
            type="button"
            className="gallery-carousel-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#FFFFFF',
              color: '#1E3A8A',
              fontWeight: 700,
              fontSize: '0.9rem',
              border: 'none',
              borderRadius: '0.65rem',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)'
            }}
          >
            Schedule a call
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
