import type { Metadata } from 'next'
import Header from '../components/header'
import List from '../components/list'
import scenDataList from '../data'

export const metadata: Metadata = {
  title: 'Univer | Scenario Detail',
}

interface IProps {
  params: {
    scen: string
  }
}

export function generateStaticParams() {
  return scenDataList.map((item) => {
    return {
      scen: item.scen,
    }
  })
}

export default async function Page(props: IProps) {
  const { scen } = await props.params
  const scenData = scenDataList.find(item => item.scen === scen)

  return (
    <main>
      {
        scenData && (
          <>
            <Header title={scenData.title} description={scenData.description} mainImage={scenData.mainImage} />
            <List imageTextList={scenData.imageTextList} />
          </>
        )
      }
    </main>
  )
}
