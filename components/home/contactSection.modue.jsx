import Image from 'next/image';
import Link from 'next/link';
import { DiAndroid } from "react-icons/di";

import ContactForm from '../ContactForm';
import { contactDetails } from '../../constants/index';
import SocialIcons from '../socialIcons.component';

import styles from '../../styles/contact_section.module.css';

import { contactSection } from '../../constants/index';

 const ContactSection = () => {
    return (
        <section className={styles.contact_section__section}>
            <div className={styles.contact_section__container}>
                <div className={styles.contact_section__text}>
                    <h2>Contact Us</h2>
                    <p>Lorem Ipsom FUCK YOU CALL US</p>
                    {/* Contact Info */}
                    <div>
                        <ul className="list-none">
                            {contactDetails.map((contact) => 
                            <li key={contact.id}>
                                {contact.detail}
                            </li>
                            )}
                        </ul>
                        <SocialIcons />
                    </div>
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