import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { navigation } from '../constants';

import styles from '../styles/navigation.module.css';

import NavLogoWhite from '../assets/images/logos/web-cheddar-logo-white.png';
import NavLogoBlack from '../assets/images/logos/web-cheddar-logo-black.png';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <>  
          <nav className={`${styles.main_nav__nav} ${scrolled ? styles.main_nav__scrolled : ''}`}>
            <div className={`${styles.main_nav__container} ${scrolled ? styles.main_container__scrolled : ''}`}>
              {/* Nav Logo */}
              <div>
                <Link href="/">
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
                </Link>
              </div>

              <div className={styles.main_nav__links_container}>
                {/* Nav Links */}
                <div>
                  <ul className={styles.main_nav__navLinks}>
                    {navigation.map((nav) =>                
                      <li key={nav.id}>
                        <Link href={nav.link}>{nav.anchor}</Link>
                      </li>                  
                    )}
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
            </div>
          </nav>
        </>
      )
};
  
export default Navigation;