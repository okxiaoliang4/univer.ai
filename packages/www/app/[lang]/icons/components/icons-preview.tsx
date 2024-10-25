'use client'

import Container from '@/components/container'
import Slider from '@/components/slider'
import { clsx } from '@/utils/clsx'
import * as manifest from '@univerjs/icons/esm/manifest'
import { useMemo, useState } from 'react'
import ColorPicker from './color-picker'
import IconBox from './icon-box'

import Search from './search'

export default function IconsPreview() {
  const [category, setCategory] = useState('single')
  const [keyword, setKeyword] = useState('')
  const [fontSize, setFontSize] = useState(24)
  const [channel1, setChannel1] = useState('#000000')
  const [channel2, setChannel2] = useState('#274FEE')

  const tabs = [{
    label: 'Single Tone',
    value: 'single',
  }, {
    label: 'Multi-Tone',
    value: 'binary',
  }, {
    label: 'Fixed Color',
    value: 'other',
  }]

  const excludeList = ['outdate']

  const groups = useMemo(() => {
    if (!manifest) {
      return []
    }

    return tabs.map(tab => ({
      name: tab.value,
      items: Object.keys(manifest)
        .filter((item) => {
          const itemLowerCase = item.toLowerCase()
          if (itemLowerCase.search(tab.value) < 0) {
            return false
          }

          const hasExclude = excludeList.some((excludeItem) => {
            return itemLowerCase.search(excludeItem) >= 0
          })
          if (hasExclude) {
            return false
          }
          return true
        })
        .map(item => ({
          groupName: item.replace('Manifest', '').replace(tab.value, ''),
          groupItem: manifest[item as keyof typeof manifest],
        })),
    }))
  }, [manifest])

  const activeGroup = useMemo(() => {
    const result = groups.find((group) => {
      return group.name === category
    })!

    if (!result) {
      return {
        items: [],
      }
    }

    if (!keyword) {
      return result
    }

    return {
      ...result,
      items: result.items.map((item) => {
        return {
          ...item,
          groupItem: item.groupItem.filter((icon: any) => {
            return icon.icon.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
          }),
        }
      }).filter(item => item.groupItem.length > 0),
    }
  }, [category, keyword, groups])!

  return (
    <>
      <section
        className={`
          relative mb-12 bg-white py-4 shadow-[0px_4px_24px_#1f23270a]

          xl:h-14 xl:py-0
        `}
      >
        <Container
          className={`
            flex h-full max-w-[1200px] flex-col justify-between gap-8 px-4

            xl:mb-24 xl:flex-row xl:gap-12 xl:px-0
          `}
        >
          <Search value={keyword} onChange={setKeyword} />
          <div
            className={`
              flex h-full flex-col gap-4

              xl:flex-row xl:items-center
            `}
          >
            <Slider min={12} max={64} value={fontSize} suffix="px" onChange={setFontSize} />
            <ColorPicker label="channel 1" value={channel1} onChange={setChannel1} />
            <ColorPicker label="channel 2" value={channel2} onChange={setChannel2} />
          </div>
        </Container>
      </section>

      <Container
        className={`
          mb-12 grid max-w-[1200px] gap-6 px-4

          xl:mb-28 xl:px-6
        `}
      >

        <section className="mb-2 flex gap-4">
          {
            tabs.map(tab => (
              <a
                key={tab.value}
                className={clsx(`
                  cursor-pointer rounded-lg px-2.5 py-1.5 text-sm transition-all duration-200 ease-in-out

                  hover:bg-indigo-200 hover:text-indigo-700
                `, {
                  'bg-indigo-200 text-indigo-700': tab.value === category,
                })}
                onClick={() => setCategory(tab.value)}
              >
                {tab.label}
              </a>
            ))
          }
        </section>

        {activeGroup.items.map(item => (
          <div key={item.groupName}>
            <h4 className="mb-6 font-semibold">{item.groupName}</h4>

            <div
              className={`
                grid grid-cols-2 gap-8

                md:grid-cols-4

                xl:grid-cols-8
              `}
            >
              {item.groupItem.map((icon: any) => (
                <IconBox
                  key={icon.stem}
                  name={icon.icon}
                  iconKey={icon.stem}
                  fontSize={fontSize}
                  color={channel1}
                  colorChannel1={channel2}
                />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </>
  )
}
