// ServicesPage.component.jsx
import Image from 'next/image';

import { servicePageOne, servicePageTwo } from '../constants';

import Header from '../components/Header.component';
import Layout from '../components/Layout';
import Services from '../components/home/Services.component';
import ServiceText from '../components/ServicesText.component'; 
import ContactSection from '../components/ContactSection.component';
import TestimonialSlider from '../components/TestimonialSlider.component';

import styles from '../styles/services-page.module.css';
import contactImage from '../assets/images/hero/header.webp';

const ServicesPage = () => {
    const header = (
        <Header 
          title="Services" 
          imageSrc="/header.webp" 
          alt="Home Header Image" 
        />
    );

    return (
        <Layout header={header}> 
            {/* <header className="page_header">
                <div className="page_header__text">
                    <h1 className="page_header__h1">Services</h1>
                </div>
                <Image 
                    src={contactImage}
                    className="page_header__image"
                    alt="Header image - code on a screen with an orange overlay" 
                    width="1920" 
                    height="400"
                    priority 
                />
            </header> */}
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
