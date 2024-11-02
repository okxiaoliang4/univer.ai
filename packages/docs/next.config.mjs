import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { UniverPlugin } from '@univerjs/webpack-plugin'
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin'
import nextra from 'nextra'
// import githubLight from 'shiki/themes/light-plus.mjs'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    rehypePrettyCodeOptions: {
      // theme: githubLight,
    },
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  transpilePackages: ['monaco-editor'],

  output: 'standalone',

  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US',
  },
  rewrites: () => {
    // eslint-disable-next-line node/prefer-global/process
    if (process.env.UNIVEERSER_ENDPOINT) {
      return [
        {
          source: '/universer-api/:path*',
          // eslint-disable-next-line node/prefer-global/process
          destination: `${process.env.UNIVEERSER_ENDPOINT}/universer-api/:path*`,
        },
      ]
    }

    return []
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(new UniverPlugin())

    config.module.rules.push({
      test: /\.txt$/i,
      use: 'raw-loader',
    })

    config.resolve.exportsFields = ['univerSpace', 'exports']
    config.resolve.modules = [path.resolve(__dirname, 'node_modules'), 'node_modules']

    if (!isServer) {
      // https://github.com/vercel/next.js/issues/31692
      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: ['typescript'],
          filename: 'static/[name].worker.js',
        }),
      )

      config.optimization.minimize = false
    }

    return config
  },
}

export default withNextra(nextConfig)
