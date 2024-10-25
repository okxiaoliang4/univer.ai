import type { Metadata } from 'next'
import getSotries from '@/articles/customer-stories/data'
import Article from '@/components/article'
import Container from '@/components/container'
import PageHeader from '@/components/page-header'
import { MDXRemote } from 'next-mdx-remote/rsc'

export const metadata: Metadata = {
  title: 'Univer | Customer Stories',
}

interface IProps {
  params: Promise<{
    lang: string
    slug: string
  }>
}

export default async function Page(props: IProps) {
  const { slug } = await props.params

  const stories = getSotries()
  const story = stories.find(story => story.data.slug === slug)

  return (
    <main>
      <PageHeader />

      <Container>
        {story && (
          <Article>
            <h1 className="leading-[1.25]">{story.data.title}</h1>
            <p className="text-xl text-gray-600">{story.data.description}</p>

            <MDXRemote source={story.content} />
          </Article>
        )}
      </Container>
    </main>
  )
}
