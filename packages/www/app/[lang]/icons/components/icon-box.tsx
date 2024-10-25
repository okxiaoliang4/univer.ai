import { SuccessSingle } from '@univerjs/icons'
import { useEffect, useMemo, useState } from 'react'

interface IProps {
  iconKey: string
  name: string

  fontSize?: number
  color?: string
  colorChannel1?: string
}

export default function IconBox(props: IProps) {
  const { iconKey, name, fontSize = 24, color, colorChannel1 } = props
  const [copying, setCopying] = useState(false)
  const [Icons, setIcons] = useState<any>(null)

  useEffect(() => {
    import('@univerjs/icons/esm/icons').then((module) => {
      setIcons(module)
    })
  }, [])

  const Icon = useMemo(() => {
    if (!Icons)
      return null

    return (Icons as any)[name]
  }, [Icons, name])

  function handleCopy() {
    setCopying(true)
    const code = `<${name} />`
    navigator.clipboard.writeText(code)
    setTimeout(() => {
      setCopying(false)
    }, 3000)
  }
  return (
    <div className="relative">
      <div
        className={`
          mb-2 flex h-32 w-full flex-col items-center justify-center gap-5 rounded-xl border border-[#ECECEC] pt-4
          text-2xl
        `}
      >
        {Icon && <Icon style={{ color, fontSize: `${fontSize}px` }} extend={{ colorChannel1 }} />}

        <a
          className={`
            cursor-pointer rounded-lg px-5 py-1 text-xs text-gray-800 transition-all duration-200 ease-in-out

            hover:bg-white hover:shadow-[0_2px_4px_0_rgba(14,17,30,0.06)]
          `}
          onClick={handleCopy}
        >
          {copying
            ? (
                <span className="flex items-center gap-1">
                  <SuccessSingle className="text-[#409F11]" />
                  Copied
                </span>
              )
            : 'Copy'}
        </a>
      </div>
      <p className="text-center text-xs text-[#656565]">{iconKey}</p>
    </div>
  )
}
