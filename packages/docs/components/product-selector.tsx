import { clsx } from '@/utils/clsx'
import { MoreFunctionSingle } from '@univerjs/icons'
import { useRouter } from 'nextra/hooks'
import { useEffect, useState } from 'react'

export default function ProductSelector() {
  const router = useRouter()

  const [visible, setVisible] = useState(false)

  const routeMap = [{
    pathPrefix: '/guides/sheets',
    title: 'Univer Sheets',
    icon: '📊',
    color: '47, 117, 56',
  }, {
    pathPrefix: '/guides/docs',
    title: 'Univer Docs',
    icon: '📝',
    color: '16, 73, 147',
  }, {
    pathPrefix: '/guides/slides',
    title: 'Univer Slides',
    icon: '📽️',
    color: '145, 18, 18',
  }]

  const route = routeMap.find(item => router.pathname.includes(item.pathPrefix))

  useEffect(() => {
    function clickOutside() {
      setVisible(false)
    }

    document.addEventListener('click', clickOutside)
    return () => document.removeEventListener('click', clickOutside)
  }, [])

  if (!route)
    return null

  function handleToggleVisible(e: React.MouseEvent) {
    e.stopPropagation()
    setVisible(!visible)
  }

  return (
    <section className="relative -left-2 w-[calc(100%+16px)]">
      <a
        className={`
          flex w-full cursor-pointer items-center justify-between gap-2 rounded-md p-2 transition-all duration-200
          ease-in-out

          hover:bg-gray-200
        `}
        onClick={handleToggleVisible}
      >
        <span className="flex items-center gap-2">
          <span
            className={`
              flex h-8 w-8 items-center justify-center rounded-md border border-blue-300 bg-blue-100 text-blue-700
            `}
            style={{
              backgroundColor: `rgb(${route.color}, 0.15)`,
              borderColor: `rgb(${route.color}, 0.3)`,
            }}
          >
            {route.icon}
          </span>
          <span>{route.title}</span>
        </span>
        <MoreFunctionSingle className="text-gray-500" />
      </a>

      <div
        className={clsx(`
          invisible absolute top-0 z-10 grid w-full gap-2 rounded-[10px] border border-white bg-white p-2 text-sm
          opacity-0 shadow-[0_-3px_6px_0_rgba(244,245,250,0.60)_inset,0_2px_16px_-1px_rgba(17,22,40,0.07)]
          transition-all duration-200 ease-in-out
        `, {
          'visible translate-y-12 opacity-100': visible,
        })}
      >
        {routeMap.map(item => (
          <a
            key={item.pathPrefix}
            className={`
              flex cursor-pointer items-center gap-2 p-2 font-normal text-gray-500

              hover:text-gray-700
            `}
            onClick={() => router.push(`${item.pathPrefix}`)}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-md border"
              style={{
                backgroundColor: `rgb(${item.color}, 0.15)`,
                borderColor: `rgb(${item.color}, 0.3)`,
              }}
            >
              {item.icon}
            </span>
            <span>{item.title}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
