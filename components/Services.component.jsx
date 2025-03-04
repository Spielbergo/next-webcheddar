import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import services from '../data/services';

import { MdOutlineWeb, MdEvent, MdOutlineShoppingCart, MdOutlineQueryStats } from "react-icons/md";
import { IoSearchCircle, IoConstructOutline, IoCodeSlashSharp  } from "react-icons/io5";
import { TiSocialAtCircular } from "react-icons/ti";

import styles from './services.module.css';

const iconComponents = {
    IoCodeSlashSharp: IoCodeSlashSharp,
    MdOutlineWeb: MdOutlineWeb,
    IoSearchCircle: IoSearchCircle,
    IoConstructOutline: IoConstructOutline,
    TiSocialAtCircular: TiSocialAtCircular,
    MdOutlineShoppingCart: MdOutlineShoppingCart,
    MdEvent: MdEvent
};

const Services = () => {
    const Router = useRouter();
    return (
        <section>
            <div className={styles.services_home__titles}>
                <h2 className="section_title_01">Services</h2>
                <h3 className="section_title_02">Our Services</h3>
            </div>

            <div className={styles.services_home__container}>
                {services.map((service) => {
                    const IconComponent = iconComponents[service.icon];
                    return (
                        <div key={service.id} className={`${styles.services_home__card} ${service.class} shadow`}>                            
                            <div className={styles.services_home__icon}>
                                {IconComponent && <IconComponent />}
                            </div>
                            <Link href={service.path}>
                                <h2>{service.title}</h2>
                            </Link>
                            <div className={styles.services_home__card_text}>
                                <p className='section-text'>{service.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Services;
