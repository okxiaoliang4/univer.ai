import Button from '@/components/button'

export default function Actions() {
  return (
    <div
      className={`
        flex flex-col gap-4 bg-[linear-gradient(180deg,transparent_0%,#FFFFFF_10%)] py-4

        xl:flex-row xl:gap-3 xl:bg-transparent xl:py-0
      `}
    >
      <Button>Login</Button>
      <Button type="primary">Sign up</Button>
    </div>
  )
}
