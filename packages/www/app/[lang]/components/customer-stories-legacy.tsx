'use client'

import type { IArticle } from '@/articles/customer-stories/data'
import LabelButton from '@/components/label-button'
import PostPreviewCard from '@/components/post-preview-card'
import { ArrowrightSingle } from '@univerjs/icons'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface IProps {
  stories: IArticle[]
}

export default function CustomerStories(props: IProps) {
  const { stories } = props

  const params = useParams()

  return (
    <section
      className={`
        mx-auto max-w-[1096px] px-4

        xl:px-0
      `}
    >
      <header className={`
        mb-12 flex flex-col justify-between

        xl:flex-row
      `}
      >
        <div className="grid gap-4">
          <LabelButton
            className={`
              mx-auto

              xl:ml-0
            `}
            emoji="😍"
          >
            Customer Stories
          </LabelButton>

          <h3
            className={`
              text-primary text-center text-3xl font-semibold leading-[1.25]

              xl:text-left
            `}
          >
            Customer Stories
          </h3>
          <p
            className={`
              mb-4 max-w-[430px] text-center text-lg/[1.5] text-gray-600

              xl:mb-0 xl:text-left
            `}
          >
            A maximum of two lines of introduction about the customer case.
          </p>
        </div>
        <Link
          className={`
            inline-flex items-center gap-2 self-center text-sm font-semibold text-green-400

            xl:self-end
          `}
          href={`/${params.lang}/customer-stories`}
        >
          See all stories
          <ArrowrightSingle />
        </Link>
      </header>

      <ul
        className={`
          grid grid-cols-1 gap-8

          xl:grid-cols-3
        `}
      >
        {stories.map(story => (
          <li key={story.data.slug}>
            <PostPreviewCard
              previewUrl={story.data.cover}
              title={story.data.title}
              description={story.data.description}
              href={`/${params.lang}/customer-stories/${story.data.slug}`}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
