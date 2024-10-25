import type { ThemeConfig } from 'nextra'
import Banner from '@/components/banner'
import Copyright from '@/components/copyright'
import Head from '@/components/head'
import Logo from '@/components/logo'
import TocBackToTop from '@/components/toc-back-to-top'
import TocTitle from '@/components/toc-title'
import pkg from './package.json'

const themeConfig: ThemeConfig = {
  logo: <Logo />,
  logoLink: false,
  head: Head,
  project: {
    link: 'https://github.com/dream-num/univer',
  },
  docsRepositoryBase: 'https://github.com/dream-num/univer.ai/tree/main',
  chat: {
    link: 'https://discord.gg/XPGnMBmpd6',
  },
  i18n: [
    { locale: 'en-US', name: 'English' },
    { locale: 'zh-CN', name: '简体中文' },
  ],
  darkMode: false,
  editLink: false,
  feedback: false,
  color: {
    hue: '180deg',
    saturation: '50%',
  },
  banner: {
    dismissible: true,
    key: pkg.version,
    content: <Banner version={pkg.version} />,
  },
  toc: {
    title: <TocTitle />,
    backToTop: <TocBackToTop />,
  },
  footer: {
    content: <Copyright />,
  },
}

export default themeConfig
