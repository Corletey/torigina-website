import React from 'react'
import Hero from './components/hero'
import SamsungUltraSoundProducts from './components/samsungUltrasoundProducts.jsx'
import SamsungXrayProducts from './components/samsungXrayProducts'
import RequestDemo from './components/demo.jsx'


const Samsungs = () => {
  return (
    <div>
      <Hero />
      <RequestDemo />
      <SamsungUltraSoundProducts />
      <SamsungXrayProducts />
    </div>
  )
}

export default Samsungs