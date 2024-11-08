'use client'

import { clsx } from '@/utils/clsx'
import { useRouter } from 'next/navigation'

interface IProps {
  className?: string

  children: React.ReactNode

  type?: 'primary'

  href?: string
}

export default function Button(props: IProps) {
  const { className, children, type, href } = props
  const router = useRouter()

  function handleClick() {
    if (href) {
      router.push(href)
    }
  }

  return (
    <button
      className={clsx(
        className,
        `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold`,
        {
          'bg-[linear-gradient(90deg,#5357ED_0%,#40B9FF_104.41%)]': type === 'primary',
          'text-white': type === 'text',
        },
      )}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
