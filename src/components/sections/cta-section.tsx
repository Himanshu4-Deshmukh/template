'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

export function CtaSection() {
  return (
    <section
      style={{
        background:
          'linear-gradient(160deg, #EEF3FF 0%, #FFFFFF 45%, #F4F6FB 100%)',
      }}
    >
      <style>{`
        @keyframes float-a {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes float-b {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(14px) scale(0.97); }
        }
        @media (max-width: 767px) {
          .cta-shell {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .cta-panel {
            border-radius: 1.5rem !important;
            padding: 2.75rem 1.25rem !important;
          }
          .cta-actions {
            width: 100%;
            flex-direction: column;
          }
          .cta-actions a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div
        className="cta-shell"
        style={{
          maxWidth: '96rem',
          margin: '0 auto',
          padding: 'clamp(5rem, 9vw, 8rem) 4rem',
        }}
      >
        <motion.div
          className="cta-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '2.5rem',
            border: '1px solid #C8D8F8',
            background: 'linear-gradient(170deg, #FFFFFF 0%, #F7FAFF 100%)',
            padding: 'clamp(4rem, 8vw, 6.5rem) clamp(2rem, 6vw, 5rem)',
            textAlign: 'center',
            boxShadow:
              '0 8px 48px rgba(59,111,232,0.10), 0 2px 8px rgba(15,23,42,0.05), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          {/* Animated glow orb — top-left */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: '-80px',
              left: '-60px',
              width: 380,
              height: 380,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(59,111,232,0.13) 0%, transparent 70%)',
              animation: 'float-a 7s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Animated glow orb — bottom-right */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              bottom: '-70px',
              right: '-50px',
              width: 320,
              height: 320,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
              animation: 'float-b 9s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Ambient glow — top-center */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(900px circle at 50% -5%, rgba(59,111,232,0.09) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          {/* Dot grid */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(circle, rgba(59,111,232,0.18) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              maskImage:
                'radial-gradient(ellipse 75% 55% at 50% 0%, black 20%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 75% 55% at 50% 0%, black 20%, transparent 100%)',
              pointerEvents: 'none',
              opacity: 0.45,
            }}
          />

          {/* Top highlight line */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: 0,
              left: '15%',
              right: '15%',
              height: '2px',
              background:
                'linear-gradient(90deg, transparent, rgba(59,111,232,0.55) 40%, rgba(139,92,246,0.4) 60%, transparent)',
              borderRadius: '0 0 999px 999px',
            }}
          />

          {/* Corner accent dots */}
          {[
            { top: '1.5rem', left: '2rem' },
            { top: '1.5rem', right: '2rem' },
            { bottom: '1.5rem', left: '2rem' },
            { bottom: '1.5rem', right: '2rem' },
          ].map((pos, i) => (
            <div
              key={i}
              aria-hidden
              style={{
                position: 'absolute',
                ...pos,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#3B6FE8',
                opacity: 0.25,
              }}
            />
          ))}

          {/* ── Content ── */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.75rem',
            }}
          >
            {/* Eyebrow pill */}
            <motion.span
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease, delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#3B6FE8',
                background: 'linear-gradient(135deg, #EEF3FD 0%, #E8EFFE 100%)',
                border: '1px solid #C7D8FA',
                borderRadius: 999,
                padding: '7px 20px',
                boxShadow: '0 1px 6px rgba(59,111,232,0.12)',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#3B6FE8',
                  display: 'inline-block',
                  boxShadow: '0 0 0 3px rgba(59,111,232,0.2)',
                }}
              />
              Need a technology partner?
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.15 }}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2.6rem, 4.8vw, 4rem)',
                fontWeight: 700,
                color: '#0A1628',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                maxWidth: '36rem',
                margin: 0,
              }}
            >
              Let&apos;s build the{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <em style={{ fontStyle: 'italic', color: '#3B6FE8' }}>
                  right solution
                </em>
                {/* squiggly underline */}
                <svg
                  aria-hidden
                  viewBox="0 0 200 10"
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: 0,
                    width: '100%',
                    height: 8,
                    overflow: 'visible',
                  }}
                >
                  <path
                    d="M0,5 Q25,0 50,5 Q75,10 100,5 Q125,0 150,5 Q175,10 200,5"
                    fill="none"
                    stroke="#3B6FE8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.45"
                  />
                </svg>
              </span>
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.175rem)',
                color: '#4B5C76',
                lineHeight: 1.8,
                maxWidth: '38rem',
                margin: 0,
              }}
            >
              Share your goals, systems, or operational challenges and we&apos;ll
              help map out a practical technical approach — no jargon, no pressure.
            </motion.p>

            {/* Button row */}
            <motion.div
              className="cta-actions"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.26 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: '0.5rem',
              }}
            >
              <CtaButton href="/contact">
                Talk to our team
                <ArrowRight size={18} />
              </CtaButton>

              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.975rem',
                  fontWeight: 600,
                  color: '#4B5C76',
                  textDecoration: 'none',
                  padding: '0.875rem 1.6rem',
                  borderRadius: 999,
                  border: '1.5px solid #D6E0F0',
                  background: 'rgba(255,255,255,0.75)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = '#3B6FE8'
                  el.style.color = '#3B6FE8'
                  el.style.background = '#EEF3FD'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = '#D6E0F0'
                  el.style.color = '#4B5C76'
                  el.style.background = 'rgba(255,255,255,0.75)'
                }}
              >
                View services
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.34 }}
              style={{
                fontSize: '0.8rem',
                color: '#94A3B8',
                margin: 0,
                letterSpacing: '0.02em',
              }}
            >
              No commitment required &nbsp;·&nbsp; Response within 1 business day
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CtaButton({
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
        gap: 10,
        padding: '0.9rem 2.2rem',
        fontSize: '1.0625rem',
        fontWeight: 600,
        color: '#FFFFFF',
        background: 'linear-gradient(135deg, #3B6FE8 0%, #2554C7 100%)',
        border: '1.5px solid transparent',
        borderRadius: 999,
        textDecoration: 'none',
        boxShadow:
          '0 2px 14px rgba(59,111,232,0.35), 0 1px 3px rgba(59,111,232,0.2)',
        transition: 'all 0.22s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = 'linear-gradient(135deg, #4A7CF0 0%, #2F5FD4 100%)'
        el.style.boxShadow =
          '0 6px 28px rgba(59,111,232,0.45), 0 1px 4px rgba(59,111,232,0.22)'
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = 'linear-gradient(135deg, #3B6FE8 0%, #2554C7 100%)'
        el.style.boxShadow =
          '0 2px 14px rgba(59,111,232,0.35), 0 1px 3px rgba(59,111,232,0.2)'
        el.style.transform = 'translateY(0)'
      }}
    >
      {children}
    </Link>
  )
}
