interface IProps {
  children: React.ReactNode
}

export default function TitleTag(props: IProps) {
  const { children } = props

  return (
    <span>
      {children}
      <span className="ml-2 rounded-lg bg-slate-800 px-2 py-0.5 text-xs text-white">
        Pro
      </span>
    </span>
  )
}
