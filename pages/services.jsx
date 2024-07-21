// ServicesPage.component.jsx
import Image from 'next/image';

import { servicePageOne, servicePageTwo } from '../data';

import FeaturedImage from '../components/FeaturedImage.component';
import Layout from '../components/Layout';
import Services from '../components/Services.component';
import ServiceText from '../components/ServicesText.component'; 
import ContactSection from '../components/ContactSection.component';
import TestimonialSlider from '../components/TestimonialSlider.component';

import styles from '../styles/services-page.module.css';
// import contactImage from '../assets/images/hero/header.webp';

const ServicesPage = () => {
    const featuredImage = (
        <FeaturedImage 
          title="Services" 
          imageSrc="/header.webp" 
          alt="Home Header Image" 
          aria-label="Home Header Image"
        />
    );

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
