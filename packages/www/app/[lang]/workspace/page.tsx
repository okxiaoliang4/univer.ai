import type { Metadata } from 'next'
import Button from '@/components/button'
import Container from '@/components/container'

import PageHeader from '@/components/page-header'
import Features from './components/features'

export const metadata: Metadata = {
  title: 'Univer | Univer Workspace',
  description: 'Univer empowers teams to manage, create, and collaborate without barriers.',
}

export default function Page() {
  return (
    <main>
      <PageHeader
        title={(
          <>
            Express ideas,
            <br />
            Organize projects,
            <br />
            Faster workflows.
          </>
        )}
        description="Univer empowers teams to manage, create, and collaborate without barriers."
      >
        <Container className={`
          relative mb-8 flex justify-center

          xl:mb-28
        `}
        >
          <Button type="primary">Enter Workspace</Button>
        </Container>
      </PageHeader>

      <Container
        className={`
          mb-12 grid max-w-[1280px] gap-12 px-4

          xl:mb-24 xl:gap-24 xl:px-0
        `}
      >
        <Features />
      </Container>
    </main>
  )
}
