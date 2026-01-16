import ContactForm from "./sections/form/ContactForm"
import HeroSection from "./sections/hero-section/HeroSection"


function Index() {
    return (
        <>
            <HeroSection />
            <div className="container mx-auto">
                <ContactForm />
            </div>

        </>
    )
}

export default Index
