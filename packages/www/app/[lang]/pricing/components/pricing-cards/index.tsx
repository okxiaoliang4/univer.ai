'use client'

import CommercialCard from './commercial-card'
import FreeCard from './free-card'
import NonCommercialCard from './non-commercial-card'

export default function PricingCards() {
  return (
    <ul
      className={`
        grid grid-cols-1 gap-6 px-4

        xl:grid-cols-3 xl:px-6
      `}
    >
      <li>
        <FreeCard />
      </li>

      <li>
        <NonCommercialCard />
      </li>

      <li>
        <CommercialCard />
      </li>
    </ul>
  )
}
