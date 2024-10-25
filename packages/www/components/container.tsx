import { clsx } from '@/utils/clsx'

interface IProps {
  className?: string
  children: React.ReactNode
}

export default function Continer(props: IProps) {
  const { className, children } = props

  return (
    <div className={clsx('relative mx-auto max-w-[1440px]', className)}>
      {children}
    </div>
  )
}
