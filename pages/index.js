import Hero from '../components/home/hero.module';
import Clients from '../components/home/clients.module';
import Services from '../components/home/services.module';
import ContactSection from '../components/home/contactSection.modue';
import OurWork from '../components/home/our-work.module';
import WhyChooseUs from '../components/home/why-choose-us.module';
import TestimonialSlider from '../components/TestimonialSlider.component';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Home = ({ posts }) => {
  return (    
    <>
      <Hero />  
      <Clients />       
      <WhyChooseUs />
      <Services />
      <ContactSection />
      <OurWork />      
      <TestimonialSlider />
    </>
  )
}

export default Home;
