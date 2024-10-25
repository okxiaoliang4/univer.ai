import { SearchSingle16 } from '@univerjs/icons'

interface IProps {
  label?: string
  value: string
  onChange: (value: string) => void
}

export default function Slider(props: IProps) {
  const { value, onChange } = props

  return (
    <div className="flex h-full flex-1 items-center gap-2">
      <label className="text-xl">
        <SearchSingle16 />
      </label>
      <input
        className="h-full w-full bg-transparent outline-none"
        type="text"
        placeholder="Search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}
