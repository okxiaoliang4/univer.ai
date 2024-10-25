import ProductSelector from '@/components/product-selector'

export default {
  selector: {
    title: <ProductSelector />,
    type: 'separator',
  },
  introduction: {
    type: 'page',
    title: 'Introduction',
  },
  guides: {
    type: 'menu',
    title: 'Guides',
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
    title: 'Blog',
  },
}
