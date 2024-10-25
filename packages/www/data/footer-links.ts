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
    href: (lang: string) => `/${lang}/clipsheet`,
  }],
}, {
  title: 'Community',
  children: [{
    title: 'Obsidian',
    href: 'https://obsidian.md/plugins?id=univer',
  }, {
    title: 'VSCode',
    href: 'https://marketplace.visualstudio.com/items?itemName=Univer.univer',
  // }, {
  //   title: 'Chart',
  //   href: '/',
  }],
}, {
  title: 'Resources',
  children: [{
    title: 'Guides',
    href: 'https://docs.univer.ai',
  }, {
    title: 'API',
    href: (lang: string) => `https://docs.univer.ai/${lang}/introduction`,
  }, {
    title: 'Changelog',
    href: (lang: string) => `/${lang}/changelog`,
  }, {
    title: 'Univer Icons',
    href: (lang: string) => `/${lang}/icons`,
  }, {
    title: 'Blog',
    href: (lang: string) => `https://docs.univer.ai/${lang}/blog/hyphenation`,
  }, {
    title: 'Examples',
    href: '/',
  }],
}, {
  title: 'Company',
  children: [{
    title: 'Pricing',
    href: (lang: string) => `/${lang}/pricing`,
  }, {
    title: 'Terms and Conditions',
    href: (lang: string) => `/${lang}/legal/terms-and-conditions`,
  }, {
    title: 'Privacy Policy',
    href: (lang: string) => `/${lang}/legal/privacy-policy`,
  }],
}]
