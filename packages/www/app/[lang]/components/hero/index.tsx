'use client'

import BlurFade from '@/components/blur-fade'
import Button from '@/components/button'
import Container from '@/components/container'
import Title from '@/components/title'
import { ArrowCircleRightSingle } from '@univerjs/icons'
import { useParams } from 'next/navigation'

export default function Hero() {
  const params = useParams()

  return (
    <section
      className={`
        relative mb-12 px-4 pt-16

        xl:mb-12 xl:px-16 xl:pt-[150px]
      `}
    >
      <Container className="flex flex-row">
        <header className="z-10 mb-10">
          <Title
            className="mb-6 w-[570px] font-semibold leading-[125%] tracking-[-0.46px]"
            level="h1"
            description={(
              <span className={`
                w-[570px] text-lg font-light leading-[150%] text-[rgba(255,255,255,0.50)]

                [font-family:Inter]
              `}
              >
                Univer is a full-stack framework for creating and editing spreadsheets, documents, and slides on both web and server.
              </span>
            )}
          >
            Embedding server-driven productivity tools into Your Workflow
          </Title>

          <div className="mt-12 flex gap-4">
            <Button type="primary" href={`/${params.lang}/quick-guide`} className="h-[50px] text-white">
              Get Univer for free
              {' '}
              <ArrowCircleRightSingle />
            </Button>
            <Button className={`
              flex h-[50px] items-center justify-center rounded-[var(--rounded-lg,8px)] px-5 text-base font-medium
              leading-[150%] text-gray-800

              [background:var(--white,#FFF)]
            `}
            >
              All Features
            </Button>
          </div>
        </header>

        <div className="relative ml-[51px]">
          <div className={`
            absolute left-[117px] top-[-136px] h-[577px] w-[577px] shrink-0 rounded-[577px] blur-[200px]

            [background:linear-gradient(90deg,#005EB5_0%,#7200A6_104.41%)]
          `}
          >
          </div>
          <div className={`
            absolute left-[-202px] top-[225px] h-[385px] w-[386px] shrink-0 rounded-[386px] blur-[200px]

            [background:linear-gradient(90deg,rgba(0,157,174,0.50)_0%,rgba(0,170,116,0.50)_104.41%)]
          `}
          >
          </div>
          <BlurFade className="[perspective:800px]">
            <div className={`
              flex h-[420px] w-[672px] shrink-0 flex-col items-center justify-center gap-[6.533px] rounded-[14px]
              border-[14px] border-solid border-[rgba(255,255,255,0.05)] px-[5.6px] pb-[5.6px] pt-[6.533px]
              shadow-[0px_0px_50px_0px_rgba(69,236,255,0.30)]; backdrop-blur-[24[x]]

              [background:rgba(255,255,255,0.90)]
            `}
            >
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  )
}
