import React from 'react'
import Hero from '../components/Hero'
import FreshArrivals from '../components/FreshArrivals'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <FreshArrivals />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
      
    </div>
  )
}

export default Home
