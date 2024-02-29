import Image from "next/image";

import { useRouter } from 'next/router';
 
import heroImage from '../../assets/images/hero/header.webp';
import Button from "../Button.component";

import styles from './hero.module.css';

const Hero = () => {
    const router = useRouter()
    return (
        <section>            
            <div className={styles.hero__container}>
                <div className={styles.hero__title}>
                    <h1 className={styles.hero__h1}>Web Cheddar Web Solutions</h1>
                    <h2 className={styles.hero__h2}>Quality Digital Services Your Business Needs</h2>
                    <Button 
                        variant="default__home" 
                        onClick={() => router.push('/services')}>
                        Our Services
                    </Button>
                </div>
                <Image 
                    src={heroImage}
                    className={styles.hero__main_image} 
                    alt="Hero image - code on a screen wth an orange overlay" 
                    width="1920" 
                    height="1080"
                    priority 
                />                
            </div>
        </section>
    )
}

export default Hero;
