import Hero from '../components/home/Hero.component';
import Clients from '../components/Clients.component';
import Services from '../components/home/Services.component';
import TechStack from '../components/TechStack.component';
import ContactSection from '../components/ContactSection.component';
import OurWork from '../components/home/OurWork.component';
import WhyChooseUs from '../components/home/WhyChooseUs.component';
import TestimonialSlider from '../components/TestimonialSlider.component';

const Home = ({ posts }) => {
  return (        
    <>
      <Hero />  
      <Clients />       
      <WhyChooseUs />
      <Services />
      <TechStack />
      <ContactSection />
      <OurWork />      
      <TestimonialSlider />
    </>
  )
}

export default Home;