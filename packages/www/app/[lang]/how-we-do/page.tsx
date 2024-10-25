import type { Metadata } from 'next'

import Container from '@/components/container'
import LabelButton from '@/components/label-button'
import PageHeader from '@/components/page-header'
import Title from '@/components/title'
import Features from '../components/features'
import Architecture from './components/architecture'

export const metadata: Metadata = {
  title: 'Univer | How We Do',
  description: 'Embedding server-driven productivity tools into Your Workflow',
}

export default function Page() {
  return (
    <main>
      <PageHeader
        title={(
          <>
            How We Do
            {' '}
            <span className="text-black">🧑‍💻</span>
          </>
        )}
      />

      <Container className={`
        grid gap-12 px-4

        xl:gap-24 xl:px-0
      `}
      >
        <Architecture />

        <section>
          <LabelButton
            className="relative left-1/2 mb-4 -translate-x-1/2"
            emoji="😍"
          >
            Advantages
          </LabelButton>

          <section
            className={`
              mx-auto mb-12 max-w-[860px]

              xl:mb-24
            `}
          >
            <Title
              className={`
                mb-8

                xl:mb-14
              `}
              level="h2"
            >
              Advantages
            </Title>

            <Features />
          </section>
        </section>
      </Container>
    </main>
  )
}
