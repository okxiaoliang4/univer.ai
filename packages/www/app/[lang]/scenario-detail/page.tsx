import type { Metadata } from 'next'
import Header from './components/header'
import List from './components/list'

export const metadata: Metadata = {
  title: 'Univer | Scenario Detail',
}

export default function Page() {
  return (
    <main>
      <Header />
      <List />
    </main>
  )
}
