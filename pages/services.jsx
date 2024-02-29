// ServicesPage.component.jsx
import Image from 'next/image';

import { servicePageOne, servicePageTwo } from '../constants';

import Services from '../components/home/Services.component';
import ServiceText from '../components/ServicesText.component'; 
import ContactSection from '../components/ContactSection.component';
import TestimonialSlider from '../components/TestimonialSlider.component';

import styles from '../styles/services-page.module.css';
import contactImage from '../assets/images/hero/header.webp';

const ServicesPage = () => {
    return (
        <>
            <header className={`"page_header" ${styles.contact_page__header}`}>
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
            </header>

            <Services />            

            {servicePageOne.map(service => <ServiceText key={service.id} service={service} />)}
            
            <ContactSection />
            
            {servicePageTwo.map(service => <ServiceText key={service.id} service={service} />)}

            <TestimonialSlider />
        </>
    );
}

export default ServicesPage;
