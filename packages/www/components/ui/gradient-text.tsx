import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export default function GradientText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        `
          inline animate-gradient bg-gradient-to-r from-[#40FFD9] from-[-3.16%] via-[#64BCFF] via-[11.46%] to-[#40FFD9]
          to-[31.19%] bg-clip-text text-transparent

          bg-[length:var(--bg-size)_100%]
        `,
        className,
      )}
    >
      {children}
    </span>
  )
}
