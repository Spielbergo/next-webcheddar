import Image from 'next/image';
import Link from 'next/link';
import { DiAndroid } from "react-icons/di";

import Address from './Address.component';
import ContactForm from './ContactForm.component';

import styles from '../styles/contact-section.module.css';

import { contactSection } from '../constants/index';

 const ContactSection = () => {
    return (
        <section className={styles.contact_section__section}>
            <div className={styles.contact_section__container}>
                <div>
                    <div className={styles.contact_section__text}>
                        <h2 className="section_title_01">Contact</h2>
                        <h3 className="section_title_02">Get in Touch Us</h3>
                        <p className="section_text">Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom</p>
                    </div>

                    {/* Contact Info */}
                    <Address />
                </div>

                {/* Form */}
                <div className={styles.contact_section__form}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactSection;