import { useRouter } from 'nextra/hooks'

type LangType = 'en-US' | 'zh-CN'

export function useTranslation<T extends Record<LangType, Record<string, any>>>(locales: T) {
  const { locale } = useRouter()

  const t = <K extends keyof T[LangType]>(key: K): T[LangType][K] => {
    const currentLocale = locale as LangType
    const currentLocaleData = locales[currentLocale]
    return currentLocaleData[key as keyof typeof currentLocaleData]
  }

  return t
}
