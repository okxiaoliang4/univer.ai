import type { IScenDataImage } from '../data'
import Button from '@/components/button'
import Container from '@/components/container'
import Title from '@/components/title'
import { ArrowCircleRightSingle, GithubSingle24 } from '@univerjs/icons'
import Image from 'next/image'
import backgroundImage from './bg.svg'

interface IProps {
  title: string
  description: string
  mainImage: IScenDataImage
}

export default function Header(props: IProps) {
  return (
    <section
      className={`
        relative mb-12

        xl:mb-24
      `}
    >
      <Image
        className="absolute left-1/2 h-full w-full max-w-none -translate-x-1/2 object-cover"
        src={backgroundImage}
        width={backgroundImage.width}
        alt="hero background"
      />

      <section className="relative overflow-hidden pt-[80px]">
        {/* spotlight */}
        <div className={`
          absolute bottom-[-190px] left-[50%] h-[380px] w-[950px] shrink-0 translate-x-[-50%] rounded-[950px]
          blur-[150px]

          [background:linear-gradient(63deg,#006A57_17.08%,#2B19F2_86.18%)]
        `}
        >
        </div>

        <Container>
          <Title
            level="h1"
            align="center"
            description={(
              <p className="text-center text-sm text-white/50">{props.description}</p>
            )}
          >
            {props.title}
          </Title>

          <section className="flex items-center justify-center pt-4">
            <Button type="primary" href="https://space.univer.ai/home">
              Enter Workspace
              {' '}
              <ArrowCircleRightSingle />
            </Button>
            <Button className="ml-4 bg-white text-black" href="https://github.com/dream-num/univer">
              <GithubSingle24 />
              {' '}
              GitHub
            </Button>
          </section>

          <Image
            className="mx-auto mt-20"
            src={props.mainImage}
            width={(props.mainImage as HTMLImageElement).width}
            alt=""
          />
        </Container>
      </section>
    </section>
  )
}
