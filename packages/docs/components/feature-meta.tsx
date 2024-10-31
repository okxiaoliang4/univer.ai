import { useRouter } from 'nextra/hooks'

export default function FeatureMeta(props: { texts: [string, string, string, string, string] }) {
  const router = useRouter()

  const locale = router.locale
  const headerText = getMetaHeaderText(locale)

  const { texts } = props
  const [hasFacadeAPI, hasPaidPlan, needUniverser, nodeJS, preset] = texts

  return (
    <table className={`
      _not-prose _block _overflow-x-auto nextra-scrollbar _p-0

      [&:not(:first-child)]:_mt-6
    `}
    >
      <thead>
        <tr className={`
          _m-0 _border-t _border-gray-300 _p-0 text-center

          dark:_border-gray-600

          even:_bg-gray-100 even:dark:_bg-gray-600/20
        `}
        >
          <th className={`
            _m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold

            dark:_border-gray-600
          `}
          >
            {headerText.facadeAPI}
          </th>
          <th className={`
            _m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold

            dark:_border-gray-600
          `}
          >
            {headerText.hasPaidPlan}
          </th>
          <th className={`
            _m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold

            dark:_border-gray-600
          `}
          >
            {headerText.needUniverser}
          </th>
          <th className={`
            _m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold

            dark:_border-gray-600
          `}
          >
            {headerText.nodeJS}
          </th>
          <th className={`
            _m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold

            dark:_border-gray-600
          `}
          >
            {headerText.preset}
          </th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr className={`
          _m-0 _border-t _border-gray-300 _p-0

          dark:_border-gray-600

          even:_bg-gray-100 even:dark:_bg-gray-600/20
        `}
        >
          <td className={`
            _m-0 _border _border-gray-300 _px-4 _py-2

            dark:_border-gray-600
          `}
          >
            {hasFacadeAPI}
          </td>
          <td className={`
            _m-0 _border _border-gray-300 _px-4 _py-2

            dark:_border-gray-600
          `}
          >
            {hasPaidPlan}
          </td>
          <td className={`
            _m-0 _border _border-gray-300 _px-4 _py-2

            dark:_border-gray-600
          `}
          >
            {needUniverser}
          </td>
          <td className={`
            _m-0 _border _border-gray-300 _px-4 _py-2

            dark:_border-gray-600
          `}
          >
            {nodeJS}
          </td>
          <td className={`
            _m-0 _border _border-gray-300 _px-4 _py-2

            dark:_border-gray-600
          `}
          >
            {preset}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

interface IHeaderTexts {
  facadeAPI?: string
  hasPaidPlan: string
  needUniverser: string
  nodeJS: string
  preset: string
}

function getMetaHeaderText(locale?: string): IHeaderTexts {
  if (locale === 'zh-CN') {
    return {
      facadeAPI: 'Facade API',
      hasPaidPlan: '付费版本',
      needUniverser: '需要 Univer 服务端',
      nodeJS: 'Univer on Node.js',
      preset: 'Preset',
    }
  }

  return {
    facadeAPI: 'Facade API',
    hasPaidPlan: 'Paid Version',
    needUniverser: 'Univer Server',
    nodeJS: 'Univer on Node.js',
    preset: 'Preset',
  }
}
