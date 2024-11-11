import Button from '@/components/button'

export default function Actions() {
  return (
    <div
      className={`
        flex h-[var(--9,36px)] flex-col items-center justify-center gap-[var(--2,8px)] rounded-[var(--rounded-lg,8px)]
        py-4 pt-[var(--0,] pb-[var(--5,] pl-[20px)] pr-[0px)]

        [background:var(--111,linear-gradient(90deg,#5357ED_0%,#40B9FF_104.41%))]

        xl:flex-row xl:gap-3 xl:bg-none xl:py-0
      `}
    >
      <Button>Login</Button>
      <Button type="primary">Sign up</Button>
    </div>
  )
}
