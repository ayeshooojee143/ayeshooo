import DeluxeSection from './sections/deluxe-section/DeluxeSection'
import PropertySection from './sections/property-section/PropertySection'
import './home.css'
import AboutOne from './sections/about-section/AboutOne.jsx';
import CounterSection from './sections/counter-section/CounterSection.jsx';
import ServiceSection from './sections/service-section/ServiceSection.jsx';
import FeaturedProperties from './sections/featured-properties/FeaturedProperties.jsx';
import VideoSection from './sections/video-section/VideoSection.jsx';
import CardSlider from './sections/card-slider/CardSlider.jsx';
import FacilitiesSection from './sections/facilities/FacilitiesSection.jsx'
import ClientTerminal from './sections/client-terminal/ClientTerminal.jsx'
import HeroSection from './sections/hero-section/HeroSection.jsx';


function index() {
  return (
    <>
      <HeroSection />
      <AboutOne />
      <CounterSection />
      <PropertySection />
      <ServiceSection />
      <FeaturedProperties />
      <DeluxeSection/>
      <VideoSection />
      <FacilitiesSection />
      <CardSlider />
      <ClientTerminal />
    </>
  )
}

export default index
