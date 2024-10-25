'use client'

import data from '@/data/navigation'
import { clsx } from '@/utils/clsx'
import { MenuSingle24 } from '@univerjs/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Actions from '../actions'
import logoImg from '../logo.svg'

export default function HeaderMobile() {
  const params = useParams<{ lang: string }>()
  const { lang } = params

  const [visible, setVisible] = useState(false)

  function handleToggleVisible() {
    setVisible(!visible)
  }

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = ''
    }
  }, [visible])

  return (
    <header
      className={clsx(`
        fixed left-[32px] top-4 z-10 h-14 w-[calc(100%-64px)] origin-center rounded-[10px] bg-[rgba(255,255,255,0.9)]
        py-3 text-sm text-gray-500
        shadow-[0_2px_16px_-1px_rgba(17,22,40,0.07),0_-3px_6px_0_rgba(244,245,250,0.60)_inset] backdrop-blur-[30px]
        transition-all duration-200 ease-in-out

        xl:hidden
      `, {
        'left-0 top-0 h-full w-full pb-0 pt-7 shadow-none': visible,
      })}
    >
      <div className={clsx('flex items-center justify-between px-4', {
        'pb-3': visible,
      })}
      >
        {/* Logo */}
        <Link href={`/${lang}`} onClick={handleToggleVisible}>
          <Image
            className="mr-[55px]"
            src={logoImg}
            width={logoImg.width}
            alt="logo"
          />
        </Link>

        <div>
          <a className="text-xl" onClick={handleToggleVisible}>
            <MenuSingle24 />
          </a>
        </div>
      </div>

      <aside
        className={clsx('h-0 overflow-y-auto px-4 transition-all ease-in-out', {
          'h-[calc(100%-56px)]': visible,
        })}
      >
        <nav className="text-sm">
          {data.map(nav => (
            <div key={nav.title} className="grid gap-2">
              {'href' in nav
                ? (
                    <Link
                      className="p-2.5 font-semibold text-gray-800"
                      href={typeof nav.href === 'function' ? nav.href(lang) : nav.href}
                      onClick={handleToggleVisible}
                    >
                      {nav.title}
                    </Link>
                  )
                : (

                    <div className="p-2.5 font-semibold text-gray-800">
                      {nav.title}
                    </div>
                  )}

              <ul>
                {'children' in nav && nav.children?.map(child => (
                  <li key={child.title} className="grid gap-2">
                    <div className="px-3 text-base text-gray-500">
                      {child.title}
                    </div>

                    <ul>
                      {'children' in child && child.children?.map(grandchild => (
                        <li key={grandchild.title}>
                          <Link
                            className="flex items-center gap-2 p-2.5 font-semibold text-gray-800"
                            href={typeof grandchild.href === 'function' ? grandchild.href(lang) : grandchild.href}
                            onClick={handleToggleVisible}
                          >
                            <span className="text-xl">
                              {grandchild.icon}
                            </span>
                            {grandchild.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="sticky bottom-0">
          <Actions />
        </div>
      </aside>
    </header>
  )
}
