import type { Metadata } from 'next'
import getSotries from '@/articles/customer-stories/data'
import Container from '@/components/container'
import LabelButton from '@/components/label-button'

import Title from '@/components/title'
import CommonUse from './components/common-use'
import CustomerStories from './components/customer-stories'
import Features from './components/features'
import Hero from './components/hero'

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

      <Container
        className={`
          mb-12 grid gap-12

          xl:mb-24 xl:gap-24
        `}
      >
        {/* Introduction */}
        <section
          className={`
            mx-auto max-w-[1152px] px-4

            xl:px-0
          `}
        >
          <p className="text-primary mb-12 text-center text-2xl font-bold">
            Univer empowers developers to generate server-side spreadsheets, documents, and slides, seamlessly embedding and displaying them within any web application.
          </p>

          <Features />

          <p className={`
            text-lg text-gray-500

            [&>em]:font-semibold [&>em]:not-italic [&>em]:text-gray-800
          `}
          >
            Univer enables server-side generation of a wide array of reports and complex data templates—including financial statements,
            {' '}
            <em>engineering documents</em>
            ,
            {' '}
            <em>order forms</em>
            ,
            {' '}
            <em>contracts</em>
            ,
            {' '}
            <em>presentations</em>
            , and more. It has been successfully integrated into systems such as
            {' '}
            <em>ERP/CRM</em>
            ,
            {' '}
            <em>IM</em>
            ,
            {' '}
            <em>Email</em>
            ,
            {' '}
            <em>Notion-like editors</em>
            ,
            {' '}
            <em>no-code/low-code platforms</em>
            , BI, wikis, and others. Univer meets enterprise needs with
            {' '}
            <em>data collection/submission</em>
            ,
            {' '}
            <em>data analytics</em>
            , the creation of complex reports, data visualization, collaborative workflows, knowledge sharing, historical data queries, document access control, and more.
          </p>
        </section>

        {/* Common Uses */}
        <section>
          <LabelButton
            className="relative left-1/2 mb-4 -translate-x-1/2"
            emoji="🏡"
          >
            Common Uses
          </LabelButton>

          <section
            className={`
              mx-auto mb-12 max-w-[860px]

              xl:mb-24
            `}
          >
            <Title className="mb-14" level="h2">One user has multiple scenarios</Title>

            <CommonUse />
          </section>

          {/* Customer Stories */}
          <CustomerStories stories={recentStories} />
        </section>

        {/* They already love our products */}
        <section>
          <LabelButton
            className="relative left-1/2 mb-4 -translate-x-1/2"
            emoji="😍"
          >
            They already love our products
          </LabelButton>

          <section className="mx-auto max-w-[860px]">
            <Title className="mb-14" level="h2">See what our users say about us</Title>

            <div>123123</div>
          </section>
        </section>
      </Container>
    </main>
  )
}
