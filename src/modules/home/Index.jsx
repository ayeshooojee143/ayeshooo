import DeluxeSection from './sections/deluxe-section/DeluxeSection'
import PropertySection from './sections/property-section/PropertySection'
import './home.css'
import AboutOne from './sections/about-section/AboutOne';
import CounterSection from './sections/counter-section/CounterSection';
import ServiceSection from './sections/service-section/ServiceSection';
import FeaturedProperties from './sections/featured-properties/FeaturedProperties';
import VideoSection from './sections/video-section/VideoSection';
import CardSlider from './sections/card-slider/CardSlider';
import FacilitiesSection from './sections/facilities/FacilitiesSection'
import ClientTerminal from './sections/client-terminal/ClientTerminal'
import HeroSection from './sections/hero-section/HeroSection';


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
