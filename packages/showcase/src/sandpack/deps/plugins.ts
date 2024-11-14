import coreRaw from '@univerjs/core?raw'
import designZhCNRaw from '@univerjs/design/locale/zh-CN?raw'
import designRaw from '@univerjs/design?raw'
import docsRaw from '@univerjs/docs?raw'
import docsUiFacadeRaw from '@univerjs/docs-ui/facade?raw'
import docsUIZhCNRaw from '@univerjs/docs-ui/locale/zh-CN?raw'
import docsUIRaw from '@univerjs/docs-ui?raw'
import engineFormulaFacadeRaw from '@univerjs/engine-formula/facade?raw'
import engineFormulaRaw from '@univerjs/engine-formula?raw'
import engineNumfmtRaw from '@univerjs/engine-numfmt?raw'
import engineRenderRaw from '@univerjs/engine-render?raw'
import protocolRaw from '@univerjs/protocol?raw'
import rpcRaw from '@univerjs/rpc?raw'
import sheetsFacadeRaw from '@univerjs/sheets/facade?raw'
import sheetsZhCNRaw from '@univerjs/sheets/locale/zh-CN?raw'
import sheetsRaw from '@univerjs/sheets?raw'
import sheetsFormulaFacadeRaw from '@univerjs/sheets-formula/facade?raw'
import sheetsFormulaZhCNRaw from '@univerjs/sheets-formula/locale/zh-CN?raw'
import sheetsFormulaRaw from '@univerjs/sheets-formula?raw'
import sheetsFormulaUIZhCNRaw from '@univerjs/sheets-formula-ui/locale/zh-CN?raw'
import sheetsFormulaUIRaw from '@univerjs/sheets-formula-ui?raw'
import sheetsNumfmtFacadeRaw from '@univerjs/sheets-numfmt/facade?raw'
import sheetsNumfmtRaw from '@univerjs/sheets-numfmt?raw'
import sheetsNumfmtUIZhCNRaw from '@univerjs/sheets-numfmt-ui/locale/zh-CN?raw'

import sheetsNumfmtUIRaw from '@univerjs/sheets-numfmt-ui?raw'
import sheetsUiFacadeRaw from '@univerjs/sheets-ui/facade?raw'
import sheetsUIZhCNRaw from '@univerjs/sheets-ui/locale/zh-CN?raw'
import sheetsUIRaw from '@univerjs/sheets-ui?raw'
import telemetryRaw from '@univerjs/telemetry?raw'
import uiFacadeRaw from '@univerjs/ui/facade?raw'
import uiZhCNRaw from '@univerjs/ui/locale/zh-CN?raw'
import uiRaw from '@univerjs/ui?raw'

const pluginsMap = {
  '@univerjs/core': {
    index: coreRaw,
  },
  '@univerjs/design': {
    index: designRaw,
    locale: {
      'zh-CN': designZhCNRaw,
    },
  },
  '@univerjs/docs': {
    index: docsRaw,
  },
  '@univerjs/docs-ui': {
    index: docsUIRaw,
    facade: docsUiFacadeRaw,
    locale: {
      'zh-CN': docsUIZhCNRaw,
    },
  },
  '@univerjs/engine-formula': {
    index: engineFormulaRaw,
    facade: engineFormulaFacadeRaw,
  },
  '@univerjs/engine-numfmt': {
    index: engineNumfmtRaw,
  },
  '@univerjs/engine-render': {
    index: engineRenderRaw,
  },
  '@univerjs/rpc': {
    index: rpcRaw,
  },
  '@univerjs/sheets': {
    index: sheetsRaw,
    facade: sheetsFacadeRaw,
    locale: {
      'zh-CN': sheetsZhCNRaw,
    },
  },
  '@univerjs/sheets-formula': {
    index: sheetsFormulaRaw,
    facade: sheetsFormulaFacadeRaw,
    locale: {
      'zh-CN': sheetsFormulaZhCNRaw,
    },
  },
  '@univerjs/sheets-formula-ui': {
    index: sheetsFormulaUIRaw,
    locale: {
      'zh-CN': sheetsFormulaUIZhCNRaw,
    },
  },
  '@univerjs/sheets-numfmt': {
    index: sheetsNumfmtRaw,
    facade: sheetsNumfmtFacadeRaw,
  },
  '@univerjs/sheets-numfmt-ui': {
    index: sheetsNumfmtUIRaw,
    locale: {
      'zh-CN': sheetsNumfmtUIZhCNRaw,
    },
  },
  '@univerjs/sheets-ui': {
    index: sheetsUIRaw,
    facade: sheetsUiFacadeRaw,
    locale: {
      'zh-CN': sheetsUIZhCNRaw,
    },
  },
  '@univerjs/telemetry': {
    index: telemetryRaw,
  },
  '@univerjs/protocol': {
    index: protocolRaw,
  },
  '@univerjs/ui': {
    index: uiRaw,
    facade: uiFacadeRaw,
    locale: {
      'zh-CN': uiZhCNRaw,
    },
  },
}

export const plugins = Object.entries(pluginsMap).reduce((acc, [key, value]) => {
  const exportsMap: Record<string, string> = {
    '.': './index.js',
  }
  if ('facade' in value) {
    exportsMap['./facade'] = './facade.js'
    acc[`/node_modules/${key}/facade.js`] = {
      hidden: true,
      code: value.facade,
    }
  }

  if ('locale' in value) {
    exportsMap['./locale/zh-CN'] = './locale/zh-CN.js'
    acc[`/node_modules/${key}/locale/zh-CN.js`] = {
      hidden: true,
      code: value.locale['zh-CN'],
    }
  }

  acc[`/node_modules/${key}/package.json`] = {
    hidden: true,
    code: JSON.stringify({
      name: key,
      exports: exportsMap,
    }),
  }

  acc[`/node_modules/${key}/index.js`] = {
    hidden: true,
    code: value.index,
  }
  return acc
}, {} as Record<string, any>)
