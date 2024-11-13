'use client'

import type { ReactNode } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import GradientText from '@/components/ui/gradient-text'
import { useState } from 'react'
import { LearnMore } from '../learn-more'

interface IApplicationCaseItem {
  title: string
  url: string
  description: ReactNode
}

const enItems: IApplicationCaseItem[] = [
  { title: 'Online data analysis', description: 'Embedding the Univer SDK, users can directly conduct online data analysis through Univer Sheet in the BI system. With support for charts, Pivot tables, conditional formats, and 500+ formulas, developers have the flexibility to extend plug-ins to meet the individual data analysis needs of employees.', url: '' },
  { title: 'Improve data filling and data collection', description: 'Provide enterprise-level complex data template design, utilizing spreadsheets to meet the needs of bulk data collection and submission. Easily gather data, quickly consolidate it, and significantly boost efficiency.', url: '' },
  { title: 'Enable office automation', description: 'Empower enterprises to create and distribute spreadsheets, doc, and slides to their employees, fulfilling the requirements for automating the delivery of reports, contracts, approval forms, official documents, and other business reports. Optimize workflow management and enhance team collaboration.', url: '' },
  { title: 'Build enterprise knowledge base', description: `Meet the enterprise's need for building a Wiki on a private cloud, enabling the capability to accumulate and share internal knowledge while ensuring data security.`, url: '' },
  { title: 'Synchronize block/team collaboration across applications', description: `Univer is an isomorphic full-stack framework, which enables Univer's spreadsheets, docs, and slides to be viewed and edited as synchronized blocks across different enterprise systems. Employees can insert, copy-paste, share, edit, and view these synchronized blocks, meeting the needs of enterprises for multi-user collaboration and knowledge sharing. This helps break down information silos between systems and unlock the potential value of enterprise data.`, url: '' },
  {
    title: 'Innovative enterprise applications',
    description: (
      <ul className="list-disc list-outside pl-4">
        <li>Enabling spreadsheets, docs, and slides to collaborate on the same canvas.</li>
        <li>Streamline spreadsheets by retaining only the functions needed by the enterprise, such as lightweight tables with only styles and background colors, thereby improving loading speed.</li>
        <li>Display multiple spreadsheet instances on the same page, allowing them to listen to user actions and respond to data changes between the spreadsheets.</li>
      </ul>
    ),
    url: '',
  },
]

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
          <LearnMore href="#" />
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
