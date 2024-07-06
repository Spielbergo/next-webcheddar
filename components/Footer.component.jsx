import Image from "next/image";
import Link from "next/link";

import { navigation, featuredBlogs } from "../data";

import Clients from "./Clients.component";
import Address from "./Address.component";

import styles from "./footer.module.css";

import FooterLogoWhite from '../assets/images/logos/web-cheddar-logo-white.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        // Footer
        <footer className={styles.footer}>
            <Clients />
            
            <div className={styles.footer__container}>
                {/* Image */}
                <div className={styles.footer__image}>
                    <Link href="/">
                        <picture>
                            {/* <source srcSet={FooterLogoWhite.src} media="(prefers-color-scheme: dark)" /> */}
                            <Image 
                                src={FooterLogoWhite}
                                className={styles.footer__logo} 
                                alt="Web Cheddar logo" 
                                aria-label="Web Cheddar logo"
                                width="250" 
                                height="75"
                            />                  
                        </picture>
                    </Link>

                    {/* Contact Info */}
                    <Address />
                </div>   

                {/* Column 1 */}
                <div className={styles.footer__links}>
                    <h2>Navigate</h2>
                    <ul className="list-none">
                        {navigation.map((nav) => 
                            <li key={nav.id}>
                                <Link href={nav.link}>{nav.anchor}</Link>
                            </li>  
                        )}
                        <li><Link href='/sitemap'>Sitemap</Link></li>
                    </ul>
                </div>    

                {/* Column 2 */}
                <div className={styles.footer__links}>
                    <h2>Policies</h2>
                    <ul className="list-none">
                        <li><Link href='/privacy-policy'>Privacy Policy</Link></li>
                        <li><Link href='/gdpr-policy'>GDPR</Link></li>
                        <li><Link href=''>Terms and Conditions</Link></li>
                    </ul>
                </div>   

                {/* Column 3 */}
                <div className={styles.footer__links}>
                    <h2>Blogs</h2>
                    <ul className="list-none">
                        {featuredBlogs.map((blog) => 
                            <li key={blog.id}>
                                <Link href={blog.url}>{blog.anchor}</Link>
                            </li>  
                        )}
                    </ul>
                </div>   
            </div>

            {/* Copyright */}
            <div className={`${styles.footer__container} ${styles.footer__copyright}`}>
                <small>&copy; Copyright {year}, Web Cheddar</small>
            </div>
        </footer>
    )
}

export default Footer;
