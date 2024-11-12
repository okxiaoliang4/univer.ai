'use client'

import type { IFeatureListItem } from './feature-list'
import GradientText from '@/components/ui/gradient-text'
import Image from 'next/image'
import { useState } from 'react'
import FeatureList from './feature-list'
import CFIcon from './icons/cf.svg'
import ChartIcon from './icons/charts.svg'
import DVIcon from './icons/dv.svg'
import ExchangeIcon from './icons/exchange.svg'
import FormatIcon from './icons/formarts.svg'
import FormulaIcon from './icons/formulas.svg'
import PermissionIcon from './icons/permission.svg'
import SheetFeatureIcon from './icons/sheet.svg'
import docSVGW from './tab-icons/docs-w.svg'
import spreadsheetSVG from './tab-icons/spreadsheet.svg'

import { Tabs, TabsList, TabsTrigger } from './tabs'

// TODO: add icons for different status
const SHEET_FEATURE_LIST: IFeatureListItem[] = [
  { icon: <Image src={FormulaIcon} alt="formula-icon" />, title: '500+ spreadsheet formulas', url: '' },
  { icon: <Image src={CFIcon} alt="cf-icon" />, title: '18 types of conditional formatting', url: '' },
  { icon: <Image src={DVIcon} alt="formula-icon" />, title: '9 categories of data validation', url: '' },
  { icon: <Image src={PermissionIcon} alt="formula-icon" />, title: 'Permission controls for cells, worksheets and workbooks', url: '' },
  { icon: <Image src={FormatIcon} alt="formula-icon" />, title: '41 cell formats and rich text styles', url: '' },
  { icon: <Image src={ChartIcon} alt="formula-icon" />, title: '20 char types', url: '' },
  { icon: <Image src={ExchangeIcon} alt="formula-icon" />, title: 'Import and export .xlsx files', url: '' },
  { icon: <Image src={SheetFeatureIcon} alt="formula-icon" />, title: 'Pivot tables, filtering, sorting, find & replace, images, comments, hyperlinks, etc.', url: '' },
]

const defaultTab = 'sheet'
export default function FeatureTabs() {
  const [activated, setActivated] = useState<string>(defaultTab)

  return (
    <>
      <Tabs defaultValue={defaultTab} className="mb-4 w-[592px]" onValueChange={value => setActivated(value)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sheet">
            { activated === 'sheet'
              ? (
                  <span className="inline-flex">
                    <Image src={spreadsheetSVG} alt="spreadsheet-icon" className="mr-1" />
                    <GradientText>
                      Spreadsheets
                    </GradientText>
                  </span>
                )
              : <span>Spreadsheets</span>}
          </TabsTrigger>
          <TabsTrigger value="doc">
            { activated === 'doc'
              ? <GradientText>Docs</GradientText>
              : (
                  <span className="inline-flex">
                    <Image src={docSVGW} alt="docs-icon" className="mr-1" />
                    Docs
                  </span>
                )}
          </TabsTrigger>
          {/* Slides are not supported yet. */}
          <TabsTrigger value="slide" disabled>Slides</TabsTrigger>
        </TabsList>
      </Tabs>

      <p className={`
        w-full text-center text-sm font-light leading-[normal] text-[rgba(255,255,255,0.50)]

        [font-family:Inter]
      `}
      >
        Univer is a full-stack framework for creating and editing spreadsheets, documents, and slides (coming soon) on both web and server.
      </p>

      <FeatureList items={SHEET_FEATURE_LIST} moreUrl="" />
    </>
  )
}
