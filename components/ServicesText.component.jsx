import Image from 'next/image';
import styles from '../styles/services-page.module.css';
import contactImage from '../assets/images/hero/header.webp';

const ServicesText = ({ service }) => {
    return (
        <section key={service.id} className={styles.services_page__section}>
            <div className={service.class}>
                <div>
                    <h2 className="section_title_01">{service.title}</h2>
                    <h3 className="section_title_02">{service.subtitle}</h3>
                    <p className="section_text">{service.text}</p>
                </div>
                <Image 
                    src={contactImage}
                    className="shadow"
                    alt="Header image - code on a screen with an orange overlay" 
                    width="600" 
                    height="400"
                    priority 
                />
            </div>
        </section>
    );
}

export default ServicesText;
