import React from 'react'
import PricingCard from './PricingCard'
import { pricingData } from '../../mock-data/pricing-card-data'

export default function PricingDetails() {

  return (
    <section className=''>
      <div className='row'>
        {
          pricingData.map(item => (
            <PricingCard key={item.id} data={item} />
          ))
        }
      </div>
    </section>
  )
}
