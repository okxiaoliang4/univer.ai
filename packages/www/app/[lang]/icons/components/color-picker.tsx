interface IProps {
  label?: string
  value: string
  onChange: (value: string) => void
}

export default function ColorPicker(props: IProps) {
  const { label, value, onChange } = props

  return (
    <div className="flex items-center gap-4 text-sm">
      {label && <label className="flex items-center">{label}</label>}
      <div
        className="relative h-6 w-6 overflow-hidden rounded-lg"
        style={{ backgroundColor: value }}
      >
        <input
          className="absolute bottom-0 block h-20 w-20 cursor-pointer bg-transparent opacity-0"
          type="color"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}
