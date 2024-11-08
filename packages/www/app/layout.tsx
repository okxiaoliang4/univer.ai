import type { Metadata } from 'next'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import { clsx } from '@/utils/clsx'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Univer',
  description: 'Embedding server-driven productivity tools into Your Workflow',
}

interface IProps {
  children: React.ReactNode
}

export default function RootLayout(props: IProps) {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={clsx(inter.className, 'bg-black antialiased')}
      >
        <Navigation />

        {children}

        <Footer />
      </body>
    </html>
  )
}
