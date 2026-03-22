import { Quote, Star } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'

const topRow = [
  {
    name: 'Marie D.',
    role: 'Gérante — Boulangerie Le Fournil',
    quote:
      "Depuis le nouveau site, je reçois 3 fois plus d'appels. Les clients nous trouvent enfin sur Google.",
    stars: 5,
  },
  {
    name: 'Thomas L.',
    role: 'Directeur — Cabinet Conseil TLR',
    quote:
      'Un travail soigné, un site clair et professionnel. Mes prospects comprennent immédiatement ce que je propose.',
    stars: 5,
  },
  {
    name: 'Camille B.',
    role: 'Fondatrice — Atelier Camille',
    quote:
      "Le site reflète parfaitement l'univers de ma marque. J'ai gagné en crédibilité auprès de mes clients.",
    stars: 5,
  },
  {
    name: 'Laurent M.',
    role: 'Gérant — LM Rénovation',
    quote:
      'En trois mois, mon chiffre a augmenté de 40 %. Le site et le SEO font vraiment la différence.',
    stars: 5,
  },
  {
    name: 'Nadia K.',
    role: 'Directrice — Agence NovaTour',
    quote:
      "Un accompagnement au top, des délais respectés et un résultat qui dépasse mes attentes.",
    stars: 5,
  },
] as const

const bottomRow = [
  {
    name: 'Sophie R.',
    role: 'Fondatrice — Studio Pilates Zen',
    quote:
      "L'équipe a su capter l'ambiance de mon studio. Le site reflète exactement mes valeurs, et les réservations ont décollé.",
    stars: 5,
  },
  {
    name: 'Pierre V.',
    role: 'PDG — Transports Vallée',
    quote:
      "Un investissement rentabilisé en quelques semaines. Le formulaire de devis génère des contacts qualifiés chaque jour.",
    stars: 5,
  },
  {
    name: 'Julie A.',
    role: 'Co-fondatrice — Les Jardins d\'Alice',
    quote:
      "Ils ont transformé notre présence en ligne. Le site est magnifique et nos ventes en ligne ont triplé.",
    stars: 5,
  },
  {
    name: 'Franck G.',
    role: 'Architecte — Studio FG',
    quote:
      "Design épuré, navigation fluide, exactement ce que je voulais pour présenter mes projets. Bravo.",
    stars: 4,
  },
  {
    name: 'Émilie T.',
    role: 'Responsable — Clinique Vétérinaire du Parc',
    quote:
      "Nos clients trouvent toutes les infos facilement. La prise de rendez-vous en ligne a changé notre quotidien.",
    stars: 5,
  },
] as const

function TestimonialCard({
  testimonial,
}: {
  testimonial: { name: string; role: string; quote: string; stars: number }
}) {
  return (
    <figure className="w-[340px] shrink-0 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-[var(--shadow-sm)] ring-1 ring-foreground/[0.03] backdrop-blur-sm sm:w-[380px]">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-3.5 ${i < testimonial.stars ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted'}`}
            aria-hidden
          />
        ))}
      </div>
      <blockquote className="mt-4">
        <Quote className="mb-2 size-5 text-primary/30" aria-hidden />
        <p className="text-sm leading-relaxed text-foreground/90">
          {testimonial.quote}
        </p>
      </blockquote>
      <figcaption className="mt-5 border-t border-border/40 pt-4">
        <p className="text-sm font-semibold text-foreground">
          {testimonial.name}
        </p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
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
  const animationClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="group relative flex overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

      <div
        className={`flex shrink-0 gap-5 py-3 ${animationClass} group-hover:[animation-play-state:paused]`}
      >
        {items.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 gap-5 py-3 ${animationClass} group-hover:[animation-play-state:paused]`}
      >
        {items.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden border-y border-border/60 bg-muted/10">
      <div className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <SectionTitle
          eyebrow="Témoignages"
          title="Ils nous font confiance"
          description="Des entreprises de tous horizons qui ont gagné en visibilité et en crédibilité."
        />
      </div>

      <div className="mt-14 space-y-2 pb-20 lg:pb-28">
        <MarqueeRow items={topRow} direction="left" />
        <MarqueeRow items={bottomRow} direction="right" />
      </div>
    </section>
  )
}
