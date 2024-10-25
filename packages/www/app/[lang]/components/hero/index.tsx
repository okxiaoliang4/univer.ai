'use client'

import BlurFade from '@/components/blur-fade'
import Button from '@/components/button'
import Container from '@/components/container'
import Title from '@/components/title'
import { ArrowCircleRightSingle, RoundnessSingle } from '@univerjs/icons'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import backgroundImg from './background.svg'
import previewSheetImg from './preview-sheet.svg'

export default function Hero() {
  const params = useParams()

  return (
    <section
      className={`
        mb-12 px-4 pt-4

        xl:mb-24 xl:px-6 xl:pt-6
      `}
    >
      <section
        className={`
          relative overflow-hidden rounded-[20px] border-[3px] border-[rgba(255,255,255,0.50)] bg-[#F4F6FB]
          shadow-[0_0_0_1px_#DEE2EE]
        `}
      >
        <Image
          className="absolute left-1/2 h-full w-full max-w-none -translate-x-1/2 object-cover"
          src={backgroundImg}
          width={backgroundImg.width}
          alt="hero background"
        />

        <Container>
          <section
            className="relative mt-32"
          >
            <header className="mb-10">
              <Title
                className="mb-6 max-w-[1040px]"
                level="h1"
                description={(
                  <span className="inline-flex items-center gap-2">
                    Integrate Anywhere
                    <RoundnessSingle className="h-1.5 w-1.5" />
                    Customize Everything
                    <RoundnessSingle className="h-1.5 w-1.5" />
                    Unrivaled Performance
                  </span>
                )}
              >
                Embedding server-driven productivity tools into Your Workflow
              </Title>

              <div className="flex justify-center gap-4">
                <Button type="primary" href={`/${params.lang}/quick-guide`}>
                  Get Univer for free
                  {' '}
                  <ArrowCircleRightSingle />
                </Button>
                <Button>
                  All features
                  {' '}
                  <ArrowCircleRightSingle />
                </Button>
              </div>
            </header>

            <BlurFade className="[perspective:800px]">
              <Image
                className={`
                  mx-auto origin-top

                  [transform:rotateX(25deg)_scale(0.92)]
                `}
                src={previewSheetImg}
                width={previewSheetImg.width}
                alt="Univer Sheet"
              />
            </BlurFade>
          </section>
        </Container>
      </section>
    </section>
  )
}
