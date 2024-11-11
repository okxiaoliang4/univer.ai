import { useConfig } from 'nextra-theme-docs'

export default function Head() {
  const { title } = useConfig()

  return (
    <>
      <meta property="og:title" content={title ? `${title} | Univer` : 'Univer'} />
      <title>{title ? `${title} | Univer` : 'Univer'}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
    </>
  )
}
