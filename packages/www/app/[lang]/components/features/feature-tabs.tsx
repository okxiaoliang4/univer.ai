'use client'

import type { IFeatureListItem } from './feature-list'
import GradientText from '@/components/ui/gradient-text'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import FeatureList from './feature-list'

import CFIcon from './icons/cf.svg'
import ChartIcon from './icons/charts.svg'
import DialogIcon from './icons/dialog.svg'
import DVIcon from './icons/dv.svg'
import ExchangeIcon from './icons/exchange.svg'
import FormatIcon from './icons/formarts.svg'
import FormulaIcon from './icons/formulas.svg'
import HeaderFooterIcon from './icons/header-footer.svg'
import ImageIcon from './icons/image.svg'
import InlineFormatIcon from './icons/inline-format.svg'
import LayoutIcon from './icons/layout.svg'
import ListIcon from './icons/list.svg'
import PermissionIcon from './icons/permission.svg'
import SheetFeatureIcon from './icons/sheet.svg'
import SlideMasterIcon from './icons/slide-master.svg'
import SlideTableIcon from './icons/slide-table.svg'
import SlideTransitionIcon from './icons/slide-transition.svg'
import TypesettingIcon from './icons/typesetting.svg'

import docSVG from './tab-icons/docs.svg'
import docSVGW from './tab-icons/docs-w.svg'
import slidesSVG from './tab-icons/slides.svg'
import slidesSVGW from './tab-icons/slides-w.svg'
import spreadsheetSVG from './tab-icons/spreadsheet.svg'
import spreadsheetSVGW from './tab-icons/spreadsheet-w.svg'

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

const DOC_FEATURE_LIST: IFeatureListItem[] = [
  { icon: <Image src={InlineFormatIcon} alt="inline-format-icon" />, title: '14 inline formats', url: '' },
  { icon: <Image src={HeaderFooterIcon} alt="header-footer-icon" />, title: 'Header and footer', url: '' },
  { icon: <Image src={ExchangeIcon} alt="exchange-icon" />, title: 'Import and export .docx files', url: '' },
  { icon: <Image src={PermissionIcon} alt="permission-icon" />, title: 'Permission settings for documents and paragraphs', url: '' },
  { icon: <Image src={ListIcon} alt="list-icon" />, title: '12 types of ordered / bullet lists', url: '' },
  { icon: <Image src={ImageIcon} alt="image-icon" />, title: 'Tables, images and charts of 20 types', url: '' },
  { icon: <Image src={DialogIcon} alt="dialog-icon" />, title: 'Task list, hyperlinks and comments', url: '' },
  { icon: <Image src={TypesettingIcon} alt="typesetting-icon" />, title: 'Advanced Typesetting: kerning, punctuation hanging and hyphenation etc.', url: '' },
]

const SLIDE_FEATURE_LIST: IFeatureListItem[] = [
  { icon: <Image src={LayoutIcon} alt="formula-icon" />, title: '20 slide layouts', url: '' },
  { icon: <Image src={InlineFormatIcon} alt="cf-icon" />, title: '15 inline formats', url: '' },
  { icon: <Image src={ChartIcon} alt="formula-icon" />, title: '20 chart types', url: '' },
  { icon: <Image src={ExchangeIcon} alt="exchange-icon" />, title: 'Import and export .pptx files', url: '' },
  { icon: <Image src={SlideMasterIcon} alt="slide-master-icon" />, title: 'Master slide settings', url: '' },
  { icon: <Image src={SlideTransitionIcon} alt="slide-transition-icon" />, title: '8 slide transition effects', url: '' },
  { icon: <Image src={SlideTableIcon} alt="slide-table-icon" />, title: 'Table, image and shap', url: '' },
  { icon: <Image src={PermissionIcon} alt="slide-permission-icon" />, title: 'Permission settings for slides or elements', url: '' },
]

const defaultTab = 'sheet'
export default function FeatureTabs() {
  const [activated, setActivated] = useState<string>(defaultTab)
  const featureList = useMemo(() => {
    switch (activated) {
      case 'doc':
        return DOC_FEATURE_LIST
      case 'slide':
        return SLIDE_FEATURE_LIST
      case 'sheet':
      default:
        return SHEET_FEATURE_LIST
    }
  }, [activated])

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
              : (
                  <span className="inline-flex">
                    <Image src={spreadsheetSVGW} alt="spreadsheet-icon" className="mr-1" />
                    <span>
                      Spreadsheets
                    </span>
                  </span>
                )}
          </TabsTrigger>
          <TabsTrigger value="doc">
            { activated === 'doc'
              ? (
                  <span className="inline-flex">
                    <Image src={docSVG} alt="docs-icon" className="mr-1" />
                    <GradientText>Docs</GradientText>
                  </span>
                )
              : (
                  <span className="inline-flex">
                    <Image src={docSVGW} alt="docs-icon" className="mr-1" />
                    Docs
                  </span>
                )}
          </TabsTrigger>
          {/* Slides are not supported yet. */}
          <TabsTrigger value="slide">
            { activated === 'slide'
              ? (
                  <span className="inline-flex">
                    <Image src={slidesSVG} alt="slides-icon" className="mr-1" />
                    <GradientText>Slides</GradientText>
                  </span>
                )
              : (
                  <span className="inline-flex">
                    <Image src={slidesSVGW} alt="slides-icon" className="mr-1" />
                    Slides
                  </span>
                )}
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <p className={`
        w-full text-center text-sm font-light leading-[normal] text-[rgba(255,255,255,0.50)]

        [font-family:Inter]
      `}
      >
        Univer is a full-stack framework for creating and editing spreadsheets, documents, and slides (coming soon) on both web and server.
      </p>

      <FeatureList items={featureList} moreUrl="" showLinks={activated !== 'slide'} />
    </>
  )
}
