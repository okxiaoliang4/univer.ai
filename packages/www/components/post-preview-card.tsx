import { ArrowrightSingle } from '@univerjs/icons'

interface IProps {
  previewUrl: any
  title: string
  description: string
  href: string
}

export default function PostPreviewCard(props: IProps) {
  const { previewUrl, title, description, href } = props

  return (
    <div>
      <img
        className="mx-auto mb-3 h-[194px] w-max-[344px] max-w-full rounded-[10px] object-cover"
        src={previewUrl}
        alt={title}
      />
      <strong className="mb-2 block font-semibold text-gray-800">{title}</strong>
      <p className="mb-2 line-clamp-3 text-sm text-gray-500">{description}</p>
      <a className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600" href={href}>
        Learn More
        <ArrowrightSingle />
      </a>
    </div>
  )
}
