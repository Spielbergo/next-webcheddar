import Image from 'next/image';
import styles from '../styles/services-page.module.css';
// import contactImage from '../assets/images/hero/header.webp';

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
                    src={service.image}
                    className="shadow"
                    alt={service.alt} 
                    aria-label={service.alt} 
                    width="600" 
                    height="400"
                />
            </div>
        </section>
    );
}

export default ServicesText;
