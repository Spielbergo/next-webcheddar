import Hero from '../components/home/Hero.module';
import Clients from '../components/Clients.component';
import Services from '../components/home/Services.module';
import TechStack from '../components/TechStack.component';
import ContactSection from '../components/ContactSection.component';
import OurWork from '../components/home/OurWork.module';
import WhyChooseUs from '../components/home/WhyChooseUs.module';
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