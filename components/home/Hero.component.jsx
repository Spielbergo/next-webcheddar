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
                    <h1 className={styles.hero__h1}>Web Cheddar - Websites - Social Media</h1>
                    <h2 className={styles.hero__h2}>Quality Digital Services Your Business Needs</h2>
                    <div className={styles.hero__button_container}>
                        <div>
                            <Button 
                                variant="default__home" 
                                onClick={() => Router.push('services')}>
                                Our Services
                            </Button>
                        </div>  
                        <div>
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
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority 
                />                
            </div>
        </header>
    )
}

export default Hero;
