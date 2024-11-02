import antfu from '@antfu/eslint-config'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'

export default antfu({
  typescript: true,
  formatters: true,
  react: true,
  rules: {
    'react-refresh/only-export-components': 'off',
  },
}, {
  files: ['**/*.{jsx,tsx}'],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    'readable-tailwind': eslintPluginReadableTailwind,
  },
  rules: {
    // enable all recommended rules to warn
    ...eslintPluginReadableTailwind.configs.warning.rules,
    // enable all recommended rules to error
    ...eslintPluginReadableTailwind.configs.error.rules,
    'jsonc/sort-keys': ['warn'],

    // or configure rules individually
    'readable-tailwind/multiline': ['warn', { printWidth: 120 }],
  },
})
