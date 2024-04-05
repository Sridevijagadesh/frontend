import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/Popular/Popular'
import Offer from '../component/Offer/Offer'
import NewCollection from '../component/New collection/New-collection'

const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
    </div>
  )
}

export default shop
