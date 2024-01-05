import Image from 'next/image';
import Link from 'next/link';
import { DiAndroid } from "react-icons/di";

import styles from './services.module.css';

import { servicesHome } from '../../constants/index';

 const Services = () => {
    return (
        <section>
            <div className={styles.services_home__titles}>
                <h2 className="section_title_01">Services</h2>
                <h3 className="section_title_02">Our Services</h3>
            </div>

            <div className={styles.services_home__container}>
            {servicesHome.map((services) => 
                <div key={services.id} className={`${styles.services_home__card} ${styles.shadow}`}>
                    <Image  
                        src={services.image}
                        alt={services.title}
                        width={250}
                        height={100}
                    />
                    <h2>{services.title}</h2>
                    <p>{services.text}</p>
                    {/* <Link href={services.path} className='button'>Read More</Link> */}
                </div>
            )}
            </div>
        </section>
    )
}

export default Services;