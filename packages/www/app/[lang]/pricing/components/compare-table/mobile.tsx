'use client'

import plans from '@/data/plans'
import { clsx } from '@/utils/clsx'
import { CheckMarkSingle, MoreDownSingle } from '@univerjs/icons'
import { useState } from 'react'

export default function CompareTableMobile() {
  const [collapsedFeatures, setCollapsedFeatures] = useState<string[]>([])

  function handleToggleCollapse(title: string) {
    if (collapsedFeatures.includes(title)) {
      setCollapsedFeatures(collapsedFeatures.filter(item => item !== title))
    }
    else {
      setCollapsedFeatures([...collapsedFeatures, title])
    }
  }

  return (
    <section
      className={`
        block w-full

        xl:hidden
      `}
    >
      <p className="mb-8 text-lg font-semibold text-gray-800">
        What's included in the plans
      </p>

      {['Developer', 'Non-commercial', 'Commercial'].map(title => (
        <section key={title} className="grid gap-5 text-sm">
          <div className="mb-1 text-xl font-bold text-gray-800">
            {title}
          </div>

          {plans.map(plan => (
            <ul key={plan.title}>
              <li className="grid gap-5">
                <label className="block font-bold text-gray-800">
                  {plan.title}
                </label>

                <ul className="grid gap-5">
                  {plan.features.map(feature => (
                    <li
                      key={feature.title}
                      className="grid gap-5"
                    >
                      <div
                        className={clsx('flex items-center justify-between', {
                          'font-medium': !('children' in feature && feature.children),
                        })}
                        onClick={() => handleToggleCollapse(feature.title)}
                      >
                        <span className="inline-flex items-center">
                          {('children' in feature && feature.children) && (
                            <span className="">
                              <MoreDownSingle />
                            </span>
                          )}
                          {feature.title}
                        </span>

                        {!('children' in feature && feature.children) && (
                          <p>
                            {title === 'Developer' && 'limitCaution' in feature && feature.limitCaution
                              ? (
                                  <strong className="text-right text-xs font-semibold text-gray-600">
                                    {feature.limitCaution}
                                  </strong>
                                )
                              : <CheckMarkSingle />}
                          </p>
                        )}
                      </div>

                      <ul
                        className={clsx('grid gap-5 overflow-hidden pl-4 text-gray-600', {
                          hidden: collapsedFeatures.includes(feature.title),
                        })}
                      >
                        {'children' in feature && feature.children?.map(child => (
                          <li
                            key={child.title}
                            className="flex items-center justify-between gap-4"
                          >
                            <span className="flex-1 whitespace-nowrap">{child.title}</span>
                            {title === 'Developer'
                              ? (
                                  <strong className="text-right text-xs font-semibold text-gray-600">
                                    {child.limitCaution}
                                  </strong>
                                )
                              : (
                                  <span className="justify-items-end">
                                    <CheckMarkSingle />
                                  </span>
                                )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </section>
      ))}
    </section>
  )
}
