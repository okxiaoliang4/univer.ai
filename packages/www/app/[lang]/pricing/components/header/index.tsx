import Container from '@/components/container'
import Title from '@/components/title'
import Image from 'next/image'
import PricingCards from '../pricing-cards'
import backgroundImg from './background.svg'

interface IProps {

}

export default function Header(_props: IProps) {
  return (
    <section
      className={`
        relative mb-12

        xl:mb-24
      `}
    >
      <Image
        className="absolute h-full w-full object-cover"
        src={backgroundImg}
        width={backgroundImg.width}
        alt="hero background"
      />

      <section className="relative pb-12 pt-[152px]">
        <Container>
          <Title level="h1" className="mb-6" description="Univer provides flexible quotes based on your actual needs.">
            Unlock
            {' '}
            <span className="text-black">🔓</span>
            {' '}
            the full power of Univer
          </Title>

          <PricingCards />
        </Container>
      </section>
    </section>
  )
}
