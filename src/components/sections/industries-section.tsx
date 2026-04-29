'use client'

import { motion } from 'framer-motion'
import {
  Banknote,
  Clapperboard,
  Gamepad2,
  GraduationCap,
  Hospital,
  House,
  Laptop,
  Plane,
  Rocket,
  ShoppingBag,
  ShoppingCart,
  Store,
  Truck,
  UtensilsCrossed,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const industries = [
  { icon: Banknote, label: 'Banking & Finance' },
  { icon: Hospital, label: 'Healthcare & Medicine' },
  { icon: Plane, label: 'Travel & Tourism' },
  { icon: House, label: 'Real Estate' },
  { icon: UtensilsCrossed, label: 'Restaurants' },
  { icon: GraduationCap, label: 'E-learning' },
  { icon: ShoppingCart, label: 'E-commerce' },
  { icon: Truck, label: 'Logistics & Procurement' },
  { icon: Laptop, label: 'SaaS' },
  { icon: Rocket, label: 'Startup' },
  { icon: ShoppingBag, label: 'Retail store' },
  { icon: Clapperboard, label: 'Media & Entertainment' },
  { icon: Gamepad2, label: 'Gaming' },
] as const

export function IndustriesSection() {
  return (
    <section
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E4E8F0',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .industries-shell {
            padding: 4rem 1rem !important;
          }

          .industries-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 2.25rem 1rem !important;
          }
        }
      `}</style>

      <div
        className="industries-shell"
        style={{
          maxWidth: '90rem',
          margin: '0 auto',
          padding: 'clamp(4.5rem, 8vw, 7rem) clamp(1.25rem, 4vw, 4rem)',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.5, ease }}
          style={{
            margin: 0,
            textAlign: 'center',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.15,
            fontWeight: 800,
            color: '#020617',
          }}
        >
          Industries We Serve
        </motion.h2>

        <div
          className="industries-grid"
          style={{
            marginTop: 'clamp(2.75rem, 5vw, 4rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
            gap: '3.75rem clamp(1.5rem, 4vw, 4rem)',
          }}
        >
          {industries.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease, delay: index * 0.025 }}
              style={{
                minHeight: 104,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '1rem',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  width: 64,
                  height: 64,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 12,
                  background: '#F1F8F7',
                  border: '1px solid #E1EFED',
                  color: '#263238',
                }}
              >
                <Icon size={34} strokeWidth={1.7} aria-hidden />
              </span>

              <span
                style={{
                  color: '#374151',
                  fontSize: '1rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
