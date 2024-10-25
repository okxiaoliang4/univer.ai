import { clsx } from '@/utils/clsx'
import { useEffect, useMemo, useRef, useState } from 'react'

interface IProps {
  children: React.ReactNode
  content: React.ReactNode
  width?: string
  placement?: 'top' | 'bottom'
}

export default function Tooltip(props: IProps) {
  const { children, content, width = 'auto', placement = 'bottom' } = props

  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (ref.current) {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      })
    }
  }, [])

  const transform = useMemo(() => {
    if (placement === 'bottom') {
      return `translate(-50%, 100%)`
    }
    else if (placement === 'top') {
      return `translate(-50%, -100%)`
    }
  }, [placement])

  return (
    <div ref={ref} className="group relative">
      {children}

      <div
        className={clsx(`
          invisible absolute z-10 rounded-lg bg-black px-2.5 py-1.5 text-xs text-white opacity-0 shadow-lg
          transition-opacity duration-200 easing-in-out

          group-hover:visible group-hover:opacity-100
        `, {
          'top-0': placement === 'top',
          'bottom-0': placement === 'bottom',
        })}
        style={{
          left: size.width / 2,
          width,
          transform,
        }}
      >
        {content}
      </div>
    </div>
  )
}
