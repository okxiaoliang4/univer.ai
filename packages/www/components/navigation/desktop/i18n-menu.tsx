import type { localesMap } from '@/i18n'
import { LanguageSingle, MoreDownSingle } from '@univerjs/icons'
import clsx from 'clsx'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import Dropdown from './dropdown'

interface IProps {
  className?: string

  languages: typeof localesMap
}

export default function I18nMenu(props: IProps) {
  const { className, languages } = props

  const params = useParams()
  const pathname = usePathname()
  const { lang } = params

  return (
    <div className="group flex items-center">
      <a
        className={`
          relative flex cursor-pointer items-center gap-1 px-2.5 py-2 font-medium text-gray-500 transition-colors
          duration-200 ease-in-out

          hover:text-gray-800
        `}
      >
        <LanguageSingle />
        <MoreDownSingle />
      </a>
      <Dropdown className={clsx(className, 'top-3 gap-1')}>
        {Object.keys(languages).map(key => (
          <Link
            key={key}
            className={`
              rounded-lg p-2.5 text-sm font-medium text-gray-800 transition-all duration-200 ease-in-out

              hover:bg-white hover:shadow-[0_2px_4px_0_rgba(14,17,30,0.06)]
            `}
            href={pathname.replace(lang as string, key)}
          >
            {languages[key]}
          </Link>
        ))}
      </Dropdown>
    </div>
  )
}
