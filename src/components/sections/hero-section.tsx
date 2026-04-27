'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { ValuesMarquee } from '@/components/sections/values-marquee'

const ease = [0.22, 1, 0.36, 1] as const

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
    alt: 'Modern workspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80',
    alt: 'Team in a collaborative meeting',
  },
  {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80',
    alt: 'Digital strategy and innovation',
  },
]

const INTERVAL = 5000

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        borderBottom: '1px solid #E4E8F0',
      }}
    >
      {/* Background slideshow */}
      <div aria-hidden style={{ position: 'absolute', inset: 0 }}>
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={slides[current].src}
            alt=""
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </AnimatePresence>

        {/* Light frosted overlay — keeps image visible but desaturated/bright */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(248, 249, 252, 0.72)',
            backdropFilter: 'saturate(0.7) brightness(1.08)',
          }}
        />

        {/* Gradient fade: strong at bottom so marquee blends, soft at top */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(248,249,252,0.30) 0%, rgba(248,249,252,0.18) 50%, rgba(248,249,252,0.80) 100%)',
          }}
        />

        {/* Left-side vignette for text contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 80% at 50% 40%, transparent 30%, rgba(248,249,252,0.30) 100%)',
          }}
        />
      </div>

      {/* Decorative accent blob */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-60px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(59,111,232,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          maxWidth: '72rem',
          margin: '0 auto',
          padding: 'clamp(5rem, 10vw, 10rem) 1.5rem clamp(4rem, 8vw, 7rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#3B6FE8',
              background: 'rgba(255,255,255,0.85)',
              border: '1px solid #C7D8FA',
              borderRadius: '999px',
              padding: '5px 14px',
              backdropFilter: 'blur(6px)',
              boxShadow: '0 1px 6px rgba(59,111,232,0.10)',
            }}
          >
           RockChain Technologies
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2.1rem, 5.5vw, 3.6rem)',
              fontWeight: 700,
              color: '#0F172A',
              lineHeight: 1.13,
              letterSpacing: '-0.025em',
              margin: '1.25rem 0 0',
              textWrap: 'balance',
            }}
          >
            Technology solutions for{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: '#3B6FE8',
                position: 'relative',
              }}
            >
              modern business
            </em>{' '}
            growth
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.28 }}
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: '#3D4F68',
              lineHeight: 1.72,
              maxWidth: '38rem',
              margin: '1.4rem auto 0',
              textWrap: 'pretty',
            }}
          >
            We design websites, business software, automation systems, and digital
            infrastructure that streamline operations and unlock the next stage of growth.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.38 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
              marginTop: '2.25rem',
            }}
          >
            {/* Primary CTA */}
            <PrimaryButton href="/contact">
              Book a consultation
              <ArrowRight size={16} />
            </PrimaryButton>

            {/* Secondary CTA */}
            <SecondaryButton href="/services">
              <Phone size={15} />
              See our solutions
            </SecondaryButton>
          </motion.div>
        </motion.div>

        {/* Slide indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          {slides.map((slide, i) => (
            <button
              key={slide.alt}
              type="button"
              aria-label={`Image ${i + 1}: ${slide.alt}`}
              onClick={() => setCurrent(i)}
              style={{
                height: '3px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.45s ease',
                width: i === current ? '2rem' : '0.9rem',
                background: i === current ? '#3B6FE8' : '#BCC9DE',
                padding: 0,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Values marquee */}
      <div style={{ position: 'relative' }}>
        <ValuesMarquee variant="light" />
      </div>
    </section>
  )
}

/* ── Inline button primitives (no shadcn dependency for light overrides) ── */

function PrimaryButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0.7rem 1.6rem',
        fontSize: '0.9375rem',
        fontWeight: 600,
        color: '#FFFFFF',
        background: 'linear-gradient(135deg, #3B6FE8 0%, #2554C7 100%)',
        border: '1.5px solid transparent',
        borderRadius: '999px',
        textDecoration: 'none',
        boxShadow: '0 2px 10px rgba(59,111,232,0.28), 0 1px 3px rgba(59,111,232,0.18)',
        transition: 'all 0.22s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = 'linear-gradient(135deg, #4A7CF0 0%, #2F5FD4 100%)'
        el.style.boxShadow = '0 4px 18px rgba(59,111,232,0.38), 0 1px 4px rgba(59,111,232,0.22)'
        el.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = 'linear-gradient(135deg, #3B6FE8 0%, #2554C7 100%)'
        el.style.boxShadow = '0 2px 10px rgba(59,111,232,0.28), 0 1px 3px rgba(59,111,232,0.18)'
        el.style.transform = 'translateY(0)'
      }}
    >
      {children}
    </Link>
  )
}

function SecondaryButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0.7rem 1.5rem',
        fontSize: '0.9375rem',
        fontWeight: 600,
        color: '#0F172A',
        background: 'rgba(255,255,255,0.82)',
        border: '1.5px solid #D1D9E8',
        borderRadius: '999px',
        textDecoration: 'none',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 1px 4px rgba(15,23,42,0.08)',
        transition: 'all 0.22s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.borderColor = '#3B6FE8'
        el.style.color = '#3B6FE8'
        el.style.background = 'rgba(255,255,255,0.95)'
        el.style.boxShadow = '0 2px 10px rgba(59,111,232,0.12)'
        el.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.borderColor = '#D1D9E8'
        el.style.color = '#0F172A'
        el.style.background = 'rgba(255,255,255,0.82)'
        el.style.boxShadow = '0 1px 4px rgba(15,23,42,0.08)'
        el.style.transform = 'translateY(0)'
      }}
    >
      {children}
    </Link>
  )
}