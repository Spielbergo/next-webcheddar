import Image from "next/image";
import heroImage from '../../public/home/hero-bg-wave-2.webp';
// import heroImage from '../../public/header.webp';

import { useModal } from '../../contexts/ModalContext';

import Button from "../Button.component";

import styles from './hero.module.css';

const Hero = () => {
    const { openModal } = useModal(); // Get the openModal function from context
    
    return (
        // Hero
        <header>            
            <div className={styles.hero__container}>
                <div className={styles.hero__title}>
                    <p className={`${styles.hero__top_title} slide-up`}>Web Cheddar - Websites - Social Media</p>
                    <h1 className={`${styles.hero__h1} fade-in`}>Web Design & Development Services Your Business Needs</h1>
                    <div className={styles.hero__button_container}>
                        <div className='slide-up delay-1'>
                            <Button 
                                variant="default__home" 
                                onClick={() => Router.push('services')}>
                                Our Services
                            </Button>
                        </div>  
                        <div className='slide-up delay-2'>
                            <Button 
                                variant="outline" 
                                onClick={() => openModal('getAQuote')}>
                                Get a Quote
                            </Button>
                        </div>
                    </div>
                </div>
                <Image 
                    src={heroImage}
                    className={styles.hero__main_image} 
                    alt="Hero image - code on a screen wth an orange overlay" 
                    aria-label="Hero image - code on a screen wth an orange overlay" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority 
                />                
            </div>
        </header>
    )
}

export default Hero;
