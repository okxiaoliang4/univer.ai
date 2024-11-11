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
        className={`
          text-white

          [&>tr:first-child>th]:rounded-se-xl [&>tr:first-child>th]:rounded-ss-xl
        `}
      >
        <tr className="grid grid-flow-col items-center gap-9">
          <th className="w-[280px] pb-4 pt-10 text-left text-lg font-semibold">What's included in the plans</th>
          <th
            className="w-[264px] pb-4 pt-10 text-center text-xl font-bold"
          >
            Developer
          </th>
          <th
            className="w-[264px] bg-[rgba(87,80,183,0.2)] pb-4 pt-10 text-center text-xl font-bold"
          >
            Non-commercial
          </th>
          <th
            className="w-[264px] bg-[rgba(87,80,183,0.2)] pb-4 pt-10 text-center text-xl font-bold"
          >
            Commercial
          </th>
        </tr>
      </thead>

      <tbody
        className={`
          text-sm text-white

          [&>tr:last-child>td]:rounded-ee-xl [&>tr:last-child>td]:rounded-es-xl
        `}
      >
        {plans.map(plan => (
          <Fragment key={plan.title}>
            <tr className="grid h-14 grid-flow-col items-center gap-9">
              <td className="flex h-full w-[280px] items-center text-lg font-bold">{plan.title}</td>
              <td className="flex h-full w-[264px] items-center px-6">
                <hr className="w-full border-dashed border-gray-300" />
              </td>
              <td className="flex h-full w-[264px] items-center bg-[rgba(87,80,183,0.2)] px-6">
                <hr className="w-full border-dashed border-gray-300" />
              </td>
              <td className="flex h-full w-[264px] items-center bg-[rgba(87,80,183,0.2)] px-6">
                <hr className="w-full border-dashed border-gray-300" />
              </td>
            </tr>

            {plan.features.map(feature => (
              <Fragment key={feature.title}>
                <tr
                  key={feature.title}
                  className={`
                    grid grid-flow-col items-center gap-9

                    [&_td]:py-2.5
                  `}
                >
                  <td className="flex h-full w-[280px] items-center">
                    {'children' in feature
                      ? (
                          <a
                            className="flex cursor-pointer items-center font-medium text-white/90"
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
                  <td className="flex h-full w-[264px] items-center justify-center px-6">
                    {!('children' in feature && feature.children) && (
                      'limitCaution' in feature && feature.limitCaution ? <p className="text-center text-xs font-medium">{feature.limitCaution}</p> : <CheckMarkSingle />
                    )}
                  </td>
                  <td className="flex h-full w-[264px] items-center justify-center bg-[rgba(87,80,183,0.2)] px-6">
                    {!('children' in feature && feature.children) && (
                      <CheckMarkSingle />
                    )}
                  </td>
                  <td className="flex h-full w-[264px] items-center justify-center bg-[rgba(87,80,183,0.2)] px-6">
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
                        visible grid grid-flow-col items-center gap-9 overflow-hidden transition-all duration-100
                        ease-in-out

                        [&_td]:py-2.5
                      `, {
                        'invisible h-0': collapsedFeatures.includes(feature.title),
                      })}
                    >
                      <td className="flex h-full w-[280px] items-center pl-4 text-white/60">{child.title}</td>
                      <td className="flex h-full w-[264px] items-center justify-center px-6">
                        {child.limitCaution ? <p className="text-center text-xs font-medium">{child.limitCaution}</p> : <CheckMarkSingle />}
                      </td>
                      <td className="flex h-full w-[264px] items-center justify-center bg-[rgba(87,80,183,0.2)] px-6">
                        <CheckMarkSingle />
                      </td>
                      <td className="flex h-full w-[264px] items-center justify-center bg-[rgba(87,80,183,0.2)] px-6">
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
