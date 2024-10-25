import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { defaultLocale, LOCALES_ENUM } from './i18n'

function getMatchingLocale(locale: string, locales: string[], defaultLocale: string): string | undefined {
  const lowerCaseCurrentLocale = locale.toLowerCase()

  for (const l of locales) {
    const lowerCaseLocale = l.toLowerCase()
    if (lowerCaseCurrentLocale === lowerCaseLocale) {
      return l
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/assets/'))
    return

  const pathArray = pathname.split('/')
  const currentLocale = pathArray[1]
  const locales = Object.values(LOCALES_ENUM)
  const locale = getMatchingLocale(currentLocale, locales, defaultLocale)
  if (currentLocale !== locale) {
    if (currentLocale.toLowerCase() === locale?.toLowerCase()) {
      request.nextUrl.pathname = `${pathname.replace(`/${currentLocale}`, `/${locale}`)}`

      return NextResponse.redirect(request.nextUrl)
    }

    request.nextUrl.pathname = `/${locale}${pathname}`

    return NextResponse.redirect(request.nextUrl)
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
