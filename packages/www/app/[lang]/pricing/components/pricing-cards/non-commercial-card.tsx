import Button from '@/components/button'
import Slider from '@/components/slider'
import Tooltip from '@/components/tooltip'
import { InfoSingle } from '@univerjs/icons'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import CardWrapper from './card-wrapper'
import nonCommercialImg from './non-commercial.svg'
import PricingHeader from './pricing-header'
import SupportList from './support-list'
import ToggleButton from './toggle-button'

interface IFeature {
  name: string
  price: number
  selected: boolean
}

export default function NonCommercialCard() {
  const [count, setCount] = useState(1)
  const [selectedFeatures, setSelectedFeatures] = useState<IFeature[]>([{
    name: 'Sheets premium features',
    price: 1998,
    selected: true,
  }, {
    name: 'Docs premium features',
    price: 1998,
    selected: false,
  }, {
    name: 'Collabration',
    price: 1398,
    selected: false,
  }])

  const discount = useMemo(() => {
    if (count <= 3) {
      return 1
    }
    else if (count <= 6) {
      return 0.9
    }
    else if (count <= 10) {
      return 0.8
    }

    return 1
  }, [count])

  const totalPricing = useMemo(() => {
    return Math.floor(selectedFeatures.reduce((acc, feature) => {
      return feature.selected ? acc + feature.price : acc
    }, 0) * count * discount)
  }, [selectedFeatures, count, discount])

  function handleSelectFeature(feature: IFeature, value: boolean) {
    setSelectedFeatures(prev => prev.map((item) => {
      if (item.name === feature.name) {
        return {
          ...item,
          selected: value,
        }
      }
      return item
    }))
  }

  return (
    <CardWrapper>
      <PricingHeader
        img={nonCommercialImg}
        title="Business"
        subtitle="Non-commercial license"
        description="Internal and Non-commercial use is defined as an application(s) that will be used for internal or external use where the end-user will not be charged to access the service(s)."
        discount={discount}
        pricing={(
          <strong className="text-[40px]/[1] font-bold">
            {count <= 10
              ? (
                  <span className="text-[40px]/[1]">
                    $
                    {totalPricing}
                  </span>
                )
              : (
                  <span className="text-[28px]/[1]">
                    Custom Pricing
                  </span>
                )}
          </strong>
        )}
      />

      <div className="mb-6 grid h-14 gap-4 text-sm text-white/50">
        <p>
          <span className="inline-flex items-center gap-2">
            {count <= 10 ? count : `${count - 1}+`}
            {' '}
            Named Hostname
            <Tooltip content="Each production server hostname and/or named mobile/desktop application that univer will be deployed to requires separate licensing, with hostname examples such as: www.univer.com, www.univer.ai, sub1.univer.com, sub2.univer.com." width="300px">
              <InfoSingle className="text-gray-500" />
            </Tooltip>
          </span>
        </p>

        <Slider
          min={0}
          max={11}
          value={count}
          onChange={setCount}
        />
      </div>

      <ul className="mb-5 grid gap-4 text-sm text-white/90">
        <li className="flex justify-between">
          <div className="inline-flex items-center gap-2">All basic features</div>
          <div className="text-gray-500">Free</div>
        </li>
        {selectedFeatures.map(feature => (
          <li key={feature.name} className="flex justify-between">
            <div className="inline-flex items-center gap-2">
              {feature.name}
            </div>
            <div className="flex items-center gap-2">
              <span>
                $
                {feature.price}
              </span>
              <ToggleButton value={feature.selected} onChange={value => handleSelectFeature(feature, value)} />
            </div>

          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="mb-5">
        <Button className="w-full" type="primary">
          Contact us
        </Button>
      </div>

      <SupportList
        className="mb-4"
        list={['Perpetual license', 'Email / Discord Support Issues priority support', '1 year of free upgrades. Subsequent access to the latest version requires renewal at a 40% discount.']}
      />

      <Link
        className="text-[#40FFD9] underline"
        href="https://univer.ai/pro/license"
      >
        Get your 30-day free trial
      </Link>
    </CardWrapper>
  )
}
