'use client'

import Button from '@/components/button'
import { ArrowCircleRightSingle } from '@univerjs/icons'
import { useParams } from 'next/navigation'
import Carousel from './carousel'

export default function Feedback() {
  const params = useParams()

  return (
    <section>
      <div
        className={`
          mb-8 flex justify-center gap-4

          xl:mb-14
        `}
      >
        <Button type="primary" href={`/${params.lang}/how-we-do`}>
          How we do?
          {' '}
          <ArrowCircleRightSingle />
        </Button>
        <Button href={`/${params.lang}/examples`}>
          All features
          {' '}
          <ArrowCircleRightSingle />
        </Button>
      </div>

      <div className="flex justify-center">
        <Carousel />
      </div>
    </section>
  )
}
