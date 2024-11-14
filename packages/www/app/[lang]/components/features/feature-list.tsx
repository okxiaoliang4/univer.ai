import type { ReactNode } from 'react'
import Link from 'next/link'
import { LearnMore } from '../learn-more'

export interface IFeatureListItem {
  icon: ReactNode
  title: string
  url: string
}

export interface IFeatureListProps {
  moreUrl: string
  showLinks: boolean
  items: Array<IFeatureListItem>
}

export default function FeatureList(props: IFeatureListProps) {
  const { moreUrl, items, showLinks } = props
  const leftItems = items.slice(0, Math.ceil(items.length / 2))
  const rightItems = items.slice(Math.ceil(items.length / 2))

  return (
    <div className="w-full text-white">
      <div className="mt-[36px] flex w-full">
        <div className="mr-[36px] flex-1">
          {leftItems.map(item => (
            <FeatureListItem key={item.title} item={item} showLinks={showLinks} />
          ))}
        </div>
        <div className="ml-[36px] flex-1">
          {rightItems.map(item => (
            <FeatureListItem key={item.title} item={item} showLinks={showLinks} />
          ))}
        </div>

      </div>
      <div className="text-center">
        { showLinks ? <LearnMore href={moreUrl} /> : null}
      </div>
    </div>
  )
}

function FeatureListItem(props: { item: IFeatureListItem, showLinks: boolean }) {
  const { item, showLinks } = props
  const { icon, title, url } = item

  function renderContent() {
    return (
      <>
        <span className="mr-4 size-6 shrink-0 grow-0">
          {icon}
        </span>
        <span className="size-3 flex-1">{title}</span>
        { showLinks
          ? (
              <span className="size-[22px] shrink-0 grow-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M7.23438 5L14.2344 11L7.23438 17" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )
          : null}
      </>
    )
  }

  return showLinks
    ? (
        <Link
          className="mb-[36px] flex align-top"

          href={url}
        >
          {renderContent()}
        </Link>
      )
    : <span className="mb-[36px] flex align-top">{renderContent()}</span>
}
