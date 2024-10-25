import enUS from './en-US'
import zhCN from './zh-CN'

export const defaultLocale = 'en-US'

export const LOCALES_ENUM = {
  'en-US': 'en-US',
  'zh-CN': 'zh-CN',
}

export const localesMap = {
  [LOCALES_ENUM['en-US']]: 'English',
  [LOCALES_ENUM['zh-CN']]: '简体中文',
}

export const dictionaries = {
  [LOCALES_ENUM['en-US']]: enUS,
  [LOCALES_ENUM['zh-CN']]: zhCN,
}

export const useLocales = (locale: keyof typeof dictionaries) => dictionaries[locale]
