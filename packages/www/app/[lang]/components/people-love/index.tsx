'use client'

import Button from '@/components/button'
import { ArrowCircleRightSingle } from '@univerjs/icons'
import Image from 'next/image'
import FeedbackCarousel from './feedback-carousel'
import num1Img from './num1.svg'
import num2Img from './num2.svg'
import Star from './star'

export default function PeopleLoveUniver() {
  return (
    <div aria-label="coa">
      <div className="mt-[52px] flex w-full justify-center gap-4">
        <Button type="primary" href="/quick-guide" className="h-[50px] text-white">
          How Univer Works?
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

      <div className="mt-[52px] flex h-[266px]">
        <div className={`
          relative mr-6 flex-1 overflow-hidden rounded-2xl bg-[rgba(38, 38, 38, 0.30)] box-border flex flex-col border
          border-[#444444]/20 bg-[#252525]/30
        `}
        >
          <div
            role="ambient"
            aria-hidden
            className={`
              absolute left-[-745px] top-[-329px] z-[-1] h-[491px] w-[1199px] rounded-full bg-gradient-to-r
              from-[#0090ff] to-[#0077ff] blur-[300px]
            `}
          />

          <div className="m-9 mb-0 flex flex-shrink-0 flex-grow-0 items-center justify-between">
            <div className="font-['Inter'] text-[28px] font-semibold text-white/30">User evaluation</div>
            <div className="flex">
              {Array.from({ length: 5 }).fill(0).map((_, index) => (<Star className="ml-3" key={`${index}`} />))}
            </div>
          </div>

          <FeedbackCarousel />
        </div>

        {/* badges */}
        <div className="box-border flex flex-1 flex-col">
          <div className={`
            relative inline-flex h-[122px] flex-row items-start justify-start overflow-hidden rounded-2xl border
            border-[#444444]/20 bg-[#252525]/30 px-9 pt-9
          `}
          >
            <div
              role="ambient"
              aria-hidden
              className={`
                absolute left-[158px] top-[81px] h-[323px] w-[323px] rounded-full bg-gradient-to-r from-[#ffdc69]
                to-[#ffbb57] blur-[200px]
              `}
            />

            <Image src={num1Img} alt="num1" className="mr-7 h-[60px] w-[158px]" />
            <div className="inline-flex h-[59px] flex-col items-start justify-start gap-3">
              <div className="w-[168px] font-['Inter'] text-sm font-light text-white/50">Github Trending</div>
              <div className="inline-flex items-center justify-start gap-2.5 self-stretch">
                <div className="font-['Inter'] text-xl font-semibold leading-[30px] text-white">#1 Repository Of The Day</div>
                <div className="relative h-5 w-5">
                  <div className="absolute left-0 top-0 h-5 w-5">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`
            relative mt-6 inline-flex h-[121px] flex-row items-start justify-start overflow-hidden rounded-2xl border
            border-[#444444]/20 bg-[#252525]/30 p-9
          `}
          >
            <div
              role="ambient"
              aria-hidden
              className={`
                absolute left-[158px] top-[81px] flex h-[323px] w-[323px] flex-row rounded-full bg-gradient-to-r
                from-[#c6c6c6] to-[#e2e2e2] blur-[200px]
              `}
            />

            <Image src={num2Img} alt="num2" className="mr-7 h-[60px] w-[158px]" />
            <div className="inline-flex h-[59px] flex-col items-start justify-start gap-3">
              <div className="w-[168px] font-['Inter'] text-sm font-light text-white/50">Github Stargazers</div>
              <div className="inline-flex items-center justify-start gap-2.5 self-stretch">
                <div className="font-['Inter'] text-xl font-semibold leading-[30px] text-white">7,000 +</div>
                <div className="relative h-5 w-5">
                  <div className="absolute left-0 top-0 h-5 w-5">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
