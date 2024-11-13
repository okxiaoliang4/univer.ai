import GradientText from '@/components/ui/gradient-text'
import Link from 'next/link'
import GradientArrow from './gradient-arrow'

export function LearnMore({ href }: { href: string }) {
  return (
    <Link href={href} className="inline-flex items-center">
      <GradientText className="mr-2 text-[14px]">
        Learn More
      </GradientText>
      <GradientArrow />
    </Link>
  )
}
