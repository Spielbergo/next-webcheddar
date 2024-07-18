import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { navigation, socialIcons } from '../data'; // Importing navigation and socialIcons data
import services from '../data/services'; // Importing services data
import styles from './navigation.module.css';
import Socials from '../components/SocialIcons.component';
import NavLogoWhite from '../public/logos/logo-light.png';
import NavLogoBlack from '../public/logos/logo-dark.png';
import Button from './Button.component';

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
        setSubLinkToggleOpen(false);
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
    if (subLinkToggleOpen) setSubLinkToggleOpen(false); // Close submenu if open
  };

  const handleSubLinkToggle = () => {
    setSubLinkToggleOpen(prevState => !prevState);
  };

  const handleCloseMobileNav = () => {
    setMobileToggleOpen(false);
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

  const handleSubLinkClick = () => {
    setMobileToggleOpen(false); // Close the mobile menu
    setSubLinkToggleOpen(false); // Close the submenu when a submenu item is clicked
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
              aria-label="Web Cheddar logo"
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
                <li key={nav.id} className={styles.main_nav__subLinks__parent}
                    onMouseEnter={nav.id === 'services' ? () => setSubLinkToggleOpen(true) : null}
                    onMouseLeave={nav.id === 'services' ? () => setSubLinkToggleOpen(false) : null}
                    onClick={nav.id === 'services' ? handleSubLinkToggle : handleCloseMobileNav}>
                  {nav.id === 'services' ? (
                    <span className={styles.nav_item}>{nav.anchor}</span>
                  ) : (
                    <Link href={nav.link} className={router.pathname === nav.link ? styles.active : ''} onClick={handleCloseMobileNav}>{nav.anchor}</Link>
                  )}
                  {nav.subLinks && nav.subLinks.length > 0 && (
                    <ul className={`${styles.main_nav__subLinks} shadow ${subLinkToggleOpen ? styles.main_nav__sublinks_visible : ''}`}>
                      {nav.subLinks.map(subLink => (
                        <li key={subLink.id} onClick={handleSubLinkClick}>
                          <Link href={subLink.link} className={router.pathname === subLink.link ? styles.active : ''}>
                            <span data-hover={subLink.anchor}>{subLink.anchor}</span>
                          </Link>
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
                <Link href={socials.link} target="_blank" rel="noopener nofollow noreferrer" title={socials.title} aria-label={socials.title} className={styles.main_nav__social_icons_false}><socials.icon /></Link>
              </li>
            ))}
            <li>
              <Button
                variant="get_a_quote"
                onClick={() => router.push('/contact')}>
                Get a Quote
              </Button>
            </li>
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
