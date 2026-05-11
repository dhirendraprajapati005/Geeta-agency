import HeroPage from "../components/HeroPage"
import HowItWorks from "../components/HowItWorks"
import LeadForm from "../components/LeadForm"
import Testimonials from "../components/Testimonial"
import TrustStrip from "../components/TrustStrip"
import WhyUs from "../components/WhyUs"



const Home = () => {
  return (
    <div>
        <HeroPage/>
        <TrustStrip/>
        <WhyUs/>
        <HowItWorks/>
        <Testimonials/>
        <LeadForm/>
    </div>
  )
}

export default Home