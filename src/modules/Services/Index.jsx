import React from 'react'
import HeroSection from './sections/hero-section/HeroSection'
import AboutOne from './sections/about-section/AboutOne'
import ServicesSection from './sections/services-section/ServicesSection'
import CommitmentSection from './sections/commitment-section/CommitmentSection'

import PricingSection from './sections/PricingSection'
import ClientsLoveSection from './sections/ClientsLoveSection'

function Index() {
    return (
        <>
            <HeroSection />

            <div className="container mx-auto">
                <AboutOne />
                
                
                
            </div>
            <ServicesSection />
           
            <div className='container mx-auto'>
                 <CommitmentSection />
                 <PricingSection/>
                <ClientsLoveSection/>
            </div>
        </>
    )
}

export default Index
