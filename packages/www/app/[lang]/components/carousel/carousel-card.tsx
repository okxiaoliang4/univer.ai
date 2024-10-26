import type { PanInfo } from 'framer-motion'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { StarFull } from '@univerjs/icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Quotes from './quotes'

interface CarouselCardProps {
  content: string
  avatar: string | StaticImport
  role: string
  industry: string
  color: string
  position: 'left' | 'center' | 'right'
  onDragStart?: (_: any, info: PanInfo) => void
  onDragEnd?: (_: any, info: PanInfo) => void
}

const cardVariants = {
  center: { x: 0, scale: 1, zIndex: 3, opacity: 1 },
  left: { x: '-25%', scale: 0.8, zIndex: 1, opacity: 0.7 },
  right: { x: '25%', scale: 0.8, zIndex: 1, opacity: 0.7 },
}

export default function CarouselCard({
  content,
  avatar,
  role,
  industry,
  color,
  position,
  onDragStart,
  onDragEnd,
}: CarouselCardProps) {
  const isCenter = position === 'center'

  return (
    <motion.div
      className={`
        absolute h-[400px] w-[648px] rounded-xl border-t-8 bg-white p-14 shadow-[0_20px_40px_-12px_rgba(14,17,30,0.20)]
      `}
      drag={isCenter ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={isCenter ? onDragStart : undefined}
      onDragEnd={isCenter ? onDragEnd : undefined}
      variants={cardVariants}
      initial={position}
      animate={position}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      style={{
        transformOrigin: 'center',
        cursor: isCenter ? 'grab' : 'default',
        borderColor: color,
      }}
      whileHover={isCenter ? { scale: 1.02 } : undefined}
      whileTap={isCenter ? { scale: 0.98, cursor: 'grabbing' } : undefined}
    >
      <div>
        <div className="mb-3 flex gap-3">
          {Array.from({ length: 5 }).map((_, index) =>
            (
              <StarFull key={index} className="text-[32px] text-yellow-300" />
            ))}
        </div>

        <p className="mb-4 text-lg text-gray-800">
          {content}
        </p>

        <footer className="flex items-center justify-between">
          <div className="flex gap-3">
            <Image src={avatar} alt={role} className="h-12 w-12 rounded-full" />
            <div>
              <p className="font-medium text-gray-800">{role}</p>
              <p className="text-sm text-gray-700">{industry}</p>
            </div>
          </div>

          <Quotes color={color} />
        </footer>
      </div>
    </motion.div>
  )
}
