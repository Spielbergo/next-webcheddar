import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaPhone, FaEnvelope } from "react-icons/fa";
import { navigation, socialIcons } from '../constants';

import styles from '../styles/navigation.module.css';

import NavLogoWhite from '../assets/images/logos/web-cheddar-logo-white.png';
import NavLogoBlack from '../assets/images/logos/web-cheddar-logo-black.png';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileToggleOpen, setMobileToggleOpen] = useState(false);

  const navRef = useRef(); // Ref for the navigation menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && mobileToggleOpen) {
        setMobileToggleOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileToggleOpen]);

  const handleMobileToggle = (close = false) => {
    setMobileToggleOpen(prevCheck => close ? false : !prevCheck);
  };

  return (
    <>  
      <nav ref={navRef} className={`${styles.main_nav__nav} ${scrolled ? styles.main_nav__scrolled : ''}`}>
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
              <ul className={`${styles.main_nav__navLinks} ${mobileToggleOpen ? styles.main_nav__navLinks_visible : ''}`}>
                {navigation.map((nav) =>                
                  <li key={nav.id} onClick={() => handleMobileToggle(true)}>
                    <Link href={nav.link}>{nav.anchor}</Link>
                  </li>                  
                )}
                <span className={styles.main_nav__mobile_links}>
                  <li onClick={() => handleMobileToggle(true)}><FaPhone /></li>
                  <li onClick={() => handleMobileToggle(true)}><FaEnvelope /></li>
                </span>
              </ul>
            </div>
          </div>
          <div>
            {/* Social Icons */}
            <div>
              <ul className={styles.main_nav__social_icons}>
              {socialIcons.map((socials) =>
                <li key={socials.id}><a href={socials.link} target="_blank" rel="noopener nofollow noreferrer" title={socials.title} aria-label={socials.title} ><socials.icon /></a></li>
              )}   
              {/* Mobile Nav Menu Toggle */}              
              <li className={styles.main_nav__toggle} onClick={() => handleMobileToggle()}>{mobileToggleOpen ? 'X' : 'Menu'}</li>                                    
              </ul>                    
            </div>                  
          </div>
        </div>
      </nav>
    </>
  );
};
  
export default Navigation;
