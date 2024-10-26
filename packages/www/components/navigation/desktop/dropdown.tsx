import { clsx } from '@/utils/clsx'

interface IProps {
  className?: string

  children: React.ReactNode
}

export default function Dropdown(props: IProps) {
  const { className, children } = props

  return (
    <section
      className={clsx(`
        invisible absolute top-0 hidden gap-4 rounded-[10px] border border-white bg-[rgba(255,255,255,0.95)] p-4 text-sm
        opacity-0 shadow-[0_-3px_6px_0_rgba(244,245,250,0.60)_inset,0_2px_16px_-1px_rgba(17,22,40,0.07)]
        backdrop-blur-[30px] transition-all duration-200 ease-in-out

        group-hover:visible group-hover:translate-y-9 group-hover:opacity-100

        xl:grid
      `, className)}
    >
      {children}
    </section>
  )
}
