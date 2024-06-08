import React from 'react';
import { useRouter } from 'next/router';

import Button from '../Button.component';

// import { servicesHome } from '../../data/index';
import services from '../../data/services';

import styles from './services.module.css';

const Services = () => {
    const Router = useRouter();
    return (
        <section>
            <div className={styles.services_home__titles}>
                <h2 className="section_title_01">Services</h2>
                <h3 className="section_title_02">Our Services</h3>
            </div>

            <div className={styles.services_home__container}>
                {services.map((service) => (
                    <div key={service.id} className={`${styles.services_home__card} shadow`}>
                        <div className={styles.services_home__icon}>
                            <service.icon />
                            {/* {services.icon} */}
                        </div>
                        <h2>{service.title}</h2>
                        
                        <div className={styles.services_home__card_text}>
                            <p className='section-text'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services;
