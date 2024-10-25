interface IProps {
  version: string
}

export default function VersionBadge(props: IProps) {
  const { version } = props

  return (
    <span className="rounded-sm bg-slate-900 px-2.5 py-0.5 text-white">
      {version}
    </span>
  )
}
