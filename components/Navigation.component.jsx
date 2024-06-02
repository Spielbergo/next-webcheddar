import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { navigation, socialIcons } from '../data'; // Importing navigation and socialIcons data
import services from '../data/services'; // Importing services data
import styles from '../styles/navigation.module.css';
import Socials from '../components/SocialIcons.component';
import NavLogoWhite from '../assets/images/logos/web-cheddar-logo-white.png';
import NavLogoBlack from '../assets/images/logos/web-cheddar-logo-black.png';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileToggleOpen, setMobileToggleOpen] = useState(false);
  const [subLinkToggleOpen, setSubLinkToggleOpen] = useState(false);
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

  const handleSubLinkToggleEnter = () => {
    setSubLinkToggleOpen(true);
  };

  const handleSubLinkToggleLeave = () => {
    setSubLinkToggleOpen(false);
  };

  // Clone the navigation array to avoid modifying the original data
  const navItems = JSON.parse(JSON.stringify(navigation));

  // Find the services item in the navigation array
  const servicesNavItem = navItems.find(item => item.id === 'services');
  
  // Populate subLinks dynamically from services
  servicesNavItem.subLinks = services.map(service => ({
    id: service.slug,
    anchor: service.title,
    link: `/services/${service.slug}`, // Ensure the link points to the correct path
  }));

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
              {navItems.map((nav) => (
                <li key={nav.id} className={styles.subLinks__parent} 
                    onMouseEnter={nav.id === 'services' ? handleSubLinkToggleEnter : null}
                    onMouseLeave={nav.id === 'services' ? handleSubLinkToggleLeave : null}
                    onClick={() => setMobileToggleOpen(false)}>
                  <Link href={nav.link} className={router.pathname === nav.link ? styles.active : ''}>{nav.anchor}</Link>
                  {nav.subLinks && nav.subLinks.length > 0 && (
                    <ul className={`${styles.subLinks} ${subLinkToggleOpen ? styles.main_nav__sublinks_visible : ''}`}>
                      {nav.subLinks.map(subLink => (
                        <li key={subLink.id}>
                          <Link href={subLink.link} className={router.pathname === subLink.link ? styles.active : ''}>{subLink.anchor}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
