import HeroSection from "./components/hero"
import About from "./components/about"
import WhyChooseUs from "./components/why"
import Services from "./components/services"
// import Achievements from "./componerafcents/achievements"
import AssociatedBrands from "./components/brands"


const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <WhyChooseUs />
      <Services />
      {/* <Achievements /> */}
      <AssociatedBrands />
    </div>
  )
}

export default LandingPage