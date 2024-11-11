import type { Metadata } from 'next'
import Container from '@/components/container'
import Title from '@/components/title'
import CompareTable from './components/compare-table'
import Header from './components/header'

export const metadata: Metadata = {
  title: 'Univer | Pricing',
}

export default function Page() {
  return (
    <main>
      <Header />

      <Container
        className={`
          mb-12 grid gap-12

          xl:mb-24 xl:gap-24
        `}
      >
        {/* Compare plans */}
        <section
          className={`
            mx-auto w-full px-4

            xl:w-auto
          `}
        >
          <Title
            className={`
              mb-6

              [&_h2]:text-left [&_h2]:xl:text-center

              xl:mb-14
            `}
            level="h2"
          >
            Compare plans
          </Title>

          <CompareTable />
        </section>
      </Container>
    </main>
  )
}
