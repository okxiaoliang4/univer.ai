import { clsx } from '@/utils/clsx'

interface IProps {
  value: boolean
  onChange: (value: boolean) => void
}

export default function ToggleButton(props: IProps) {
  const { value, onChange } = props

  function handleToggle() {
    onChange(!value)
  }

  return (
    <div
      className={clsx(`
        inline-block h-5 w-9 cursor-pointer rounded-full bg-gray-200 transition-all duration-200 ease-in-out
      `, {
        'bg-primary-600': value,
      })}
      onClick={handleToggle}
    >
      <div
        className={clsx(`
          relative left-[2px] top-[2px] h-4 w-4 rounded-full bg-white transition-all duration-200 ease-in-out
        `, {
          'translate-x-full': value,
        })}
      />
    </div>
  )
}
