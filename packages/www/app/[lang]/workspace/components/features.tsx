'use client'

import { clsx } from '@/utils/clsx'
import { useEffect } from 'react'

const features = [{
  title: 'The End of Fragmented File Sharing',
  desc: 'Say goodbye to the endless cycle of opening, editing, and sharing multiple files in different formats. Univer allows you to create or consolidate everything from data analysis to comprehensive reports into one Univer file, simplifying the way you share deliverables. No more juggling between attachments or navigating through zipped folders.',
  preview: '/assets/workspace/feature-1.mp4',
}, {
  title: 'Powerful Data Processing',
  desc: 'Univer doesn\'t stop at merging documents, it brings cutting-edge data processing and automation across all its pages. We\'ve embedded over 500 Excel-syntax formulas within doc and slide, you can effortlessly reference and calculate data directly from sheet.',
  preview: '/assets/workspace/feature-2.mp4',
}, {
  title: 'A User Experience Unmatched',
  desc: 'Ever needed to get a chart from a spreadsheet into a slide? Now it\'s as easy as dragging and dropping. No more copying and pasting, just pick it up and place it as you wish.',
  preview: '/assets/workspace/feature-3.mp4',
}, {
  title: 'AI-Driven Automation',
  desc: 'Univer\'s AI-powered Uniscript opens new horizons for workflow automation. From generating tailored report templates to integrating specific data sources, Uniscript transforms tedious, repetitive tasks into automated processes. ',
  preview: '/assets/workspace/feature-4.mp4',
}, {
  title: 'Streamlined Collaboration',
  desc: 'Fast-track your iterations with built-in chat and commenting. Collaborate seamlessly from anywhere, at any time.',
  preview: '/assets/workspace/feature-5.mp4',
}]

export default function Features() {
  useEffect(() => {
    const $chapter = document.querySelectorAll('.chapter')

    const observerVideo = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const $video = entry.target.querySelector('video')
          if ($video) {
            $video.play()
          }
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.5,
    })

    $chapter.forEach((chapter) => {
      observerVideo.observe(chapter)
    })
  }, [])

  return (
    <>
      {features.map((item, index) => (
        <div
          key={item.title}
          className={clsx('chapter', `
            gap-[92px]

            xl:flex
          `, {
            'flex-row-reverse': index % 2 === 1,
          })}
        >
          <div
            className={`
              relative mb-6 h-0 w-full flex-shrink-0 overflow-hidden rounded-[20px] pb-[56.25%]
              shadow-[0px_4px_20px_0px_rgba(15,23,42,0.10)]

              xl:mb-0 xl:h-[442px] xl:w-[702px] xl:py-0
            `}
          >
            <video
              className="absolute left-0 top-0 block h-full w-full object-cover"
              style={{
                WebkitBorderRadius: '20px',
              }}
              controls={false}
              loop
              muted
              src={item.preview}
            />
          </div>

          <div className="flex flex-col justify-center">
            <div
              className={`
                mb-6 hidden h-12 w-12 items-center justify-center rounded-full
                bg-[linear-gradient(90deg,#5357ED_0%,#40B9FF_104.41%)] text-2xl font-medium text-white
                shadow-[0px_4px_12px_0px_rgba(0,102,255,0.16)]

                xl:flex
              `}
            >
              {index + 1}
            </div>

            <h2 className="mb-4 text-2xl font-semibold">{item.title}</h2>
            <p className="leading-7">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}
