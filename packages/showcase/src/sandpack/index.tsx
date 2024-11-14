import { Sandpack as SandpackComponent } from '@codesandbox/sandpack-react'

import { plugins } from './deps/plugins'
import { presets } from './deps/presets'

interface IProps {
  files: Record<string, { hidden?: boolean, code: string } | string>
}

export function Sandpack(props: IProps) {
  const { files } = props

  return (
    <SandpackComponent
      customSetup={{
        entry: '/index.js',
        dependencies: {
          'react': 'latest',
          'react-dom': 'latest',
          'rxjs': 'latest',
        },
      }}
      files={{
        ...plugins,
        ...presets,
        'index.html': {
          hidden: true,
          code: `<div id="app"></div>`,
        },
        ...files,
      }}
    />
  )
}
