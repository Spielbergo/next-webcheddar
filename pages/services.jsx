import Head from 'next/head';

import { servicePageOne, servicePageTwo } from '../data';

import FeaturedImage from '../components/FeaturedImage.component';
import Layout from '../components/Layout';
import Services from '../components/Services.component';
import ServiceText from '../components/ServicesText.component'; 
import ContactSection from '../components/ContactSection.component';
import TestimonialSlider from '../components/TestimonialSlider.component';

const ServicesPage = () => {
    const featuredImage = (
        <FeaturedImage 
          title="Services" 
          imageSrc="/header.webp" 
          alt="Home Header Image" 
          aria-label="Services Page - Lines of code in the background"
        />
    );

    <Head>
        <title>Services - Web Cheddar - Websites - Social Media</title>
        <meta name="description" content='Services - Web Cheddar Websites - Social Media 🧀 Explore our web design services. From responsive design to SEO and e-commerce solutions.'></meta>
        <meta property="og:description" content='Services - Web Cheddar Websites - Social Media 🧀 Explore our web design services. From responsive design to SEO and e-commerce solutions.'></meta>
    </Head>

    return (
        <Layout featuredImage={featuredImage}> 
            <main>
                <Services />            

                {servicePageOne.map(service => <ServiceText key={service.id} service={service} />)}
                
                <ContactSection />
                
                {servicePageTwo.map(service => <ServiceText key={service.id} service={service} />)}

                <TestimonialSlider />
            </main>
        </Layout>
    );
}

export default ServicesPage;
