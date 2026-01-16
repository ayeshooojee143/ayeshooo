import { Server } from "lucide-react";
import HeroSection from "./sections/hero-section/HeroSection";
import PropertyTypes from "./sections/property-types/PropertyTypes";
import TeamSection from "./sections/Team/TeamSection";
import TrustedAdvisors from "./sections/trusted-advisers/TrustedAdvisors";
import ServicesSection from './sections/services/ServicesSection'
import PropertySection from './sections/property-section/PropertySection'

function Index() {
  return (
    <>
      <HeroSection />
      <PropertyTypes />
      <TrustedAdvisors />
      <TeamSection />
      <ServicesSection />
      <PropertySection />
    </>
  );
}

export default Index;
