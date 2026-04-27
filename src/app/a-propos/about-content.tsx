'use client'

import { motion } from 'framer-motion'
import { Heart, Lightbulb, Users } from 'lucide-react'

// ── tiny inline primitives so the file is self-contained ──────────────────────
function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <span
        style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase' as const,
          color: '#4B5C76',
        }}
      >
        {eyebrow}
      </span>
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 700,
          color: '#0F172A',
          lineHeight: 1.25,
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  )
}

// ── data ──────────────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const

const values = [
  {
    icon: Heart,
    title: 'Partnership',
    accent: '#3B82F6',
    desc: 'We work like an extension of your team, with communication that stays direct, practical, and accountable.',
  },
  {
    icon: Lightbulb,
    title: 'Clarity',
    accent: '#14B8A6',
    desc: 'We translate technical complexity into clear recommendations, priorities, and implementation steps.',
  },
  {
    icon: Users,
    title: 'Fit-for-purpose',
    accent: '#8B5CF6',
    desc: 'Every solution is shaped around your systems, workflows, and goals rather than a one-size-fits-all stack.',
  },
] as const

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    alt: 'Team brainstorming',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    alt: 'Bright workspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
    alt: 'Strategy and planning',
  },
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
    alt: 'Everyday collaboration',
  },
]

// ── component ─────────────────────────────────────────────────────────────────
export function AboutContent() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: '#FFFFFF',
        color: '#0F172A',
        minHeight: '100vh',
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

      {/* ── Hero ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.18)',
          }}
        />
        {/* blue tint overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(30,58,138,0.6) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            maxWidth: 960,
            margin: '0 auto',
            padding: '100px 24px 96px',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            style={{
              display: 'inline-block',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#93C5FD',
              marginBottom: 20,
              padding: '4px 12px',
              border: '1px solid rgba(147,197,253,0.35)',
              borderRadius: 999,
            }}
          >
            About
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.07 }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.18,
              maxWidth: 680,
              margin: '0 0 22px',
            }}
          >
            A technology team focused on{' '}
            <em style={{ fontStyle: 'italic', color: '#93C5FD' }}>
              practical impact
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.14 }}
            style={{
              fontSize: '1.05rem',
              color: '#CBD5E1',
              maxWidth: 560,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            RockChain Technologies helps organizations modernize operations with
            software, automation, and digital systems that are reliable,
            scalable, and easy to adopt.
          </motion.p>
        </div>
      </section>

      {/* ── Values ── */}
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
            top: '-120px',
            right: '-120px',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-80px',
            width: 320,
            height: 320,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            maxWidth: 960,
            margin: '0 auto',
            padding: '80px 24px',
          }}
        >
          <SectionTitle
            eyebrow="Our values"
            title="How we approach every engagement"
          />

          <div
            style={{
              marginTop: 52,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.06 }}
              >
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: 16,
                    padding: '28px 26px 30px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.transform =
                      'translateY(-3px)'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                      '0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.06)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.transform =
                      'translateY(0)'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                      '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)'
                  }}
                >
                  {/* accent line bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: v.accent,
                      borderRadius: '0 0 16px 16px',
                    }}
                  />

                  {/* icon */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: `${v.accent}18`,
                      border: `1px solid ${v.accent}30`,
                      marginBottom: 18,
                    }}
                  >
                    <v.icon
                      size={20}
                      style={{ color: v.accent }}
                      aria-hidden
                    />
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      margin: '0 0 10px',
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#64748B',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo gallery ── */}
      <section
        style={{ borderBottom: '1px solid #E2E8F0', background: '#FFFFFF' }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: '80px 24px',
          }}
        >
          <SectionTitle
            eyebrow="Inside the work"
            title="How we build and collaborate"
          />

          <div
            style={{
              marginTop: 52,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 12,
            }}
          >
            {photos.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.06 }}
                style={{ overflow: 'hidden', borderRadius: 16 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.transform =
                      'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.transform =
                      'scale(1)'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: '80px 24px',
            textAlign: 'center',
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700,
              color: '#0F172A',
              margin: '0 0 16px',
            }}
          >
            Ready to modernize your operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease, delay: 0.07 }}
            style={{
              fontSize: '1rem',
              color: '#64748B',
              maxWidth: 480,
              margin: '0 auto 32px',
              lineHeight: 1.65,
            }}
          >
            Let's talk about your goals and how we can help you get there.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease, delay: 0.14 }}
            style={{
              display: 'inline-block',
              padding: '13px 32px',
              borderRadius: 999,
              border: '1.5px solid #3B82F6',
              color: '#3B82F6',
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background =
                '#3B82F6'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background =
                'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#3B82F6'
            }}
          >
            Get in touch →
          </motion.a>
        </div>
      </section>
    </div>
  )
}