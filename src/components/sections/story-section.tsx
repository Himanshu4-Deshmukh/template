'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, ShieldCheck, BarChart3 } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const highlights = [
  { icon: Zap,          label: 'Rapid deployment & onboarding'      },
  { icon: ShieldCheck,  label: 'Enterprise-grade security built in'  },
  { icon: BarChart3,    label: 'Real-time analytics & reporting'     },
]

// ─── Inline tech illustration (replaces BoyScanning.jpg) ──────────────────────
function TechIllustration() {
  return (
    <svg
      viewBox="0 0 520 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-full"
      aria-label="IT infrastructure dashboard illustration"
    >
      {/* Background */}
      <rect width="520" height="390" fill="#f0f6ff" />

      {/* Grid lines */}
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 52} y1="0" x2={i * 52} y2="390" stroke="#dbeafe" strokeWidth="1" />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 56} x2="520" y2={i * 56} stroke="#dbeafe" strokeWidth="1" />
      ))}

      {/* ── Main dashboard card ── */}
      <rect x="32" y="28" width="312" height="196" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />

      {/* Card header bar */}
      <rect x="32" y="28" width="312" height="40" rx="12" fill="#2563eb" />
      <rect x="32" y="56" width="312" height="12" fill="#2563eb" />
      <circle cx="56" cy="48" r="6" fill="white" fillOpacity=".3" />
      <circle cx="76" cy="48" r="6" fill="white" fillOpacity=".3" />
      <circle cx="96" cy="48" r="6" fill="white" fillOpacity=".3" />
      <rect x="120" y="42" width="140" height="12" rx="4" fill="white" fillOpacity=".2" />

      {/* Uptime metric */}
      <rect x="52" y="84" width="78" height="52" rx="8" fill="#eff6ff" />
      <text x="91" y="107" textAnchor="middle" fill="#2563eb" fontSize="18" fontWeight="700" fontFamily="monospace">99.9%</text>
      <text x="91" y="122" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui">Uptime SLA</text>

      {/* Resolved tickets */}
      <rect x="142" y="84" width="78" height="52" rx="8" fill="#eff6ff" />
      <text x="181" y="107" textAnchor="middle" fill="#2563eb" fontSize="18" fontWeight="700" fontFamily="monospace">1,240</text>
      <text x="181" y="122" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui">Tickets Resolved</text>

      {/* Response time */}
      <rect x="232" y="84" width="78" height="52" rx="8" fill="#eff6ff" />
      <text x="271" y="107" textAnchor="middle" fill="#0ea5e9" fontSize="18" fontWeight="700" fontFamily="monospace">{'<2h'}</text>
      <text x="271" y="122" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui">Avg Response</text>

      {/* Mini bar chart */}
      <rect x="52" y="152" width="258" height="56" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      {[
        { x: 68,  h: 24, c: '#bfdbfe' },
        { x: 90,  h: 32, c: '#93c5fd' },
        { x: 112, h: 20, c: '#bfdbfe' },
        { x: 134, h: 38, c: '#2563eb' },
        { x: 156, h: 28, c: '#93c5fd' },
        { x: 178, h: 36, c: '#2563eb' },
        { x: 200, h: 22, c: '#bfdbfe' },
        { x: 222, h: 40, c: '#2563eb' },
        { x: 244, h: 30, c: '#93c5fd' },
        { x: 266, h: 34, c: '#2563eb' },
        { x: 288, h: 26, c: '#bfdbfe' },
      ].map(({ x, h, c }, i) => (
        <rect key={i} x={x} y={195 - h} width="14" height={h} rx="3" fill={c} />
      ))}

      {/* ── Status panel (right side) ── */}
      <rect x="362" y="28" width="130" height="196" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="427" y="56" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="600" fontFamily="system-ui">System Status</text>
      <line x1="378" y1="64" x2="476" y2="64" stroke="#f1f5f9" strokeWidth="1" />

      {[
        { label: 'Web Server',   status: 'Online',    dot: '#22c55e', y: 84  },
        { label: 'Database',     status: 'Online',    dot: '#22c55e', y: 112 },
        { label: 'CDN',          status: 'Online',    dot: '#22c55e', y: 140 },
        { label: 'API Gateway',  status: 'Degraded',  dot: '#f59e0b', y: 168 },
        { label: 'Backups',      status: 'Online',    dot: '#22c55e', y: 196 },
      ].map(({ label, status, dot, y }) => (
        <g key={label}>
          <circle cx="382" cy={y} r="5" fill={dot} />
          <text x="394" y={y + 4} fill="#334155" fontSize="9.5" fontFamily="system-ui">{label}</text>
          <text x="474" y={y + 4} textAnchor="end" fill={status === 'Online' ? '#16a34a' : '#d97706'} fontSize="9" fontFamily="monospace">{status}</text>
        </g>
      ))}

      {/* ── Network topology (bottom) ── */}
      <rect x="32" y="242" width="460" height="120" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="52" y="264" fill="#0f172a" fontSize="11" fontWeight="600" fontFamily="system-ui">Network Overview</text>
      <text x="472" y="264" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">LIVE</text>
      <circle cx="480" cy="260" r="4" fill="#22c55e" opacity=".8" />

      {/* Nodes */}
      {[
        { cx: 90,  cy: 316, label: 'Firewall', color: '#2563eb' },
        { cx: 185, cy: 300, label: 'Switch A', color: '#0ea5e9' },
        { cx: 185, cy: 336, label: 'Switch B', color: '#0ea5e9' },
        { cx: 290, cy: 300, label: 'Server 1', color: '#2563eb' },
        { cx: 290, cy: 336, label: 'Server 2', color: '#2563eb' },
        { cx: 390, cy: 316, label: 'Cloud',    color: '#7c3aed' },
      ].map(({ cx, cy, label, color }) => (
        <g key={label}>
          <rect x={cx - 28} y={cy - 14} width="56" height="28" rx="6" fill={color} fillOpacity=".12" stroke={color} strokeWidth="1.2" strokeOpacity=".5" />
          <text x={cx} y={cy + 4} textAnchor="middle" fill={color} fontSize="9" fontFamily="system-ui" fontWeight="600">{label}</text>
        </g>
      ))}

      {/* Connector lines */}
      {[
        [90, 316, 157, 300], [90, 316, 157, 336],
        [213, 300, 262, 300], [213, 336, 262, 336],
        [318, 300, 362, 316], [318, 336, 362, 316],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="4 3" />
      ))}

      {/* Internet label */}
      <rect x="436" y="304" width="46" height="24" rx="6" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
      <text x="459" y="320" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui">Internet</text>
      <line x1="418" y1="316" x2="436" y2="316" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function StorySection() {
  return (
    <section
      style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative', zIndex: 1,
          maxWidth: 1200, margin: '0 auto',
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
            alignItems: 'center',
          }}
        >

          {/* ── Image panel ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease }}
            style={{ position: 'relative' }}
          >
            {/* Decorative corner accent */}
            <div
              aria-hidden
              style={{
                position: 'absolute', top: -12, left: -12,
                width: 80, height: 80,
                borderTop: '3px solid #2563eb',
                borderLeft: '3px solid #2563eb',
                borderRadius: '4px 0 0 0',
                pointerEvents: 'none',
              }}
            />
            <div
              aria-hidden
              style={{
                position: 'absolute', bottom: -12, right: -12,
                width: 80, height: 80,
                borderBottom: '3px solid #0ea5e9',
                borderRight: '3px solid #0ea5e9',
                borderRadius: '0 0 4px 0',
                pointerEvents: 'none',
              }}
            />

            {/* Image frame */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                overflow: 'hidden',
                borderRadius: 16,
                border: '1px solid #e2e8f0',
                background: '#f0f6ff',
                boxShadow: '0 4px 24px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              <TechIllustration />

              {/* Live badge overlay */}
              <div
                style={{
                  position: 'absolute', top: 14, right: 14,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '5px 12px',
                  background: 'rgba(255,255,255,0.92)',
                  border: '1px solid #e2e8f0',
                  borderRadius: 20,
                  backdropFilter: 'blur(6px)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                <span
                  style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
                  }}
                />
                <span style={{ fontSize: 11, fontWeight: 600, color: '#0f172a', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                  SYSTEM LIVE
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Text panel ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease, delay: 0.06 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '5px 14px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                borderRadius: 20,
                alignSelf: 'flex-start',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563eb' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#1d4ed8', fontFamily: 'monospace', letterSpacing: '0.07em' }}>
                WHY US
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                fontWeight: 700,
                color: '#0f172a',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Technology that fits<br />
              <span style={{ color: '#2563eb' }}>the way your business runs.</span>
            </h2>

            {/* Body */}
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#475569' }}>
              We start by understanding your workflows, bottlenecks, and growth
              targets — then recommend the right mix of software, automation,
              infrastructure, and digital tools.
            </p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#475569' }}>
              The result is technology that is easier to manage, simpler for
              your team to use, and strong enough to support your next phase of
              growth.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <div
                    style={{
                      width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                      background: '#eff6ff',
                      border: '1px solid #bfdbfe',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <Icon style={{ width: 15, height: 15, color: '#2563eb' }} />
                  </div>
                  <span style={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ paddingTop: '0.25rem' }}>
              <Button variant="outline" className="group" asChild>
                <Link href="/a-propos">
                  Learn more about us
                  <ArrowRight
                    style={{ width: 16, height: 16, marginLeft: 6, transition: 'transform 0.2s' }}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}