import Link from 'next/link'

import { siteConfig } from '@/lib/seo'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90',
        className
      )}
    >
      <img
        src="/logo.png"
        alt={`${siteConfig.name} logo`}
        width={180}
        height={48}
        className="h-12 w-auto  object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </Link>
  )
}
