import ProductSelector from '@/components/product-selector'

export default {
  selector: {
    title: <ProductSelector />,
    type: 'separator',
  },
  guides: {
    type: 'menu',
    title: 'Guides',
    items: {
      univer: {
        title: '🌌 Univer',
        href: '/introduction',
      },
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
