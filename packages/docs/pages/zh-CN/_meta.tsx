import ProductSelector from '@/components/product-selector'

export default {
  selector: {
    title: <ProductSelector />,
    type: 'separator',
  },
  introduction: {
    type: 'page',
    title: '简介',
  },
  guides: {
    type: 'menu',
    title: '指南',
    items: {
      sheet: {
        title: '📊 Univer Sheets',
        href: '/guides/sheets',
      },
      doc: {
        title: '📝 Univer Docs',
        href: '/guides/docs',
      },
      slide: {
        title: '📽️ Univer Slides',
        href: '/guides/slides',
      },
    },
  },
  blog: {
    type: 'page',
    title: '博客',
  },
}
