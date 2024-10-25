'use client'

import plans from '@/data/plans'
import { clsx } from '@/utils/clsx'
import { CheckMarkSingle, MoreDownSingle } from '@univerjs/icons'
import { Fragment, useState } from 'react'

export default function CompareTableDesktop() {
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
    <table
      className={`
        hidden

        xl:block
      `}
    >
      <thead
        className="[&>tr:first-child>th]:rounded-se-xl [&>tr:first-child>th]:rounded-ss-xl"
      >
        <tr className="grid grid-flow-col items-center gap-8">
          <th className="w-[280px] pb-4 pt-10 text-left text-lg font-semibold">What's included in the plans</th>
          <th
            className="w-[264px] bg-[#F6F8FC] pb-4 pt-10 text-center text-xl font-bold"
          >
            Developer
          </th>
          <th
            className="w-[264px] bg-[#EEF4FF] pb-4 pt-10 text-center text-xl font-bold"
          >
            Non-commercial
          </th>
          <th
            className="w-[264px] bg-[#E7EFFF] pb-4 pt-10 text-center text-xl font-bold"
          >
            Commercial
          </th>
        </tr>
      </thead>

      <tbody
        className={`
          text-sm text-gray-600

          [&>tr:last-child>td]:rounded-ee-xl [&>tr:last-child>td]:rounded-es-xl
        `}
      >
        {plans.map(plan => (
          <Fragment key={plan.title}>
            <tr className="grid h-14 grid-flow-col items-center gap-8">
              <td className="flex h-full w-[280px] items-center text-lg font-bold text-gray-800">{plan.title}</td>
              <td className="flex h-full w-[264px] items-center bg-[#F6F8FC] px-6">
                <hr className="w-full border-dashed border-gray-300" />
              </td>
              <td className="flex h-full w-[264px] items-center bg-[#EEF4FF] px-6">
                <hr className="w-full border-dashed border-gray-300" />
              </td>
              <td className="flex h-full w-[264px] items-center bg-[#E7EFFF] px-6">
                <hr className="w-full border-dashed border-gray-300" />
              </td>
            </tr>

            {plan.features.map(feature => (
              <Fragment key={feature.title}>
                <tr
                  key={feature.title}
                  className={`
                    grid grid-flow-col items-center gap-8

                    [&_td]:py-2.5
                  `}
                >
                  <td className="flex h-full w-[280px] items-center">
                    {'children' in feature
                      ? (
                          <a
                            className="flex cursor-pointer items-center font-medium text-gray-800"
                            onClick={() => handleToggleCollapse(feature.title)}
                          >
                            <span className="inline-block w-4">
                              <MoreDownSingle />
                            </span>
                            {feature.title}
                          </a>
                        )
                      : (
                          <span className="pl-4">{feature.title}</span>
                        )}
                  </td>
                  <td className="flex h-full w-[264px] items-center justify-center bg-[#F6F8FC] px-6">
                    {!('children' in feature && feature.children) && (
                      'limitCaution' in feature && feature.limitCaution ? <p className="text-center text-xs font-medium">{feature.limitCaution}</p> : <CheckMarkSingle />
                    )}
                  </td>
                  <td className="flex h-full w-[264px] items-center justify-center bg-[#EEF4FF] px-6">
                    {!('children' in feature && feature.children) && (
                      <CheckMarkSingle />
                    )}
                  </td>
                  <td className="flex h-full w-[264px] items-center justify-center bg-[#E7EFFF] px-6">
                    {!('children' in feature && feature.children) && (
                      <CheckMarkSingle />
                    )}
                  </td>
                </tr>
                {'children' in feature && feature.children?.map(child => (
                  <Fragment key={child.title}>
                    <tr
                      key={child.title}
                      className={clsx(`
                        visible grid grid-flow-col items-center gap-8 overflow-hidden transition-all duration-100
                        ease-in-out

                        [&_td]:py-2.5
                      `, {
                        'invisible h-0': collapsedFeatures.includes(feature.title),
                      })}
                    >
                      <td className="flex h-full w-[280px] items-center pl-4">{child.title}</td>
                      <td className="flex h-full w-[264px] items-center justify-center bg-[#F6F8FC] px-6">
                        {child.limitCaution ? <p className="text-center text-xs font-medium">{child.limitCaution}</p> : <CheckMarkSingle />}
                      </td>
                      <td className="flex h-full w-[264px] items-center justify-center bg-[#EEF4FF] px-6">
                        <CheckMarkSingle />
                      </td>
                      <td className="flex h-full w-[264px] items-center justify-center bg-[#E7EFFF] px-6">
                        <CheckMarkSingle />
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  )
}
