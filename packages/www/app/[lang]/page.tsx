import type { Metadata } from 'next'
import Container from '@/components/container'
import Title from '@/components/title'
import ApplicationCases from './components/application-cases'
import Features from './components/features'
import Hero from './components/hero'
import PeopleLoveUniver from './components/people-love'
import UserMarquee from './components/user-marquee'

export const metadata: Metadata = {
  title: 'Univer',
  description: 'Embedding server-driven productivity tools into Your Workflow',
}

export default function Page() {
  return (
    <main>
      <Hero />
      <UserMarquee />

      <Container
        className={`
          mb-12 grid max-w-[1152px] gap-12

          xl:mb-24 xl:gap-24
        `}
      >
        {/* core benefits & features */}
        <section
          className={`
            mx-auto mt-[70px] px-4

            xl:px-0
          `}
        >
          <Title className="mb-14" level="h2" align="center">Core Benefits & Features</Title>
          <Features />
        </section>

        {/* application scenario */}
        <section className={`
          mx-auto mt-[70px] w-full px-4

          xl:px-0
        `}
        >
          <Title className="mb-14" level="h2" align="center">Application Scenario</Title>
          <ApplicationCases />
        </section>

        {/* customer stories */}
        <section className={`
          mx-auto mt-[70px] px-4

          xl:px-0
        `}
        >
          <Title className="mb-14" level="h2" align="center">Customer Stories</Title>
        </section>

        {/* people love Univer */}
        <section className={`
          mx-auto mt-[70px] w-full px-4

          xl:px-0
        `}
        >
          <Title className="mb-14" level="h2" align="center">People Love Univer</Title>
          <PeopleLoveUniver />
        </section>
      </Container>
    </main>
  )
}
