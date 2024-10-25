import { useTranslation } from '@/hooks/i18n'

export default function TocTitle() {
  const t = useTranslation({
    'zh-CN': {
      content: '目录',
    },
    'en-US': {
      content: 'Contents',
    },
  })

  return t('content')
}
