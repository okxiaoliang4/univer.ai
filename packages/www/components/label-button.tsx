import { clsx } from '@/utils/clsx'

interface IProps {
  className?: string
  emoji?: string
  children: React.ReactNode
}

export default function LabelButton(props: IProps) {
  const { className, emoji, children } = props

  return (
    <div
      className={clsx(`
        relative w-fit rounded-full border border-[#E7E9ED] bg-white px-3.5 py-1.5 text-xs font-medium text-gray-600
        shadow-[0_-3px_6px_0_rgba(244,245,250,0.60)_inset]
      `, className)}
    >
      {emoji && <span className="mr-2">{emoji}</span>}
      {children}
    </div>
  )
}
