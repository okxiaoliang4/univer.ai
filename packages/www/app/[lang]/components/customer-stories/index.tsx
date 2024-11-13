'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from 'popmotion'
import { useState } from 'react'

import { LearnMore } from '../learn-more'
import Image1 from './imgs/1.jpg'

export default function CustomStories() {
  return (
    <div
      className="relative flex h-[380px] w-full overflow-hidden rounded-2xl object-fill pr-[54px]"
      style={{
        background: `linear-gradient(270deg,rgba(0, 16, 34, 0.96) 36.71%,rgba(6, 27, 51, 0) 100%),
        url(${Image1.src}) lightgray -97.404px -399.228px / 107.507% 245.096% no-repeat`,
      }}
    >
      <div
        role="ambient"
        aria-hidden
        className={`
          absolute left-[796px] top-[-256px] h-[491px] w-[1199px] rounded-full bg-gradient-to-r from-[#0090ff]
          to-[#0077ff] blur-[300px]
        `}
      />

      {/* empty placeholder */}
      <div className="flex-1" />
      <div className="relative w-[376px] grow-0 overflow-hidden px-4 z-1">
        <Carousel />
      </div>
    </div>
  )
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 400 : -400,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 400 : -400,
      opacity: 0,
    }
  },
}

interface CarouselItem {
  src: string
  title: string
  description: string
  url: string
}

const items: CarouselItem[] = [
  { title: 'Online Rental Company', src: '', description: `The BI system couldn't meet analysis needs; data security and collaboration were limited. By embedding Univer, they achieved automated reporting, online analysis, enhanced data security, and improved collaboration efficiency, resolving the issues.`, url: '' },
  { title: 'High-end transportation service platform', src: '', description: `The platform faced challenges with inefficient data entry, difficulty in data validation, and collaboration issues due to the frequent changes in passenger lists. By integrating Univer, the client enabled batch data entry, server-side data processing, and multi-user collaborative editing, which improved entry efficiency, data accuracy, and team collaboration, significantly reducing order processing time.
`, url: '' },
  { title: 'Investment Bank', src: '', description: `The client's system was struggling with poor user experience, low editing performance, difficulty in meeting personalized requirements, and inefficient collaboration. By embedding Univer, the client achieved fast, Excel-like operations, efficient handling of millions of rows of data, extensive plugin expansion options, and real-time multi-user collaboration. This enhanced analysts' productivity, improved data security, and fully optimized system performance.
`, url: '' },
]

// Use code from https://codesandbox.io/p/sandbox/framer-motion-image-gallery-pqvx3?file=%2Fsrc%2FExample.tsx%3A41%2C1&from-embed

function Carousel() {
  const [[page, direction], setPage] = useState([0, 0])

  const itemIndex = wrap(0, items.length, page)

  return (
    <div className="mt-[74px] overflow-hidden">
      <div className="mb-7 flex">
        {items.map((item, index) => {
          return (
            <div
              data-state={index === itemIndex ? 'active' : 'inactive'}
              className={`
                mr-2 h-1 w-9 bg-[rgba(255,255,255,0.2)] from-[#40ffd8] via-[#64bbff] to-[#40ffd9]] cursor-pointer

                data-[state=active]:bg-gradient-to-r
              `}
              onClick={() => setPage([index, index - page])}
              key={item.title}
            >
            </div>
          )
        })}
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute w-full"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <h4 className="mb-4 text-[18px] font-semibold text-white">
            {items[itemIndex].title}
          </h4>
          <p className="mb-3 font-['Inter'] text-sm font-light leading-[21px] text-white/50">
            {items[itemIndex].description}
          </p>

          <LearnMore href={items[itemIndex].src} />
        </motion.div>
      </AnimatePresence>

    </div>
  )
}
