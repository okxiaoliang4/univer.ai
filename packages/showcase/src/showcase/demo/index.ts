import { createUniver, defaultTheme, LocaleType, Tools } from '@univerjs/presets'
import { UniverSheetsCorePreset } from '@univerjs/presets/preset-sheets-core'
import sheetsCoreZhCN from '@univerjs/presets/preset-sheets-core/locales/zh-CN'

import './style.css'
import '@univerjs/presets/lib/styles/preset-sheets-core.css'

const { univerAPI } = createUniver({
  locale: LocaleType.ZH_CN,
  locales: {
    zhCN: Tools.deepMerge(
      {},
      sheetsCoreZhCN,
    ),
  },
  theme: defaultTheme,
  presets: [
    UniverSheetsCorePreset(),
  ],
})

univerAPI.createUniverSheet({ name: 'Test Sheet' })
