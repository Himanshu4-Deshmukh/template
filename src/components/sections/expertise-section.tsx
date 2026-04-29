'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

const categories = [
  {
    label: 'Front end',
    technologies: [
      { name: 'Angular JS', fallback: 'A', color: '#DD0031', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'TypeScript', fallback: 'TS', color: '#3178C6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React JS', fallback: 'R', color: '#00D8FF', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next JS', fallback: 'N', color: '#111827', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Vue JS', fallback: 'V', color: '#42B883', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Tailwind CSS', fallback: '~', color: '#06B6D4', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', fallback: 'B', color: '#7952B3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'HTML5', fallback: '5', color: '#E34F26', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    ],
  },
  {
    label: 'Backend',
    technologies: [
      { name: 'Laravel', fallback: 'L', color: '#FF2D20', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'Node JS', fallback: 'node', color: '#539E43', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
      { name: 'PHP', fallback: 'php', color: '#777BB4', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Python', fallback: 'Py', color: '#3776AB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Flask', fallback: 'Fl', color: '#111827', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'Nest JS', fallback: 'N', color: '#E0234E', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'MongoDB', fallback: 'M', color: '#47A248', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', fallback: 'SQL', color: '#00758F', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    label: 'Mobile',
    technologies: [
      { name: 'iOS', fallback: 'iOS', color: '#111827', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
      { name: 'Android', fallback: 'A', color: '#3DDC84', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
      { name: 'React Native', fallback: 'RN', color: '#00D8FF', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Flutter', fallback: 'F', color: '#02569B', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Firebase', fallback: 'F', color: '#FFCA28', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Swift', fallback: 'S', color: '#FA7343', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Kotlin', fallback: 'K', color: '#7F52FF', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'JavaScript', fallback: 'JS', color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    label: 'DevOps & Cloud',
    technologies: [
      { name: 'AWS', fallback: 'aws', color: '#FF9900', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Google Cloud', fallback: 'G', color: '#4285F4', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Jenkins', fallback: 'J', color: '#D24939', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Docker', fallback: 'D', color: '#2496ED', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', fallback: 'K8s', color: '#326CE5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'GitLab', fallback: 'Git', color: '#FC6D26', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
      { name: 'Terraform', fallback: 'Tf', color: '#844FBA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
      { name: 'Grafana', fallback: 'Gf', color: '#F46800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    ],
  },
  {
    label: 'Third Party Integration',
    technologies: [
      { name: 'PayPal', fallback: 'P', color: '#003087', logo: 'https://cdn.simpleicons.org/paypal/003087' },
      { name: 'SendGrid', fallback: 'Sg', color: '#1A82E2', logo: 'https://cdn.simpleicons.org/sendgrid/1A82E2' },
      { name: 'Google', fallback: 'G', color: '#4285F4', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { name: 'Cloudflare', fallback: 'Cf', color: '#F38020', logo: 'https://cdn.simpleicons.org/cloudflare/F38020' },
      { name: 'Twilio', fallback: 'Tw', color: '#F22F46', logo: 'https://cdn.simpleicons.org/twilio/F22F46' },
      { name: 'MSG91', fallback: '91', color: '#2563EB', logo: 'https://logo.clearbit.com/msg91.com' },
      { name: 'Binance Pay', fallback: 'B', color: '#F0B90B', logo: 'https://cdn.simpleicons.org/binance/F0B90B' },
      { name: 'CoinGecko', fallback: 'Cg', color: '#8DC63F', logo: 'https://cdn.simpleicons.org/coingecko/8DC63F' },
    ],
  },
] as const

export function ExpertiseSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const active = categories[activeCategory]

  return (
    <section
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E4E8F0',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .expertise-shell {
            padding: 4rem 1rem !important;
          }

          .expertise-tabs {
            justify-content: flex-start !important;
            overflow-x: auto !important;
            padding-bottom: 0 !important;
            scrollbar-width: none;
          }

          .expertise-tabs::-webkit-scrollbar {
            display: none;
          }

          .expertise-tab {
            flex: 0 0 auto !important;
          }

          .expertise-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            row-gap: 2.5rem !important;
          }
        }
      `}</style>

      <div
        className="expertise-shell"
        style={{
          maxWidth: '90rem',
          margin: '0 auto',
          padding: 'clamp(4.5rem, 8vw, 7rem) clamp(1.25rem, 4vw, 4rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.5, ease }}
          style={{ textAlign: 'center' }}
        >
          <p
            style={{
              margin: '0 0 1rem',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              color: '#0E7490',
              fontWeight: 500,
            }}
          >
            Our expertise <span style={{ color: '#F59E0B' }}>on</span>
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(1.9rem, 4vw, 3rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              color: '#020617',
            }}
          >
            Popular Website & Mobile App Technologies for MVP Development
          </h2>
        </motion.div>

        <div
          className="expertise-tabs"
          role="tablist"
          aria-label="Technology categories"
          style={{
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(1.5rem, 4vw, 4rem)',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          {categories.map((category, index) => {
            const isActive = index === activeCategory

            return (
              <button
                key={category.label}
                className="expertise-tab"
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(index)}
                style={{
                  appearance: 'none',
                  border: 0,
                  borderBottom: isActive
                    ? '4px solid #0E7490'
                    : '4px solid transparent',
                  background: 'transparent',
                  color: isActive ? '#0E7490' : '#334155',
                  cursor: 'pointer',
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
                  fontWeight: isActive ? 600 : 500,
                  padding: '0 0 0.9rem',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <motion.div
          key={active.label}
          className="expertise-grid"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease }}
          style={{
            marginTop: 'clamp(3.5rem, 6vw, 5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            rowGap: '4.75rem',
            columnGap: 'clamp(1.5rem, 4vw, 4rem)',
          }}
        >
          {active.technologies.map((technology) => (
            <div
              key={technology.name}
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
                aria-hidden
                style={{
                  width: 84,
                  height: 72,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  color: technology.color,
                  fontSize: technology.fallback.length > 2 ? '1.05rem' : '1.65rem',
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                <img
                  src={technology.logo}
                  alt=""
                  loading="lazy"
                  style={{
                    display: 'block',
                    position: 'absolute',
                    inset: 0,
                    margin: 'auto',
                    zIndex: 2,
                    width: 70,
                    height: 64,
                    objectFit: 'contain',
                  }}
                  onLoad={(event) => {
                    const fallback = event.currentTarget
                      .nextElementSibling as HTMLElement | null
                    if (fallback) fallback.style.display = 'none'
                  }}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />
                <span style={{ position: 'absolute', zIndex: 1 }}>
                  {technology.fallback}
                </span>
              </span>
              <span
                style={{
                  color: '#1F2937',
                  fontSize: '1rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {technology.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
