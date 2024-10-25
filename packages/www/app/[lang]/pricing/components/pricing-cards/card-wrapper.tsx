export default function CardWrapper(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <section
      className={`
        flex h-full flex-col rounded-3xl bg-[rgba(255,255,255,0.9)] px-7 py-6 text-sm text-gray-800
        shadow-[0_4px_10px_-1px_rgba(14,17,30,0.10)]
      `}
    >
      {children}
    </section>
  )
}
