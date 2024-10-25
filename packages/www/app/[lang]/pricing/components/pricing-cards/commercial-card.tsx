import Button from '@/components/button'
import Slider from '@/components/slider'
import Tooltip from '@/components/tooltip'
import { ArrowCircleRightSingle, InfoSingle } from '@univerjs/icons'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import CardWrapper from './card-wrapper'
import commercialImg from './commercial.svg'
import PricingHeader from './pricing-header'
import SupportList from './support-list'
import ToggleButton from './toggle-button'

interface IFeature {
  name: string
  price: number
  selected: boolean
}

export default function CommercialCard() {
  const [count, setCount] = useState(1)
  const [selectedFeatures, setSelectedFeatures] = useState<IFeature[]>([{
    name: 'Sheets premium features',
    price: 17980,
    selected: true,
  }, {
    name: 'Docs premium features',
    price: 17980,
    selected: false,
  }, {
    name: 'Collabration',
    price: 11800,
    selected: false,
  }])

  const discount = useMemo(() => {
    if (count <= 1) {
      return 1
    }
    else if (count <= 3) {
      return 0.9
    }
    else if (count <= 5) {
      return 0.85
    }
    else if (count <= 7) {
      return 0.8
    }
    else if (count <= 9) {
      return 0.75
    }
    else if (count <= 10) {
      return 0.7
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
        img={commercialImg}
        title="Commercial"
        description="Commercial and/or SaaS use is defined as an application(s) that will be used where the end-user or company(s) will be charged to access the service(s)."
        discount={discount}
        pricing={(
          <strong className="font-bold">
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
            <span className="ml-1 text-base font-normal text-gray-500">/ annual</span>
          </strong>
        )}
      />

      <div className="mb-6 grid h-14 gap-4 text-sm text-gray-500">
        <p>
          <span className="inline-flex items-center gap-2">
            {count <= 10 ? count : `${count - 1}+`}
            {' '}
            Apps or
            {' '}
            {count <= 10 ? count * 5 : `${(count - 1) * 5}+`}
            {' '}
            Named Hostnames
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

      <ul className="mb-5 grid gap-4 text-sm">
        <li className="flex justify-between">
          <div className="inline-flex items-center gap-2">All basic features</div>
          <div className="text-gray-500">Free</div>
        </li>
        {selectedFeatures.map(feature => (
          <li key={feature.name} className="flex justify-between">
            <div className="inline-flex items-center gap-2">
              {feature.name}
            </div>
            <div className="flex items-center gap-2 text-gray-500">
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
          {' '}
          <ArrowCircleRightSingle />
        </Button>
      </div>

      <SupportList
        className="mb-4"
        list={['Annual subscription fees are required', 'Email / Discord Support Issues priority support']}
      />

      <Link className="text-indigo-600 underline" href="https://univer.ai/pro/license">
        Get your 30-day free trial
      </Link>
    </CardWrapper>
  )
}
