import Image from "next/image";

import { servicePageOne, servicePageTwo } from "../constants";

import ContactSection from "../components/ContactSection.component";
import ServicesPage from "../components/home/Services.module";
import TestimonialSlider from "../components/TestimonialSlider.component";

import styles from '../styles/services-page.module.css';

import contactImage from '../assets/images/hero/header.webp';

const Services = () => {
    return (
        <>
        <header className={`"page_header" ${styles.contact_page__header}`}>
            <div className="page_header__text">
                <h1 className="page_header__h1">Services</h1>
            </div>
            <Image 
                src={contactImage}
                className="page_header__image"
                alt="Header image - code on a screen wth an orange overlay" 
                width="1920" 
                height="400"
                priority 
            />   
        </header>

        <ServicesPage />

        {servicePageOne.map((servicesOne) => 
            <section className={styles.services_page__section}>
                <div className={servicesOne.class}>
                    <div>
                        <h2 className="section_title_01">{servicesOne.title}</h2>
                        <h3 className="section_title_02">{servicesOne.subtitle}</h3>
                        <p className="section_text">{servicesOne.text}</p>
                    </div>
                    <Image 
                        src={contactImage}
                        className="shadow"
                        alt="Header image - code on a screen wth an orange overlay" 
                        width="600" 
                        height="400"
                        priority 
                    />   
                </div>
            </section>
        )}

        {/* Contact Section */}
        <ContactSection />

        {servicePageTwo.map((servicesTwo) => 
            <section className={styles.services_page__section}>
                <div className={servicesTwo.class}>
                    <div>
                        <h2 className="section_title_01">{servicesTwo.title}</h2>
                        <h3 className="section_title_02">{servicesTwo.subtitle}</h3>
                        <p className="section_text">{servicesTwo.text}</p>
                    </div>
                    <Image 
                        src={contactImage}
                        className="shadow"
                        alt="Header image - code on a screen wth an orange overlay" 
                        width="600" 
                        height="400"
                        priority 
                    />   
                </div>
            </section>
        )}

        <TestimonialSlider />
        
        </>
    )
}

export default Services;