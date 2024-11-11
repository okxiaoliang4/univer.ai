import { SuccessSingle } from '@univerjs/icons'
import clsx from 'clsx'

interface IProps {
  className?: string
  list: string[]
}

export default function SupportList(props: IProps) {
  const { className, list } = props

  return (
    <ul className={clsx('grid gap-4 text-sm text-white/90', className)}>
      {list.map(item => (
        <li key={item} className="grid grid-flow-col justify-start gap-2">
          <SuccessSingle className="relative top-1 text-white/50" />
          {item}
        </li>
      ))}
    </ul>

  )
}
