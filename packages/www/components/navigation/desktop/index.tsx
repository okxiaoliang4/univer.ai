'use client'

import type { NavigationType } from '@/data/navigation'
import data from '@/data/navigation'
import { localesMap } from '@/i18n'
import { clsx } from '@/utils/clsx'
import { MoreDownSingle } from '@univerjs/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import Actions from '../actions'
import logoImg from '../logo.svg'
import DropdownMenu from './dropdown-menu'
import I18nMenu from './i18n-menu'

export default function HeaderDesktop() {
  const containerRef = useRef<HTMLDivElement>(null)
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

  const [navPos, setNavPos] = useState({
    x: 0,
    w: 0,
  })
  const pathname = usePathname()
  const params = useParams<{ lang: string }>()

  const { lang } = params
  const currentPath = useMemo(() => pathname.replace(`/${lang}`, ''), [pathname, lang])

  function createHref(nav: NavigationType) {
    if ('href' in nav && nav.href) {
      if (typeof nav.href === 'function') {
        return nav.href(lang)
      }
      else {
        return `/${lang}${nav.href}`
      }
    }

    return '/'
  }

  useEffect(() => {
    const index = data.findIndex(nav => createHref(nav) === currentPath)
    if (index >= 0) {
      handleMouseEnter(index)
    }
    else {
      setNavPos({
        x: 0,
        w: 0,
      })
    }
  }, [pathname, params])

  function handleMouseEnter(index: number) {
    const nav = navRefs.current[index]
    if (!nav)
      return

    const container = containerRef.current!

    const { left, width } = nav.getBoundingClientRect()
    const { left: containerLeft } = container.getBoundingClientRect()

    setNavPos({
      x: left - containerLeft,
      w: width,
    })
  }

  function handleMouseLevel() {
    const index = data.findIndex(nav => createHref(nav) === currentPath)

    if (index >= 0) {
      handleMouseEnter(index)
    }
    else {
      setNavPos({
        x: navPos.x,
        w: 0,
      })
    }
  }

  return (
    <header
      className={`
        sticky left-0 top-0 z-10 flex w-full items-center justify-between px-4 py-3 text-sm text-[rgba(255,255,255,0.9)]
        backdrop-blur-[30px]
      `}
    >
      <div className="flex items-center">
        {/* Logo */}
        <Link href={`/${lang}`}>
          <Image
            className="mr-[55px]"
            src={logoImg}
            width={logoImg.width}
            alt="logo"
          />
        </Link>

        {/* Navigation */}
        <nav
          ref={containerRef}
          className="relative mr-[44px] flex"
        >
          <div
            className={`
              absolute h-full rounded-lg border border-gray-100 shadow-[0_2px_4px_0_rgba(14,17,30,0.06)] transition-all
              duration-200 ease-in-out
            `}
            style={{
              width: navPos.w,
              transform: `translateX(${navPos.x}px)`,
              opacity: navPos.w ? 1 : 0,
            }}
          />
          {
            data.map((nav, index) => (
              <div key={nav.title} className="group">
                <Link
                  ref={(el) => { navRefs.current[index] = el }}
                  className={clsx(`
                    relative flex cursor-pointer items-center gap-1 px-2.5 py-2 font-medium transition-colors
                    duration-200 ease-in-out

                    [&:hover]:text-gray-800
                  `, {
                    'text-gray-800': currentPath === createHref(nav),
                  })}
                  href={createHref(nav)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLevel}
                >
                  {nav.title}
                  {'children' in nav && nav.children && <MoreDownSingle />}
                </Link>
                {'children' in nav && nav.children && <DropdownMenu menu={nav.children} />}
              </div>
            ))
          }
        </nav>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <I18nMenu languages={localesMap} />

        <Actions />
      </div>
    </header>
  )
}
