import { useMemo } from 'react'

interface IProps {
  value: number
  min: number
  max: number
  suffix?: string
  onChange: (value: number) => void
}

export default function Slider(props: IProps) {
  const { value, min, max, suffix, onChange } = props

  const ratio = useMemo(() => ((value - min) / (max - min)) * 100, [value, min, max])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value)
    if (value < min || value > max)
      return

    if (value === 0)
      return

    onChange(Number(e.target.value))
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="range"
        className={`
          h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200

          [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md
        `}
        style={{
          background: `linear-gradient(to right, #2563EB ${ratio}%, #E5E7EB ${ratio}%)`,
        }}
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
      />
      {suffix && (
        <label
          className="flex w-8 cursor-pointer items-center text-sm font-medium text-gray-900"
        >
          {value}
          {suffix}
        </label>
      )}
    </div>
  )
}
