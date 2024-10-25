import Image from 'next/image'
import commonUseImg from './common-use.svg'

export default function CommonUse() {
  return (
    <section className="px-4">
      <Image src={commonUseImg} alt="common use" />
    </section>
  )
}
