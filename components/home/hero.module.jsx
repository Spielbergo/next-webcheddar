import Image from "next/image";

import { useRouter } from 'next/router';
 
import heroImage from '../../assets/images/hero/header.webp';
import Button from "../button.component";

import styles from '../../styles/home.module.css';

const Hero = () => {
    const router = useRouter()
    return (
        <section>            
            <div className={styles.hero__container}>
                <div className={styles.hero__title}>
                    <h1>Web Cheddar</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maxime, rem molestias</h2>
                    <Button 
                        variant="default__home" 
                        onClick={() => router.push('/services')}>
                        Learn More
                    </Button>
                </div>
                <Image 
                    src={heroImage}
                    className={styles.hero__main_image} 
                    alt="Hero image code on a screen" 
                    width="1920" 
                    height="1080"
                    priority 
                />                
            </div>
        </section>
    )
}

export default Hero;