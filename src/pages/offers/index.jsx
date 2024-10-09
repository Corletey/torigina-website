import React from 'react'
import Hero from './components/hero'
import ImagingSolutions from './components/imagingSoln'
import MedicalConsumables from './components/consumables'
import Refurbishments from './components/refurbishment'
import MedikalzServices from './components/medikalz'

const ServicesPage = () => {
  return (
    <div>
        <Hero />
        <ImagingSolutions />
        <MedicalConsumables />
        <MedikalzServices />
        <Refurbishments />
    </div>
  )
}

export default ServicesPage