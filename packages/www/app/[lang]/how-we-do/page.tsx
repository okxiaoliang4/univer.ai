import type { Metadata } from 'next'

import Container from '@/components/container'
import LabelButton from '@/components/label-button'
import Title from '@/components/title'
import Features from '../components/features'
import Architecture from './components/architecture'

export const metadata: Metadata = {
  title: 'Univer | How Univer Works',
  description: 'Full-Stack Isomorphic Framework for Productivity',
}

export default function Page() {
  return (
    <main>
      {/* <div
        className="absolute inset-0 text-center"
      >
        <div className="text-5xl font-semibold leading-10 text-white">How Univer Works</div>
        <div className="w-96 text-center text-base font-light leading-normal text-white/50">Univer: A full-stack framework for creating and editing spreadsheets, documents, and slides on both web and server.</div>
      </div> */}
      <div className="absolute inset-0">

      </div>

      {/* <PageHeader
        title={(
          <>
            How We Do
            {' '}
            <span className="text-black">🧑‍💻</span>
          </>
        )}
      /> */}

      <Architecture />

      <Container className={`
        relative grid gap-12 px-4

        xl:gap-24 xl:px-0
      `}
      >

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
