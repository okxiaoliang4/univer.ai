export default [{
  title: 'Products',
  children: [{
    title: 'Univer',
    href: (lang: string) => `/${lang}`,
  }, {
    title: 'Univer Workspace',
    href: (lang: string) => `/${lang}/workspace`,
  }, {
    title: 'ClipSheet',
    href: '/clipsheet',
  }],
}, {
  title: 'Community',
  children: [{
    title: 'Obsidian',
    href: '/',
  }, {
    title: 'VSCode',
    href: '/',
  }, {
    title: 'Chart',
    href: '/',
  }],
}, {
  title: 'Resources',
  children: [{
    title: 'Guide',
    href: '/',
  }, {
    title: 'API',
    href: '/',
  }, {
    title: 'Changelog',
    href: (lang: string) => `/${lang}/changelog`,
  }, {
    title: 'Univer Icons',
    href: (lang: string) => `/${lang}/icons`,
  }, {
    title: 'Blog',
    href: '/',
  }, {
    title: 'Examples',
    href: '/',
  }],
}, {
  title: 'Company',
  children: [{
    title: 'Pricing',
    href: '/pricing',
  }, {
    title: 'Terms and Conditions',
    href: (lang: string) => `/${lang}/legal/terms-and-conditions`,
  }, {
    title: 'Privacy Policy',
    href: (lang: string) => `/${lang}/legal/privacy-policy`,
  }],
}]
