import React from 'react'
import Hero from './components/hero'
import ImagingSolutions from './components/imagingSoln'
import MedicalConsumables from './components/consumables'
import Refurbishments from './components/refurbishment'
import MedikalzServices from './components/medikalz'
import TitusMedicalPartnership from './components/titus'
import ReapSolutions from './components/reapSoln'
import Analyticon from './components/analyticon'

const ServicesPage = () => {
  return (
    <div>
        <Hero />
        <ImagingSolutions />
        <MedicalConsumables />
        <MedikalzServices />
        <TitusMedicalPartnership />
        <ReapSolutions />
        <Analyticon />
        <Refurbishments />
    </div>
  )
}

export default ServicesPage