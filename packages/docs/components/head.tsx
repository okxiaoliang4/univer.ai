import { useConfig } from 'nextra-theme-docs'

export default function Head() {
  const { title } = useConfig()

  return (
    <>
      <meta property="og:title" content={title ? `${title} | Univer` : 'Univer'} />
      <title>{title ? `${title} | Univer` : 'Univer'}</title>
    </>
  )
}
