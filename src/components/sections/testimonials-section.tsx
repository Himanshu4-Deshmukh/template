'use client'

import { Star, ShieldCheck, Users, TrendingUp, Award, Clock } from 'lucide-react'

const topRow = [
  { name: 'Marie D.',   role: 'Le Fournil Bakery',     quote: 'Since launching the new site, I receive three times more calls. Clients finally find us on Google.', stars: 5 },
  { name: 'Thomas L.',  role: 'TLR Consulting',         quote: 'Careful work and a clear, professional website. Prospects immediately understand what I offer.',    stars: 5 },
  { name: 'Camille B.', role: 'Atelier Camille',        quote: 'The site perfectly reflects my brand world. I have gained a lot of credibility with my clients.',   stars: 5 },
  { name: 'Laurent M.', role: 'LM Renovation',          quote: 'In three months, my revenue increased by 40%. The website and SEO truly made the difference.',      stars: 5 },
  { name: 'Nadia K.',   role: 'NovaTour Agency',        quote: 'Excellent support, deadlines met, and a result that exceeded my expectations.',                      stars: 5 },
] as const

const bottomRow = [
  { name: 'Sophie R.',  role: 'Zen Pilates Studio',     quote: 'The team captured the atmosphere of my studio perfectly. Bookings really took off.',                stars: 5 },
  { name: 'Pierre V.',  role: 'Valley Transport',        quote: 'An investment that paid for itself within weeks. Qualified leads arrive every day.',                 stars: 5 },
  { name: 'Julie A.',   role: "Alice's Gardens",         quote: "They transformed our online presence. The site is beautiful and our sales tripled.",                 stars: 5 },
  { name: 'Franck G.',  role: 'Studio FG',               quote: 'Clean design, smooth navigation, exactly what I wanted to showcase my projects.',                    stars: 4 },
  { name: 'Emilie T.',  role: 'Parc Veterinary Clinic',  quote: 'Our clients can find everything easily. Appointment booking has changed our day-to-day work.',       stars: 5 },
] as const

const metrics = [
  { icon: Users,      value: '500+', label: 'Clients Served',    accent: '#3B82F6' },
  { icon: TrendingUp, value: '4.9',  label: 'Average Rating',    accent: '#14B8A6' },
  { icon: Award,      value: '98%',  label: 'Satisfaction Rate', accent: '#8B5CF6' },
  { icon: Clock,      value: '10+',  label: 'Years in Service',  accent: '#F59E0B' },
]

// Font pairing:
//   Headings / metric values  → Playfair Display (dramatic serif)
//   Body / quotes             → Lora (readable, warm serif)
//   Labels / eyebrow / small  → EB Garamond (classic, refined)

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Lora:ital,wght@0,400;0,500;1,400&family=EB+Garamond:wght@400;500;600&display=swap');

  @keyframes ts-left  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
  @keyframes ts-right { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
  .ts-ml { animation: ts-left  40s linear infinite; }
  .ts-mr { animation: ts-right 40s linear infinite; }
  .ts-track:hover .ts-ml,
  .ts-track:hover .ts-mr { animation-play-state: paused; }
  .ts-card {
    transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  }
  .ts-card:hover {
    box-shadow: 0 8px 28px rgba(59,111,232,0.12) !important;
    border-color: #93c5fd !important;
    transform: translateY(-2px);
  }
  .metric-card {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .metric-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.10), 0 3px 10px rgba(0,0,0,0.05) !important;
  }
