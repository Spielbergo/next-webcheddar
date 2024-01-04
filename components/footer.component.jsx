import Image from "next/image";
import Link from "next/link";

import { navigation } from "../constants";
import { contactDetails } from "../constants";

import ContactForm from './contactForm';
import SocialIcons from "./socialIcons.component";

import styles from "../styles/footer.module.css";

import FooterLogoWhite from '../assets/images/logos/web-cheddar-badge-logo-white.png';
import FooterLogoBlack from '../assets/images/logos/web-cheddar-badge-logo-black.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                {/* Image */}
                <div className={styles.footer__image}>
                    <Link href="/">
                    <picture>
                        <source srcSet={FooterLogoWhite.src} media="(prefers-color-scheme: dark)" />
                        <Image 
                        src={FooterLogoBlack}
                        className={styles.main_nav__logo} 
                        alt="Web Cheddar Badge logo" 
                        width="150" 
                        height="150"
                        priority 
                        />                  
                    </picture>
                    </Link>
                </div>                                            

                {/* Contact Info */}
                <div className={styles.footer__contact}>
                    <ul className="list-none">
                        {contactDetails.map((contact) => 
                        <li key={contact.id}>
                            {contact.detail}
                        </li>
                        )}
                    </ul>
                    <SocialIcons />
                </div>

                {/* Links */}
                <div className={styles.footer__links}>
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
        </footer>
    )
}

export default Footer;