
import Benefits from '@/presentation/pages/home/benefits/benefits'
import BusinesHistory from '@/presentation/pages/home/business-history/busines-history'
import Hero from '@/presentation/pages/home/hero/hero'
import Services from '@/presentation/pages/home/service/services'
import React from 'react'

export const MakeHome: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <BusinesHistory />
      <Benefits />
    </>
  )
}
