import { clsx } from '@/utils/clsx'

interface IProps {
  className?: string

  children: React.ReactNode

  type?: 'primary'
}

export default function Button(props: IProps) {
  const { className, children, type } = props

  return (
    <button
      className={clsx(
        className,
        `
          inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-semibold
          text-gray-800 shadow-[0_-3px_6px_0_rgba(244,245,250,0.60)_inset] outline outline-1 outline-gray-200
        `,
        {
          'bg-[linear-gradient(180deg,#204AED_0%,#8A9FF2_100%)] text-white outline outline-1 outline-[#9DACF3] shadow-[0_0_0_1px_rgba(44,83,241,0.48)': type === 'primary',
        },
      )}
      type="button"
    >
      {children}
    </button>
  )
}
