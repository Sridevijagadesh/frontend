import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/Popular/Popular'
import Offer from '../component/Offer/Offer'
import NewCollection from '../component/New collection/New-collection'
import NewsLetters from '../component/NewsLetter/NewsLetters'


const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLetters/>
  
    </div>
  )
}

export default shop
