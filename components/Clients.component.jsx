import Image from 'next/image';
import styles from '../styles/clients.module.css';

import { clientLogos } from '../constants/index';

 const Clients = () => {
    return (
        // Clients Section
        <section>
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
        </section>
    )
}

export default Clients;