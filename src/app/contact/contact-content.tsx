'use client'

import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

import { PageHero } from '@/components/sections/page-hero'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const

// ── shared input style ────────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: '100%',
  height: 44,
  padding: '0 14px',
  fontSize: '0.925rem',
  color: '#0F172A',
  background: '#F8FAFC',
  border: '1.5px solid #E2E8F0',
  borderRadius: 12,
  outline: 'none',
  transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
  boxSizing: 'border-box' as const,
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.82rem',
  fontWeight: 600,
  color: '#374151',
  marginBottom: 6,
  letterSpacing: '0.01em',
}

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      {children}
    </div>
  )
}

function FocusInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={inputStyle}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = '#3B6FE8'
        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,111,232,0.12)'
        e.currentTarget.style.background = '#FFFFFF'
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = '#E2E8F0'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.background = '#F8FAFC'
      }}
    />
  )
}

export function ContactContent() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccessMessage('')
    setErrorMessage('')

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage('Email service is not configured yet. Please try again later.')
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(serviceId, templateId, form, { publicKey })
      setSuccessMessage('Your inquiry has been sent. We will get back to you within 1 business day.')
      setForm({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch {
      setErrorMessage('We could not send your message right now. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <style>{`
        @media (max-width: 1023px) {
          .contact-content-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 767px) {
          .contact-content-shell {
            padding: 64px 20px !important;
          }

          .contact-content-form-card {
            padding: 28px 20px 32px !important;
          }

          .contact-content-name-grid {
            grid-template-columns: 1fr !important;
          }

          .contact-content-sidebar-card {
            padding: 24px 18px !important;
          }

          .contact-content-badge {
            align-items: flex-start !important;
          }
        }
      `}</style>
      <PageHero
        eyebrow="Contact"
        title="Talk with our technology team"
        description="Tell us what you need to build, improve, automate, or scale. We'll get back to you within 24 hours."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
        breadcrumb="Contact"
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
        <div aria-hidden style={{
          position: 'absolute', top: '-100px', right: '-80px',
          width: 380, height: 380, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,111,232,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div aria-hidden style={{
          position: 'absolute', bottom: '-80px', left: '-60px',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div
          className="contact-content-shell"
          style={{
            position: 'relative',
            maxWidth: '72rem',
            margin: '0 auto',
            padding: '80px 24px',
          }}
        >
          <div
            className="contact-content-grid"
            style={{
              display: 'grid',
              gap: 28,
              gridTemplateColumns: '1.25fr 0.75fr',
            }}
          >
            {/* ── Contact form ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <div
                className="contact-content-form-card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: 20,
                  padding: '36px 32px 40px',
                  boxShadow:
                    '0 2px 8px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* card top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: '10%', right: '10%',
                  height: 2,
                  background: 'linear-gradient(90deg, transparent, #3B6FE8 40%, #8B5CF6 60%, transparent)',
                  borderRadius: '0 0 999px 999px',
                }} />

                <h2
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    margin: '0 0 28px',
                  }}
                >
                  Start the conversation
                </h2>

                <form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
                >
                  {/* Name row */}
                  <div
                    className="contact-content-name-grid"
                    style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}
                  >
                    <Field id="firstname" label="First name">
                      <FocusInput
                        id="firstname"
                        name="firstname"
                        placeholder="John"
                        autoComplete="given-name"
                        value={form.firstname}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                    <Field id="lastname" label="Last name">
                      <FocusInput
                        id="lastname"
                        name="lastname"
                        placeholder="Smith"
                        autoComplete="family-name"
                        value={form.lastname}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                  </div>

                  <Field id="email" label="Email">
                    <FocusInput
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Field>

                  <Field id="phone" label="Phone (optional)">
                    <FocusInput
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 9876543210"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </Field>

                  <Field id="message" label="Your message">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your systems, goals, or technical challenges..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      style={{
                        ...inputStyle,
                        height: 'auto',
                        padding: '12px 14px',
                        resize: 'vertical',
                        lineHeight: 1.65,
                        fontFamily: 'inherit',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#3B6FE8'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,111,232,0.12)'
                        e.currentTarget.style.background = '#FFFFFF'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#E2E8F0'
                        e.currentTarget.style.boxShadow = 'none'
                        e.currentTarget.style.background = '#F8FAFC'
                      }}
                    />
                  </Field>

                  {successMessage ? (
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.9rem',
                        color: '#0E9F74',
                        fontWeight: 500,
                      }}
                    >
                      {successMessage}
                    </p>
                  ) : null}

                  {errorMessage ? (
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.9rem',
                        color: '#DC2626',
                        fontWeight: 500,
                      }}
                    >
                      {errorMessage}
                    </p>
                  ) : null}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      width: '100%',
                      padding: '13px 24px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      background: 'linear-gradient(135deg, #3B6FE8 0%, #2554C7 100%)',
                      border: 'none',
                      borderRadius: 999,
                      cursor: 'pointer',
                      boxShadow:
                        '0 2px 14px rgba(59,111,232,0.35), 0 1px 3px rgba(59,111,232,0.2)',
                      transition: 'all 0.2s ease',
                      marginTop: 4,
                      opacity: isSubmitting ? 0.75 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (isSubmitting) return
                      const el = e.currentTarget
                      el.style.background = 'linear-gradient(135deg, #4A7CF0 0%, #2F5FD4 100%)'
                      el.style.boxShadow = '0 6px 24px rgba(59,111,232,0.42)'
                      el.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.background = 'linear-gradient(135deg, #3B6FE8 0%, #2554C7 100%)'
                      el.style.boxShadow = '0 2px 14px rgba(59,111,232,0.35), 0 1px 3px rgba(59,111,232,0.2)'
                      el.style.transform = 'translateY(0)'
                    }}
                  >
                    <Send size={17} />
                    {isSubmitting ? 'Sending...' : 'Send inquiry'}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* ── Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.08 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              {/* Contact details card */}
              <div
                className="contact-content-sidebar-card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: 20,
                  padding: '28px 24px',
                  boxShadow:
                    '0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)',
                }}
              >
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    margin: '0 0 22px',
                  }}
                >
                  Get in touch
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    {
                      icon: Phone,
                      accent: '#3B82F6',
                      label: 'Phone',
                      content: (
                        <a
                          href={`tel:${siteConfig.phone}`}
                          style={{ fontSize: '0.875rem', color: '#64748B', textDecoration: 'none' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#3B6FE8')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
                        >
                          {siteConfig.phone}
                        </a>
                      ),
                    },
                    {
                      icon: Mail,
                      accent: '#14B8A6',
                      label: 'Email',
                      content: (
                        <a
                          href={`mailto:${siteConfig.email}`}
                          style={{ fontSize: '0.875rem', color: '#64748B', textDecoration: 'none' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#3B6FE8')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
                        >
                          {siteConfig.email}
                        </a>
                      ),
                    },
                    {
                      icon: MapPin,
                      accent: '#8B5CF6',
                      label: 'Address',
                      content: (
                        <p style={{ fontSize: '0.875rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
                          {siteConfig.address.street}
                          <br />
                          {siteConfig.address.postalCode} {siteConfig.address.city}
                        </p>
                      ),
                    },
                  ].map(({ icon: Icon, accent, label, content }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          background: `${accent}18`,
                          border: `1px solid ${accent}30`,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={17} style={{ color: accent }} aria-hidden />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0F172A', margin: '0 0 3px' }}>
                          {label}
                        </p>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: 20,
                  overflow: 'hidden',
                  boxShadow:
                    '0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)',
                  flexGrow: 1,
                  minHeight: 200,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* map header strip */}
                <div
                  style={{
                    padding: '14px 20px',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <MapPin size={14} style={{ color: '#3B6FE8' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#374151' }}>
                    Our location
                  </span>
                </div>
                <div
                  style={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #F0F4FF 0%, #F8FAFC 100%)',
                    padding: 24,
                    textAlign: 'center',
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: '#EEF3FD',
                        border: '1px solid #C7D8FA',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px',
                      }}
                    >
                      <MapPin size={20} style={{ color: '#3B6FE8' }} />
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0 }}>
                      Add your office map here
                      <br />
                      <span style={{ fontSize: '0.72rem' }}>(iframe or map API)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Response time badge */}
              <div
                className="contact-content-badge"
                style={{
                  background: 'linear-gradient(135deg, #EEF3FD 0%, #E8EFFE 100%)',
                  border: '1px solid #C7D8FA',
                  borderRadius: 16,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#22C55E',
                    boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
                    flexShrink: 0,
                  }}
                />
                <p style={{ fontSize: '0.82rem', color: '#3B6FE8', fontWeight: 600, margin: 0 }}>
                  We typically respond within 1 business day
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
