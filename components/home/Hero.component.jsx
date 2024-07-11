import Image from "next/image";

import { useRouter } from 'next/router';
 
import heroImage from '../../public/header.webp';
import Button from "../Button.component";

import styles from './hero.module.css';

const Hero = () => {
    const Router = useRouter();
    
    return (
        // Hero
        <header>            
            <div className={styles.hero__container}>
                <div className={styles.hero__title}>
                    <h1 className={`${styles.hero__h1} slide-up`}>Web Cheddar - Websites - Social Media</h1>
                    <h2 className={`${styles.hero__h2} fade-in`}>Quality Digital Services Your Business Needs</h2>
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
                                onClick={() => Router.push('contact')}>
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
