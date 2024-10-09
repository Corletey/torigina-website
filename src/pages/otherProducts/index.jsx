import React from 'react'
import Agfa from "./components/agfa"
import Cingol from "./components/cingol"
import Fujifilm from "./components/fujifilm"
import GE from "./components/ge"
import Medem from "./components/medem"
import Mindray from "./components/mindray"
import Mikron from "./components/mikron"
import Philips from "./components/philips"
import Siemens from "./components/siemens"
import Sony from "./components/sony"
import BrandCards from "./components/cards"
import Hero from "./components/hero"

const OtherBrands = () => {
  return (
    <div>
      <Hero/>
      <BrandCards/>
      <Agfa/>
      <Cingol/>
      <Fujifilm/>
      <GE/>
      <Medem/>
      <Mindray/>
      <Mikron/>
      <Philips/>
      <Sony/>
      <Siemens/>
    </div>
  )
}

export default OtherBrands