`

function TestimonialCard({
  testimonial,
}: {
  testimonial: { name: string; role: string; quote: string; stars: number }
}) {
  const initials = testimonial.name.split(' ').map((n) => n[0]).join('')

  return (
    <figure
      className="ts-card"
      style={{
        width: 312,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderTop: '3px solid #3B6FE8',
        borderRadius: 14,
        padding: '1.1rem 1.25rem',
        minHeight: 188,
        boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
        <div style={{ display: 'flex', gap: 2 }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} style={{ width: 13, height: 13, fill: i <= testimonial.stars ? '#f59e0b' : '#e2e8f0', color: i <= testimonial.stars ? '#f59e0b' : '#e2e8f0' }} />
          ))}
        </div>
        {/* "VERIFIED" badge — EB Garamond for the label */}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          padding: '2px 8px', borderRadius: 4,
          fontSize: 10, fontFamily: '"EB Garamond", Georgia, serif',
          fontWeight: 600, letterSpacing: '0.08em',
          background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe',
        }}>
          <ShieldCheck style={{ width: 10, height: 10 }} />
          VERIFIED
        </span>
      </div>

      {/* Quote — Lora italic for an elegant editorial feel */}
      <blockquote style={{ flex: 1, margin: 0 }}>
        <p style={{
          margin: 0,
          fontSize: 13,
          lineHeight: 1.75,
          color: '#475569',
          fontFamily: '"Lora", Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 400,
        }}>
          "{testimonial.quote}"
        </p>
      </blockquote>

      <figcaption style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginTop: '0.85rem', paddingTop: '0.75rem',
        borderTop: '1px solid #f1f5f9',
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: 'linear-gradient(135deg, #3B6FE8 0%, #38bdf8 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          /* Initials in EB Garamond */
          fontSize: 12, fontWeight: 600,
          fontFamily: '"EB Garamond", Georgia, serif',
          color: '#fff', flexShrink: 0,
        }}>
          {initials}
        </div>
        <div style={{ minWidth: 0 }}>
          {/* Name — Lora medium */}
          <p style={{
            margin: 0, fontSize: 13, fontWeight: 500,
            fontFamily: '"Lora", Georgia, serif',
            color: '#0f172a',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {testimonial.name}
          </p>
          {/* Role — EB Garamond */}
          <p style={{
            margin: 0, fontSize: 11,
            fontFamily: '"EB Garamond", Georgia, serif',
            color: '#64748b',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {testimonial.role}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}

function MarqueeRow({
  items,
  direction,
}: {
  items: readonly { name: string; role: string; quote: string; stars: number }[]
  direction: 'left' | 'right'
}) {
  const cls = direction === 'left' ? 'ts-ml' : 'ts-mr'
  return (
    <div style={{ position: 'relative', display: 'flex', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: '0 auto 0 0', width: 80, zIndex: 10, background: 'linear-gradient(to right, #f8fafc, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: '0 0 0 auto', width: 80, zIndex: 10, background: 'linear-gradient(to left, #f8fafc, transparent)', pointerEvents: 'none' }} />
      <div className="ts-track" style={{ display: 'flex', width: '100%' }}>
        <div className={cls} style={{ display: 'flex', gap: '1rem', padding: '0.5rem', flexShrink: 0 }}>
          {[...items, ...items].map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section style={{
      background: '#f8fafc',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <style>{STYLES}</style>

      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(59,111,232,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 100%)',
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      {/* Decorative blobs */}
      <div aria-hidden style={{
        position: 'absolute', top: '-80px', right: '-60px',
        width: 340, height: 340, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,111,232,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '-60px', left: '-40px',
        width: 280, height: 280, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Header ── */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '4.5rem 1.5rem 0' }}>

        {/* Eyebrow — EB Garamond spaced caps */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          marginBottom: '1.25rem',
          padding: '6px 16px',
          background: 'linear-gradient(135deg, #EEF3FD 0%, #E8EFFE 100%)',
          border: '1px solid #C7D8FA',
          borderRadius: 999,
          boxShadow: '0 1px 4px rgba(59,111,232,0.1)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3B6FE8', flexShrink: 0, boxShadow: '0 0 0 2px rgba(59,111,232,0.2)' }} />
          <span style={{
            fontSize: '0.72rem', fontWeight: 600,
            fontFamily: '"EB Garamond", Georgia, serif',
            color: '#3B6FE8', letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>
            Client Reviews
          </span>
        </div>

        {/* H2 — Playfair Display, as before but now the sole display serif */}
        <h2 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
          fontWeight: 700, color: '#0f172a',
          margin: '0 0 0.65rem', lineHeight: 1.15,
        }}>
          Trusted by 500+ businesses<br />
          <em style={{ fontStyle: 'italic', color: '#3B6FE8' }}>across every industry.</em>
        </h2>

        {/* Subheading — Lora regular */}
        <p style={{
          fontSize: '0.95rem',
          fontFamily: '"Lora", Georgia, serif',
          color: '#64748b',
          maxWidth: 480, margin: '0 0 3rem', lineHeight: 1.8,
        }}>
          Every review is authenticated and tied to a real client engagement — no anonymous feedback, no inflated scores.
        </p>

        {/* ── Metric cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          marginBottom: '3.5rem',
        }}>
          {metrics.map(({ icon: Icon, value, label, accent }) => (
            <div
              key={label}
              className="metric-card"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: 20,
                padding: '32px 28px 28px',
                boxShadow: `0 2px 8px rgba(0,0,0,0.05), 0 8px 28px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.9) inset`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* soft ambient glow */}
              <div style={{
                position: 'absolute', top: '-30px', right: '-30px',
                width: 110, height: 110, borderRadius: '50%',
                background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* bottom accent bar */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 4,
                background: `linear-gradient(90deg, ${accent}aa, ${accent})`,
                borderRadius: '0 0 20px 20px',
              }} />

              {/* icon badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 48, height: 48, borderRadius: 14,
                background: `linear-gradient(135deg, ${accent}22 0%, ${accent}10 100%)`,
                border: `1.5px solid ${accent}30`,
                marginBottom: 20,
                boxShadow: `0 2px 8px ${accent}20`,
              }}>
                <Icon style={{ width: 22, height: 22, color: accent }} />
              </div>

              {/* value — Playfair Display for the big number */}
              <p style={{
                margin: '0 0 6px',
                fontSize: '2.6rem',
                fontWeight: 800,
                color: '#0A1628',
                lineHeight: 1,
                fontFamily: 'var(--font-display), Inter, system-ui, sans-serif',
                letterSpacing: '-0.02em',
              }}>
                {value}
              </p>

              {/* label — EB Garamond */}
              <p style={{
                margin: 0,
                fontSize: '0.9rem',
                fontFamily: '"EB Garamond", Georgia, serif',
                color: '#64748B',
                fontWeight: 500,
                letterSpacing: '0.03em',
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee rows ── */}
      <div style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <MarqueeRow items={topRow}    direction="left"  />
        <MarqueeRow items={bottomRow} direction="right" />
      </div>
    </section>
  )
}
