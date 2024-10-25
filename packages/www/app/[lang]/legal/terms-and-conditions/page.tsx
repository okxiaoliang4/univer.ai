import type { Metadata } from 'next'
import Article from '@/components/article'
import Container from '@/components/container'
import PageHeader from '@/components/page-header'
import Content from './components/content'

export const metadata: Metadata = {
  title: 'Univer | Terms and Conditions',
}

export default function Page() {
  return (
    <main>
      <PageHeader />

      <Container>
        <Article>
          <Content />
        </Article>
      </Container>
    </main>
  )
}
