'use client'

import { CheckMarkSingle, CopySingle } from '@univerjs/icons'
import { useRef, useState } from 'react'

interface IProps {
  children: React.ReactNode
}

export default function MdxPre(props: IProps) {
  const ref = useRef<HTMLPreElement>(null)
  const { children } = props

  const [copied, setCopied] = useState(false)

  function handleCopy() {
    const code = ref.current?.textContent
    if (!code)
      return

    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <section className="relative mt-6">
      <pre
        ref={ref}
        className={`
          text-sm/5.5 scrollbar-custom relative w-full overflow-x-auto rounded-md
          bg-[hsl(var(--nextra-primary-hue)_var(--nextra-primary-saturation)_39%/.05)] py-3

          [&>.nextra-code>span]:!pr-12
        `}
      >
        {children}
      </pre>
      <div
        className={`
          absolute right-2 top-1.5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-gray-200
          transition-colors

          hover:bg-gray-300
        `}

        onClick={handleCopy}
      >
        {copied
          ? (
              <CheckMarkSingle className="h-4 w-4 text-green-500" />
            )
          : (
              <CopySingle className="h-4 w-4 text-gray-400" />
            )}
      </div>
    </section>
  )
}
