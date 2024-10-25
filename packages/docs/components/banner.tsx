import { useTranslation } from '@/hooks/i18n'
import Link from 'next/link'

interface IProps {
  version: string
}

export default function Banner(props: IProps) {
  const { version } = props

  const t = useTranslation({
    'zh-CN': {
      message: ` 版本已发布。查看详情 →`,
    },
    'en-US': {
      message: ` is released. Read more →`,
    },
  })

  return (
    <Link href={`https://github.com/dream-num/univer/releases/tag/v${version}`} target="_blank">
      🎉 v
      {version}
      {' '}
      {t('message')}
    </Link>
  )
}
