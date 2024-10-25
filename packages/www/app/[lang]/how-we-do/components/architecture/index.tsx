import Image from 'next/image'
import architechtureImg from './architecture.svg'

export default function Architecture() {
  return (
    <section>
      <Image className="mx-auto block" src={architechtureImg} alt="Architecture" />
    </section>
  )
}
