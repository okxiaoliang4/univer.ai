import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Tooltip from '@/components/tooltip'
import { QuestionMarkSingle } from '@univerjs/icons'
import Image from 'next/image'

interface IProps {
  img: StaticImport
  title: string
  description?: string
  discount?: number
  pricing: React.ReactNode
}

export default function PricingHeader(props: IProps) {
  const { img, title, description, discount, pricing } = props

  return (
    <header className="mb-6 grid">
      <div className="flex items-center justify-between">
        <Image
          className="mb-3 h-[60px] w-[60px]"
          src={img}
          alt={title}
          width={40}
          height={40}
        />

        {discount && discount < 1 && (
          <span className={`
            rounded-md
            bg-[linear-gradient(129deg,rgba(64,255,217,0.1)_-32.2%,rgba(100,188,255,0.1)_24.07%,rgba(64,255,217,0.1)_99.97%)]
            px-2.5 py-0.5 text-xs text-[#40FFD9]
          `}
          >
            {Math.ceil(1 * 100 - discount * 100)}
            % discount
          </span>
        )}
      </div>

      <label className="mb-3 inline-flex items-center gap-2 font-medium text-white/90">
        {title}
        {description && (
          <Tooltip content={description} width="242px">
            <QuestionMarkSingle className="cursor-help text-gray-500" />
          </Tooltip>
        )}
      </label>

      <div className="flex h-10 items-center text-white">
        {pricing}
      </div>
    </header>
  )
}
