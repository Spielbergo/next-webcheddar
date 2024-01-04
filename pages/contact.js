import ContactForm from "../components/contactForm";
import GoogleMaps from "../components/googleMaps.component";
import { contactDetails } from "../constants/index"

import styles from "../styles/contact_page.module.css";

const Contact = () => {
    return (
        <section>
            <div className={styles.contact_page__container}>
                <div className={styles.contact_page__title}>
                    <h1 className="section_title_01">Contact</h1>
                    <h2 className="section_title_02">Get in Touch Us</h2>
                    <p className="section_text">Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom</p>
                </div>

                {/* Contact Details */}
                <div className={styles.contact_page__form_container}>
                    <div className={styles.contact_page__details}>
                        <ul>
                            {contactDetails.map((contact) =>
                                <li key={contact.id}>
                                    {contact.detail}
                                </li>
                            ) }
                        </ul>
                    </div>

                    {/* Form */}
                    <div className={styles.contact_page__form}>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <GoogleMaps />
        </section>
        
    )
}

export default Contact;