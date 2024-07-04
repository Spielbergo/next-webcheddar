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
        <meta name="description" content='TEST'></meta>
        <meta property="og:description" content='TEST2'></meta>
        {/* <meta property="og:site_name" content='Blog'></meta> */}
        {/* Add any other meta tags, link tags, etc. here */}
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