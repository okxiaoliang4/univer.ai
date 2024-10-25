import Container from '@/components/container'
import Title from '@/components/title'
import { clsx } from '@/utils/clsx'
import Image from 'next/image'
import backgroundImg from './background.svg'

interface IProps {
  className?: string
  title?: React.ReactNode | string
  description?: string
  children?: React.ReactNode
}

export default function PageHeader(props: IProps) {
  const { className, title, description, children } = props

  return (
    <header className="relative">
      <Image
        className="absolute left-1/2 w-full -translate-x-1/2"
        src={backgroundImg}
        width={backgroundImg.width}
        alt="footer background"
      />

      <div
        className={clsx(`
          relative bg-[linear-gradient(to_top,white,transparent)] pb-8 pt-[90px]

          xl:bg-none xl:pb-12 xl:pt-40
        `, className)}
      >
        {title && (
          <Container>
            <Title level="h1" description={description}>
              {title}
            </Title>
          </Container>
        )}
      </div>

      {children}
    </header>
  )
}
