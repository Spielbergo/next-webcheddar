import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../Button.component';

import { servicesHome } from '../../constants/index';

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
                {servicesHome.map((service) => (
                    <div key={service.id} className={`${styles.services_home__card} ${styles.shadow}`}>
                        <div className={styles.services_home__icon}>
                            <service.icon />
                        </div>
                        <h2>{service.title}</h2>
                        
                        <div className={styles.services_home__card_text}>
                            <p className='section-text'>{service.text}</p>
                        </div>
                        {/* <div>
                            <Button 
                                variant="default__home" 
                                onClick={() => Router.push('services')}>
                                Read More
                            </Button>
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services;
