import type { Metadata } from 'next'
import PageHeader from '@/components/page-header'

import IconsPreview from './components/icons-preview'

export const metadata: Metadata = {
  title: 'Univer | Univer Icons',
}

export default function Page() {
  return (
    <main>
      <PageHeader
        title="Univer Icons"
      />

      <IconsPreview />
    </main>
  )
}
