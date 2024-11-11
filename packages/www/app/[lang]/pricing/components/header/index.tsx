import Container from '@/components/container'
import Title from '@/components/title'
import PricingCards from '../pricing-cards'

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
      <section className="relative pt-[80px]">
        <Container>
          <Title level="h1" description="Univer provides flexible quotes based on your actual needs.">
            Unlock the full power of Univer
          </Title>

          <PricingCards />
        </Container>
      </section>
    </section>
  )
}
