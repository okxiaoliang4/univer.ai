import type { PanInfo } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import avatar1Img from './avatar-1.svg'
import avatar2Img from './avatar-2.svg'
import avatar3Img from './avatar-3.svg'
import CarouselCard from './carousel-card'

const userVoices = [{
  color: '#FEC5D2',
  industry: 'Fintech Service Provider',
  role: 'Project Manager',
  avatar: avatar1Img,
  content: 'Univer has rapidly improved our document automation system, completely solving the challenges we faced with complex document generation, lack of scalability, and data security issues. Univer truly is a powerful tool for boosting both efficiency and user satisfaction!',
}, {
  color: '#DAD0FB',
  industry: 'Fintech Service Provider',
  role: 'Project Manager',
  avatar: avatar2Img,
  content: 'Univer has rapidly improved our document automation system, completely solving the challenges we faced with complex document generation, lack of scalability, and data security issues. Univer truly is a powerful tool for boosting both efficiency and user satisfaction!',
}, {

  color: '#C0F1C9',
  industry: 'Fintech Service Provider',
  role: 'Project Manager',
  avatar: avatar3Img,
  content: 'Univer has rapidly improved our document automation system, completely solving the challenges we faced with complex document generation, lack of scalability, and data security issues. Univer truly is a powerful tool for boosting both efficiency and user satisfaction!',
}]

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [dragStart, setDragStart] = useState(0)

  const wrap = (index: number) => {
    if (index < 0)
      return userVoices.length - 1
    if (index >= userVoices.length)
      return 0
    return index
  }

  const getOrder = (index: number) => {
    const positions = userVoices.map((_, i) => {
      const diff = i - activeIndex
      if (diff < 0)
        return diff + userVoices.length
      return diff
    })
    return positions[index]
  }

  const handleDragStart = (_: any, info: PanInfo) => {
    setDragStart(info.point.x)
  }

  const handleDragEnd = (_: any, info: PanInfo) => {
    const dragDistance = info.point.x - dragStart
    const threshold = 100

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        setActiveIndex(wrap(activeIndex - 1))
      }
      else {
        setActiveIndex(wrap(activeIndex + 1))
      }
    }
  }

  return (
    <div className="relative h-[400px] w-[802px]">
      <div className="relative flex h-full w-full items-center justify-center">
        <AnimatePresence initial={false}>
          {userVoices.map((card, index) => {
            const order = getOrder(index)
            let position: 'left' | 'center' | 'right' = 'center'

            if (order === 1)
              position = 'right'
            if (order === userVoices.length - 1)
              position = 'left'

            return (
              <CarouselCard
                key={card.color}
                {...card}
                position={position}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              />
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
