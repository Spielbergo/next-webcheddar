import Head from 'next/head';

import Hero from '../components/home/Hero.component';
import Clients from '../components/Clients.component';
import Services from '../components/Services.component';
import TechStack from '../components/TechStack.component';
import ContactSection from '../components/ContactSection.component';
import OurWork from '../components/home/OurWork.component';
import WhyChooseUs from '../components/home/WhyChooseUs.component';
import TestimonialSlider from '../components/TestimonialSlider.component';

const Home = ({ posts }) => {
  return (        
    <>
    <Head>
        <meta name="description" content='Web Cheddar - Websites - Social Media 🧀 Expert web design services for businesses of all sizes. Enhance your online presence.'></meta>
        <meta property="og:description" content='Web Cheddar - Websites - Social Media 🧀 Expert web design services for businesses of all sizes. Enhance your online presence.'></meta>
    </Head>
    <Hero />
    <main>
      <Clients />       
      <WhyChooseUs />
      <Services />
      <TechStack />
      <ContactSection style={{ margin: '65px 0 35px' }} />
      <OurWork />      
      <TestimonialSlider />
    </main>
    </>
  )
}

export default Home;