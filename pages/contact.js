import ContactForm from "../components/ContactForm";
import GoogleMaps from "../components/googleMaps.component";
import { contactDetails } from "../constants/index"

import styles from "../styles/contact_page.module.css";

const Contact = () => {
    return (
        <section>
            <div className={styles.contact_page__container}>
                <h1 className={styles.contact_page__title}>Contact Us</h1>
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