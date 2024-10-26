interface IProps {
  version: string
}

export default function VersionBadge(props: IProps) {
  const { version } = props

  return (
    <span className="rounded-lg bg-slate-700 px-2 py-1 text-xs text-white">
      {version}
    </span>
  )
}
