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
            relative mx-auto w-full px-4

            xl:w-auto
          `}
        >
          {/* spotlight */}
          <div className={`
            absolute left-[50%] top-[-330px] z-[-1] h-[660px] w-[660px] shrink-0 translate-x-[-50%] rounded-[330px]
            blur-[200px]

            [background:linear-gradient(90deg,#005EB5_0%,#7200A6_104.41%)]
          `}
          >
          </div>
          <div className={`
            absolute left-[-180px] top-[50%] z-[-1] h-[720px] w-[360px] shrink-0 translate-y-[-50%] rounded-[720px]
            blur-[150px]

            [background:linear-gradient(334deg,rgba(123,254,223,0.5)_3.1%,rgba(42,32,165,0.5)_39.47%,rgba(42,32,165,0)_74.42%)]
          `}
          >
          </div>

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
