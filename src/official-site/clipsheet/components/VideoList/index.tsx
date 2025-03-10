import clsx from 'clsx'
import { VideoPlayer } from '../VideoPlayer'

export interface IVideo {
  title: string | JSX.Element
  videoSrc: string
}

export function VideoList({ videos, className }: { videos: IVideo[], className?: string }) {
  return (
    <div className={clsx(`
      relative mx-auto

      xl:max-w-[1200px]
    `, className)}
    >
      <div
        className={`
          grid gap-[32px]

          xl:grid-cols-3 xl:gap-[56px]
        `}
      >
        {videos.map((video, index) => (
          <div
            key={index + video.videoSrc}
            className="inline-flex flex-col items-start justify-start gap-2"
          >
            <div className={`
              relative w-full

              xl:w-[344px]
            `}
            >
              <VideoPlayer enableMask videoClassName="rounded-2xl" src={video.videoSrc} title={video.videoSrc} />
            </div>
            <h3 className="text-center text-lg font-medium capitalize leading-7 text-slate-900">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
