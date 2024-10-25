import type { AppProps } from 'next/app'

import { useRouter } from 'nextra/hooks'
import { useEffect } from 'react'
import './globals.css'

export default function App(appProps: AppProps) {
  const { Component, pageProps } = appProps

  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname.includes('/guides/sheets')) {
      document.documentElement.style.setProperty('--nextra-primary-hue', '128deg')
      document.documentElement.style.setProperty('--nextra-primary-saturation', '43%')
    }
    else if (pathname.includes('/guides/docs')) {
      document.documentElement.style.setProperty('--nextra-primary-hue', '214deg')
      document.documentElement.style.setProperty('--nextra-primary-saturation', '80%')
    }
    else if (pathname.includes('/guides/slides')) {
      document.documentElement.style.setProperty('--nextra-primary-hue', '0deg')
      document.documentElement.style.setProperty('--nextra-primary-saturation', '78%')
    }
    else {
      document.documentElement.style.setProperty('--nextra-primary-hue', '180deg')
      document.documentElement.style.setProperty('--nextra-primary-saturation', '50%')
    }
  }, [pathname])

  return <Component {...pageProps} />
}
