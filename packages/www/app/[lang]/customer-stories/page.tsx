import type { LOCALES_ENUM } from '@/i18n'
import type { Metadata } from 'next'
import getSotries from '@/articles/customer-stories/data'
import Container from '@/components/container'
import PageHeader from '@/components/page-header'
import PostPreviewCard from '@/components/post-preview-card'

export const metadata: Metadata = {
  title: 'Univer | Customer Stories',
}

interface IProps {
  params: Promise<{
    lang: keyof typeof LOCALES_ENUM
  }>
}

export default async function Page(props: IProps) {
  const { lang } = await props.params
  const stories = getSotries()

  return (
    <main>
      <PageHeader
        title={(
          <>
            Customer Stories
            {' '}
            <span className="text-black">🤝</span>
          </>
        )}
        description="A maximum of two lines of introduction about the customer case."
      />

      <Container
        className={`
          grid gap-8

          xl:gap-12
        `}
      >
        {/* Articles */}
        <ul
          className={`
            mx-auto mb-8 grid max-w-[1096px] grid-cols-1 gap-x-8 gap-y-14 px-4

            xl:grid-cols-3 xl:px-0
          `}
        >
          {stories.map(story => (
            <li key={story.data.slug}>
              <PostPreviewCard
                previewUrl={story.data.cover}
                title={story.data.title}
                description={story.data.description}
                href={`/${lang}/customer-stories/${story.data.slug}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  )
}
