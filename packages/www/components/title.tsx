import { clsx } from '@/utils/clsx'

interface IProps {
  level: 'h1' | 'h2'
  align?: 'left' | 'center'
  className?: string
  children: React.ReactNode
  description?: React.ReactNode
}

export default function Title(props: IProps) {
  const { level, align = 'left', className, children, description } = props

  const Heading = level as keyof JSX.IntrinsicElements

  return (
    <div className={clsx('mx-auto w-full', className)}>
      <Heading
        className={clsx(`
          mx-auto text-primary text-white

          xl:text-[46px]
        `, {
          'mb-6': description,
          'text-4xl/[1.25] font-bold xl:text-[46px]/[1.25]': level === 'h1',
          'text-2xl/[1.5] font-semibold xl:text-[38px]/[1.5]': level === 'h2',
          'text-center': align === 'center',
        })}
      >
        {children}
      </Heading>
      {description && (
        <div
          className={`
            mx-auto

            xl:max-w-[824px]
          `}
        >
          {description}
        </div>
      )}
    </div>
  )
}
