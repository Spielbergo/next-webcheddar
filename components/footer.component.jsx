import Image from "next/image";
import Link from "next/link";

import { contactDetails, navigation } from "../constants";

import Clients from "./Clients.component";
import Address from "./Address.conponent";
import ContactForm from './ContactForm.component';

import styles from "../styles/footer.module.css";

import FooterLogoWhite from '../assets/images/logos/web-cheddar-logo-white.png';
import FooterLogoBlack from '../assets/images/logos/web-cheddar-logo-black.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={styles.footer}>
            <Clients />
            
            <div className={styles.footer__container}>
                {/* Image */}
                <div className={styles.footer__image}>
                    <Link href="/">
                        <picture>
                            <source srcSet={FooterLogoWhite.src} media="(prefers-color-scheme: dark)" />
                            <Image 
                                src={FooterLogoBlack}
                                className={styles.footer__logo} 
                                alt="Web Cheddar Badge logo" 
                                width="250" 
                                height="75"
                                priority 
                            />                  
                        </picture>
                    </Link>

                    {/* Contact Info */}
                    <Address />
                </div>   

                {/* Links */}
                <div className={styles.footer__links}>
                    <h2>Navigate</h2>
                    <ul className="list-none">
                        {navigation.map((nav) => 
                            <li key={nav.id}>
                                <Link href={nav.link}>{nav.anchor}</Link>
                            </li>  
                        )}
                        <li>Sitemap</li>
                    </ul>
                </div>    

                {/* Links */}
                <div className={styles.footer__links}>
                    <h2>Policies</h2>
                    <ul className="list-none">
                        <li>Privacy Policy</li>
                        <li>GDPR</li>
                        <li>Terms & Conditions</li>
                        <li>Sitemap</li>
                    </ul>
                </div>   

                {/* Links */}
                <div className={styles.footer__links}>
                    <h2>Navigate</h2>
                    <ul className="list-none">
                        {navigation.map((nav) => 
                            <li key={nav.id}>
                                <Link href={nav.link}>{nav.anchor}</Link>
                            </li>  
                        )}
                        <li>Sitemap</li>
                    </ul>
                </div>   

                {/* Contact Form */}
                {/* <div>
                    <ContactForm />
                </div> */}
            </div>

            {/* Copyright */}
            <div className={`${styles.footer__container} ${styles.footer__copyright}`}>
                <small>&copy; Copyright {year}, Web Cheddar</small>
            </div>
        </footer>
    )
}

export default Footer;