import { useTranslation } from '@/hooks/i18n'

export default function TocBackToTop() {
  const t = useTranslation({
    'zh-CN': {
      content: '返回顶部',
    },
    'en-US': {
      content: 'Scroll to top',
    },
  })

  return t('content')
}
