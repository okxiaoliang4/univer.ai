'use client'

import Image from 'next/image'
import backgroundLayer from './background-layer.png'
import frontLayer from './front-layer.svg'

export default function Architecture() {
  return (
    <div className="relative flex h-[1440px] items-center justify-center">
      {/* background layer */}
      <Image
        src={backgroundLayer}
        height={backgroundLayer.height}
        width={backgroundLayer.width}
        unoptimized
        alt="background layer"
        style={{
          objectPosition: 'calc(50% + 6px) calc(50% + 24px)',
        }}
        className="absolute top-0 z-0 h-[1244px] w-full object-cover"
      />
      {/* front layer */}
      <div className="absolute top-0 h-[1440px] w-[1440px]">
        <Image
          src={frontLayer}
          height={frontLayer.height}
          width={frontLayer.width}
          alt="front layer"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  )
}
