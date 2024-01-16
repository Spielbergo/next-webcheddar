import Image from "next/image";
import contactImage from '../assets/images/hero/header.webp';

import Address from "../components/Address.conponent";
import ContactForm from "../components/ContactForm.component";
import GoogleMaps from "../components/GoogleMaps.component";

import { contactDetails } from "../constants/index"

import styles from "../styles/contact-page.module.css";

const Contact = () => {
    return (
        <>
        <header className="header">
            <div className={styles.contact_page__header_text}>
                <h1 className={styles.contact_page__h1}>Contact Us</h1>
            </div>
            <Image 
                src={contactImage}
                className={styles.header__main_image} 
                alt="Header image - code on a screen wth an orange overlay" 
                width="1920" 
                height="400"
                priority 
            />   
        </header>
        <section>
            <div className={styles.contact_page__container}>
                {/* <div className={styles.contact_page__title}>
                    <h1 className="section_title_01">Contact</h1>
                    <h2 className="section_title_02">Get in Touch Us</h2>
                    <p className="section_text">Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom</p>
                </div> */}

                {/* Contact Details */}
                <div className={styles.contact_page__form_container}>
                    <div className={styles.contact_page__details}>
                        <div className={styles.contact_page__text}>
                            <h1 className="section_title_01">Contact</h1>
                            <h2 className="section_title_02">Get in Touch</h2>
                            <p className="section_text">Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom</p>
                        </div>
                        <Address />
                    </div>

                    {/* Form */}
                    <div className={styles.contact_page__form}>
                        <h2 className="section_title_03">Contact</h2>
                        <p className="section_text">Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <GoogleMaps />
        </section>
        </>
    )
}

export default Contact;