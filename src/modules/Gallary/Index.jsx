import React from 'react'
import HeroSection from './Sections/hero-section/HeroSection'
import ImagesSection from "./Sections/ImgesSection/ImagesSection"
import FuterpropertySection from "./Sections/FuterpropertySection/FuturePropertySection"
import ClientsLoveSection from './ClientsLoveSection'

function index() {
  return (
    <div>
      <HeroSection/>
      <ImagesSection/>
      <FuterpropertySection/>
      <ClientsLoveSection/>
    </div>
  )
}

export default index
