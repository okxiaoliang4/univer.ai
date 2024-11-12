'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import GradientText from '@/components/ui/gradient-text'
import { useState } from 'react'
import GradientArrow from './gradient-arrow'

interface IApplicationCaseItem {
  title: string
  url: string
  description: string
}

const enItems: IApplicationCaseItem[] = [
  { title: 'Online data analysis', description: 'Embedding the Univer SDK, users can directly conduct online data analysis through Univer Sheet in the BI system. With support for charts, Pivottables, conditional formats, and 500+ formulas, developers have the flexibility to extend plug-ins to meet the individual data analysis needs of employees.', url: '' },
  { title: 'Improve data filling and data collection', description: 'Embedding the Univer SDK, users can directly conduct online data analysis through Univer Sheet in the BI system. With support for charts, Pivottables, conditional formats, and 500+ formulas, developers have the flexibility to extend plug-ins to meet the individual data analysis needs of employees.', url: '' },
  { title: 'Enable office automation', description: 'Embedding the Univer SDK, users can directly conduct online data analysis through Univer Sheet in the BI system. With support for charts, Pivottables, conditional formats, and 500+ formulas, developers have the flexibility to extend plug-ins to meet the individual data analysis needs of employees.', url: '' },
  { title: 'Build enterprise knowledge base', description: 'Embedding the Univer SDK, users can directly conduct online data analysis through Univer Sheet in the BI system. With support for charts, Pivottables, conditional formats, and 500+ formulas, developers have the flexibility to extend plug-ins to meet the individual data analysis needs of employees.', url: '' },
  { title: 'Synchronize block/team collaboration across applications', description: 'Embedding the Univer SDK, users can directly conduct online data analysis through Univer Sheet in the BI system. With support for charts, Pivottables, conditional formats, and 500+ formulas, developers have the flexibility to extend plug-ins to meet the individual data analysis needs of employees.', url: '' },
  { title: 'Innovative enterprise applications', description: 'Embedding the Univer SDK, users can directly conduct online data analysis through Univer Sheet in the BI system. With support for charts, Pivottables, conditional formats, and 500+ formulas, developers have the flexibility to extend plug-ins to meet the individual data analysis needs of employees.', url: '' },
]

// TODO: i18n

function Item({ title, description, activated }: IApplicationCaseItem & { activated: boolean }) {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger>
        {activated
          ? (
              <GradientText>
                {title}
              </GradientText>
            )
          : title}
      </AccordionTrigger>
      <AccordionContent>
        <p>
          {description}
        </p>
        <p className="mt-2">
          <a
            href="#"
            className="inline-flex"
          >
            <GradientText className="mr-2">
              Learn more
            </GradientText>
            <GradientArrow />
          </a>
        </p>
      </AccordionContent>
    </AccordionItem>
  )
}

export default function ApplicationCasesAccordion() {
  const [openedId, setOpenedId] = useState<string | null>(enItems[0].title)

  return (
    <Accordion type="single" collapsible className="w-full" defaultValue={enItems[0].title} onValueChange={v => setOpenedId(v)}>
      {enItems.map(item => (
        <Item title={item.title} description={item.description} activated={openedId === item.title} url={item.url} key={item.title} />
      ))}
    </Accordion>
  )
}
