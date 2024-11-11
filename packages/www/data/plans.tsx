import { MinusSingle } from '@univerjs/icons'

interface IFeatureWithChildren {
  title: string
  children?: {
    title: string
    limitCaution?: string | React.ReactNode
  }[]
}

interface IFeatureWithoutChildren {
  title: string
  limitCaution?: string | React.ReactNode
}

interface IPlan {
  title: string
  features: (IFeatureWithChildren | IFeatureWithoutChildren)[]
}
const plans: IPlan[] = [{
  title: 'Univer basic features',
  features: [{
    title: 'Univer Sheets',
    children: [{
      title: 'Worksheet stylings',
    }, {
      title: 'Number format',
    }, {
      title: 'Formulas & over 500 functions',
    }, {
      title: 'Filtering',
    }, {
      title: 'Conditional formatting',
    }, {
      title: 'Data validations',
    }, {
      title: 'Sorting',
    }, {
      title: 'Float images',
    }, {
      title: 'Permission control',
    }, {
      title: 'Thread comment',
    }, {
      title: 'Hyperlinks',
    }, {
      title: 'Search & Replace',
    }],
  }, {
    title: 'Univer Docs',
    children: [{
      title: 'Text stylings',
    }, {
      title: 'Images',
    }, {
      title: 'Tables',
    }, {
      title: 'List & TODO',
    }, {
      title: 'Page headers & footers',
    }, {
      title: 'Thread comments',
    }, {
      title: 'Hyperlinks',
    }],
  }],
}, {
  title: 'Univer premium Features',
  features: [{
    title: 'Collaborative Editing',
    children: [{
      title: 'Collaborations',
    }, {
      title: 'Shared Cursors on Sheets',
    }, {
      title: 'Offline availability',
    }, {
      title: 'File History on Sheets',
    }, {
      title: 'Documents capacity',
      limitCaution: 'The number of collaborative documents at the same time does not exceed 5',
    }, {
      title: 'Concurrent connections',
      limitCaution: 'The number of collaborators for each document should not exceed 3',
    }],
  }, {
    title: 'Printing',
    children: [{
      title: 'Printing of Sheets',
      limitCaution: 'Print up to 3 pages at a time',
    }],
  }, {
    title: 'Import & Exports',
    children: [{
      title: 'Import of Sheets',
      limitCaution: 'Import files under 1MB',
    }, {
      title: 'Export of Sheets',
      limitCaution: 'Export files under 10k cells',
    }],
  }, {
    title: 'Pivot Table',
    limitCaution: 'Create only one pivot table',
  }],
}, {
  title: 'Deployments',
  features: [{
    title: 'Docker images',
  }],
}, {
  title: 'Support',
  features: [{
    title: 'Community support',
  }, {
    title: 'Email support',
    limitCaution: <MinusSingle className="text-gray-500" />,
  }, {
    title: 'IM support',
    limitCaution: <MinusSingle className="text-gray-500" />,
  }, {
    title: '2-hours onboarding session',
    limitCaution: <MinusSingle className="text-gray-500" />,
  }],
}]

export default plans
