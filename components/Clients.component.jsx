import Image from 'next/image';
import styles from '../styles/clients.module.css';
import { clientLogos } from '../data/index';

const Clients = () => {
    return (
        // Clients Section
        <section className={styles.client_section}>
            <div className={styles.client_logos__marquee}>
                <ul className={styles.client_logos__container}>
                    {clientLogos.map((client) =>
                        <li key={client.id} className={styles.client_logos__logo}>
                            <Image
                                src={client.image}
                                alt={client.alt}
                                width={125}
                                height={50}
                            />
                        </li>
                    )}
                </ul>
                {/* Duplicate the logos for the infinite loop effect only on mobile */}
                <ul className={`${styles.client_logos__container} ${styles.client_logos__container_duplicate}`}>
                    {clientLogos.map((client) =>
                        <li key={`${client.id}-duplicate`} className={styles.client_logos__logo}>
                            <Image
                                src={client.image}
                                alt={client.alt}
                                width={125}
                                height={50}
                            />
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Clients;
