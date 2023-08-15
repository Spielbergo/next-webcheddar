import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from '../styles/navigation.module.css';

import NavLogoWhite from '../assets/images/logos/web-cheddar-logo-white.png';
import NavLogoBlack from '../assets/images/logos/web-cheddar-logo-black.png';

const Navigation = () => {
    return (
        <>
          <nav className={styles.main_nav__nav}>
            <div className={styles.main_nav__container}>
              {/* Nav Logo */}
              <div>
              <picture>
                <source srcSet={NavLogoWhite.src} media="(prefers-color-scheme: dark)" />
                <Image 
                  src={NavLogoBlack}
                  className={styles.main_nav__logo} 
                  alt="Web Cheddar logo" 
                  width="150" 
                  height="50"
                  priority 
                />
              </picture>
              </div>
              {/* Nav Links */}
              <div>
                <ul className={styles.main_nav__navLinks}>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* Social Icons */}
              <div>
                <ul className={styles.main_nav__social_icons}>
                  <li><FaFacebookF /></li>
                  <li><FaInstagram /></li>
                  <li><FaLinkedin /></li>
                </ul>
              </div>
              {/* Mobile Nav Menu Toggle */}
              
              <div className={styles.main_nav__toggle}>x</div>
            </div>
          </nav>
        </>
      )
};
  
export default Navigation;