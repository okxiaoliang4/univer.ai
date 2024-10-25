import { clsx } from '@/utils/clsx'

interface IProps {
  children: React.ReactNode
}

export default function Article(props: IProps) {
  const { children } = props

  return (
    <section
      className={`
        mx-auto mb-12 max-w-[672px] px-4

        xl:px-0
      `}
    >
      <article
        className={clsx(`
          text-gray-500

          [&_a]:text-indigo-700 [&_a]:underline

          [&_h1]:mb-6 [&_h1]:text-[52px] [&_h1]:font-bold [&_h1]:text-gray-800

          [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:text-gray-800

          [&_h3]:text-2xl [&_h3]:text-gray-800

          [&_h4]:text-xl [&_h4]:text-gray-800

          [&_ol]:grid [&_ol]:list-inside [&_ol]:list-decimal [&_ol]:gap-4

          [&_strong]:text-gray-800

          [&_table_td]:p-4 [&_table_td]:gray-800 [&_table_td]:text-sm

          [&_table_th]:bg-gray-50 [&_table_th]:p-4 [&_table_th]:text-left [&_table_th]:text-xs
          [&_table_th]:font-semibold [&_table_th]:text-gray-500

          [&_table]:mt-8 [&_table]:w-full

          [&_ul]:grid [&_ul]:list-inside [&_ul]:list-disc [&_ul]:gap-4
        `, 'whitespace-pre-wrap')}
      >
        {children}
      </article>
    </section>
  )
}
