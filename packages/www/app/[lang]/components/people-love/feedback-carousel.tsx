import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { wrap } from 'popmotion'
import { useState } from 'react'

import Avatar1 from './avatars/avatar-1.svg'

export default function FeedbackCarousel() {
  return (
    <div className="flex-1 p-9">
      <Carousel />
    </div>
  )
}

// Use code from https://codesandbox.io/p/sandbox/framer-motion-image-gallery-pqvx3?file=%2Fsrc%2FExample.tsx%3A41%2C1&from-embed

interface CarouselItem {
  avatar: string
  title: string
  description: string
}

const items: CarouselItem[] = [
  { title: 'Fintech Service Provider', description: 'Univer has rapidly improved our document automation system, completely solving the challenges we faced with complex document generation, lack of scalability, and data security issues. Univer truly is a powerful tool for boosting both efficiency and user satisfaction!', avatar: Avatar1 },
  { title: 'High-end transportation service platform', avatar: Avatar1, description: `` },
  { title: 'Investment Bank', avatar: Avatar1, description: `` },
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
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
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

function Carousel() {
  const [[page, direction], setPage] = useState([0, 0])

  const itemIndex = wrap(0, items.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <div className="relative h-[120px] w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute flex h-full w-full flex-col items-center justify-between px-12"
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
          <p className="mb-3 flex h-[24px] shrink-0 grow-0 items-center text-lg font-semibold text-white">
            <Image src={items[itemIndex].avatar} alt="user-avatar" className="mr-1" />
            {items[itemIndex].title}
          </p>
          <p className={`
            w-[474px] flex-shrink flex-grow text-center font-['Inter'] text-[14px] font-light leading-[21px]
            text-white/50
          `}
          >
            {items[itemIndex].description}
          </p>
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        className={`
          absolute left-0 top-1/2 z-10 h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-[999px]
          border border-white/10 bg-white/20
        `}
        onClick={() => paginate(-1)}
      >
        <ArrowLeft />
      </button>
      <button
        type="button"
        className={`
          absolute right-0 top-1/2 z-10 flex h-[22px] w-[22px] cursor-pointer items-center justify-center
          rounded-[999px] border border-white/10 bg-white/20
        `}
        onClick={() => paginate(1)}
      >
        <ArrowRight />
      </button>
    </div>
  )
}

function ArrowLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect width="22" height="22" rx="11" fill="white" fillOpacity="0.2" />
      <rect x="0.25" y="0.25" width="21.5" height="21.5" rx="10.75" stroke="white" strokeOpacity="0.14" strokeWidth="0.5" />
      <path d="M13 15L8.2 11L13 7" stroke="white" strokeOpacity="0.52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect width="22" height="22" rx="11" fill="white" fillOpacity="0.2" />
      <rect x="0.25" y="0.25" width="21.5" height="21.5" rx="10.75" stroke="white" strokeOpacity="0.14" strokeWidth="0.5" />
      <path d="M9.19922 7L13.9992 11L9.19922 15" stroke="white" strokeOpacity="0.52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
