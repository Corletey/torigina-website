import React from 'react'
import HeroSection from './components/hero'
import AboutUs from './components/aboutUs'
import AboutTorigina from './components/torigina'
import OperationalAreas from './components/areas'

const AboutPage = () => {
  return (
    <div>
        <HeroSection />
        <AboutTorigina />
        <AboutUs />
        <OperationalAreas />
    </div>
  )
}

export default AboutPage