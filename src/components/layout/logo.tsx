import Link from 'next/link'

import LogoImage from '@/assets/NPTech-Logo.png'
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
        src={LogoImage.src}
        alt={`${siteConfig.name} logo`}
        width={LogoImage.width}
        height={LogoImage.height}
        className="h-9 w-auto rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <span>{siteConfig.name}</span>
    </Link>
  )
}
