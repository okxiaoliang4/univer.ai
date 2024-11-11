import type { Metadata } from 'next'
import getSotries from '@/articles/customer-stories/data'
import Container from '@/components/container'
import Title from '@/components/title'
import CustomerStories from './components/customer-stories'
import Features from './components/features'
import Feedback from './components/feedback'
import Hero from './components/hero'
import UserMarquee from './components/user-marquee'

export const metadata: Metadata = {
  title: 'Univer',
  description: 'Embedding server-driven productivity tools into Your Workflow',
}

export default function Page() {
  const stories = getSotries()
  const recentStories = stories.slice(0, 3)

  return (
    <main>
      <Hero />
      <UserMarquee />

      <Container
        className={`
          mb-12 grid gap-12

          xl:mb-24 xl:gap-24
        `}
      >
        {/* core benefits & features */}
        <section
          className={`
            mx-auto mt-[70px] max-w-[1152px] px-4

            xl:px-0
          `}
        >
          <Title className="mb-14" level="h2">Core Benefits & Features</Title>
          <Features />
        </section>

        {/* application scenario */}
        <section className={`
          mx-auto mt-[70px] max-w-[1152px] px-4

          xl:px-0
        `}
        >
          <Title className="mb-14" level="h2">Application Scenario</Title>

          {/* Customer Stories */}
          <CustomerStories stories={recentStories} />
        </section>

        {/* customer stories */}
        <section className={`
          mx-auto mt-[70px] max-w-[1152px] px-4

          xl:px-0
        `}
        >
          <Title className="mb-14" level="h2">Customer Stories</Title>

          <Feedback />
        </section>

        {/* people love Univer */}
        <section className={`
          mx-auto mt-[70px] max-w-[1152px] px-4

          xl:px-0
        `}
        >
          <Title className="mb-14" level="h2">People Love Univer</Title>

          {/* Customer Stories */}
          <CustomerStories stories={recentStories} />
        </section>

      </Container>
    </main>
  )
}
