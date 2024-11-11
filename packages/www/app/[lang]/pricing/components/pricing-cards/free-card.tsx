import Button from '@/components/button'
import Tooltip from '@/components/tooltip'
import { InfoSingle } from '@univerjs/icons'
import { useParams } from 'next/navigation'
import CardWrapper from './card-wrapper'
import freeImg from './free.svg'
import PricingHeader from './pricing-header'
import SupportList from './support-list'

export default function FreeCard() {
  const params = useParams<{ lang: string }>()

  const { lang } = params

  return (
    <CardWrapper>
      <PricingHeader
        img={freeImg}
        title="Developer"
        pricing={(
          <strong className="text-[40px]/[1] font-bold">
            Free
          </strong>
        )}
      />

      <div className="mb-6 grid h-14 gap-4 text-sm text-white/50">
        <p>
          <span className="inline-flex items-center gap-2">
            No limited Named Hostname
            <Tooltip content="Each production server hostname and/or named mobile/desktop application that univer will be deployed to requires separate licensing, with hostname examples such as: www.univer.com, www.univer.ai, sub1.univer.com, sub2.univer.com." width="300px">
              <InfoSingle className="text-gray-500" />
            </Tooltip>
          </span>
        </p>
      </div>

      <ul className="mb-5 grid gap-4 text-sm text-white/90">
        <li className="flex justify-between">
          <div className="inline-flex items-center gap-2">All basic features is free</div>
        </li>
        <li className="flex justify-between">
          <div className="inline-flex items-center gap-2">
            Limited sheets premium features
            <Tooltip content="Print up to 3 pages at a time, Import files under 1MB, Export files under 10k cells,Create only one pivot table" width="226px">
              <InfoSingle className="cursor-help text-gray-500" />
            </Tooltip>
          </div>
        </li>
        <li className="flex justify-between">
          <div className="inline-flex items-center gap-2">
            Limited docs premium features
            <Tooltip content="Print up to 3 pages at a time, Import files under 1MB" width="226px">
              <InfoSingle className="cursor-help text-gray-500" />
            </Tooltip>
          </div>
        </li>
        <li className="flex justify-between">
          <div className="inline-flex items-center gap-2">
            Limited collabration
            <Tooltip content="The number of collaborative documents at the same time does not exceed 5, The number of collaborators for each document should not exceed 3" width="318px">
              <InfoSingle className="cursor-help text-gray-500" />
            </Tooltip>
          </div>
        </li>
      </ul>

      {/* Actions */}
      <div className="mb-5">
        <Button className="w-full" type="text" href={`/${lang}/quick-guide`}>
          Start
        </Button>
      </div>

      <SupportList
        list={['Community support']}
      />
    </CardWrapper>
  )
}
