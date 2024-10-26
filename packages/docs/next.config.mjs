import nextra from 'nextra'
// import githubLight from 'shiki/themes/light-plus.mjs'

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
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US',
  },
}

export default withNextra(nextConfig)
