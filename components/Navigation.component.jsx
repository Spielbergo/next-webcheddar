import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Router from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { navigation, socialIcons } from '../constants';
import styles from '../styles/navigation.module.css';
import Socials from '../components/SocialIcons.component';
import Button from './Button.component';
import NavLogoWhite from '../assets/images/logos/web-cheddar-logo-white.png';
import NavLogoBlack from '../assets/images/logos/web-cheddar-logo-black.png';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileToggleOpen, setMobileToggleOpen] = useState(false);
  const navRef = useRef();
  const router = useRouter();

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

  const handleMobileToggle = () => {
      setMobileToggleOpen(prevState => !prevState);
  };

  return (
    <nav ref={navRef} className={`${styles.main_nav__nav} ${scrolled ? styles.main_nav__scrolled : ''} ${mobileToggleOpen ? styles.main_nav__container_grey : ''}`}>
      <div className={`${styles.main_nav__container} ${scrolled ? styles.main_container__scrolled : ''}`}>
        <div>
          <Link href="/">            
              <Image
                src={NavLogoWhite}
                className={styles.main_nav__logo}
                alt="Web Cheddar logo"
                width="150"
                height="50"
                priority
              />
          </Link>
        </div>

        <div className={styles.main_nav__links_container}>
          <div>
            <ul className={`${styles.main_nav__navLinks} ${mobileToggleOpen ? styles.main_nav__navLinks_visible : ''}`}>
              {navigation.map((nav) => (
                <li key={nav.id} onClick={() => setMobileToggleOpen(false)}>
                  <Link href={nav.link} 
                        className={router.pathname === nav.link ? styles.active : ''}>{nav.anchor}
                  </Link>
                </li>
              ))}
              <span className={styles.main_nav__mobile_links}>
                <li><Socials /></li>
              </span>
            </ul>
          </div>
        
          <ul className={styles.main_nav__social_icons}>
            {socialIcons.map((socials) => (
              <li key={socials.id}>
                <Link href={socials.link} target="_blank" rel="noopener nofollow noreferrer" title={socials.title} aria-label={socials.title} className={styles.main_nav__social_icons_false}><socials.icon /></Link></li>
            ))}
            {/* <li>
                <Button
                    className={styles.main_nav__social_icons_false}
                    onClick={() => Router.push('contact')}>
                    Get a Quote
                </Button>
            </li> */}
            <li className={styles.main_nav__toggle} onClick={handleMobileToggle}>
              <div className={styles.hamburger}>
                <div className={`${styles.bar} ${mobileToggleOpen ? styles.bar1_open : ''}`}></div>
                <div className={`${styles.bar} ${mobileToggleOpen ? styles.bar2_open : ''}`}></div>
                <div className={`${styles.bar} ${mobileToggleOpen ? styles.bar3_open : ''}`}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
