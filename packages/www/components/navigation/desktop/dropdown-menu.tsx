import type { INavigationWithChildren } from '@/data/navigation'
import { clsx } from '@/utils/clsx'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Dropdown from './dropdown'

interface IProps {
  className?: string

  menu: INavigationWithChildren['children']
}

export default function DropdownMenu(props: IProps) {
  const { className, menu } = props

  const params = useParams<{ lang: string }>()
  const { lang } = params

  return (
    <Dropdown className={clsx(className, 'min-w-[412px]')}>
      {menu?.map(item => (
        <ul key={item.title} className="grid gap-4">
          <li className="px-3 text-base font-normal text-gray-500">{item.title}</li>
          <li>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
              {item.children?.map(child => (
                <li key={child.title}>
                  <Link
                    className={`
                      flex h-10 items-center gap-2 rounded-lg px-2.5 font-medium text-gray-800 transition-all
                      duration-200 ease-in-out

                      hover:bg-white hover:shadow-[0_2px_4px_0_rgba(14,17,30,0.06)]
                    `}
                    href={typeof child.href === 'function' ? child.href(lang) : child.href}
                  >
                    <span className="text-lg">
                      {child.icon}
                    </span>
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </Dropdown>
  )
}
