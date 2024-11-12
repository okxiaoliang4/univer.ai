import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Tooltip from '@/components/tooltip'
import { QuestionMarkSingle } from '@univerjs/icons'
import Image from 'next/image'

interface IProps {
  img: StaticImport
  title: string
  subtitle?: string
  description?: string
  discount?: number
  pricing: React.ReactNode
}

export default function PricingHeader(props: IProps) {
  const { img, title, subtitle, description, discount, pricing } = props

  return (
    <header className="mb-6 grid">
      <div className="relative flex items-center">
        <Image
          className="mb-3 h-[60px] w-[60px]"
          src={img}
          alt={title}
          width={40}
          height={40}
        />

        <div className="mb-3 ml-3 flex flex-col items-start gap-2 text-lg text-white/90">
          <p className="font-medium">{title}</p>
          <p className="flex items-center">
            {subtitle && (
              <span className="mr-2 text-base text-white/50">
                {subtitle}
              </span>
            )}
            {description && (
              <Tooltip content={description} width="242px">
                <QuestionMarkSingle className="cursor-help text-gray-500" />
              </Tooltip>
            )}
          </p>
        </div>
      </div>

      <div className="relative flex h-10 items-start text-white">
        {pricing}

        {discount && discount < 1 && (
          <span className={`
            ml-1 rounded-md
            bg-[linear-gradient(129deg,rgba(64,255,217,0.1)_-32.2%,rgba(100,188,255,0.1)_24.07%,rgba(64,255,217,0.1)_99.97%)]
            px-2.5 py-0.5 text-xs text-[#40FFD9]
          `}
          >
            {Math.ceil(1 * 100 - discount * 100)}
            % discount
          </span>
        )}
      </div>
    </header>
  )
}
