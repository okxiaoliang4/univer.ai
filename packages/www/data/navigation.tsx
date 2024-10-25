import type { IconProps } from '@univerjs/icons'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Api, Chrome, Dashboard, DataFlow, Examples, Features, Guides, Icons, Layers, Log, Network, Newspaper, OpenSource, Report, Roadmap, Tutorials, Uses, Workspace } from '@univerjs/icons'

function Icon({ Component }: {
  Component: ForwardRefExoticComponent<IconProps & RefAttributes<SVGElement>>
}) {
  return <Component extend={{ colorChannel1: '#2C53F1' }} />
}

export interface INavigationWithChildren {
  title: string
  children?: {
    title: string
    children?: {
      title: string
      href: string | ((lang: string) => string)
      icon: React.ReactNode
    }[]
  }[]
}

interface INavigationWithoutChildren {
  title: string
  href: string | ((lang: string) => string)
}

export type NavigationType = (INavigationWithChildren | INavigationWithoutChildren)

const navigation: NavigationType[] = [{
  title: 'Products',
  children: [{
    title: 'Univer SDK',
    children: [{
      title: 'Get Started',
      href: '/',
      icon: <Icon Component={Dashboard} />,
    }, {
      title: 'All Features',
      href: '/',
      icon: <Icon Component={Features} />,
    }, {
      title: 'Uses',
      href: '/',
      icon: <Icon Component={Uses} />,
    }, {
      title: 'Open Source',
      href: '/',
      icon: <Icon Component={OpenSource} />,
    }],
  }, {
    title: 'Workspace',
    children: [{
      title: 'Introduction',
      icon: <Icon Component={Workspace} />,
      href: (lang: string) => `/${lang}/workspace`,
    }, {
      title: 'Online Use',
      href: '/',
      icon: <Icon Component={Network} />,
    }],
  }, {
    title: 'ClipSheet',
    children: [{
      title: 'Introduction',
      href: '/',
      icon: <Icon Component={DataFlow} />,
    }, {
      title: 'Get ClipSheet',
      href: '/',
      icon: <Icon Component={Chrome} />,
    }, {
      title: 'Tutorial',
      href: '/',
      icon: <Icon Component={Tutorials} />,
    }],
  }],
}, {
  title: 'Resources',
  children: [{
    title: 'References',
    children: [{
      title: 'Examples',
      href: '/',
      icon: <Icon Component={Examples} />,
    }, {
      title: 'Univer Icons',
      href: '/icons',
      icon: <Icon Component={Icons} />,
    }, {
      title: 'Performance Report',
      href: '/',
      icon: <Icon Component={Report} />,
    }, {
      title: 'Tech Stack',
      href: '/',
      icon: <Icon Component={Layers} />,
    }, {
      title: 'Blogs',
      href: '/',
      icon: <Icon Component={Newspaper} />,
    }, {
      title: 'Roadmap',
      href: 'https://space.univer.ai/unit/2/me0tSjGuQGWThMpz0uNUgw?subunit=83vg0YbYx3zqg_8Ki1xKI',
      icon: <Icon Component={Roadmap} />,
    }],
  }, {
    title: 'Docs',
    children: [{
      title: 'Guides',
      href: (lang: string) => `/${lang}/guides/sheets/introduction`,
      icon: <Icon Component={Guides} />,
    }, {
      title: 'API',
      href: '/',
      icon: <Icon Component={Api} />,
    }, {
      title: 'Changelog',
      href: (lang: string) => `/${lang}/changelog`,
      icon: <Icon Component={Log} />,
    }],
  }],
}, {
  title: 'Pricing',
  href: (lang: string) => `/${lang}/pricing`,
}]

export default navigation
