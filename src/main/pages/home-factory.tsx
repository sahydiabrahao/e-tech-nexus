
import Footer from '@/presentation/layout/footer/footer'
import Benefits from '@/presentation/pages/home/benefits/benefits'
import Hero from '@/presentation/pages/home/hero/hero'
import Outdoor from '@/presentation/pages/home/outdoor/outdoor'
import Services from '@/presentation/pages/home/service/services'
import Shop from '@/presentation/pages/home/shop/shop'
import React from 'react'
import About from '@/presentation/pages/home/about/about'

export const MakeHome: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Benefits />
      <Outdoor />
      <Shop />
      <Footer />
    </>
  )
}
