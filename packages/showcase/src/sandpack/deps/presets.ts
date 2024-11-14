import presetSheetsCoreZhCNRaw from '@univerjs/preset-sheets-core/locales/zh-CN?raw'
import presetSheetsCoreRaw from '@univerjs/preset-sheets-core?raw'
import presetsPresetSheetsCoreCSSRaw from '@univerjs/presets/lib/styles/preset-sheets-core.css?raw'
import presetsPresetSheetsCoreZhCNRaw from '@univerjs/presets/preset-sheets-core/locales/zh-CN?raw'
import presetsPresetSheetsCoreRaw from '@univerjs/presets/preset-sheets-core?raw'
import presetsRaw from '@univerjs/presets?raw'

export const presets = {
  '/node_modules/@univerjs/preset-sheets-core/package.json': {
    hidden: true,
    code: JSON.stringify({
      name: '@univerjs/preset-sheets-core',
      exports: {
        '.': './index.js',
        './locales/zh-CN': './locales/zh-CN.js',
      },
    }),
  },
  '/node_modules/@univerjs/preset-sheets-core/index.js': {
    hidden: true,
    code: presetSheetsCoreRaw,
  },
  '/node_modules/@univerjs/preset-sheets-core/locales/zh-CN.js': {
    hidden: true,
    code: presetSheetsCoreZhCNRaw,
  },

  '/node_modules/@univerjs/presets/package.json': {
    hidden: true,
    code: JSON.stringify({
      name: '@univerjs/presets',
      exports: {
        '.': './index.js',
        './preset-sheets-core': './preset-sheets-core/index.js',
        './preset-sheets-core/locales/zh-CN': './preset-sheets-core/locales/zh-CN.js',
        './lib/styles/preset-sheets-core.css': './lib/styles/preset-sheets-core.css',
      },
    }),
  },
  '/node_modules/@univerjs/presets/index.js': {
    hidden: true,
    code: presetsRaw,
  },
  '/node_modules/@univerjs/presets/preset-sheets-core/index.js': {
    hidden: true,
    code: presetsPresetSheetsCoreRaw,
  },
  '/node_modules/@univerjs/presets/preset-sheets-core/locales/zh-CN.js': {
    hidden: true,
    code: presetsPresetSheetsCoreZhCNRaw,
  },
  '/node_modules/@univerjs/presets/lib/styles/preset-sheets-core.css': {
    hidden: true,
    code: presetsPresetSheetsCoreCSSRaw,
  },
}
